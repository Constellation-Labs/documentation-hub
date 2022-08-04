---
title: State Channel Validation
slug: validation
hide_table_of_contents: false
---

Each State Channel can be viewed as a "Local L_0" network that has the option of implementing independent networks of validator nodes to scale out different aspects of their business logic accordingly. This can be implemented in a variety of different ways depending on the requirements of the state channel. 

## Example

For example, one could decide to segregate specific services into different "Cells" or layers with their own independent network of validator nodes. This provides flexibility in how each service is updated and managed, providing a mechanism to introduce decentralized consensus to each microservice as needed. Each consensus process that corresponds with a defined Cell (i.e Layer) can be deployed on separate networks of nodes, consolidated onto the same network of nodes, or a combination of implementation approaches. As an example, an implementation can be as diverse as the following configuration:

- L0 & L1 Cells: Share the same network of validator nodes.
- L2 Cell: Independent network of validator nodes.
- L3 Cell: No network of nodes as the logic doesn't require decentralized validation.

This design decision will be informed by the requirements of the state channel. For example, if a single network of validator nodes will be handling the consensus processes for multiple Cells it is important to understand and measure the implications to hardware resources and network overhead as each Cell that is added to a node will be executed as its own independent process. The type of data structures and validation logic processed by each Cell can range from very simple to very complex, in addition to the rate at which data is streamed into them. Another consideration is the increase in complexity of the management and delivery of updates to nodes when they are consolidated onto the same hardware. These factors are important to review when determining how to configure validator nodes to achieve the operational targets of the state channel's business logic.

## Cell Considerations: Separation of Concerns

### L0 Cell
The fundamental role of the L0 Cell is to create a state channel snapshot, sign it, and then serialize it for submission into the Global L_0 Hypergraph network for notarization. A network of validator nodes can facilitate this process, or it can simply be just a single computer. This all depends on the amount of data being processed, security, and decentralization requirements. Technically, the L0 Cell can be defined to receive data directly from external sources and process it into transactions and blocks, which are finally folded into state channel snapshots. The decision to combine these operations into the L0 Cell, however, may complicate horizontal scale later on as the state channel matures.

### L1 Cell
When examining Constellation Network's design choices, there is a clear separation of concerns in how the global network has been implemented. Specifically, the network is comprised of a "Global L_0" cell and a "DAG_L1" cell. The "DAG_L1" is responsible for performing consensus on \$DAG transactions as well as processing state channel snapshots that enter the network into blocks which are then proxied into the "Global L_0 Cell" to create Global State Snapshots. This approach enables the separation of these processes so that the network can distribute processing load across different sets of validator nodes as needed.

### L2, L3, etc.
Ultimately it is up to the developer to determine where and when it makes sense to break out processes into micro-services through the implementation of Cells and where it is prudent to consolidate services. The state channel framework allows for various configurations where L1, L2, L3, etc. Cells can proxy data into one another and/or into the L0 Cell according to asynchronous or synchronous logic defined within each Cell. There is no limitation to how many Cells a state channel can implement.

## Token Requirements for State Channel Validator Nodes

State Channel validators are responsible for organizing and validating state data locally, prior to submission of state channel snapshots into the Global L_0 Hypergraph network. As such, there is no requirement for these nodes to collateralize DAG. Instead, the requirement for token collateralization is a tokenomics decision that is entirely up to the state channel. For example, an L_0 Token can be defined and minted by the state channel to function as a reward mechanism to incentivize node operators to validate different types of state channel traffic. A requirement can be imposed to collateralize a specific quantity of these tokens in order to participate as a validator node to perform consensus. These choices are all aspects of the state channel's protocol governance.

## Performance Engineering Considerations

Depending on the state channel's particular implementation, it may require establishing a minimum hardware requirement for nodes which differs from Constellation Network's specification, in order to support its specific application logic and service level agreements (SLA) with its customers. In fact, a node leveraging the PRO consensus algorithm could even be deployed on most entry-level smartphones depending on the parameters of consensus logic defined by the state channel. Discovering the optimal network and hardware configurations will be an exercise in performance engineering, testing, and tuning. When tuning to achieve a particular TPS (Transactions per Second) it is important to consider all of the processing that a single transaction undergoes including consensus and validation steps. Identifying where and how to optimize the throughput rate of a single transaction will establish a baseline reference which can then be used to isolate other areas of overhead that may be impacting TPS, such as network latency. Further optimization can be introduced such as compression and/or reconfiguration of the state channel's network topology.

The complexity, size, and rate at which data payloads are streamed into a state channel's Cell should be taken into consideration along with the complexity of the consensus logic applied to them. One path to increasing TPS could be to split up processing responsibilities and/or data types across multiple Cells in the formation of a data transformation and aggregation pipeline which can be horizontally scaled out. This level of flexibility is at the core of Constellation Network's microservices approach to scale and embodies well established best practices of existing distributed computing paradigms.

## Custom Consensus & Rewards Distribution

Constellation Network employs a validator rewards distribution model that is coupled with its PRO consensus model, whereby nodes which participate in consensus rounds get rewarded in proportion to their reputation score. This same logic can be adopted and applied to a State Channel's rewards logic, or it can be modified to incorporate additional criteria. For example, rewards for validator nodes can be defined according to different models, including but not limited to:

### Proof of Work
Rewards are distributed only for provable work done. This can be defined in any way that the state channel sees fit. It is not to be confused with PoW consensus algorithm which Bitcoin or Ethereum employ, rather, it is the concept of rewarding a specific node for the completion of a particular task or process.

### Shared Work
Rewards are shared amongst the addresses in the liquidity pool using a dividends model of distribution.

### Compound Work
Rewards are shared amongst the addresses in the liquidity pool by a compounding factor. The compounding factor can be a stake or fraction of total ownership

Rewards are not only reserved for validator nodes but can also be defined for various interactions and engagements. The state channel can implement rewards as a gamification mechanism to encourage participation in its ecosystem and attract customers. This will likely be informed by an overall incentivization strategy which could encourage or discourage specific behaviors or interactions based on the state channel's business objectives.