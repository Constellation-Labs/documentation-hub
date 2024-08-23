---
title: New Install - Uninstall Confirm
hide_table_of_contents: True
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl uninstall a nodectl installation"
  />
</head>

After execution of the `uninstall` command nodectl will want to warn us about the actions we are taking and ask us to confirm that this is really what we want to do.

:::danger DANGER
This is permanent, please make sure you truly want to uninstall your Node
:::

<MacWindow>
  -------- * NODECTL UNINSTALL * --------- <br />
<br />
  WARNING  This will attempt to remove all aspects of this Constellation Network Node.<br />
<br />
  Including:<br />
&nbsp;&nbsp;&nbsp;- All p12 files*<br />
&nbsp;&nbsp;&nbsp;- Constellation Binaries<br />
&nbsp;&nbsp;&nbsp;- Backups<br />
&nbsp;&nbsp;&nbsp;- Configurations<br />
&nbsp;&nbsp;&nbsp;- Node services<br />
&nbsp;&nbsp;&nbsp;- Remove nodeadmin account<br />
&nbsp;&nbsp;&nbsp;- Restore root access<br />
&nbsp;&nbsp;&nbsp;- Restore special account access<br />
&nbsp;&nbsp;&nbsp;- Seedlists<br />
&nbsp;&nbsp;&nbsp;- Snapshots<br />
&nbsp;&nbsp;&nbsp;- Uploads<br />
<br />
  Excluding:<br />
&nbsp;&nbsp;&nbsp;- Java Installation<br />
&nbsp;&nbsp;&nbsp;- Haveged Installation<br />
&nbsp;&nbsp;&nbsp;- External Utility Installs<br />
&nbsp;&nbsp;&nbsp;- Secure Shell Keys<br />
<br />
  Please make sure you have a backup of any and all important files before continuing.
  nodectl will not remove SSH keys and non-specific Constellation applications, these will
  need to be done manually.<br />
  This execution cannot be undone.<br />
  *You will be offered the option to backup the p12 files, during uninstallation.<br />
</MacWindow>

We will need to type in `CONSTELLATION` and then hit <kbd>Enter</kbd> to begin the process. 

Otherwise we can press <kbd>Enter</kbd> to accept the default `n` or <kbd>n</kbd>+<kbd>Enter</kbd> to cancel.

<MacWindow>
  Must type CONSTELLATION exactly to confirm or n to cancel this uninstall execution.<br />
  Uninstall this Constellation Network Node? [n]: CONSTELLATION<br />
</MacWindow>