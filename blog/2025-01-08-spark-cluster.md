---
slug: spark-cluster-configuration
title: Databricks Cluster Optimization
authors: [lewis]
tags: [Spark]
---

## Discussion Topic
What kind of cluster configuration should you use for your Databricks workloads?

## Driver selection:
- In most cases the driver is not required to be as large as the workers as the driver is mainly responsible for assigning tasks to the workers and does not perform any operations itself (except for single node cluster wherein the driver is the only node).

<!-- truncate -->

- Cases when a large driver is required:
    - `Collect()`: When using `collect()` or any other such operation multiple times wherein the value is returned to the driver for usage as a variable. This puts a load on the driver as it collects the value as well as distributes it to the workers as a variable for usage down the line.
    - Many small files problem: When reading from a file store and there are many small files that need to be read this puts a strain on the driver as it is responsible for assigning the files to be read to the respective workers. Tip: If the driver cannot be upsized, look into resizing the files in the file store to make the reads more performant.

## Types of clusters, description and best practices:
### Memory optimized cluster: 

Fewer cores per worker i.e., less parallelism however this results in greater amount of memory per core. 

#### When to use
Jobs where shuffling/wide transformations will be required i.e., join, group by. Due to higher memory per core as well as fewer cores, there will be less shuffling and risk of spill onto disk due to increased data size is reduced. Useful for scenarios wherein there will be data caching required or if the same data is called on repeatedly either for analysis or a job.

#### When not to use
Jobs where shuffling/wide transformations are not required, and the same task can be performed on smaller partitions in parallel unlike join/group by which requires looking up entire dataset for keys.

### Compute optimized cluster: 

Higher number of cores per worker resulting in more parallel tasks being carried out, resulting in less memory per worker as compared to the above 2. 

#### When to use
Jobs carrying out the same task repeatedly ideally without wide transformations requiring shuffling.

#### When not to use
Jobs where shuffling/wide transformations are present as it will result in a lot of shuffling and the result may be larger than the memory of the core causing spill onto disk.

For optimal performance tune spark configurations for spark.sql.files.maxPartitionBytes and spark.sql.shuffle.partitions according to the memory per core and cores per worker respectively.

### General purpose cluster:

Comparable to compute optimized cluster having a larger amount of memory per worker and hence per core as compared to a compute optimized cluster. 

#### When to use
Repetitive tasks being carried out on data where there might be some shuffling involved but not an extensive amount. Spilling to disk due to joins is less of a risk here due to higher memory per core. 

#### When not to use
Repetitive tasks being carried out on data where no shuffling is involved (this will be more performant on compute optimized) or if there is are a lot of wide transformations required (this will be more performant on memory optimized). 

### Storage optimized cluster:

Equal to memory optimized cluster with respect to memory and number of cores per worker difference being it has an increased disk throughput and IO.

#### When to use
Similar use cases as memory optimized cluster, however especially recommended if the same data is to be read multiple times and there is risk of spill to disk due to increased data size after wide transformations.

#### When not to use
Operations that can be performed in parallel and do not require shuffling. Data is not required to be re-reads multiple times. 