---
title: Overview
sidebar_label: Overview
hide_table_of_contents: false
---

<intro-end />

The Data API is a module available to Currency Framework developers to ingest and validate custom data types through their metagraphs. It's a set of tools for managing data interactions within the metagraph that is flexible enough to support a wide range of application use cases such as IoT, NFTs, or custom application-specific blockchains. 

:::info Example Code
Want to jump directly to a code example? A number of examples can be found on Github under the [Metagraph Examples](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples) repo.
:::


## Data Update Lifecycle
__Data L1 layer lifecycle__
1. Update received by POST endpoint on L1 (POST `/data`)
2. Update is decoded as `Signed[DataUpdate]`
3. `deserializeUpdate` called
4. Signature validated
5. `validateUpdate` called
6. Data enqueued for L1 consensus


__L0 layer lifecycle__
1. `validateData` called
2. `combine` called
3. `serializeState` called

### The Data Endpoint
Data is submitted to an application via a single REST endpoint on Data L1 nodes, located at `/data`. By default, this endpoint accepts data as a signed JSON request in the following format:

```json
{
  "value": {
    // This type is defined by your application code
  },
  "proofs": [{
    "id": "<public key>",
    "signature": "<signature of data in value key above>"
  }]
}
```

The endpoint is designed to support multiple data types through a single access point, and these types are parsed within your application code. To accommodate different types of data,  implement a lifecycle function named `signedDataEntityDecoder`. This function takes in your data and converts it to the `Signed[DataUpdate]` class, as defined in your application. For a practical example on how requests are parsed into the `Signed[DataUpdate]` class, refer to the [DOR Metagraph example](https://github.com/Constellation-Labs/dor-metagraph).

All the `Lifecycle functions` are explained [here](./lifecycle-functions)