---
title: upgrading - Start
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

### Let's Start The Upgrade
Log into your Node via a remote session.

We can issue the `upgrade` command.
```
sudo nodectl upgrade
```
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade
</MacWindow>

:::note Side Note
This document will assume that we are running the upgrade in interactive mode.

 There a several options that can be entered at the command line, you can review these options [here](/validate/automated/nodectl-commands#upgrade).
:::