---
title: State Channels
hide_table_of_contents: false
---
<intro-end />

State channels are independent networks which are capable of processing and validating complex data from any data source. They connect with the global L0 network by sending snapshots that undergo further validation before being added to the global ledger. Like traditional microservices, state channels are able to define their own business logic and interact with external services.

![State Channels](/img/coreconcepts/architecture.jpeg)

## State Channels vs Smart Contracts
Many blockchain networks use some form of smart contract to add immutable application layer functionality to their networks. The introduction of smart contracts allowed Web3 applications to flourish but smart contracts themselves are inherently limited. Among other issues, smart contracts suffer from the [oracle problem](https://blog.chain.link/what-is-the-blockchain-oracle-problem/) which limits their utility for applications that rely on external data - which is a lot. 

State channels are able to accept and validate different types of data from real world data sources like IOT sensors, ad exchanges, or even Layer 1 blockchains. Multiple layers of data validation and consensus allow state channels to verify complex streams of data from untrusted external sources before submitting to the global ledger. 

A State Channel can contain an indefinite number of validation layers, or "Cells", where different consensus logic is defined for the various data types that are proxied into them. Each Cell embodies a different execution context and has the option to horizontally scale out its computational capacity by distributing load across independent networks of validator nodes. Data from one Cell can be curried to the next Cell to form a processing pipeline. Because of this structure, state channels are able to construct services that are significantly more powerful and secure than could be built with a smart contract. 

## State Channel Architecture
State channels are flexible enough to support diverse business use cases and can be constructed in many different ways. Tradational centralized services can easily be combined with decentralized networks of validator nodes to create powerful systems. Developers are free to construct their state channel in whatever way best supports their technical and business objectives. 

Here are some of the ways a state channel can be organized: 
- **Decentralized network:** A state channel can be organized as a micro version of the global L0 network with one or more layers of custom validator nodes generating consensus before passing state to the global L0. 
- **Hybrid network:** A state channel can include centralized elements and make use of a decentralized network of validator nodes to run a custom consensus protocol before submitting state to the global L0. 
- **Centralized service:** A state channel can be composed of a single server or a cluster of centralized servers that make use of the global L0 and global ledger state. Centralized services do not make use of some of the most powerful tools available to state channel developers but can be useful in specific use cases or to scaffold more complex applications.

:::info Want to learn more about building a state channel? 
Detailed information on the design and implementation of state channels can be found in the [Build a State Channel](/statechannels) section.
:::

## L0 Token
State channels can define their own tokens, known as L0 tokens, which can be used to transact within their network, reward node operators, and assign value to data. Learn more about the [L0 Token Standard](/core-concepts/l0-token-standard).
