---
title: Overview
slug: overview
hide_table_of_contents: false
---

# Steps

![Define](/img/statechannels/dataflow.png)

The following steps are required to submit data *to* and retrieve data *from* the Hypergraph L0 network:

1. Define State Channel Snapshot Schema
2. Specify logic that will fold data into a state channel snapshot and serialize it into binary format
3. Sign and send binary data to the Global L_0 network
4. Query and retrieve binary data from the global snapshot
5. Deserialize the binary data according to the State Channel Snapshot Schema