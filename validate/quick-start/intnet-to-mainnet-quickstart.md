---
title: IntegrationNet to MainNet
slug: inttomain-node-quick-install
hide_table_of_contents: false
---
import MacWindow from '@site/src/components/global/MacWindow';

# Migrate an IntegrationNet Node to MainNet Quick Start Guide

This guide is specifically for migrating your IntegrationNet Node over to MainNet.

## ◽ Validate the Provisioning Your VPS

#### Minimum Specs for Your Node

| Type            | Minimum Required  |
|-----------------|----------|
| **CPU**         | 8       |
| **RAM**         | 16GB RAM |
| **Disk Space**  | 320GB    |
| **Traffic Allowance** | 10 TB/month |

Suggested OS: **Ubuntu 22.04**

*Ubuntu 24.04 is currently not supported.*

## ◽ SSH into Your VPS
Refer to [this doc](/validate/validator/ssh-keys) for **SSH** instructions.<br />
Refer to [this doc](/validate/resources/accessMac) to access from a **Macintosh**.<br />
Refer to [this doc](/validate/resources/accessWin) to access form a **Windows System**.<br />

## ◽ Document Current P12 Details
```
sudo nodectl view_config --section global_p12
```
You may need this information moving forward with this Quick Start Guide, please **securely** record these as **temporary** notes before continuing with this guide.

:::success IMPORTANT
If your p12 passphrase is encrypted, you will not be able to view it. Please ensure you have your p12 passphrase readily available.

You will be prompted to enter your p12 passphrase later in the migration process.
:::

## ◽ Verify `Auto Restart`
```
sudo nodectl auto_restart status
```
If you see a **SERVICE PROCESS FOUND (PID)**, continue to the next step.  If you see `disabled`, you may skip the `Disable Auto Restart` step, and continue directly to the [update OS step](#-update-os).

<MacWindow>
SERVICE PROCESS FOUND (PID)<br />
disabled
</MacWindow>

## ◽ Disable `Auto Restart`
```
sudo nodectl configure -e -cb -d
```
- Option <kbd>R</kbd>
```
Do you want to [disable] auto_resart? [y] y
```

- Disable all **3** Options:
  - auto_restart
  - auto_upgrade
  - on boot

## ◽ Update OS
```
sudo nodectl upgrade_vps
```
If you are instructed to `reboot` continue to the next step; otherwise skip to [Validate latest nodectl version](#-validate-latest-nodectl-version).

## ◽ Reboot
```
sudo nodectl reboot
```
- If asked to leave the cluster(s) first, you will say `y`

Once nodectl reboots your Node for you, you will lose access to the terminal session.
- Wait 1 minute to allow your VPS to reboot
- SSH into your VPS again using the Node's administration account `nodeadmin`.

## ◽ Validate latest nodectl version 
**Node Control Utility Program v2.15.0**
```
sudo nodectl check_version
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
We will preserve our p12 key store configuration settings.
2
<MacWindow>
Preserve global p12 details? [n] <b>y</b>
</MacWindow>

## ◽ Clean Up Old Profiles
We need to remove the old profiles from our Node.

<MacWindow>
Remove old profiles? [y] <b>y</b>
</MacWindow>

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

## ◽ Completed
After the final steps your Node should be successfully on the cluster.  You can validate that your node is online.
```
sudo nodectl status
```
<MacWindow>
JOIN STATE<br />
Ready
</MacWindow>




