---
title: upgrade - Concepts
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

There are `3` upgrade mechanisms regarding `nodectl`.
1. Upgrade the nodectl utility to a new version. (binary)
2. Upgrade your Node to handle new features of nodectl, and modify some elements to make your Node more efficient when working with the nodectl utility.
3. Upgrade Tessellation and any elements of the VPS that may require modification to work with the Tessellation protocol.

## Upgrade Options

<DocsCards>
  <DocsCard header="Upgrade nodectl" href="#upgrade-nodectl-via-nodectl" img="/img/home/state-channel.jpg">
    <p>Upgrade the nodectl utility.</p>
  </DocsCard>

  <DocsCard header="Upgrade Tessellation" href="#upgrade-tessellation" img="/img/home/community.jpg">
    <p>Upgrade Tessellation using nodectl.</p>
  </DocsCard>
</DocsCards>

## Upgrade nodectl

**nodectl's** built-in [upgrade command](/validate/automated/nodectl-commands#upgrade_nodectl).

nodectl is smart enough to guide you through the upgrade process.  It will detect if the Node need any extra steps to complete a successful upgrade. 

These steps include:
  - Is it safe to upgrade from the current version of nodectl your Node is running to the latest version?  
    - There is an [upgrade path](/validate/automated/nodectl-upgrade-path) that might need to be taken; dependent on, how much time has transpired from the last time your Node was upgraded.
  - Does your Node require any extra upgrade steps to complete the nodectl upgrade for effective operation.

nodectl offers the `--nodectl_only` option.  This will allow you to upgrade your Node to handle new nodectl features without upgrading Tessellations and therefor not taking your Node off the Tessellation cluster during the upgrade.

### Upgrade to new version of nodectl

nodectl is simply a single binary files compiled to work on your VPS.  

That is to say, it is single file that you can simply download from the Internet and execute on your system without the need for any dependency installations. 

### Upgrade detection

nodectl is smart enough to attempt to determine if there is an upgrade available. By reaching out to an external source (*scrapping the nodectl repository on GitHub* ) nodectl will check for the latest upgrade.

When a command is issued, nodectl will review the versioning on your Node and if a **new** version on nodectl is detected, you will be notified.

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl list<br />
  A new version of nodectl was detected: v2.15.2<br />
  To upgrade issue: sudo nodectl upgrade_nodectl<br />            
</MacWindow>

In the above output, it shows us that our Node is not up-to-date and the latest version available is `v2.15.2`.

### Upgrade nodectl via nodectl
If nodectl is already [installed](/validate/automated/nodectl) on your system, we can issue the `upgrade_nodectl` command to attempt to upgrade.

```
sudo nodectl upgrade_nodectl
```
When we execute the [`upgrade_nodectl`](/validate/automated/nodectl-commands#upgrade_nodectl) command; nodectl will detect that there is a new version, and begin the installation process.

You can follow the [quick start](/validate/automated/upgrade/nodectl-upgrade-qs#upgrade-nodectl) guide.

:::info 
nodectl cannot upgrade itself while the auto_restart feature is actively running.  nodectl will identify if the auto_restart feature is enabled and disable it automagically for us.

[auto_restart](/validate/automated/nodectl-commands#auto_restart) 
:::

### Manual Installation

The process of a manual **nodectl** installation is simple.  You navigate to the [nodectl releases](https://github.com/StardustCollective/nodectl/releases) site on GitHub, copy the link to the binary, and paste that link into your Node's CLI (command line interface).

:::danger
This process can possibly break your Node if you do not follow the appropriate upgrade path.
:::

### Upgrade Node to work with new nodectl features

It is very simple to upgrade your Node with new nodectl features.  We simply execute the `upgrade` command with the `--nodectl_only` option and follow the prompts.
```
sudo nodectl upgrade --nodectl_only
```
Utilizing the `--nodectl_only` option will only handle upgrades necessary for nodectl to function properly.  The advantage to this command is that it will not take the Node off the the metagraphs it is connected with.  If only updating nodectl, Tessellation will not be affected.

You can follow the [quick start](/validate/automated/upgrade/nodectl-upgrade-qs#upgrade-nodectl-components-of-your-node) guide.

## Upgrade Tessellation

### Upgrade with nodectl

It is very simple to upgrade your Node with new Tessellation version and features.  We simply execute the upgrade command and follow the prompts.

```
sudo nodectl upgrade
```

nodectl will go through all the necessary requirements to bring your Node up to the latest version and features of Tessellation utilizing prompts for any questions that offer optional actions on the Node.

You can follow the [step by step](/validate/automated/upgrade/nodectl-upgrade-intro) guide or [quick start](/validate/automated/upgrade/nodectl-upgrade-qs#upgrade-tessellation) guide.

### Manual upgrade

You can follow along with the [manual](/validate/manual/manual-install-getting-started) steps to install Tessellation on a VPS.