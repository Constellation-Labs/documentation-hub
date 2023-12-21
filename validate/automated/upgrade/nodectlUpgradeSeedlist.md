---
title: upgrading - Seed List
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

It is paramount that our Node's seed list matches the latest seed list known on the cluster.  If this is not an exact match the Node will fail to access the network.

### Update seed list

This will be done in unison with the package updates from the previous section.

No action is required on our part.

<MacWindow>
  Fetching cluster seed file [testnet->dag-l0] .. complete <br /> 
  Fetching cluster seed file [testnet->dag-l1] .. disabled/skipped<br />
</MacWindow>

You may notice that `dag-l1` shows `disabled/skipped`.  

This is correct output from the Node because in the configuration [currently] the seed list for `dag-l1` is `disabled` and therefor the attempt to download an update is `skipped`.

Next the services will restart.