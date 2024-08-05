---
title: New Install - Choose Cluster Environment
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

The first thing that we need to accomplish is determining the environment that we want to configure on our future Node.  We will explain this here.


## Choose our environment

### MainNet
The MainNet environment is a production environment. This will turn your VPS into a Constellation Network Validator Node.  A Constellation Validator Node will be setup for you and when completed you will be joining two separate networks, via your single Node.

1. The Global Layer0 HyperGraph.
2. The Constellation Network associated currency Layer1 MetaGraph.

### IntegrationNet
The IntegrationNet environment is a TestNet designed specifically for metagraph development. This will turn your VPS into a Constellation Network Validator Test Node.  A Constellation Validator Node will be setup for you and when completed you will be joining two separate networks, via your single Node.

1. The IntegrationNet Global Layer0 HyperGraph.
2. The IntegrationNet Constellation Network associated currency Layer1 MetaGraph.

Within this environment, your Node will participate in the testing of new metagraphs, new features of those metagraphs, and various related testing required to help stabilize the Constellation Network protocol.

### TestNet
The TestNet environment is a testing and experimental environment.  

This will turn your VPS into a Constellation Network Validator Node.  A Constellation Validator Node will be setup for you and when completed you will be joining two separate networks, via your single Node.

1. The TestNet Global Layer0 HyperGraph.
2. The TestNet Constellation Network associated currency Layer1 MetaGraph.

TestNet Nodes are used by the Hypergraph and metagraphs to be beat up upon.  These Nodes will experience trial and error moments.  The TestNet requires more experienced Node Operators and a little more dedication verses the "set it and forget it" environment created within the MainNet.  TestNet testing is a little more aggressive and time intensive than IntegrationNet.

### Choose our Environment

:::note
For the purposes of this tutorial, we will be joining the MainNet environment. 

If you are joining the IntegrationNet environment, you can substitute any references to MainNet with IntegrationNet.
:::

<MacWindow>
 ------ * INSTALLATION STARTING * ------- <br />
<br />
  For a new installation, the Node Operator can choose to build this Node based on various network clusters or metagraph pre-defined configurations.<br />
<br />
  If the network cluster or metagraph this Node is being built to participate on is not part of this list, it is advised to choose mainnet as the default to complete the installation.<br />
<br />
  The MainNet configuration template will only be a placeholder to allow this Node to install all required components, to ensure successful implementation of this utility. If a pre-defined network cluster or metagraph listed above is not the ultimate role of this future Node, following a successful installation, the next steps should be for you to refer to the metagraph Administrators of the metagraph you are expected to finally connect with. The Administrator will offer instructions on how to obtain the required configuration file for said metagraph.<br />
<br />
  Please choose which Hypergraph or metagraph you would like to install on this server:<br />
<br />
HYPERGRAPH or METAGRAPH<br />
predefined choices<br />
  ------------------------------------------<br />
  1) mainnet [HyperGraph]<br />
  2) integrationnet [HyperGraph]<br />
  3) testnet [HyperGraph]<br />
  4) dor-metagraph-mainnet [metagraph]<br />
<br />
  Q)uit<br /> 
<br />
  KEY PRESS an option
</MacWindow>

To accept this choice, you will hit the <kbd>1</kbd> key on your keyboard.  You will **NOT** be required to hit <kbd>Enter</kbd> afterwards.