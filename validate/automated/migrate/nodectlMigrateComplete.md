---
title: p12 migration - Final Instructions
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

During the installation nodectl only handled our **global** p12 file settings.  The global p12 is nodectl specific terminology.

The installation will import your selected p12 and use it for **all** profiles (Hypergraph and Metagraphs) associated with your Node.  In our case, the **Constellation Network Global Layer0 Hypergraph** and the **Constellation Network Currency Layer1 Metagraph**.

After installation is complete you can update the nodectl **configuration** to use dedicated p12 files for each profile associated with your Node.

See the [configuration document](/validate/automated/nodectlConfig) **or** the [Command Reference](/validate/automated/nodectlCommands), for more details
```
sudo nodectl configure
```
---
This concludes the specifics of p12 migration (and this document).