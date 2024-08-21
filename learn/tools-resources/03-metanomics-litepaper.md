---
title: Metanomics
sidebar_label: Metanomics Litepaper
hide_table_of_contents: false
toc_max_heading_level: 6
---

# Metanomics

##  Introduction

As Constellation Network evolves to meet the dynamic needs of a growing ecosystem, we are excited to introduce Metanomics—the next generation of our tokenomic model. The current framework has successfully driven data incentivization, supported node validators, and nurtured the early stages of metagraph development. However, with the network expanding and more metagraph projects coming online, a decisive shift is necessary. Metanomics is designed to be a sustainable and adaptable supply model that aligns with our vision for long-term decentralization, offering robust rewards and incentives for all stakeholders within the ecosystem.

In cryptocurrency, a capped supply model is often ideal for store-of-value tokens, as it can enhance scarcity and, by extension, value retention. However, DAG is fundamentally a utility token designed to foster the growth and functionality of the Constellation Network. A strictly capped supply can hinder the network's ability to adapt and scale effectively, restricting its capacity to reward validators, support protocol development, and incentivize all participants within the ecosystem.

Currently, Constellation Network supports the development of its public protocol through a combination of public and private funding sources. While this approach has allowed for significant growth, it also presents challenges in aligning resources with the broader needs of the network. As the ecosystem evolves, it's becoming increasingly important to establish a dedicated focus on core protocol development and network tooling to ensure the continued expansion and innovation of the public network. Metanomics offers a clear path forward by providing a sustainable funding model that reduces reliance on private subsidies and aligns incentives across all participants, ensuring Constellation Network can continue to deliver robust solutions for its users. 

This litepaper introduces the next evolution of DAG tokenomics with a flexible supply model. This model ensures predictable incentives for node validators, participants, and protocol development while preserving the network’s economic integrity. It also establishes a transparent and sustainable mechanism for funding both ongoing and future initiatives. 

## The New Model 

### Immediate Changes 

#### Rebuild Treasury 

As we navigate the evolving market, with its increasing competition and new opportunities for adoption, it is essential to refocus on open-source development, core team support, and ecosystem growth.

To support these efforts, we are making a strategic move to significantly enhance the Constellation Network treasury,  comparable to leading protocols. This initiative is crucial for providing robust support for both ongoing and future projects, ensuring that our network remains competitive and continues to thrive.

As part of this strategy, we will unlock and repurpose 450 million DAG tokens. These tokens were originally locked by the founders as a commitment to the long-term success of the network and to demonstrate their confidence in the long term success of the Constellation ecosystem. Now, with the network entering a new phase of growth, these tokens will be strategically allocated to accelerate development and expansion.

The repurposed  tokens will be allocated as follows:

* **Scaling Operations:** 50M DAG  
* **Community Incentives (grants, general incentives):** 50M DAG  
* **Marketing & Network adoption (development support, documentation, content creation):** 50M DAG  
* **Employee Incentives:** 50M DAG (18-month vesting)  
* **Public goods (Tessellation, Stargazer, Dag Explorer, Lattice, Euclid SDK, dag4js), Development, Engineering, R\&D:** 250M DAG

To ensure transparency and maintain the trust of all network participants, we will provide bi-annual updates on the impact and allocation of these funds across the various categories. Furthermore, to protect the DAG market from unnecessary volatility, any token sales for funding will be limited to 5% of the average daily trade volume.

Reallocating these tokens ensures that Constellation Network is ready to compete and thrive in the rapidly changing Web3 landscape. This investment in community incentives, marketing, network adoption, employee incentives, and product development will strengthen our foundation and drive substantial growth in the years to come.

#### Winding down the data pool

As we transition to the Metanomics model, the Data Pool will remain active until the official go-live date at the end of Q1 2025\. However, in the lead-up to this transition, we are adjusting the overall distribution of tokens within the Data Pool to better align with the network’s future state.

##### New distribution

The overall distribution will change as follows:

* **Data pool bounties:** decrease from 55% to 42%  
* **Stardust tax:** decrease from 10% to 7%  
* **Mainnet validator incentives:** increase from 17% to 24%  
* **Integrationnet validator incentives:** increase from 15% to 20%
* **Testnet validator incentives:** increase from 3% to 7%  

##### DTM Bounties

In line with these changes, the DTM baseline bounty will be discontinued, as the primary focus now shifts to data collection with Dor's metagraph fully operational. To meet the expectations of Foundation DTM buyers, we will remove the caps on commercial and installation bounties. Of the 5,991,186.99 DAG allocated for this purpose, 2,710,298.88 DAG will be distributed monthly, with 35% designated for commercial bounties and 65% for installation bounties until the new tokenomics are implemented.

The remaining DAG will be reserved for distribution after the new tokenomics model is in place ensuring that DTM bounties remain available for 18 months after the Data Pool changes. This provides a smooth transition as we move into the Metanomics era.

![data-pool-redistribution.png](/img/learn/metanomics-litepaper/data-pool-redistribution.png)

### Metanomics

#### Introducing Metanomics

As Constellation Network continues to grow and evolve, so too must its tokenomics. Metanomics represents the next significant step in the evolution of DAG tokenomics, designed to meet the network’s future needs while building on the strong foundation already in place.

Under the old model, rewards were distributed according to a fixed schedule of epochs, each lasting approximately two and a half years, depending on the actual rate of snapshot creation on the network. In each new epoch, the rewards were halved, with the final epoch concluding once the total token supply reached just under 3.69 billion DAG. At that point, no new rewards would be created, effectively capping the total supply and distributing rewards rapidly in the early stages and more gradually as the ecosystem matured.

However, as the network expands and more participants join the ecosystem, a more flexible and sustainable model is needed. Beginning in the first quarter of 2025, DAG will transition to a flexible supply token under the Metanomics model. This new structure introduces a dynamic inflation rate, starting at 6% and gradually decreasing yearly until it stabilizes at 0.5%.

A key innovation in this model is integrating DAG's market price into the emission formula. As network participants incur fixed costs—such as hardware, opportunity costs, and the expenses related to core protocol development—the inflation rate will adjust accordingly. When the token price is higher, less inflation is required to cover these costs, thereby maintaining economic stability within the Constellation ecosystem. This approach ensures sustainable growth, preventing both excessive inflation and deflation, and enhances the utility of DAG as a mechanism for securing the long-term sustainability of the network.

By shifting to a flexible supply model, Metanomics ensures that Constellation Network can dynamically adapt to the needs of its growing ecosystem. Unlike the capped supply of the past, this approach allows for a balanced distribution of rewards that scales with network demand. The flexibility in supply enables the network to provide consistent incentives for validators and participants, maintain economic stability, and support ongoing development—all while ensuring that the network can evolve in step with its expanding user base and technological advancements.

#### Emission Formula

##### Key aspects

* Economic Stability: The flexible supply adjusts to market conditions, maintaining network health.  
* Incentive Alignment: Ensures continuous incentives for protocol, stardust collective, validators, and delegators.  
* Transparency: A clear and predictable inflation rate allows all participants to adjust and plan accordingly.

![inflation-formula.png](/img/learn/metanomics-litepaper/inflation-formula.png)

#### Network Emission Distribution 

The distribution of inflation emissions among network stakeholders is structured as follows: 

![diagram-emission-distribution.png](/img/learn/metanomics-litepaper/diagram-emission-distribution.png)

###### Variable emissions

* Protocol receives 30%   
* Stardust Collective (Foundation) receives 5%   
* Validators receive 20%   
* Delegators receive 45%

###### Fixed emissions

* Delegators receive a fixed 3% on delegated DAG

The protocol starts with an initial rate of 0%, increasing by 6% each quarter until it reaches a maximum of 30%. During this ramp-up period, the foundation receives the remaining funds.

![chart-emissions-split-over-time.png](/img/learn/metanomics-litepaper/chart-emissions-split-over-time.png)

This allocation ensures robust incentives for all groups to actively participate and operate within the network, providing a sustainable, predictable, and transparent incentive framework.

#### Introducing Delegators

Delegators are key participants within the Constellation Network who hold DAG tokens and choose to delegate them to one or more validators on the network. In return for their delegation, they receive incentives, with a portion deducted as a validator fee.

Anyone that holds DAG in a wallet can participate in the delegation process. Token holders simply choose a validator on the network to delegate to \- this could be regular validators, metagraph-operated validators, or any other validator node on the network. After delegation, rewards are distributed to the delegator based on the amount delegated, with a portion of rewards redirected to the validator based on their validator fee.

This delegation process allows anyone to participate actively in the network by directing token emissions to their chosen validators. Delegators thus play a crucial role in shaping the distribution of network incentives, making them active participants in the growth and governance of Constellation Network.

The Protocol/core treasury is prohibited from being used in Delegation.

##### Delegator incentives

![diagram-delegator-and-validator-incentives.png](/img/learn/metanomics-litepaper/diagram-delegator-and-validator-incentives.png)

Delegators receive incentives from two sources:

* **Fixed Emissions:** A fixed 3% APR on all delegated DAG.  
* **Variable Emissions:** 45% of all inflationary emissions allocated to the network.

A key factor in this model is the idea that in order to have a functional delegation system, delegator rewards should outpace network inflation whenever possible. The variable rewards structure creates a dynamic within the network where an equilibrium in incentive distribution is achieved when 60% of the total DAG supply is delegated. This 60% threshold is optimal as it maintains network liquidity while encouraging active participation.

When the total supply delegated is below 60%, DAG holders have a clear incentive to delegate, as their returns will exceed the inflation rate. The fixed 3% APR further ensures that delegator incentives are consistently above the inflation rate, making delegation a compelling option for all DAG holders.

This structure creates a precise opportunity cost for keeping DAG idle, as the tokens would be diluted over time, creating a powerful incentive for all network participants to engage in the existing opportunities within the network.

##### Unwinding a Delegated Position

If a delegator decides to withdraw their DAG tokens from delegation, there is a 30-day unwinding period during which the tokens remain locked, and no rewards are earned. This unwinding period helps maintain network stability and prevents sudden large withdrawals that could disrupt the system. However, delegators can re-delegate their tokens to another validator without undergoing this unwinding period.

##### Validator Fees

Validators can set a fee, ranging from 5% to 10%, on the incentives distributed to Delegators. This fee structure incentivizes validators to operate efficiently and attract delegations by offering competitive terms. Delegators have the freedom to choose validators based on performance, alignment with specific projects, or contributions to the network, creating a competitive environment where validators strive to maintain high standards. For instance, entities like the Stardust Collective (Foundation), the Protocol, or DOR may have dedicated validators where delegators can delegate their tokens, effectively directing support to these areas of the network.

##### Active incentive governance

The introduction of delegators adds a new layer of active incentive governance within the Constellation Network. By selecting specific validators, delegators directly influence the distribution of 5% to 10% of the total delegate emissions. This participatory model creates a competitive environment wherein node validators are incentivized to compete and find means to attract delegations.

Delegators can choose validators based on their performance, alignment with specific projects, or contribution to the network. This choice encourages validators to maintain high standards and actively contribute to the network's health and growth.

All aspects of the incentive governance model are designed to be transparent. The mechanisms for delegation, collecting validator fees, and emission distribution will be automated and on-chain, allowing all participants to understand and predict outcomes.

###### Metagraph Projects

Metagraph projects can strategically leverage this governance structure to secure funding and project growth. By attracting delegated DAG, metagraph projects can finance their development, marketing, and community engagement initiatives. Providing L0 tokens or exclusive project features as incentives to delegators aligns the interests of these projects with those of the network participants.   
It will be up to the project to decide the best way to attract delegated DAG by leveraging what their project offers.

######  Stardust Collective

The Stardust Collective, tasked with promoting community growth and network awareness, benefits from this incentive governance model as a funding opportunity. Delegators who value the Collective's contributions can delegate their DAG to the Collective’s validators, thereby supporting its initiatives. 

######  Node validators

Regular node validators can leverage this dynamic to accrue extra DAG incentives.   
Known node validators in the community can leverage their following to attract delegations. They can do this by giving special perks to those who decide to delegate to their validator.   
Other node validators can simply delegate their DAG to their own validator. This will guarantee them net incentives, as they receive the full delegation amount plus the validator fee.

######  Protocol

Although protocol/core treasury cannot participate in delegation, delegators can opt to delegate to the protocol nodes, this will help fund development and the overall work the protocol does for the network.

### Snapshot Fees

Snapshot fees play a critical role in the Constellation Network's economic model, particularly within the framework of Metanomics. These fees are paid by metagraphs based on their activity levels on the network and are designed to be a counterbalance to the inflationary aspects of the tokenomics model.

As metagraphs generate activity on the network, they incur snapshot fees that are consumed, and irrevocably removed from circulation. This removal of fees serves to offset the inflationary emissions generated through rewards, ensuring that the overall token supply remains balanced.

In this way, snapshot fees act as a buffer against potential oversupply, creating stability for DAG and contributing to the network's health. Their role is particularly important after the transition to the flexible supply model, where they help to maintain the delicate balance between inflation and deflation.

If the network requires additional support, a governance vote could authorize reallocating a portion of the snapshot fees to validator incentives. This flexibility ensures that the network remains adaptable and capable of sustaining growth while preserving its core economic principles.

### Key dates

* Unlock of the original 450M DAG founder’s tokens: August 9th, 2024 
* Data pool changes: August 2024 
* Go live of Metanomics: End of Q1 2025

## Model Summary

### Key Features

* **Flexible Supply Model:** The supply of DAG will adjust based on market conditions, with an initial inflation rate of 6% decreasing to a target rate of 0.5%.  
* **Emission Distribution:** Inflation emissions are allocated among protocol development (30%), Stardust Collective (5%), validators (20%), and delegators (45% of emissions plus a fixed 3%).  
* **Delegators:** New way for DAG holders to participate in the network as a mechanism of active incentive governance

![diagram-dag-supply.png](/img/learn/metanomics-litepaper/diagram-dag-supply.png)

### Effect of market conditions on the inflation rate {#effect-of-market-conditions-on-the-inflation-rate}

![chart-market-conditions-on-inflation-rate.png](/img/learn/metanomics-litepaper/chart-market-conditions-on-inflation-rate.png)

This chart shows how the inflation rate in the model reacts over time under four different market conditions (stable, decreasing, increasing, and up and down), with all other inputs being equal. 

The Metanomics model is designed to ensure that, regardless of market conditions, the inflation rate gradually decreases over time until it reaches a target rate of 0.5%. This built-in adaptability allows for effective management of the DAG token supply, supports network growth, and maintains economic stability even in fluctuating market environments.

### Relation between Network adoption and DAG supply {#relation-between-network-adoption-and-dag-supply}

![chart-network-adoption-and-dag-supply.png](/img/learn/metanomics-litepaper/chart-network-adoption-and-dag-supply.png)

This chart illustrates how the model responds to a consistent increase in network activity by mitigating the effects of inflation on the token supply. 

The controlled increase in total supply, along with a decreasing inflation rate and growing metagraph adoption, demonstrates the model’s capacity to provide necessary incentives while avoiding unchecked supply growth. This balance ensures the network remains appealing to new participants and continues to expand sustainably.

## Conclusion {#conclusion}

The introduction of the Metanomics model represents a crucial evolution in Constellation Network's approach to tokenomics, aligning our economic framework with the growing needs of our ecosystem. By embracing a dynamic supply model with a controlled and decreasing inflation rate, Metanomics ensures that the network can sustain growth while maintaining economic stability.

This new model enhances our ability to not only open the network to more participants but also to incentivize them to participate effectively, ensuring that the ecosystem remains appealing to both existing members and newcomers. Integrating delegators into the governance process further empowers our community, creating a more engaged and participatory network where token emissions and rewards are directly influenced by those who contribute to the network's health and success.

As metagraphs continue to drive increased activity on the network, the role of snapshot fees becomes increasingly vital. These fees, integrated into the dynamic supply model, help moderate inflation in line with network activity, ensuring overall balance within the ecosystem. Along with a strong network treasury and developer outreach strategy, the proliferation of metagraph projects will form a generative economic landscape that will support the network as a whole. 

By managing supply and demand through a well-structured tokenomic framework, Metanomics positions Constellation Network to thrive in the face of evolving market conditions. This forward-looking approach lays the foundation for sustained success, ensuring that Constellation Network continues to lead in the decentralized technology space for years to come.
