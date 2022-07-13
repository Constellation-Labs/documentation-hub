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

![](https://github.com/Constellation-Labs/documentation-hub/blob/core-concepts-docs/static/img/coreconcepts/blockchainnetwork.png)

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

![](https://github.com/Constellation-Labs/documentation-hub/blob/core-concepts-docs/static/img/coreconcepts/bottleneck.png)

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


![](https://github.com/Constellation-Labs/documentation-hub/blob/core-concepts-docs/static/img/coreconcepts/dagstructure.png) 



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


![](https://github.com/Constellation-Labs/documentation-hub/blob/core-concepts-docs/static/img/coreconcepts/graphvshypergraph.jpeg) 


### Layer 0 State Channels

Layer 0 State channels are the foundation upon which a decentralized immutable Hypergraph network is made possible.
They are independent networks which are capable of validating any complex data structure that
is required of them. This enables developers to model the exact inner state of an application or system and create
a statically typed data schema with customize consensus logic to validate the data from point of origin
to destination. This native ability to "Oraclize" data is rooted in the application of **functional programming** principles in the design of the network, coupled with the ability to encode complex data into geometric representations,
referred to as "Cell Complexes". These Cell Complexes serve to normalize the state data topologically, 
which enables composability of heterogeneous state data, including the ability to validate the state of other 
blockchain and DLT networks. 

**What are the implications of this from a practical perspective?**

Lets say your company wanted to develop a decentralized application that can solve the systemic problem of online video game cheating. If the developers
decided to build this capability with existing blockchains or DLTs, what they would have to do is figure out a way to accomplish this while conforming
to the data structure token standards which have been decided for them by the network. This would prevent them from validating and notarizing the actual data structures that are being generated from the video game itself, which could potentially be composed of multiple different complex data types. Instead, the developers would be forced to notarize simple messages that describe the game's state as a form of "validation". Most decentralized protocol have to limit the types of data that can be processed by the network due to scalability, interoperability, and composability limitations inherent to their architectures.

To use a specific type of video game as an example; 

First Person Shooters (FPS) games are subject to various types of hacks, with most infamous being the "AimBot" hack. When a user is cheating using this type of hack, he will be able to track where his enemies are in the game and automatically be able to shoot them with 100% accuracy, everytime. This obviously degrades the user experience of the video game and undermines the fair competition that people seek as gamers. What this hack is doing on the backend is basically hi-jacking the local video game application and abusing the inputs and outputs that it receives from the video game's web servers to inform where to aim the player's weapon. In order to prove that a player was cheating in this way, the developers would need the flexibility to encode the inner state of the video game into a complex data structure, notarize it onto the blockchain, and then introduce some validation logic that can detect
the anomolous behavior. For this to be truly effective, you would need this entire consensus process to occur in near real-time so that the cheater is automatically identified and kicked from the game as to not disript the experience of other players. 

This means not only do you need your decentralized protocol to be flexible enough to model unique data generated out of the video game, but you also want to customize the validation logic and consensus process of the decentralized protocol to enable the data to be processed in a specific way for effective analysis as part of your detection system. Finally, the protocol needs to be able to react to this data in a matter of seconds to deliver some sort of meaningful recourse, while also notarizing the response itself. This is what you can call a Big Data usecase that requires a decentralized protocol with a capacity for processing asynchronous data streams at very high rates. Constellation Network State Channels enable these types of use cases to be realized as opposed to existing DLTs and Blockchains which would only be able to address very basic cheating attempts, such as checking whether someone hacked the video game's leader board to validate if scores were manipulated at the end of a match, a simple binary check that does not provide high fidelity insights into the video game's inner state.

**Database Cellularization**

Cell Complexes, referred to as simply "Cells", equip Constellation Network's State Channels with an entirely new form of database scaling,
which can be described as "**Database Cellularization**". It circumvents the limitations inherent with linear database sharding techniques
by enabling a true microservices architecture, which to date, has not been possible with decentralized protocols. This
enables State Channels to selectively scale out different aspects of their business logic while also enabling a complex
cross-cell logic to be possible. State channels are free to implement different networks of nodes which are each responsible
for unique execution contexts. All of this state data can then be surfaced up into Constellation Networks' Global
Layer 0 network for exchange and interoperation with other state channels. Below is a depiction of this hierarchical
process of state validation:



![](https://github.com/Constellation-Labs/documentation-hub/blob/core-concepts-docs/static/img/coreconcepts/hypergraph1.jpeg)



More extensive documentation around state channels can be viewed from its dedicated section.





