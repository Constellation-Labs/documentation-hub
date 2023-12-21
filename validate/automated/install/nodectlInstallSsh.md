---
title: New Install - Handle SSH Keys
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

If you followed the recommended [setup](/validate/) instructions to build your VPS to run your Node on, you should have gone through the process of creating [ssh keys](/validate/validator/ssh-keys).

Unless you are running your Node in a specialized way (advanced users) that require the use a username/password method of accessing your future Node, we recommend the use of SSH keys.  

### Choose authentication method

We will choose the default option `y` (or just hit the <kbd>enter</kbd> key).

<MacWindow>
  ========================================<br /> 
  =                SSH KEYS              =<br /> 
  ========================================<br /> 
  There are 2 main ways to connection to VPS or bare metal<br /> 
  servers.<br /> 
<br /> 
  1 SSH KEY passphrase/keyphrase<br /> 
  2 VPS admin user's password<br /> 
<br /> 
  IT IS HIGHLY RECOMMENDED YOU SETUP THIS VPS WITH SSH KEYS<br /> 
<br /> 
  If you followed the provided instructions and are not an advanced user, you most likely setup<br /> 
  your VPS with SSH key pairs.<br /> 
<br /> 
  Did you use an SSH key pair? [y]: y<br />  
<br /> 
</MacWindow>

nodectl will locate the SSH keys you are using and transfer it over to your new administrative (`nodeadmin`) user's account, to allow access; as well as, update necessary files.

<MacWindow>
Transferring SSH key to [nodeadmin] ........... completed    <br /> 
</MacWindow>

### Disable common accounts

To add more security to our future Node, we will now be offered the chance to disable remote access via the user accounts that we will no longer be using.

Also, we will disable the root user account's ability to remotely access our Node.  The root user should only be used sparingly for full access necessities.  We will access the root user; as needed, via the `nodeadmin` account.

Once completed, we will only access our Node from the `nodadmin` account.  This is a good security measure.

:::note 
The Node in this tutorial is being created using an AWS instance in the cloud.  AWS uses a commonly known `ubuntu` user for initial access. 

nodectl attempts to be as smart as possible to identify default accounts from other cloud providers; such as:
 
 - Digital Ocean
 - Google Cloud Provider (GCP)
:::

We will enter say <kbd>y</kbd> (or hit <kbd>enter</kbd> key), for the next question involving special accounts.

<MacWindow>
  <br />  
  The root user should not have access via SSH nor should AWS's default
  ubuntu user or other provider's admin users.<br />  
<br />  
  Access should be disabled so that only the Node
  Administrator has access to this VPS with the nodeadmin user.<br />  
<br /> 
  This is recommended.<br /> 
<br /> 
  Disable SSH access to these root and special accounts? [y]: y<br /> 
<br />  
</MacWindow>

nodectl will disable these accounts.  

:::note
This is reversible if desired via the [enable_root_ssh](/validate/automated/nodectlCommands#enable_root_ssh) command.
:::

nodectl will begin the process of disabling the special account's SSH access, and will ask for some confirmations.  

<MacWindow>
Disabling [SSH] for root, ubuntu and/or admin.. disable<br />
</MacWindow>

### Test

In the next section, we will pause to verify some access tests before continuing the installation.