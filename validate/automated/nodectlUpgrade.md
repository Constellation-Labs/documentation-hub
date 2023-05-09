---
title: Upgrading with nodectl
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Upgrade Tessellation with nodectl"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

### Description

This document will show you; through step-by-step instructions, how to upgrade your Node to the latest version of **Tessellation** or **nodectl**.

**Tessellation** is the code name for the protocol that runs on your Node.  It is the guts of how your Node is able to operate on the **Hypergraph** or **Metagraph**.  

**nodectl** is a utility that runs on your Node and helps you automate some of the more complex processes that Tessellation requires to run efficiently. 

## Prerequisite
### Installation

This document assumes that you have nodectl with Tessellation already running on your Node.  

If this is not the case, please review the [installation guide](./nodectl.md) `Getting Started`: to determine the type of installation required.

## Upgrade

<DocsCards>
  <DocsCard header="Upgrade nodectl" href="#upgrade-nodectl-utility" img="/img/home/state-channel.jpg">
    <p>Upgrade the nodectl utility.</p>
  </DocsCard>

  <DocsCard header="Upgrade Tessellation" href="#upgrade-tessellation" img="/img/home/community.jpg">
    <p>Upgrade Tessellation using nodectl.</p>
  </DocsCard>
</DocsCards>

## Upgrade nodectl utility

There are `3` upgrade mechanisms regarding `nodectl`.
1. Upgrade the nodectl utility to a new version. (binary)
2. Upgrade your Node to handle new features of nodectl, or modify some elements to make your Node more efficient when working with the nodectl utility.
3. Upgrade Tessellation

Mechanisms `2` and `3` may include updating features of the VPS to facility functionality of your Node.

Using nodectl's built-in upgrade command, you do not have to worry about the differences mentioned when upgrading nodectl.  nodectl is smart enough to guide you through the upgrade process.  It will know if you need any extra steps to complete. 

These steps include:
  - Is it safe to upgrade from the current version of nodectl your Node is running to the latest version?  There is an upgrade path that might need to be taken; dependent on, how long you have waited to upgrade your Node.
  - Does your Node require an extra upgrade steps to complete the nodectl upgrade for effective operation.

:::caution 
Currently there is not a scheduled release process for nodectl.
:::

### Upgrade to new version of nodectl

**nodectl** is simply a single binary file.  That is to say, it is single file that you can simply download from the Internet and execute on your system.  

In the <span style={{color:'blue', fontWeight: '800'}}>unlikely event</span> you need to do a manual install of nodectl, it will be necessary to make sure the binary is executable (advanced system management).  We will cover manual downloads below.

#### Upgrade detection
**nodectl** attempts to be smart enough to determine if there is an upgrade available. It does this by reaching out an external source ( the nodectl repository on GitHub ) and checking for the latest upgrade.

In this example, a `sudo nodectl list` command was issued, and I new version was detected.

*The full output of the list command was omitted*.
<MacWindow>
<span style={{color:'purple'}}>nodeadmin@Constellation-Node:~#</span> sudo nodectl list<br />
  A new version of nodectl was detected: <br />
  v2.7.1<br />
  To upgrade issue: sudo nodectl upgrade_nodectl<br />            
</MacWindow>

In the above output, it shows us that our Node is not up-to-date and the latest version available is `v2.7.1`.

#### Upgrade nodectl via nodectl
If **nodectl** is already [installed](nodectl.md) on your system, we can issue the `upgrade_nodectl` command to attempt to upgrade.

```
sudo nodectl upgrade_nodectl
```
When we execute the `upgrade_nodectl` command; in this example, the [auto_restart](./nodectlCommands.md#auto-restart) feature was enabled.  Since nodectl cannot upgrade while the `auto_restart` feature is actively running, nodectl will disable the feature auto_magically, for us.

nodectl will detect that there is a new version and ask us if we are sure we want to continue?  We can say **`y`** here.

<MacWindow>
<span style={{color: "purple"}}>nodeadmin@Constellation-Node:~#</span> sudo nodectl upgrade_nodectl<br />
   FOUND  auto_restart instance.<br />
  AutoRestart service with pid [3101736] ........ disabled<br /> 
  Auto Restart will reengage at completion of requested task<br />
  A <span style={{textDecoration: "underline"}}>new</span> version of nodectl was detected:.........<br />                                                            
  v2.7.1<br />
  To upgrade issue: sudo nodectl upgrade_nodectl<br />
   WARNING  This will upgrade mainnet<br />
  You are currently on: MAINNET<br />
    version: v2.7.0<br />
  available: v2.7.1<br />
  Are you sure you want to continue? [n]: y<br />
</MacWindow>

nodectl will begin the upgrade of nodectl.  In the background through automation nodectl will:
1. Download the necessary binary perspective GitHub repository.
2. Place the binary in the correct location on your VPS/Node.
3. Update the permissions of the nodectl binary as required.
4. Determine if a Node upgrade is necessary.

#### Architecture

It will detect the architecture of our VPS, in this example `x86_64` (most common).

Because nodectl cannot upgrade while it is running, nodectl will:
- Exit itself before upgrading
- Upgrade
- Inform us whether or not we need to upgrade our Node's internals.
- Re-enable `auto_restart` if enabled.

In this example:
- We do not need to upgrade our Node.  
- We have `auto_restart` enabled.

nodectl will let us know, and request we press &lt;enter&gt; to continue without an upgrade and then restart the `auto_restart` feature.

<MacWindow>
  Upgrading nodectl version from v2.7.0 to v2.7.1<br />
<br />
  Detected architecture: x86_64<br />
  WARNING nodectl will exit to upgrade.<br />
  Please be patient and allow the upgrade to complete before<br />
  continuing to work.<br />
<br />
  COMPLETED! nodectl upgraded to v2.7.1 <br />
  VERSION        MAJOR          MINOR       PATCH<br />
  v2.7.1         2              7              1<br />            
<br />
  This version of nodectl DOES NOT require an upgrade be performed<br />
  Press [ENTER] to continue...<br />
<br />
  node restart service started...<br /> 
</MacWindow>

In the event our Node requires an internal upgrade of the `Node` components, for various reasons including:
  - Tessellation changes
  - VPS changes
  - nodectl changes

The output will look different, as shown below

<MacWindow>
  Upgrading nodectl version from v2.7.0 to v2.7.1<br />
<br />
  Detected architecture: x86_64<br />
  WARNING nodectl will exit to upgrade.<br />
  Please be patient and allow the upgrade to complete before<br />
  continuing to work.<br />
<br />
  COMPLETED! nodectl upgraded to v2.7.1 <br />
  VERSION        MAJOR          MINOR       PATCH<br />
  v2.7.1         2              7              1<br />            
<br />
  This version of nodectl requires an upgrade be performed<br />
  on your Node.<br />
  Press Y then [ENTER] to upgrade or N then [ENTER] to cancel:<br />
</MacWindow>

It is **highly** recommended to **upgrade** your Node when requested.  Failure to do so may result in undesirable results or failures.

#### Manual Installation
Follow the release notes instructions for the release you desire to install
> [nodectl releases](https://github.com/netmet1/constellation_nodectl/releases)


### Upgrade Node to work with new nodectl features

It is very simple to upgrade your Node with new nodectl features.  We simply execute the upgrade command and follow the prompts.
```
sudo nodectl upgrade
```
Since the process of an upgrade is exactly the same as the process necessary to upgrade **Tessellation**, we can skip to the [Upgrade Tessellation](#upgrade-tessellation) to see the step-by-step process.

## Upgrade Tessellation

