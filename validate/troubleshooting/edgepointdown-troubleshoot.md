---
title: EdgePointDown Troubleshooter
hide_table_of_contents: false
hide_title: false
---

import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="nodectl utility EdgePointDown troubleshooting"
  />
</head>

This guide is specifically for troubleshooting a node that is experiencing an issue when attempting to connect to the network and is receiving an `EdgePointDown` status.

## ◽ Understanding the Issue
A potential issue that may arise when a node attempts to resolve the edge point(s) using IPv6 instead of IPv4.

This issue may occur in scenarios such as:

-	The edge point’s location involves IPv6 to IPv4 translation.
-	The cloud service provider uses IPv6 instead of IPv4 for its underlying infrastructure.
-	A medium between the edge point and the service provider handles IPv6 in a way that disrupts Constellation Network’s communication requirements.

This guide will assist you in disabling IPv6 on the node directly.

:::info Note
As other possible issues that may cause the same `EdgePointDown` condition emerge, this document will be updated accordingly.  At this time, only the `IPv6` resolution issue is being addressed.
:::

## ◽ Backup P12 
:::danger WARNING
These troubleshooting steps will attempt to modify a node's VPS core distribution settings.  In some cases this may cause your node to lose connectivity.  

We need to **backup** our p12 keystore prior to working on this issue.  

Currently, nodes run on ephemeral VPS systems, allowing quick rebuilds in case of issues with minimal downtime. In the worst case, we can create a new node and migrate your p12 keystore. 
:::

Before we begin, please confirm the existence of a p12 keystore backup or **backup** your p12 keystore.
- [Macintosh](/validate/resources/p12-backup-mac)
- [Windows](/validate/resources/p12-backup-win)

## ◽ Confirm nodectl Version
Make sure you are on version `v2.15.2` or greater.
```
sudo nodectl version
```
If you are not on `v2.15.2` or greater, please [upgrade nodectl](/validate/quick-start/upgrade-nodectl-quickstart) before continuing.


## ◽ Check IPv6 Status
Check the `ipv6` status for both `sysctl` and `GRUB`.
```
sudo nodectl ipv6 status
```

<MacWindow>
--------- * IPV6 STATUS * ---------<br />
Interface found ................... eth0<br />
<br />
IPv6 sysctl Status&nbsp;&nbsp;&nbsp;IPv6 GRUB Status<br />
enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled<br />
</MacWindow>

:::caution Caution 
If one or both IPv6 status types show as **`disabled`**, the `EdgePointDown` issue you are facing is not related to IPv6. 

You can stop here and reach out to a Team Lead or Administrator on Constellation Network’s Official Discord server for further assistance.
:::

## ◽ Disable IPv6 (sysctl)
We will restrict outbound IP resolution to IPv4 only by modifying the Debian `sysctl` configuration, via nodectl's `ipv6` feature.

We will use the `sysctl` option.

- Issuing the `--ni` for non-interactive mode (*optional*)
- Issuing the `--sysctl` option to instruct nodectl on what method to use to disable IPv6 (*Optional if not using `--ni`.*)

```
sudo nodectl ipv6 disable --ni --sysctl
```

## ◽ Confirm IPv6 Status 
Our `sysctl` status should change to `disabled`.

<MacWindow>
IPv6 sysctl Status&nbsp;&nbsp;&nbsp;IPv6 GRUB Status<br />
disabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled<br />
</MacWindow>

## ◽ Restart Profiles
Restart the profile(s) associated with your nodectl configuration. 

```
sudo nodectl restart -p all
```

## ◽ Auto Restart (optional)
Optionally, you can allow [auto_restart](/validate/automated/nodectl-autorestart) to bring your node back online.

It may be a good idea to restart the `auto_restart` service to ensure everything is functioning optimally.

```
sudo nodectl auto_restart restart
```

Thank you! **enod!**