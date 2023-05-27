---
title: DAG Structure
sidebar_label: DAG Structure
hide_table_of_contents: true
---
<intro-end />

The underlying data structure that is used to construct Constellation's ledger is a Directed Acyclic Graph or DAG. DAG's allow for asynchronous inputs and are very useful for understanding data transformation pipelines, which makes the data structure very well suited for use in distributed ledger technology. Unlike a blockchain that consists of sequential blocks, directed acyclic graphs possess vertices and edges. The vertice (also referred to as a node) represents the transaction while the edge is the relationship to other transactions. The graph is "directed" in that it only permits expansion in one direction, resulting in every new transaction being built on top of the previous one.

This forms a topological ordering that provides a temporal context for interpreting events and validating transactions by the referencing of previous transactions. When a transaction is registered with a node, it is bundled along with other data in a DAG structure and verifies prior references during validation. Those prior references are chosen according to an algorithm that will also check to ensure there is no conflict with previous transactions. This removes the unnecessary burden of checking against the entire global ledger state which is common in traditional blockchains. In this model, the vertices/nodes become the ‘miners’, enabling fee-less transactions to be feasible.

Each node can have more than one parent root which enables significantly more transactions to be validated in parallel since the protocol doesn't have to wait for a transaction to complete before processing a new one. This structure begins to branch out as more and more vertices become interconnected. What is novel about Constellation's approach to DAG's is in the way it has implemented them within the broader network. Specifically, multiple independent DAG ledgers can exist within the network and converge their states into one global state. This increases the aggregate concurrency and throughput capacity of the network in a way that no other protocol has done before, constructing what is referred to as a Hypergraph.

<br />

![Network Structure](/img/learn/graph-vs-hypergraph.png)
<br />

Think of a Hypergraph as a graph that allows you to model group relations instead of only binary relations, enabling a graph to be constructed of other graphs. It’s a set of a sets that enables different graphs to be connected together by their relationships to form a greater graph structure. In this Hypergraph structure there is the notion of “Hyperedges” and “Hypervertices” that connect the graphs together, with each hyperedge connecting an arbitrary number of hypervertices (instead of only two in a regular graph). This allows the Constellation Network to weave immutable state data originating from entirely different networks and systems together into one ever-evolving data structure. The Hypergraph can be used to compose complex decentralized application logic, such as multi-network API calls and cross-network exchange of tokenized assets.
