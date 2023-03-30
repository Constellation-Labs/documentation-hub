---
title: Architecture
hide_table_of_contents: false
---
<intro-end />

Constellation Network is made up of a number of different layers of functionality with different roles and responsibilities. 

![Constellation Network architecture overview](/img/metagraphs/architecture.png)

### Network Components

- **Global L0 or Hypergraph** - The Global L0 network is the final consensus layer for the rest of the network. It processes blocks from the DAG L1 network and metagraph snapshots from metagraphs and processes them into global snapshots.
- **DAG L1 network** - The DAG L1 network is a special case metagraph that validates transactions, runs them through parallel rounds of consensus, and processes them into blocks that are then submitted to the Global L0 network for inclusion in a Global Snapshot. DAG is the native currency of the network.
- **Metagraph networks** - Metagraph networks are independent Layer 1 distributed ledgers that operate on top of the Global L0 network. They process currency or data transactions, bundle

### Important Terminology

- **Global Snapshot** - a state snapshot on the Global L0 network that may contain DAG transactions and metagraph snapshots. Global snapshots are chained together to make up the immutable ledger at the center of the network.
- **Metagraph snapshot** - a state snapshot produced by a metagraph that is submitted to the Global L0 network for final validation.
- **Metagraph token** - A metagraph token is a currency token following the L0 Token Interface for integration with the Hypergraph and third party apps such as wallets and exchanges. Metagraphs running metagraph tokens submit their transactions to the Global L0 network for validation and inclusion in downstream services such as the Block Explorer API.
