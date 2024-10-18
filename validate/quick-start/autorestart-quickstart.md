---
title: Auto Restart Quick Start
hide_table_of_contents: false
hide_title: true
---

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="nodectl utility auto restart auto upgrade"
  />
</head>

# Auto Restart Quick Start Guide

This guide is specifically for setting up your node to automatically restart, automatically upgrade and automatically start on boot up.  It is opinionated with sensible defaults.

## ◽ Enter Configuration Edit Mode
```
sudo nodectl configure -e -cb -d
```

## ◽ Access Auto Restart Options
We will choose the <kbd>R</kbd>.

## ◽ Enable All Options

- Choose <kbd>y</kbd> to enable auto_restart
- Choose <kbd>y</kbd> to enable auto_upgrade
- Choose <kbd>y</kbd> to enable on_boot

## ◽ Confirm Selections

Choose <kbd>y</kbd> to confirm selections.

## ◽ Exit Configurator

Choose <kbd>Q</kbd> to exit back to the command line interface.

## ◽ Confirm Auto Restart is Enabled
```
sudo nodectl auto_restart status
```