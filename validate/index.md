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

  <DocsCard header="NODECTL User Guide" href="/validate/automated/getting-started/nodectl-getting-started" img="/img/validator_nodes/nodes_logo.jpg">
    <p>Turn your VPS into a Constellation Node using Constellation Network's <b>nodectl</b> utility.</p>
  </DocsCard>

  <DocsCard header="Manual Installation" href="/validate/manual/manual-install-getting-started" img="/img/validator_nodes/hard_hat.png">
    <p>ADVANCED: <b>Manually</b> setup a Node from a clean Debian installation.</p>
  </DocsCard>
</DocsCards>

## Before you begin

Constellation Network has three `3` primary metagraphs[^1]:

### Metagraphs

1. MainNet
1. IntegrationNet
1. TestNet

> ### MainNet

Constellation Network's production metagraph and consists of the **Hypergraph** Layer0 cluster and its Layer1 **metagraph**, the currency layer1 cluster.  

> ### IntegrationNet

Constellation Network's main development **TestNet** to assist with individual metagraph companies to allow them to create, update, modify and put their metagraphs through testing.

> ### TestNet

Constellation Network's TestNet, used to develop our primary protocol.

:::info Are you on the seed list?
All three metagraphs, MainNet, IntegrationNet and Testnet currently have a seed list[^2] in place that only allows specific `nodeids` to join the network. 
:::

### Seed List

The seed list functions as an access list, equivalent to an access control feature. It comprises node IDs (public keys) that form part of each Validator Node's key pair, utilized as part of the mechanisms used for network authentication, signing validated data, and managing the Node's wallet rewards.

The seed list adds an additional layer of security and stability as the ecosystem matures, although it is anticipated to be gradually phased out. Once the restrictions on the seed list are lifted, individuals meeting the proper collateral and VPS or hardware requirements will be able to join the Hypergraph or a metagraph.

While the seed list is temporarily closed, we welcome applications from other metagraph developers or integration partners seeking access to develop on the network and/or participate as Validator Node Operators. If you are interested, please complete this [form](https://airtable.com/shroR5bXszQXdh6dn).

[^1]: This does not pertain to businesses/companies that are running, deploying or developing metagraphs of their own.