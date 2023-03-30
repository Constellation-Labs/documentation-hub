---
title: Currency Framework
sidebar_label: Overview
hide_table_of_contents: false
---

<intro-end />

The Currency Framework allows you to quickly launch & customize an entire decentralized application with currency-related transactions supported natively and automatically. In contrast to closed loop systems like smart-contract platforms, greater flexibility in supporting conventional code is offered by the ability to directly modify any & all application level code. The functionalities associated with peer-to-peer currency transactions, chain data construction, and more are encapsulated in an easy-to-use framework to allow you to begin developing a decentralized application with it's own internal currency. 

This offers you the benefits of building and customizing your own application, with the support of a tested underlying framework saving you the effort involved in supporting conventional balance style transactions. Example entrypoints are supplied to make it quick and easy to launch your application immediately, which automatically supports a live, working token upon which your own features can be easily added.

:::info Euclid Development Environment
It is recommended that you run this framework as part of a [Euclid Development Environment](/sdk/elements/dev-environment) project which will handle the installation and configuration of the project via the template described below, as well as provide a fully integrated minimal development environment. Manual installation instructions are provided below for completeness. 
:::

## Distribution
The Currency Framework is distributed as a g8 template project that can be built with [giter8](http://www.foundweekends.org/giter8/) and customized to your organization. The template exposes the `Main` method for both the `L0` and `L1` applications which allows full customization of their functionality. 

See the [project repo](https://github.com/Constellation-Labs/currency.g8) for further detail.

## Installation
Make sure you have Scala installed and then install giter8
```bash
cs install giter8
```

Now you can install the template
```bash
g8 Constellation-Labs/currency --tag VERSION_TAG
```

Run in the Tessellation repository
```bash
Run sbt shared/publishM2 kernel/publishM2 keytool/publishM2 sdk/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2 
```

Compile and run the generated project. 

