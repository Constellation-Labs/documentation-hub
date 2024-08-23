---
title: Quick Install - Complete 
sidebar_label: New Quick Install - Complete
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

Now that our Node is completed and built.  The installation was successful... 

**A congratulations is in order**!

<MacWindow> 
------ * INSTALLATION COMPLETE * -------<br />
<br />
CONGRATULATIONS!  <br />
Below you will find your nodeid which was derived from your p12 file<br />
</MacWindow>

We will be supplied with the final pieces to the puzzle before we can join the cluster.  We will supply this information to a Team Lead or Administrator on our Official Discord channel.

<MacWindow>
 Please report this nodeid to administrative staff to gain access to the network via the access list permissions.<br />
</MacWindow>

Details about our Node will be presented for us to write down in our [notes](/validate/resources/nodectl-notes).

<MacWindow>
 HyperGraph/metagraph .......................... hypergraph<br />
  Environment ................................... mainnet<br />
  P12 Location .................................. /home/nodeadmin/tessellation<br />
  P12 Name ...................................... nodeadmin-node.p12<br />
  P12 Alias ..................................... nodeadmin-alias<br />
</MacWindow>

nodectl will then present you with your nodeid, this is your `public key` and is required to join the `seed list` that will allow us to access the cluster from our Node and bring our participation on the network cluster!

Depending on whether or not you supplied a p12 for migration that was already on the seed list, you will most likely show a red `False` for the `NODE ID FOUND ON SEED LIST` value.

This is OK because we just built a brand new p12 file and need to submit it for access.

<MacWindow>
----- * CHECK SEED LIST REQUEST * ------ <br />
<br />
NODE ID<br />
11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br />
NODE ID FOUND ON SEED LIST<br />
False  <br />
<br />
Please review the next Steps in order to gain access to the hypergraph -> mainnet environment.<br />
<br />
If your Node is found as False on the check seed
list(s) output above, you will need to submit your NodeID for acceptance.<br />
</MacWindow>

Some final instructions will be presented that inform you that you will need to submit the nodeid and collateralize your Node prior to being able to participate on the network.  

:::danger TESTNET and INTEGRATIONNET
TestNet and IntegrationNet Node Operators will not use the hot wallet on their Node to obtain rewards.  These Node Operators will need to register with [Lattice](https://lattice.is/dashboard).
:::

<MacWindow>
Please follow the instructions below, as indicated<br />
<br />
1) Submit your NodeID to Constellation Admins.<br />
2) Collateralize your Node.<br />
3) sudo nodectl check_seedlist -p dag-l0<br />
4) sudo nodectl restart -p all<br />
5) Log out and log back in with as nodeadmin with your new nodeadmin password.<br />
<br />
enod!<br />
<br />
Total installation time:  1.823 minutes<br />
</MacWindow> 

# CONGRATULATIONS
Your Node installation is complete!