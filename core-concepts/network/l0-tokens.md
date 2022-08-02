---
title: L0 Token Standard
slug: /network/l0-token-standard
hide_table_of_contents: false
---

The L0 Token Standard is a common interface for L0 Cells, which are used to connect each state channel or L1 to the 
global DAG L0 as well as each other; forming the HyperGraph network as a whole. This allows developers of 
state channels and other systems to integrate using the same API and deployment process. 

# General architecture
Following a pattern similar to the erc-20 standard, the L0 interface is a trait that can be defined for the 
L0 Cell that contains required methods for accessing state channel ledger data and publishing final ledger state data to 
other L0 cells. However it differs in that it contains the datatypes and order of operations for state updates inside of its Cell.
These are it's Algebra and Coalgebra which construct a type-safe program to be executed within the Cell functor by
it's Hylomorphism. The external api is contained within the actual p2p server. An example Cell implementation following 
the standard is shown in the [DAG 
L0](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/core/src/main/scala/org/tessellation/domain/cell/L0Cell.scala#L29) 
which contain the required data types and state update logic of **Algebra.enqueueStateChannelSnapshot** and **Coalgebra.processStateChannelSnapshot**. 
The required methods are shown in the [L0 
API](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/core/src/main/scala/org/tessellation/modules/HttpApi.scala#L43)
as **HttpApi.globalSnapshotRoutes** and **HttpApi.stateChannelRoutes**. Note this is in alpha state and will be expanded 
such that the required Algebra/Coalgebras will be added to custom Cell logic at instantiation.

## Integrating existing L1 protocols

Existing L1 protocols can integrate with others by deploying an L0 Cell that implements the L0 standard interface. 
By integrate we mean that their ledgers can share meta-state for use cases such as swaps (DAG L0), cross 
validation of eachother's data or creating graphs of reactive execution logic. Deployment of this L0 cell can be
on the same or different machines as your L1 node. They subscribe to L1 ledger data and publish converged state data called
"Snapshots" to their L1 as well as other L0s of state channels that have integrated their data somewhere within their 
consensus pipeline. Integration also required deploying a state channel definition to each other's ACI.

## Deploying to the global $DAG L0

As above, a state channel definition must deployed to the DAG L0 ACI. However, in order to provide the security
required for an open network to register untrusted state channel definitions in real time, validation functions 
are limited to hash based validation on ledger states of numeric type. 

