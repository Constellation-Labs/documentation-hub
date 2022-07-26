---
title: "Scalability"
hide_table_of_contents: true
---

<head>
  <title>Scalability</title>
  <meta
    name="description"
    content=""
  />
</head>

<intro-end />

Scalable distributed systems are not new — Apache Spark and Hadoop are two of the most widely used systems in large distributed data
applications. Handling millions of transactions a day, they auto-scale with ease across many servers to create highly flexible
and elastic computing clusters. Millions of users throughout the world use hundreds of applications every day, and these apps
operate across distributed data centers globally. The challenge, however, is to create a scalable decentralized application platform
that is essentially trust-less in its operation and functionality. In typical distributed systems, all nodes are controlled by the parent
company and trivially trusted by all the participants of the platform.

Blockchains, in particular, are handicapped by the linear construction of
the ledger's data structure which is composed of a single chain of blocks that all nodes are required to synchronize with.
More recent approaches which utilize a Directed Acyclic Graph as the ledger data structure still suffer from many of
the same challenges, despite allowing for asynchronous updates to the ledger's state, as they are merely extending
chain-like structures to a graph-like structure consisting of linked blocks. This undermines the ability to horizontally
scale out the network's computational capacity, preventing consensus parallelization and distribution of load across nodes.
The power of the distributed computing paradigm and its multiplicative effect on processing throughput is lost on these protocol
implementations. Furthermore, the proposals to scale these protocols by way of database sharding does not solve the fundamental
flaws in their design and introduces complexity in managing the network's security and can lead to fragmentation, or worse,
the corruption of shards. 