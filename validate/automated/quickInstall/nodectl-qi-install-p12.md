---
title: Quick Install - P12/User
sidebar_label: New Quick Install - P12/User
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

Since we did not supply a [p12](/validate/validator/p12) file for import/migration, and we did not supply a specific user/password and p12 file/passphrase, nodectl will create the defaults and prompt us to enter a password and passphrase for those two elements.

<MacWindow>
  Chosen hypergraph/metagraph ................... mainnet<br />
  Generated Admin user .......................... nodeadmin<br />
  Chosen p12 file name .......................... nodeadmin-node.p12<br />
  Generated P12 alias ........................... nodeadmin-alias<br />
</MacWindow>

### User password

Next we will be request to enter our `user` password.  

This is the password that we will use to access the user account on the Node that will administer the Node.  

You should write this password down in a safe place with a [note](/validate/resources/nodectl-notes) that states that we will use this password any time we issue a `nodectl` command, preceded by the `sudo` command (super user do). The `sudo` command will challenge us for our password before allowing the `nodeadmin` user to access `root` (administrative) privileges on your Node.

You will **not** see the password or `*` while entering your password.  This is a Linux level security feature.

<MacWindow>
  We need to create a password for nodeadmin user:<br />
>> Please enter a 10 character minimum<br />
>> password for nodeadmin:<br /> 
</MacWindow>

We will confirm the password.

<MacWindow>
>> Please confirm nodeadmin's password: <br /> 
</MacWindow>

### P12 passphrase

Next, we will be requested to enter in the passphrase for our **p12** file.  Again, you should write this down in a [secure place](/validate/resources/nodectl-notes).  

This is the most important passphrase you will save.  In your [notes](/validate/resources/nodectl-notes), state that this is the passphrase that nodectl will use to join the cluster, sign validation proofs, and access the hot wallet associated with the Node.

<MacWindow>
We need to create passphrase for our p12 file.<br />
>> Please enter a 10 character minimum<br />
>> passphrase for your p12 private key:<br />
</MacWindow>

We will confirm the passphrase.

<MacWindow>
>> Please confirm your p12 private key's passphrase:<br />
</MacWindow>


        


