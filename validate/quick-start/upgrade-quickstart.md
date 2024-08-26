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

## ◽ Upgrade Quick Start Guide

This guide is specifically for upgrading your node to to the latest version of **Tessellation** with opinionated with sensible defaults.

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
If you have the [auto_restart](/validate/automated/nodectl-autorestart) enabled, you can skip to the [confirm status step](#-confirm-status).

## ◽ Watch For Layer0 Ready State
Refer to [profile table](/validate/quick-start/prerequisites#-profile-table) to obtain `<profile_name>` parameter.
```
sudo nodectl status -p <profile_name> -w 30
```
Continue to watch the screen which will update every `30` seconds, until you see the node's profile reaches `ready` state.

## ◽ Reached Ready State
press the <kbd>q</kbd> key to exit out of watch mode.

## ◽ Join Layer1
```
sudo nodectl join -p <profile_name>
```
:::danger ERROR JOINING
If this creates an error because your node's layer1 profile is not properly in `ReadyToJoin` state.
```
sudo nodectl restart -p <profile_name>
```
:::

# COMPLETED UPGRADE

## ◽ Confirm Status
```
sudo nodectl status
```
If all profiles are in `Ready` state, your upgrade is complete.
