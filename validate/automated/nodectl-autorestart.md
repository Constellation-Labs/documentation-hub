---
title: Auto Restart / Auto Upgrade
hide_table_of_contents: false
---
<intro-end />

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="Constellation nodectl utility"
  />
</head>

## ◽ Introduction

**Bottom line:** A node that disconnects from the cluster(s) is a node that isn’t earning. As Node Operators, we must remain vigilant to ensure our nodes do not disconnect from the cluster. Auto Restart will assist us with this task.

## ◽ What is Auto Restart?

The `auto_restart` feature was designed to detect if your node is not properly connected to the Hypergraph and/or metagraphs.  

Auto Restart command reference can be found [here](/validate/automated/nodectl-commands#auto_restart).

If an auto_restart might interfere with another nodectl command issued by the Node Operator, nodectl will automatically stop the auto_restart service and restart it upon completion of the requested task.

## ◽ What is Auto Upgrade?

The `auto_upgrade` command is an extension of the auto_restart feature, working in conjunction with it.

If nodectl detects that your Node is not properly connected to the Hypergraph and/or metagraphs, as specified in the configuration, it will not only attempt to bring your node back online but also ensure that the version of Tessellation is up to date by automatically upgrading your Node.

:::caution Note
`auto_upgrade` requires that `auto_restart` is also enabled.
:::

## ◽ How to enable Auto Restart

There are two ways to enable auto_restart and auto_upgrade. 

### ◽ Recommend Method

You may use the [auto_restart quick start](/validate/quick-start/auto-start-quick-start) guide if you do not want to review the details of this step-by-step guide.

#### Steps to configure `auto_restart` in the configuration:

1. Connect to your Node
   - Connect to a [mac](/validate/resources/accessMac).
   - Connect to [windows](/validate/resources/accessWin).

2. Enter the [configuration](/validate/automated/nodectl-config) using the [configure](/validate/automated/nodectl-commands#configure) command.

:::info Suggestion
In the beginning, it is better not to enter into advanced mode.  This will offer you more detailed explanations of each aspect of the configuration.  
:::

You can just hit the <kbd>enter</kbd> key to accept the default `n` to stay in `detailed` mode.

```
sudo nodectl configure
```
<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =                NODECTL               =<br />
  =           CONFIGURATION TOOL         =<br />
  ========================================<br />
   Code Name: Princess Warrior<br />
<br />
  Welcome to the nodectl configuration tool.<br />
<br />
  This feature of nodectl will help you initialize a new configuration or update/edit an existing
  configuration file.<br />
<br />
  nodectl will attempt to migrate/integrate your configurations changes in order to ensure a
  smooth transition and operations of your Node via nodectl.<br />
  <br />
  Detailed Mode: will walk you through all steps/questions; with detailed explanations of each
  element of the configuration.<br />
<br />
  Advanced Mode: will be non-verbose, with no walk through explanations, only necessary
  questions.<br />
<br />
  The configuration tool does only a limited amount of data type or value
  verification. After the configuration tool creates a new configuration or edits an existing configuration, it
  will attempt to verify the end resulting configuration.<br />
<br />
  You can also choose the -a option at the command line to enter advanced mode
  directly.<br />
<br />
  Continue in advanced mode? [n]: <b>n</b><br />
  </MacWindow>

3. Edit the existing configuration using the <kbd>E</kbd> key (do **not** hit <kbd>enter</kbd>).

<MacWindow>
  ========================================<br />
  =               MAIN MENU              =<br />
  ========================================<br />
<br />
  N)ew Configuration<br />
  E)dit Existing Configuration<br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

4. Press *any key* to acknowledge the configuration backup.

<MacWindow>
  Backup [cn-config.yaml] if exists.............. complete<br />
  A previous cn-config.yaml was found on the system.<br />
<br />
  In the event the backup directory was not found, a backup was created in the existing directory. The
  location is shown below.<br />
  /var/tessellation/backups/cn-config_2023-05-31-23:44:16Z<br />
<br />
  Press any key to continue<br />
</MacWindow>

4. We will choose the <kbd>R</kbd> key to enter the `auto_restart` section.

<MacWindow>
  ========================================<br />
  =              OPTIONS MENU            =<br />
  ========================================<br />
<br />
  E) Edit Individual Profile Sections <br />
  A) Append New Profile to Existing <br />
  G) Global P12 Section <br />
  R) Auto Restart Section <br />
  M) Main Menu <br />
  Q) Quit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

5. Choose <kbd>y</kbd> to enable auto_restart

<MacWindow>
Do you want to [enable] auto_restart? [y]:<br />
</MacWindow>

6. Choose <kbd>y</kbd> to enable auto_upgrade (optional)

<MacWindow>
Do you want to [enable] auto_upgrade? [y]:<br />
</MacWindow>

7. Choose <kbd>y</kbd> to enable on_boot (optional)

<MacWindow>
Do you want to [enable] start on boot up? [y]:<br />
</MacWindow>

8. Confirm the choices you made.

<MacWindow>
  ========================================<br />
  =             CONFIRM VALUES           =<br />
  ========================================<br />
  If you reached this confirmation unexpectedly ,from the input [above] you may
  have hit &lt;enter&gt; along with your option; therefore, choosing the default.  You can choose
  n here and reenter the correct value.<br />
<br />
  enable auto restart: y<br />
  enable auto upgrade: y<br />
  enable on boot: y<br />
  <br />
  Please confirm values are as requested: [y]: <br />
</MacWindow>

9. Your configuration file will be properly rebuilt, and you will be offered the ability to review the configuration file.

<MacWindow>
  Creating configuration file ................... complete <br />
  building [cn-config.yaml] file................. complete<br />
  Review the created configuration? [y]:<br />
</MacWindow>

10. After you review (or skip) the configuration review, your configuration will be validated again, and final instructions will be shown.

<MacWindow>
  Configuration file:  VALIDATED! <br />
<br />
   WARNING  auto_restart was modified in the configuration.
  The configurator will not disable/enable any instances of auto_restart
  automatically.<br />
  To enable issue : sudo nodectl auto_restart enable<br />
  To disable issue: sudo nodectl auto_restart disable<br />
<br />
  Press any key to continue<br />
</MacWindow>

You can either `enable` or `disable` via the commands referenced.

:::danger Warning
nodectl is not a program that continuously runs on your Node (not including `auto_restart` which does run as a service.)  On a reboot of your server or VPS, your auto_restart service will not enable until a nodectl command is executed which will trigger the auto_restart service to engage if enabled.
:::

11. Exit out of the configuration feature by pressing the <kbd>q</kbd> key.

<MacWindow>
  ========================================<br />
  =              OPTIONS MENU            =<br />
  ========================================<br />
<br />
  E) Edit Individual Profile Sections <br />
  A) Append New Profile to Existing <br />
  G) Global P12 Section <br />
  R) Auto Restart Section <br />
  M) Main Menu <br />
  Q) Quit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

<MacWindow>
Configuration manipulation quit by Operator<br />
nodeadmin@Constellation-Node:~# 
</MacWindow>

### ◽ Manual Method

:::warning 
This method should only be used in more specifically cases where using the configuration is not an option.

This method can also be used in conjunction with having `auto_restart` enabled in the configuration.
:::

#### Steps to manually enable auto restart
```
sudo nodectl auto_restart enable
sudo nodectl auto_restart disable
sudo nodectl auto_restart restart
sudo nodectl auto_restart enable --auto_upgrade
```
see [auto_restart](/validate/automated/nodectl-commands#auto_restart) or [auto_upgrade](/validate/automated/nodectl-commands#auto-upgrade) command reference for more details.