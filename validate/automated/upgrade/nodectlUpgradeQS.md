---
title: upgrading - QuickStart
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

The process of upgrading your Node is quite simple.

### Upgrade nodectl
```
sudo nodectl upgrade_nodectl -v <version_number>
```
If the `-v` is not supplied, nodectl will review your Node's nodectl version and offer you any upgrade available versions to upgrade.  You can simply choose the version from the list.
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade_nodectl -v v2.12.7       
</MacWindow>

### Upgrade nodectl components of your Node

After a successful [upgrade](#upgrade-nodectl) of nodectl to the latest version.  You can issue supply the `--nodectl_only` option.  This will instruct the `upgrade` feature to upgrade only components of your VPS (Node) that nodectl requires, related to the new version of nodectl.  

```
sudo nodectl upgrade --nodectl_only
```

The advantage to this option is that the Node will not handle any Tessellation related features, and therefor, will not take your Node off the cluster, saving you time and your Node uptime.
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade --nodectl_only       
</MacWindow>

## Upgrade Tessellation 
```
sudo nodectl upgrade
```
This option will handle both Tessellation and nodectl related features.  It will take your Node off the cluster to perform the upgrade, and return it to the cluster afterwards.
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade
</MacWindow>

## What questions will be asked?
nodectl will begin the upgrade process and offer you prompts whenever a question needs to be answered.

The following are recommended answers to these questions:

### Do you want to continue the upgrade?
This is just a confirmation that you are ready to start the process, in case you accidentally initiated, or changed your mind.

**recommendation**: <kbd>y</kbd>

### What version of Tessellation?
nodectl will auto populate the current version of Tessellation for you.  You can hit <kbd>enter</kbd> to accept the default.

**recommendation**: just hit <kbd>enter</kbd> to accept the default.

### Do you want to clear your backups?
nodectl will offer the ability to clean out your backup folder that may be holding a few older configurations or files.  It is mostly safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

### Do you want to clear your uploads?
nodectl will offer the ability to clean out your uploads folder that may be holding a few older archived zip files that have been requested in the past, etc. It is safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

### Do you want to clear your logs?
nodectl will offer the ability to clean out your log folder that may be holding a lot of log files.  It is safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

### During the join process
You may be asked if you want to continue watching the join procedure of your Node as it rejoins the network.  This is optional and you can choose <kbd>n</kbd> here, which will complete the upgrade and drop you back at the prompt.  

After a short wait you can use the `sudo nodectl status` command to verify you are back online.

**recommendation**: <kbd>n</kbd>

## Non Interactive
The `upgrade` command has the option `-ni`. This option will tell nodectl to enter non-interactive mode.  

In non-interactive mode, you will not be prompted to answer any questions, all the defaults will be automatically selected for you.

**Exception**: In the event a critical issue is identified by nodectl, you will be prompted to answer a question.  

```
sudo nodectl upgrade -ni
```

## Passphrase Exclusion

If you do not have your p12 passphrase in your configuration (advanced users) you can issue the `--pass` option at the command line followed by your passphrase to initiate the upgrade.

```
sudo nodectl upgrade --pass <p12 passphrase here>
```
```
sudo nodectl upgrade -ni --pass <p12 passphrase here>
```

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade -ni
</MacWindow>

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade -ni --pass mypassphrase
</MacWindow>

## Dedicated Version

If you would like to upgrade your Node to a specific version of Tessellation you can use the `-p <profile>` and `-v <version>` options.  

:::info Ordering
The order of the flags for this particular command are important.  The profile must come before the version. You can enter multiple profiles that run different versions this way from the command line.
:::

```
sudo nodectl upgrade -p dag-l0 -v v2.2.1
```
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade -p dag-l0 -v v2.2.1
</MacWindow>