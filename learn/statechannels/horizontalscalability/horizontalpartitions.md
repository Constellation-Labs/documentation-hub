---
title: Horizontal Partitioning Schemes
hide_table_of_contents: false
---

<head>
    <title> Horizontal Partitioning Schemes
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />

Many of the solutions proposed in the industry to scale up blockchains and DLTs thus far have involved a technique known as
horizontal partitioning. This typically takes the form of **"Database Sharding"**, which essentially splits up a blockchain into smaller 
segments which can validate transactions in parallel. The intention is to distribute the workload amongst the different nodes 
that are validating for each shard, however, in practice this introduces additional complexity in managing the segmentation,
replication, and distribution of workloads autonomously. Furthermore, maintaining security for cross-shard transactions becomes
increasingly complex to manage to ensure consistency, increasing the risk for data corruption and synchronization issues. Lastly,
this approach to sharding assumes a shared execution context between the nodes, meaning the application logic needs to conform
to a specific data schema and structure that is unilaterally imposed by the network. Developers can not implement custom data
schemas and validation criteria that is needed to facilitate their decentralized application logic because they are forced to
repurpose a single tool (i.e smart contract) that is not generalizable. 