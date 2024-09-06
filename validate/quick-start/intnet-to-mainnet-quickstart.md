---
title: IntegrationNet to MainNet Quick Start
hide_table_of_contents: false
hide_title: true
---
import MacWindow from '@site/src/components/global/MacWindow';

# Migrate an IntegrationNet Node to MainNet Quick Start Guide

This guide is specifically for migrating your IntegrationNet Node over to MainNet.

## ◽ Validate the Provisioning Your VPS

An IntegrationNet node should already have the same specifications required to run a MainNet node.  However, this is a good time to make sure your [Hybrid nodes](/validate/validator/specs#hybrid-node) meets [these specifications](/validate/validator/specs#hybrid-node) before continuing.

## ◽ SSH into Your VPS
Review your [notes](/validate/resources/nodectl-notes) for the connection string.

```
ssh -i /path/to/ssh/private/key nodeadmin@vps_ip_address
```
Refer to [SSH Explanation](/validate/validator/ssh-keys), [Mac SSH Guide](/validate/resources/accessMac), and [Windows SSH Guide](/validate/resources/accessWin)
for detailed understanding.

## ◽ Document Current P12 Details
```
sudo nodectl view_config --section global_p12
```
You may need this information moving forward with this Quick Start Guide, please **securely** record these as **temporary** notes before continuing with this guide.

:::caution IMPORTANT
If your p12 passphrase is encrypted, you will not be able to view it. Please ensure you have your p12 passphrase readily available.

You will be prompted to enter your p12 passphrase later in the migration process.
:::

## ◽ Verify `Auto Restart`
We want to make sure `auto_restart` is disabled.
```
sudo nodectl auto_restart status
```
If you see a **SERVICE PROCESS FOUND (PID)**, continue to the next step.  

If you see `disabled`, you may skip the `Disable Auto Restart` step, and continue directly to the [update OS step](#-update-os).

<MacWindow>
SERVICE PROCESS FOUND (PID)<br />
disabled
</MacWindow>

## ◽ Disable `Auto Restart`
```
sudo nodectl configure -e -cb -d
```
- Option <kbd>r</kbd> 
```
Do you want to [disable] auto_resart? [y] y
```

- Disable all **3** Options:
  - auto_restart
  - auto_upgrade
  - on boot

- Option <kbd>q</kbd> 

## ◽ Update OS
```
sudo nodectl upgrade_vps
```

#### ◽ TUI Messages
If you encounter a purple ascii art GUI (text-based user interface TUI).  You should leave any values chosen (if there are options) for you and use the <kbd>Tab</kbd> key to advance to the <kbd>OK</kbd> or <kbd>Confirm</kbd> options.  Choose <kbd>Enter</kbd> to accept and continue.

#### ◽ Reboot Request
If you are instructed to `reboot` continue to the next step; otherwise skip to [Validate latest nodectl version](#-validate-latest-nodectl-version).

## ◽ Reboot
```
sudo nodectl reboot
```
- If asked to leave the cluster(s) first, you will choose <kbd>y</kbd>.

Once nodectl reboots your Node for you, you will lose access to the terminal session.
- Wait 1 minute to allow your VPS to reboot
- [SSH](#-ssh-into-your-vps) into your VPS again using the Node's administration account `nodeadmin`.

## ◽ Validate latest nodectl version 
**Node Control Utility Program**
```
sudo nodectl check_versions
```
If you are on the latest **nodectl** version, you may skip the next 2 steps and [continue the migration process](#-leave-integrationnet-cluster).

<MacWindow>
NODECTL VERSION MATCH<br />
True
</MacWindow>

## ◽ Upgrade nodectl 
```
sudo nodectl upgrade_nodectl
```
Optionally, you may refer to the detailed [step-by-step](/validate/automated/upgrade_nodectl/index) guide.

#### ◽ Migrate nodectl
You may be requested to **migrate** your Node configuration.  

:::danger **IMPORTANT** 
The migration **must** be completed.
:::
We will say <kbd>y</kbd> and follow the prompts.

#### ◽ Upgrade nodectl
You may be requested to upgrade `nodectl` after the `nodectl_upgrade` completes.  

If an upgrade is requested, we will say <kbd>n</kbd> to this request!

## ◽ Manually Upgrade nodectl
Issue a `nodectl_only` upgrade of nodectl.
```
sudo nodectl upgrade --nodectl_only --ni 
```

## ◽ Verify Node Status
```
sudo nodectl quick_status
```
If your Node is in **any other** status other than (not equal to):
- `Ready`
- `DownloadInProgress`

If **NOT** in the states above, skip to [this step](#-apply-mainnet-configuration).

<MacWindow>
intnet-l0 State: ApiNotReady<br />
<br />
<br />
intnet-l1 State: ApiNotReady<br />
</MacWindow>

## ◽ Leave and Stop IntegrationNet Cluster
```
sudo nodectl stop -p intnet-l0
```
- Yes <kbd>y</kbd> to `leave` first.
```
sudo nodectl stop -p intnet-l1
```
- Yes <kbd>y</kbd> to `leave` first.

# Ready to Migrate!

## ◽ Apply MainNet configuration

##### ◽ Start Migration
```
sudo nodectl configure -n -cb -d
```
##### ◽ Pick Scenario
We will be using **Scenario Three**.
- Press the <kbd>3</kbd> key to choose Scenario Three.

<MacWindow>
1) Scenario 1<br />
2) Scenario 2<br />
3) Scenario 3<br />
4) Scenario 4<br />
</MacWindow>

Read the `warning` and press any key to continue.

## ◽ Handle Stop Request
We **already** removed our Node from the previous Constellation Network `IntegrationNet` clusters during [this step](#-leave-and-stop-integrationnet-cluster).  Choose <kbd>n</kbd>.
<MacWindow>
Exit new configuration build to stop profiles? [y] <b>n</b>
</MacWindow>

## ◽ Choose Predefined Config
- Choose <kbd>1</kbd> for `mainnet [Hypergraph]`

## ◽ Global P12 details
We will set all profile to `global`.
<MacWindow>
Set ALL profile p12 wallets to Global? [y] <b>y</b>
</MacWindow>

## ◽ Preserve P12 details
We will preserve our p12 keystore configuration settings.

<MacWindow>
Preserve global p12 details? [n] <b>y</b>
</MacWindow>

## ◽ Clean Up Old Profiles
We need to remove the old profiles from our Node.

<MacWindow>
Remove old profiles? [y] <b>y</b>
</MacWindow>

*This may take a few moments, please exercise patience.*

## ◽ Clean Up Old Services
We need to remove the old service files from our Node.

<MacWindow>
Remove old service files? [y] <b>y</b>
</MacWindow>

## ◽ Build Services
No action needed.  nodectl will build your new service files.

## ◽ Review New Configuration (optional)
Optionally, review the new configuration file.

<MacWindow>
Review the created configuration? [y] <b>n</b>
</MacWindow>

## ◽ Complete Install and Quit Configurator
Press any key to continue

Press <kbd>q</kbd> to quit back to the terminal prompt.

# Join MainNet

At the point, you will no longer be utilizing the old profiles:
- `intnet-l0` 
- `intnet-l1` 

The new profiles associated with MainNet are:
- `dag-l0` 
- `dag-l1`.  

You can review the profile descriptions [here](/validate/quick-start/prerequisites#-profile-table).

## ◽ Collateralize your Node
Up until now, you have been rewarded for your participation on IntegrationNet through the information provided in your Lattice account via daily distributions.

On MainNet, rewards will be sent directly to your node’s hot wallet.

Please follow [this](/validate/quick-start/collateralize-quickstart) guide and then return to this document when complete.

## ◽ Download snapshots (Optional)
If you would like to organically download the MainNet snapshots, you can skip to [next](#-restart-your-node) step.

:::danger Community Tool
We will use the community owned and community supported utility Starchiver Extractor. It can be installed, setup, and executed via a **single** nodectl command. 

Please refer to the [Starchiver Extractor](https://github.com/StardustCollective/Starchive-Extractor) documentation if you have any questions.
:::
```
sudo nodectl execute_starchiver -p dag-l0 --restart
```

## ◽ Restart your Node
If you preformed the [download snapshots](#-download-snapshots-optional) step, your Node should have restarted and you can skip this final step.

We will join the new network by using the nodectl `restart` feature.  
```
sudo nodectl restart -p all
```
:::note Note
If you skipped the [download snapshots](#-download-snapshots-optional) step, this process may take up to 5 days to complete.
:::

## ◽ Enable Auto Restart (Optional)
You may want to reenable [auto restart](/validate/automated/nodectl-commands#auto_restart).

```
sudo nodectl configure -e -cb -d
```
- Option <kbd>R</kbd>
```
Do you want to [enable] auto_resart? [y] y
```

- Enable all **3** Options:
  - auto_restart
  - auto_upgrade
  - on boot

## ◽ Handling Old Backups
After completing this migration, any backups will now be rendered irrelevant. During the next [upgrade](/validate/automated/nodectl-commands#upgrade), it should be a good opportunity to clear your backups when prompted by the upgrade command.


## ◽ Completed
After the final steps your Node should be successfully on the cluster.  You can validate that your node is online.
```
sudo nodectl status
```
<MacWindow>
JOIN STATE<br />
Ready
</MacWindow>