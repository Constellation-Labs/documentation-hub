---
title: ACI
slug: aci
hide_table_of_contents: false
---

## Overview

Core to most distributed consensus protocols is the ability to apply consensus to the problem of secure remote code execution. Secure remote code execution requires the validation of executible binary sent to a remote server to perform an operation in such a way that the server does not become exposed to injection attacks, essentially taking over the runtime of an application to expose data or permissions of the server. To do so in such a way that allows for a globally converged state, each concensus participant needs to know the definitions of all contracts interfacing with the global ledger. These contracts rely on what's typically known as an ABI (Application Binary Interface) to register their API and state update methods. The binary is typically contained as a field of a json string or compatible data type which can be rendered into a human readable interface to the api/contract of the stateful ledger. Typically, these have been described as a program defined within a limited execution environment (virtual machine) and API that defines a stateful "contract" for iterative state updates. However, this model is not limited only by execution environment and primitive data types, it limits state updates to serial convergence of the network: i.e. it forces a distributed system to operate in serial or sequentially, potentially allowing one contract to bottleneck others. How then could the problem of remote code execution be be mitigated in a truly parallel sense?

A natural solution is to federate responsibility to parallel sub-networks and allow them to converge concurrently on partitions of the total state. In order to do so, the runtime environment and executable logic of smart contracts needs to be expanded. HGTP solves this with the ACI or Application Chain Interface and corresponding database. As opposed to the traditional smart contract ABI, the ACI is configurable; each node operator registers the data and execution logic they wish to validate or "mine". Because these contracts are for their own independent networks, whose ledgers are "off-chain" with respect to the Global DAG L0 ledger, in HGTP they are referred to as "State Channels."

## General architecture[](https://deploy-preview-15--documents-hub.netlify.app/statechannels/core-concepts#general-architecture)

Each node stores the ACI of the channels it wishes to validate in a service called the ACI Registry. The flow of registration is described in the following diagram and [reference implementation.](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-68dacc00f3c02aae7e41c491367cb8798d4728648e5218bb23b3cc7c94abad45R13)

![Architecture](/img/statechannels/ACI_architecture.png)

The entry point is the [ACI Server](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-186c557b0716cd70729ae1210001fb4e35b61b2e033466c81d07d9b353b4af29R28) which access it the main resources via [ACI Context.](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-62274e96c1476a6f059c4e9f3b3baef565c0aa011827a50e59e31a9e2a57779cR10)

One resource contained within the ACI Context, the [Runtime Loader,](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-7855e5955bc399df7508628b6ecb0da078358378b828818be753dec7f491b91eR14) instantiates the serializers necessary to deserialize state channel data (kryo registrar).

## Local Multi-Channel Validation (alpha)[](https://deploy-preview-15--documents-hub.netlify.app/statechannels/core-concepts#local-multi-chanel-validation-alpha)

An example is provided in the [ACI App](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-186c557b0716cd70729ae1210001fb4e35b61b2e033466c81d07d9b353b4af29R11) which loads the definition from the [Example Manifest](https://github.com/Constellation-Labs/tessellation/pull/12/commits/e2c11cc832df8350eca456315d885d076c321703#diff-4be48c13f0a5881ec2c09831e20d34e05bd2e127a2105243cd5da9ce09e6b2a1R15) and can be run as a local jar file. This is extendable to implement multi-layer validation as described by the following diagram.

![Local](/img/statechannels/ACI_local.png)

Where we see that incoming data is then deserialized by the ACI and processed by the state channel's Cells (algebra/coalgebra). Note that sandboxing and use of JVM secure classloader should be used in tandem for proper security.

## DAG L0 validation[](https://deploy-preview-15--documents-hub.netlify.app/statechannels/core-concepts#dag-l0-validation)

Each state channel is meant to serve a specific use case and the DAG L0 is no different. The purpose of the DAG L0 is to provide a meta consensus process that allows L1 ledgers to swap values. In order to maximize security scalability and decentralization for this use case, its ACI contains definitions for performing hash based validation on ledger state as each state channel's executable and contains fields necessary to define a state channel's "liquidity pool" which is a configuration for handling transactions and normalization across L1 ledgers.