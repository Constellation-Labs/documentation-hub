---
title: upgrading - Confirm
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

### Disable `auto_restart`
In the event you have [auto_restart](../nodectl-autorestart.md) configured, the upgrade will need to disable the feature.  This will automatically happen for us.
<MacWindow>
  FOUND  auto_restart instance.<br />     
  AutoRestart service with pid [3297726] ........ disabled<br />
  Auto Restart will reengage at completion of requested task<br />
  Terminating auto_restart ...................... complete<br />   
</MacWindow>

### Confirm upgrade

We will be asked if we are sure we want to continue the installation.  We can hit the <kbd>enter</kbd> key to accept the default `y` or type in <kbd>y</kbd> + <kbd>enter</kbd> to confirm.

<MacWindow>                                            
  Are you sure you want to continue this upgrade? [y]: y
</MacWindow>

Next nodectl will continue preparing for the upgrade.