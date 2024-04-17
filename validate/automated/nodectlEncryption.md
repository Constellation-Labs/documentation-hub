---
title: nodectl passphrase encryption
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

Prior to version `v2.13.0` of nodectl, the passphrase responsible to unlocking your p12 key store that contains the private and public keys necessary to access your hot wallet and to digitally sign your validated data, was **unencrypted**.  

Optionally, nodectl has added the ability to encrypt the p12 passphrase, within the persistent configuration file that nodectl requires to perform its functionality. 

## Encrypt during upgrade

During a nodectl [upgrade](./upgrade/nodectlUpgrade), if nodectl identifies that the configuration file contains an unencrypted passphrase, it will offer you the ability to [encrypt during the upgrade](./upgrade/nodectlUpgradeEncryption).

## Encrypt via the Configurator

## Step by Step


### Start Configurator

Start the configurator module.
```
sudo nodectl configure
```
Alternatively, you can add optional switches that will allow you to enter the configurator in edit mode, confirming the backup automatically, and entering detailed mode (verses advanced mode).

| option | description |
| :--: | :--- |
| -e | Directly enter into the edit section of the configurator. |
| -cb | confirm backup, you will not need to verify the location of the backup file before continuing |
| -d | Execute the configurator in `detailed` mode which will offer more details on all commands and questions that may need to answered. |
| -a | Execute the configurator in `advanced` mode which will not offer any details or detailed understanding of any questions that may need to be answered. |

Since we are using `sudo`, we will be challenged for our nodeadmin user password.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl configure<br />
[sudo] password for nodeadmin:
</MacWindow>

alternatively, add the options.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl configure -e -cb -d<br />
[sudo] password for nodeadmin:
</MacWindow>

### Advanced Mode

:::note Note 
If you choose to add the options mentioned above 👆 you can skip directly to the [encryption step](#enable-encryption).
:::

Until we are more comfortable with the configurator and all the particular settings of the configurator, we should **not** use advanced mode.  We will choose no here 👇  by pressing <kbd>enter</kbd> to accept the default value or <kbd>n</kbd>+<kbd>enter</kbd>.

<MacWindow>
  ========================================<br />
  =&nbsp;&nbsp;CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODECTL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONFIGURATION TOOL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  ========================================<br />
  @netmet72<br />
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

:::note Note 
If you choose to add the options mentioned above 👆 you can skip directly to the [encryption step](#enable-encryption).
:::

Our goal in this procedure (documentation) is to **encrypt** existing passphrases, so we want to `edit` our configuration and will choose <kbd>e</kbd>.

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

:::note Note 
If you choose to add the options mentioned above 👆 you can skip directly to the [encryption step](#enable-encryption).
:::

Before continuing, nodectl will backup your existing configuration file `cn-config.yaml` and offer you information on where it is located.  

By default your configuration will use the `/var/tessellation/backups` directory.  This is where you will find copy of your configuration file with the current system date and time (UTC) appended to the file name. nodectl can now make changes with the confidence that a backup of what was there previous is available if needed.

You can review the information on the screen and press any key to continue.

We can utilize the `restore_config` command to restore your configuration.

### Enable Encryption

From the main edit menu of the configurator, we will choose <kbd>P</kbd> to enter into the encryption section.

<MacWindow>
  ========================================<br />
  =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPTIONS MENU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  ========================================<br />
<br />
  E) Edit Individual Profile Sections<br />
  G) Global P12 Configuration<br />
  I) Global Cluster Token Identifier<br />
  T) Global Cluster Token Coin Id<br /> 
  R) Auto Restart Configuration<br />
  L) Set Log Level<br />
  P) Passphrase Encryption<br />
  M) Main Menu<br />
  Q) Quit<br />
<br />
  KEY PRESS an option<br />
</MacWindow>

### Confirm Encryption
You will be presented with a couple of important warning messages explaining the following key points:
- If you need to disable the configuration for any reason, it is simple to re-encrypt the passphrase at a later date.  The old hash will be permanently removed and unusable.  The passphrase will not be decrypted; rather, you will need to reconfigure the p12 elements via both the p12 global section and the individual p12 sections per profile **manually**. If you only have a single global p12 that is used for all profiles on the Node, you will **still** need to configure those sections to refer to the global p12 section.  *This is done for security purposes.*.
- If you reenable encryption after a previous disablement, the old hashes will be overwritten permanently.  

<MacWindow>
========================================<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASSPHRASE ENCRYPTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENABLE ENCRYPTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
<br />
IMPORTANT<br />
Enabling encryption will encrypt your passphrase in the configuration file linked to
nodectl functionality.<br />
<br />
In the unlikely event the encrypted hash stops working [for whatever reason], you can simply disable this functionality, update/change your passphrase, and, upon completion, re-enable the encryption feature.<br />
<br />
Encryption will be turned on globally for all profiles. Each unique profile passphrase may be encrypted with a different key.<br />
<br />
For security purposes, nodectl will not decrypt the passphrase upon disabling the encryption feature.<br />
<br />
WARNING<br /> 
If the configuration file was manually updated, any updated encryption elements [or other] will be overwritten causing old encryption data that may be allowing nodectl to handle previously encrypted elements to stop working, to be overwritten, and removed!<br />
</MacWindow>

You can confirm by pressing the <kbd>enter</kbd> key to accept the default value of `y` or hit the <kbd>y</kbd>+<kbd>enter</kbd>.

<MacWindow>
Do you want to enable encryption? [y]: y
</MacWindow>

### Validate your current passphrase
nodectl will request the p12 you want to encrypt and validate that passphrase before allowing you to encrypt.

<MacWindow>
------------ * GLOBAL P12 * ------------ <br />
<br />
Press enter your p12 passphrase for encryption.<br />
<br />
p12 passphrase: <br />
</MacWindow>

### Automated Encryption
nodectl will begin the encryption and return you to the main menu when the encryption is completed.

Derive a seed phrase to use with the encryption

<MacWindow>
seed phrase [deriving] ........................ complete
</MacWindow>

Remove and destroy the seed phrase because it is a one-time use element of the encryption process.

<MacWindow>
seed phrase [redacting] ........................ complete
</MacWindow>

Remove all elements that helped to prepare the encryption hash

<MacWindow>
seed phrase [forgetting] ........................ complete
</MacWindow>

Encryption is complete

<MacWindow>
seed phrase [finished] ........................ complete
</MacWindow>

Update the configuration

<MacWindow>
Building encryption elements [global] ......... completed<br /> 
Building encryption elements [dag-l0] ......... completed<br />  
<br /> 
Configuration changes applied ................. successfully<br />   
Building encryption element ................... completed<br /> 
</MacWindow>

### Exit configurator

Finally, we will be returned to the [main edit menu](#enable-encryption).

We will choose <kbd>q</kbd> to exit nodectl.

<MacWindow>
  ========================================<br />
  =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPTIONS MENU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  ========================================<br />
<br />
  E) Edit Individual Profile Sections<br />
  G) Global P12 Configuration<br />
  I) Global Cluster Token Identifier<br />
  T) Global Cluster Token Coin Id<br /> 
  R) Auto Restart Configuration<br />
  L) Set Log Level<br />
  P) Passphrase Encryption<br />
  M) Main Menu<br />
  Q) Quit<br />
<br />
  KEY PRESS an option<br />
</MacWindow>

<MacWindow>
  Configuration manipulation quit by Operator<br />
nodeadmin@Constellation-Node:~$  
</MacWindow>








