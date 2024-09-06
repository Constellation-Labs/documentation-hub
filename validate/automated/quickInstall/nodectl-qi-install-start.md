---
title: Quick Install - Start
sidebar_label: New Quick Install - Start 
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

Begin the nodectl quick installation installation.

## Using all default values

The `--quick-install` option will not ask any questions to the Node Operator except for a unique [p12](/validate/validator/p12) passphrase and unique password for the user account that will be created during the installation.  The user account will be used to administer your Node after-the-fact.

<MacWindow>
ubuntu@ip-172-31-23-246:~$ sudo nodectl install --quick-install
</MacWindow>

The values your Node will obtain from a default installation:
- username: `nodeadmin`
- p12 keystore name: `nodeadmin.p12`
- p12 keystore alias: `nodeadmin-alias`
- p12 keystore location: `/home/nodeadmin/tessellation`

## Using custom values

In the event you do not want to use the default values, you can provide the values before performing the `--quick-install` at the command line.

In this example, we will add our own username, p12 name, p12 alias, and supply our password and passphrase. 

You can find all the available options [here](/validate/automated/nodectl-commands#install).

```
sudo nodectl install --quick-install --username bob --user-password abc123!@#abc123 --p12-name acme-industries.12 --p12-passphrase efg345$%^efg345 --p12-alias acme-industries-alias 
```
<MacWindow>
ubuntu@ip-172-31-23-246:~$ sudo nodectl install --quick-install --username bob --user-password abc123!@#abc123 --p12-name acme-industries.12 --p12-passphrase efg345$%^efg345 --p12-alias acme-industries-alias 
</MacWindow>

Once we hit enter, the command 👆 will tell nodectl to ingest the options for us and setup our Node replacing the default values with the provided values.




