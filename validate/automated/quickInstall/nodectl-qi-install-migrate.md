---
title: Quick Install - Migration 
sidebar_label: New Quick Install - Migration
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

Are we importing an existing [p12](/validate/validator/p12) to use with this installation?  If you do not know, there is a high probability you are not migrating in an existing p12 file and you will say `n` here.

Since we did not supply a `--user` option, nodectl will assume `nodeadmin` as our administrative user on the Node.

<MacWindow>
Chosen hypergraph/metagraph ................... mainnet<br />
  Generated Admin user .......................... nodeadmin<br />
  Are you migrating an existing p12 private key to this Node? [n]:<br />
</MacWindow>

### Are we migrating a P12? 

If you are **not** migrating a p12 and said `n` 👆 you can skip to the next section of the documentation.

### Migrate a P12
If you chose `y` to the question 👆 above.

We should have uploaded a p12 file to our Node prior to starting the installation.  

:::info
To upload your existing p12, you can follow:

[p12 restore document using a Mac](/validate/resources/p12-backup-mac#restore-p12-file)

[p12 restore document using a Windows](/validate/resources/p12-backup-win#restoring-your-p12)

*You will need to restart the installation, if this step was not completed prior to commencement of the `--quick-install`.*
:::

nodectl will search for the p12 files on the VPS and offer you a menu of choices.  You may also manually enter or the p12 if not found.  

In our example from above we are **not** migrating a file, so a new p12 will be created for us, and the 👇 menu will not appear. 

<MacWindow>
  1) /home/ubuntu/myp12file.p12  <br />        
  2) input manual entry<br />
<br />
  KEY PRESS an option<br />
</MacWindow>

If you choose `myp12file.p12` (as in this example), nodectl will request the passphrase for the myp12file.p12 and continue the installation.  

nodectl will migrate the file to the proper location to allow nodectl to properly access the p12, when necessary.