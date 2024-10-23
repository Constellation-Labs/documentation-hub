---
title: Upgrade nodectl - Confirm
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
    content="Upgrade nodectl utility"
  />
</head>

## Confirm

We will be presented with a `WARNING`.

In this example, we are upgrading to `v2.15.2` on `MainNet`; however, this may differ depending on when and where you are attempting to upgrade.

<Collapsible title="Why does it offer v2.13.0 in this example?" fontSize=".8em">
nodectl will offer you the option to "upgrade" to <b>v2.13.0</b>; however, this would downgrade us unintentionally, so we should avoid this option.  
<br /><br />
If the node was on a version <b>less than</b> v2.13.0, the latest stable version found may be <b>v2.15.2</b>; however, we would want to upgrade to <b>v2.13.0</b> first and then repeat the steps in this guide.
</Collapsible>

We can choose <kbd>2</kbd> .

We can choose <kbd>y</kbd>+<kbd>Enter</kbd> to accept.

<MacWindow>
WARNING  You are about to upgrade nodectl.<br />                                                
You are currently on: MAINNET<br />   
current version: v2.14.1<br />   
latest stable version: v2.15.2<br />   
last upgrade path: v2.13.0<br />   
<br />   
MULTIPLE OPTIONS FOUND<br />
please choose a version<br />
1) v2.13.0<br />
2) v2.15.2<br />
KEY PRESS an option<br />
<br />
Upgrade to v2.15.2 ? [n]: y<br />   
</MacWindow>