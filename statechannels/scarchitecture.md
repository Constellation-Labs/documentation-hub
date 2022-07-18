---
title: Constellation Network Architectural Overview
hide_table_of_contents: false
---

<head>
    <title> Constellation Network: Architectural Overview
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

Constellation Network can be viewed as a decentralized network that is
capable of conducting consensus on the state of any device or network
that interfaces with it and is considered the "Global Layer 0" network, depicted in the diagram as "Global_L0".
It is a protocol framework that can be repurposed to create an
independent network which is referred to as a State Channel. A State
Channel can contain an indefinite number of validation layers, or "Cells", where
different consensus logic is defined for the various data types that are proxied into them. 
This is depicted in the diagram below by "Local L_0", "Local L_1", "Local_L2", and so on. Each layer, or "Cell",
embodies a different execution context and has the option to horizontally scale out its computational capacity by
distributing load across independent networks of validator nodes. 

Data from one Cell can be curried to the next cell to form a processing pipeline, however, this is not a mandatory
configuration. Communication between Cells can be asynchronous & bi-directional, with the one requirement being that
the all transactions and blocks be bundled into a "State Channel Snapshot" by the "Local L_0" Cell which is responsible
for signing and submitting the snapshot into the Global_L0 network. The criteria governing the submission of state channel
snapshots is configured within it's Application Chain Interface (ACI). Consensus is then performed on the State Channel
Snapshots by Constellation Network's global validator nodes, creating a Global State Snapshot, and thus forming a
decentralized directed acyclic Hypergraph of immutable state data. State Channels can query the Hypergraph to retrieve 
specific state data to incorporate into the logic defined within its Cells, assuming it has the ability to deserialize it.

![](/img/coreconcepts/architecture.jpeg) 
