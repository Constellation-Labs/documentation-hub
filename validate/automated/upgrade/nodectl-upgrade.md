---
title: upgrading with nodectl
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

### Description

This document will show you; through step-by-step instructions, how to upgrade your Node to the latest version of Tessellation or nodectl.

Tessellation is the code name for the protocol that runs on your Node.  It is the guts of how your Node is able to operate on the Hypergraph or metagraph.  

**[nodectl](/validate/automated/nodectl)** is a utility that runs on your Node and helps you automate some of the more complex processes that Tessellation requires to run efficiently. 

## Quick Start

In order to upgrade your Node.
1. Issue the command: `sudo nodectl upgrade`
2. Follow the prompts.

In order to upgrade **[nodectl](/validate/automated/nodectl)**.
1. Issue the command: `sudo nodectl upgrade_nodectl`
2. Follow the prompts.

# Details of the UPGRADE process

## Prerequisite
### Installation

This document assumes that you have nodectl with Tessellation already running on your Node.  

If this is not the case, please review the [installation guide](/validate/automated/nodectl) `Getting Started`: to determine the type of installation required.

## Upgrade

<DocsCards>
  <DocsCard header="Upgrade nodectl" href="#upgrading-with-nodectl" img="/img/home/state-channel.jpg">
    <p>Upgrade the nodectl utility.</p>
  </DocsCard>

  <DocsCard header="Upgrade Tessellation" href="#upgrade-tessellation" img="/img/home/community.jpg">
    <p>Upgrade Tessellation using nodectl.</p>
  </DocsCard>
</DocsCards>

## Upgrading with nodectl

There are `3` upgrade mechanisms regarding `nodectl`.
1. Upgrade the nodectl utility to a new version. (binary)
2. Upgrade your Node to handle new features of nodectl, or modify some elements to make your Node more efficient when working with the nodectl utility.
3. Upgrade Tessellation and any elements of the VPS that may require modification to work with the Tessellation protocol.

Mechanisms `2` and `3` may include updating features of the VPS to facilitate functionality of your Node.

Using **nodectl's** built-in [upgrade command](/validate/automated/nodectl-commands#upgrade_nodectl), you do not have to worry about the differences mentioned when upgrading nodectl.  nodectl is smart enough to guide you through the upgrade process.  It will know if you need any extra steps to complete. 

These steps include:
  - Is it safe to upgrade from the current version of nodectl your Node is running to the latest version?  
    - There is an [upgrade path](/validate/automated/nodectl-upgrade-path) that might need to be taken; dependent on, how long you have waited to upgrade your Node.
  - Does your Node require any extra upgrade steps to complete the nodectl upgrade for effective operation.

### Upgrade to new version of nodectl

nodectl is simply a single binary files compiled to work on 1 of either 2 Linux architectures.  That is to say, it is single file that you can simply download from the Internet and execute on your system. 

:::warning 
nodectl has **2** separate binary files. Both work **only** on Linux Debian based distributions
  - x86_64
  - arm64
:::

In the **unlikely event** you need to do a manual upgrade of nodectl, it will be necessary to make sure the binary is executable (*This is an advanced system management process*).  We will cover manual downloads below.

#### Upgrade detection

nodectl is smart enough to attempt to determine if there is an upgrade available. By reaching out to an external source (*scrapping the nodectl repository on GitHub* ) nodectl will check for the latest upgrade.

As an example (*the list command is unrelated to this document's purpose*), a [`sudo nodectl list`](/validate/automated/nodectl-commands#list) command was issued, and a **new** version on nodectl was detected.

*The full output of the list command was omitted*.
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl list<br />
  A new version of nodectl was detected: <br />
  v2.7.1<br />
  To upgrade issue: sudo nodectl upgrade_nodectl<br />            
</MacWindow>

In the above output, it shows us that our Node is not up-to-date and the latest version available is `v2.7.1`.

#### Upgrade nodectl via nodectl
If nodectl is already [installed](/validate/automated/nodectl) on your system, we can issue the `upgrade_nodectl` command to attempt to upgrade.

```
sudo nodectl upgrade_nodectl
```
When we execute the [`upgrade_nodectl`](/validate/automated/nodectl-commands#upgrade_nodectl) command; in this example below, the auto_restart feature (*The [auto_restart](/validate/automated/nodectl-commands#auto_restart) command is unrelated this document's purpose.*) was enabled.  Since nodectl cannot upgrade while the `auto_restart` feature is actively running, nodectl will disable the feature auto_magically for us.

nodectl will detect that there is a new version and ask us if we are sure we want to continue?  We can say **`y`** here.

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade_nodectl<br />
   FOUND  auto_restart instance.<br />
  AutoRestart service with pid [3101736] ........ disabled<br /> 
  Auto Restart will reengage at completion of requested task<br />
  A *new* version of nodectl was detected:.........<br />                                                            
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

nodectl will detect the architecture of our VPS, in this example `x86_64` ( ( *most common* ).

Because nodectl cannot upgrade while it is running, nodectl will:
- Exit itself before upgrading.
- Upgrade.
  - nodectl will create a temporary bash script.
  - execute the script.
- Inform us whether or not we need to upgrade anything necessary for Tessellation or the Linux distribution to operate effectively with nodectl.
- Re-enable `auto_restart` if enabled.

In this example:
- We do not need to upgrade our Node.  
- We have `auto_restart` enabled in the [configuration](/validate/automated/nodectl-config).

nodectl will let us know, and request we press <kbd>enter</kbd> to continue without an upgrade and then restart the `auto_restart` feature.

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
</MacWindow>

The [auto_restart](/validate/automated/nodectl-commands#auto_restart) service will restart.

<MacWindow>
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

### Manual Installation
Follow the release notes instructions for the release you desire to install
> [nodectl releases](https://github.com/StardustCollective/nodectl/releases)

### Upgrade Node to work with new nodectl features

It is very simple to upgrade your Node with new nodectl features.  We simply execute the upgrade command and follow the prompts.
```
sudo nodectl upgrade
```

:::danger Keep In Mind
If you are upgrading nodectl via the `sudo nodectl upgrade` command and not Tessellation, when requested to enter in the `version` of Tessellation you want to upgrade to, you will choose the same version.  You should be able to simple hit the <kbd>enter</kbd> when nodectl requests the Tessellation versioning.
<MacWindow>
------ * Handle Node Versioning * ------<br />
<br />
The following version is the latest ........... v1.11.0<br />
The following version is running currently .... v1.11.0<br />
  Please enter version to upgrade to.........[v1.11.0] :<br />
</MacWindow>
:::

Since the process of an upgrade is exactly the same as the process necessary to upgrade Tessellation, we can skip to the [Upgrade Tessellation](#upgrade-tessellation) section to see the step-by-step process.

## Upgrade Tessellation

### Introduction

nodectl's `upgrade` command serves `2` purposes simultaneously.

  1. Upgrade Tessellation.   
  - Including any VPS (bare metal or container) background adds, changes, or enhancements that relate to Tessellation.

  2. Upgrade the **VPS** (bare metal or container) background adds, changes, or enhancements that may or may not relate to Tessellation ( *may be related to the distribution or nodectl instead* ). 

### Start Upgrade
From the remote login on our **Node**.  We can issue the `upgrade` command.
```
sudo nodectl upgrade
```
<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl upgrade
</MacWindow>

:::note Side Note
If the `-ni` (non-interactive) switch is included when the upgrade was executed, unless there is an issue that warrants nodectl to disengage non-interactive mode, you will not be prompted to answer any questions, instead off the **defaults** will be used.

```
sudo nodectl upgrade -ni
```
non-interactive if passphrase is removed from the configuration.
```
sudo nodectl upgrade -ni --pass <my_passphrase>
```

This document will assume that we are running the upgrade in interactive mode.
:::

### Confirm Upgrade
After execution of the `sudo nodectl upgrade` command, the screen will clear and you will be requested to confirm the upgrade you requested.

In this example, the [auto restart](/validate/automated/nodectl-commands#auto-restart) feature was enabled.  In order to upgrade, we will need to disable this feature prior to upgrading.  If auto restart is running, it will conflict with the requests to start and stop services.  **Don't worry**, nodectl will disable and re-enable the `auto_restart` feature for us.

We can choose **y** here.

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  =            UPGRADE REQUEST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  =      TESSELLATION VALIDATOR NODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  ========================================<br />
   Code Name: Princess Warrior<br />
<br />
   FOUND  auto_restart instance.   <br />  
  AutoRestart service with pid [3181577] ........ disabled<br />
  Auto Restart will reengage at completion of requested task<br />
  Terminating auto_restart ...................... complete<br />
  Are you sure you want to continue this upgrade? [n]: <b>y</b><br />
</MacWindow>

### Handle OS System Upgrades
nodectl will begin the **automated** process of upgrading, we only need to sit back and watch.

nodectl will:
- Make sure we are allowed to upgrade.
- Identify our external IP address.
- Update the system package list on the Debian distribution.

<MacWindow>
  ---- * Handle OS System Upgrades * -----<br />
<br />
  Check permissions & versioning ................ complete<br />
  Obtaining External IP ......................... 113.113.113.113 <br />
  Updating the Debian OS system ................. complete<br />
</MacWindow>

### Verify Node Upgrade
nodectl will review the associated p12 file on your system and will identify the `node id`.  

No user intervention is required.

<MacWindow>
------- * Verify Node Upgrade * -------- <br />  
 <br />  
  Obtaining Node ID from p12 [global] ........... f1322....1fc84 <br />
</MacWindow>

### Handle Node Versioning
nodectl will check the difference in versioning between what is currently running on your Node and what version is known as the latest available version of Tessellation.

:::caution
In the event that you are only upgrading nodectl and **not** Tessellation, you will keep the same version by simply hitting <kbd>enter</kbd> to accept the default.
:::

In the below example, nodectl identified that we are running version `v1.10.0` on our Node; however, `v1.11.0` is the latest.

nodectl will auto-magically select the latest version for us, so we can just hit the <kbd>enter</kbd> key here.

:::danger
Entering an invalid version may result in an inoperable Node.  In the event this happens, you can restart the upgrade in an attempt to correct the issue.
:::

<MacWindow>
  ------ * Handle Node Versioning * ------<br />
<br />
  The following version is the latest ........... v1.10.0 <br />
  The following version is running currently .... v1.11.0<br />
  Please enter version to upgrade to.........[v1.11.0] : <br />
</MacWindow>

### Upgrade in progress
nodectl will now take over and start the upgrade process.  You are free to sit back, relax and watch the progress.  

Later in the upgrade ( unless the `-ni` [switch](/validate/automated/nodectl-commands#what-is-a-switch-and-parameter) was chosen ) you will be prompted to answer some questions related to the upgrade.

We recommend you don't leave it unattended to avoid timeouts, missed possible errors, or user interactive prompts that will require your attention.

nodectl will take the Node off the cluster (HyperGraph and metagraph) in preparation for upgrade.

In the example below, you will see that nodectl identified `dag-l0` and `dag-l1` profiles configured on your Node.  It will gracefully attempt to remove itself from the clusters configured by these profiles.

<MacWindow>
 -------- * Take Node Offline * ---------<br />
<br />
  Leaving the cluster for profile ............... dag-l1<br />
  Leaving the cluster for profile ............... dag-l0<br />
  Pausing: 6 of 30 seconds to allow Node to gracefully leave <br />     
</MacWindow>

##### Out of Cluster
nodectl confirms our Node is off the clusters

It will also identify the service name (Debian OS level) `node_l0` and `node_l1` that are running our profiles and stop them for us.

<MacWindow>
  cluster status [dag-l1] ....................... out of cluster  <br />  
  cluster status [dag-l0] ....................... out of cluster  <br />  
  Stop request initiated [node_l1] .............. running  <br />  
  Stop request initiated [node_l0] .............. running  <br />  
  Stop request initiated [node_l1] .............. complete <br />  
  Stop request initiated [node_l0] .............. complete <br />  
</MacWindow>

nodectl will issue a [`status command`](/validate/automated/nodectl-commands#status) against the Node to confirm the results of the stoppage.

:::info
Formatting of the window example is misrepresented due to formatting.  The display on your node will be better represented.
:::

<MacWindow>
 SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
  inactive (dead)&nbsp;&nbsp;&nbsp;&nbsp;ApiNotReady&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l1<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9012<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1683294942915&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;False<br /> 
  <br />
  SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
 inactive (dead)&nbsp;&nbsp;&nbsp;&nbsp;ApiNotReady&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l0<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9002<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1454859585788&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;False<br /> 
</MacWindow>

### Node Internal Configuration

nodectl will begin working on your your VPS elements and your Node's elements, as necessary.

:::note Note
The elements of the Node that are setup here may change from version to version to adhere to necessities of proper and efficient Node operation.
:::

In the below example, nodectl is reviewing version **`1`** settings to confirm they are not enabled, this may be removed in future versions or keep in place to make sure all proper Node operation is completed.  These elements may have been already completed in a previous version or not applicable for your version; moreover, we should not be concerned.

<MacWindow>
  --- * Node Internal Configuration * ----<br /> 
<br /> 
  Verifying Node directory setup ................ complete<br />         
  Updating swapfile settings .................... skipped<br /> 
  NOTE: For partial or skipped elements, see the logs for details.<br /> 
  Removing v1.12.0 [service] files............... complete<br />  
  Removing v1.12.0 [bash] files.................. complete<br />    
  Building v2.0.0 Services Files ................ complete<br /> 
  In the event that the configuration yaml services changed nodectl will attempt to clean up
  old service files.<br /> 
  Skipping clean nothing to remove | file count:  0 files [0B]<br /> 
  Clean up config yaml changes v2.0.0 ........... complete<br /> 
</MacWindow>

### Clean up backups

It important to keep our **Node** hard drive space clean of unnecessary files. nodectl will now offer you the opportunity to clean out your backups.

:::caution
You should review your backups to make sure you do **NOT** delete files you may have as a **backup** but do **NOT** want to delete.

Advanced users may want to transfer these files to a secondary backup directory to keep them safe.

**You should have a backup of the following files in a secure location off of you Node.  These files contain passphrases and critical wallet contents which contain your passphrase.**

- p12 file
- cn-config.yaml
:::

The answer to this question, is **up to you**, in the example we said **y**.

<MacWindow>
  -------- * Clean up backups * ---------<br />
<br />
  remove?  /var/tessellation/backups/.bashrc_2023-0x-0x-14:42:14Z <br />
  remove?  /var/tessellation/backups/.bashrc_2023-0x-0x-12:13:15Z<br />
  remove?  /var/tessellation/backups/cn-node.2023-0x-xx-21:42:19Zbackup<br />
  disk space to be recovered: 69 KB <br />
  file count: 3<br />
  Are you sure you want to clear the selected backups? [n]: <b>y</b><br />
</MacWindow>

### Clean up uploads

Similar to the **backups** you may have some files that were created in order to upload for diagnostics, logging, taxes, etc.   We can clean up these files as well.

In the event that your Node has files located in this special directory, you will be given a list of the files that will be removed and a confirmation prompt.

In the below example, the `uploads` directory was found to be emtpy, so the step was skipped

<MacWindow>
  --------- * Clean up uploads * ---------<br />
<br />
  Skipping clean nothing to remove | file count:  0 files [0B]<br />
  Cleaning logs from [uploads] > 7 days ......... complete<br />
</MacWindow>

### Clean up logs

Similar to the **backups** and **uploads**, the logs directory can become large related to log files that are being built up and not removed.

In the below example, some of the log files were omitted with `[...]` representing files that were built up.  You will notice Hypergraph *`layer0`* and metagraph *`layer1`* logs being represented.

<MacWindow>
  ---------- * Clean up logs * -----------<br />
  <br />
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/app.2023-05-02.0.log.gz<br />  
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-05-02.0.log.gz<br /> 
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-05-01.5.log.gz<br /> 
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-05-03.2.log.gz<br /> 
  [...]<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-04-30.2.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-05-02.3.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-05-01.1.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/transactions.2023-04-30.0.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-05-01.3.log.gz<br /> 
  [...]<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/json_logs/json.log<br /> 
  disk space to be recovered: 1 GB <br />
  file count: 65<br />
  Are you sure you want to clear the selected logs? [n]: <b>y</b><br />
</MacWindow>

### Clean up snapshots

:::note 
Due to the addition of incremental snapshots, this process may soon be deprecated.
:::

Older snapshots are safe to remove from the Node to clear up disk space.  The **snapshots** data will over time cause your `/var` partition on your Debian system to fill up.  If this happens, you will be faced with unknown or undesirable results both with your Node's operations and nodectl's ability to load and run.

Here we can safely clear out our older snapshots.

<MacWindow>
 -------- * Clean up snapshots * --------<br />
<br />
  snapshot directories can be large, please wait patiently... <br />
  disk space to be recovered: 5 GB   <br /> 
  file count: 83179<br />
  Are you sure you want to clear the selected snapshots? [n]: <b>y</b><br />
</MacWindow>

#### Allow snapshot removal

nodectl will begin the process of removing the snapshots.  This is done in a file by file basis to avoid timeouts and false-positive (perception of freezing due to background processes).  Please have patience during this step.

<MacWindow>
  -------- * Clean up snapshots * -------- <br />
 <br />
 snapshot directories can be large, snapshot removal will take a lot of time <br />
  please wait patiently... <br />
  removing [ 2696 ] of [ 83179 ] <br />     
</MacWindow>

once complete, output *similar* to the below example, should follow ...

<MacWindow>
disk space recovered: 5 GB<br />  
file count: 83179<br /> 
cleaning logs from [snapshots] > 30 days ...... complete<br />
</MacWindow>

### Update packages and seed lists
nodectl will pull down the necessary packages that will upgrade your Node to the latest versions.

We will also update any access permission lists (*seed lists*) that need to match for proper authentication to the Hypergraph and metagraphs.

:::note
If there is not a *seed list* present for a particular profile, the fetch will be disabled and skipped.  You have the ability to configure this within the nodectl configuration file.

[`sudo nodectl configure`](/validate/automated/nodectl-commands#configure)
:::

You can sit back and relax as nodectl continues to upgrade your Node for you.

<MacWindow>
 --------- * Handle Packages * ----------<br />
<br />
  Download [v2.0.0-alpha.5] Constellation Network Tessellation Binaries<br /> 
  Fetch Tessellation binary [cl-keytool.jar] .... complete<br />                                 
  Fetch Tessellation binary [cl-node.jar] ....... complete <br /> 
  Fetch Tessellation binary [cl-dag-l1.jar] ..... complete<br /> 
  Fetch Tessellation binary [cl-wallet.jar] ..... complete <br /> 
  Fetching cluster seed file [testnet->dag-l0] .. complete <br /> 
  Fetching cluster seed file [testnet->dag-l1] .. disabled/skipped<br />
</MacWindow>

### Bring Node Back Online

nodectl will bring your service back online for you.

<MacWindow>
  ------ * Bring Node Back Online * ------<br />
<br />
  Reload the Node's services .................... complete<br />
  Start request initiated [node_l0] ............. running<br />
  building environment .......................... complete<br />
  Updating services file ........................ complete<br />
  Start request initiated [node_l0] ............. complete<br />
</MacWindow>

Then it will verify the status and display for you.

<MacWindow>
 SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
  active (running)&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l0<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9002<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1683294932039&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
</MacWindow>

It is **important** to note here that we **only** brought back up our **layer0** service.  In this example the profile called `dag-l0` is started.

A special **recommended** feature of nodectl is coordination to allow your Node to proper join:
- The `layer0` network cluster joins first.  
- Join consensus for that layer.
- Wait for `Ready` state (properly joined).
- Allow the required `layer1` connection to be created by **linking through your Node's `layer0`** network. 

This is recommended because it provides a consistent and reliable layer0 to layer1 link for your Node to function as efficiently as possible between clusters.

We will find our Node is `ReadytoJoin`.

<MacWindow>
  Checking for [ReadyToJoin] state............... ReadyToJoin<br />
  Please wait while [dag-l0] attempts to join the network.<br />
</MacWindow>

### Re-join the Network

The configured `layer0` profile will rejoin the network.  In this case the profile `dag-l0` is configured as the layer0 and will attempt to join.

In this [upgrade](/validate/automated/nodectl-commands#upgrade) (document/manual) we did **not** choose the `-w` ([watch](/validate/automated/nodectl-commands#upgrade)) mode.  This creates an upgrade that is less verbose, and saves time by not forcing the Node Operator to wait for all peer to peer connections to be established, instead once the Node reaches a `state` where it is able to participate on the network, nodectl will skip watching for the remaining peers to connect and simply and safely continue the upgrade process.

It is necessary that all peers on the network learn about all other peers on the network via the gossip mechanisms in the **Constellation Network's** DAG protocol setup.  However, it is not important to wait for all connections to be established, to complete the upgrade.

Below we will see that our Node reached `WaitingForReady` while it was connected to `36` out of `48` known Nodes on the network.  nodectl continued the upgrade process...

<MacWindow>
---------- * Joining dag-l0 * ----------<br />
<br />
  Reviewing [dag-l0] ............................ ReadyToJoin<br />
  Preparing to join cluster [dag-l0] ............<br />
  Max Timer  300 seconds<br />
  Peers: 48 Connected: 36 State: WaitingForReady Timer: 20<br />
  Join process complete ......................... done<br />
  ok that peer count &lt; cluster peer count<br />
  watch mode was not chosen by upgrade.<br />
<br /> 
  Checking status [dag-l0] ......................<br />
<br />
 SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
  active (running)&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l0<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9002<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1683294932039&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1683294932039&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True<br /> 
<br />
</MacWindow>

### Metagraph services *layer1*

nodectl will now start up your `layer1` service which was configured in a profile called `dag-l1`.  

<MacWindow>
  Start request initiated [node_l1] ............. running<br />
  building environment .......................... complete<br />
  Updating services file ........................ complete<br />
  Start request initiated [node_l1] ............. complete<br />
</MacWindow>

Check the status of `dag-l1`.

<MacWindow>
  Fetching Status [dag-l1] ......................<br />
 SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
  active (running)&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l1<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9012<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1683294942915&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
</MacWindow>

We are in the `ReadyToJoin` state. Will have to now wait for `dag-l0` profile, that is our `layer0` profile to be in `Ready` state.

<MacWindow>
  Checking for [ReadyToJoin] state............... ReadyToJoin<br />
  Please wait while [dag-l1] attempts to join the network.<br />
  NOTE: Layer1 networks will not join the Hypergraph until its
  Layer0 linked profile changes to Ready state, this could
  take up to a two minutes.<br />
</MacWindow>

Since the `layer0` was already in `Ready` state (meaning that it is properly and effectively participating on the HyperGraph).  We can now link our Layer1 through our Layer0 to transfer data securely and properly between layers.

If our Node is not properly in `Ready` state on `layer0`, nodectl will patiently wait for this condition to be met, updating the Node Operator through the command prompts, as it continues to check.

### Joining next layer

nodectl will now attempt to join the `dag-l1`.  

As mentioned above, in this [upgrade](/validate/automated/nodectl-commands#upgrade) (document/manual) we did **not** choose the `-w` ([watch](/validate/automated/nodectl-commands#upgrade)) mode.  nodectl will not wait for all peers to connect, as it is not necessary to complete the upgrade.

<MacWindow>
  ---------- * Joining dag-l1 * ----------<br />
<br />
  Reviewing [dag-l1] ............................ ReadyToJoin<br />
  Waiting on profile [dag-l0] state to be [Ready]<br />
  before initiating Hypergraph join.<br />
  Current Found State [dag-l0] .................. Ready<br />
  Preparing to join cluster [dag-l1] ............<br />
  Max Timer  300 seconds<br />
  Peers: 49 Connected: 2 State: Ready Timer: 0<br />
  Join process complete ......................... done<br />
  ok that peer count &lt; cluster peer count<br />
  watch mode was not chosen by upgrade.<br />
</MacWindow>

nodectl will check the `status` of your Node.

<MacWindow>
 Checking status [dag-l1] ......................<br /> 
 SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE<br /> 
  active (running)&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dag-l1<br /> 
  PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP <br /> 
  9010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9012<br /> 
  CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK<br /> 
  1683294942915&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1683294942915&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True<br />
</MacWindow>

### Complete the upgrade

nodectl will complete the process.

<MacWindow>
  dag-l1 upgrade process completed!<br />
  dag-l0 upgrade process completed!<br />
  Upgrade has completed<br />
<br />
  Total upgrade time: 4.865 minutes<br />
</MacWindow>

### Restart auto restart feature

Since the [auto restart](/validate/automated/nodectl-commands#auto_restart) feature; in this example, was **enabled**, the auto restart feature will re-enable at the end of the upgrade for us.

<MacWindow>
  node restart service started... 
</MacWindow>

## Upgrade Complete
Congratulations, you have completed a successful upgrade.