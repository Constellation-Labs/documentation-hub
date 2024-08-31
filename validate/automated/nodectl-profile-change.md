---
title: Profile Change
hide_table_of_contents: false
---
<intro-end />

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>understanding nodectl configuration file</title>
  <meta
    name="description"
    content="an explanation of nodectl's config.yaml file."
  />
</head>

## Introduction

The nodectl utility uses profiles to learn how to connect to various Hypergraph or metagraph clusters.  Each profile will define all the necessary elements to help your Node connect properly. 

This document will offer a simple guide on how to change from your current profile (generally the default profile used during installation) to a new predefined profile.

:::info Understanding
This document does not cover the detailed explanation of the various components of the profiles section; however, you can access the [nodectl configuration](/validate/automated/nodectl-config) document to review a detailed explanation of the [profile](/validate/automated/nodectl-config#profiles) section.
:::

## Change Profiles

:::danger IMPORTANT
This procedure will change your profile configuration settings, replacing the existing predefined profile with a new predefined profile.  
:::

## Step by Step

### Assumptions

You have a Node up and running with an existing configuration.

### Before we begin

The ip address and pem file are fictitious, use your own Node IP and credentials.

:::warning Important
During the process of building a new profile, the configuration validator will run against your new configuration several times prior to completing the build.  You may see a **`CONFIGURATION DID NOT VALIDATE`** message; however, you can **safely** ignore this because nodectl will correct the validation error before the build process is completed.  

nodectl will show the following message below the validation issues...
<MacWindow>
Issue found can safely be ignored for new configurations.
</MacWindow>
:::

### Access Your Node

Log into your Node via a remote session:
- Remote access via [Mac](/validate/resources/accessMac)
- Remote access via [Windows](/validate/resources/accessWin)

In our example, we connect from a Mac into our Node.  This is done by requesting a `ssh` session (secure shell) into your Node that is located at the Internet Address (IP) of `113.113.113.113` using our SSH private key called `my-ssh-pem-file`.  

*Use your own ip address and ssh key pair here.*

<MacWindow>
netmet@netmet-MacBook-Pro% ssh ubuntu@113.113.113.113 -i ~/.ssh/my-ssh-pem-file<br />
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.19.0-1025-aws x86_64)<br />
<br />
 * Documentation:  https://help.ubuntu.com<br />
 * Management:     https://landscape.canonical.com<br />
 * Support:        https://ubuntu.com/advantage<br />
<br />
  System information as of Sat Jul  8 12:43:58 UTC 2023<br />
<br />
  System load:  10.0              Processes:             144<br />
  Usage of /:   4.9% of 77.35GB   Users logged in:       1<br />
  Memory usage: 7%                IPv4 address for eth0: 172.31.25.243<br />
  Swap usage:   0%<br />
<br />
 * Ubuntu Pro delivers the most comprehensive open source security and<br />
   compliance features.
<br />
   https://ubuntu.com/aws/pro<br />
<br />
Expanded Security Maintenance for Applications is not enabled.<br />
<br />
0 updates can be applied immediately.<br />
<br />
Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status<br />
<br />
Last login: Sat Jul  8 12:29:17 2023 from 73.138.237.214<br />
nodeadmin@Constellation-Node:~$
</MacWindow>

### Start Configurator

Start the configurator module.
```
sudo nodectl configure
```

Since we are using `sudo`, we will be challenged for our nodeadmin user password.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl configure<br />
[sudo] password for nodeadmin:
</MacWindow>

### Advanced Mode

Until we are more comfortable with the configurator and all the particular settings of the configurator, we should **not** use advanced mode.  We will choose no here 👇 ( enter <kbd>enter</kbd> to accept the default value or <kbd>n</kbd> then <kbd>enter</kbd> )

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =                NODECTL               =<br />
  =           CONFIGURATION TOOL         =<br />
  ========================================<br />
   Code Name: Princess Warrior<br />
<br />
  Welcome to the nodectl configuration tool.<br />
<br />
  This feature of nodectl will help you initialize a new configuration or update/edit an
  existing configuration file.<br />
<br />
  nodectl will attempt to migrate/integrate your configurations changes in order
  to ensure a smooth transition and operations of your Node via
  nodectl. <br />
<br />
  Detailed Mode: will walk you through all steps/questions; with detailed
  explanations of each element of the configuration.<br />
<br />
  Advanced Mode: will be non-verbose, with no walk through explanations, only
  necessary questions.<br />
<br />
  The configuration tool does only a limited amount of data
  type or value verification. After the configuration tool creates a new configuration or edits an
  existing configuration, it will attempt to verify the end resulting
  configuration.<br />
<br />
  You can also choose the -a option at the command line to enter advanced
  mode directly.<br />
<br />
  Continue in advanced mode? [n]: n<br /> 
</MacWindow>

### Main Menu

Our goal in this procedure (documentation) is to **change** profiles, so we want to create a new profile and remove the old, we can do this in one step by choosing <kbd>n</kbd> for `new` here.   You will **not** hit enter, only the <kbd>n</kbd> key.

<MacWindow>
  ========================================<br />
  =               MAIN MENU              =<br />
  ========================================<br />
<br />
  N)ew Configuration<br />
  E)dit Existing Configuration<br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

### Backup

Before continuing, nodectl will backup your existing configuration file `cn-config.yaml` and offer you information on where it is located.  

By default your configuration will use the `/var/tessellation/backups` directory.  This is where you will find copy of your configuration file with the current system date and time (UTC) appended to the file name. nodectl can now make changes with the confidence that a backup of what was there previous is available if needed.

You can review the information on the screen and press any key to continue.

### Configuration Type

The next screen presented will offer information about `predefined` or `custom` profiles.

We will choose <kbd>p</kbd> for predefined.

<MacWindow>
  ========================================<br />
  =           CONFIGURATION TYPE         =<br />
  ========================================<br />
<br />
  P)redefined Configuration<br />
  M)anual Configuration<br />
  R)eturn Main Menu<br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

### Passphrase Options

As we begin the creation of a new profile (changing our profile), nodectl will ask if you want to keep your passphrase visible in the configuration.  It will also offer you pros and cons, you can make your determination here.

:::success Recommended
Since the security addition is minor for hiding your passphrase in the configuration, it is recommended to choose <kbd>y</kbd> here.

Also, the [auto restart and upgrade](/validate/automated/nodectl-autorestart) feature will **not** work unless the passphrase is visible in the configuration.
:::

We can choose <kbd>y</kbd> and <kbd>enter</kbd> here.

<MacWindow>
  Keep passphrase visible in configuration? [y]: y
</MacWindow>

### Configuration Options

We can now choose the predefined configuration of our choice.  In this example we will choose IntegrationNet. By pressing <kbd>2</kbd>.

<MacWindow>
  ========================================<br />
  =              OPTIONS MENU            =<br />
  ========================================<br />
<br />
  1) Constellation MainNet<br />
  2) Constellation IntegrationNet<br />
  3) Constellation TestNet<br />
  R) Return to Main Menu <br />
  Q) Quit <br /> 
</MacWindow>

### Security Details

Since version 2 of nodectl, you are now able to define a [p12](/validate/resources/password#private-key) per profile.  This will allow you to use a different p12 file independent of the profile on a single Node.

In most situations you will want to use the same p12 file for all profiles.  

We will choose <kbd>y</kbd> and <kbd>enter</kbd> here.

<MacWindow>
 Set ALL profile p12 wallets to Global? [y]: y
 </MacWindow>

 ### Global Passphrase

 Since we are changing our profile verses creating a brand new profile from scratch.  nodectl will identify that there was a p12 section already filled out from your old configuration.  nodectl will ask if you would like to preserve the settings.

 We will choose <kbd>y</kbd> and <kbd>enter</kbd> here.

:::note Alternative
You can choose <kbd>n</kbd> if you want to change or provide new p12 information.
:::

 <MacWindow>
   Preserve Global p12 details?  [n]: y
</MacWindow>

### New Profile Build

nodectl will start the process of building your new profile.

:::warning
nodectl will validate your configuration and offer information about possible issues, or validate successfully.  Regardless, nodectl will continue the process of building out your profile.  If you have errors, unexpected results will ensue.
:::

<MacWindow>
  Create Service file [intnet-l0] ............... running<br />                                      
  Create Service file [intnet-l1] ............... running<br />                                                 
  Create Service file ........................... complete<br />                                               
  Create Service file ........................... complete<br />                                               
</MacWindow>

### Review 

We will be offered the option to review the newly created configuration.  You may choose <kbd>y</kbd> to page through the results or <kbd>n</kbd> to skip this optional step.

<MacWindow>
  Review the created configuration? [y]: 
</MacWindow>

### Old Profiles

:::warning 
You may be presented with a **`CONFIGURATION FILE DID NOT VALIDATE`** message.  

This can be safely ignored.  nodectl will correct the issue prior to completing the new configuration build.

<MacWindow>
Issue found can safely be ignored for new configurations.
</MacWindow>
:::

nodectl will attempt to clean up old profiles that are not found in the configuration `cn-config.yaml` file.

In the event there are **not** old profiles that need to cleaned up, you will not see this message.

If presented to us, we can say <kbd>y</kbd> and <kbd>enter</kbd> here.

<MacWindow>
  Abandoned [dag-l0] profile.................. found<br />               
  Abandoned [dag-l1] profile.................. found<br />                      
  It is recommended to clean up old profiles to:<br />  
    - Avoid conflicts<br />  
    - Avoid undesired Node behavior<br />  
    - Free up disk<br />  
<br />  
  Remove old profiles? [y]: y<br />  
</MacWindow>

If you are making a change to a profile; however, using the **same** profile name, nodectl will check for abandoned snapshots and request that you remove them.  If is highly recommended to remove irrelevant snapshots! If you are not overwriting an existing profile, you will not see this message.

If presented with this message, we can say <kbd>y</kbd> and <kbd>enter</kbd> here.
<MacWindow>
  An existing snapshot directory structure exists<br />
  profile: intnet-l0<br />
  This may cause unexpected errors and conflicts, nodectl will remove snapshot contents from this
  directory<br />
<br />
  Remove snapshot contents? [y]: y<br />
</MacWindow>

<MacWindow>
Cleaning [intnet-l0] snapshots................ found
</MacWindow>

### Exit configurator

Finally, we will be returned to the [main menu](#main-menu).

We will choose <kbd>q</kbd> to exit nodectl.

<MacWindow>
  ========================================<br />
  =               MAIN MENU              =<br />
  ========================================<br />
<br />
  N)ew Configuration<br />
  E)dit Existing Configuration<br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

<MacWindow>
  Configuration manipulation quit by Operator<br />
nodeadmin@Constellation-Node:~$  
</MacWindow>








