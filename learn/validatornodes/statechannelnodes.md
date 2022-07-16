---
title: "State Channel Validator Nodes"
hide_table_of_contents: true
---

<head>
  <title>State Channel Validator Nodes</title>
  <meta
    name="description"
    content=""
  />
</head>

<intro-end /> 


![State Channel Nodes](/img/coreconcepts/dag_how.png)

**Requirements**
Node operators can validate for any State Channel they wish, providing resources to multiple state channels if desired. 
When validating for the DAG L1 or Global L0 you will need 250k $DAG. Token requirements for validating other State Channels will vary according to implementation. For example,
a State Channel can decide to mint their own L0 Token and require a certain quantity to be held as collateral before a node operator can validate for them. Additional
requirements related to hardware specifications or network latency and bandwidth could also be established as qualifications. For example, there could be a requirement
for the node to be dedicated to the specific State Channel and not function as a Hybrid Node, as this would imply compute resources are being shared which may not be
sufficient. Alternatively, a Hybrid Node could be permissable, but only under specific hardware and network configurations.


