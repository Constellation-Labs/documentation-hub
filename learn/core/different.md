---
title: "How Constellation is Different"
hide_table_of_contents: true
---

<head>
  <title>How Constellation is Different</title>
  <meta
    name="description"
    content=""
  />
</head>


In a Blockchain network, hundreds of thousands of computing devices create a distributed network without inherently
trusting each other. They reach consensus about the shared data through unique mechanisms and ensure that once the
consensus is reached, the data is tamper-proof. This allows the devices, otherwise known as nodes in the network,
to transact, i.e. send tokens to each other. Tokens are the unit representation of the value created by the network,
and fuels a shared economy in a secure digital network.

![](../../../../Desktop/blockchain/blockchainnetwork.png)

The technology behind Blockchain is ingenious. The transactions sent among the nodes are bundled together into Blocks
of data. These blocks are chained in a fashion that the cryptographic hash of a previous block is included in the next
block — making the entire Blockchain tamper-proof. A transaction is valid when the sender has enough tokens to send that
transaction — analogous to having enough money in a bank account before sending someone money. Understandably, only valid
transactions are allowed to be included in the block data. Since it is a network of nodes that virtually do not trust
each other, transactions deemed valid by the majority of the nodes are selected to be valid. In a Blockchain network,
this forces each transaction to be sent to every node, and requires a way to incentivize each node to do the right thing.
The Bitcoin network famously mandates each node to solve a cryptographically challenging puzzle to provide the
proof of honesty — tuned in a way that it does not make sense for a node to both burn enough electricity to solve
the hard puzzle and act maliciously.

![](../../../../Desktop/blockchain/bottleneck.png)

Unfortunately, this sequential process is very inefficient and far too slow to be suited for mass adoption. Users are accustomed to Internet 
applications that are massively distributed with hundreds of thousands of concurrent users — transactions need to be 
verified in a matter of seconds, instead of hours. Constellation proposes a novel mechanism to improve upon the 
Blockchain technology with decades of learning from the scalable distributed technology. We will discuss how 
Constellation is different from what is typically conceived as a Blockchain in the following section.

## What is Constellation Network doing differently?

Constellation takes a fundamentally different approach to distributed ledger technology. A scale-free "Layer 0" network
is made possible through the following innovations:

### Scaling through Graphs 
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


![](../../../../Desktop/blockchain/dagstructure.png)



Another advantage is that each node can have more than one parent root which enables significantly more transactions to be validated in parallel
since the protocol doesn't have to wait for a transaction to complete before processing a new one. This structure begins to branch out as  
more and more vertices become interconnected. What is novel about Constellation's approach to DAG's is in the way it has implemented them
within the broader network. Specifically, multiple independent DAG ledgers can exist within the network and converge their states
into one global state. This increases the aggregate concurrency and throughput capacity of the network in a way that no other protocol has
done before, constructing what is referred to as a **Hypergraph**, hence the name **Hypergraph Transfer Protocol**, or **HGTP**.

**How is a Hypergraph different than a DAG?**

Think of a Hypergraph as a graph that allows you to model group relations instead of only binary relations, enabling a graph to be constructed 
of other graphs. It’s a set of a sets that enables different graphs to be connected together by their relationships to form a
greater graph structure. In this Hypergraph structure there is the notion of “Hyper-edges” and “Hyper-vertices” that connect the graphs together,
with each hyperedge connecting an arbitrary number of hypervertices (instead of only two in a regular graph). This allows Constellation Network
to weave immutable state data originating from entirely different networks and systems together into one ever-evolving data structure. The Hypergraph
can be used to compose complex decentralized application logic, such as multi-network API calls and cross-network exchange of tokenized assets. 


![](../../../../Desktop/blockchain/graph vs hypergraph.jpeg)


### Layer 0 State Channels

Layer 0 State channels are the foundation upon which a decentralized immutable Hypergraph network is made possible.
They are independent networks which are capable of validating any complex data structure that
is required of them. This enables developers to model the exact inner state of an application or system and create
a statically typed data schema with customize consensus logic to validate the data from point of origin
to destination. This native ability to "Oraclize" data is rooted in the use of the **functional programming** language,
Scala, in the design of the network. This coupled with the ability to encode complex data into geometric representations,
referred to as "Cell Complexes". These Cell Complexes serve to normalize the state data topologically, 
which enables composability of heterogeneous state data, including the ability to validate the state of other 
blockchain and DLT networks. 

Cell Complexes, referred to as simply "Cells", are also responsible for an entirely new form of database scaling,
referred to as "**Database Cellularization**". It circumvents the limitations inherent with linear database sharding techniques
by enabling a true microservices architecture which to date has not been possible with decentralized protocols. This
enables State Channels to selectively scale out different aspects of their business logic while also enabling a complex
cross-cell logic to be possible. State channels are free to implement different networks of nodes which are each responsible
for unique execution contexts. All of this state data can then be surfaced up into Constellation Networks' Global
Layer 0 network for exchange and interoperation with other state channels. Below is a depiction of this hierarchical
process of state validation:



![](../../../../Desktop/blockchain/hypergraph1.jpeg)



More extensive documentation around state channels can be viewed from its dedicated section.





