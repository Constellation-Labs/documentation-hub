---
title: Forks
hide_table_of_contents: false
---

In the context of the Constellation Network Hypergraph or metagraph cluster, the concepts of majority fork and minority fork relate to how consensus is reached within the network during discrepancies, errors, or potential forks (splits) in the blockchain.

###  ◽ What is a majority fork?

A majority fork occurs when the majority of nodes (validators) in the network agree on a particular version of the blockchain. This version is considered the canonical chain and is recognized as the valid state of the network.

The majority fork follows the correct protocol rules and has the most computational power or the highest participation of nodes backing it. In Constellation’s architecture, which uses a Directed Acyclic Graph (DAG) instead of a traditional linear blockchain, the majority fork represents the most widely agreed-upon state of the data, ensuring consistency and security.

In most cases a majority fork will occur when one of the three source nodes on the cluster is restarted due to an upgrade or other reasons that require a restart.

##### Example
Tessellation is upgraded from `vX.0.0` to `vX.0.1`.

##### Example
If two potential transaction histories exist due to network desynchronization or conflicting transactions, the fork accepted by the majority of validators is the one that becomes part of the official ledger.


###  ◽ What is a minority fork?

A minority fork happens when a smaller subset of nodes supports an alternative version of the blockchain that diverges from the majority fork. This version is generally considered invalid or less authoritative because it does not have the consensus backing of the majority.

Minority forks can arise due to network errors, malicious actors, or simply a disagreement in data processing. 

In the Constellation Network, minority forks are usually discarded or ignored because they do not meet the consensus requirements established by the majority of validators.

##### Example
Tessellation is upgraded from `vX.0.0` to `vX.0.1` and the node(s) experiencing the minority fork have not upgraded.

:::caution Considerations
Transactions or data on a minority fork may be temporarily visible to those supporting nodes but are eventually rejected and not recognized by the broader network.
:::

### ◽ Implications in Constellation’s Network

##### Security and Stability
By prioritizing the majority fork, the network ensures that only the most secure and agreed-upon version of the ledger is maintained, minimizing the risk of double spending or inconsistencies.

##### Fork Resolution: 
Mechanisms are in place to resolve forks by aligning nodes back to the majority chain, thus maintaining the integrity and stability of the network.

### ◽ Final Thoughts
The majority fork keeps the network unified and functioning correctly, while the minority fork represents a temporary deviation that is usually corrected or disregarded by the network’s consensus protocol.