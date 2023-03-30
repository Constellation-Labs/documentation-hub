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

The following are specs that are a requirement for your Node to work properly and efficiently on MainNet 2.0.

All Nodes will be required to run both **Global Layer 0** and **DAG State Channel Layer1**.

### HARDWARE REQUIREMENTS
| Element | Value	| Details |
| --- | --- | --- |
| vCPUs | **8** | Your Node will need 8 virtual CPUs or normal CPUs (bare metal). |
| Memory | **16Gb** | Your Node will need 7Gb for Layer0 and 3Gb or Layer1 |
| Storage | **160Gb** | Your Node will be storing SnapShots |

### SOFTWARE REQUIREMENTS
Linux Debian Based Operating System
- Ubuntu 22.04 works well
- Debian 11 works well