---
title: Currency Framework
sidebar_label: Overview
hide_table_of_contents: false
---

<intro-end />

The Currency Framework provides a fast and customizable way to launch a decentralized application (dApp) with native support for currency-related transactions. Unlike closed-loop systems such as smart-contract platforms, this framework offers enhanced flexibility by allowing direct modifications to application-level code. It encapsulates functionalities necessary for peer-to-peer currency transactions, chain data construction, and more, in a user-friendly package. This enables developers to start creating a dApp with its own internal currency efficiently.

By using this framework, developers gain the advantage of building and customizing their own applications, supported by a proven underlying framework. This saves significant effort in handling conventional balance-style transactions. Example entry points are included to facilitate a quick and seamless application launch, which automatically supports a functioning, live token. Additional features can be easily integrated.

:::info Euclid Development Environment
For optimal results, it is recommended to run this framework as part of a [Euclid Development Environment](https://chat.openai.com/sdk/elements/dev-environment) project. This environment manages the installation and configuration of the project as described below and provides an integrated minimal development setup. Manual installation instructions are also provided for completeness.
:::

## Distribution

The Currency Framework can be distributed in several ways, including:

-   `giter8`: A g8 template project that can be customized for your organization. This template can be built using [giter8](http://www.foundweekends.org/giter8/). For more details, visit the [project repository](https://github.com/Constellation-Labs/currency.g8).
-   `metagraph-examples`: Explore ready-to-use examples of metagraphs. Check out all the examples [here](https://github.com/Constellation-Labs/metagraph-examples).

:::note
Installation requires pre-generated Tessellation dependencies. To generate these dependencies, run: For versions earlier than v2.3.0:

```bash
sbt shared/publishM2 kernel/publishM2 keytool/publishM2 sdk/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2
```

For versions v2.3.0 or later:

```bash
sbt shared/publishM2 kernel/publishM2 keytool/publishM2 nodeShared/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2
```
:::

## Installation using giter8

Ensure Scala and giter8 are installed. Install giter8 with:

```bash
./cs install giter8
```

Then, install the template using the specified tag:

```bash
g8 Constellation-Labs/currency --tag "v2.3.3" #Using v2.3.3 as an example
```

## Installation using metagraph examples

Clone the [repository](https://github.com/Constellation-Labs/metagraph-examples) and select the desired example. Navigate to the example directory to proceed.

## Compiling the Project

After installing your project and the Tessellation dependencies, compile the project to generate your local JAR files. You can compile as follows:

For metagraph-l0:

```bash
sbt currencyL0/assembly
```

For currency-l1:

```bash
sbt currencyL1/assembly
```
For data-l1:

```bash
sbt dataL1/assembly
```

:::note
It is highly recommended to use the [Euclid Development Environment](https://chat.openai.com/sdk/elements/dev-environment) for installation and compilation processes. Euclid simplifies the generation of dependencies and your metagraph JARs.
:::