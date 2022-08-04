---
title: Nodes
slug: nodes
hide_table_of_contents: false
---

## A basic state channel

There is no hard requirement for a state channel to implement a consensus process at all, meaning a cluster of nodes is optional, however it must operate at least one DAG node to enable throughput. There’s nothing preventing a state channel from starting slim and then augmenting their node network as the business scales.

### Pros

- Faster and simpler to implement
- Reduces cost of compute resources

### Cons

- Lacks horizontal scaling properties
- Lacks decentralized consensus (the key to trustless validation)
- Must self-sign for validity of data
- Not as secure

## A state channel with nodes

If possible, it’s recommended to start with a minimum of three nodes (1 cluster). This allows for early testing and fine-tuning of the consensus algorithm.

### Pros

- Decentralized and trustless consensus
- More flexibility to scale as needed
- Better availability, partition tolerance, and performance
- Increased security
- Three’s a party 🎉

### Cons

- Slower and harder to implement
- Increases cost of additional compute resources