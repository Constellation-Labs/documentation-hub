---
title: Validator Nodes
hide_table_of_contents: false
---

Constellation Network is a permissionless decentralized protocol that consists of independently owned and operated validator nodes. Validator nodes provide computational resources that are used to perform consensus on the state of data that flows through the network. They are incentivized through Constellation Network's native currency, $DAG, which is used to quantify and pay the costs of these consumed compute resources.

![Validator Nodes](/img/coreconcepts/nodes.png)

## PRO Consensus
While Proof-of-Work or Proof-of-Stake incentivize security through claimed ‘zero-trust’ systems, they ignore or obfuscate many layers of trust involved in the process of distinguishing and forming the network in favor of reliance exclusively on chain data. Additionally, they rely upon maximizing an active chain, allowing reversibility under short term conditions, Constellation instead encourages node security by attempting to decentralize and minimize trust, using a combination of per-node oracle reputation scoring (provided by and customizable by every peer,) reversibility proofs, and peer to peer reliability scoring mechanisms. This mechanism is referred to as Proof-of-Reputable Observation (PRO) and is a live running model that adaptively responds to insecure conditions in real-time in an effort to minimize overall trust in the network.

## Node Operator Rewards
Node incentivization is weighted by the total contribution relative to this score and the volume of data they are validating, in a form that encourages even relatively small nodes to operate fairly . Calculations are derived from chain data per finality window (or snapshot) and distributed immediately. The opportunity for nodes to participate in consensus and validation activities will depend on the demand for their compute resources, as difficulty is dynamically adjusted based on overall data throughput metrics.

:::info Interested in being a node operator?
Learn more about the process of running a validator node in the [Validator Nodes section](../../validate).
:::
