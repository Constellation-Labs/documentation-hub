---
title: New Node Installation
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Introduction

The following documentation will help guide a new Node Operator through all the necessary steps required to turn an instance, VPS, or bare metal system into a Validator Node.

## Requirements

It is assumed that prior to reaching this documentation, the future Node Operator has followed all the necessary steps in creating a **Debian based** Linux server instance, VPS, or bare metal system.

Please refer to [Node Concepts](../validator/get_started.md) to follow the `step-by-step` guide on building your future Node.

*For Ease of explanation, this documentation will assume use of the **Ubuntu** Debian distribution of Linux on a **VPS** in the cloud.*
## Download nodectl

### Before we begin
 - Have your SSH key passphrase handy

### Access your VPS
**SSH** into your Debian based OS system. 

*replace **ssh_key_name** with the name of your ssh key file.*
[SSH Concepts](../validator/sshkeyExplained.md)
<MacWindow>
constellation@MacBook constellation% ssh -i ./.ssh/ssh_key_name<br />
Enter passphrase for key '/Users/netmet/.ssh/ssh_key_name': <br />
Connected to 123.123.123.123.<br />
sftp><br />
</MacWindow>

### Quick update
We will issue a quick update of system packages and upgrade on our VPS
```
sudo apt -y update && sudo apt -y upgrade
```