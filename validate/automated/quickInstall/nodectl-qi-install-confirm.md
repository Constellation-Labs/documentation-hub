---
title: Quick Install - Confirm
sidebar_label: New Quick Install - Confirm
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

What cluster will our Node be participating in?  

:::note Note
If you are planning on joining a metagraph that is **not listed**, you should choose `mainnet` as your default.

You will be able to update your configuration to support the *unlisted* metagraph of your choosing later using the [configurator](/validate/automated/nodectl-commands#configure).
:::

<MacWindow>
nodectl installing [ preparing ]<br />
Obtain install parameters ..................... preparing<br />
<br />
Please choose which Hypergraph or metagraph you would like to install on this server:<br />
</MacWindow>

*You should choose the Hypergraph or metagraph you want to join here, following our example, we are installing a Node to join the mainnet Hypergraph.*

We will choose <kbd>1</kbd> for `mainnet`. 

<MacWindow>
  HYPERGRAPH or METAGRAPH<br />
  predefined choices<br />
  -----------------------------------<br />
  1) mainnet [HyperGraph] <br />
  2) integrationnet [HyperGraph]<br /> 
  3) testnet [HyperGraph]<br /> 
  4) dor-metagraph-mainnet [metagraph]<br /> 
<br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

Once confirmed the installation will continue. 