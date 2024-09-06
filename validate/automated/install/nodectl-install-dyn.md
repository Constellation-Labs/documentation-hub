---
title: New Install - Dynamic Element Installation
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

nodectl will now "warn" you that it will default to the Constellation Network dual layer configuration.

Your Node will be setup to connect to both the Hypergraph (Constellation's Global Layer0); as well as, Constellation's metagraph (Layer1).  In order to properly participate on Constellation's **MainNet** network, your Node will be required to connect to both.

Do not worry, nodectl will take care of all the technical details for you!

You can read the informational notice from the installer and press any key to continue.

<MacWindow>
IMPORTANT <br />
<br />
nodectl installation will install the new Node with default network variables<br />
<br />
Network Cluster: hypergraph -> mainnet<br />
<br />
After installation is complete, the Node Operator may alter the nodectl configuration to allow connection to the network cluster or metagraph of choice via the command:<br />
<br />
sudo nodectl configure<br />
<br />
Press any key to continue<br />
</MacWindow>

### Create structures

nodectl will being the process of building your Node's internal requirements.

<MacWindow>
Creating [Node] directories.................... running<br />                       
tessellation .................................. complete<br />                    
backups ....................................... complete<br />
uploads ....................................... complete<br />                      
nodectl ....................................... complete<br />
default_layer0 ................................ complete<br />
default_layer1 ................................ complete<br />            
Creating [Node] directories.................... complete<br />
</MacWindow>

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/migrate/nodectl-migrate-import-2); otherwise continue forward.
:::

The screen will clear, and we will be ready to handle our **p12** keystore details.