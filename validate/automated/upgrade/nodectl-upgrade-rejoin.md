---
title: upgrading - Rejoin
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

## Re-join the Network

The configured `layer0` profile will rejoin the network.  In this case the profile `dag-l0` is configured as the layer0 and will attempt to join.

In this [upgrade](/validate/automated/nodectl-commands#upgrade) documentation, we did **not** choose the `-w` ([watch](/validate/automated/nodectl-commands#upgrade)) mode.  

Unless needed, the watch mode is not recommended because it will slow down our upgrade. 

Without the `-w` we create an upgrade that is less verbose. We save time by not forcing the Node Operator to wait for all peer to peer connections to be established.  Instead, once the Node reaches a `state` where it is able to participate on the network, nodectl will stop watching the peer connections.  While the remaining peers connect in the background, we can safely continue the upgrade process.

### DownloadInProgress

Most likely, your Node will reach the `DownloadInProgress` state, and we may want to continue the upgrade prior to moving out of this state.  

:::note Note
This documentation uses the word `stage` and `state` interchangeably.
:::

This is perfectly normal situation and this stage may take longer than most other stages of the join process.

DownloadInProgress is the state (stage) of the Node's joining process where it will download your copy of the blockchain.  This is required to participate on the cluster, and this process can take a long time.

#### First time connections

Upon the initial join process to the cluster, since this is the first time your Node is joining the cluster, it may take a few hours to complete the `DownloadInProgress` stage.  Please practice patience during this time.

You may not reach the next stage shown below, the Node may not properly connect to the layer1.  This is because layer1 must wait for layer0 to complete its join process before joining the layer1 cluster.

You will be required to come back to your Node after a few hours to complete the join process and bring your layer1 online.  

Alternatively, you can engage the [auto_restart](/validate/automated/nodectl-commands#auto_restart) feature.  When engaged, nodectl will wait for layer0 to move into `Ready` state and automatically join your Node to the layer1 cluster for you.

### Continuing the upgrade

Below we will see that our Node reached `DownloadInProgress` while it was connected to `36` out of `240` known Nodes on the network.  

At ~`49`( the Node reached a timer threshold ~40 ) and nodectl continued on with the upgrade process...

<MacWindow>
---------- * Joining dag-l0 * ----------<br />
<br />
Reviewing [dag-l0] ............................ ReadyToJoin <br />
Joining with peer [601f8f1d...f2163467] ....... 1.1.1.1<br />
Join cluster status [dag-l0] .................. Preparing<br />
Max Timer  300 seconds<br />
Peers: 240 Connected: 36 State: DownloadInProgress Timer: 49<br />
<br />
nodectl has detected DownloadInProgress state.<br />
<br />
This is not an issue; however, Nodes may take longer than expected time to complete this process.  nodectl will terminate the watching for peers process during this join in order to avoid undesirable wait times.<br />
<br />
Join process complete ......................... done<br />
&nbsp;&nbsp;IMPORTANT&nbsp;&nbsp;It is ok that the peer count &lt; cluster peer count because watch mode was not chosen by upgrade.<br />
<br /> 
  Checking status [dag-l0] ......................<br />
</MacWindow>

### Show Status Again

<MacWindow>
PROFILE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE<br />
dag-l0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active (running)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DownloadInProgress<br /> 
PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP<br />    
9000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9002<br /> 
LATEST ORDINAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LAST DLed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLK EXP ORDINAL<br />  
1010472&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1010286&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1010472<br /> 
CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK  <br /> 
1702306944446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1702306944446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True<br /> 
CLUSTER START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM START<br /> 
2023-12-11-15:02:24Z&nbsp;&nbsp;&nbsp;~1M 2S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-12-06 11:46:32 <br /> 
CLUSTER UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM UPTIME<br />
~9D 3H 38M 9S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~14D 6H 59M 31S<br /> 
NODE ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IN CONSENSUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />  
12345...12345&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> 
</MacWindow>

Once nodectl reaches `Ready` on the primary layer0, it will then attempt to join `layer1`.

In our example, the Node has continued to remain in `DownloadInProgress` while it was in the process of completing this stage of joining the network.  