---
title: Validator Nodes
sidebar_label: Introduction
slug: /
hide_table_of_contents: true
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

In this tutorial, you'll learn how to set up and run a validator node in three parts (2 main parts): **Part 1** provides information on providers, how to generate SSH keys, and several common VPS setup guides. **Part 2** goes over how to install node using our automated `nodectl` tool.  **Part 3** shows you how to install a Node manually by installing dependencies and packages, and instructs how to create a private key and the node services necessary to join the network.

## Before you begin:

:::info Are you on the seedlist?
Both Mainnet 2.0 and Testnet 2.0 currently have a seedlist in place that only allows specific `NodeIds` to join the network. This provides an extra layer of security and stability as the ecosystem matures, and will eventually be phased out for anyone to join. The seedlist is currently closed although we are accepting applications from state channel developers or integration partners that need access to develop on the network. Please fill out [this form](https://airtable.com/shroR5bXszQXdh6dn) if you fit into that category.
:::