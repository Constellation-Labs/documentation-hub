---
title: Hardware Requirements
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>MainNet 2.0 Hardware Specs</title>
  <meta
    name="description"
    content="MainNet 2.0 Hardware Requirements"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

Currently **MainNet 2.0** requires all Nodes run on both the **Hypergraph** (**Global Layer 0**) and the **Constellation Network DAG Metagraph** (**Layer 1**). 

The following table defines the specifications required for a Node to work properly and efficiently on MainNet 2.0 network.


### HARDWARE REQUIREMENTS
| Element | Value	| Details |
| --- | --- | --- |
| vCPUs | **8** | A Node will require 8 virtual central processing units (vCPU) or physical CPUs to run on a bare metal system. |
| Memory | **16Gb** | A Node will need 7Gb for Layer0 and 3Gb or Layer1 |
| Storage | **160Gb** | A Node will be storing SnapShots |

### SOFTWARE REQUIREMENTS
Linux Debian Based Operating System
- Ubuntu 22.04 works well
- Debian 11 works well

The documentation presented on this website will utilize **Ubuntu 22.04**.  The Node Operator will have to translate (there should be only subtle differences between the various Debian operating systems) some commands to match their operating system of choice.