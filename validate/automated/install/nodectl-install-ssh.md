---
title: New Install - Handle SSH Keys
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
 - Heztner
:::

### Disable root

With the successful completion of our connection tests, we are assured we are able to access our Node via our `nodeadmin` users.  We can now safely allow nodectl to disable the root user's remote access.  

We will only use the root user by connecting through `nodeadmin` and then switching to the `root` user as necessary via the `sudo` command.

:::danger Advanced Concerns
Do not worry if some of this information seems advanced.  At the end of the day, you should not need to access the `root` user to run your Node.  

In the event you have any issues, you can access Constellation Network's Discord channel, to request help and advice.

We are confident you can simply follow the instructions to build your Node as recommended.
:::

We should say <kbd>y</kbd> at the prompt below.

nodectl will default to <kbd>n</kbd> for the protection of user, as this is an advanced security measure. We will **not** accept the default option.

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
This is reversible if desired via the [enable_root_ssh](/validate/automated/nodectl-commands#enable_root_ssh) command.
:::

nodectl will begin the process of disabling the special account's SSH access, and will ask for some confirmations.  

<MacWindow>
Disabling [SSH] for root, ubuntu and/or admin.. disable<br />
</MacWindow>

### Password Authentication

In most situations, especially on cloud provider VPS systems where SSH access is the main way to access your VPS, you should disable password authentication.  This will help prevent against brut force password attacks and other attack vectors.

Recommendation is to choose `y` here.

<MacWindow>
Recommended  During the installation SSH was chosen.<br />
Do you want to disable username/password based authentication on this Node at the Operating System level to improve security?<br />
<br />
Disable username/password access? [y]:<br />
</MacWindow>

### Next up access testing

In the next section, we will pause to verify some access tests before continuing the installation.