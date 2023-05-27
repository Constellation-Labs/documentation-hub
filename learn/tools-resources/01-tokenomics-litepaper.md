---
title: The HGTP Economy
sidebar_label: Tokenomics Litepaper
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Implementing Generative Tokenomics in the Hypergraph for Validator Nodes and Metagraphs at Scale

<DocsCards>
  <DocsCard header="Read PDF version" href="https://docs.constellationnetwork.io/docs/Constellation-Network_Tokenomics-Litepaper_v2.pdf" target="_blank" rel="noreferrer" icon="/icons/icon_pdf.png">
  <p>Alternatively, you can download the Tokenonmics Litepaper as a PDF.</p>
  </DocsCard>
</DocsCards>

## Introduction

This document is a high-level overview and framing of Constellation’s Hypergraph Network (HGTP): A decentralized network economy where consensus is run on the Global L0 (Hypergraph) and L1 Metagraphs (previously referred to as “state channels”). The intention of this paper is to educate individuals on the fundamentals of HGTP with an explanation of the metrics used across the Hypergraph network to yield an incentivization structure for key stakeholders in the economy: Validator Nodes and Metagraphs. Additionally, the aim of this overview is for individuals and businesses to gain a better understanding of how to navigate the Constellation Ecosystem with the goal of attracting them to join one or both of these stakeholder groups. 

The Hypergraph’s current economic model is a fixed incentivization token emission schedule, denominated in the Hypergraph’s native currency DAG, rewarded to node operators for securing and maintaining the decentralized infrastructure. In 2018, this model was established, along with zero transaction fees, as a placeholder to promote adoption of our mission while creating a low barrier to entry.  

The intention is that less complex transactions, like sending/receiving DAG and one-off snapshots sent by Metagraphs (subnetworks built on top of the Hypergraph), would remain feeless. Since the validation of these types of transactions would never clog our network, these use cases should not be limited, even if there is immediate value exchange between users and node operators of the Hypergraph. However, if the frequency of low-complexity transactions becomes too large, a fee will be instituted to prevent spamming or DDoS-type attacks on the network. Fees incentivize security and proper up-time for a network, but these costs still need to be manageable for Metagraph businesses. Keeping a healthy balance will be a primary focus as the team continues iterating to measure the network fees for a more complete tokenomics model for the Hypergraph.

This overview will cover how the Hypergraph Economy operates with Metagraphs, using the network for validation services, and the fundamental baseline formula measuring scalable economics around the DAG and  Metagraph networks. 

## Hypergraph

Hypergraph Transfer Protocol (HGTP) is the decentralized network developed by Constellation Network, Inc. and governed by the community. HGTP consists of the Hypergraph, a global layer zero network with Validator Nodes that maintains and secures the network, orchestrated by the Proof of Reputable Observations (PRO) consensus mechanism, and Metagraphs, or subnetworks that make up HGTP, that include networks, applications, and businesses.
 
HGTP is a decentralized protocol composed of multiple independent networks, known as Metagraphs. Each Metagraph is flexible and customizable to validate and process data according to its user-defined business logic. Furthermore, each Metagraph leverages custom consensus mechanisms to validate data before submitting its “state” as snapshots to the Hypergraph. The Hypergraph performs final validation and then adds the Metagraph snapshot to the ledger. This approach is how microservice state isolation is used in traditional digital and web2 environments where microservices cross-communicate with one another. Metagraphs are like traditional microservice development environments where the state of data is managed by exclusive logical service boundaries. By cryptographically securing any data type in its entirety, our vision is to make web3 tooling composable with the digital world of web2.

![Constellation Network architecture overview](/img/metagraphs/architecture.png)
<figcaption><strong>Figure 1.</strong> HGTP architecture overview.</figcaption>
<br /><br />

This structure enables multiple states of data to exist, some with custom consensus, others leveraging global consensus, and other Metagraphs doing the validation themselves. Furthermore, with custom consensus, companies can deploy their own blockchain that orchestrates Validator Nodes to validate custom logic and the state of data while being able to create dependencies and incentives for validating a transaction. Individuals and entities will come to rely on the Hypergraph for the speed of validating data in realtime, assigning an incentive to the validator for validating under their customized consensus, and the security of knowing that the data was not tampered with.

This paper will break down how to measure network fees to further align stakeholders, validator nodes, and Metagraphs for the scalability of our ecosystem. Using metrics like the number of “workAmount” a transaction requires, how many resources are available to process a transaction, the frequency of transactions being sent, latency, staked DAG, and peer validation weight will be used to determine DAG fees. DAG fees will align both users of the Hypergraph Network: Validator Nodes and Metagraphs.

## Validator Nodes

Validator Nodes are the backbone of the Hypergraph’s decentralized network as they provide the resources to validate and confirm transactions. The Proof of Reputable Observation (PRO) consensus mechanism organizes the Validator Node operators and secures the network. This combination of a healthy network of nodes and PRO Consensus provide security, throughput, and uptime for application developers. 

Validator Nodes will have limited resources tied to their node and can choose to support the Global L0 and one or more Metagraph Networks based on computing resources. 

![Network Layers](/img/hypergraph/layers.png)
<figcaption><strong>Figure 2:</strong> Metagraph L1 does the initial validation and bundles the transaction into blocks. The blocks are sent to the Metagraph L0 layer to be bundled into Metagraph snapshots to the Global L0. All metagraphs must have an L0 layer composed of 1 or more nodes (almost always more). Those L0 metagraph nodes must be hybrid nodes that are running both the Global L0 process and the Metagraph L0 process on the same node/server.</figcaption>


## Metagraphs

Metagraph L0 nodes, which are responsible for submitting snapshots to the Global L0, must all be run as hybrid nodes, supporting both Global L0 and their Metagraph L0 processes on the same node. Thus, Metagraphs can recruit from the existing pool of Global L0 validators to run their Metagraph processes, or recruit new ones. Since Metagraph networks with greater total staked DAG within their L0 network pay lower snapshot fees, they are incentivized to set DAG staking requirements as a prerequisite to joining their network. It is conceivable that DAG staking incentivized by Metagraph networks would allow for a reduction in Global L0 collateral requirements while maintaining high levels of locked value on the network. This opens the network for node participation with less than 250k DAG collateral requirement. 

Beyond attracting Hypergraph validators with staked DAG, Metagraphs must incentivize participation in their own networks. Validator Node operators will choose which Metagraph processes to run with their node’s limited resources. Metagraphs with more attractive rewards for validators relative to their resource requirements will draw the most nodes to their network. Ultimately, Metagraphs will compete with each other to offer the greatest incentives to recruit the nodes needed to support their network or application. 

Our goal is to make Metagraph deployment cost-competitive with web2 legacy services, while creating further utility demand around the DAG token. Furthermore, enabling Metagraphs to incentivize Validator Nodes to stake additional DAG to their network use case, further increases the potential for total value locked (TVL) on the network. These are the following ways that Metagraphs can leverage the Hypergraph:

### Snapshot to Hypergraph

All Metagraphs will send snapshots to the Hypergraph, which include associated fees. Each snapshot is capable of containing many individual transactions. Currently, snapshots sent to the Hypergraph are capped at 50kb; these snapshots can include Metagraph Token transactions and other raw data points. Metagraphs may choose to pass the incurred snapshot fees to their users within their own tokenomics (like a gas fee to use their Metagraphs network) or to pay them through other means. As mentioned earlier, other factors, such as the computational power needed to validate the transaction and attached priority fees, will determine the total cost.

![Token Lifecycle](/img/metagraphs/token-lifecycle.png)
<figcaption><strong>Figure 3:</strong> Lifecycle of a Metagraph token transaction from creation to finality.</figcaption>

### Deflationary Effects

Metagraphs pay fees for data validated on the Hypergraph, which could create a deflationary effect on the ecosystem. Because these fees are irrecoverable, if incurred fees are greater than or equal to any value distributed to Validator Nodes, the ecosystem will experience a balanced (or even deflationary) token economy. 

### Metagraph Tokens

It is equally important to point out that Metagraphs can issue their own Metagraph tokens as rewards for Validator Nodes that support their network. The majority of excess node rewards can be generated by these Metagraph tokens while maintaining DAG emissions to provide security and maintain the global state.

## Metagraph: Network Fees

In order to use the Hypergraph, Metagraphs must contribute fees to the network for each snapshot of state submitted. Metagraphs have the option of passing these fees on to their users or not, giving them the flexibility to organize their networks to meet the needs of diverse use cases. Snapshot fees are submitted to the Hypergraph in DAG, and these fees are irrecoverable. This mechanism could create a deflationary pressure on the network that will counteract rewards distributions to Validator Nodes. The first Metagraphs launching at the end of the Hercules era and the beginning of the Gemini era will pay no fees to the network and be limited to a snapshot size of 50kb or less. In this early stage, Metagraph snapshots without fees will trigger on-demand global snapshots, allowing high throughput for Metagraph data. 

During the Gemini era, a snapshot prioritization function will be released that will introduce a fee mechanism for Metagraphs on the network. Snapshots without fees will still be accepted but they will be limited to one Metagraph snapshot per global snapshot. Feeless snapshots will not trigger on-demand consensus once the prioritization function is released which will effectively rate limit free snapshots to a rate of one every few seconds. Snapshots with fees will be processed on-demand and will allow for significantly higher snapshot throughput. 

Fees will be calculated based on the amount of work required by the network to validate the data contained in each snapshot. The work amount is then adjusted with a multiplier that takes into account two additional metrics: staked DAG on the metagraph and PRO score. The multiplier discounts fees for Metagraphs also provide valuable attributes to the network outside of fees, such as incentivizing users to stake DAG in order to create a stable and secure network measured through PRO score.

**The following formula will be used to determine the required fees:**

:::info Please note:
As features roll out there will be a need to adjust the weights to ensure optimization.
:::

```
workAmount = byteSize x computationalCost
```

```
multiplier = 1 / (stakedDAG x stakingWeight) + (averageProScore x proWeight)
```

```
fee = (baseFee * workAmount * workMultiplier) + optionalTip
```

The fee structure outlined above and the 50kb snapshot size limitation will increase with the rollout of future development releases in future eras, allowing for more complex data types validated by the Hypergraph, and additional value for Validator Nodes.

Below are the description of the inputs (outside of the limitless potential inputs of PRO score):

### Work Amount

Work amount is a measure of the amount of work the Hypergraph must perform to validate a transaction. This is composed of the byteSize which is the size of the data being validated, and computationalCost which is the time and resources required to run the validation function. The combination of these two factors estimates the actual effort required of the network to validate a transaction. 

### Computational Cost

This is the time and effort it takes to run the validation function. Computational cost will be the combined measure of time and memory (RAM) resources required to run a validation function for a given transaction. A validation function that takes 100ms and 1GB of RAM is less costly to the network than a function that takes 2s and 8GB of RAM. This measures that time and resource cost. A simple transaction, like sending DAG to a peer, does not take as much time or resources compared to something complex like a cross-chain swap or Metagraph-to-Metagraph transaction (which may include multiple variables and Metagraphs deciphering different data types).

### Multiplier

The multiplier functions to calibrate the transaction cost of a Metagraph in relation to its valuable contributions to the overarching Hypergraph. This adjustment takes into account two primary factors:

1. **stakedDAG:** The total amount of staked DAG within the Metagraph, which represents locked value helping create a stable and secure network.
2. **averagePROScore:** The mean PRO score of the Validator Nodes present in the Metagraph, which is indicative of the trust and security of the network.

By incentivizing a higher PRO score, the multiplier aims to enhance the overall trustworthiness and security of the Hypergraph.

### Staked DAG

Staked DAG will be defined as the combined DAG staked by all nodes that sign a given metagraph snapshot. That could result in variable fees depending on the signers but fees could be controlled by metagraph networks enforcing DAG staking requirements on their networks. Metagraphs will need to set minimum DAG staked amounts to prevent their fees from varying too much.

### Base Fees and Optional Tip

The base fee is a constant that adjusts the overall cost of fees on the network. It is not a dynamic value but could be changed over time to optimize the overall fees burned by the network. 

To enhance snapshot prioritization beyond the mandatory validation fees, an optional tip value can be appended to the snapshot fees. This additional value augments the snapshot’s priority compared to those without a tip. Tips prove advantageous in congested networks, facilitating prompt processing for Metagraphs that require swifter finality times, ensuring their snapshots receive precedence over others in the network. 

## Summary

HGTP is an evolution of blockchain technology that brings the immutability and transparency of Web3 technology into Web2 digital infrastructure. The goal of this litepaper is to gain a better understanding of the fundamentals of our economics and the key stakeholders of the Hypergraph. With Metagraphs, businesses and individuals can leverage the Hypergraph, the Euclid SDK, and Validator Nodes to bridge conventional business logic with Web3 incentives and immutability. 

HGTP will provide the infrastructure to build Metagraphs while creating an economy that keeps peer-to-peer transactions feeless while including proper incentives to attract both Validator Nodes and Metagraphs. Beyond peer-to-peer transaction fees, we can begin to calculate fees on our network by looking at these parameters: workAmount, computational cost, multipliers, stakedDAG, and tips/base fees. Using these metrics, we can create a calculator to predict the cost of deploying a Metagraph and the cost associated with sending snapshots. 

Metagraphs will be required to create incentives for their own network while also placing DAG staking and resource requirements to attract Validator Nodes. It is conceivable that in a future release, variable rewards could be emitted based on the workload, thus reducing (or increasing) staking requirements to the network. As PRO scoring is released, new inputs will be added in the Network Fees calculator which will further incentivize active node management and network participation.  This paves the way for the Hypergraph to usher in more use cases into the web3 industry at large. 

For Metagraphs, entities can create their own network with tokenomics that correlate real-time data validation from existing legacy technology with Metagraph tokens. By having baseline network fees and requirements, and flexible development environments for Metagraphs, Metagraphs can build networks and incentivization structures that meet their industry’s needs while simultaneously connecting commerce to create data-driven insights that correlate to needs in the real world (vs. solely creating a web3 business that doesn’t impact the gross national product). The outcome of this design approach provides composable web3 technology with web2 infrastructure and economics enabling applications to drive exponential adoption of products and services outside of the web3 market. 

## Glossary

### Proof of Reputable Observation (PRO)
Hypergraph’s unique consensus algorithm that enables more flexible application development, high transaction speeds, and throughput capacity by measuring each node’s reputation. A node's reputation or PRO Score can be based on a combination of factors like past performance, DAG staked, up-time, etc.

### byteSize
The size of the code that's being run to validate the transaction/data type. 

### computationalCost
This is the time and effort it takes to run the validation function. You can imagine that a validation function that takes 100ms and 1GB of RAM is less costly to the network than a function that takes 2s and 8GB of RAM. This measures that time/resource cost. 

### workAmount
The size of the code being run and the amount of time/effort it takes to run combined. This is the actual amount of work the network is doing to validate the data. 

### unitMultiplier
This adjusts the cost of the work up or down depending on the metagraph's other contributions to the network (staked DAG and trust/stability score-PRO). Higher staked DAG + PRO score results in a lower multiplier which means that fees are cheaper for the same amount of work performed. 

### stakedDAG
Defined as the combined DAG associated with all nodes that sign a given state channel snapshot. That could result in variable fees depending on the signers but fees could be controlled by metagraph networks enforcing DAG staking requirements on their networks. Metagraphs will need to set minimum DAG staked amounts to prevent their fees from varying too much.

### baseFee
We need some DAG value in the equation to make the result a DAG price. This could be 1 datum or higher depending on what we want the final fee to come out to. This is not meant to be a dynamic value but a constant that we set when we implement this.

### optionalTip
This is the same thing as the priority fee or the DAG fee that we currently have. Snapshots with a tip have higher priority over snapshots without a tip.