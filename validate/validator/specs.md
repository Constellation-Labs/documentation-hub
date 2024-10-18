---
title: Hardware Specifications
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>MainNet, IntegrationNet or TestNet Hardware Specs</title>
  <meta
    name="description"
    content="MainNet, IntegrationNet or TestNet Hardware Requirements"
  />
</head>

## Introduction

As with any cryptographic ecosystem, there are specific hardware requirements that must be met to properly and efficiently run a node within the Constellation Network's ecosystem.

## Hardware Requirements

There are currently two types of nodes run on Constellation Network specific Hypergraph and metagraphs.

- [Constellation Network](https://constellationnetwork.io) hybrid validator [node](#hybrid-node-hardware-requirements).
- [Dor](https://getdor.com) validator [node](#dor-metagraph-node-hardware-requirements).

### Hybrid Node

Constellation Network requires all nodes to run on both the Hypergraph (global layer 0) and the Constellation Network DAG metagraph (currency layer 1).  

This type of node is referred to as a **hybrid node**.

### Hybrid Node Hardware Requirements

The following table specifies the requirements for a node to function properly and efficiently on **MainNet**, **IntegrationNet**, or **TestNet** network clusters.

| Element | Value	| Details |
| --- | --- | --- |
| vCPUs | 8 | A hybrid node will require 8 virtual central processing units (vCPU) or physical CPUs to run on a bare metal system. |
| Memory | 16Gb | A hybrid node will need 7Gb for layer 0 and 3Gb or layer 1. |
| Storage | 320Gb | A hybrid node will be storing snapshots on the layer 0 profile. |
| Traffic Allowance | 10 TB/month | A hybrid node will generate a high traffic load. ***Note:*** *Most instances with higher specifications should already include sufficient traffic allowance to handle a node’s traffic. After gathering some historical data on your node’s traffic requirements, you can adjust to higher amounts if necessary.* |

### Dor Metagraph Node Hardware Requirements

The following table specifies the requirements for a node to function properly and efficiently on Constellation Network **Dor** metagraph.

:::note
These specifications should also apply to any layer 1 metagraph running Constellation Network's Tessellation protocol.
:::

| Element | Value	| Details |
| --- | --- | --- |
| vCPUs | 4 | A node will require 4 virtual central processing units (vCPU) or physical CPUs to run on a bare metal system. |
| Memory | 8Gb | A node will need 3Gb or Layer 1. |
| Storage | 80Gb | Basic storage. |
| Traffic Allowance | default | The **default** traffic allowance should suffice. |

## Software Specification Requirements

### Distribution
- Linux Debian-based distribution
### Operation System Recommendations
- Ubuntu 22.04
- Debian 11
### Software Specific Version Requirements
- Java 11

:::danger IMPORTANT
Constellation Network's Tessellation is developed to run on any **Debian** distribution with **Java 11** installed.

**nodectl** was developed to run specifically on **Ubuntu 22.04**. A Node Operator should only choose a `.04` release of the Ubuntu Linux Debian-based distribution.  

*nodectl is not compatible with Ubuntu 24.04.*
:::

##### Ubuntu Specific 

Ubuntu uses the convention of `.04` to represent versions of their Debian distribution that is LTS (long term support), and `.10` for their more "experimental" short term support releases.

It is **highly** recommended to use a `.04` version release.