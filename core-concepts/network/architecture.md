---
title: Network Architecture
sidebar_label: Architecture
---
<intro-end />

The Hypergraph network is a decentralized protocol made up of multiple independent networks known as state channels built on top of the HyperGraph. Each state channel validates and processes data according to their own internal business logic and custom consensus mechanisms before submitting their state as snapshots to the global L0 network. The global L0 performs final validation and then adds the state channel snapshot to the ledger.

![Hypergraph](/img/coreconcepts/hypergraph.jpeg)

## Network Components

### Global L0 Network
The **Global Layer 0** (Global L0) or **HyperGraph** is the base layer and final layer of consensus on which the rest of the network is built. The Global L0 organizes and validates data from other parts of the network before storing it in the immutable ledger. Its work is performed by a network of validator nodes that forms the core of the protocol. 

### State Channel Networks
**State Channels** are subnetworks that perform their own validation and consensus before submitting data to the Global L0 for final consensus and storage in the ledger. State channels can be thought of as microservices that process data and act on triggers from off-chain sources. State channels can include multiple additional layers of consensus as needed based on their internal business logic.

### DAG L1 Network
The **DAG Layer 1** (DAG L1) is a special case state channel that validates DAG transactions for the network and bundles them into blocks which are then submitted to the global L0 network for final validation. This state channel enables $DAG which is the native currency of the network.  
