---
title: Upgrade Quick Start
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

# Upgrade Quick Start Guide

This guide is specifically for upgrading your node to to the latest version of **Tessellation** with opinionated with sensible defaults.

## ◽ SSH into Your VPS
Review your [notes](/validate/resources/nodectl-notes) for the connection string.

```
ssh -i /path/to/ssh/private/key nodeadmin@vps_ip_address
```
Refer to [SSH Explanation](/validate/validator/ssh-keys), [Mac SSH Guide](/validate/resources/accessMac), and [Windows SSH Guide](/validate/resources/accessWin)
for detailed understanding.

## ◽ Begin upgrade process
```
sudo nodectl upgrade -ni
```

## ◽ Single Layer Nodes
Skip to this step [confirm status step](#-confirm-status).

## ◽ Hybrid Nodes
[Hybrid nodes](/validate/validator/specs#hybrid-node) must wait until our **layer 0** profile is in `Ready` state before being able to connect to our **layer 1** cluster.

In most cases, you will **NOT** be able to immediately connect your layer 1 profile to the cluster.

### Auto Restart
If you have the [auto_restart](/validate/automated/nodectl-autorestart) enabled, your node should connected automatically to layer1 once it detects that layer0 is in `Ready` state, you can skip to the [confirm status](#-confirm-status) step.

## ◽ Watch For Layer0 Ready State
Refer to [profile table](/validate/quick-start/prerequisites#-profile-table) to obtain `profile_name` parameter associated with your cluster, adjust the command below as necessary.

```
sudo nodectl status -p dag-l0 -w 120
```
Continue to watch the screen which will update every `120` seconds, until you see the node's profile reaches `ready` state.

## ◽ Reached Ready State
press the <kbd>q</kbd> key to exit out of watch mode when you node is reporting it is in `Ready` state.

## ◽ Join Layer1
```
sudo nodectl join -p dag-l0
```
:::danger ERROR JOINING
If this creates an error because your node's layer1 profile is not properly in `ReadyToJoin` state.
```
sudo nodectl restart -p dag-l0
```
:::

# COMPLETED UPGRADE

## ◽ Confirm Status
```
sudo nodectl status
```
If all profiles are in `Ready` state, your upgrade is complete.
