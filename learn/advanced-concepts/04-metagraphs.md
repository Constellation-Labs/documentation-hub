---
title: Metagraphs
hide_table_of_contents: false
---
<intro-end />

Metagraphs are independent networks which are capable of processing and validating complex data from any data source. They connect with the global L0 network by sending snapshots that undergo further validation before being added to the global ledger. Like traditional microservices, metagraphs are able to define their own business logic and interact with external services.

![Metagraphs](/img/coreconcepts/architecture.jpeg)

## Metagraphs vs Smart Contracts
Many blockchain networks use some form of smart contract to add immutable application layer functionality to their networks. The introduction of smart contracts allowed Web3 applications to flourish but smart contracts themselves are inherently limited by the platform upon which they are built. Among other issues, smart contracts suffer from the [oracle problem](https://blog.chain.link/what-is-the-blockchain-oracle-problem/) which limits their utility for applications that rely on external data, by isolating the logic necessary to verify and reproduce the external data into a peer subset of off-chain nodes.

Metagraphs, by extending a core consensus library and bringing it closer to the native application level stack, are able to accept and validate different types of data from real world data sources like IOT sensors, ad exchanges, or even Layer 1 blockchains. Multiple layers of data validation and consensus allow metagraphs to verify complex streams of data from untrusted external sources before submitting to the global ledger, and deal with application specific dependencies not available to a conventional isolated contract.

A metagraph can contain an indefinite number of validation layers, or "Cells", where different consensus logic is defined for the various data types that are proxied into them. The term cell can refer to many different types of data structures depending on the project, but here the main focus is on “write-once, read-many” concurrency, data encapsulation, and applying functions to an arbitrary data input. Each Cell embodies a potentially different execution context, either shared or specific to each network, and has the option to horizontally scale out its computational capacity by distributing load across independent networks of validator nodes. Data from one Cell can be carried to the next Cell to form a processing pipeline. Because of this structure, metagraphs are able to construct services that are significantly more powerful and secure than could be built with a smart contract, and cover functionality not handled by conventional networks. The most basic example of Cell structure would be a specific data class and some map operation off of that to determine validity or materialize a transform defined against a specified executor.

## Metagraph Architecture
Metagraphs are flexible enough to support diverse business use cases and can be constructed in many different ways. Traditional centralized services can easily be combined with decentralized networks of validator nodes to create powerful systems. Developers are free to construct their metagraph in whatever way best supports their technical and business objectives.

Here are some of the ways a metagraph can be organized to handle variations in permissioning:
- **Decentralized network:** A metagraph can be organized as a micro version of the global L0 network with one or more layers of custom validator nodes generating consensus before passing state to the global L0.
- **Hybrid network:** A metagraph can include centralized elements and make use of a decentralized network of validator nodes to run a custom consensus protocol before submitting state to the global L0.
- **Centralized service:** A metagraph can be composed of a single server or a cluster of centralized servers that make use of the global L0 and global ledger state. Centralized services do not make use of some of the most powerful tools available to metagraph developers but can be useful in specific use cases or to scaffold more complex applications.

In general, even within an application itself, there is a desire to handle variations in the extension of validation logic by peer set. For example, some initial operations may require a specialized library which cannot be packaged into a typical smart contract, as the code depends on many other existing libraries. For this, we still would want that operation to undergo consensus (in a specified L1,) to guarantee security on validation of that operation, but we would also want operations chained off of this to undergo validation upon a larger network context, and for the results to be available to potentially different L1 networks. This behavior already exists in the form of specific applications for verifying inputs to oracle systems that feed into other contracts, but it is separated at a chain level and shares no common protocol.

The goal here is to support this level of customization, by splitting operations under a common API allowing for users to express this level of granularity in developing their own use case.

## Metagraph Tokens
Metagraphs can define their own tokens, known as metagraph tokens, which can be used to transact within their network, reward node operators, and assign value to data. Learn more about the [Metagraph Token Standard](/metagraphs/metagraph-tokens/overview). 

:::info Want to learn more about building a metagraph? 
Detailed information on the design and implementation of metagraphs can be found in the [Build a Metagraph](/metagraphs) section.
:::

