---
title: Transaction Fees
hide_table_of_contents: false
---

<intro-end />

This section provides an overview of transaction fees associated with tokens on the Constellation Network. While many transactions on the network are free, transaction fees are a useful mechanism to influence transaction prioritization, resource allocation, and the consensus process. Understanding how fees work is crucial for developers working on their own metagraphs or implementing applications that utilize DAG or metagraph tokens. 

## DAG Transaction Fees

DAG transactions have the following characteristics with respect to fees:

- Fees are an **optional addition** to a transaction. They help increase transaction priority and trigger parallel consensus.
- Without a fee, an account is limited to **one transaction per global snapshot**. Transactions without fees do not trigger on-demand consensus.
- A fee of **1 datum** or higher will give the transaction priority over feeless transactions and trigger parallel consensus.
- Fees for DAG transactions are paid in **DAG**.

## Metagraph Token Transaction Fees

metagraph tokens have their own fee structure, which is local to the metagraph. Separate snapshot fees apply to metagraphs. The fee structure depends on whether you are using the SDK Currency Module or building a custom metagraph token implementation.

### SDK Currency Module

When using the SDK Currency Module, metagraph token transactions have the following characteristics:

- metagraph token transactions behave much in the same way that DAG transactions do.
- Fees are an **optional addition** to a transaction. They help increase transaction priority and trigger parallel consensus.
- Without a fee, an account is limited to **one transaction per currency snapshot**.
- A fee of **1 datum** or higher will give the transaction priority over feeless transactions and trigger parallel consensus.
- Fees for metagraph token transactions are paid in the **metagraph currency denomination**, not in DAG.

### Custom Metagraph Token Implementation

When building a custom metagraph token implementation outside the Currency Module, the fee structure can be tailored to your specific requirements:

- Fees can be either **optional** or **required**, depending on your implementation.
- There is no predefined logic that you must follow. Your metagraph can implement any logic that suits your use case.
- Fees can be paid in any currency your metagraph supports, allowing for greater flexibility in fee structures and payment options.