---
title: Network Fees on the Hypergraph
sidebar_label: Network Fees Litepaper
hide_table_of_contents: false
---

A Generative Approach to the Implementation of Fees for Scalability and Security

## Introduction

This document seeks to further the discussion on Constellation Network's economic model by introducing specific metrics and frameworks for the implementation of fees within the network. It draws connections between the network's commitment to free peer-to-peer transactions and the broader trend towards "pay as you go" systems in cloud computing. Furthermore, it explores the tokenomics of the network in relation to these fees, presenting a revitalized vision for leveraging Constellation Network's unique incentive and reward mechanisms to cultivate self-sustaining, generative economies.

We introduce a framework for snapshot fees that is integral to the economic model, underpinning the network's ability to incentivize positive activity, support scalability at various stages, and ensure network security. This framework involves a strategic introduction of fees to benefit the entire network, motivate positive activities, and bolster the network's capacity to scale.

By introducing fees in a way that stimulates efficient network utilization, fortifies against potential security threats, and generates a utility marketplace, this paper discusses the creation of a robust platform that encourages innovation without sacrificing security or scalability. In the following sections, we present a comprehensive approach to maintaining a vibrant ecosystem that benefits all stakeholders—underscoring our commitment to accessibility, sustainability, and collective prosperity within the Constellation Network.

## Network Fees

Constellation Network adheres to the core principle that most network actions should be feeless, fostering a low-fee environment to support the diverse use cases it aims to nurture. While we clarify that low-fee does not mean no-fee, the careful application of network fees, denominated in DAG, is crucial for network scalability and security. These fees play a pivotal role in the decentralized tokenomics of the network, not only by determining the cost of actions and incentivizing certain behaviors but also by deterring malicious attacks. Striking a careful balance between fees and rewards is vital for the network to attract diverse economic models for our metagraph layer, and to scale and accommodate innovation over the years, while simultaneously supporting robust network security. 

Moreover, it's important to note that our approach to low or zero fees functions as a subsidy to stimulate network participation and growth. By minimizing fees, Constellation Network aims to lower barriers to entry, making it more accessible for users and encouraging broader adoption of both DAG as a utility token and metagraphs as a platform for development. This strategy is designed to support the network's expansion by fostering an environment that is attractive to new users and developers, ultimately contributing to a self-sustaining and growing ecosystem.

Fees are utilized on the network for the following purposes:

- **Securing the network against attacks:** by making certain patterns of behavior more expensive, such as DDoS or spam attacks, the economic viability of attacking network vulnerabilities is reduced.
- **Efficient resource utilization:** introducing cost mechanisms encourages users towards more resource-efficient behaviors, optimizing network resource usage without imposing limitations. An illustration of this principle is the implementation of metagraph snapshot fees, which attach a tangible cost to data storage on the Hypergraph. This incentivizes metagraph teams to innovate, such as by storing only data notarizations (hashes) on-chain rather than the full data sets, leading to more efficient network space utilization.
- **Creating a utility marketplace:** network fees serve to facilitate a transaction space where users compensate resource providers for their services, effectively creating a marketplace for the exchange of utility. For example, metagraphs pay snapshot fees for the utility of validation, consensus, and storage on the ledger while validator nodes generate rewards for their work validating transactions, reaching consensus, and providing access to on-chain data.


Furthermore, fees fall broadly into two categories: 

- **Required**: A minimum fee is necessary for certain actions to proceed, particularly for essential network operations or those involving tangible costs, like snapshot processing and storage. These mandatory fees ensure that critical functions are supported and maintained across the network. Without meeting this fee requirement, the specified actions will not be executed.
- **Optional**: a dynamic or market-rate fee that allows actions to be performed with enhanced priority or speed. Such fees act as incentives for transaction prioritization and overcoming network-imposed limitations, like transaction rate limits. This approach resembles a "tip" to validators, rewarding them for expedited processing of blocks or metagraph snapshots.

Next, we examine the use of fees in two critical areas of the network: peer to peer transactions and metagraph snapshots. 

### Peer to Peer Transactions

As the native utility token of the Constellation Network, DAG is used as a method of exchanging value between users through peer to peer transactions on the network. While primarily a feeless currency, DAG has always had the concept of *optional* fees which can be used to prioritize a transaction over others. For the vast majority of network users, there is no need for prioritization, effectively allowing them to operate within a free usage tier while senders with specific throughput or latency requirements pay a small fee for their usage of the network. 

For example, an optional fee can be provided to a DAG transaction as a way to prioritize it over other transactions within the mempool and trigger on-demand consensus on the network. This significantly increases transaction throughput for individual wallets and is useful in bulk sending use cases, such as airdrops or distributing to many wallets at once. The optional nature of DAG fees allows those fees to act as a rate limiting mechanism, forcing heavy users of the network to pay for the relatively greater impact of their actions on network resources. 

In the coming months, Constellation will be rolling out a small number of limited restrictions for DAG transactions in order to enhance security and scalability of the currency. Like with the optional priority fee, these restrictions can be overridden with a small fee. Each fee targets a specific vulnerability in order to enhance security by making these vulnerabilities too slow or too expensive to exploit. An example of such a fee is enumerated below. 

#### Low Balance Rate Limit

DAG wallets will be rate limited by the network based on their DAG balance in order to prevent spamming or address splitting attacks which seek to create many low balance wallets quickly to overwhelm network state storage and memory resources. 

The rate limiting formula is as follows: 

```jsx
rateLimit = 1 hr / (DAG wallet balance / 20)
```

For example, if a wallet has 5,000 DAG (~$250 at time of writing) it would be able to send a transaction every 1/(5000 / 20) of an hour, or every 14 seconds. 

A wallet with a 1 DAG balance (~$0.05 at time of writing) would be able to send 1/(1/20) hours, or once every 20 hours. 

The above rate limit can be overridden, in much the way that DAG transactions can be prioritized, by providing a 0.002 DAG fee (~$0.0001 at time of writing) or higher. 

This rate limiting mechanism effectively deters spam attacks by making it impractical to execute large volumes of transactions from low-balance wallets without incurring significant costs. This mechanism also ensures that the average user will rarely, if ever, encounter these rate limits unless they are attempting to use accounts with very low balances while sending a large volume of transactions. It's worth mentioning that this approach is not unique to Constellation Network but is a convention established in several other feeless network implementations. This strategy has been adopted as a practical solution to maintain network integrity and prevent abuse while ensuring accessibility for genuine users.

### Metagraph Snapshot Fees

In Constellation’s economic model, metagraph snapshot fees are the primary point of fee collection and the only current source of *required* fees. This structure pushes the responsibility of fee payment to metagraphs rather than users, as is the case in most other decentralized networks. Metagraphs are able to individually design their own economic models that pass these fees on to their users, or pay the fees through other means such as community grants or node rewards. We believe this fee structure creates an ecosystem optimized for novelty and flexibility at the metagraph layer. 

Metagraph snapshot fees set the expenses associated with operating on the network which in turn influences the economic viability of individual metagraphs and the sustainability of the network as a whole. By directly linking fees to the operational throughput of metagraphs, the system ensures that the economic burden is proportionate to the usage and benefits derived from the network. This approach fosters a scalable and self-regulating ecosystem, where the cost structure is transparent and aligned with the growth and development of metagraphs.

#### Objectives

The fee structure for metagraph snapshots was crafted with several key objectives in mind: 

- **Limited Fees**: Ensuring that the costs associated with using the network remains low and manageable for projects of all sizes.
- **Flexibility for Metagraphs**: Fees are imposed only for data submitted to the Global L0, allowing metagraphs freedom to determine the fee structure for their users, if any.
- **Staking for Reduced Fees**: Staking encourages long term network participation and commitment, and as such is rewarded with reduced snapshot fees.
- **Fixed Fees**: Required fees have a fixed cost that does not fluctuate due to network activity, allowing for accurate cost projections for metagraph projects.
- **Slow Network Inflation**: In the current era, fees are irrecoverable, effectively working to slow DAG inflation.
- **Inflation Replacing**: Once DAG max supply is reached, future fees will be redistributed as validator rewards.

#### Formula

Snapshot fees are set based on the following formula:

```jsx
Fee = (baseFee × WorkAmount × workMultiplier) + optionalTip
```

The elements of the formula are calculated in the following way: 

```jsx
workAmount = kbyteSize x computationalCost

workMultiplier = 1 / (1 + (stakedDAG x stakingWeight) + (proScore x proWeight)
```

<br/>

The formula relies on the following inputs: 

- **kByteSize**: The size of the data submitted in the snapshot represented in kilobytes. The size of the snapshot itself influences the cost of long term storage by validators and archive nodes.
- **stakedDAG**: The amount of DAG that the metagraph has in their designated staking wallet.
- **proScore**: The PRO score of the metagraph, to be rolled out in future eras.
- **optionalTip**: An optional addition to snapshot fees to prioritize snapshots over others in a congested network.

<br/>

The formula also includes the following constants: 

- **baseFee**
    - **Description**: The foundational fee unit of the network represented in datum. This represents the cost of validation and storage for 1 kb of data.
    - **Value**: 100,000 datum
- **computationalCost**
    - **Description**: The computational cost of validating snapshot contents is determined by the required actions, with operations demanding more resources incurring a higher computational cost. It is important to note here that this only applies to operations run during Global L0 validation, and to storage of metagraph snapshots. Metagraphs can implement operations of arbitrary complexity internally, which would only incur a fee if re-validation was required during Global L0 processing of the snapshot, effectively making full validation an opt-in process.
    - **Value**: 1 for custom data snapshots and for L0 token transactions within snapshots.
- **stakingWeight**
    - **Description:** A constant influencing the amount by which `stakedDAG` reduces required fees.
    - **Value**: 0.0000002
- **proWeight**
    - **Description**: A constant influencing the amount by which `proScore` reduces required fees. Initially set to zero until PRO score is live on the network.
    - **Value**: 0

#### Fee and Staking Wallets

In order to facilitate collection of snapshot fees, metagraphs will be required to designate a wallet for their fees to be deducted from. A wallet can be designated by signing a message to prove ownership of the wallet, having that message additionally signed by a majority of metagraph L0 nodes, and then submitting that message to the network. Fee wallets can be changed at any time by signing a new message in the same way. 

Fees are denominated in DAG and will be automatically deducted from the fee wallet as a metagraph snapshot successfully undergoes consensus on the Hypergraph. A record of this balance change is stored on the metagraph snapshot itself. 

Similarly, a staking wallet can be designated by a metagraph utilizing a similar process to the fee wallet. A message must be signed by the staking wallet and a majority of metagraph L0 nodes, then sent to the network. Staking wallets must be globally unique among metagraphs which ensures that staked DAG is not counted for a metagraph more than once. 

It is important to note, the collateral that metagraphs must provide to run their Hypergraph nodes on the network is not counted as staked. Only the balance in the staking wallet at the time of snapshot processing will be considered for the calculation. 

#### Staking

Staking benefits the network by reducing circulating supply and thereby increasing the demand for in circulation tokens. Staking also enhances network security, as participants have a vested interest in the integrity and performance of the network, discouraging malicious activities. Metagraphs that stake significant sums of DAG are rewarded by the network with reduced snapshot fees, providing them bandwidth at a lower per-snapshot cost. 

![workMultiplierNumbered.jpg](/img/learn/network-fees-litepaper/workMultiplierNumbered.jpg)

In the fee calculation, `workMultiplier` is a hyperbolic decay function which approaches zero at high values of `stakedDAG` but never reaches it. In practice, this means that staking can only reduce snapshot fees but never fully eliminate them. This design ensures that while staking significantly incentivizes participation and investment in the network, it also maintains a minimal level of fee generation crucial for the network's sustainability and security.

#### Examples

Here we will look at two examples to illustrate the application of snapshot fees on different metagraph use cases. The first, the Dor metagraph, illustrates data usage by the network’s first MainNet metagraph, and uses data based on real usage trends. The second, the Ethereum Blockchain is presented to describe the hypothetical fees a project could expect to pay to host a metagraph duplicating Ethereum blockchain data on the Hypergraph. 

All examples assume a DAG price of $0.10 USD for USD calculations. Outcomes show fees both with and without staked DAG. 

##### Dor Metagraph

The Dor metagraph validates foot traffic data from a network of IoT sensor devices. Sensors send their data or “check in” with the metagraph once per hour. At the time of writing, there are over 800 sensor devices active on the metagraph. 

Sensor data is received by the metagraph in a custom binary format, formatted into internal data schemas, and enriched by data from external sources, namely the Dor REST API. A primary goal in the design of the metagraph data structure was to maintain a low on-chain footprint in order to allow the metagraph to scale to support many thousands of devices. As such, the contents of each check in is hashed, and this notarized value is stored on-chain which significantly reduces the data needs of the metagraph compared to storing full data on-chain. 

The metagraph also hosts an L0 token, DOR, which is used to incentivize users to maintain the network of sensors. In testing, the largest snapshot sizes were logged when bulk batches of L0 transactions were validated, with a maximum observed snapshot size of 35kb. Snapshots had a minimum size of 5kb, with an overall mean of 10kb. 

Inputs: 

| Avg Snapshot Size (kb) | Snapshots/mo |
| --- | --- |
| 10 | 400,000 |

Outputs: 

| DAG Staked | Per-snapshot fee (DAG) | Per-snapshot fee (USD) | Snapshot fees/mo (DAG) | Snapshot fees/mo (USD) |
| --- | --- | --- | --- | --- |
| 0 | 0.01 | 0.001 | 4,000.00 | 400.00 |
| 250,000 | 0.00952380 | 0.00095238 | 3809.52 | 380.95 |
| 1,000,000 | 0.00083333 | 0.00833333 | 3,333.33 | 333.33 |
| 10,000,000 | 0.00333333 | 0.00033333 | 1,333.33 | 133.33 |

##### Ethereum Blockchain Metagraph

To illustrate the costs associated with a metagraph with greater data throughput and an interesting future metagraph use case, we examine a hypothetical metagraph that stores Ethereum block data on the Hypergraph. 

For the purposes of this example, the average snapshot size is set to 180kb. This takes into account the recent average of Ethereum block sizes at the time of writing (170kb) and a 10kb overhead for the snapshot schema (5kb) and additional metadata stored along with the blocks (5kb). We assume one snapshot per block and a rate of 213,000 blocks per month. 

Inputs:

| Avg Snapshot Size (kb) | Snapshots/mo |
| --- | --- |
| 180 | 213,000 |

Outputs:

| DAG Staked | Per-snapshot fee (DAG) | Per-snapshot fee (USD) | Snapshot fees/mo (DAG) | Snapshot fees/mo (USD) |
| --- | --- | --- | --- | --- |
| 0 | 0.18 | 0.018 | 38,340.00 | 3,834.00 |
| 250,000 | 0.17142857 | 0.01714285 | 36,514.28 | 3,651.43 |
| 1,000,000 | 0.15 | 0.015 | 31,950.00 | 3,195.00 |
| 10,000,000 | 0.06 | 0.006 | 12,780.00 | 1,278.00 |

To extend the comparison, we can calculate the total number of L0 token transactions that would fit in the same snapshot size (180kb) which is roughly 257 transactions per snapshot, resulting in a monthly total of 54,741,000 transactions. This is, of course, not a directly fair comparison but still serves to illustrate the stark difference in fee structure between Constellation Network and Ethereum.

The table below compares the cost of 54,741,000 transactions on each network. Estimated Hedera and Solana fees are included for reference. 

| Network | Per-transaction cost (USD) | Monthly Cost (USD) |
| --- | --- | --- |
| Constellation | 0.00006994 | 3,834.00 |
| Ethereum | 0.93 | 50,909,130.00 |
| Hedera | 0.0001 | 5,474.10 |
| Solana | 0.000127 | 6,952.11 |

#### Calculator

We make available an interactive calculator designed to help you explore the impact of different values on snapshot fees. This tool allows you to dynamically adjust parameters such as `kByteSize` and `stakedDAG` to understand how these parameters impact snapshot fees and to visualize the economic and operational impact of different combinations of metagraph throughput and DAG staked. 

[Snapshot Fee Calculator](https://constellationnetwork.io/snapshot-fee-calculator)

## Tokenomic Impacts

In 2018, Constellation Network launched the Hypergraph with an economic model based on a fixed token emission schedule for its native currency, DAG. Tokens are distributed to validator node operators for their work maintaining the underlying infrastructure of the network, and other pools that support network activity. Rewards are distributed by the network at a distribution rate based on a preset schedule of epochs, each lasting for roughly two and a half years, depending on the real rate of snapshot creation on the network. In each new epoch, the rewards are cut in half compared to the previous epoch. After the final epoch ends, at a total token supply of less than 3.69 billion DAG, the network will cease to create new rewards entirely. In this way, network rewards are distributed rapidly in early epochs, and then more slowly as the ecosystem matures to limit total supply.

**Epochs and Monthly DAG emissions**

![epoch-validator-rewards.jpg](/img/learn/network-fees-litepaper/epoch-validator-rewards.jpg)

Reward distributions are an inflationary force, increasing the circulating supply of tokens with each snapshot of network activity towards a capped total supply. This inflationary force supports the maintenance and infrastructure costs of the network by introducing new tokens into the supply at a regular rate. Once the final rewards are distributed and the total supply stabilizes, new mechanisms will be needed to compensate validators and support network infrastructure and development.

### Fee Distribution

Up until now, the collection of fees on the Hypergraph has been minimal, having little overall impact on the network's tokenomics. With the introduction of metagraph snapshot fees, along with additional DAG fees, fee collection will greatly increase and have the opportunity to impact network tokenomics in more significant ways. 

In order to benefit the network as a whole, fees are irrevocable, removing them from circulating supply as each metagraph snapshot is processed. In this way, they will become a deflationary countermeasure to the network inflation that the current rewards structure relies on. Their impact will slow the rate of inflation in each epoch and ultimately reduce total supply after the final epoch ends.

After the last snapshot of the final epoch, inflationary rewards will end and a new source of value will need to be unlocked to support node validators and other network infrastructure in a fixed supply environment. At this point, any new fees collected will remain in circulation and be redistributed to the validators and other network rewards pools. As the network matures towards this stage, snapshot fees are likely to grow to become a significant source of value, meeting or exceeding the rewards distribution rate of the final epoch. We believe this transfer of value from resource users to resource providers in the form of rewards will create a self-sustaining network without the need for an ongoing inflationary supply. 

## Generative Economics

The foundational goal of Constellation Network’s technical and economic model is to foster dynamic systems with a built-in tendency towards social equity, sustainability, and mutually beneficial economic outcomes for all participants. This foundation is influenced by the concept of [generative economics](https://www.opendemocracy.net/en/opendemocracyuk/toward-generative-economy/), which focuses on creating economic systems that inherently produce positive results for society, the environment, and the global economy. 

In our model, we focus on interactions between the various stakeholders of our platform: metagraph networks, validator nodes, users of the platform, and community members. The following sections highlight examples of applied generative economic theory within the network. 

### Metagraphs as Producers and Consumers

A crucial mechanism built into the network’s fee structure is the requirement that metagraph L0 nodes are run as hybrid Global L0 nodes. In the current era, each metagraph is granted 3 slots on the global network seedlist in order to run their Global L0 nodes. These nodes generate network rewards by validating snapshots for the host metagraph, as well as snapshots from other metagraphs and blocks from the DAG L1. With this mechanism, each metagraph is both a producer of utility on the Hypergraph through their work in network validation and consensus, and a consumer of utility through their submission of data to other network nodes.

For metagraphs with low throughput, the DAG earned from snapshot fees will be greater than the DAG spent on snapshot fees. Conversely, metagraphs with higher throughput will spend more DAG on snapshot fees than they earn in network rewards from their work as a validator. 

![Monthly reward output of 3 Global L0 validator nodes in epoch 2 compared to snapshot fees assuming 100 kb average snapshot size and a computational cost of 1.  ](/img/learn/network-fees-litepaper/rewards-vs-fees.jpg)

Monthly reward output of 3 Global L0 validator nodes in epoch 2 compared to snapshot fees assuming 100 kb average snapshot size and a computational cost of 1.  

To the left of the intersection of the two lines in the graphic above, validator rewards outpace snapshot fees - effectively creating a free usage tier. This provides an economic onramp for metagraph projects to validate their idea and reach scale before having to allocate capital to snapshot fees. It also allows them time to mature their own internal economic model to generate fees from their users if they choose to finance their network fees in that way. We believe this mechanism significantly lowers barriers to entry for the ecosystem while encouraging healthy growth and experimentation with novel economic structures. 

### Heterogeneous Validator Configurations

Initially, validator nodes in the Constellation Network were uniformly structured to run both the Global L0 and DAG L1 layers. This configuration was essential for bootstrapping the network and ensuring it could handle real-time transaction loads effectively. However, uniform configuration is suboptimal, primarily because the two layers have distinct resource requirements— notably, L0 processes demand significantly more RAM than L1—and they achieve consensus through different mechanisms. L1 layers can reach consensus in parallel within clusters of three nodes, whereas the L0 layer requires unanimous consensus across all participating nodes.

With the introduction of metagraphs, the network now has the need for additional layers to operate either in conjunction with or independently from the Global L0 and DAG L1 layers. For example, a metagraph built using the Currency Framework and utilizing custom data as a Data Application has 3 additional layers: Metagraph L0, Currency L1, and Data L1.

![A minimal Currency Framework metagraph running the Global L0, Metagraph L0, Currency L1, and Data L1 layers in parallel on three individual nodes. ](/img/learn/network-fees-litepaper/metagraph-deployment-architecture.png)

A minimal Currency Framework metagraph running the Global L0, Metagraph L0, Currency L1, and Data L1 layers in parallel on three individual nodes. 

Each layer, whether metagraph-specific or global, can scale horizontally in similar fashion to a microservice. This means they can expand in capacity and efficiency to match network demands and data processing needs and thereby achieve optimal performance. Specifically, the scaling of metagraphs predominantly occurs on the L1 layers, which utilize a directed acyclic graph architecture and can facilitate parallel consensus operations at significant rates of throughput. Just as microservices can be independently scaled to meet the needs of different applications, metagraphs can adjust their capacity based on their unique use cases and workload.

The ability of a metagraph to scale each layer independently offers opportunities for community members to actively participate in running nodes as metagraphs expand to match the needs of their specific use cases. For metagraph L1 layers, there is no requirement that nodes must also run validation for the Global L0 layer which means a broader base of the community can participate as node operators, surpassing previous limitations. Nodes run by a diverse group of participants distribute control and reduce central points of failure, making the metagraph more resilient against attacks and manipulation.

Future protocol updates, namely enabling validator reward distribution to L1 nodes, will allow the DAG L1 to scale independently of the Global L0 layer by introducing an independent reward structure on that layer. The DAG L1 can be scaled down significantly while still handling many multiples of the current transaction workload. We believe the current optimal cluster size to be in the range of 12 to 24 nodes. In practice, this would mean that most Global L0 node operators could reduce their infrastructure costs by scaling down their instances to support just the Global L0 layer, without compromising security or scalability on the network, and while continuing to earn rewards. 

![Homogeneous node configurations transitioning to heterogeneous configurations to support independent scaling of the Global L0 and DAG L1, as well as metagraph layers. ](/img/learn/network-fees-litepaper/node-restructuring.png)

Homogeneous node configurations transitioning to heterogeneous configurations to support independent scaling of the Global L0 and DAG L1, as well as metagraph layers. 

As the network evolves to further support independent scaling of network layers, it paves the way for a more sustainable economic model with new opportunities to contribute as a node operator. This model not only rewards participants fairly but also ensures that the network remains robust against external threats and scalable in the face of growing demand. Node operators will have the flexibility to serve as validators in independent global network layers and metagraph layers, either individually or as hybrid nodes that validate for multiple layers simultaneously. This flexibility will significantly expand the pool of node operators, thereby enhancing the network's overall strength.

### Incentivizing Builders

In order to support a thriving ecosystem, Constellation Network relies on the active engagement and contributions of many network participants. We believe the network will function optimally with higher levels of participation rather than lower. This mindset of abundance is core to the idea of an efficiently functioning Hypergraph; that more interconnected metagraphs and more data throughput will result in a more efficient ecosystem for all participants. As such, there is a need to incentivize network participation in general, and specifically to lower barriers to entry for metagraph project teams to be first movers within the ecosystem, given that they occupy such a critical role in the architecture. 

Metagraph project teams need various kinds of support to be able to effectively launch and contribute to the Hypergraph. As a platform with a relatively high learning curve for new developers, resources need to be made available to encourage development teams to choose Constellation Network for their project, and to make them successful once they begin building. These resources come in many forms including developer tools, documentation, and direct support from core developers to answer questions and debug issues. Creating an effective onboarding strategy for these teams is an essential task. 

Also critical, is the task of lowering barriers to entry for these projects. Barriers to entry are often economic in nature, and as such require economic solutions such as grants and subsidy agreements to reduce initial costs as projects attempt to scale. Two primary sources of financing exist for project teams interested in building on the Hypergraph: Stardust Collective and the Data Pool. 

The Stardust Collective was launched at network genesis as a community group, primarily made up of node operators, with a shared vision to catalyze the network’s growth through proactive community engagement and to spearhead its widespread adoption. Central to their ability to be effective is the Stardust Tax, a 10% tax on all network rewards which is diverted to a holding wallet for use by the collective. Recently, Stardust Collective has legally formalized their organization which has enabled them to channel resources into pivotal projects, from providing loans that boost metagraph project viability to investing in the education of HGTP-centric developers. The Stardust Collective is a powerful force in pushing the network forward.

The Data Pool, launched in early 2023 to support early metagraph builders on the network through a pool of network rewards set aside for distribution through Lattice. This pool initially helped to support the Dor metagraph, the first metagraph to launch on the network. At the time, Dor was already a fully mature company with an existing customer base and a core focus on data analytics. By open sourcing their codebase along with supportive tooling, Dor significantly contributed to the ecosystem, encouraging the development of additional metagraph projects. As the next cohort of metagraph projects prepare to launch, the Data Pool is being made available to project teams to bootstrap their efforts on the Hypergraph. 

In a partnership between the core team and Stardust Collective, the following kinds of support from the Data Pool can be made available on a case-by-case basis: 

- Node collateral for launching MainNet nodes
- Funds to offset snapshot fees for project scaling
- Project development funds

Through this partnership, we aim to incentivize positive participation in the network, expand open source contributions to critical tooling, and to provide a catalyst for the launch of metagraph projects with strong utility. By actively lowering barriers to entry and providing strong support mechanisms for builders, these programs encourage innovation and sustainable growth within the Hypergraph ecosystem.

## Conclusion

Constellation Network’s vision continues to drive a mission of bringing web3 tools to web2 development and businesses. Through metagraphs, we have introduced extensible frameworks that enable more customization through data integrations with incentives and complete subnetwork orchestration. In this paper, we have described a network fee structure that will benefit the network as a whole through enhanced security, scalability, and sustainability. Furthermore, this fee structure expands our vision of web2 composability through its compatibility with existing cloud computing models. This strategy, enhanced by the versatility of metagraph architecture, showcases that the Hypergraph will persist as a supportive platform for projects of varying sizes to flourish. Moreover, the methodologies discussed in this paper regarding fee implementation, resource distribution, and incentivization are set to foster a self-reliant network that advantages all involved parties in the long run.

At the heart of our strategy is a pledge to maintain Constellation Network as an open and dynamic ecosystem for every stakeholder - metagraphs, validator node operators, developers, and the community. The introduction of fees aims to promote efficient use of the network, enhance security against attacks, and foster a vibrant utility marketplace, establishing a foundation where innovation thrives alongside robust security and scalability. These fees serve not just as a mechanism for resource management but as a testament to our commitment to a model that encourages active contribution, rewards engagement, and supports the overall health of the ecosystem.

Each feature and mechanism, articulated in this paper, unlocks the potential for future development and elasticity of the network. For example, dynamic staking can evolve to allow community driven participation to reduce costs on metagraphs, or the ability for nodes to delegate resources to other metagraphs that provide certain attractive economic models. Through both technological and economic lenses, applications will be empowered to create alternative treasury strategies to complement their consumer facing experience. They will not have to compromise their technical vision for broken web3 economic models, but instead will be able to marry web3 architecture and financial strategies to introduce programmatic transparency, accountability, and accretive financial models.