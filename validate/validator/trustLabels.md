---
title: Trust Labels
slug: trust-labels
hide_table_of_contents: false
---

# Trust Labels

## Introduction

Trust labels constitute integral aspects of the Proof of Reputable Observation (PRO) system.

They impact several facets, such as determining the nodes from which to obtain snapshots. Trust
labels are off-chain information concerning the security of nodes and their potential to harm the
network. These labels are local bias values that you supply to your nodes during the joining process
to the cluster (metagraphs). They are specific to each node. Consequently, different nodes can
exhibit varying degrees of bias.

:::note
On a blockchain, `off-chain` information refers to data and transactions that are not recorded
directly on the blockchain. It describes any data or processes that occur outside the main
blockchain network.
:::

Trust labels are numeric values between **`-1`** and **`1`**.

- `-1` is the highest level of distrust
- `1` is the highest level of trust.

A node’s trust label can be described as its rating, similar to a customer’s review of a product or
movie.

:::info Example

- A node you know to be very secure can get a high trust label rating (e.g., `0.9`).
- Nodes operated by someone you trust (e.g., yourself) might get scores of `0.6` or `0.7`.
- If you know a node is not a bot, but are otherwise unsure of that particular node, you might give
  that node a rating of `0.5`.
- If you suspect a node of being in a botnet, you might assign them negative trust label ratings
  (e.g.,` -0.6`).

:::

### Negative Trust Labels

Assigning a negative trust label to another node should indicate that you have some information
external to the network suggesting that the peer might be involved in, coordinating, or
associated with malicious activities or negative actors. Negative trust labels don't prohibit a node
from participating in the network, and they don't act as a centralized blacklist. Instead, they
function on a per-node basis, preventing the spread of additional scoring information in the model.

:::info Example
If `Node B` views `Node A` with a `-1` trust, `Node B` will download from `Node A` unless a trusted node is available.
:::

They are also used in situations where multiple versions of the network (forks) exist to reduce the
influence of votes associated with a specific version. For instance, you should consider applying a
negative trust label if a node clearly unrelated to the project or community starts promoting a
particular version as the "correct" fork, even when it involves an obvious attempt at double
spending or changing balances.

### Neutral Trust Labels

`0` indicates neutral trust and is distinct from the absence of a trust label. It means you know
about the node and have no reason to trust or distrust it.

:::important Note
In general, avoid giving a node a `0` trust label. Instead, don’t provide a trust label.
:::

No trust label means you don't know about the node.

:::danger Do Not
Do not provide labels for nodes you do not know about.
:::

### Trustworthiness

As your nodes engage with other nodes on the cluster, they will form individual assessments of
each **peer's trustworthiness**. Consequently, the trust labels you initially supplied become less
relevant. Trust labels wield their greatest influence when no prior knowledge or interaction history
with other nodes on the network exists. These labels represent your unique perspective on your
peers' trustworthiness and contribute to the security of your nodes.

It is not necessary to duplicate another node’s trust labels, as **PRO** automatically assimilates
data from peer nodes, obviating the need to replicate scores from others.

### Supplying Trust Labels

When your node initiates a join to the cluster (metagraph), use the `--ratings` argument and
provide the path to a flat file containing the trust labels.

The file is a text file with a single trust label entry per line in the following format:

`Node ID`, `Trust Label`

An example flat file is available [here](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/sdk/src/test/resources/ratings.sample.csv).
