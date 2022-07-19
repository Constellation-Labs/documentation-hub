---
title: Microservices Framework
hide_table_of_contents: false
---

<head>
    <title> Microservices Framework
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />
 

A State Channel can be understood as a microservices framework for easily writing decentralized
applications that are capable of organizing, validating, and notarizing vast amounts of state
data in-parallel on large clusters of commodity hardware in a reliable, byzantine fault-tolerant
manner. There are two technical innovations that are at the core of Constellation Network that enables
this:

 **Topological Normalization**

  Constellation Network enables State Channels to take advantage of a new form of database scaling that can be defined as
  **Database Cellularization**. Instead of partitioning the ledger using linear database sharding techniques, it takes the
  approach of modeling data into geometric representations, called **Cell Complexes**. Each State Channel can implement
  as many "Cells" as they require which behave as their own independent microservices. Cells can encode different
  complex data types and validation logic to encompass an entire data aggregation/transformation pipeline, allowing for different execution
  contexts to be processed within a single state channel deployment. The data streamed into each Cell can then be independently
  distributed across different networks of state channel validator nodes to be processed and validated as needed. 

  This effectively enables the State Channel to partition its network topologically, granting it the flexibility to scale out each 
  microservice independently. This allows implicit orchestration of logic to be executed concurrently between
  Cells in a programmatically verifiable way. Essentially each Cell can embody different decentralized protocols which can be
  nested within one another. This enables the network to decouple how data is processed from what is being processed, enabling
  developers to focus entirely on the core behavior of their application. Traversing through nested data structures is handled 
  automatically by the protocol and abstracted into a high level application programming interface (API). It accomplishes this 
  by creating an interface similar to MapReduce, where an input dataset is split into chunks which are processed by map tasks
  in a parallel manner and then reduced to an output, an approach popularized by Apache Spark, Flink, and Hadoop.

 Specifically, this MapReduce paradigm is implemented where the “Map” function is defined as an unfold operation (anamorphism) and
 the “Reduce” function is defined as a fold operation (catamorphism). These functions construct what are referred to as
 hylomorphic and metamorphic recursion schemes, establishing a continuity between topological data that can be used to traverse
 the data dependency graph.