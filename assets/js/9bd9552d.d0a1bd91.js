"use strict";(self.webpackChunkportfolio_portal=self.webpackChunkportfolio_portal||[]).push([[519],{3997:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var s=i(8322),o=i(4848),r=i(8453);const n={slug:"spark-cluster-configuration",title:"Databricks Cluster Optimization",authors:["lewis"],tags:["Spark"]},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Discussion Topic",id:"discussion-topic",level:2},{value:"Driver selection:",id:"driver-selection",level:2}];function u(t){const e={h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"discussion-topic",children:"Discussion Topic"}),"\n",(0,o.jsx)(e.p,{children:"What kind of cluster configuration should you use for your Databricks workloads?"}),"\n",(0,o.jsx)(e.h2,{id:"driver-selection",children:"Driver selection:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"In most cases the driver is not required to be as large as the workers as the driver is mainly responsible for assigning tasks to the workers and does not perform any operations itself (except for single node cluster wherein the driver is the only node)."}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>n,x:()=>a});var s=i(6540);const o={},r=s.createContext(o);function n(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:n(t.components),s.createElement(r.Provider,{value:e},t.children)}},8322:t=>{t.exports=JSON.parse('{"permalink":"/portfolio-portal/blog/spark-cluster-configuration","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-08-spark-cluster.md","source":"@site/blog/2025-01-08-spark-cluster.md","title":"Databricks Cluster Optimization","description":"Discussion Topic","date":"2025-01-08T00:00:00.000Z","tags":[{"inline":false,"label":"Spark","permalink":"/portfolio-portal/blog/tags/spark","description":"Spark discussion"}],"readingTime":3.2,"hasTruncateMarker":true,"authors":[{"name":"Lewis Quoc Quang","title":"Solution Architect @ Rackspace","url":"https://www.linkedin.com/in/trinh-quoc-quang/","page":{"permalink":"/portfolio-portal/blog/authors/lewis"},"socials":{"github":"https://github.com/QuangTrinh1612","linkedin":"https://www.linkedin.com/in/trinh-quoc-quang/"},"imageURL":"https://avatars.githubusercontent.com/u/55908196?s=400&u=401c81ca1269100ff4dcf3ddcf11a1ff035cab42&v=4","key":"lewis"}],"frontMatter":{"slug":"spark-cluster-configuration","title":"Databricks Cluster Optimization","authors":["lewis"],"tags":["Spark"]},"unlisted":false,"nextItem":{"title":"Spark Optimization - Reducing Shuffle","permalink":"/portfolio-portal/blog/spark-shuffle"}}')}}]);