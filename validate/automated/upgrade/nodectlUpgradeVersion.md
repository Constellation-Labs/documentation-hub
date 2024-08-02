---
title: upgrading - Select Version
hide_table_of_contents: false
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
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

nodectl will attempt to identify the current version of Tessellation running on Node, and it will identify the latest version running on the cluster.

In our example we are currently running `v2.2.0` on our Node and want to upgrade to `v2.2.3`.

<MacWindow>
------ * HANDLE NODE VERSIONING * ------<br />
<br />
PROFILE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l0<br />
ENVIRONMENT: mainnet<br /> 
METAGRAPH:&nbsp;&nbsp;&nbsp;hypergraph<br />
<br />
The latest Tess version [dag-l0] .............. v2.2.0<br /> 
Tessellation version running currently ........ v2.2.3<br />
</MacWindow>

### Using the default

We can hit <kbd>enter</kbd> to accept the default version because in this example it is correct.

<Collapsible title="possible warning">
If you are upgrading Tessellation "over itself" by upgrading to the same version already installed ( upgrade from v2.2.3 to v2.2.3 ) you may receive a warning message.
<MacWindow>
WARNING  Tessellation is already on the latest known version.<br />
If you are only upgrading the Node's internal components because your Node is exhibiting undesirable or unexpected behavior, you should accept the default and upgrade your Node's version to the same version level by simply hitting &lt;enter&gt; here.<br />
</MacWindow>
</Collapsible>

<MacWindow>
Press enter to accept the default value between [] brackets.<br />
Please enter version to upgrade to.........[v2.2.3] : 
</MacWindow>

### Static versioning request

If we wanted to change this to another version we would enter it here and then hit <kbd>enter</kbd>.

<MacWindow>
Press enter to accept the default value between [] brackets.<br />
Please enter version to upgrade to.........[v2.2.3] : v2.2.2
</MacWindow>

### Other profiles
If nodectl sees multiple profiles (such as a layer0 and layer1 configuration) the other profile will be identified and elements displayed.

:::note Environment Dependencies
nodectl will only allow one environment to be upgraded at a time.  In the event you have multiple environments running on your Node, you will need to upgrade each independently.
:::

In this example, nodectl found the profile `dag-l1` running **in the same environment** and will post details about that profile; however, nodectl will use the same version as selected by the first profile found.

<MacWindow>
====================<br />
PROFILE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l1<br />
ENVIRONMENT: mainnet<br /> 
METAGRAPH:&nbsp;&nbsp;&nbsp;hypergraph<br />
<br />
Cluster mainnet for profile dag-l1 using v2.3.2<br />
</MacWindow>

nodectl will begin the upgrade process now that it has all the information that it needs.