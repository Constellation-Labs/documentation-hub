---
title: Validator Nodes
sidebar_label: Introduction
slug: /
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Run a Validator Node</title>
  <meta
    name="description"
    content="Welcome to Constellation Network Validator Node Documentation Site."
  />
</head>

In this tutorial, Node Operators will learn how to build and manage a validator node.

<DocsCards>
  <DocsCard header="Build a VPS" href="/validate/validator/getting-started" img="/img/validator_nodes/cloud.png">
    <p>Setup a Virtual Private Server (VPS) in the cloud including SSH keys; to install your Constellation Node.</p>
  </DocsCard>

  <DocsCard header="NODECTL User Guide" href="/validate/automated/nodectl" img="/img/validator_nodes/nodes_logo.jpg">
    <p>Turn your VPS into a Constellation Node using Constellation Network's <b>nodectl</b> utility.</p>
  </DocsCard>

  <DocsCard header="Manual Installation" href="/validate/manual/manual-install-getting-started" img="/img/validator_nodes/hard_hat.png">
    <p>ADVANCED: <b>Manually</b> setup a Node from a clean Debian installation.</p>
  </DocsCard>
</DocsCards>

## Before you begin

:::info Are you on the seed list?
Both MainNet 2.0 and Testnet 2.0 currently have a seed list in place that only allows specific `nodeids` to join the network. 

The seed list provides an extra layer of security and stability as the ecosystem matures and will eventually be phased out.  Once the seed list restrictions are removed, anyone (with properly collateral and vps or hardware requirements) will be able to join the Hypergraph or a Metagraph. 

The seed list is currently closed; although, we are accepting applications, from other Metagraph developers or integration partners, that need access to develop on the network. Please fill out [this form](https://airtable.com/shroR5bXszQXdh6dn) if you have an interest in participating.
:::