---
title: "Constellation Validator Nodes"
hide_table_of_contents: true
---

<head>
  <title>Constellation Validator Nodes</title>
  <meta
    name="description"
    content=""
  />
</head>

![Nodes within the network](/img/coreconcepts/nodes.png)

Constellation Network is a permissionless decentralized protocol that consists of independently owned 
and operated validator nodes. Validator nodes provide computational resources that are used
to perform consensus on the state of data that flows through the network. They are incentivized through
Constellation Network's native currency, **$DAG**, which is used to quantify and pay the costs of these 
consumed compute resources. In contrast to Proof-of-Work or Proof-of-Stake rewards models, Constellation
Network rewards nodes using a reputation scoring system that measures the trust-worthiness 
of a node according to its behavior on the network relative to others. This mechanism is referred to as
Proof-of-Reputable Observation (PRO) and is an autonomous machine learning algorithm that creates
reputation models of each node to proactively identify bad behaving and poor performing nodes. A PRO score
is assigned to each node within a range between 0 - 1.0, with a PRO score of 1.0 being optimal. 

![Nodes waiting to participate](/img/coreconcepts/nodeswaiting.png)

Nodes with a higher PRO score receive relatively more of the fees distributed to the network per finality window since 
they are contributing to the health and security of the network. The opportunity for nodes to participate in
consensus and validation activities will depend on the demand for their compute resources. Constellation Network
can dynamically scale up or down the number of validator nodes in response to network conditions. If a node did
not actively participate, it will not receive $DAG. This creates a direct correlation between the network's 
throughput and the value of the network. 

**Node Requirements:**
- In order to participate as a validator node, you must hold 250,000 $DAG in a compatible wallet, such as the [Stargazer Wallet](https://documents-hub.netlify.app/stargazer).
- Constellation Network does not require $DAG to be locked into any form of staking contract / liquidity pool. A user is free to withdraw their $DAG at any time.
- System requirements and installation instructions can be found within the [Run a Validator Node](https://documents-hub.netlify.app/nodes) documentation.
