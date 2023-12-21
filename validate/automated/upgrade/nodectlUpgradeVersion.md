---
title: upgrading - Select Version
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
    content="MainNet 2.0 Automation - Upgrade Tessellation with nodectl"
  />
</head>

We will now face our first interactive requirement.

nodectl will attempt to identify the current version of Tessellation running on Node, and it will identify the latest version running on the cluster.

In our example we are currently running `v2.2.0` on our Node and want to upgrade to `v2.2.1`.

<MacWindow>
------ * Handle Node Versioning * ------<br />
<br />
PROFILE:    dag-l0<br />
METAGRAPH:  mainnet<br />
<br />
The latest Tess version [dag-l0] .............. v2.2.1<br />                                   
Tessellation version running currently ........ v2.2.0<br />                                  
</MacWindow>

### Using the default

We can hit <kbd>enter</kbd> to accept the default version because in this example it is correct.

<MacWindow>
Press enter to accept the default value between [] brackets.<br />
Please enter version to upgrade to.........[v2.2.1] : 
</MacWindow>

### Static versioning request

If we wanted to change this to another version we would enter it here and then hit <kbd>enter</kbd>.

<MacWindow>
Press enter to accept the default value between [] brackets.<br />
Please enter version to upgrade to.........[v2.2.1] : 2.2.2
</MacWindow>

nodectl will begin the upgrade process now that it has all the information that it needs.