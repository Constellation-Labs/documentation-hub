---
title: Trust Labels Explained
slug: trust-labels
hide_table_of_contents: false
---

Trust labels are components of Proof of Reputable Observation (PRO). They impact various things,
like which nodes to download snapshots from. Trust labels are off-chain knowledge of how
trusthworthy nodes are and how likely they are to attack the network. They are local, bias values
that you provide to your nodes at boot-time, and they apply to those nodes. So, different nodes can
be biased differently.

Trust labels are numeric values between `-1` and `1` where `-1` is the highest level of distrust and
`1` is the highest level of trust. They correspond to conventional movie or producting ratings. For
example, a node that is known to be extremely secure can be given a very high trust label (e.g., 
`0.9`). A node that is operated by someone you trust (e.g., yourself), can be given a score like
`0.6`. A node that you know is run by a human operator, but are otherwise unsure of might be a 
`0.5`. A node that is suspected of being in a botnet can be given a negative trust label, like 
`-0.6`. `0` indicates neutral trust and is distinct from the absense of a trust label. In other
words, `0` means that there is knowledge of a node, but the knowledge indicates a neutral trust. So,
a node you know about, but have no reason to trust or distrust might be a `0`. In contrast,
the absense of a trust label means that there is no knowledge of a node. You should **not** provide
labels to nodes you have no knowledge about. Negative trust labels are not the same as blacklisting
a node, but they do bias operations against those nodes. For example, if `Node B` views `Node A`
with a `-1` trust, `Node B` will download from `Node A` unless a trusted node is available.

As your nodes interact with the other nodes on the network, they will develop their own view of
each other node's trustworthiness. So, the trust labels that you provided dimish in significance.
In other words, trust labels are at their most impactful when there is no other knowledge or
interaction history. Trust labels are meant to secure your nodes and represent your personal view of
the trustworthiness of other nodes on the network. You should not replicate someone else's trust
labels. PRO automatically incorporates information from peer nodes, so there is no need to copy
someone else's scores.

When booting your node, use the `` argument and provide the path to a flat file containing the trust
labels. The file is a text file with a single trust label entry per line formatted like so:

`Node ID`, `Trust Label`

An example flat file is available [here](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/sdk/src/test/resources/ratings.sample.csv).