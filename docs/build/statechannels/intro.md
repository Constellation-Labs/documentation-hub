---
title: "Introduction"
hide_table_of_contents: true
---

<head>
  <title>Introduction to State Channels</title>
  <meta
    name="description"
    content="Lorem ipsum"
  />
</head>

State channels can be networks that possess their own validator nodes, consensus logic, and economic parameters. They can also be individual endpoints that submit data to the network for validation.

## Overview
What is horizontal scalability? What is vertical scalability? How do they relate to each other and how are they implemented in the context of Constellation?State channels submit data directly to their associated L0 address. The rate at which they can submit this data into the L0 is dependent on the amount of DAG that is contained within their liquidity pool. 

From the point of view of the network, state channels are considered operating at the L0, submitting data directly into L0 which then gets bundled into the global state of the network. They can be their own fully fledged independent network. They can also just be a simple IoT device or abritrary device that is submitted a stream of data into the network for validation. 

### Constellation is responsible for two networks:

L0 and DAG L1. 

### L0 Network Role:
- global snapshot consensus -> selecting majority snapshot via global consensus, finality
Process that currently works on DAG L1:
- block consensus (packs transactions into blocks)

### State channel requirement are:
1. data must be in binary format
2. data must be signed by the owner of state channel
3. data must be sent to L0, to be indexed into global snapshot

## Summary

There is an endpoint: `POST /global-snapshot/{address}/snapshot` that expects any arbitrary binary data with the requirement that is must be signed. In the SDK it’s of type `Signed[Array[Byte]]`. Such data will be validated against the signature correctness (whether the signature has been created by the owner of the state channel and it signs those sent data). If validation is correct, binary data becomes a part of a global snapshot. From the state channel perspective, it **should** be a network (StateChannel L0) that makes a consensus and sends data to L0, but as long as requirements are met, it can be anything (consider your own laptop that signs some data, serialize them and send to L0. it could also be a state channel).

In order to get data back from L0, one needs to query either the L0 for binary data or state channel L0 for exact data (by endpoints published by the state channel owner).

For example, I can get binary data for state channel X on snapshot Y. in order to deserialize it, I need to know the schema or a compression algorithm of the state channel.