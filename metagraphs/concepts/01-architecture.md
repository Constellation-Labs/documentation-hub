---
title: Architecture of a Metagraph
sidebar_label: Architecture
hide_table_of_contents: false
---

<intro-end />

This section describes the network architecture of a standard metagraph developed through Euclid SDK. It should be noted that metagraphs can be developed in different formats and are not required to follow this structure. For example, a metagraph could add additional custom L1 layers, or even L2 layers, or make use of other consensus algorithms. While these architectures are possible, they are not common. Here we will stick to the most common available architectures. 

## Metagraph Layers
Metagraphs consist of an L0 layer and one or more L1 layers. The L0 layer handles the final validation of data, running consensus, and creating snapshots, which are the fundamental units of chain state on the Constellation Network. L1 layers are responsible for ingesting data, performing initial validations, and running their own DAG-based consensus before submitting data (packaged as blocks) to the L0 layer.

Each layer forms a cluster of three or more nodes that communicate with each other to facilitate consensus rounds. This communication occurs over HTTP network APIs with source-signed requests. Communication across layers, such as an L1 layer submitting blocks to the L0 layer, also uses HTTP requests with additional security layers.

The L0 layer forms its own chain of snapshots that represent the shared state of the metagraph. This chain is independent of the global snapshot chain and progresses at its own rate. As new metagraph snapshots finalize, the metagraph L0 layer submits them to the Global L0 for inclusion in a global snapshot. Thus, metagraph snapshots are both independent and coupled to the global chain.

![Euclid SDK](/img/metagraphs/metagraph-architecture.svg)

### Layer Definitions

#### Metagraph L0
The metagraph L0 layer (sometimes called Currency L0 layer) is the validation and consensus layer of a metagraph. It is responsible for forming the final chain of snapshots that make up the shared state of the network and submitting those snapshots to the Global L0. 

#### Currency L1
The Currency L1 layer is a DAG-based scaling layer for processing incoming L0 token transactions. This layer runs standard token validations (signature, sender, balances) on incoming transactions, accepting or rejecting transactions based on custom validation criteria, packaging the transactions into blocks, and then running consensus on those blocks before sending them to the Metagraph L0 layer for inclusion in a metagraph snapshot. 

#### Data L1
The Data L1 layer is a DAG-based scaling layer for processing incoming data updates (custom data transactions). This layer is responsible for decoding custom data updates, running signature and additional custom validations on them, forming blocks with the validated updates, and then running consensus on those blocks before sending the blocks the Metagraph L0 layer for inclusion in a metagraph snapshot. 

#### Global L0
The Global L0 layer or gL0 is the L0 layer of the Hypergraph which runs full network consensus and forms global snapshots. Metagraph snapshots are submitted to the gL0 for inclusion in a global snapshot.

### Scaling Considerations
Since L1 layers run DAG-based consensus, they can run parallel rounds of consensus, allowing for horizontal scaling. More L1 nodes per layer increase the ability to process data. Conversely, the L0 layer runs a proof of stake consensus that requires participation from all nodes in the layer. Horizontal scaling does not enhance the L0 layer's throughput capacity. Scaling the throughput of this layer necessitates vertical scaling, adding resources to individual nodes. However, increasing the number of L0 nodes on a metagraph improves security through increased decentralization.

