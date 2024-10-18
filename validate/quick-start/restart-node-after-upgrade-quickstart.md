---
title: Restart Node after Upgrade Quick Start
hide_table_of_contents: false
hide_title: true
---

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="nodectl utility upgrade tessellation"
  />
</head>

# Restart Node after Upgrade Quick Start

This guide is specifically for restarting your node after the Hypergraph or metagraph cluster was restarted.

A restart may happen for several reasons:
- Upgrade 
- Seed list access update
- Cluster Error

## ◽ Auto Restart Feature [optional]
You may choose to engage the [auto_restart](/validate/quick-start/autorestart-quickstart) feature.  This feature will watch your node for you and restart it automatically as necessary. 

If you have `auto_restart` enabled and reached this page, you can skip to [here](#-restart-auto-restart-feature-optional).

## ◽ SSH into Your VPS
Review your [notes](/validate/resources/nodectl-notes) for the connection string.

```
ssh -i /path/to/ssh/private/key nodeadmin@vps_ip_address
```
Refer to [SSH Explanation](/validate/validator/ssh-keys), [Mac SSH Guide](/validate/resources/accessMac), and [Windows SSH Guide](/validate/resources/accessWin)
for detailed understanding.

## ◽ Restart all your profiles
```
sudo nodectl restart -p all
```

## ◽ Restart Auto Restart feature [optional]

This module should restart itself every `4` hours; however, it is a good habit to restart the module to ensure proper functionality immediately.

```
sudo nodectl auto_restart restart
```

# COMPLETED RESTART

## ◽ Confirm Status
```
sudo nodectl status
```
If all profiles are in `Ready` state, your restart is complete.
