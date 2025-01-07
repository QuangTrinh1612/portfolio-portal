---
slug: spark-shuffle
title: Spark Optimization - Reducing Shuffle
authors: [lewis]
tags: [Spark, Shuffles]
---

> “Shuffling is the only thing which Nature cannot undo.” — **Arthur Eddington**

I used to see people playing cards and using the word “Shuffle” even before I knew how to play it. Shuffling in cards, play a very critical role to distribute “power”, adding weightage to a player’s hand. It is nothing but adding the _randomness_ in selection. When we want to distribute the cards for various games for example [_contract bridge_](https://en.wikipedia.org/wiki/Contract_bridge) shuffle is the way to create even/uneven distribution to 4 hands.
<!-- truncate -->

![Sweet hand](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bridge-Gro%C3%9Fschlemm.JPG/2560px-Bridge-Gro%C3%9Fschlemm.JPG)

## Well, enough of playing cards!

Let us understand how shuffle impacts big data computation. Ah, yes I think again I will use card shuffle to explain you. 😀

![Chaos! I love that!](https://www.casino.org/blog/wp-content/uploads/shutterstock_417009952-875x583.jpg)

Look at the above image and give me the answers of the below questions.

*   How many black cards are present? ♠️♣️
*   How many of the red cards have numbers greater than 4? ♥️♦️
*   How many high value cards(showing off my knowledge eh!) are left in clubs? ♣️

No need to explain that you will tell me, “Yes, I can give you answers but let me arrange them first.” Then you will do what is shown here.

## The Shuffle in Big Data World

To answer my questions you must do the arrangement to order cards of same packs together like the above image. That means you need to find all cards of same family one by one and them order then A to K or vice versa. This operation of moving cards(data) to seek and order is actually called _Shuffle_ in big data world.

Imagine a situation when you are processing 1000s of GBs of data joining with similar magnitude and answering similar questions of different grains and groups. Yes, in distributed computing world exchanging data across machines, across networks creates so much exchange(I/O) that it slows down the computing process. Shuffle alone cause multiple stages in a big data job and delays the outcome.

### How does shuffle work in Spark?

![Spark Shuffle](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*HZelhB9lKu5NjdOwivQDjQ.png)

In Apache Spark, **_Shuffle_** describes the procedure in between reduce task and map task. Shuffling refers to the shuffle of data given. This operation is considered the costliest .The [shuffle operation](https://stackoverflow.com/questions/31386590/when-does-shuffling-occur-in-apache-spark) is implemented differently in Spark compared to Hadoop.

On the **map side**, each map task in Spark writes out a shuffle file (OS disk buffer) for every reducer — which corresponds to a logical block in Spark. These files are not intermediary in the sense that Spark does not merge them into larger partitioned ones. Since scheduling overhead in Spark is lesser, the number of mappers (`M`) and reducers(`R`) is far higher than in Hadoop. Thus, shipping `M*R` files to the respective reducers could result in significant overheads.

Similar to Hadoop, Spark also provide a parameter `spark.shuffle.compress` to specify compression libraries to compress map outputs. In this case, it could be `Snappy` (by default) or `LZF`. `Snappy` uses only 33KB of buffer for each opened file and significantly reduces risk of encountering out-of-memory errors.

On the **reduce side**, Spark requires all shuffled data to fit into memory of the corresponding reducer task. This would of course happen only in cases where the reducer task demands all shuffled data for a `GroupByKey` or a `ReduceByKey` operation, for instance. Spark throws an out-of-memory exception in this case, which has been quite a challenge because when spark spills over to disk it creates more problem of I/O and read slowness.

Also with Spark there is no overlapping copy phase, unlike Hadoop that has an overlapping copy phase where mappers push data to the reducers even before map is complete. This means that the shuffle is a _pull_ operation in Spark, compared to a _push_ operation in Hadoop. Each reducer should also maintain a network buffer to fetch map outputs. Size of this buffer is specified through the parameter `spark.reducer.maxMbInFlight` (by default, it is 48MB).

## Tuning Spark to reduce shuffle

### spark.sql.shuffle.partitions

The Spark SQL shuffle is a mechanism for redistributing or re-partitioning data so that the data is grouped differently across partitions. It is typically based on the volume of data you might have to reduce or increase the number of partitions of RDD/DataFrame using `spark.sql.shuffle.partitions` configuration or through code.

Using this configuration we can control the number of partitions of shuffle operations. By default, its value is `200`. But, 200 partitions does not make any sense if we have files of few GB(s). So, we should change them according to the amount of data we need to process via Spark SQL.

Let’s see a practical difference. Here I am creating a small two small dataframes with the most popular employee, department with two employees Daniel and me.

The default value of `spark.sql.shuffle.partitions` is 200. Let us run with default and see how much time it takes.

> Time taken : **6060 ms** with spark.sql.shuffle.partitions = 200

Now, if we do some modification with the config as we don’t need 200 shuffle partitions for this such small amount of data if can be done faster. Here I am setting it to 2.

> Time taken : **398 ms** with spark.sql.shuffle.partitions = 2

So, you can see tweaking the shuffle partition alone made it 15 times faster.

## Reduce dataSet size

The classic rule of ETL. Filter as much as data near to the source is much important in spark as well. If you are dealing with lot of data, which has very fine grained aggregates and joins, it is pretty obvious there would be shuffles. It is always essential to control number of records before you start joins/aggregates so that data volume gets reduced by some %. Use appropriate filter predicates in your SQL query so Spark can push them down to the underlying datasource. Selective predicates are good. Use them as appropriate. Use partition filters if they are applicable.

## Broadcast Broadcast Broadcast

When you join two datasets, one large and one small the best option in Spark is to perform a broadcast join (map-side join). With broadcast join, you can very effectively join a large table (fact) with relatively small tables (dimensions) by avoiding sending all data of the large table over the network.

You can use broadcast function to mark a dataset to be broadcasted when used in a join operator. It uses spark.sql.autoBroadcastJoinThreshold setting to control the size of a table that will be broadcast to all worker nodes when performing a join.

```sql
SELECT /*+ BROADCAST(B) */ * FROM TableA A INNER JOIN TableB B ON A.key = B.key;
```

This technique will broadcast the entire table B to all the executors and will help spark to avoid shuffle. The joins will will be local to all executors and thus it won’t be needed any data to come across machines and there won’t be any shuffle.

## More Shuffles vs Lesser Shuffles
--------------------------------

Some times we encounter situations where we are joining multiple datasets but based on different keys. For example, let’s check the sqls below.

```sql
SELECT * FROM TableA A INNER JOIN TableB B ON A.key1 = B.key1;
SELECT * FROM TableB B INNER JOIN TableC C ON B.key2 = C.key2;
```


It is evident that if we consider that while we read A and B it may or may not be partitioned to support the second join that means if we try to execute the joins without any such optimisation technique it might cause more shuffles. Key1 and Key2 across executors will not be evenly distributed. So in such cases we prefer to do repartition B or C accordingly. Repartition can be done on a column with a number specified or we can just do it with a random number which is suitable and comparable with the number of executor and core combination.

```sql
SELECT /*+ REPARTITION(key2)*/ * FROM TableB B;
```

There are many other techniques to overcome shuffles which you will come across as much you start dealing with production level problems. I think the above ones are definitely the most important to start with.

For any type of help regarding career counselling, resume building, discussing designs or know more about latest data engineering trends and technologies reach out to me at [_anigos_](https://www.linkedin.com/in/anigos/)_._

**_P.S : I don’t charge money_**