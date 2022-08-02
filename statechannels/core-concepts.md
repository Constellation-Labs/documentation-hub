---
title: State Channel Core Concepts
---

![Existing Apps](/img/coreconcepts/existing-apps.jpeg)

Constellation Network's Hypergraph Transfer Protocol, or HGTP, is a
decentralized Directed Acyclic Graph (DAG) network which is capable of
securely hosting and serving topological data at internet scale. The
network is composed of "State Channels" which are independent, decentralized,
consensus protocols that can be configured to orchestrate and validate
data pipelines that are generated from any data source. This can be a
single IoT device, a computer, a network of computers, or even another
blockchain network. Each State Channel can define a custom consensus
process which creates a snapshot of the state of the data flowing
through it based on the validation logic and data types it requires. The
global network, referred to as the "Global Layer 0", then conducts concurrent
consensus across heterogeneous State Channel Snapshots using
type level verification to verify and validate composite state data
across networks, creating a Global State Snapshot.

A State Channel can be understood as a software framework for easily writing decentralized
applications that are capable of organizing, validating, and notarizing vast amounts of state
data in-parallel on large clusters of commodity hardware in a reliable, byzantine fault-tolerant
manner. This creates an interface similar to MapReduce, where an input dataset is split into chunks
which are processed by map tasks in a parallel manner and reduced to an output. This enables the
orchestration of stateful computations over user defined data streams, similar to Apache Spark,
Flink, and Hadoop. In the context of Constellation Network, this MapReduce paradigm is implemented
where the “Map” function is defined as an unfold operation (anamorphism) and the “Reduce” function
is defined as a fold operation (catamorphism). These functions construct what are referred to as
hylomorphic and metamorphic recursion schemes, which enable cryptographically secure data pipelines to be orchestrated.

As the data flows through the network it’s state is notarized into an immutable Directed Acyclic Graph
that can be distributed across an indefinite number of decentralized computers (referred to as nodes). 
This verification occurs by the creation of a non-linear API call graph across networks,
and the formation of a graph of cryptographic signatures across the
result of each API call which is its own typeclass. The nodes in this
graph can be the combination of typeclasses from concurrent API calls;
or thought of as multi-node edges, thus actually forming what is called
a \"HyperGraph\". Implementing a Constellation
State Channel  requires defining a typeclass by writing anamorphism and
catamorphism functions which build recursion schemes (these are referred to as "functor algebras and coalgebras"
within the SDK - more on this later). The logic embedded within the typeclass defines how to
proceed with the next level of the data dependency graph. The typeclass represents the data schema,
while the algebra/coalgebra is a lense for how to interpret it. 

These typeclasses are geometric representations of referential data which encode the entire
topology of a typical data aggregation or transformation pipeline into a
few user defined functions. Data scientists create increasingly
expensive and complex data transformation pipelines to preprocess data
into a useable format to be consumed by their algorithms. This
topological data can be preprocessed into these geometric representative
type classes directly, verses having to build and maintain entirely
separate networks. You can think of Constellation's approach to using
type classes to organize and pre-process topological data as an
evolution of the concept of smart contracts which are typically
constrained to synchronous validation of a very limited set of simple
data types and plagued with performance and scalability challenges. Type
classes abstract the complexity away from combining complex data types
together which belong to different concurrent processes.

## State Channels: A Protocol Framework

At first, the flexibility that Constellation Network's State Channel
technology enables can be overwhelming for developers who have become
accustomed to the limited technological scope of existing smart contract
technologies which have become the status quo. You can think of Constellation Network
as a generic framework for developing a purpose-built "blockchain" protocol which enables
custom consensus logic to be applied to any data type necessary to support
the desired use case. Instead of a central network executing and
processing all application logic, a State Channel can be designed to maintain its own
independent ledger which can be supported by its own horizontally scalable network of validator nodes
that can be incentivized to perform consensus on the data that is passed
through it. Tokenized rewards that the State Channel provides to its
network of validator nodes are completely configurable and independent
of Constellation Network's Global Layer 0 Hypergraph ledger, removing the burden of transaction
fees which are typically encountered with "Layer 1" blockchain networks such as Ethereum.


![SDK](/img/coreconcepts/sdk.jpeg)


These unique properties allow for a technologically and economically
scalable network to be implemented that allows developers to focus on
what they want to accomplish rather than spending time developing
mitigation strategies to work around economic barriers and technical
limitations of monolithic blockchain architectures. In essence, a State
Channel is capable of orchestrating complex validation logic on user
defined data types through each step of the validation process, from its
point of origin to its destination. This solves the "**Oracle Problem**" and
enables the state of external, "off-chain" data to be validated at its source and
then incorporated "on-chain". Constellation Network's Hypergraph Transfer Protocol (HGTP) makes it  possible for any State
Channel that interfaces with the Hypergraph to interoperate and exchange state data with
each other while respecting the business parameters and Software Level Agreements (SLAs) defined through
a common **Application Chain Interface (ACI)**. This opens up entirely new uses cases not previously possible with existing blockchain
technologies, enabling the implicit orchestration and verification of untrusted code as a multi-network API call.

## Application Chain Interface (ACI)

Core to most distributed consensus protocols is the ability to apply consensus to the problem of secure remote code 
execution. Secure remote code execution requires the validation of executible binary sent to a remote server to 
perform an operation in such a way that the server does not become exposed to injection attacks, essentially taking 
over the runtime of an application to expose data or permissions of the server. To do so in such a way that allows for 
a globally converged state, each concensus participant needs to know the definitions of all contracts interfacing with 
the global ledger. These contracts rely on what's typically known as an ABI or application binary interface to 
register their API and state update methods. The binary is typically contained as a field of a json string or 
compatible data type which can be rendered into a human readable interface to the api/contract of the stateful ledger. 
Typically these have been described as a program defined within a limited execution environment (virtual machine) and 
API that defines a stateful "contract" for iterative state updates. However, this model is not limited only by 
execution environment and primitive data types, it limits state updates to serial convergence of the network: i.e. 
it forces a distributed system to operate in serial or sequentially, potentially allowing one contract to bottleneck 
others. How then could the problem of remote code execution be be mitigated in a truly parallel sense?

A natural solution is to federate responsibility to parallel sub-networks and allow them to converge concurrently on 
partitions of the total state. In order to do so, the runtime envoronment and executible logic of smart contracts 
needs to be expanded. HGTP solves this with the ACI or Application Chain Interface and corresponding database. As 
oppossed to the traditional smart contract ABI the ACI is configurable; each node operator registers the data and 
execution logic they wish to validate or "mine". Because these contracts are for their own independent networks, 
whos ledgers are "off chain" with respect to the global DAG L0 ledger, in HGTP they are reffered to as 
"State Channels." 

### General architecture

Each node stores the ACI of the channels it wishes to validate in a service called the ACI Registry. The flow of 
registration is described in the following diagram and [reference 
implementation.](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-68dacc00f3c02aae7e41c491367cb8798d4728648e5218bb23b3cc7c94abad45R13)[![ACI 
Registration Flow Diagram](https://mermaid.ink/img/pako:eNplkcGKgzAQhl9lyGEvW18gh4JoDr2UpdbDgrBMzahhNXGTsVBK330TtPTQXJLM__3hn8ldtE6TkCLQ30K2pdJg73FqLMQ1o2fTmhktQw0YoA7k3yWVJGX17IzldzlPcl4c4ES9Cexv70iZkBIZLxiosStQZ_v9p5JQeEImQAic9nZAa2lcGZWYXEKF10iMPV08AloNrdtuK3d00elNPzC4DqKhcNNsRoIPuJI33ZYpT8-VEg7HSp3OKfTP-ftLrWIZxSxaDzZOgUm_LJlaE-hXqKx-BtepH7ETE_kJjY6zviesETzQRI2Q8ajR_zaisY_ILbOOLqUNOy9kh2OgncCFXXWzrZDsF3pC22etxcc_Dd2Tzg)](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNplkcGKgzAQhl9lyGEvW18gh4JoDr2UpdbDgrBMzahhNXGTsVBK330TtPTQXJLM__3hn8ldtE6TkCLQ30K2pdJg73FqLMQ1o2fTmhktQw0YoA7k3yWVJGX17IzldzlPcl4c4ES9Cexv70iZkBIZLxiosStQZ_v9p5JQeEImQAic9nZAa2lcGZWYXEKF10iMPV08AloNrdtuK3d00elNPzC4DqKhcNNsRoIPuJI33ZYpT8-VEg7HSp3OKfTP-ftLrWIZxSxaDzZOgUm_LJlaE-hXqKx-BtepH7ETE_kJjY6zviesETzQRI2Q8ajR_zaisY_ILbOOLqUNOy9kh2OgncCFXXWzrZDsF3pC22etxcc_Dd2Tzg) 


The entrypoint is the [ACI 
Server](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-186c557b0716cd70729ae1210001fb4e35b61b2e033466c81d07d9b353b4af29R28)
which access it the main resources via [ACI 
Context.](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-62274e96c1476a6f059c4e9f3b3baef565c0aa011827a50e59e31a9e2a57779cR10)

One resource contained within the ACI Context, the [Runtime 
Loader,](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-7855e5955bc399df7508628b6ecb0da078358378b828818be753dec7f491b91eR14)
instantiates the serializers necessary to dserialize state channel data (kryo registrar).

### Local Multi-Chanel Validation (alpha)

An example is provided in the [ACI 
App](https://github.com/Constellation-Labs/tessellation/pull/12/files#diff-186c557b0716cd70729ae1210001fb4e35b61b2e033466c81d07d9b353b4af29R11)
which loads the definition from the [Example 
Manifest](https://github.com/Constellation-Labs/tessellation/pull/12/commits/e2c11cc832df8350eca456315d885d076c321703#diff-4be48c13f0a5881ec2c09831e20d34e05bd2e127a2105243cd5da9ce09e6b2a1R15)
and can be run as a local jar file. This is extendable to impelment multi channel validation as described by 
the following diagram. [![ACI 
Deserialize Flow Diagram](https://mermaid.ink/img/pako:eNplkk1rwzAMhv-K8GFsrGV3Hwoh8cZgX7TNYRAYqq2mZomdOc6glP73ySQjG_VJSM_7SrJ9EtobElL09DWQ01RYrAO2lQM-HYZote3QRSgBeyh7CpcllUrKmc5bFy_LWSpn-SOsqbZ9DMdLpEhIgRF32FPlRqBcrla3SsI2oOtRR-sd3AEoU9MIqARkEh4oAjY74sEBnQHtsalpF3DEXnwkCLY-RPB7YJ4TYB1o1IfJKUtOhYSNelL5Fu7Xr89p4o_t-5saiYKJJWsn5_99wNDeOpsmnP0Yzn3b2eZPjyWvcz2JFrP-Zt6nlHxNmuw3mTmZZHkg5D00NQ1cQRgc5BxWTixES6FFa_gVT0lTiXigliohOTQYPitRuTNzQ2fYQhkbfRByj01PC4FD9Juj00LGMNAvNH2DMXn-AQ9grxg)](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNplkk1rwzAMhv-K8GFsrGV3Hwoh8cZgX7TNYRAYqq2mZomdOc6glP73ySQjG_VJSM_7SrJ9EtobElL09DWQ01RYrAO2lQM-HYZote3QRSgBeyh7CpcllUrKmc5bFy_LWSpn-SOsqbZ9DMdLpEhIgRF32FPlRqBcrla3SsI2oOtRR-sd3AEoU9MIqARkEh4oAjY74sEBnQHtsalpF3DEXnwkCLY-RPB7YJ4TYB1o1IfJKUtOhYSNelL5Fu7Xr89p4o_t-5saiYKJJWsn5_99wNDeOpsmnP0Yzn3b2eZPjyWvcz2JFrP-Zt6nlHxNmuw3mTmZZHkg5D00NQ1cQRgc5BxWTixES6FFa_gVT0lTiXigliohOTQYPitRuTNzQ2fYQhkbfRByj01PC4FD9Juj00LGMNAvNH2DMXn-AQ9grxg)
Where we see that incoming data is then deserialized by the ACI and processed by the state channel's Cells 
(algebra/coalgebra). Note that sandboxing and use of jvm secure classloader should be used in tandem for proper security.

### DAG L0 validation

Each state channel is meant to serve a specific use case and the DAG L0 is no different. The purpose of the DAG L0 is 
to provide a meta consensus process that allows L1 ledgers to swap values. In order to maximize security scalability 
and decentralization for this use case, its ACI contains definitions for performing hash based validation on ledger 
state as each state channel's executible and contains fields necessary to define a state channel's "liquidity pool" 
which is a configuration for handling transactions and noramalization across L1 ledgers.

## Scala/JVM SDK

![Pipeline](/img/coreconcepts/pipeline.jpeg)

Constellation is a JVM (Java Virtual Machine) powered
microservice framework that enables effortless plug-and-play
functionality with existing applications of all types such as Java and
Scala. Specifically, the core framework is developed with Scala v2.x and
should be forwards compatible with Scala 3.x. Scala is statically typed
and combines object-oriented and functional programming in one concise,
high-level language that enables formal verification of code at compile
time, or at the "type level". It is commonly used for mission critical
applications such as large-scale Fintech, Government, and Artificial
Intelligence use cases that require extreme level of information
assurance and code integrity. Scala has been battle tested and used for
the backends of many of the largest and most complex distributed systems
we use every day, where applications are deployed as a collection of
microservices on auto-scaling groups which rely on easy provisioning,
which the JVM provides. In these scenarios a thousand node clusters can be
provisioned and auto-scaled on cloud hosted virtual instances. The same
scalability can be realized with Constellation's microservices
architecture, which allows for the provisioning of resources as needed;
thereby providing a dynamically scalable distributed application
architecture.

### SDK: Software Developer Kit

Constellation Network provides a state channel template in the form of
an
[SDK](https://github.com/Constellation-Labs/tessellation/tree/696177b7a3770ed305ec2504ac02dbd187033aa9/modules/sdk/src/main/scala/org/tessellation/sdk)
that can be easily repurposed for its particular use case. The SDK
includes the following resources to create a Layer 0 network containing
as many Cells as required:

-   Consensus Logic: Handles Proposals, Voting, and Validation

-   Health Check Logic: Ensures nodes are operating as expected

-   Communication protocol: P2P connection handling and
    Gossiping

-   Security Provider: Digital Signature System using SHA512/ECDSA

-   Logging Configurator: A generic façade for integrating logging frameworks

-   Serialization Framework: Orchestrates binary serialization to create
    streams

**Project Dependencies**

Project dependencies are typically contained within a build file, which
combines all libraries, frameworks, and code that your application
depends on. The [Tessellation Code
Repository](https://github.com/Constellation-Labs/tessellation/)
includes an SBT or Scala Build Tool file which is a build system that is
common in the JVM ecosystem. For SBT users, HGTP is added by downloading
the dependency jar to your development environment (computer/server).
When HGTP has been added to your build file, the next step is to compile
and make sure there are no conflicts. This will provide pre-packaged
interfaces which can be repurposed to design a custom state channel by
simply adopting the existing consensus logic defined for Constellation
Network's native DAG L_1 state channel. Developers can make the
necessary modifications in order to create a completely new state
channel that fulfills their technical requirements while being entirely compatible with every other state channel connected into the HGTP.

The project's SBT can be downloaded and viewed
[here.](https://github.com/Constellation-Labs/tessellation/blob/ff1ef41b727730df5cb2f59edef1c017168e046d/build.sbt)

A list of dependencies can be downloaded and viewed
[here.](https://github.com/Constellation-Labs/tessellation/blob/ff1ef41b727730df5cb2f59edef1c017168e046d/project/Dependencies.scala)


The SDK abstracts away the complexity of having to understand
the underlying system components and server configurations, allowing
developers to focus on defining the data type schemas and validations
steps that they want implemented into their state channel. Developers
can implicitly orchestrate the flow of data on the stack frames of a
single computer/server or on stack frames across multiple servers in a
cluster. Operations, such as multiple queries or merged streams of data,
spread across multiple machines, can be verified. Moreover, their logic
can be verified 'at the type level', or rather at compile time, even
before deploying to a cluster. This is also the breakthrough that
allowed Apache Spark to drastically simplify the development of MapReduce jobs,
making Big Data easily accessible to non-data engineers. Ultimately what
this means for the state channel is that it doesn't need to know the
global state of the hypergraph network for it to access and query the
data that is required to perform the operation or function that
developers have configured for its application logic.

## Database Cellularization

A core of innovation of HGTP is its approach to normalizing and
partitioning state data through the use of mathematical structures known
as "Cell Complexes". This allows the protocol to differentiate,
validate, and combine data streams derived from different sources in a verifiable manner while
enabling the protocol to scale and partition state data in a way that
circumvents the limitations of linear database sharding techniques. This feat is accomplished by encoding data
into geometric objects, referred to as "Topological Data", which enables logical
cohesion of state data at a higher dimensionality. Each state channel can define as many Cells as required, implementing
them as microservices. All that is required for a developer to understand is that a "Cell" embodies an asynchronous
operation that allows your program to complete work while waiting for another operation to finish, such as fetching data
over a network, writing to a database, and reading data from a file. In this sense, Cells are statically 
typed versions of the Java concept of a \"Future\", which holds the result of an asynchronous operation:

\- Completed with a value

\- Completed with an error

\- Incomplete.

A Cell has a defined function which reacts to incoming data types that
it is programmed to recognize and performs a specific action which can
be passed into another function as a parameter where another operation
is performed, so on and so forth, until the execution chain is
completed. You can think of it as a statically typed version of a
\"Callback Function\" which is also used in Java, Javascript, and other
languages that handle asynchronous events, consistent with functional
and reactive programming paradigms (FRP: functional reactive
programming).

In the following sections we will explore the architecture of the
network and the implementation process in more detail.
