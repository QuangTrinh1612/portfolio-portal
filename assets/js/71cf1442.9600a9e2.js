"use strict";(self.webpackChunkportfolio_portal=self.webpackChunkportfolio_portal||[]).push([[741],{5707:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=n(7968),l=n(4848),s=n(8453);const r={slug:"multitable-scd2-joins",title:"Multitable SCD2 Joins - How to Unify Historical Changes",authors:["lewis"],tags:["Data Model"]},a=void 0,o={authorsImageUrls:[void 0]},d=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Method 1: Direct Join with 02 SCD2 tables",id:"method-1-direct-join-with-02-scd2-tables",level:3},{value:"Method 2: Unified timeline",id:"method-2-unified-timeline",level:3},{value:"Unified timeline \u2013 Code Snippets",id:"unified-timeline--code-snippets",level:4},{value:"Pros and Cons of Two Methods for Joining SCD2 Tables",id:"pros-and-cons-of-two-methods-for-joining-scd2-tables",level:2},{value:"Direct Joins",id:"direct-joins",level:3},{value:"Unified Timeline Method",id:"unified-timeline-method",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.p,{children:"In the realm of data management, historical changes are conventionally stored in separate Slowly Changing Dimension Type 2 (SCD2) tables. However, extracting point-in-time insights from these dispersed sources requires merging them into a single, unified entity."}),"\n",(0,l.jsx)(i.p,{children:"This guide offers a succinct walkthrough of the process for performing multitable SCD2 joins, presenting two distinct approaches, Direct Join and Unified Timeline, evaluating their respective advantages and drawbacks through practical examples."}),"\n",(0,l.jsx)(i.p,{children:"Let\u2019s see how to effectively unify historical data and derive valuable insights"}),"\n",(0,l.jsx)(i.h2,{id:"intent",children:"Intent"}),"\n",(0,l.jsx)(i.p,{children:"In data warehousing, Slowly Changing Dimension Type 2 (SCD2) tables are widely used to track historical changes in dimension data. However, joining SCD2 tables correctly requires a specific approach to ensure accurate results. This article provides an understanding of the challenges involved and a step-by-step guide to implement robust joins for SCD2 tables."}),"\n",(0,l.jsx)(i.h2,{id:"problem",children:"Problem"}),"\n",(0,l.jsx)(i.p,{children:"Why is joining SCD2 tables challenging?\r\nSCD2 tables are designed to maintain historical data by creating new rows with updated attributes and validity periods. This introduces two main challenges:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Temporal Overlap: The same business key can exist in multiple rows, each representing a different validity period."}),"\n",(0,l.jsx)(i.li,{children:"Point-in-Time Accuracy: Joining two SCD2 tables must align rows that were valid at the same point in time to ensure accurate results.\r\nA naive join may result in duplications or mismatched records due to overlapping validity periods."}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,l.jsx)(i.h3,{id:"method-1-direct-join-with-02-scd2-tables",children:"Method 1: Direct Join with 02 SCD2 tables"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"Perform this join condition that enables merging 2 rows that are in the same validity period"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:"from scd2_table1 t1\r\njoin scd2_table2 t2\r\n  on t1.pk = t2.pk\r\n  and t1.valid_from < t2.valid_to \r\n  and t1.valid_to > t2.valid_from\n"})}),"\n",(0,l.jsxs)(i.ol,{start:"2",children:["\n",(0,l.jsxs)(i.li,{children:["Recalculate ",(0,l.jsx)(i.code,{children:"valid_from"})," & ",(0,l.jsx)(i.code,{children:"valid_to"})]}),"\n"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"valid_from"})," should be the latest one of the 2 ",(0,l.jsx)(i.code,{children:"valid_from"})," of the 2 tables"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"valid_to"})," should be the earliest one of the 2 ",(0,l.jsx)(i.code,{children:"valid_to"})," of the 2 tables"]}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:"greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp)) as valid_from,\r\ncoalesce(lead(greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp)))\r\n    over (partition by t1.pk\r\n    order by greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp))), \r\n          '9999-12-31'::timestamp) as valid_to\n"})}),"\n",(0,l.jsxs)(i.ol,{start:"3",children:["\n",(0,l.jsxs)(i.li,{children:["Filter out rows with ",(0,l.jsx)(i.code,{children:"valid_from = valid_to"})," after join to avoid duplicated validity intervals"]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["In most of real-life examples, ",(0,l.jsx)(i.code,{children:"valid_from"})," and ",(0,l.jsx)(i.code,{children:"valid_to"})," are usually in lower time granularity like timestamp (with the differences down to seconds), hence there might not be cases where these column value \u201coverlapped\u201d across multiple SCD2 tables and we might skip this step. However, for an overall solution, this should be a part of your joining condition."]}),"\n",(0,l.jsxs)(i.ol,{start:"4",children:["\n",(0,l.jsx)(i.li,{children:"Combine them all together"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:"with\r\n    prep1 as (\r\n        select\r\n            t1.pk,\r\n            dim1,\r\n            dim2,\r\n            greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp)) as valid_from,\r\n            coalesce(lead(greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp)))\r\n                over (partition by t1.pk\r\n                order by greatest(t1.valid_from, coalesce(t2.valid_from, '1900-01-01'::timestamp))), \r\n                     '9999-12-31'::timestamp) as valid_to\r\n        from scd2_table1 t1\r\n        join scd2_table2 t2\r\n            on t1.pk = t2.pk\r\n            and t1.valid_from < t2.valid_to \r\n            and t1.valid_to > t2.valid_from\r\n    )\r\n\r\nselect \r\n    *\r\nfrom prep1\r\nwhere valid_from != valid_to\r\norder by PK, valid_from, valid_to, dim1, dim2\n"})}),"\n",(0,l.jsx)(i.h3,{id:"method-2-unified-timeline",children:"Method 2: Unified timeline"}),"\n",(0,l.jsxs)(i.p,{children:["This approach to multitable SCD2 joins first creates a unified timeline based on all the ",(0,l.jsx)(i.code,{children:"valid_from"})," from referenced SCD2s. This timeline will be used as a scaffold for joining back all the SCD2s later on. Unlike Direct Join, the deduplication & ",(0,l.jsx)(i.code,{children:"valid_to"})," recalculation steps are done during timeline unification. This allows us to execute all SCD2 joins in 1 CTE instead."]}),"\n",(0,l.jsx)(i.p,{children:"Note that the process is quite similar when joining 02, 03 or more SCD2s:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Union PKs, ",(0,l.jsx)(i.code,{children:"valid_from"})," from subsequent SCD2s;"]}),"\n",(0,l.jsx)(i.li,{children:"Deduplicate the unioned table to make the following calculation lighter;"}),"\n",(0,l.jsxs)(i.li,{children:["Recalculate ",(0,l.jsx)(i.code,{children:"valid_to"})," from the unioned data to create the timeline;"]}),"\n",(0,l.jsx)(i.li,{children:"Join subsequent SCD2s back to the timeline using this condition below. Repeat for all SCD2s."}),"\n"]}),"\n",(0,l.jsx)(i.h4,{id:"unified-timeline--code-snippets",children:"Unified timeline \u2013 Code Snippets"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:"with\r\n    unified_timeline as ( -- using union to deal with duplicates values instead of union all\r\n        select pk, valid_from from scd2_table1 union\r\n        select pk, valid_from from scd2_table2 union\r\n        select pk, valid_from from scd2_table3\r\n    ),\r\n    unified_timeline_recalculate_valid_to as (\r\n        select\r\n            pk,\r\n            valid_from,\r\n            coalesce(lead(valid_from) over(partition by pk order by valid_from), '9999-12-31'::timestamp) as valid_to,\r\n            valid_to = '9999-12-31'::timestamp as is_current\r\n        from unified_timeline\r\n    ),\r\n    joined as (\r\n        select\r\n            timeline.pk,\r\n            scd2_table1.dim1,\r\n            scd2_table2.dim2,\r\n            scd2_table3.dim3,\r\n            coalesce(timeline.valid_from, '1900-01-01'::timestamp) as valid_from,\r\n            coalesce(timeline.valid_to, '9999-12-31'::timestamp) as valid_to\r\n        from unified_timeline_recalculate_valid_to as timeline\r\n        left join scd2_table1\r\n            on timeline.pk = scd2_table1.pk \r\n            and scd2_table1.valid_from <= timeline.valid_from \r\n            and scd2_table1.valid_to >= timeline.valid_to\r\n        left join scd2_table2\r\n            on timeline.pk = scd2_table2.pk \r\n            and scd2_table2.valid_from <= timeline.valid_from \r\n            and scd2_table2.valid_to >= timeline.valid_to\r\n        left join scd2_table3\r\n            on timeline.pk = scd2_table1.pk \r\n            and scd2_table3.valid_from <= timeline.valid_from \r\n            and scd2_table3.valid_to >= timeline.valid_to\r\n    \r\n    )\r\nselect * from joined\r\n-- where valid_from != valid_to -- As we already have a distinct timeline (using union), this condition is no longer needed\r\norder by PK, valid_from, valid_to, dim1, dim2, dim3;\n"})}),"\n",(0,l.jsx)(i.h2,{id:"pros-and-cons-of-two-methods-for-joining-scd2-tables",children:"Pros and Cons of Two Methods for Joining SCD2 Tables"}),"\n",(0,l.jsx)(i.h3,{id:"direct-joins",children:"Direct Joins"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:(0,l.jsx)(i.strong,{children:"Pros"})}),(0,l.jsx)(i.th,{children:(0,l.jsx)(i.strong,{children:"Cons"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Simple to implement and understand."}),(0,l.jsx)(i.td,{children:"Can result in incorrect joins if overlapping validity periods exist."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Efficient for small datasets."}),(0,l.jsxs)(i.td,{children:["Requires careful handling of ",(0,l.jsx)(i.code,{children:"valid_to"})," (e.g., NULL values)."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"No need for pre-processing."}),(0,l.jsx)(i.td,{children:"May fail to align records accurately in complex scenarios."})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"unified-timeline-method",children:"Unified Timeline Method"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:(0,l.jsx)(i.strong,{children:"Pros"})}),(0,l.jsx)(i.th,{children:(0,l.jsx)(i.strong,{children:"Cons"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Ensures accurate alignment of records across tables."}),(0,l.jsx)(i.td,{children:"More complex to implement and requires additional processing."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Handles overlapping validity periods effectively."}),(0,l.jsx)(i.td,{children:"May require significant compute resources for large datasets."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Suitable for point-in-time analysis and historical consistency."}),(0,l.jsx)(i.td,{children:"Slightly slower due to timeline unification steps."})]})]})]}),"\n",(0,l.jsx)(i.p,{children:"By following these steps, you can reliably join SCD2 tables while maintaining historical and point-in-time accuracy. Proper implementation ensures accurate data analysis and minimizes the risk of logical errors in your data pipeline."}),"\n",(0,l.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Problem"}),": Joining SCD2 tables can be challenging due to overlapping validity periods and the need for point-in-time accuracy."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Solution"}),": To address this, filter records using the valid_from and valid_to columns and perform a temporal join based on both business keys and validity periods."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Implementation"}),": The solution is implemented using SQL, with a focus on defining a point-in-time context, filtering valid records, and aligning temporal validity."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Comparison of Methods"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Direct Joins: Simple to implement but prone to errors with overlapping periods."}),"\n",(0,l.jsx)(i.li,{children:"Unified Timeline Method: Ensures accuracy but is more complex and resource-intensive."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(6540);const l={},s=t.createContext(l);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:i},e.children)}},7968:e=>{e.exports=JSON.parse('{"permalink":"/blog/multitable-scd2-joins","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-29-scd2.md","source":"@site/blog/2024-12-29-scd2.md","title":"Multitable SCD2 Joins - How to Unify Historical Changes","description":"In the realm of data management, historical changes are conventionally stored in separate Slowly Changing Dimension Type 2 (SCD2) tables. However, extracting point-in-time insights from these dispersed sources requires merging them into a single, unified entity.","date":"2024-12-29T00:00:00.000Z","tags":[{"inline":false,"label":"Data Model","permalink":"/blog/tags/data-model","description":"Data Model Disscussion"}],"readingTime":5.11,"hasTruncateMarker":true,"authors":[{"name":"Lewis Quoc Quang","title":"Solution Architect @ Rackspace","url":"https://www.linkedin.com/in/trinh-quoc-quang/","page":{"permalink":"/blog/authors/lewis"},"socials":{"github":"https://github.com/QuangTrinh1612","linkedin":"https://www.linkedin.com/in/trinh-quoc-quang/"},"imageURL":"https://avatars.githubusercontent.com/u/55908196?s=400&u=401c81ca1269100ff4dcf3ddcf11a1ff035cab42&v=4","key":"lewis"}],"frontMatter":{"slug":"multitable-scd2-joins","title":"Multitable SCD2 Joins - How to Unify Historical Changes","authors":["lewis"],"tags":["Data Model"]},"unlisted":false,"prevItem":{"title":"Power BI Data Model - Best Practice Analyzer (BPA)","permalink":"/blog/pbi-bpa-rules"}}')}}]);