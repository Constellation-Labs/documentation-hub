---
title: upgrading - Seed List
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

It is paramount that our Node's seed list matches the latest seed list known on the cluster.  If this is not an exact match the Node will fail to access the network.

### Update seed list

This will be done in unison with the package updates from the previous section.

No action is required on our part.

<MacWindow>
  Fetch [mainnet-seedlist -> dag-l0] ............ completed<br />
  Fetch [seedlist for -> dag-l1] ................ disabled<br />
</MacWindow>

You may notice that `dag-l1` shows `disabled/skipped`.  

This is correct output from the Node because in the configuration [currently] the seed list for `dag-l1` is `disabled` and therefore the attempt to download an update is `skipped`.