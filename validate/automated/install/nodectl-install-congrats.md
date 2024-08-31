---
title: New Install - Post Installation Instructions
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

Now that nodectl has completed the process of creating your Node for you.  We have some post instructions to handle.

### node ID

nodectl will access your new or migrated `p12` private key file and attempt to extract your Node's `nodeid` from the file. 

The `nodeid` can be considered your Node's **`public`** key.  It is public information, and we do not have to worry about exposing it.

Write this nodeid down for your own reference; however, you will be able to derive your nodeid using dedicated commands at any time later on, via the [`sudo nodectl nodeid`](/validate/automated/nodectl-commands#nodeid) command.

The `nodeid` results will be presented to you as part of the final steps of the installation process.

:::info Invalid
The IP address and nodeid presented below are for demonstration purposes only and are not valid nor correctly formatted.
:::

### Node Details

nodectl will now display the details about the Node and the Hypergraph or metagraph your Node is setup to handle.
<MacWindow>
  HyperGraph/metagraph .......................... hypergraph<br />
  Environment ................................... mainnet<br />
  P12 Location .................................. /home/nodeadmin/tessellation<br />
  P12 Name ...................................... nodeadmin-node.p12<br />
  P12 Alias ..................................... nodeadmin-alias<br />
</MacWindow>

Compare these items to your [notes](/validate/resources/nodectlNote) and update as necessary.

### Seed list

The seed list is the access list that determines which Nodes are allowed on MainNet, IntegrationNet, TestNet, or the metagraph you are attempting to configure this Node for.  This is a secondary authentication mechanism complimenting the PRO score implementation.

If your nodeid is not on the seed list, it will be denied access.

nodectl will issue the [`sudo nodectl check_seedlist`](/validate/automated/nodectl-commands#check_seedlist) command, to confirm whether or not your Node is able to participate on the Hypergraph at the current time.

<MacWindow>
 ----- * CHECK SEED LIST REQUEST * ------<br /> 
<br /> 
NODE ID<br /> 
11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br /> 
NODE ID FOUND ON SEED LIST<br /> 
<b>False</b><br /> 
</MacWindow>

In this example you will see that this particular Node's `nodeid` is not able to participate on the Hypergraph/metagraph. This is because it was not found on the current `seed list`. 

Unless you are migrating an existing authenticated p12 file to your new Node, you will most likely see a `False` here.

```
NODE ID FOUND ON SEED LIST
False
```

### Contact Constellation Network Admins

We will now be presented with final instructional steps.

<MacWindow>
Please review the next Steps in order to gain access to the hypergraph -> mainnet environment.<br />
<br />
If your Node is found as False on the check seed list(s) output above, you will need to submit your NodeID for acceptance.<br />
<br />
Please follow the instructions below, as indicated.<br />
<br />
1) Submit your NodeID to Constellation Admins.<br />
2) Collateralize your Node.<br />
3) sudo nodectl check_seedlist -p dag-l0<br />
4) sudo nodectl restart -p all<br />
5) Log out and log back in with as False with your new False password.<br />
<br />
enod!<br />
<br />
Total installation time:  1.229 minutes<br /> 
</MacWindow>

Now that our Node installation is complete; as stated in our final instructions on our Node, we need to make sure we have:

- Communicated our newly created `nodeid` to Constellation Network Admins (most likely method is through the Constellation Network Lattice Support or Discord channels).
- We will need to collateralize our Node with the necessary amount of **`$DAG`** or the token of your metagraph, based on their requirements.

Once we have completed these two important steps, we will wait for the `seed list` to be updated, obtain a `True` from the [check_seedlist](/validate/automated/nodectl-commands#check_seedlist) command, and then we can [restart](/validate/automated/nodectl-commands#restart) our Node to join the network.

### logout and login

#### Exit the Ubuntu user account.

At this time, we can exit the terminal session that has us connected to our now fully setup Node.  Since we tested our access in previous steps of this installation documentation, we will exit and re-connect as our Node as our `nodeadmin` user.  

When we log in as `nodeadmin`, our Node's prompt should change.  Our `ubuntu` and `root` users will no longer be accessible.

<MacWindow>
nodeadmin@Constellation-Node:~$ 
</MacWindow>

:::note Note
`ubuntu` and `root` user's access can be re-enabled at anytime
:::

## CONGRATULATIONS
You now have a Constellation Network validator Node!

### Command Reference

While we wait for your Node to be accepted for access (via the seed list), we recommend that you review all the available features and commands of nodectl, via the [command reference](/validate/automated/nodectl-commands) documentation.

Also the Constellation Network Documentation Hub is loaded with information to help educate your to be a better and well informed "Datapreneur". 
