---
title: Introduction
slug: /
sidebar_label: Introduction
hide_table_of_contents: true
---

import QuickStart from '@components/page/QuickStart';

The Euclid SDK is a powerful toolkit that provides developers with a comprehensive set of tools to build distributed applications on the Constellation Network.

![Euclid SDK](/img/sdk/euclid-cover.png)

## Euclid SDK

Digital ledger technology (DLT) has opened up a world of possibilities for developers who are looking to build decentralized applications. However, building these applications can be a challenging task, and the learning curve can be steep. Additionally, most blockchain development platforms are closed systems that do not allow the introduction of arbitrary code which limits the kind of applications that project teams are able to build. 

Euclid offers a more flexible approach to DLT application development that enables application teams to encorporate common libraries into their applications while also allowing for direct customization of the internal processes of their networks. This allows for complete customization of network behavior, including the ability to introduce custom consensus mechanisms, complex arbitrary data types, and associated validation logic. This approach differs significantly from closed systems (ETH, Solana, Hedera) that do not allow this level of customization. 

Constellation’s micro-service based architecture allows for highly scalable production applications but also introduces new challenges for local development due to the number of services that need to be developed, deployed, and monitored. This is where the Euclid SDK comes in. It provides developers with a powerful set of tools that simplify the process of building distributed applications on the Constellation Network.

## Purpose

Euclid is designed to simplify Constellation metagraph development. It is currently under active development and provides a set of composable patterns that abstract away the boilerplate code necessary to develop using Tessellation while still allowing developers the freedom to implement their own extensions. This approach allows project teams to get up and running quickly so that they can focus on their own business logic without the restrictions of being locked into a closed development system.

The SDK is designed as an extensible system that supports diverse use cases and allows components to be reused whenever possible. This modular design enables the SDK to support a wide range of use cases, from simple to complex that seamlessly interoperate through the Hypergraph network. It also allows developers to choose which features to include in their metagraph and which to leave out.

## Frameworks

Euclid will include a series of micro-frameworks that are each designed to encapsulate a specific set of functionality for metagraph projects and provide out-of-the-box utility to project teams.

Currently, only a single framework has been released: the Currency Framework. This framework provides developers with a simple way to create and manage a high-throughput digital currency utilizing the Metagraph Token standard. However, Euclid is designed to support a wide range of components that can be used to create complex distributed applications.

Each framework is designed to abstract away the complexity of developing on the Constellation Network while allowing complete customization. This architecture makes it easy for developers to create distributed applications quickly by making use of provided functionality and extending it to fit their individual use cases.

<QuickStart />
