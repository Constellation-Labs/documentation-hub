---
title: Framework Archictecture
sidebar_label: Architecture
hide_table_of_contents: false
---

<intro-end />

This section contains information about the Metagraph Framework and its relation to the deployed architecture of a metagraph. 

In order to understand how the framework functions, it is important to understand the multi-layered architecture of a metagraph. Make sure you're familiar with [Metagraph Architecture](/metagraphs/concepts/architecture) before continuing. 

## Code Structure
A new metagraph project generated from the [currency template](https://github.com/Constellation-Labs/currency.g8) will have the following module directory structure: 

```
- modules/
- - l0/
- - - Main.scala
- - l1/
- - - Main.scala
- - data_l1/
- - - Main.scala
- - shared_data
- - - Main.scala
```

Let's break down each directory and its function. 

##### L0
This directory contains a `Main.scala` file with a Main object instance that extends `CurrencyL0App`. `CurrencyL0App` contains overridable functions that allow for customization of the operation of the metagraph L0 layer including validation, snapshot formation, and management of off chain state. It also contains the `rewards` overridable function that allows for minting of new tokens on the network. 

:::note
While the class `CurrencyL0App` has the "Currency" in its name, it defines the L0 layer through which both Currency L1 and Data L1 data flows. 
:::

##### L1
This directory contains a `Main.scala` file with a Main object instance that extends `CurrencyL1App`. `CurrencyL1App` contains overridable functions relevant to customizing token validation behavior such as `transactionValidator`. 

##### L1 Data
This directory also contains a `Main.scala` file, with a Main object instance that extends `CurrencyL1App`. In order to have this L1 behave as a DataApplication, the  `dataApplication` method should be overridden with your custom configuration. The metagraph examples repo has implemented examples to reference, for example the [NFT example](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/nft/modules/data_l1/src/main/scala/com/my/nft/data_l1/Main.scala). 

##### Shared Data
This directory contains an empty Main.scala file but is provided as a suggestion for application directory structure. Several of the lifecycle functions are run on both Data L1 and on L0. For example, serializers/deserializers, validators, and data types will likely shared between layers. Organizing them in a separate directory makes their use in multiple layers clear. 

See the [Data Application Lifecycle](./data/lifecycle-functions) for more information. 
