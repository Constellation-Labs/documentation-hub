---
title: "Current Challenges"
hide_table_of_contents: true
---

<head>
  <title>Current Challenges</title>
  <meta
    name="description"
    content=""
  />
</head>

## What are the problems that Constellation Network is solving?
Constellation Network views Web 3.0 as both an extension and an evolution of the
Web 2.0 model. Web 3.0 does not necessarily replace existing information technology infrastructure, rather, it builds
upon it by proposing a new decentralized protocol to add to its existing suite of protocols. No DLT or Blockchain
technology to date has proven to be scalable, durable, and flexible enough to be considered eligible for entry
into the existing TCP/IP stack as standardized decentralized protocol for transferring and validating data. There
are many outstanding challenges that need to be overcome before a standard will emerge. The challenges that
Constellation Network seeks to solve are as follows:

### Lack of Interoperability
One of the primary challenges
with existing Blockchain/DLT networks is that they are closed systems which cannot directly interface with stateful
systems that are external to them, making it difficult, or in many cases impossible to integrate into existing technological
infrastructure and business processes. This inflexibility also creates a barrier to comply with existing regulations and standards.
To date, the industry has proposed a fragmented set of "bridging" solutions in an attempt to enable interoperability between different
ledgers and "off-chain" systems, however, none have entirely solved the problem. The challenge which prevents effective
interoperability solutions from emerging can be understood as "The Oracle Problem", which is the inability to securely incorporate
data derived from external systems into the consensus process of a blockchain. The narrow data types that current blockchains
and distributed ledgers are capable of storing and validating creates a need for a mechanism to validate and relay information
through separate middle-ware protocols, referred to as Oracles. The reliance on separate Oracle networks to bridge external data introduces
external dependencies which can complicate development, limit composability of complex logic, and inhibit the ability for a decentralized application to scale and diversify its business logic.

### Limited Programmability
A smart contract enables application logic to be processed by a decentralized network of untrusted computers in a verifiable way.
It is the code that underpins decentralized applications, referred to as "Dapps". A smart contract's level of programmability is limited
to very simple "if this, then that" binary logic due to their dependencies on underlying the blockchain network
that they are deployed on. This results in an inability to cope with user defined complex data types, which
is a result of monolithic architecture choices and dynamically typed programming languages used in their design. This
forces the blockchain protocol to constrain the execution environment to a limited set of pre-defined data types in order
to verify its state. These limitations are further reinforced by the implementation of a single-tiered network of consensus
facilitator nodes that require a shared execution context to carry out computational tasks. This leads to the development of blockchain
specific programming languages that are not aligned with the broader computer science industry.

### Inability to Scale
Scalable distributed systems are not new — Apache Spark and Hadoop are two of the most widely used systems in large distributed data
applications. Handling millions of transactions a day, they auto-scale with ease across many servers to create highly flexible
and elastic computing clusters. Millions of users throughout the world use hundreds of applications every day, and these apps
operate across distributed data centers globally. The challenge, however, is to create a scalable decentralized application platform
that is essentially trust-less in its operation and functionality. In typical distributed systems, all nodes are controlled by the parent
company and trivially trusted by all the participants of the platform.

Blockchains, in particular, are handicapped by the linear construction of
the ledger's data structure which is composed of a single chain of blocks that all nodes are required to synchronize with.
More recent approaches which utilize a Directed Acyclic Graph as the ledger data structure still suffer from many of
the same challenges, despite allowing for asynchronous updates to the ledger's state, as they are merely extending
chain-like structures to a graph-like structure consisting of linked blocks. This undermines the ability to horizontally
scale out the network's computational capacity, preventing consensus parallelization and distribution of load across nodes.
The power of the distributed computing paradigm and its multiplicative effect on processing throughput is lost on these protocol
implementations. Furthermore, the proposals to scale these protocols by way of database sharding does not solve the fundamental
flaws in their design and introduces complexity in managing the network's security and can lead to fragmentation, or worse,
the corruption of shards.

###  Decentralization Barriers  
In a decentralized platform, the nodes are not controlled by any single entity;
thus we cannot necessarily impose a pre-defined trust on them to prevent malicious behavior on the network. This raises a more fundamental question:
why is the trust of a node relevant to the network? It is well-known from distributed computing that separate parts of the network often have different sets
of data due to concurrency and latency. The network needs to eventually reach a consensus about the state of the network — thereby
formalizing the true state of transactions and data flowing in the network. However, in an open permissionless network, a node may propagate falsified
data and try to establish a wrong state of the network aligned with their incentive (financial or otherwise). In that case, deciding between two
sets of conflicting data is not easy without taking into account the reputation of the nodes behind them.

Despite the various rewards mechanisms devised to incent the decentralized ownership of nodes, cryptocurrencies are operated and secured by increasingly centralized networks and mining organizations
that control the security of the network. Bitcoin was created to solve the problem of distributed consensus for financial transactions, but
relied upon the energy intensive consensus process known as proof of work. This pools vertical computational power from a select few individuals
with well-developed and hence centralized computing power. With proof-of-stake, there is a democratic imbalance where the economic
incentives to join the network is biased towards nodes with the most financial stake. These factors have inevitably paved the way for further
centralization of power within these networks, verticalizing mining operations and centralizing large bondholders as a plutocracy, or, a monopoly
in the case of delegated proof-of-stake incentive structures.

### Unsustainable Economics 
The challenges outlined thus far generate financial barriers for individuals to utilize these protocols and
prevents enterprises from building profitable and sustainable business models on top of them. The cost of doing business must make economic sense
for all participants in the network otherwise the value exchange is fundamentally undermined from the start. The current fee-per-transaction model 
quickly become cost prohibitive and non-viable for businesses dependent on the protocol to process their data. Existing decentralized protocols
break down when the utilization of the network is correlated with rising and variable transaction fees, ultimately discouraging its use.
These variable costs make it unpredictable to conduct business and scale operations. Therefore, infrastructure layers utilizing transaction
fees as their overarching economic sink are only justifiable for use cases with limited economic scope and technical scalability.
