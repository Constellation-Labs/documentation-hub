---
title: Passphrase Encryption
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

Prior to version `v2.13.0` of nodectl, the passphrase responsible for unlocking your p12 keystore that contains the private and public keys necessary to access your hot wallet and to digitally sign your validated data, was **unencrypted**.  

Optionally, nodectl has added the ability to encrypt the p12 passphrase, within the persistent configuration file that nodectl requires to perform its functionality. 

## Encrypt during upgrade

During a nodectl [upgrade](./upgrade/nodectl-upgrade), if nodectl identifies that the configuration file contains an unencrypted passphrase, it will offer you the ability to [encrypt during the upgrade](./upgrade/nodectl-upgrade-encryption).

## Encrypt via the Configurator

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
- If you need to disable the configuration for any reason, it is simple to re-encrypt the passphrase at a later date.  The old hash will be permanently removed and unusable.  The passphrase will not be decrypted; rather, you will need to reconfigure the p12 elements via both the p12 global section and the individual p12 sections per profile **manually**. If you only have a single global p12 that is used for all profiles on the Node, you will **still** need to configure those sections to reference the global p12 section.  *This is done for security purposes.*.
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
p12 file keyphrase (passphrase) [global] ...... validated!
</MacWindow>

:::danger Single Attempt
If you do not enter the correct passphrase, you will receive an error message from nodectl, and will need to restart the process.

Please take care to enter the correct passphrase on the first attempt.
:::

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

## Decrypt via the Configurator 

### Initial Steps

We first start by starting up the configurator and following the same steps as if we were going to [encrypt](#encrypt-via-the-configurator) our passphrase.

1. [Start Configurator](#start-configurator)
2. [Advanced Mode](#advanced-mode)
3. [Main Menu](#main-menu)
4. [Backup](#backup)

### Disable Encryption

nodectl will detect that our passphrase is set to encrypted, via the configuration file.

<MacWindow>
========================================<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASSPHRASE ENCRYPTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DISABLE ENCRYPTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
<br />
   WARNING  Disabling encryption is permanent.<br />
<br />
  Profile specific non-global passphrases will
  NOT be restored in your Node's configuration file.
  Each specific p12 configurations will be reset to
  None<br />
<br />
  Please reset specific dedicated profile passphrases
  via the configurator to resume nodectl's ability to automate
  processes that require the p12 keystore elements to
  function.<br />
<br />
  Alternatively, you can resume using --pass &lt;passphrase&gt;
  at the command prompt.<br />
<br />
  You will be redirected automatically to reset your global p12
  passphrase.<br />
</MacWindow>

We can confirm by entering <kbd>y</kbd>+<kbd>Enter</kbd>. 

:::danger Permanent
This will not be reversible.  The keys associated with the current encrypted passphrase will be destroyed permanently. 

However, you can `encrypt` again at any time by going through the process to create brand new encryption keys. 
:::

<MacWindow>
Do you want to remove encryption? [n]: y
</MacWindow>

### Automated Decryption

nodectl will begin the process of removing decryption.  

First it will warn it is permanent.

<MacWindow>
This is permanent...
</MacWindow>

The decryption process will start.

<MacWindow>
  Removing encryption elements .................. running<br />
  Configuration changes applied ................. successfully<br />
  Removing encryption elements .................. completed<br />
  Resetting [global] configuration...............<br />
  Existing global p12 details identified ........ success<br />
</MacWindow>

### Establish plain text passphrase

nodectl will now automatically direct you to the GLOBAL PROFILE P12 ENTRY section of the configurator.  This is important because nodectl removed the hash associated with your passphrase; as well as, the appropriate keys that would decrypt the passphrase for us.  We do not allow nodectl to decrypt the passphrase for us for extra security. 

<MacWindow>
   ----- * GLOBAL PROFILE P12 ENTRY * -----<br />
<br />
  This is the Debian Operating system username used to administer
  your Node. It was created during Node installation. Avoid the 'root',
  'admin', or 'ubuntu' user.<br />
</MacWindow>

You should be able to verify default values between the brackets `[]` and then hit the <kbd>Enter</kbd> key to accept these values.  They should not have changed, so you should be able to use the default for all `3` questions.

#### Confirm or Change p12 details

:::note Default Values
Your default values may be different from the example output below
:::

<MacWindow>
  Enter in the admin username for this Node [nodeadmin]: 
</MacWindow>

<MacWindow>
  This is the location on your Debian Operating system where the p12
  private key file is located.<br />
<br />
  Enter in p12 file path [/home/nodeadmin/tessellation/]:<br />
</MacWindow>

<MacWindow>
  This is the name of your p12 private key file.  It should have a
  '.p12' extension.<br />
<br />
  Enter in your p12 file name:  [nodeadmin.p12]:<br />
</MacWindow>

#### Confirm Values

We can press the <kbd>Enter</kbd> key to accept and confirm our p12 values.

<MacWindow>
========================================<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONFIRM VALUES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
  If you reached this confirmation unexpectedly
  ,from the input [above] you may have hit &lt;enter&gt;
  along with your option; therefore, choosing the default.  You can
  choose n here and reenter the correct value.<br />
<br />
  nodeadmin: nodeadmin<br />
  key location: /home/nodeadmin/tessellation/<br />
  key name: nodeadmin.p12<br />
  <br />
  Please confirm values are as requested: [y]: y<br />
</MacWindow>

#### Hide Passphrase?

nodectl will ask you if you want to "hide" your passphrase, if you choose `y` here your configuration will not contain a passphrase and you will be required to enter every time it is needed.

:::info Encryption's purpose
Removing the passphrase creates extra work for the Node Operator when encryption may be a better solution.
:::

We will press <kbd>Enter</kbd> to accept the default `n`.
<MacWindow>
Would you like to hide the global passphrase [n]: 
</MacWindow>

#### Add Plain Text Passprhase

Enter your current p12 passphrase

<MacWindow>
  Enter in a passphrase. The passphrase [also called 'keyphrase' or
  simply 'password'] will not be seen as it is entered. This configurator
  does NOT create new p12 private key files. The Node Operator should enter
  in their EXISTING p12 passphrase.  This configurator also does NOT change
  or alter the p12 file in ANY way. A p12 file should have been created
  during the original installation of nodectl on this Node. If the Node
  Operator wants to modify the p12 passphrase, the 'sudo nodectl passwd12'
  command can be used. To remove the passphrase from the configuration, enter
  in "None" as the passphrase, and confirm with "None". MAKE SURE TO SAVE
  YOUR PASSPHRASE IN A SAFE LOCATION! Losing your passphrase is not
  recoverable!<br />
<br />
  Enter in p12 passphrase: <br />
</MacWindow>

Confirm the passphrase

<MacWindow>
Confirm this passphrase:<br />
</MacWindow>

#### Configuration will be applied

<MacWindow>
Confirm this passphrase: <br />
Global p12 entries ............................ complete<br />
<br />
Configuration changes applied ................. successfully<br />
</MacWindow>

#### Individual Profile Passphrase Updates

In the event you had `non-global` p12 details entered for your profiles.  The configurator will take you to each profile and request you update the p12 details for each profile, as was completed in the [above](#add-plain-text-passprhase) global update section.

If you already had these profiles set to `global` ( only using the global p12 for all profiles ), you will not be redirected and returned to the main menu.

## Conclusion

Your Node is now updated with an [encrypted](#encrypt-via-the-configurator) or [decrypted](#decrypt-via-the-configurator) passphrase. From the main menu, you can choose <kbd>q</kbd> to return to your Node's command line interface.










