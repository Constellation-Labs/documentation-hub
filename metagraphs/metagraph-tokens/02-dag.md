---
title: DAG
hide_table_of_contents: false
---

<intro-end />

DAG is the native currency of the Constellation Network and serves as a model for the Metagraph Token Standard. As the network’s native currency, DAG is used to pay for optional transaction fees, snapshot fees, and is distributed as rewards to Hypergraph validator nodes that participate in the consensus process. Additionally, its unique status on the network enables it to function as a currency of exchange for metagraph tokens on the network.

The DAG network is designed as a Layer-1 (L1) network and differs from other metagraphs on the network that typically consist of an L0 network and an L1 network. In the case of DAG, the L1 network does not have its own L0 network to form snapshots. Transactions are processed within the DAG L1 network before undergoing consensus in groups of three or more nodes. The consensus process generates a block, or blocks if processed in parallel rounds of consensus. These DAG L1 blocks are then sent directly to the Global L0 network to undergo validation and be included in Global Snapshots. 

It is worth noting that the DAG L1 network does not produce its own snapshots, but relies on the Global L0 for snapshot processing. This is different from metagraphs that bundle their blocks of transactions into currency snapshots before sending to the Global L0. Instead, the DAG L1 blocks are sent directly to the Global L0 network for processing and inclusion in the Global Snapshots.

See [Architecture](/metagraphs/concepts/architecture) for more information on how the DAG L1 interacts with the rest of the Hypergraph. 