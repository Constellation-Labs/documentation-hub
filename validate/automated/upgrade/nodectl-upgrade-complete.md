---
title: upgrading - Final Elements
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

## Complete the upgrade

nodectl will complete the process.

<MacWindow>
  dag-l1 upgrade process completed!<br />
  dag-l0 upgrade process completed!<br />
  Upgrade has completed<br />
</MacWindow>

### Auto Complete Feature

nodectl now has an `auto complete` feature that will allow you to double tap the <kbd>tab</kbd> key after entering the `sudo nodectl ` command (*note the space after the `nodectl` word.*).  

You will be presented with a request to log out of your session and restart it.  This will load any auto complete elements into your bash shell environment.  auto_complete will not engage until after your reset your login session (log out and log back in).

<MacWindow>
  Optionally, please log out and back in in order to update your environment to teach nodectl about
  any new auto_completion tasks.
</MacWindow>

### Upgrade is complete
<MacWindow>
  Total upgrade time: 3.865 minutes<br />
</MacWindow>

### Restart auto restart feature

Since the [auto restart](/validate/automated/nodectl-commands#auto_restart) feature; in this example, was **enabled**, the auto restart feature will re-enable at the end of the upgrade for us.

<MacWindow>
  node restart service started... 
</MacWindow>

## Upgrade Complete
Congratulations, you have completed a successful upgrade.