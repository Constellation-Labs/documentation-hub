---
title: upgrading - Final Elements
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

## Complete the upgrade

nodectl will complete the process.

<MacWindow>
  dag-l1 upgrade process completed!<br />
  dag-l0 upgrade process completed!<br />
  Upgrade has completed<br />
<br />
  Total upgrade time: 3.865 minutes<br />
</MacWindow>

### Restart auto restart feature

Since the [auto restart](/validate/automated/nodectlCommands#auto_restart) feature; in this example, was **enabled**, the auto restart feature will re-enable at the end of the upgrade for us.

<MacWindow>
  node restart service started... 
</MacWindow>

## Upgrade Complete
Congratulations, you have completed a successful upgrade.