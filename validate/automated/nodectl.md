---
title: Getting Started
hide_table_of_contents: false
---
<intro-end />

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

It obviates all of the technical aspects of running a Validator Node, so that anyone can do it!  It comes packed with features designed to navigate the 
"complexities" of Constellation Network's validation Node on the Hypergraph and/or Metagraphs. 

The succeeding documentation will describe the features behind nodectl and help to provide an easy to use guide for a utility that was designed with ease in mind.

### Installing nodectl

<DocsCards>
  <DocsCard header="New Node" href="/validate/automated/nodectlInstall" img="/img/home/state-channel.jpg">
    <p>Install brand new Node.</p>
  </DocsCard>

  <DocsCard header="Migrate Node" href="/validate/automated/nodectlInstallMigrate" img="/img/home/community.jpg">
    <p>Migrate existing Node to new container, instance, or hardware.</p>
  </DocsCard>
</DocsCards>

### nodectl operations

<DocsCards>
  <DocsCard header="Upgrade" href="/validate/automated/nodectlUpgrade" img="/img/home/core-concepts.jpg">
    <p>Upgrade nodectl on an existing Node.</p>
  </DocsCard>

  <DocsCard header="v1.12.0 to v2.x.x" href="/validate/automated/nodectlMigrateV1" img="/img/home/core-concepts.jpg">
    <p>Upgrade from version 1.12.0 nodectl to the new version 2.x.x</p>
  </DocsCard>

  <DocsCard header="Command Reference" href="/validate/automated/nodectlCommands" img="/img/home/stargazer.jpg">
    <p>Command Reference Guide for nodectl</p>
  </DocsCard>
</DocsCards>

### Brand New Node

This documentation will help, through step-by-step instructions, to create a **new** Node from scratch.  Your new Node will include a new wallet ([p12](/validate/automated/nodectlInstall#what-is-a-p12-file) file).

Start [here](/validate/automated/nodectlInstall).

### Rebuild/Migrate Node

These documents will help, through step-by-step instructions, with replacing an existing Node by transferring it to a new container, VPS or hardware.

The existing Node is in production; however, you would like to use the ephemeral nature of Constellation's Validator Node to start fresh on a new build of its underlining Linux distribution.  

This will require transferring your Node's wallet ([p12](/validate/automated/nodectlInstall#what-is-a-p12-file) file) from the existing (old) Node to your new Node.

Start [here](/validate/automated/nodectlInstallMigrate).

### Upgrade nodectl on your Node

When you have nodectl up and running and a new version of nodectl is released.  The following documentation will help the Node Operator navigate with a step-by-step guide on how to upgrade.

Start [here](/validate/automated/nodectlUpgrade).

### Upgrade your Node from version 1 to version 2

Specific step-by-step instructions to upgrade from version 1 of nodectl to version 2.

Start [here](/validate/automated/nodectlMigrateV1).

### Command Reference Guide

After installation is complete, the [command reference guide](/validate/automated/nodectlCommands) can help you navigate the features of nodectl, beyond standard Node management commands.