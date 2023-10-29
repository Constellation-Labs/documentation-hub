---
title: Trust Labels Explained
slug: trust-labels
hide_table_of_contents: false
---

Trust labels are components of Proof of Reputable Observation (PRO). They impact various things,
like which nodes to download snapshots from. Trust labels are off-chain knowledge of how trustworthy
nodes are and how likely they are to attack the network. They are local bias values that you provide
to your nodes at boot-time, and they apply to those nodes. So, different nodes can be biased
differently.

Trust labels are numeric values between `-1` and `1`. `-1` is the highest level of distrust, and `1`
is the highest level of trust. They correspond to conventional movie or product ratings. For
example, a node you know to be very secure can get a high trust label rating (e.g., `0.9`). Nodes
operated by someone you trust (e.g., yourself) might get scores of `0.6` or `0.7`. If you know a
node not a bot, but are otherwise unsure of it, you might give that node a rating of `0.5`. To nodes
suspected of being in a botnet, you might assign them negative trust label ratings (e.g., `-0.6`).

Negative trust labels are not the same as blacklisting nodes, but they do bias operations against
those nodes. For example, if `Node B` views `Node A` with a `-1` trust, `Node B` will download from
`Node A` unless a trusted node is available.

`0` indicates neutral trust and is distinct from the absence of a trust label. In other words, `0`
means you know about the node and have no reason to trust or distrust it. No trust label means you
don't know about the node. You should not provide labels to nodes you do not know about.

As your nodes interact with the other nodes on the network, they will develop their personal view of
each peer's trustworthiness. So, the trust labels that you provided diminish in significance. In
other words, trust labels are at their most impactful when there is no other knowledge of or history
of interactions with the other nodes on the network. Trust labels represent your personal view of
the trustworthiness of your peers and help secure your nodes. Do not replicate someone else's trust
labels. PRO automatically incorporates information from peer nodes. So, there is no need to copy
someone else's scores.

When booting your node, use the `` argument and provide the path to a flat file containing the trust
labels. The file is a text file with a single trust label entry per line formatted like so:

`Node ID`, `Trust Label`

An example flat file is available [here](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/sdk/src/test/resources/ratings.sample.csv).