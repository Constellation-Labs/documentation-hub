---
title: Concepts
sidebar_label: Concepts
---


## What is the Hypergraph Network? 
The Hypergraph Network is a decentralized network using distributed ledger technology to support transfers of $DAG cryptocurrencies and state channel data validation without explicit fees. It uses a directed acyclic graph (DAG) protocol and the novel Proof of Reputable Observation (PRO) consensus. "Hypergraph" is a central concept in consensus optimizations and refers to graph edges that connect more than two vertices.

## What is a Directed Acyclic Graph (DAG)? 
A directed acyclic graph (DAG) is commonplace in orchestration tools, data pipelines, and compiler optimizations. In a blockchain context, it refers both to dependency optimizations, as well as a new approach to building layered security pioneered by many separate projects breaking up linear parent reference blocks into many concurrent ancestor references. In other words, it is a parallelization strategy that translates the conventional hash-layered security of a blockchain into a coincident structure. A conventional blockchain is a chain of hash references sequentially organized in single links, while a DAG is more like a graph conceptually. 

## What is HGTP? 
The Hypergraph transfer protocol (HGTP) is secure, elastically scalable, and cross-chain interoperable. The protocol is the heart of the Hypergraph decentralized network. The Hypergraph network’s DAG-based architecture supports the extension of the PRO consensus model and currency transfers ($DAG). That means it can support the creation of layer one (L1) networks and applications. Additionally, it allows for the operation of distributed validation nodes and state channels. State channels support application and L1 network creation.


## What is $DAG? 
The Hypergraph's native cryptocurrency is the $DAG. The $DAG operates on an exclusive state channel that facilitates seamless interaction between state channels and network nodes. In other words, $DAG binds network components together and is how the Hypergraph provides utility.

## What is the Global L0 Network?
The Hypergraph is our network's base layer (a.k.a layer 0 or L0). It's a global layer that sits below an L1 network and performs the final validation of arbitrary data, via a network of validator nodes, before submitting that data to the global, immutable ledger. Examples of L1 networks are Ethereum, Solana, and Bitcoin. The layers communicate with one another via state channels. In other words, the Hypergraph enables cross-chain interoperability by being an intermediary layer that handles the interaction between chains. That assumes, of course, that the chains communicate with a shared core format. See [Network Architecture](/core-concepts/network/architecture) for more information. 

## What is a state channel? 
State channels are independent networks or microservices that connect to the L0 network. They process and validate complex data types with custom business logic. They are the second layer of the network. See [State Channels](/core-concepts/network/state-channels) and [Network Architecture](/core-concepts/network/architecture) for more information.

## Are there any fees on the network? 
Most users pay no transaction fees. We offer every wallet a free transaction per snapshot, and each snapshot is roughly 5 seconds long. In other words, all wallets can transact once every 5 seconds for free. That is enough for most users. In order to filter out spam and DDoS attacks, simple heuristics are applied to establish fees for larger compute requirements. When users feel the need for speed or higher throughputs or volumes, however, they can prioritize their transactions by paying a 1 datum (0.00000001 DAG) fee. That means the L1 network will process the transactions as fast as it can. That is typically a rate in the hundreds per snapshot.
