---
title: New Node Installation
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Introduction

The following documentation will help guide a new Node Operator through all the necessary steps required to turn an instance, VPS, or bare metal system into a Validator Node.

## Requirements

It is assumed that prior to reaching this documentation, the future Node Operator has followed all the necessary steps in creating a **Debian based** Linux server instance, VPS, or bare metal system.

Please refer to [Node Concepts](../validator/get_started.md) to follow the `step-by-step` guide on building your future Node.

*For Ease of explanation, this documentation will assume use of the **Ubuntu** Debian distribution of Linux on a **VPS** in the cloud.*
## Download nodectl

### Before we begin
 - Have your SSH key passphrase handy
 - Remember the architecture you chose to build your VPS on top of:
   - x86_64 (*most likely*)
   - arm64

### Access your VPS
**SSH** into your Debian based OS system. 

*replace **ssh_key_name** with the name of your ssh key file.*
[SSH Concepts](../validator/sshkeyExplained.md)
<MacWindow>
netmet@netmet-MacBook-Pro .ssh % ssh ubuntu@44.211.47.118 -i my-ssh-pem-file<br />
The authenticity of host '44.211.47.118 (44.211.47.118)' can't be established.<br />
ED25519 key fingerprint is SHA256:dU7879879879879789879878977Fiuiuiuiuiuiuug1.<br />
This key is not known by any other names<br />
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes<br />
Warning: Permanently added '44.211.47.118' (ED25519) to the list of known hosts.<br />
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

### Download nodectl
Download the latest version of nodectl.
:::warning
Make sure you download the **latest** version of nodectl.  Even though the documentation may reflect correctly, it is **recommended** to verify to ensure your Node is operating at the latest version.  Documentation can become outdated; however, the methods and actions will remain the same.
:::
Open your web browser and enter in:
```
https://github.com/netmet1/constellation_nodectl/releases
```
Access [nodectl releases](https://github.com/netmet1/constellation_nodectl/releases) 

1. click on the latest version
2. Find the **Manual Installation** section

![](/img/validator_nodes/nodectl_install_release.png).

3. Fine the appropriate link based on the architecture that matches your VPS.
4. Hi-lite and copy to your clipboard or click on the clipboard icon on the *right* side of the box with the link embedded.
5. Paste the copied link into your VPS terminal window.

:::note
The command pasted into your VPS will be a correlation of commands that will:
- Download the nodectl *binary* to your VPS.
- Place it into the proper directory for execution.
- Update the permissions on the binary
- Issue a version check which should show the version, major, minor, and patch level.

The first command in the string of commands included in this "copy and paste" should *fail* on a our new VPS.  This command attempts to disable the automatic restart feature that nodectl offers.  This is offered in the multiple command string to assist in **upgrades** of nodectl which will fail to download if the auto restart feature is running. Since we do not have nodectl installed or running, we can **safely** ignore the error message. 

*Alternatively, more advanced users can remove the first command prior to execution, if desired.*
:::

<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl auto_restart disable; sudo wget https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.7.0/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v<br />
sudo: nodectl: command not found<br />
--2023-05-01 20:16:11--  https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.7.0/nodectl_x86_64<br />
Resolving github.com (github.com)... 140.82.112.4<br />
Connecting to github.com (github.com)|140.82.112.4|:443... connected.<br />
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
ubuntu@ip-172-31-90-241:~$ <br />
</MacWindow>

You will notice **nodectl** will attempt to run the `version` command.
- nodectl executes
- nodectl notices there is no installation
- nodectl sets up a logging directory
- Displays the version
  - In this example) version 2.7.0

## Install nodectl
```
sudo nodectl install
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl install
</MacWindow>

### Confirm Installation Request
You will be presented a screen that will offer some instructions on how the installation will work.

Default options that will be presented within brackets [].  If you would like to use the default option, you can just hit the &lt;enter&gt; key, on your keyboard.

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

Type in `y` and then hit the &lt;enter&gt; key.
```
Are you sure you want to continue this installation? [n]: y
```

nodectl will begin the installation process and ask you which **HyperGraph** environment you would like to install and join with.

### Choose our environment

#### MainNet
The MainNet environment is the most likely environment that you will be using **nodectl** to join into.  This will turn your VPS into a **Constellation Network Validator Node**.  A Constellation Validator Node will be setup for you and when completed you will be joining to separate networks, via your single Node.

1. The Global Layer0 **HyperGraph**
2. The Constellation Network associated Layer1 **MetaGraph**

#### TestNet
The TestNet environment is a testing and experimental environment that you will be using **nodectl** to join into.  This will turn your VPS into a **Constellation Network Validator Node**.  A Constellation Validator Node will be setup for you and when completed you will be joining to separate networks, via your single Node.

1. The TestNet Global Layer0 **HyperGraph**
2. The TestNet Constellation Network associated Layer1 **MetaGraph**

TestNet Nodes are used by the Hypergraph and Metagraphs to be beat up upon.  These Nodes will experience trial and error moments.  The TestNet requires more experienced Node Operators and a little more dedication verses the **set it and forget it** environment created within the **MainNet**.

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

For the purposes of this tutorial, we will be joining the **MainNet** environment.  To accept this choice, you will hit the **M** key on your keyboard.  You will **NOT** be required to hit enter afterwards.

:::note
The IP address `111.111.111.111` is a fake IP used for example purposes only
:::
<MacWindow>
 Node environment set .......................... mainnet<br />                                                         
  Check permissions & versioning ................ complete<br />                                                                      
  Obtaining External IP ......................... 111.111.111.111<br />                                                                
  Are you migrating over an existing p12 private key? [n]:<br />
</MacWindow>

Since this is a **brand new** installation, we will choose **n** when requested to migrate over an existing **p12** file.  The **p12** file is your private key file used to store elements necessary to authenticate to the MainNet and also your Node's wallet information.

```
Are you migrating over an existing p12 private key? [n]: n
```
