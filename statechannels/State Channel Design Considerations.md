---
title: State Channel Design Considerations
hide_table_of_contents: false
---

<head>
    <title> State Channel Design Considerations
</title>
    <meta
        name="description"
        content="Lorem ipsum"
  />
    </head>

# State Channel Design Considerations

A state channel is free to be implemented by developers in the way that
makes the most sense for its use case. Ultimately, a state channel's business
requirements will determine its technological requirements and
implementation strategy. This will vary by industry and likely evolve over time. Let us examine the following scenario:

### Scenario: Validating IoT Sensor Data

In this scenario, a business manufactures and sells temperature sensors
which monitor changes in environmental conditions within shipping
containers. These containers are responsible for transporting food that
requires refrigeration. Fluctuations in the temperature of the shipping
container can spoil food, with each type of food product possessing its
own particular tolerance for the duration and degree of temperature
fluctuations. Meats for example, can tolerate a 7°F increase in
temperature for a maximum of 30 minutes while Milk can only tolerate 5°F
increase for 15 minutes. Currently, the temperatures are checked at the
shipping origin and destination and only provide an indication of the
highest temperature, the lowest temperature, and average temperature of the
container during its journey. This could lead to an incorrect conclusion
that the meat and milk are safe to consume because of the low fidelity
of the data which doesn't include duration of time for each degree in
temperature change.

The business wants to be able to know if, when, and for how long the
temperatures in the container exceeded the tolerance ranges for each
product type. The business decides to create a Constellation Network
state channel which will granularly track temperature during shipment by
notarizing this sensor data onto Constellation Network's Hypergraph to
create a history of temperature checks that can be queried. The implementation can
proceed in a couple of different ways depending on the technical
requirements and hardware involved:

**Implementation Approach #1: Configure each IoT device as a State Channel**

Although theoretically possible, the IoT hardware in this particular
scenario would not be an ideal candidate for deploying a state channel.
Typically, industrial IoT sensors are designed with very lean hardware
specifications that do not have the CPU, memory, or battery to support
computationally intensive tasks. This configuration could be possible in
other use cases involving a single endpoint that has more hardware
resources, such as a laptop or desktop computer, where the objective is
simply to sign and submit data directly to the Global L0 for
notarization without decentralized consensus being conducted by a
network of state channel validator nodes.

**Implementation Approach #2: Configure a State Channel Network**

If the objective is to validate and notarize data from a fleet of IoT
devices, as is the case in this scenario, a state channel network would
be capable of fulfilling the complex validation logic and scalability
requirements that the use case calls for. In this implementation, the
IoT sensors would send data to a State Channel network that is composed
of one or more validator node clusters (3 nodes) which would process the data according to
the logic defined within it. For example, the state channel can organize
the incoming sensor data according to the specific data structure being
received. These transactional events can then be bundled into blocks at
particular intervals and/or bundled into state channel snapshots
according to the logic defined. The snapshots are then submitted into
the Global L0 Hypergraph for global validation at the size and interval
needed to fulfill the desired business logic requirements.

### Decentralization Considerations

Continuing from the example outlined previously, Option 2 discusses
implementing a State Channel Network to process and validate data being
received from a network of IoT sensors. It is entirely up to the
developers of this network to decide on the degree of decentralization
that is required to meet their business objectives. There is no hard requirement for
a state channel to implement a consensus process at all, meaning, a cluster of nodes
is optional. If one were to take this approach, decentralized consensus would not occur
and the state channel would simply be self-signing and attesting to the validity
of the data that is submitted as a snapshot into the Global L0. This state data is then
validated and notarized by the global consensus algorithm, becoming immutable within
the Hypergraph. While this configuration may be the simplest to implement,
it does not take advantage of the benefits of the horizontal scaling properties of the
distributed computing paradigm nor the cryptographic and game theoretic principles
underlying decentralized consensus which is the key to unlocking trust-less data validation.

Now with that said, there is nothing preventing a State Channel from
starting out this way and then slowly growing into a multi-cluster network
of nodes as it needs to scale out various microservices and trust-less security profile.
To start with, it is recommended to begin with a minimum of three nodes (1 cluster)
so that there is an opportunity early on in the design phase of the state channel network to
configure, test, and tune the consensus algorithm. Three nodes will enable the state channel 
to adapt to workload fluctuations and provides the availability, partition tolerance, and 
consistency that a performant and secure stateful peer to peer network requires. This, of course,
is only one dimension to what typically constitutes as "decentralized". The other consideration
is whether these validator nodes are permissioned or permissionless in regard to who can own and operates them.

The decision to create a private state channel network versus a public
one will really depend on the business case which can evolve over time
and actually exists on a spectrum. For example:

-   **Private:** A state channel can decide to own and operate all of
    its validator nodes. This of course comes with the overhead paying
    out of pocket to own, manage, and maintain hardware resources.

-   **Permissioned:** A state channel can decide to approve of specific
    individuals who they trust to own and operate validator nodes. This
    is essentially a validator node whitelist.

-   **Permissionless:** A state channel can decide to simply allow
    anyone from the public to own and operate a node to participate in
    consensus. This usually requires implementing a validator rewards
    mechanism which involves a token distribution of some kind to
    attract node operators to your network.

Determining the degree of decentralization and permissions that a state
channel requires will in most cases be determined by the consumers of
the data. In the IoT sensor data scenario, the company's desire to
increase the fidelity of their sensor data is primarily driven by their
desire to improve outcomes for their customers. It also enables them to
analyze this data to identify ways to improve upon the hardware design
of the sensors themselves while proactively detecting malfunctioning
equipment. The history of sensor data could reveal patterns involving
network/internet connection stability and coverage, weather patterns in
specific locations of the shipping routes, so on and so forth. In all of
these examples the IoT sensor company is the one consuming the data to
enhance their product. It would make sense for it to deploy a private or
possibly a permissioned network in this instance.

![](https://github.com/Constellation-Labs/documentation-hub/blob/main/static/img/coreconcepts/5-%20organization%20data%20.jpeg)

Now, let's say the company decides to incorporate "Web 3.0" business
logic into their enterprise by tokenizing the sensor data that they are
accumulating so they can sell it to other businesses or organizations.
Would this change the expectation of the state channel network
configuration to one that is permissionless rather than private? In the
Web 2.0 world, a consumer places his/her/its trust in a business's
reputation and brand when making the decision to engage in procurement
of goods and services. Will this paradigm extend into tokenized datasets
and data streams? This ultimately depends on what the data will be used
for and what consequences bad data will have on the individual,
business, or organization consuming the data. Is it worth the risk or
would the consumer prefer that the data be validated by a large network
of publicly owned and operated validator nodes which are not potentially
subject to unilateral manipulation (Private) or collusion (Permissioned)
to spoof or alter state data?

What if the data is used to train machine learning models where the
provenance and integrity of the data is paramount? For the model to be
successful it must avoid the "garbage in; garbage out" dilemma, which
will negatively impact the business's product or service quality, its
reputation, and ultimately its revenues. In the worst-case scenario, bad
data could impact a critical outcome that literally results in human
death and suffering. This could manifest as miscalculations in the
prediction algorithms of an autonomous vehicle\'s computer vision
system, corruption of data that is used for sensitive manufacturing
processes, disruption of physical supply chain which can result in
spoiled medical and food supplies, and poisoning of the code supply
chain which could have disastrous effects on software development life
cycles. Automation presents unprecedented opportunities to introduce
efficiency into existing business logic as well as innovate entirely new
business paradigms through tokenization models, however, this can only
be achieved if decisions and insights derived from data pipelines are
founded in high fidelity data that can be trusted.

### Constellation Network Validator Considerations

Constellation Network's DAG token enables a State Channel to access its network of global validator nodes for validation throughput. In order for a State Channel to
submit state data into Constellation Network, it must
hold enough DAG within its registered address to reserve access to the network resources that it needs (the State Channel wallet is also referred to as a
liquidity pool). The amount of DAG required to facilitate a state
channel's business logic will vary according to how frequently state
channel snapshots are submitted into the Hypergraph. The frequency in
which snapshots will be submitted is entirely dependent on the
objectives of the state channel which will need to be evaluated by the
developer to identify and confirm its technical requirements. This will
likely become a continuous process of discovery through experimentation,
testing, and benchmarking within a pre-production local test net and/or
public test net as the state channel's services are increasingly adopted
and utilized. A re-evaluation of consensus logic and architecture will naturally
need to occur as new features and functionalities are introduced into
the state channel to support and expand its products/services.

For example, the complexity, size, and interval of a state channel
snapshot may increase depending on the number of transactions and/or
blocks that are folded into it. Developers are free to decide how to
implement this in the way that best supports the technical and economic
business objectives of the state channel. In some cases, it may make
more sense to fold transactions directly into snapshots whereas in other
cases it may make more sense to bundle transactions into blocks before
folding them into snapshots. Ultimately, these design choices will be
informed by the type of data being validated, the product or service
being provided, and the consensus logic defined. Submitting state
snapshots into Constellation Network provides the state channel with the
ability to interoperate and exchange state data with other networks and
applications which are interfaced into it. Developers can be as
selective as they need to be when defining the data types that remain
off-chain within the state channel network versus what is included in
the state channel snapshot that is submitted into the public Global
Layer 0 network.

**Requirements to Submit State Data into Constellation Network:**

All state channels have a "liquidity pool" address which stores DAG that has been staked to support their business logic validation
throughput. The network is fee-less when there are enough performing
nodes or enough staked liquidity has been attracted to the associated
State Channel.

**How do state channels obtain DAG to increase their network
throughput?**

There are three options:

-   The state channel purchases enough DAG to operate their own nodes.

-   Attract public node operators to delegate DAG to support the state
    channel's validation demands.

-   Attract network participants to stake DAG into the state channel's
    liquidity pool.

**How will state channels attract stakers to delegate DAG for
throughput?**

By incentivizing them with tokenized rewards. Think of it in the same
way that liquidity providers provide financial resources to facilitate
trading activity on a financial exchange (aka Market Making). The
liquidity providers take on risk by underwriting the exchange with the
capital that they lend out in exchange for a fee that is charged for
every trade their capital facilitates. In the case of a state channel,
they can provide a tokenized asset that possesses enough value where the
node operator perceives it as being worthwhile enough to justify the
risk of delegating their DAG to provide the liquidity to support the
throughput necessary for their business to operate. This creates a
competitive environment between state channels to attract DAG throughput
where the risk for the validator node operator in this case is the
opportunity cost and return on investment of choosing to support one
state channel business over another.

**What constitutes a "tokenized reward"?**

A reward can be a utility token that derives its value from its direct
connection into the state channels business logic and functionality, or
it could be something that is not connected to their business logic at
all. Developers have the freedom to choose what types of rewards are
provided to different groups of validators that it relies on. For
example, it can provide different types and amounts of tokenized rewards
to the Constellation Network validators, which validate state channel
snapshots, compared to the rewards it issues to its own local network of
validators which are responsible for organizing and validating the state
channels "off-chain" (i.e. off-hypergraph) traffic. Some theoretical
examples include:

- Access tokens to the state channels service and/or generated data
sets.

- An atomic cross-chain swap could facilitate compensation in the form
of another network's native token, such as ETH or BTC.

- Similar to the previous example, the state channel can choose to
compensate using a token belonging to a business partner's platform.
Interesting "force multiplier\" strategic compensation patterns could
potentially emerge in this way promoting the utilization of a
complimentary state channel applications.

- Thinking beyond crypto-native rewards, the L_0 token standard can
technically support the representation of traditional assets of value.
This is one of the most exciting propositions of all as it opens up the
possibility to tokenize traditional liquid assets associated with
existing exchanges as Stocks, Bonds, and Commodities to reward node
operators.

- Building on this previous concept, NFTs introduce the ability to
fractionalize contracts of ownership in a way that will enable
traditionally illiquid assets to also be traded and used to reward node
operators. Imagine a node operator receiving rewards in the form of
partial ownership in real estate, a vehicle, jewelry, artwork,
intellectual property, copyrights to your favorite song by your favorite
artist, or your favorite football player's NFL contract.

### State Channel Validator Considerations

As previously outlined in the Constellation Network Architecture
Overview section, each State Channel can be viewed as a "Local L_0"
network that has the option of implementing independent networks of
validator nodes to scale out different aspects of their business logic
accordingly. This can be implemented in a variety of different ways
depending on the requirements of the state channel. For example, one
could decide to segregate specific services into different "Cells" or
layers with their own independent network of validator nodes. This
provides flexibility in how each service is updated and managed,
providing a mechanism to introduce decentralized consensus to each
microservice as needed. Each consensus process that corresponds with a
defined Cell (i.e Layer) can be deployed on separate networks of nodes,
consolidated onto the same network of nodes, or a combination of
implementation approaches. As an example, an implementation can be as
diverse as the following configuration:

-   L0 & L1 Cells: Share the same network of validator nodes.

-   L2 Cell: Independent network of validator nodes.

-   L3 Cell: No network of nodes as the logic doesn't require
    decentralized validation.

This design decision will be informed by the requirements of the state
channel. For example, if a single network of validator nodes will be
handling the consensus processes for multiple Cells it is important to
understand and measure the implications to hardware resources and
network overhead as each Cell that is added to a node will be executed
as its own independent process. The type of data structures and
validation logic processed by each Cell can range from very simple to
very complex, in addition to the rate at which data is streamed into
them. Another consideration is the increase in complexity of the
management and delivery of updates to nodes when they are consolidated
onto the same hardware. These factors are important to review when
determining how to configure validator nodes to achieve the operational
targets of the state channel's business logic.

**Cell Considerations: Separation of Concerns**

**L0 Cell:** The fundamental role of the L0 Cell is to create a state
channel snapshot, sign it, and then serialize it for submission into the
Global L_0 Hypergraph network for notarization. A network of validator
nodes can facilitate this process, or it can simply be just a single
computer. This all depends on the amount of data being processed,
security, and decentralization requirements. Technically, the L0 Cell
can be defined to receive data directly from external sources and
process it into transactions and blocks, which are finally folded into
state channel snapshots. The decision to combine these operations into
the L0 Cell, however, may complicate horizontal scale later on as the
state channel matures.

**L1 Cell:** When examining Constellation Network's design choices,
there is a clear separation of concerns in how the global network has
been implemented. Specifically, the network is comprised of a "Global
L_0" cell and a "DAG_L1" cell. The "DAG_L1" is responsible for
performing consensus on \$DAG transactions as well as processing state
channel snapshots that enter the network into blocks which are then
proxied into the "Global L_0 Cell" to create Global State Snapshots.
This approach enables the separation of these processes so that the
network can distribute processing load across different sets of
validator nodes as needed.

**L2, L3, etc.:** Ultimately it is up to the developer to determine
where and when it makes sense to break out processes into micro-services
through the implementation of Cells and where it is prudent to
consolidate services. The state channel framework allows for various
configurations where L1, L2, L3, etc. Cells can proxy data into one
another and/or into the L0 Cell according to asynchronous or synchronous
logic defined within each Cell. There is no limitation to how many Cells
a state channel can implement.

**Token Requirements for State Channel Validator Nodes**

State Channel validators are responsible for organizing and validating
state data locally, prior to submission of state channel snapshots into
the Global L_0 Hypergraph network. As such, there is no requirement for
these nodes to collateralize DAG. Instead, the requirement for token
collateralization is a tokenomics decision that is entirely up to the
state channel. For example, an L_0 Token can be defined and minted by
the state channel to function as a reward mechanism to incentivize node
operators to validate different types of state channel traffic. A
requirement can be imposed to collateralize a specific quantity of these
tokens in order to participate as a validator node to perform consensus.
These choices are all aspects of the state channel's protocol
governance.

**Performance Engineering Considerations**

Depending on the state channel's particular implementation, it may
require establishing a minimum hardware requirement for nodes which
differs from Constellation Network's specification, in order to support its
specific application logic and service level agreements (SLA) with its
customers. In fact, a node leveraging the PRO consensus algorithm could
even be deployed on most entry-level smartphones depending on the
parameters of consensus logic defined by the state channel. Discovering
the optimal network and hardware configurations will be an exercise in
performance engineering, testing, and tuning. When tuning to achieve a
particular TPS (Transactions per Second) it is important to consider all of
the processing that a single transaction undergoes including consensus
and validation steps. Identifying where and how to optimize the
throughput rate of a single transaction will establish a baseline
reference which can then be used to isolate other areas of overhead that
may be impacting TPS, such as network latency. Further optimization can
be introduced such as compression and/or reconfiguration of the state
channel's network topology.

The complexity, size, and rate at which data payloads are streamed into
a state channel's Cell should be taken into consideration along with the
complexity of the consensus logic applied to them. One path to
increasing TPS could be to split up processing responsibilities and/or
data types across multiple Cells in the formation of a data
transformation and aggregation pipeline which can be horizontally scaled
out. This level of flexibility is at the core of Constellation Network's
microservices approach to scale and embodies well established best
practices of existing distributed computing paradigms.

**Custom Consensus & Rewards Distribution**

Constellation Network employs a validator rewards distribution model
that is coupled with its PRO consensus model, whereby nodes which
participate in consensus rounds get rewarded in proportion to their
reputation score. This same logic can be adopted and applied to a State
Channel's rewards logic, or it can be modified to incorporate additional
criteria. For example, rewards for validator nodes can be defined
according to different models, including but not limited to:

-   **Proof of Work:** Rewards are distributed only for provable work
    done. This can be defined in any way that the state channel sees
    fit. It is not to be confused with PoW consensus algorithm which
    Bitcoin or Ethereum employ, rather, it is the concept of rewarding a
    specific node for the completion of a particular task or process.

-   **Shared Work:** Rewards are shared amongst the addresses in the
    liquidity pool using a dividends model of distribution.

-   **Compound Work:** Rewards are shared amongst the addresses in the
    liquidity pool by a compounding factor. The compounding factor can
    be a stake or fraction of total ownership

Rewards are not only reserved for validator nodes but can also be
defined for various interactions and engagements. The state channel can
implement rewards as a gamification mechanism to encourage participation
in its ecosystem and attract customers. This will likely be informed by
an overall incentivization strategy which could encourage or discourage
specific behaviors or interactions based on the state channel's
business objectives.
