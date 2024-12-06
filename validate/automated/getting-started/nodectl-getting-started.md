---
title: Getting Started
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="Constellation nodectl utility"
  />
</head>

## What is nodectl

nodectl pronounced node "c" "t" "l", node-cuttle, or node control.

The purpose of this utility is to make things easier on you.  

It obviates all of the technical aspects of running a Validator node, so that anyone can do it!  

It comes packed with features designed to navigate the "complexities" of Constellation Network's validation node on the Hypergraph and/or metagraphs. 

The succeeding documentation will describe the features behind nodectl and help to provide an easy to use guide for a utility that was designed with ease in mind.

<!--
:::danger ⚠️ ⚠️ ⚠️
## IMPORTANT NOTICE 
#### FOR IMMEDIATE REVIEW 

**[Constellation Network Deprecation Announcement](/validate/automated/getting-started/deprecation-notice)**
:::
-->

### Installing with nodectl

<DocsCards>
  <DocsCard header="Quick Start Guides" href="/validate/quick-start/index" img="/img/home/apps.jpg">
    <p>Access the nodectl quick install guides with the goal of creating a new Validator node on a brand new server.</p>
  </DocsCard>

  <DocsCard header="Build New Node | Step-by-Step" href="/validate/automated/install/nodectl-install-types" img="/img/home/state-channel.jpg">
    <p>Create a new Validator node on a brand new server using the step-by-step instructions.</p>
  </DocsCard>

  <DocsCard header="Migrate Node" href="/validate/automated/migrate/nodectl-migrate" img="/img/home/community.jpg">
    <p>Migrate existing node to new container, instance, or hardware using nodectl.</p>
  </DocsCard>
</DocsCards>

### nodectl operations

<DocsCards>
  <DocsCard header="Upgrade" href="/validate/automated/upgrade/nodectl-upgrade-qs" img="/img/home/core-concepts.jpg">
    <p>Upgrade nodectl on an existing node.</p>
  </DocsCard>

  <DocsCard header="Upgrade Concepts" href="/validate/automated/upgrade/nodectl-upgrade-concepts" img="/img/home/community.jpg">
    <p>Concepts of different upgrade mechanisms.</p>
  </DocsCard>

  <DocsCard header="v1.12.0 to v2.x.x" href="/validate/automated/nodectl-migrate-v1" img="/img/home/core-concepts.jpg">
    <p>Upgrade from version 1.12.0 nodectl to the new version 2.x.x</p>
  </DocsCard>
  
  <DocsCard header="Command Reference" href="/validate/automated/nodectl-commands" img="/img/home/stargazer.jpg">
    <p>Command Reference Guide for nodectl</p>
  </DocsCard>
</DocsCards>

---

## Explained
### Brand New Node

This documentation will help, through step-by-step instructions, to create a **new** node from scratch.  Your new node will include a new wallet ([p12](/validate/automated/install/nodectl-install-p12) file).

Start [here](/validate/automated/getting-started/installationGettingStarted).

### Rebuild/Migrate Node

These documents will help, through step-by-step instructions, with replacing an existing node by transferring it to a new container, VPS or hardware.

The existing node is in production; however, you would like to use the ephemeral nature of Constellation's Validator node to start fresh on a new build of its underlining Linux distribution.  

This will require transferring your node's wallet ([p12](/validate/automated/nodectlInstall#what-is-a-p12-file) file) from the existing (old) node to your new node.

Start [here](/validate/automated/migrate/nodectl-migrate).

### Upgrade nodectl on your Node

When you have nodectl up and running and a new version of nodectl is released.  The following documentation will help the Node Operator navigate with a step-by-step guide on how to upgrade.

Start [here](/validate/automated/upgrade/nodectl-upgrade-qs).

### Upgrade your Node from version 1 to version 2

Specific step-by-step instructions to upgrade from version 1 of nodectl to version 2.

Start [here](/validate/automated/nodectl-migrate-v1).

### Command Reference Guide

After installation is complete, the [command reference guide](/validate/automated/nodectl-commands) can help you navigate the features of nodectl, beyond standard node management commands.