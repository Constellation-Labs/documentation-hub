---
title: Become a Dor Operator
slug: become-dor-operator
hide_table_of_contents: false
---

## ◽ Welcome!
Thank you for your interest in becoming a Dor validator node operator and joining our community of operators.

This guide outlines the administrative steps and prerequisites required to qualify as a Dor validator node operator. 

It will also walk you through the initial administrative process necessary to participate in the Dor metagraph. 

Follow these instructions carefully to ensure a smooth onboarding experience.

## ◽ Program Requirements
The following are the basic requirements to become a Dor Metagraph operator.

- Lattice account.
- Discord account.
- [Collateral requirement](#-collateral-preparation).

Post approve to the program:

- Dor validator node that is up, running, and properly connected to the metagraph. 

## ◽ Collateral Preparation

To qualify as a Dor Metagraph Validator, you must accumulate/prepare the required staking collateral.

Your Dor validator node must hold a Constellation wallet containing 1 million $DOR tokens.

#### 1.	Set Up a Stargazer Wallet

If you don’t already have a Stargazer wallet, create one by following the Stargazer wallet [installation documentation](/learn/tools-resources/wallets).

#### 2.	Transfer $DOR Tokens

Once your wallet is set up, transfer 1 million $DOR tokens into the wallet practicing normal transfer protocol to ensure you do not run into any issues (lost funds) during transfer.

Having the required collateral in place is an essential prerequisite for qualifying to run a Dor  validator node on the Dor metagraph.

| Token | Collateral Requirement |
| :--: | :--- |
| $DOR | 1,000,000 |

## ◽ Understanding Rewards
Once you become a Dor validator node operator, you will be eligible for two types of rewards.

| Reward | Frequency | Description |
| :--: | :---: | :--- |
| Consensus | Continuous per consensus round | As your node actively participates in the Dor metagraph, it will earn rewards at the conclusion of each consensus round. These rewards are granted when your node successfully validates data in compliance with the network cluster requirements. |
| Tax | Daily | During data processing and validation within the metagraph cluster, a tax is applied and paid by the principals using the metagraph services. This tax is accumulated in a distribution wallet. At the end of each day, the distribution wallet disperses a portion of the collected tax to all active validator nodes. |

## ◽ Apply 
Create or login to your [Lattice Gateway](https://lattice.is).

## ◽ Dor Node Operator Program
From the [main dashboard](https://lattice.is/dashboard) click on `View program` to view the [Dor Node Operator Program](https://lattice.is/rewards/hgtp-metagraphs/dor/operators).

## ◽ Opt-in
Connect your [Stargazer](/learn/tools-resources/wallets) through the Lattice Gateway and follow the instructions to `opt-in` to the program.

## ◽ Acceptance
Your application to join the program will be processed through the Lattice Gateway. Upon approval, you will receive an email containing detailed instructions for the next steps.

## ◽ Post Acceptance
Once your application is approved, you can begin the technical steps to build and activate your Dor Validator Node.

*You may decide to bookmark this location and return to continue reading upon acceptance.*

#### 1. Reception
You will receive your acceptance and be ready to continue.

#### 2. Build your Dor Validator Node.
Follow the [quick start guide](/validate/quick-start/dor-quickstart) to create and configure your node.
#### 3. Supply your node id to Lattice.
Once your Dor validator node is created, you will be required to log back into your [Lattice Gateway](https://lattice.is) account and input your node's `node id`.

When you enter this node id, the Lattice Gateway will automatically link your Dor validator node to your account and your validator node will be eligible to receive both [reward types](#-understanding-rewards).  

- Your node id is used by Lattice to derive your DAG wallet address.
- You will not receive rewards until your node is participating on the cluster.
- The original wallet that you connected to your Lattice account to prove your collateral requirement will **not** receive any rewards **unless** it the same Stargazer wallet that is present on the node.  

:::info Wallet Export Considerations
In most cases, you will not be able to directly export your existing wallet for use on your Dor Validator Node.

Although not recommended, if you are an advanced user with experience managing wallets, you may choose to export the private key from your current wallet and import it into the p12 keystore configured on the node.

This process requires a solid understanding of key management and security practices. Proceed with caution to ensure the integrity of your wallet and private keys. 

If you’re unfamiliar with this process, it is recommended to use the new wallet created during the node build, and transfer the tokens from the original wallet to the new wallet, practicing normal transfer protocol to ensure you do not run into any issues (lost funds) during transfer.
:::