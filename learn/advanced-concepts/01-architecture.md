---
title: Hypergraph Architecture
sidebar_label: Hypergraph Architecture
---

The Hypergraph network is a decentralized protocol made up of multiple independent networks known as metagraphs built on top of the Hypergraph. Each metagraph validates and processes data according to their own internal business logic and custom consensus mechanisms before submitting their state as snapshots to the global L0 network. The Global L0 performs final validation before including the metagraph snapshot into the ledger. 

## Design Benefit
The benefit of this approach is a parallel to the reasoning behind why microservice state isolation is used in conventional industry. State should not be managed exclusively by a global linear ledger, but rather updates should be constrained to their exclusive logical service boundaries.


![Hypergraph](/img/coreconcepts/hypergraph.png)

## Network Components

### Global L0 Network
The Global Layer 0 (Global L0) or Hypergraph is the base layer and final layer of consensus on which the rest of the network is built. The Global L0 organizes and validates data from other parts of the network before storing it in the immutable ledger. Its work is performed by a network of validator nodes that forms the core of the protocol. The validation ability is constrained to the core interface definitions for defining logic that is easy to share between independent networks, and the functionality offered is targeted towards cross-chain interactions, messages, and shareable execution.


### Metagraph Networks
Metagraphs are subnetworks that perform their own validation and consensus before submitting data to the Global L0 for final consensus and storage in the ledger. Metagraphs can be thought of as microservices that process data and act on triggers from off-chain sources. Metagraphs can include multiple additional layers of consensus as needed based on their internal business logic. Each metagraph is the equivalent of the state management operations associated with a conventional, linear blockchain in the sense that updates require exclusive access. This approach to state isolation allows independent processing & concurrency between state updates that have no relation to one another.


### DAG L1 Network
DAG Layer 1 (L1) is a special case L1 network that validates DAG currency transactions for the network and bundles them into blocks which are then submitted to the Global L0 network for final validation. The DAG L1 operates similarly to metagraph networks but it has no L0 validation of its own, instead relying on the Global L0 for this function. The DAG L1 network enables $DAG which is the native currency of the network.

