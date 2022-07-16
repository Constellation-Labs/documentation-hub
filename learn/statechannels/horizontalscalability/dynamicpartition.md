---
title: Dynamic Hierarchical Partitioning
hide_table_of_contents: false
---

<head>
    <title> Dynamic Hierarchical Partitioning
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />


 
  Since the data flowing through State Channel Cells is componentized, it can be validated by a hierarchy of nodes that store subsets 
  of the data dependency graph. A State Channel Snapshot is created at regular intervals by the L0 Cell, which condenses
  the full history of all state data. These State Channel Snapshots can then be stored within a separate set of validator nodes. Finally, the 
  State Channel Snapshots are submitted into Constellation Network's Global L0 Cell
  where they are bundled together with all the other State Channel snapshots, forming a Global State Snapshot. These Global State Snapshots
  are stored within Constellation Network's network of global validator nodes. 
  
  ![Hypergraph](/img/coreconcepts/hypergraph.jpeg)
  

  This hierarchy of state data forms a data dependency graph with higher protocols validating lower dependencies, allowing nodes
  to resolve small subsections of the graph and validating certain sub-partitions as needed. Nodes are selected using a deterministic process, which dynamically adjusts 
  the responsibilities of nodes for ‘facilitating’ validation. A cluster of 3 nodes is chosen which executes consensus rounds in parallel,
  ensuring no single node could be a facilitator in multiple rounds. Facilitator clusters form in response to network demands, enabling
  parallelization of consensus at different hierarchies of data organization. In the modern era of distributed computing, thousand node clusters can be provisioned and auto-scaled on cloud hosted virtual instances. The same
  scalability can be realized with Constellation's microservices architecture, which allows for the provisioning of resources as needed;
  thereby providing a dynamically scalable distributed application architecture. Altogether, a scale-free network topology emerges
  which has the capacity to horizontally scale indefinitely.


![Node Clusters](/img/coreconcepts/nodecluster.jpg)