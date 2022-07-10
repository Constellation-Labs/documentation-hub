# Constellation Network Architectural Overview

Constellation Network can be viewed as a decentralized network that is
capable of conducting consensus on the state of any device or network
that interfaces with it and is considered the "Global Layer 0" network, depicted in the diagram as "Global_L0".
It is a protocol framework that can be repurposed to create an
independent network which is referred to as a State Channel. A State
Channel can contain an indefinite number of validation layers, or "Cells", where
different consensus logic is defined for the various data types that are proxied into them. This is depicted in the diagram below by "Local L_0", "Local L_1", "Local_L2", and so on. Each layer, or "Cell", embodies a different execution context and has the option to horizontally scale out it's computational capacity by distributing load across an independent network of validator nodes. 

Data from one Cell can be curried to the next cell to form a processing pipeline, however, this is not a mandatory configuration. Communication between Cells can be asychronous & bi-directional, with the one requirement being that the all transactions and blocks be bundled into a "State Channel Snapshot" by the "Local L_0" Cell which is responsible for signing and submitting the snapshot into the Global_L0 network. Consensus is then performed on the State Channel Snapshots by Constellation Network's global validator nodes, creating a Global State Snapshot, and thus forming a directed acyclic Hypergraph of immutable state data. 

![](https://github.com/Constellation-Labs/documentation-hub/blob/main/static/img/coreconcepts/4%20-%20architecture.jpeg) 