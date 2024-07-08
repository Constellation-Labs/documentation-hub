---
title: Currency Framework
sidebar_label: Overview
hide_table_of_contents: false
---

<intro-end />

The Currency Framework provides a fast and customizable way to launch a metagraph with native support for currency (L0 token) transactions. Unlike closed-loop systems such as smart-contract platforms, this framework offers enhanced flexibility by allowing direct modifications of application-level code. It encapsulates functionalities necessary for peer-to-peer token transactions, chain data construction, and more, in an easy-to-use package.

Note that launching a token is not required when developing with the Currency Framework, and at present, the Currency Framework is also the most efficient way to launch a data-focused application with or without a token associated with it. Extending the framework with the Data API allows developers to build metagraphs with custom data ingestion, validation, and storage logic. See the [Data API](./data-api) section for more detail.

By basing their metagraphs on this framework, developers gain the advantage of working with a proven set of underlying features and functionality in order to be able to focus on their project's own business logic rather than boilerplate functionality. Example projects are provided in order to speed up development. See [metagraph examples](https://github.com/Constellation-Labs/metagraph-examples) or use the `install-template` method of `hydra`. 

:::info Euclid Development Environment
For optimal results, it is recommended to run this framework as part of a [Euclid Development Environment](/sdk/elements/dev-environment) project. This environment manages the installation and configuration of the project as described below and provides an integrated minimal development setup. Manual installation instructions are also provided for completeness.
:::