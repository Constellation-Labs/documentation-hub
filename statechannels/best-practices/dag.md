---
title: DAG Token
slug: dag
hide_table_of_contents: false
---

## Overview

DAG is a utility token which enables different state channel economies to normalize values between each other. DAG mathematically verifies that no data or value is leaked or invented between ledgers—DAG is the medium that connects ledgers together through Constellation’s global L0 network. This creates an arbitrage-free network of interoperable economies where liquidity pools belonging to different state channels can be exchanged atomically, forming a global liquidity pool.

## How DAG works in a state channel

The DAG token enables a state channel to tap its network of validator nodes for validation throughput. In order for a state channel to submit state data into Constellation Network, it must hold enough DAG within its registered address to reserve access to the network resources that it needs. The state channel wallet is also referred to as a “liquidity pool.” The network is feeless when there are enough performing nodes or enough staked liquidity in the associated state channel.

## How much DAG is required?

The amount of DAG required to run a state channel will vary according to how often state snapshots are submitted into the Hypergraph. The snapshot frequency is entirely dependent on the objectives and technical requirements of the state channel. 

For example, the complexity, size, and interval of a state channel snapshot may increase depending on the number of transactions and/or blocks that are folded into it. The state channel is free to decide how to implement this in the way that best supports its technical and economic business objectives. In some cases, it may make more sense to fold transactions directly into snapshots, or bundle transactions into blocks before folding.

:::info 📸 Why state snapshots?
Submitting state snapshots into Constellation Network gives the state channel the ability to interoperate and exchange state data with other networks and applications connected to it. The state channel can be selective when defining off-chain data types within its network versus on-chain data submitted to the Global Layer 0 network.
:::

Ultimately, these design choices will be informed by:

- The type of data being validated
- The product or service being provided
- The consensus logic
- The architecture

This is all part of a continuous discovery process through experimentation and benchmarking within a testnet as the state channel grows. Consensus logic and architecture will naturally need to be revisited as new features and functionalities are introduced to the state’s ecosystem.

## How do state channels get DAG?

Here are some ideas:

- The state channel buys enough DAG to keep their nodes running
- Offer validation rewards to node operators
- Offer staking programs with rewards to increase the state channel’s liquidity pool

## How do state channels attract liquidity?

One way is by incentivizing node operators with tokenized rewards. Think of how the stock market works—liquidity providers give out loans to markets, and in exchange, take a fee for every market trade. Similarly, node operators act as liquidity providers by staking DAG in the state channel’s liquidity pool and in exchange, earn tokenized rewards for keeping the lights on. Each state channel can decide how much DAG is required to operate a node as well as the rewards type and structure. This creates a competitive market between state channels that benefits the global network at large.

## Tokenized rewards

A reward can be a state channel’s own token or a totally different one, like DAG. Reward types and structures are designed and governed by each state channel.

Possible examples include:

- Access tokens to the state channels service and/or generated data sets.
- An atomic cross-chain swap could facilitate compensation in the form of another network's native token, such as ETH or BTC.
- Similar to the previous example, the state channel can choose to compensate using a token belonging to a business partner's platform. Interesting "force multiplier" strategic compensation patterns could potentially emerge in this way promoting the utilization of a complimentary state channel applications.
- Thinking beyond crypto-native rewards, the L_0 token standard can technically support the representation of traditional assets of value. This is one of the most exciting propositions of all as it opens up the possibility to tokenize traditional liquid assets associated with existing exchanges as Stocks, Bonds, and Commodities to reward node operators.
- Building on this previous concept, NFTs introduce the ability to fractionalize contracts of ownership in a way that will enable traditionally illiquid assets to also be traded and used to reward node operators. Imagine a node operator receiving rewards in the form of partial ownership in real estate, a vehicle, jewelry, artwork, intellectual property, copyrights to your favorite song by your favorite artist, or your favorite football player's NFL contract.