---
title: New Install - Installation User Setup
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

### Setup Node Admin User

At this point in the installation progress, your screen should have cleared and the next section started, which is the user setup.

nodectl will detect the current user logged in. In our example using the Ubuntu distribution on AWS, the user called `ubuntu`.  

Avoid using commonly known usernames on your future Node. Hackers often target these first for potential access vulnerabilities. A simple name change adds a small but effective layer of security for your Node, that directly faces the Internet.  

If you are an advanced user and want to keep the default usernames, it is advised to password protect the userid before you move your Node onto the cluster(s).

We will create a non-commonly known user now; however, we will continue the installation with the `ubuntu` user.  

At the end of the install, we will switch over to our new Node administrator account; however, we will continue to use our `ubuntu` user until instructed otherwise.

:::danger Reminder 
Your default user will depend on your service provider and/or your Linux distribution of choice. 

Most Commonly:
  - root
  - admin
  - ubuntu
:::

nodectl will recommend that you use `nodeadmin` as your default Node Administrator.  This will force us away from a commonly known usernames such as `ubuntu` or `admin`.

### Commonly known username
Since this documentation is publicly available and nodectl is open sourced, the use of `nodeadmin` can also be deemed a commonly used username; however, properly securing down your Node as recommended by this documentation, should provide proper security to make the use of `nodeadmin` a very minimal security risk.  

Recommendation: use `nodeadmin`.

### Create user

We can hit the <kbd>enter</kbd> key to accept `nodeadmin` as our default, or input `nodeadmin` (*or a username of your choice*) and then <kbd>enter</kbd> to continue.

<MacWindow>
  ========================================<br />
  =              CREATE USER             =<br />
  ========================================<br />
  detecting user ................................ ubuntu<br />                                                          
<br />
  This ubuntu user is dangerous.<br />
  <br />
  You should create a non-commonly known user to administer your Node.<br />
<br />
  It is recommended to use nodeadmin as the Node Administrator.<br />
<br />
  This is recommended because it will help during troubleshooting, administering, etc. as you follow any<br />
  instructional documentation or tutorials.<br />
<br />
  Please enter in the new user you would like to<br />
  create [nodeadmin]:<br />
  <br /> 
</MacWindow>



### Setup password

Our `nodeadmin` user (or whichever user you decided to create - heretofore `nodeadmin`) will require a password.  

This password will be used to enter super user mode (sudo). During each initial nodectl request, the sudo password will be required.  Just like being asked for your Administrative password on Windows or Apple, you will need to enter it when using nodectl.

Since nodectl has the power to alter your VPS's operating system, we must use `sudo` before we call it each time.  After the initial call to use `nodectl` with `sudo` you will not need to re-enter the administrative (sudo) password again, until it times out.

The installation will now ask you to enter a new password.

The nodectl installer will offer you some information (similar to these comments) about the various password, keyphrase, or passphrases `[passphrases]` that will be required to run your Node. 

:::danger Important
You must secure this password/passphrase in a safe secure location and/or remember them.  

Your passphrase will offer access to your Node and the VPS your Node runs on.  

**Unauthorized access can be potentially crippling to the operations of your Node; as well as, may have financial consequences because your Node will hold a hot wallet.**

*This particular passphrase/password does not offer access to your `p12` wallet, which will be discussed later in this documentation.*
:::

<MacWindow>
  We will end of up with 3 separate unique<br /> 
  passphrases.<br /> 
<br /> 
  1 SSH KEY passphrase/keyphrase - already created<br /> 
<br /> 
  <b>2 User nodeadmin's VPS admin password </b><br /> 
<br /> 
  3 P12 Private key passphrase/keyphrase<br /> 
<br /> 
  You will not see your password as you type it, this is for security purposes.<br /> 
  Your password should contain capital & lowercase letters, numbers, special characters, but<br /> 
  no single or double quotes.<br /> 
<br /> 
</MacWindow>

We will create a password of at least **`10`** characters in length.  You can use whatever characters you desire. However, caution should be exercised when attempting to use of `section sign` characters as nodectl may not work properly with them.

When creating your passphrase, avoid use of:
 - periods
 - double `//` 
 - section signs
 - double quotes
 - single quotes

:::note Important
You will **not** see any characters while you enter and confirm the password.  This is a feature of the operating system done for security reasons.
:::

We enter our newly formulated password.

<MacWindow>
  This password should be 10 in length.<br /> 
<br /> 
  This password will allow access to enter sudo (superuser do).<br /> 
<br /> 
  Please create a unique password and write it down!<br /> 
<br /> 
  It is recommended to save this password to a secure location and do NOT<br /> 
  forget it! If choosing to write it down, label in your notes:<br /> 
  "nodeadmin user password to access sudo (administrator) rights on the Node."<br /> 
<br /> 
>> Please enter a 10 character minimum<br /> 
>> password for nodeadmin: <br /> 
</MacWindow>

Confirm your password.

<MacWindow>
>> Please confirm nodeadmin's password: 
</MacWindow>

Your user will be created and added to the necessary groups for use on your future Node.

<MacWindow>
Adding new user [nodeadmin].................... complete<br />
Adding new user [nodeadmin] to sudo group...... complete<br />
</MacWindow>