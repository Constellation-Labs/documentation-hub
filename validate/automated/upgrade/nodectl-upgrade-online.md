---
title: upgrading - Go Online
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

## Bring Node Back Online

nodectl will bring your service back online for you.

<MacWindow>
 ------ * BRING NODE BACK ONLINE * ------<br />
 <br />
 Start request initiated [node_l0] ............. running  
<br />
</MacWindow>

### Verify access

nodectl will make sure we are able to join the cluster (permissions) before it continues.

- Show the Node's nodeid.
- Are we found on the seed list?
- Prepare environment.
- Prepare the service files.

<MacWindow>
  ----- * Check Seed List Request * ------<br />
<br />
NODE ID<br />
11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br />
Node found on Seed List ....................... True<br />
building environment .......................... complete<br />
Updating services file ........................ complete<br />
</MacWindow>

### Restart services

nodectl will start the service that is called: `node_l0`.

We will bring our Node back on the layer0 cluster.  

<MacWindow>
Start request initiated [node_l0] ............. complete<br />
Fetching Status [dag-l0] ......................<br /> 
</MacWindow>

### Display resulting status

nodectl will verify the status and display for you.

<MacWindow>
PROFILE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE<br />
dag-l0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active (running)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP<br />    
9000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9002<br /> 
LATEST ORDINAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LAST DLed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLK EXP ORDINAL<br />  
1010472&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1010286&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1010472<br /> 
CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK  <br /> 
1702306944446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
CLUSTER START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM START<br /> 
2023-12-11-15:02:24Z&nbsp;&nbsp;n/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-12-06 11:46:32 <br /> 
CLUSTER UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM UPTIME<br />
~9D 3H 38M 9S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~14D 6H 58M 1S<br /> 
NODE ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IN CONSENSUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />  
12345...12345&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;False&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> 
</MacWindow>

It is **important** to note here that we only brought back up our layer0 service.  In this example the profile called `dag-l0` is started.

A special **required** feature of nodectl is administrating the coordination of re-joining the various clusters configured on your Node in proper order.

- The `layer0` network cluster joins first.  
- Wait for `Ready` state (properly joined).
- Allow the required `layer1` connection to be created by **linking through your Node's `layer0`** network. 

This is recommended because it provides a consistent and reliable layer0 to layer1 link for your Node to function as efficiently as possible between clusters.

### Ready To Join

We will find our Node is `ReadytoJoin`.

<MacWindow>
  Checking for [ReadyToJoin] state............... ReadyToJoin<br />
  Please wait while [dag-l0] attempts to join the network.<br />
</MacWindow>

nodectl will now rejoin the network clusters.