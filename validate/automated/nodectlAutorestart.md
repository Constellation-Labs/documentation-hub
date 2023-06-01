---
title: configure auto restart and upgrade
hide_table_of_contents: false
---

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="Constellation nodectl utility"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## What is Auto Restart?

**nodectl** offers an special feature called **auto restart** (*auto_restart*).

This feature will detect if your Node is not properly connected to the **hypergraph** and/or **metagraphs**, as detected in the [configuration](./nodectlConfig.md) of **nodectl**.

Auto Restart command reference can be found [here](./nodectlCommands#auto_restart).

## What is Auto Upgrade?

The **auto upgrade** (*auto_upgrade*) command is an extension of the **auto_restart** feature.  It works in conjunction with the auto restart.

In the event that **nodectl** detects that your Node is not properly connected to the **hypergraph** and/or **metagraphs**, as detected in the [configuration](./nodectlConfig.md), it will not only attempt to get your Node back online; additionally, it will also make sure that the **version** of **Tessellation** is also up to date by upgrading your Node automatically.

## How to enable Auto Restart

There are two ways to enable auto_restart and auto_upgrade. 

### Recommend Method 1

Enable `auto_restart` in the configuration, or enable `auto_restart` and `auto_upgrade` in the configuration.

This method will also add in the capability to re-enable the `auto_restart` feature in the event it was disabled.

:::info Informational
For special commands [see command reference](./nodectlCommands#auto_restart) the `auto_restart` feature must be disabled first.  If `auto_restart` is enabled in the [configuration](./nodectlConfig.md); once a command that requires `auto_restart` to be disabled and disables it, it will be restarted automatically
:::

1. Connect to your Node

2. Enter the [configuration](./nodectlConfig.md) using the [configure](./nodectlCommands#configure) command.

In the beginning, it is better **not** to enter into advanced mode.  This will offer you more detailed explanations of each aspect of the configuration.  You can just hit the <kbd>enter</kbd> key to accept the default **`n`**.

```
sudo nodectl configure
```
<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =                NODECTL               =<br />
  =           CONFIGURATION TOOL         =<br />
  ========================================<br />
  @netmet72<br />
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

6. Choose <kbd>y</kbd> to enable auto_upgrade

<MacWindow>
Do you want to [enable] auto_upgrade? [y]:<br />
</MacWindow>

7. Confirm the choices you made.

<MacWindow>
  ========================================<br />
  =             CONFIRM VALUES           =<br />
  ========================================<br />
  If you reached this confirmation unexpectedly ,from the input [above] you may
  have hit &lt;enter&gt; along with your option; therefore, choosing the default.  You can choose
  n here and reenter the correct value.<br />
<br />
  disable auto restart: n<br />
  disable auto upgrade: n<br />
  <br />
  Please confirm values are as requested: [y]: <br />
</MacWindow>

8. Your configuration file will be properly rebuilt, and you will be offered the ability to review the configuration file.

<MacWindow>
  Creating configuration file ................... complete <br />
  building [cn-config.yaml] file................. complete<br />
  Review the created configuration? [y]:<br />
</MacWindow>

9. After you review (or skip) the configuration review, your configuration will be validated again, and final instructions will be shown.

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
**nodectl** is not a program that continuously runs on your Node (not including `auto_restart` which does run as a service.)  On a reboot of your server or VPS, your `auto_restart` service will not enable until a `nodectl` command is executed
:::

10. Exit out of the configuration feature by pressing the <kbd>q</kbd> key.

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
