---
title: New Install - Disable Root Access
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

<MacWindow>
WARNING  This is an administrative feature!<br />
<br />
This feature will disable root  SSH access for this server (VPS, Bare Metal). It is independent of nodectl.<br />
<br />
Make sure your non-root user access is available before you exit the current terminal shell!  (keep open and connected until fully tested and verified.)<br />
<br />
Are you SURE you want to continue? [n]: y<br />
</MacWindow>

The SSH actions will complete.

<MacWindow>
Reloading [SSH] daemon......................... complete  <br />                                                              
  Disabling [SSH] for root, ubuntu and/or admin.. complete  <br />                                                               
</MacWindow>

### Password Authentication
It is recommended again to disable password authentication of a VPS that is directly connected to the Internet.  We will only rely on the SSH key authentication method that we setup before this step.

We will hit <kbd>y</kbd> and <kbd>enter</kbd>.

<MacWindow>
During the installation SSH was chosen.<br />
Do you want [ recommended ] to disable username/password based authentication on this Node at the Operating System level to improve security?<br />
Confirm: [n]: y<br />
</MacWindow>

We will hit <kbd>y</kbd> and <kbd>enter</kbd>.

<MacWindow>
  WARNING  This is an administrative feature!<br /> 
<br /> 
  This feature will disable root  SSH  access for this server (VPS,
  Bare Metal). It is independent of nodectl. <br /> 
<br /> 
  Make sure your non-root user access is available before you exit
  the current terminal shell!  (keep open and connected until fully tested and verified.)<br /> 
<br /> 
  Are you SURE you want to continue? [n]: y<br /> 
<br /> 
</MacWindow>

nodectl will handle the automation to complete the **SSH** section of the installation.