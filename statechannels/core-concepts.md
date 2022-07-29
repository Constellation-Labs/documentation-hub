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
A State Channel can be understood in its most basic form as a "contract" with the outside world. The logic that governs
how a state channel interfaces with other state channels through Constellation Network's HGTP is referred to as an
Application Chain Interface (ACI) and is defined within its State Channel Snapshot Definition. This interface is a JSON object
with configuration information and a public key associated to the channel itself. The reason a public key is associated
with the state channel is to create a brokerage mechanism for state channel data. When a state channel is deployed, the
developers configure how data routed from the Global L0 Hypergraph network are distributed amongst its nodes and operators.
Because of this, state channels can act as their own arbitrating authority in defining financial policy. 

For a decentralized network this translates from interest rate fluctuation and injection of capital into a particular 
sector, into fluctuations of validator rewards and resources offered. Constellation's DAG token is a data structure that
serves as a unit of exchange which enables different state channel economies to normalize values between each other. DAG
mathematically verifies that no data or value is leaked or invented between ledgers as it is the medium that connects
ledger states together through the Global L0 Hypergraph network of heterogeneous state data. This creates an arbitrage free
network of interoperable economies where liquidity pools belonging to different state channel interfaces can be exchanged
atomically, forming a global liquidity pool.

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
