---
title: nodectl v1 to v2
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - nodectl upgrade from version 1 to version 2"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Description

**nodectl** is a utility program for building, upgrading and managing **Constellation Network Validator Nodes**.

Over the course of the original creation of **nodectl** it has undergone two major version upgrades.
  - version 0 to version 1
  - version 1 to version 2

The purpose of this documentation is to teach a `Node Operator` running version **1** of **nodectl**, how to upgrade to verison **2** of nodectl, via a step-by-step tutorial.

A migration module has been added to **nodectl** to facilitate this effort.

## Migrate v1 to v2
### Upgrade Path

The very first thing we need to consider is that we are on `the` correct version of **nodectl** that supports upgrading to `v2`.

Lets check our current version level of **nodectl**.

```
sudo nodectl version
```
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl version
  VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAJOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PATCH<br />
  v1.12.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br />            
nodeadmin@Constellation-Node:~# 
</MacWindow>

:::danger IMPORTANT
<span style={{color:'red', fontWeight:'800', fontSize:'20px'}}>If we are not on version 1.12.0 of nodectl ...</span> 

Please refer to the [upgrade path](./nodectlUpgradePath.md) documentation, and make sure your Node is proper on `v1.12.0` prior to continuing with this tutorial.
:::

### Download v2 binary

Now that we have confirmed that we are on `v1.12.0` of **nodectl**, we use the [upgrade_nodectl command](./nodectlCommands.md#upgrade-nodectl) to initiate the download of the **nodectl binary** from the GitHub repository to our Node.

```
sudo nodectl upgrade_nodectl
```

When we issue this command on `v1.12.0` you should get a *warning* that a new version is detected, and a recommendation to issue the `upgrade_nodectl` command (which we can ignore because it is the same command we issued).

We will be informed of the availability of `v2.7.1` (as of the time of this tutorial writing).  We can say **`y`** to continue.

<MacWindow>
mainnet@Constellation-Node:~# sudo nodectl upgrade_nodectl<br />
  A new version of nodectl was detected: 2.7.1 <br />
  Issue: `sudo nodectl upgrade_nodectl` to upgrade.<br />
  WARNING: This will upgrade mainnet<br />
           version: 2.7.1<br />
  Are you sure you want to continue? [n] <b>y</b><br />
</MacWindow>

The nodectl upgrade will begin

<MacWindow>
  Upgrading nodectl version from v1.12.0 to v2.7.1<br />
  Detected architecture: x86_64<br />
  WARNING: nodectl will exit to upgrade<br />
  Please be  patient and allow the upgrade to complete before continuing work...<br />
</MacWindow>

nodectl will exit and fire up a temporary bash script

<MacWindow>
root@Constellation-Node:~# 
</MacWindow>

Do not issue any commands, just allow the next process to begin, and the upgrade will complete on its own.

<MacWindow>
COMPLETED! nodectl upgraded to 2.7.1<br />
<br />
  VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAJOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PATCH<br />
  v7.7.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br />          

press enter to continue...

root@Constellation-Node:~# 
</MacWindow>

### Upgrade VPS backend with nodectl

We now have the `v2.7.1` **binary** of **nodectl** downloaded and confirmed to be installed on our VPS/Node.

The next step will be to run the `sudo nodectl upgrade` command, to complete the:
1. migration from v1 to v2
2. upgrade the backend as necessary

```
sudo nodectl upgrade
```

### Migration confirmation

The screen will clear and **nodectl** will review the current **Node**, identify that it is running `v1` and begin by asking us to confirm that we want to migrate.

We do want to migrate so we will say `y` here.

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =              VERSION 2.0             =<br />
  =        Configuration Migration       =<br />
  ========================================<br />
  @netmet72<br />
<br />
  During program initialization, a configuration file was found
  missing on this server/Node.<br />
<br />
  nodectl found an existing file cn-node file on your existing server/Node. nodectl
  can backup this file and attempt to migrate to the new required format.<br />
<br />
  Attempt cn-node file migration? [y]: <b>y</b><br />
  </MacWindow>

### Passphrase Removal

A new **feature** of **nodectl** is the ability to **hide** the passphrase in the configuration.  Hiding your passphrase will add *a little* more security to keeping the **hot wallet** on your Node more protected.

:::danger IMPORTANT
This feature was added per request from the community; however, because the hot wallet is on your Node, this only adds a small layer of obscurity to attempting to retrieve your passphrase if the Node is compromised.

This will disable your ability to use the **[auto restart](./nodectlCommands.md#auto-restart)** feature including the `auto_upgrade` feature.
:::

<span style={{color:'green', fontWeight:'800', fontSize:'1.5em'}}>It is recommended to keep your passphrase visible.</span>

<p></p>

:::note Side Note
Make sure to follow the recommended security lock down measures during the build of your underlining VPS (container or bare metal), as an alternative to hiding your passphrase here.
:::

We will say **`y`** here (but you can also say **n**).

<MacWindow>
  nodectl v2 allows removal of the passphrase from your configuration. It is up to the
  Node Operator administering this Node to decide on the best course of action.<br />
<br />
  PROS: - One less location with an exposed clear-text passphrase.<br />
        - Adds small layer of security to force a possible attacker to work harder to gain access to the Node's wallet.<br />
<br />
  CONS: - Your passphrase will be requested whenever required by nodectl.<br />
        - In the event your Node is compromised, your passphrase will still be exposed because any nefarious actor able to penetrate your system authentication practices will know how to expose any passphrases in use by the processes running on the VPS/Node.<br />
<br />
  Recommended: Keep passphrases<br />
<br />
  Keep passphrase visible in configuration? [y]: <b>y</b><br />
</MacWindow>

### Global passphrase statement

In version **`1`** of **nodectl** we only had the ability to use a single **p12** file that contained our **Node's** wallet, which was also used to authenticate against the network cluster.

In version **`2`** we now introduce the ability to use multiple **p12** private key files, therefore, allowing us to use different wallets for each **Metagraph** and/or for joining the **Hypergraph**.

Version **`2`** introduces **profiles** which allow us to dynamically configure our Node to join as many Metagraphs as we want; as well as, Hypergraphs.  

We also introduce the **Global p12** section.  If you do not specifically identify a **p12** file for a profile, it will **default** to the **Global p12** configuration.

During the migration from `v1` to `v2`, we will setup **`dag-l0`** as our **Hypergraph** profile, and **`dag-l1`** as our **Metagraph** profile.  Both of these profiles will be setup to use **Global** p12 configuration.

The statement below explains the concept of p12 differentiation and the global section.

We can confirm we read the statement with a **`y`**.

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =              VERSION 2.0             =<br />
  =        Configuration Migration       =<br />
  ========================================<br />
  @netmet72<br />
<br />
  <br />
  nodectl v2 introduces the ability to use different Node wallets (p12 private keys)
  per profile (layer0 and/or layer1 Metagraphs).<br /> 
<br />
  A new concept for nodectl v2 includes a GLOBAL section within the configuration that can be used to assign a single p12 to all or some of the profiles, on your Node.<br />
<br />
  The p12 content details from the Node's global p12 cn-node  file
  including credentials will be added to the global p12 section of the new configuration file.<br />
<br />
  You can setup the global p12 wallet configuration to handle all or only selected profiles of your choosing.<br />
<br />
  I have read the information above: [y]: <b>y</b><br />
</MacWindow>

### Confirm user profile

Confirm our user profile, in this case we found and know to be correct `nodeadmin`.

We can say **`y`**.

<MacWindow>
  Ingesting [cn-node] file....................... running<br />
<br />
  nodectl found [ nodeadmin ] as your Node's admin user.
  Is this correct? [y]: <b>y</b><br />
</MacWindow>

### Confirm p12 file

Confirm that our **p12** file name is correct.  In this example we show that we have a p12 file called `my-node.p12`.  This may **not** match your p12 file name.  As long as you find the correct file name, you can continue.

We can say **y** here.

<MacWindow>
  nodectl found [ my-node.p12 ] as your Node's p12 filename.<br />
  Is this correct? [y]: <b>y</b><br />
</MacWindow>

### Build new cn-config.yaml

New to **`v2`** we deprecate the `cn-node` bash script file, and replace it with a configurable yaml file.

This allows us to configure our **Metagraphs** and the **Hypergraph** to our needs.

First **nodectl** will injest the `cn-node` script and back it up.

<MacWindow>
  Ingesting [cn-node] file....................... complete<br />
  Backing up cn-node file ....................... complete<br />
</MacWindow>

**nodectl** will warn us that our backed up `cn-node` will still contain the passphrase for our p12 private key file; and therefore, our Node's wallet access.  

Once we have confirmed that we are all set, it may be a good idea to remove this backup file.  

:::danger IMPORTANT
During the upgrade process (as part of this upgrade and after this migration portion) you will be requested to clear your backup folder.

This is another new feature of nodectl.  

Please be aware that if you choose to do so, you will remove the `cn-node` backup file 

If you have **not** confirmed that you are fully up and running (which is mostly the case), you should say **`n`** when requested to clean the **backups** directory.
:::

We will see our backup `cn-node` file name (dated).

We will see our backup `cn-node` file location.

<MacWindow>
  DANGER  THE cn-node FILE MAY CONTAIN A P12 PASSPHRASE, FOR SECURITY
  PURPOSES, PLEASE REMOVE AS NECESSARY!<br />
<br />
   CAUTION  After the migration is complete, the upgrader
  will continue and will prompt you to remove the contents of the backup directory where the cn-node  has been backed up within. If you choose to empty the contents of this directory, you will remove the backup cn-node file.<br />
<br />
  backup filename: cn-node.2023-07-11-20:32:46Zbackup<br />
  backup location: /var/tessellation/backups/<br />
</MacWindow>

The new `cn-config.yaml` file will be created using the details of the `cn-node` and we will be asked if we want to review the contents of the file.

You can choose `y` or `n` here depending.  We recommend that you review the configuration file, just to see what it entails; however, those that are not as technical or not interested, you do **not** need to review the file.

<MacWindow>
  Creating configuration file ................... complete<br />
  cn-node MIGRATION COMPLETED SUCCESSFULLY!!<br />             
  Ready to continue with upgrade<br />
<br />
  Would you like to review your new configuration? [n]: <b>y</b><br />
</MacWindow>

### Review configuration yaml

If you answered **`y`** to the question above: You will be offered a paginated view of the configuration file.

Please see the [view config command](./nodectlCommands.md#view-config) from the [command reference guide](./nodectlCommands.md) for a detailed explanation of this output.

### Configuration Verification

nodectl will now flash up some messages showing you that it is setting up some configuration parameters for us.  We can allow nodectl to complete the `self` updates on its own.

This will include replacing default elements of the configuration with your Node's specific details; as well as, confirm the validity of the configuration file.

### Upgrade

Now that our migration is complete, in the background we should have **nodectl's** new configuration yaml in place and validated.

The next step is to upgrade our Node to complete all the backend required details.

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =            UPGRADE REQUEST           =<br />
  =      TESSELLATION VALIDATOR NODE     =<br />
  ========================================<br />
  @netmet72<br />
<br />
  Are you sure you want to continue this upgrade? [n]:<br />   
</MacWindow>

When we are ready, we can issue a **`y`** here... and the **upgrade** will begin.

At this point in the migration from `v1` to `v2`, we are done and can now access the [upgrade nodectl](./nodectlUpgrade.md#handle-os-system-upgrades) document to follow along with the process step-by-step.

:::success Reminder
PLease remember to say **`n`** when requested to delete your **backups**. This will allow you to save your backup `cn-node` file.  

Once your Node is online and working as desired, during the next upgrade, you can choose **`y`** to remove the `cn-node` file permanently.
:::

