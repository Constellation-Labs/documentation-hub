---
title: Validator Nodes
hide_table_of_contents: true
---

<intro-end />

Constellation Network is a permissionless decentralized protocol that consists of independently owned and operated validator nodes. Validator nodes provide computational resources that are used to perform consensus on the state of data that flows through the network. They are incentivized through Constellation Network's native currency, $DAG, which is used to quantify and pay the costs of these consumed compute resources. 

![Validator Nodes](/img/coreconcepts/nodes.png)

In contrast to Proof-of-Work or Proof-of-Stake rewards models, Constellation Network rewards nodes using a reputation scoring system that measures the trust-worthiness of a node according to its behavior on the network relative to others. This mechanism is referred to as Proof-of-Reputable Observation (PRO) and is an autonomous machine learning algorithm that creates reputation models of each node to proactively identify bad behaving and poor performing nodes. A PRO score is assigned to each node within a range between 0 - 1, with a PRO score of 1 being optimal.

Nodes with a higher PRO score receive relatively more of the fees distributed to the network per finality window since they are contributing to the health and security of the network. The opportunity for nodes to participate in consensus and validation activities will depend on the demand for their compute resources. Only nodes participating in consensus for a given snapshot will receive rewards. This creates a direct correlation between the network's throughput and the value of the network.

:::info Interested in being a node operator?
Learn more about the process of running a L0 validator node in the [Validator Nodes section](/nodes).
:::