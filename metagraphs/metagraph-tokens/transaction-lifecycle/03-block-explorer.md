---
title: Block Explorer API
hide_table_of_contents: false
---

<intro-end />

The Block Explorer API is a service provided for the network to assist in indexing and querying of historical, finalized transactions. It is not a direct part of the transaction lifecycle but querying the Block Explorer API is often the most convenient way to confirm that a transaction has been finalized. Due to the micro-service based architecture of Constellation Network, querying for transactions during their flow through each layer can be difficult. The Block Explorer API simplifies those queries and includes only finalized transactions that have been included in a Global Snapshot. 

The Block Explorer API depends on a snapshot streaming service that listens for finalized Global Snapshots on the network and indexes them on a elastisearch instance. The elastisearch instance is made available to the Block Explorer REST API for public queries of transactions, snapshots, and rewards. 

For more information on the Block Explorer API, see the [Network APIs](/hypergraph/architecture) section of the docs. 