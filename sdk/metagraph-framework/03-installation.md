---
title: Installation
sidebar_label: Installation
hide_table_of_contents: false
---

The Metagraph Framework can be installed in several ways:

- **Euclid** (recommended): Install an empty project in Euclid SDK using the `hydra install` command. 
- **Metagraph Examples** (recommended): Explore ready-to-use examples of metagraph codebases in the [metagraph-examples repo](https://github.com/Constellation-Labs/metagraph-examples). These examples can also be installed automatically via the `hydra install-template` command.
- **giter8**: The Metagraph Framework is distributed as a g8 template project that can be customized for your organization. This template can be manually built using [giter8](http://www.foundweekends.org/giter8/). For more details, visit the [project repository](https://github.com/Constellation-Labs/currency.g8).

:::note Quick Start
See the Euclid Quick Start guide for a walkthrough of framework installation within the Euclid Development Environment. This is the recommended development environment and installation method for most users.  
:::

## Installation Using Giter8
:::note
Manual installation using giter8 necessitates pre-generated Tessellation dependencies. To generate these dependencies, execute the following commands in the tessellation repository on the desired tag:
```bash
sbt shared/publishM2 kernel/publishM2 keytool/publishM2 nodeShared/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2
```
:::

Ensure Scala and giter8 are installed. Install giter8 with:

```bash
./cs install giter8
```

Then, install the template using the specified tag:

```bash
# replace v2.8.0 with the version to install
g8 Constellation-Labs/currency --tag "v2.8.0" 
```

### Compiling the Project

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

## Installation Using Metagraph Examples

Using Euclid, you can execute the following command to list the available examples:
```bash
hydra install-template --list
```

To install the desired template, execute this command:

```bash
# replace 'nft' with the name of the desired template
hydra install-template nft
```

### Compiling the Project

To compile the project using Euclid, you just need to run:
```bash
hydra build
```