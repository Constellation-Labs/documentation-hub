---
title: Layer 0 Overview: Global vs Local
hide_table_of_contents: false
---

<head>
    <title> Layer 0 Overview: Global vs Local
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />

![Constellation Network Architectural Diagram](/img/coreconcepts/architecture.jpeg)

Constellation Network can be viewed as a decentralized network that is
capable of conducting consensus on the state of any device or network
that interfaces with it. The data submitted into the network forms a decentralized Hypergraph, 
referred to as the **Global Layer 0** network, which is hosted across independently owned and operated validator nodes.
This global network, depicted in the diagram as **Global_L0**, can receive any arbitrary data provided to it by 
State Channels. In its simplest form, a State Channel can be understood as an endpoint which signs and submits binary
serialized data structures into the Global Layer 0 network, whereby consensus is performed upon it. Depending on the
requirements of the State Channel, it can choose to implement its own independent network of validators which can
perform custom consensus on any complex user defined data types that it requires, prior to submission into the global
Hypergraph network. 

This enables a State Channel to be its own fully-fledged **Local Layer 0** decentralized protocol, containing an indefinite number
of validation layers, or "Cells", where different consensus logic can be defined for the various data types that are
proxied into them. This is depicted in the diagram below by **Local L_0**, **Local L_1**, **Local_L2**, and so on. Each Cell
can embody a different execution context where data from one Cell can be curried to the next cell to 
form a processing pipeline. Communication between Cells can be asynchronous & bi-directional, with the one requirement 
being that all transactions and/or blocks be bundled into a **State Channel Snapshot** by the Local L_0 Cell, 
which is responsible for signing and submitting data into the Global_L0 network. Consensus is then performed on the State Channel
Snapshots by Constellation Network's global validator nodes, creating a **Global State Snapshot**, and thus forming a
decentralized directed acyclic Hypergraph of immutable state data. 

State Channels can query the Hypergraph to retrieve state data from Global Snapshots which it can then incorporate into the 
logic defined within its Cells. This enables use cases which require the interoperation of state data
across different State Channels, enabling developers to compose "cross-chain" or "cross-cell" decentralized application logic
that possess dependencies across heterogeneous streams of data.