---
title: New Install - Migrate p12
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
    content="nodectl installation of new Node"
  />
</head>

### Explanation

Are we migrating an existing P12 file?  

We have these possiblities:
1. We do not have a p12 private key store already, and need to create one.
1. We have a p12 private key store created already, prior to installation.
1. We need to rebuild their Node from scratch; however, they have a p12 file that is already accepted and allowed access to the HyperGraph or Metagraph, we do not want a new p12 file.

### Are we migrating a p12?

#### Non-interactive steps accomplished

- nodectl set our environment, per our choice in the previous step.
- nodectl checks that VPS has the proper permissions set to allow for a proper installation.
- nodectl determines our external IP address that allows this VPS to access the Internet.

:::note
The IP address `113.113.113.113` is a fake IP used for example purposes only
:::
<MacWindow>
 Node environment set .......................... mainnet<br />                                                         
  Check permissions & versioning ................ complete<br />                                                                      
  Obtaining External IP ......................... 113.113.113.113<br />                                                                
  Are you migrating over an existing p12 private key? [n]:<br />
</MacWindow>

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/migrate/nodectlMigrateImport); otherwise continue forward.
:::

 Since this is a brand new installation, we will choose `n` (or just hit enter to accept the default) when requested to migrate over an existing `p12` file.  
 
 The `p12` file is your private key file used to store elements necessary to authenticate to the MainNet and also your Node's wallet information.

```
Are you migrating over an existing p12 private key? [n]: n
```