---
title: "Directed Acyclic Graph"
hide_table_of_contents: true
---

<head>
  <title>Directed Acyclic Graph</title>
  <meta
    name="description"
    content=""
  />
</head>

<intro-end />

The underlying data structure that is used to construct Constellation's ledger is a **Directed Acyclic Graph**. DAG's are commonly 
used by data scientists for structuring big data sets into training models for machine learning and artificial 
intelligence algorithms. They allow for asynchronous inputs and are very useful for understanding data transformation pipelines,
which makes the data structure very well suited for use in distributed ledger technology. Unlike a blockchain that consists of sequential
blocks, directed acyclic graphs possess vertices and edges. The vertice (also referred to as a node) represents the transaction while the edge 
is the relationship to other transactions. The reason why the graph is "directed" is that it only permits expansion in one direction, resulting
in every new transaction being built on top of the previous one. 

This forms a "topological ordering" that provides a temporal context for interpreting events and validating transactions by the referencing of previous transactions.
When a transaction is registered with a node, it first has to verify two other transactions before its transaction will be verified. Those two 
transactions are chosen according to an algorithm that will also check to ensure there is no conflict with previous transactions. This removes
unnecessary burden of checking against the entire global ledger state which is common in traditional blockchains. In this model, the
vertices/nodes become the ‘miners’, enabling fee-less transactions to be feasible. 


![DAG Structure](/img/coreconcepts/dagstructure.png) 



Another advantage is that each node can have more than one parent root which enables significantly more transactions to be validated in parallel
since the protocol doesn't have to wait for a transaction to complete before processing a new one. This structure begins to branch out as  
more and more vertices become interconnected. What is novel about Constellation's approach to DAG's is in the way it has implemented them
within the broader network. Specifically, multiple independent DAG ledgers can co-exist within the network and converge their states
into one global ledger state. This increases the aggregate concurrency and throughput capacity of the network in a way that no other protocol has
done before, constructing what is referred to as a **Hypergraph**, hence the name **Hypergraph Transfer Protocol**, or **HGTP**.





