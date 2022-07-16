---
title: "Blockchain"
hide_table_of_contents: true
---

<head>
  <title>Blockchain</title>
  <meta
    name="description"
    content=""
  />
</head>

<intro-end />

In a Blockchain network, hundreds of thousands of computing devices create a distributed network without inherently
trusting each other. They reach consensus about the shared data through unique mechanisms and ensure that once the
consensus is reached, the data is tamper-proof. This allows the devices, otherwise known as nodes in the network,
to transact, i.e. send tokens to each other. Tokens are the unit representation of the value created by the network,
and fuels a shared economy in a secure digital network.

![Blockchain Network](/img/coreconcepts/blockchainnetwork.png)

The technology behind Blockchain is ingenious. The transactions sent among the nodes are bundled together into Blocks
of data. These blocks are chained in a fashion that the cryptographic hash of a previous block is included in the next
block — making the entire Blockchain tamper-proof. A transaction is valid when the sender has enough tokens to send that
transaction — analogous to having enough money in a bank account before sending someone money. Understandably, only valid
transactions are allowed to be included in the block data. Since it is a network of nodes that virtually do not trust
each other, transactions deemed valid by the majority of the nodes are selected to be valid. In a Blockchain network,
this forces each transaction to be sent to every node, and requires a way to incentivize each node to do the right thing.
The Bitcoin network famously mandates each node to solve a cryptographically challenging puzzle to provide the
proof of honesty — tuned in a way that it does not make sense for a node to both burn enough electricity to solve
the hard puzzle and act maliciously.

![Bottleneck](/img/coreconcepts/bottleneck.png)

Unfortunately, this sequential process is very inefficient and far too slow to be suited for mass adoption. Users are accustomed to Internet 
applications that are massively distributed with hundreds of thousands of concurrent users — transactions need to be 
verified in a matter of seconds, instead of hours. Constellation proposes a novel mechanism to improve upon the 
Blockchain technology with decades of learning from the scalable distributed technology. We will discuss how 
Constellation is different from what is typically conceived as a Blockchain in the following section.





