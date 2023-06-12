---
title: New Node Installation
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

## Introduction

The following documentation will help guide a new Node Operator through all the necessary steps required to turn an instance, VPS, or bare metal system into a Validator Node.

This new installation can be preformed [manually](/validate/manual/manual-install-getting-started) if desired by advanced end users; however, nodectl is recommended.

## Requirements

It is assumed that prior to reaching this documentation, the future Node Operator has followed all the necessary steps in creating a Debian-based Linux server instance, VPS, or bare metal system.

Please refer to [Node Concepts](/validate/) to follow the `step-by-step` guide on building your future Node.

*For Ease of explanation, this documentation will assume use of the **Ubuntu** Debian distribution of Linux on a **VPS** in the cloud.*

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/nodectlInstallMigrate#download-binary); otherwise continue forward.
:::

## Download nodectl

### Before we begin
 - Have your SSH key passphrase handy
 - Remember the architecture you chose to build your VPS on top of:
   - x86_64 (*most likely*)
   - arm64

### Access your VPS
SSH into your Debian based OS system. 

*replace **ssh_key_name** with the name of your ssh key file.*
[SSH Concepts](/validate/validator/ssh-keys)
<MacWindow>
netmet@netmet-MacBook-Pro .ssh % ssh ubuntu@112.112.112.112 -i my-ssh-pem-file<br />
The authenticity of host '112.112.112.112 (112.112.112.112)' can't be established.<br />
ED25519 key fingerprint is SHA256:dU7879879879879789879878977Fiuiuiuiuiuiuug1.<br />
This key is not known by any other names<br />
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes<br />
Warning: Permanently added '112.112.112.112' (ED25519) to the list of known hosts.<br />
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-1031-aws x86_64)<br />
<br />
 * Documentation:  https://help.ubuntu.com<br />
 * Management:     https://landscape.canonical.com<br />
 * Support:        https://ubuntu.com/advantage<br />
<br />
  System information as of Mon May  1 19:54:29 UTC 2023<br />
<br />
  System load:  0.0703125          Processes:             168<br />
  Usage of /:   1.0% of 154.88GB   Users logged in:       0<br />
  Memory usage: 0%                 IPv4 address for eth0: 172.31.90.241<br />
  Swap usage:   0%<br />
<br />
Expanded Security Maintenance for Applications is not enabled.<br />
<br />
0 updates can be applied immediately.<br />
<br />
Enable ESM Apps to receive additional future security updates.<br />
See https://ubuntu.com/esm or run: sudo pro status<br />
<br />
The list of available updates is more than a week old.<br />
To check for new updates run: sudo apt update<br />
<br />
<br />
The programs included with the Ubuntu system are free software;<br />
the exact distribution terms for each program are described in the<br />
individual files in /usr/share/doc/*/copyright.<br />
<br />
Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by<br />
applicable law.<br />
<br />
To run a command as administrator (user "root"), use "sudo command".<br />
See "man sudo_root" for details.<br />
<br />
ubuntu@ip-172-31-90-241:~$<br />
</MacWindow>

In the above example, you will see `ubuntu@ip-172-31-90-241:~$`, on the last line.  The `ubuntu` before the `@` indicates that our logged in User is called: `ubuntu`.  You may most likely see:
  - ubuntu
  - admin
  - root

Throughout the rest of this documentation, you should replace the name `ubuntu` with the user you have identified.  

### Download nodectl
Download the latest version of nodectl.
:::warning
Make sure you download the latest version of nodectl.  Even though the documentation may reflect correctly, it is recommended to verify to ensure your Node is operating at the latest version.  Documentation can become outdated; however, the methods and actions will remain the same.
:::
Open your web browser and enter in:
```
https://github.com/StardustCollective/nodectl/releases
```
Access [nodectl releases](https://github.com/StardustCollective/nodectl/releases) 

1. click on the latest version
2. Find the Manual Installation section

![](/img/validator_nodes/nodectl_install_release.png).

3. Fine the appropriate link based on the architecture that matches your VPS.
4. Hi-lite and copy to your clipboard or click on the clipboard icon on the right side of the box with the link embedded.
5. Paste the copied link into your VPS terminal window.

Windows users using `putty` will make sure the putty window is in focus (selected) and then `right-click` with the mouse which will paste into your putty terminal

Macintosh users using a normal `terminal` will make sure the terminal window is in focus (selected) and then use `command-v` to paste into the terminal.

:::note
The command pasted into your VPS will be a correlation of commands that will:
- Download the nodectl *binary* to your VPS.
- Place it into the proper directory for execution.
- Update the permissions on the binary
- Issue a version check which should show the version, major, minor, and patch level.

The first command in the string of commands included in this "copy and paste" should *fail* on a our new VPS.  This command attempts to disable the automatic restart feature that nodectl offers.  This is offered in the multiple command string to assist in upgrades of nodectl which will fail to download if the auto restart feature is running. Since we do not have nodectl installed or running, we can safely ignore the error message. 

*Alternatively, more advanced users can remove the first command prior to execution, if desired.*
:::

<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl auto_restart disable; sudo wget https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.7.0/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v<br />
sudo: <b>nodectl: command not found</b><br />
--2023-05-01 20:16:11--  https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.7.0/nodectl_x86_64<br />
Resolving github.com (github.com)... 111.111.111.111<br />
Connecting to github.com (github.com)|111.111.111.111|:443... connected.<br />
HTTP request sent, awaiting response... 302 Found<br />
Location: https://objects.githubusercontent.com/github-production-release-asset-2e65be/543118169/2cd1e3c0-b1d1-438b-853e-7c550358d624?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230501T201611Z&X-Amz-Expires=300&X-Amz-Signature=0bd2f9432a9886f18219b71423de0665b2c7d586d47e34115dabf60e88aadaaf&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=543118169&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream [following]<br />
--2023-05-01 20:16:12--  https://objects.githubusercontent.com/github-production-release-asset-2e65be/543118169/2cd1e3c0-b1d1-438b-853e-7c550358d624?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230501T201611Z&X-Amz-Expires=300&X-Amz-Signature=0bd2f9432a9886f18219b71423de0665b2c7d586d47e34115dabf60e88aadaaf&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=543118169&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream<br />
Resolving objects.githubusercontent.com (objects.githubusercontent.com)... 185.199.110.133, 185.199.111.133, 185.199.108.133, ...<br />
Connecting to objects.githubusercontent.com (objects.githubusercontent.com)|185.199.110.133|:443... connected.<br />
HTTP request sent, awaiting response... 200 OK<br />
Length: 8888296 (8.5M) [application/octet-stream]<br />
Saving to: ‘/usr/local/bin/nodectl’<br />
<br />
nodectl                        100%[==================================================>]   8.48M  --.-KB/s    in 0.09s<br />
<br />
2023-05-01 20:16:12 (90.5 MB/s) - ‘/usr/local/bin/nodectl’ saved [8888296/8888296]<br />
<br />
No installation found<br />
Creating log directory for nodectl<br />
  VERSION        MAJOR          MINOR          PATCH <br />                                                                   
  v2.7.0         2              7              0 <br />           
<b>ubuntu</b>@ip-172-31-90-241:~$ <br />
</MacWindow>

In the example output above, the expected error is shown in **bold**.

In the example output above, the username we are logged in with is also hi-lited in red.
You will notice nodectl will attempt to run the `version` command.
- nodectl executes
- nodectl notices there is no installation
- nodectl sets up a logging directory
- Displays the version
  - In this example) version 2.7.0

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/nodectlInstallMigrate#upload-existing-p12); otherwise continue forward.
:::

## Install nodectl
```
sudo nodectl install
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl install
</MacWindow>

### Confirm Installation Request
You will be presented a screen that will offer some instructions on how the installation will work.

Default options that will be presented within brackets `[ ]`.  If you would like to use the default option, you can just hit the <kbd>enter</kbd>, on your keyboard.

<MacWindow>
 ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =          INSTALLATION REQUEST        =<br />
  =      TESSELLATION VALIDATOR NODE     =<br />
  ========================================<br />
  @netmet72<br />
<br />
   NOTE <br />
<br />
  Default options will be enclosed in [] (brackets). If you want to use the <br />
  value defined in the<br />
  brackets, simply hit the &lt;enter&gt; key to accept said value.<br />
<br />
  n stands for  no <br /> 
  y stands for  yes  <br />
<br />
  IMPORTANT nodectl was designed to run on a terminal session with a<br />
  black background setting. Default terminal emulators with a white background<br />
  may experience some 'hard to see' contrasts. It is recommended to change the<br />
  preferences on your terminal [ of choice ]<br /> 
  to run with a black background.<br />
<br />
  WARNING You about to turn this VPS or Server into a<br />
  Constellation Network Validator Node<br />
  Are you sure you want to continue this installation? [n]: <br />
</MacWindow>

Type in `y` and then hit the <kbd>enter</kbd> key.
```
Are you sure you want to continue this installation? [n]: y
```

nodectl will begin the installation process and ask you which HyperGraph environment you would like to install and join with.

### Choose our environment

#### MainNet
The MainNet environment is the most likely environment that you will be using nodectl to join into.  This will turn your VPS into a Constellation Network Validator Node.  A Constellation Validator Node will be setup for you and when completed you will be joining to separate networks, via your single Node.

1. The Global Layer0 HyperGraph
2. The Constellation Network associated Layer1 MetaGraph

#### TestNet
The TestNet environment is a testing and experimental environment that you will be using nodectl to join into.  This will turn your VPS into a Constellation Network Validator Node.  A Constellation Validator Node will be setup for you and when completed you will be joining to separate networks, via your single Node.

1. The TestNet Global Layer0 HyperGraph
2. The TestNet Constellation Network associated Layer1 MetaGraph

TestNet Nodes are used by the Hypergraph and Metagraphs to be beat up upon.  These Nodes will experience trial and error moments.  The TestNet requires more experienced Node Operators and a little more dedication verses the "set it and forget it" environment created within the MainNet.

For the purposes of this tutorial, we will be joining the MainNet environment.  To accept this choice, you will hit the **M** key on your keyboard.  You will NOT be required to hit <kbd>enter</kbd> afterwards.

<MacWindow>
------ * Installation Starting * -------<br />
<br />
  nodectl needs to know if your Node will be running on mainnet <br />
  or testnet: <br />
<br />
  OPTIONS<br />
  -------<br />
  M)ainNet <br />
  T)estNet <br />
  Q)uit <br />
<br />
  KEY PRESS an option<br />
</MacWindow>

:::note
The IP address `111.111.111.111` is a fake IP used for example purposes only
:::
<MacWindow>
 Node environment set .......................... mainnet<br />                                                         
  Check permissions & versioning ................ complete<br />                                                                      
  Obtaining External IP ......................... 111.111.111.111<br />                                                                
  Are you migrating over an existing p12 private key? [n]:<br />
</MacWindow>

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/nodectlInstallMigrate#import-p12-file); otherwise continue forward.
:::

 Since this is a brand new installation, we will choose `n` (or just hit enter to accept the default) when requested to migrate over an existing `p12` file.  The `p12` file is your private key file used to store elements necessary to authenticate to the MainNet and also your Node's wallet information.

```
Are you migrating over an existing p12 private key? [n]: n
```

### System Requirements
nodectl will begin to install the necessary dependencies that will allow your future Node to run properly.  This will include several packages including the java development kit package.  

We can sit back and relax during these steps of the installation.  Some installations may take longer than others, so please do be patient.

<MacWindow>
------- * SYSTEM REQUIREMENTS * --------<br />
<br />
  Installing dependency [haveged] ............... complete<br /> 
  default-jdk may take a few minutes to install<br />
  Installing dependency [default-jdk] ........... complete<br /> 
  Installing dependency [vim] ................... complete<br />
  Installing dependency [curl] .................. complete<br />
  Installing dependency [wget] .................. complete<br />  
  Fetch Tessellation binary [cl-keytool.jar] .... complete<br />
  Fetch Tessellation binary [cl-node.jar] ....... complete<br />
  Fetch Tessellation binary [cl-dag-l1.jar] ..... complete<br />
  Fetch Tessellation binary [cl-wallet.jar] ..... complete<br />  
</MacWindow>

### Swap Setup

Continuing the system requirements, nodectl will create and setup your swap file.  This step sets up your Node to have an extra method to properly manage memory.  The swap will utilize disk usage when memory access is required but not available.  This is a common setup for Apple, Windows or Linux systems.

<MacWindow>
  Enabling OS swap [creating].................... running<br />
</MacWindow>
<MacWindow>
  Enabling OS swap [update fstab]................ running<br />
</MacWindow>
<MacWindow>
  Enabling OS swap [swappiness].................. complete<br />
</MacWindow>

### Setup Node Admin User

Once the system requirements section is completed via 100% automation, you be directed to a new screen.  nodectl will detect the current user logged in. In our example using the Ubuntu distribution on AWS, the user called `ubuntu`.  

It is time to change this and move to a more secure username.  We will create this user now; However, we will continue the installation with the `ubuntu` user.  At the end of the install, we will switch over to our new Node administrator account.  

We will continue to use our `Ubuntu` user until instructed otherwise.

:::danger Reminder 
This user will depend on your service provider and/or your Linux distribution of choice. 

Most Commonly:
  - root
  - admin
  - ubuntu
:::

nodectl will recommend that you use `nodeadmin` as your default Node Administrator.  This will force us away from a commonly known usernames such as `ubuntu` or `admin`.

:::note Side Note
Since this documentation is publicly available and nodectl is open sourced, the use of `nodeadmin` can also be deemed a commonly used username; however, properly securing down your Node as recommended by this documentation, should provide proper security to make the use of `nodeadmin` a very minimal security risk.
:::

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

We can hit the <kbd>enter</kbd> key to accept `nodeadmin` as our default, or input `nodeadmin` (or a username of your choice) to continue.

### Setup Password

Our `nodeadmin` user (or whichever user you decided to create - heretofore `nodeadmin`) will require a password.  

This password will be used during each initial nodectl request.  

Afterwards for security purposes, your Linux distribution will prompt to re-enter your password when administrative commands are required and/or:
- It is the initial command request
- The distribution's timeout limit has been reached.

The nodectl installer will offer you some information (similar to these comments) about the various password, keyphrase, or passphrases `[passphrases]` that will be required to run your Node. 

:::danger Important
You must secure this password/passphrase in a safe secure location and/or remember them.  

Your passphrase will offer access to your Node and the VPS your Node runs on.  

Unauthorized access can be potentially crippling to the operations of your Node; as well as, may have financial consequences because your Node will hold a hot wallet.  

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

We enter our password above and then confirm...

Confirm your password.

<MacWindow>
>> Please confirm nodeadmin's password: 
</MacWindow>

Your user will be created and added to the necessary groups for use on your future Node.

<MacWindow>
Adding new user [nodeadmin].................... complete<br />
Adding new user [nodeadmin] to sudo group...... complete<br />
</MacWindow>

### Handle SSH Keys

If you followed the recommended [setup](/validate/) instructions to build your VPS to run your Node on, you should have gone through the process of creating [ssh keys](/validate/validator/ssh-keys).

Unless you are running your Node in a specialized way that required you to use a username/password method of accessing your future Node, instead of SSH keys (not recommended unless you are an advanced user with specific reasoning) ...  

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

We will say `y` (or hit <kbd>enter</kbd> key).

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
  Disable SSH access to these root and special accounts? [y]: <br /> 
<br />  
</MacWindow>

nodectl will disable these accounts.  

:::note
This is reversible if desired via the [enable_root_ssh](/validate/automated/nodectlCommands#enable_root_ssh) command.
:::

<MacWindow>
Disabling [SSH] for root, ubuntu and/or admin.. disable<br />
</MacWindow>

### Test `nodeadmin` access

Let's pause the installation process here. Before we continue, we should quickly access our Node using our newly created `nodeadmin` account.

#### DO NOT CLOSE THE INSTALLER TERMINAL WINDOW

You should now copy the same configuration you used to access your instance initially (which opened our installation shell); however, using our `nodeadmin` user instead.

*We are simply testing that we have access to our Node via the new `nodeadmin` account, before we continue to lock down our Node for better security.*

Reminder how to do this is for [windows](/validate/resources/accessWin).

Reminder how to do this for [mac](/validate/resources/accessMac).

Now that we are comfortable that we have access to our Node via the **`nodeadmin`** user account.  We can close the **test** `nodeadmin` terminal window (that we opened in this step). This will return us to our original terminal which has the installer running, as the `ubuntu` user.

### Disable root

We can now safely allow nodectl to disable the root user's remote access.  

We will only use the root user by connecting through `nodeadmin` and then switching to the `root` user as necessary.

:::danger Do not worry
Do not worry if some of this information seems advanced.  At the end of the day, you should not need to access the root user to run your Node.  In the event you have any issues, you can access Constellation Network's Discord channel, to request help and advise.

We are confident you can simply follow the instructions to build your Node as recommended.
:::

We should say `y` at the prompt below.  

nodectl will default to `n` for the protection of user, as this is an advanced security measure. We will **not** accept the default option.

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

<MacWindow>
Reloading [SSH] daemon......................... complete  <br />                                                              
  Disabling [SSH] for root, ubuntu and/or admin.. complete  <br />                                                               
</MacWindow>

nodectl will now "warn" you that it will default to the Constellation Network dual layer configuration.

Your Node will be setup to connect to both the Hypergraph (Constellation's Global Layer0); as well as, Constellation's Metagraph (Layer1).  In order to properly participate on Constellation's **MainNet** network, your Node will be required to connect to both.

Do not worry, nodectl will take care of all the technical details for you!

You can read the informational notice from the installer and press any key to continue.

<MacWindow>
  - * TESSELLATION DYNAMIC STRUCTURES * --<br />
<br />
   IMPORTANT <br />
<br />
  nodectl installation will install the new Node with default Constellation
  Network DAG Global Layer0 and DAG Layer1 State Channel settings.<br />
<br />
  After installation is complete, the Node Administrator may alter the nodectl
  configuration to modify nodectl to connect to the State Channel of
  choice via the command:<br />
<br />
  sudo nodectl configure<br />
<br />
  Press any key to continue<br />
<br />
</MacWindow>

### Create structures

nodectl will being the process of building your Node's internal requirements.

<MacWindow>
Creating [Node] directories.................... running<br />                       
tessellation .................................. complete<br />                    
backups ....................................... complete<br />
uploads ....................................... complete<br />                      
nodectl ....................................... complete<br />
default_layer0 ................................ complete<br />
default_layer1 ................................ complete<br />            
Creating [Node] directories.................... complete<br />
</MacWindow>

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/nodectlInstallMigrate#choose-p12-file); otherwise continue forward.
:::

### Build our wallet (p12)

nodectl will now help us through the process of creating our Node's wallet and authentication requirements. This is necessary to join the Hypergraph/Metagraph via authentication, and collect rewards for work accomplished on the Hypergraph/Metagraph.

We will start by providing a name of our `p12` file.

#### What is a p12 file?

The `p12` file is a specially formatted private key file used by (but not created by) Constellation's Network's protocol.  The p12 file is short for `PKCS#12`. Simply put, the `p12` file is used store various private keys.

You can now provide a file name for your `p12` file.  This can be any name that suits your needs.  As an added precaution, do not share this filename with anyone that shouldn't have access to the file.

If you would like to keep the default name `nodeadmin-node.p12` **(*not recommended*)**, just hit the <kbd>enter</kbd> key.

<MacWindow>
  ========================================<br />
  =             P12 GENERATION           =<br />
  ========================================<br />
  Please enter a name for your p12<br />
  private key file [nodeadmin-node.p12] :<br />
</MacWindow>

We are ready to provide nodectl with a passphrase for our future `p12` file.

nodectl will again provide you with information about creating the passphrase.

When creating your passphrase, **do not use**:
 - periods
 - double `//` 
 - section signs
 - double quotes
 - single quotes

<MacWindow>
  We will end of up with 3 separate unique
  passphrases.<br />
<br />
  1 SSH KEY passphrase/keyphrase - >already created<br />
<br />
  2 User nodeadmin's VPS admin password - already created<br />
<br />
  3 P12 Private key passphrase/keyphrase<br />
<br />
  You will not see your password as you type it, this is for security purposes.
  Your password should contain capital & lowercase letters, numbers, special characters,
  but no single or double quotes.<br />
<br />
  This passphrase should be 10 in length.
   WARNING  nodectl does not work well with section signs
  special characters.<br />
<br />
  This passphrase will allow you to authenticate to the
  Hypergrpah.<br />
  This passphrase will allow you to authenticate to your Node's
  Wallet.<br />
  You should create a unique passphrase and write it down!<br />
<br />
  We recommend you save this to a secure location and, do NOT
  forget the passphrase!<br />
<br />
  In your notes:<br />
  "This is the passphrase to access my Node's hot wallet and gain
  access to the Hypergraph."<br />
</MacWindow>

#### Passphrase entry

We can now provide a new unique passphrase for our p12 file.  

:::danger IMPORTANT
Make sure it is very secure, this will be used to access your Node's wallet; as well as, authenticate to the Hypergraph and Metagraph.
:::

<MacWindow>
>> Please enter a 10 character minimum<br />
>> passphrase for your p12 private key:<br />
</MacWindow>

Confirm your passphrase

<MacWindow>
>> Please confirm your p12 private key's passphrase:<br />
</MacWindow>

Write your passphrase down in a very secure location, and never share it out to anyone that should **not** have direct access to your Node or Node's wallet.

### Create p12 alias

:::danger IMPORTANT
If you are **migrating** an existing **[p12 private key file](/validate/automated/nodectlInstallMigrate)**, you must use the same alias as you did when you originally created the file.  Failure to do so will lead to errors.

*MainNet 1.0 Node Operators, this is **not** your MainNet 1.0 Node alias; rather, it is your **wallet's** alias*
:::

Constellation Network requires that you provide an alias for your `p12 file`.  This alias is important, and should also not be forgotten.  

<MacWindow>
  Please create a simple name to help you remember your<br />
  p12's private key name.<br />
  Please enter the alias name for your p12<br />
  private key [nodeadmin-alias] : <br />
</MacWindow>

Write your alias down in a safe location.

### Service File Creation

nodectl will now create your p12 file and associated service files necessary to run our Node.  This is an automated process, and no Node Operator intervention is required.

<MacWindow>
  Default location for your p12 file storage created<br />
  location /home/nodeadmin/tessellation/<br />
<br />
  Note The default location can be modified.<br />
  sudo nodectl configure<br />
<br />
 <br />
  Creating configuration file ................... complete <br />                                  
  Creating Services ............................. complete <br />                   
</MacWindow>

### Install Complete

Once the service and configuration files have completed, the screen will clear
and you will receive a successful installation message; as well as, post installation instructions.

<MacWindow>
  ========================================<br /> 
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br /> 
  =         INSTALLATION COMPLETE        =<br /> 
  ========================================<br /> 
  @netmet72<br /> 
<br /> 
<br /> 
  CONGRATULATIONS!<br />  
  Installation is complete<br /> 
</MacWindow>

### Post Install Instructions

Now that nodectl has completed the process of creating your Node for you.  We have some post instructions to handle.

#### node ID

nodectl will access your new or migrated `p12` private key file and attempt to extract your Node's `nodeid` from the file. 

The `nodeid` can be considered your Node's **`public`** key.  It is public information, and we do not have to worry about exposing it.

Write this nodeid down for your own reference; however, you will be able to derive your nodeid using dedicated commands at any time later on, via the [`sudo nodectl nodeid`](/validate/automated/nodectlCommands#nodeid) command.

The `nodeid` results will be presented to you as part of the final steps of the installation process.

:::info Invalid
The IP address and nodeid presented below are for demonstration purposes only and are not valid nor correctly formatted.
:::

<MacWindow>
  Below you will find your nodeid which was derived from your p12 file<br /> 
  Please report this nodeid to administrative staff to gain access to the network via the access list
  permissions.<br /> 
<br /> 
  IP ADDRESS<br /> 
  111.111.111.111<br />         
  P12 FILENAME                    P12 LOCATION<br />                   
  nodeadmin-node.p12              /home/nodeadmin/tessellation/<br />  
  NODE ID<br /> 
  5872afe110ee729511111111111111111111112222222222222222222333333333333333333333344444444444444444448cc1b340e46332c70636e53447b85b<br />
</MacWindow>

#### Seed list

The seed list is the access list that determines which Nodes are allowed and not allowed on **MainNet**.  This is a temporary authentication mechanism pre-PRO score implementation. 

nodectl will issue the [`sudo nodectl check_seedlist`](/validate/automated/nodectlCommands#check_seedlist) command, to confirm whether or not your Node is able to participate on the Hypergraph at the current time.

<MacWindow>
 ----- * Check Seed List Request * ------<br /> 
<br /> 
  IP ADDRESS<br /> 
  111.111.111.111 <br />        
  P12 FILENAME                    P12 LOCATION <br />                  
  nodeadmin-node.p12              /home/nodeadmin/tessellation/ <br /> 
  NODE ID      <br />        
  5872afe110ee7295111111111111111111111122222222222222222225900ec0fab1cb15511f1a485ef6cccd291d82948c8cc1b340e46332c70636e53447b85b<br /> 
  NODE ID FOUND ON SEED LIST<br /> 
  <b>False</b><br /> 
</MacWindow>

In this example you will see that this particular Node's `nodeid` is not able to participate on the Hypergraph. This is because it was not found on the current `seed list`.  

```
NODE ID FOUND ON SEED LIST
False
```

#### Contact Constellation Network Admins

We will now be presented with final instructional steps.

<MacWindow>
  Please review the next Steps in order to gain access to the mainnet environment. If your Node is found
  as False on the check seed list(s) output above, you will need to submit
  your NodeID for acceptance.<br />
<br />
  Please follow the instructions below, as indicated.<br />
<br />
  1) Submit your NodeID to Constellation Admins.<br />
  2) Collateralize your Node.<br />
  3) sudo nodectl check_seedlist -p dag-l0<br />
  4) sudo nodectl restart -p all<br />
<br />
  enod!<br />
<br />
  Total installation time:  1.229 minutes <br /> 
</MacWindow>

Now that our Node installation is complete; as stated in our final instructions on our Node, we need to make sure we have communicated our newly created `nodeid` to Constellation Network Admins (most likely method is through the Constellation Network Discord channels).

We will need to collateralize our Node with the necessary amount of **`$DAG`**.

Once we have completed these two important steps, we will wait for the `seed list` to be updated, obtain a `True` from the `sudo nodectl check_seedlist` command, and then we can `restart` our Node to join the network.

### nodeadmin

At this time, we can exit the terminal session that has us connected to our now fully setup Node.  Since we originally connected to our Node as the commonly used `ubuntu` user, we will exit and re-connect as our Node as our `nodeadmin` user.  

Our Node's prompt should change, and our `ubuntu` and `root` users will no longer be accessible.

:::note Note
`ubuntu` and `root` user's access can be re-enabled at anytime
:::

<MacWindow>
nodeadmin@Constellation-Node:~$ 
</MacWindow>

## CONGRATULATIONS
You now have a Constellation Network validator Node!

### Command Reference

While we wait for your Node to be accepted for access (via the seed list), we recommend that you review all the available features and commands of nodectl, via the [command reference](/validate/automated/nodectlCommands) documentation.
