---
title: Getting Started
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

:::danger IMPORTANT
The **manual instructions** to install a Node on MainNet 2.0 are for a **single Layer design**.  MainNet 2.0 will be requiring that you run both Layer0 and Layer1 as we perform Genesis.  

*This will change in the future*.
:::

:::success IMPORTANT
It is highly **recommended** that you use **nodectl** to install your Node!
:::

All Nodes will be required to run both the **Global Layer 0** and the **DAG State Channel Layer1**.

:::caution CAUTION
It is highly recommend to use the **latest** version of **NODECTL**!  It very possible that this documentation will fall behind and be a little out-of-date.  *Please correct the version in the url provided below, if necessary*.
:::

### DESCRIPTION

**nodectl** pronouced node "c" "t" "l", node-cuttle, or node control.

The purpose of this utility is to **make things easier** on you.  It obviates some of the technical aspects of running a Validator Node, so that anyone can do it!

### INSTALL YOUR NODE
Using `nodectl`

#### Step 1
Make sure you go through [Running a Node (Part 1)](./../validator/install) and then go through the process of setting up your **VPS**.

:::danger
You will need to review the **required** specifications for MainNet 2.0 launch!  You can review them [here](../validator/specs)
:::

#### Step 2
Download the latest (this is important make sure you are at the latest version) of **nodectl**. (*Do not use any pre-releases*)
```
https://github.com/netmet1/constellation_nodectl/releases
```
Log into your VPS and download the latest release of **nodectl**.

:::danger VERY IMPORTANT
The links below show the latest version of `nodectl` at the time of this writing!  You **MUST** make sure that you download the most recent version of `nodectl` in order to create the best possible user experience.   Review the link below, compare it to the [repository version](https://github.com/netmet1/constellation_nodectl/releases), and if it there is a newer release, change the URL below to match.

example 

**JUST AN EXAMPLE**: If the latest version is `1.6.2` (made up example) but these instructions show `v1.6.0`.

> **github.com/netmet1/constellation_nodectl/releases/download/*v1.6.0*/nodectl_x86_64**

will become

> **github.com/netmet1/constellation_nodectl/releases/download/*v1.6.3*/nodectl_x86_64**
:::

The following commands will download the latest version, set the file's permissions and move it to the proper directory on your Linux VPS.

**x86_64** *(most common)*
```
sudo wget https://github.com/netmet1/constellation_nodectl/releases/download/v1.6.0/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl
```

**arm_64**
```
sudo wget https://github.com/netmet1/constellation_nodectl/releases/download/v1.6.0/nodectl_arm64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl
```

:::note NOTE
After the initial download via a `wget` nodectl will warn you when a new versions are available.  at that time it will show you the proper command to issue to download the newest version
```
sudo nodectl upgrade_nodectl
```
:::

## INSTALL TESSELLATION LAYER0 and LAYER1

### STEP 1
```
sudo nodectl install
```

### STEP 2
The installation will take you through what information is needed by you, `step-by-step`.

### STEP 3
When your environment is requested, you should enter in `mainnet`

### STEP 4
Report your `nodeid` shown at the end of the process, to your administrators.

### STEP 5
When you are notified that you have been properly added to the `seed-list`
verify
```
sudo nodectl update_seedlist
```
```
sudo nodectl check_seedlist
```

### STEP 6
Once your `nodeid` is confirmed to have been added to the `seed-list`
verify
```
sudo nodectl restart -p all
```

## OTHER IMPORTANT COMMANDS
show your nodeid
```
sudo nodectl nodeid
```
show your dag address
```
sudo nodectl dag
```
show your private key for import into your Stargazer wallet
```
sudo nodectl export_private_key
```
show node's status on L0 and L1
```
sudo nodectl status
```
show node's status on just L0
```
sudo nodectl status -p dag-l0
```
show node's status on just L1
```
sudo nodectl status -p dag-l1
```
show node's connection status on L0
```
sudo nodectl check_connection -p dag-l0
```
Review all known `nodectl` commands, and shortcuts
```
sudo nodectl help
```