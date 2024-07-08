---
title: Data Application Architecture
sidebar_label: Architecture
hide_table_of_contents: false
---

<intro-end />

Data applications or metagraphs implementing the Data API are built on top of the Currency Framework. In a standard Currency Framework metagraph, the metagraph consists of 3 mL0 (metagraph L0) nodes and 3 cL1 (currency L1) nodes. Data applications build on top of this structure and introduce a 2nd L1 layer that runs in parallel with the currency L1 layer. A data application's minimal structure consists of 3 mL0 (metagraph l0) nodes, 3 dL1 (data L1) nodes, and optionally 3 cL0 (currency l0) nodes. Blocks produced by both the cL1 and dL1 nodes undergo consensus on the L0 layer and their data is grouped together within metagraph snapshots. 

## The DataApplication Instance
Data Applications provide an instance of `BaseDataApplicationL0Service` and `BaseDataApplicationL1Service` to the L0 and Data L1 CurrencyApp definitions, found in Main.scala for L0 and L1 respectively. The definition of these services contain a set of overridable methods that allow the developer to provide custom data validation logic to the existing application flow. 

A Data Application, at it's core, is about state management. We define our initial state shape, accept data updates to the application, accept or reject those updates based on validation criteria, and then return a new state on each snapshot. 