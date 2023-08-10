---
title: Constellation Primer
sidebar_label: Constellation Primer
slug: /
hide_table_of_contents: false
---

The basics covered here attempt to paint a landscape of the overall system and its core components — think of this as your Constellation crib sheet. Once you are familiar with these high-level concepts, we encourage you to dive deeper into more advanced topics.

## What is Constellation Network?
Constellation is a feeless decentralized network that enables anyone to build the future of Web3 on a secure, infinitely scalable and cross-chain interoperable protocol underwritten by [DAG](/learn/advanced-concepts/DAG-Token), its native utility token.

![Constellation Network architecture overview](/img/metagraphs/architecture.png)
<figcaption><strong>Figure 1.</strong> Network architecture overview.</figcaption>
<br /><br />

:::info Constellation vs Hypergraph
Constellation Network is, in its broadest sense, a technology company, but it can also refer to our decentralized network. Throughout the docs, we'll be referring to the network as either **Hypergraph** or **Global L0** which are defined in the following sections.
:::

## Network Components

### HGTP
 **HGTP** (Hypergraph Transfer Protocol) is Constellation's core technology and language of the network, just as HTTP is the foundation to the World Wide Web. HGTP contains the rules that shape Hypergraph's architecture and defines how data and transactions are exchanged and validated across the network.

### Hypergraph
The design of the Hypergraph network is based on a graph structure that looks like a set of dots (vertices) joined by lines (edges). More specifically, this structure is known as a [directed acyclic graph](/learn/advanced-concepts/DAG-structure) (DAG) which allows for endless horizontal scalability, so as the network grows, it becomes even faster. This design results in a network that is not only secure, but fully decentralized and infinitely scalable, solving the Blockchain Trilemma whereby only two of the three options were possible to achieve.

### DAG Token
[DAG](/learn/advanced-concepts/DAG-Token) is the native utility token of Constellation Network, eponymously named after the network's [structure](/learn/advanced-concepts/DAG-structure) as previously described. DAG underwrites all projects connected to the Hypergraph and secures network utility by providing liquidity and sufficient bandwidth to the entire ecosystem.

### Metagraph
A [metagraph](/learn/advanced-concepts/metagraphs) (previously "state channel") is a project network built on top of the Hypergraph that supports [metagraph tokens](/metagraphs/metagraph-tokens/overview), custom data types and distributed applications, all maintained and secured by validator nodes orchestrated by **Proof-of-Reputable Observation (PRO)**, Constellation's [consensus mechanism](/metagraphs/concepts/consensus). For example, the DAG token operates on an exclusive metagraph with validator nodes that provide resources to validate and confirm transactions.

### Validators
[Validator nodes](/learn/advanced-concepts/validator-nodes) validate or perform consensus on all the data that flows through the network, and are incentivized with DAG tokens which are used to pay the costs of these compute resources.

## Network Layers
The network is made up of layers with each serving a unique purpose as described below.

![Network Layers](/img/learn/network-layers.png)

### Global L0
Comprising of hardware, protocols and other components, this foundational layer forms the backbone of the Hypergraph and as such, establishes itself as a true layer-zero protocol. It validates and stores metagraph data on the immutable ledger and enables cross-chain interoperability, which allows other blockchains to communicate with one another.

:::info Hypergraph = Global L0
Hypergraph and Global L0 are sometimes used interchangeably, with the distinction that Global L0 is commonly used in developer docs and technical articles. 
:::

### Metagraph L0
Metagraph nodes in this layer are responsible for submitting [snapshots](/metagraphs/concepts/snapshots) to the Global L0. A snapshot contains a bundle of validated transactions that are passed from metagraph L1 to metagraph L0 for consensus before it's finally captured on the Hypergraph.

### Metagraph L1
This layer symbolizes the actual "blockchain" or MainNet, and is where the metagraph networks reside — this is why metagraphs are often described as networks built on top of Hypergraph. The first round of consensus is performed here before it's passed down to metagraph L0 for a second round.
