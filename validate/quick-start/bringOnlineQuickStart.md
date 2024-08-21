---
title: First Time Connection
slug: online-quick-start
hide_table_of_contents: false
---
import MacWindow from '@site/src/components/global/MacWindow';

# First Time Connection Quick Start Guide

This guide is specifically for connecting a Validator Node to a Constellation Network Hypergraph or metagraph cluster for the first time.

## ◽ Prerequisites 

Please review the [checklist, assumptions, and profile descriptions](/validate/quick-start/prerequisites) for a better understanding of how this document works.

We will use `dag-l0` as our profile name throughout the guide. When necessary, this should be changed to match your Node's profile.

## ◽ Connect to Your Node
From your local system open a remote connection to your Node to begin.
- [Windows](/validate/resources/accessWin)
- [Macintosh](/validate/resources/accessMac)

## ◽ Verify you are on the seed list
```
sudo nodectl check_seedlist -p dag-l0
```
<MacWindow>
NODE ID FOUND ON SEED LIST<br />
True
</MacWindow>

If you are not on the seed list, please 🛑 **stop** here and contact a Discord Administrator from the Constellation Network Official Discord server.

## ◽ Preform an upgrade 

Utilizing the [upgrade](/validate/automated/nodectlCommands#upgrade) command, we can take care of most of the necessary items to ensure our Node can join the cluster properly.

```
sudo nodectl upgrade -ni
```
The `-ni` will run the `upgrade` in non-interactive mode, using all the default values.

** 🛑 ✋ Layer1 only metagraph validators should skip to [this](#-verify-your-status) step at the time. 🛑 ✋ **

:::danger HYBRID NODES ONLY
You will see your Node attempt to connect to the layer1 profile and fail.  **This is expected, and can be ignored**. 
:::

A new Node must go through the process of obtaining the entire [snapshot chain](/learn/advanced-concepts/architecture) from the cluster. Layer1 is not allowed on the cluster until the layer0 cluster has its entire chain.

During this stage, your Node will report its state as: `DownloadInProgress`.
```
sudo nodectl status -p dag-l0
```
<MacWindow>
JOIN STATE<br />
DownloadInProgress
</MacWindow>

## ◽ Execute Starchiver (optional)

To reduce the time to obtain your entire snapshot chain **considerably**, so you may join the cluster properly, you can utilize the [starchiver](https://github.com/StardustCollective/Starchive-Extractor) utility.
```
sudo nodectl execute_starchiver -p dag-l0 --restart
```
While the Starchiver utility is running, you should keep a diligent eye on your Node to make sure it completes successfully.

**Starchiver is not a Constellation Network supported Utility.** For troubleshooting or other needs, you can reach out to the owner of the project through the [Github Repository](https://github.com/StardustCollective/Starchive-Extractor).  You may also contact the developers through the Constellation Network Official Discord server.

## ◽ Verify your status
Once your Node has completed downloading the snapshot chain, it will transition from `DownloadInProgess` to `Ready` by going through several intermediary stages.

You can review your Node's status by issuing the [status](/validate/automated/nodectlCommands#status) command.  We are looking for two main status output values:
1. JOIN STATE
1. IN CONSENSUS

```
sudo nodectl status -p dag-l0
```

#### Layer0

<MacWindow>
JOIN STATE<br />
Ready
</MacWindow>
<MacWindow>
IN CONSENSUS<br />
True
</MacWindow>

#### Layer1

<MacWindow>
JOIN STATE<br />
ReadyToJoin
</MacWindow>

If your Node has not reached the `Ready` stage, you can continuously watch the Node's status by utilizing the `-w` (watch) option.  

Make sure when you are done watching, you use the <kbd>q</kbd> to gracefully exit the `status` command.

```
sudo nodectl status -p dag-l0 -w 120
```

## ◽ Join layer1

If your Node is in `ReadyToJoin`:
```
sudo nodectl join -p dag-l1
```
If your Node is in any state other than `Ready`:
```
sudo nodectl restart -p dag-l1
```
