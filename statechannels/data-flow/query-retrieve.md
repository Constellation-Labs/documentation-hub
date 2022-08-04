---
title: Query and Retrive
slug: query-retrieve
hide_table_of_contents: false
---

# Query and Retrieve

![Define](/img/statechannels/dataflow.png)

## Query and Retrieve Binary Data from a Global Snapshot[](https://documents-hub.netlify.app/statechannels/scflow#step-4-query-and-retrieve-binary-data-from-a-global-snapshot)

Constellation provides a `GET API` that will allow you to retrieve state channel data from the global snapshot by specifying the specific state channel snapshot hash and its content as an `Array[Byte]`. State channel snapshots create a linear chain with next snapshot referencing the previous one, and so on.