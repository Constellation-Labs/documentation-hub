---
title: Hardware Requirements
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

Currently Constellation Network requires all Nodes run on both the Hypergraph (Global Layer 0) and the Constellation Network DAG metagraph (Currency Layer 1). 

The following table defines the specifications required for a Node to work properly and efficiently on MainNet, IntegrationNet or TestNet networks.

### Hardware Requirements

| Element | Value	| Details |
| --- | --- | --- |
| vCPUs | 8 | A Node will require 8 virtual central processing units (vCPU) or physical CPUs to run on a bare metal system. |
| Memory | 16Gb | A Node will need 7Gb for Layer0 and 3Gb or Layer1 |
| Storage | 320Gb | A Node will be storing SnapShots |

### Software Requirements
#### Linux Debian Based Operating System
- Ubuntu 22.04
- Debian 11
#### Software
- Java 11

The documentation presented on this website will utilize Ubuntu 22.04.  The Node Operator will have to translate (there should be only subtle differences between the various Debian operating systems) some commands to match their operating system of choice.

:::danger
Constellation Network's Tessellation will run on any Debian Distribution with Java 11 installed.

**nodectl** works best with **Ubuntu**.  A Node Operator should only choose a `.04` release of the Ubuntu Linux distribution.  
:::

### Ubuntu

Ubuntu uses the convention of `.04` to represent versions of their Debian distribution that is LTS (Long Term Support), and `.10` for their more "experimental" short term support releases.

Constellation Network recommends version `22.04` of Ubuntu for use with nodectl automation.