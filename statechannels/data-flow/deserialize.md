---
title: Deserialize
slug: deserialize
hide_table_of_contents: false
---

![Define](/img/statechannels/dataflow.png)

## Deserialize the binary data according to the state channel snapshot schema[](https://documents-hub.netlify.app/statechannels/scflow#step-5-deserialize-the-binary-data-according-to-the-state-channel-snapshot-schema)

State channel snapshots are stored within the Global L0 network as serialized binary objects. The Global L0 does not deserialize data contained within the state channel snapshots. In order to recreate the object in memory, you will need to know how to deserialize the state channel snapshot. Data types are pre-registered at the "type level" using Kyro serialization to enable verification, with each data type possessing a unique Kryo ID. Knowledge of the Kryo ID and corresponding data type schema will be required, in addition to any other data handling considerations (compression, encryption, etc.).

It is up to the State Channel to decide how to communicate and/or document their state channel snapshot schema to enable deserialization of the data contained within their snapshots. A state channel can decide to make some or all of this information public or private depending on their use case and security requirements.

Depending on the use case and business model, a state channel can decide to deserialize its state snapshot information in an automated way for simpler consumption as a product or service. For example, one could decide to incorporate this state data into a front-end application of an app or web site. It could also create a secured API for querying deserialized data as a monetized service. The way in which this data is implemented and exposed is entirely up to the design choices and objectives of the state channel.