---
title: upgrading - Rejoin Part 2
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Upgrade Tessellation with nodectl"
  />
</head>

## Re-join the layer1

nodectl will now attempt to join the `dag-l1`.  

This [upgrade](/validate/automated/nodectlCommands#upgrade) (document/manual) we did **not** choose the `-w` ([watch](/validate/automated/nodectlCommands#upgrade)) mode.  nodectl will not wait for all peers to connect, as it is not necessary to complete the upgrade.

### Check seed list again and prepare the Node

<MacWindow>
Start request initiated [node_l1] ............. running <br />
<br />
----- * Check Seed List Request * ------<br />
<br />
Node found on Seed List ....................... True<br />
building environment .......................... complete <br />
Updating services file ........................ complete <br />
Start request initiated [node_l1] ............. complete  <br />  
Fetching Status [dag-l1] ...................... <br />                         
</MacWindow>

### Show Status

<MacWindow>
PROFILE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE<br />
dag-l1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active (running)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP<br />    
9010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9012<br /> 
CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK  <br /> 
1702307070372&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SessionNotFound&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReadyToJoin<br /> 
CLUSTER START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM START<br /> 
2023-12-11-15:04:30Z&nbsp;&nbsp;n/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-12-06 11:46:32<br /> 
CLUSTER UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM UPTIME<br />
~9D 3H 38M 9S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~14D 6H 58M 1S<br /> 
NODE ID<br />  
12345...12345 
</MacWindow>

### Identify if we are ready to join

nodectl identified that we are in `ReadyToJoin` state, so we can initiate the join for `layer1`.

<MacWindow>
Checking for [ReadyToJoin] state............... ReadyToJoin<br />
Please wait while [dag-l1] attempts to join the network.<br />
NOTE  ml0 or ml1 networks will not join the Hypergraph until its gl0 or ml0 linked profile changes to Ready state, this could take up to a few minutes.<br />
</MacWindow>

### Prepare join process

The same process used to join layer0 will be initialized again, and nodectl starts the service that allows us to join the `layer1`.

<MacWindow>
  ----- * Check Seed List Request * ------<br />
<br />
Node found on Seed List ....................... True<br />
building environment .......................... complete<br />
Updating services file ........................ complete<br />
Start request initiated [node_l1] ............. complete<br />
</MacWindow>

### Select our source peer

The join process will begin. A source Node will be selected.

<MacWindow>
Waiting on profile dag-l0 state to be Ready before initiating Metagraph join.<br />
Joining with peer [ed6ef751...cf21fc37] ....... 1.1.1.2<br />
</MacWindow>

### Verify layer0

The Node will make sure the `dag-l0` or layer0 is in `Ready` state.  If not in `Ready` state, the process will not continue.

<MacWindow>
Current Found State [dag-l0] .................. Ready<br />
</MacWindow>

### Begin the join

The Node will initiate the join to layer1.

<MacWindow>
Waiting on profile dag-l0 state to be Ready before initiating Metagraph join.<br />
Joining with peer [ed6ef751...cf21fc37] ....... 1.1.1.2<br />
Current Found State [dag-l0] .................. Ready<br />
Join cluster status [dag-l1] .................. Preparing<br />
Max Timer  300 seconds<br />
Peers: 188 Connected: 3 State: Ready Timer: 0<br />
Join process complete ......................... done <br />
IMPORTANT  It is ok that the peer count &gt; cluster peer count because watch mode was not chosen by upgrade.<br />
</MacWindow>

### Show Status Again

nodectl will check the `status` of your Node.

<MacWindow>
PROFILE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN STATE<br />
dag-l1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active (running)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ready<br /> 
PUBLIC API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P2P API TCP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLI API TCP<br />    
9010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9012<br /> 
CURRENT SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOUND SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON NETWORK  <br /> 
1702306944446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1702306944446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True<br /> 
CLUSTER START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM START<br /> 
2023-12-11-15:02:24Z&nbsp;&nbsp;&nbsp;2023-12-06 11:46:32&nbsp;&nbsp;&nbsp;2023-12-06 11:46:32 <br /> 
CLUSTER UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE UPTIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SYSTEM UPTIME<br />
~9D 3H 38M 9S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~1M 20S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~14D 6H 59M 31S<br /> 
NODE ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IN CONSENSUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />  
12345...12345&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> 
</MacWindow>