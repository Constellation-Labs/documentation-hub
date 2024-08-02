---
title: New Install - Test SSH Access
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

### Test `nodeadmin` access

At this point in the installation process, we want to make sure our VPS access is properly setup before continuing. We will quickly access our Node using our newly created `nodeadmin` account.

#### DO NOT CLOSE THE INSTALLER TERMINAL WINDOW

You should now copy the same configuration you used to access your instance initially (which opened our installation shell); however, using our `nodeadmin` user instead.

*We are simply testing that we have access to our Node via the new `nodeadmin` account, before we continue to lock down our Node for better security.*

### Windows Test
For Windows we will update our PuTTy configuration to use `nodeadmin` instead of the `ubuntu` user we initially setup, as our login user. 

Reminder how to do this is for **<kbd>[windows](/validate/resources/accessWin)</kbd>**.

### Macintosh Test
For Mac we will open a terminal window and change the `ssh` command to use `nodeadmin` instead of `ubuntu`.

Reminder how to do this for **<kbd>[mac](/validate/resources/accessMac)</kbd>**.

### Continue

Now that we are comfortable that we have access to our Node via the **`nodeadmin`** user account.  We can close the **test** `nodeadmin` terminal window (that we opened in this step). 

Return to our original terminal which has the installer running, as the `ubuntu` user.  Since we already started the installation as the `ubuntu` user, we need to continue with this user.