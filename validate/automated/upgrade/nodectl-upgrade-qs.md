---
title: upgrading - QuickStart
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

The process of upgrading your Node is quite simple.

### Upgrade nodectl
```
sudo nodectl upgrade_nodectl
```
with the `-v` option.
```
sudo nodectl upgrade_nodectl -v <version_number>
```
If you don't use the `-v`` option with nodectl, it will automatically check the current version of nodectl on your Node and show you if there are any updates available. You can then choose which version to upgrade to from the list provided.

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade_nodectl -v v2.15.2      
</MacWindow>

### Upgrade nodectl components of your Node

After a successful [upgrade](#upgrade-nodectl) of nodectl to the latest version.  You can supply the `--nodectl_only` option.  This will instruct the `upgrade` feature to upgrade only components of your VPS (Node) that nodectl requires, related to the new version of nodectl.  

```
sudo nodectl upgrade --nodectl_only
```

The advantage to this option is that the Node will not handle any Tessellation related features, and therefor, will not take your Node off the cluster, saving you time and not affecting the Node's uptime.
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

### Do you want to encrypt your passphrase?
As of `v2.13.0`, nodectl has a new feature that will allow you to encrypt your Node's hot wallet passphrase in the configuration.  This will further increase your security if your configuration file is obtained or viewed by someone other than the owner of the wallet (p12 keystore file).

**recommendation**: <kbd>y</kbd>

### Do you want to clear your backups?
nodectl will offer the ability to clean out your backup folder that may be holding a few older configurations or files.  It is mostly safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

:::warning CONSIDERATION
As of `v2.13.0` and later, nodectl has the ability to encrypt the p12 passphrase present in the `cn-config.yaml` configuration file that allows nodectl to operate properly.

If you choose to encrypt your passphrase during the upgrade, you should not clear your backups until after you have confirmed your Node is in full working order.  This will allow you to access your backups to restore your configuration, in the unlikely event it is required.

In this situation, **recommendation**: <kbd>n</kbd>

It is recommended to keep the backups in place until it is confirmed that your Node is working properly.  Once confirmed, you can clean up the files using the [clean files](../nodectl-commands#clean_files) command. This ensures that your system remains stable and secure before making any changes.
:::

### Do you want to clear your uploads?
nodectl will offer the ability to clean out your uploads folder that may be holding a few older archived zip files that have been requested and created, in the past. It is safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

### Do you want to clear your logs?
nodectl will offer the ability to clean out your log folder that may be holding a lot of log files.  It is safe to enter <kbd>y</kbd> to this option.

**recommendation**: <kbd>y</kbd>

### During the join process
You may be asked if you want to continue watching, skip, or cancel the upgrade procedure as your Node attempts to rejoin the network cluster.  You can refer to the [DownloadInProgress blocker](./nodectl-upgrade-rejoin-2#downloadinprogress-blocker) section of the [upgrade walk through](./nodectl-upgrade-intro) section for further details.

**recommendation**: <kbd>s</kbd>

The upgrade will skip the attempt to join the layer1 cluster, and continue the rest of the upgrade.  After a short wait you can use the [status](../nodectl-commands#status) command with the `-p` option against the layer0 cluster to verify you are back online.

## Non Interactive
The `upgrade` command has the option `-ni`. This option will tell nodectl to enter [non-interactive](../nodectl-commands#upgrade) mode.  

In non-interactive mode, you will not be prompted to answer any questions, all the defaults will be automatically selected for you.

**Exception**: In the event a critical issue is identified by nodectl, you will be prompted to answer a question.  This also applies to more critical security questions that may not be of value to use any particular "default" value.  

```
sudo nodectl upgrade -ni
```

## Passphrase Exclusion

If you do not have your p12 passphrase in your configuration (advanced users) you can issue the `--pass` option at the command line followed by your passphrase to initiate the upgrade.

:::info SUGGESTION
You should utilize passphrase encryption over not supplying the passphrase for our p12 keystore.  This will prevent the need to supply the passphrase on the command line before every command. 

*This will eliminate the concern of having bash history cached at the terminal session.*
:::

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