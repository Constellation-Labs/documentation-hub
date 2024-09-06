---
title: Node Operator Notes
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

## ◽ Purpose

This document suggests a method for keeping notes and tips accessible when preparing to or operating your node.

We hope that referring back to your notes for reminders on managing your node and recalling necessary passphrases or passwords will be time-saving, useful, and efficient.

## ◽ Suggested Medium
The following mediums are a good start to where you should record and maintain your notes.

| Medium | Description |
| :---: | :--- |
| Secured Software Manager | There are password managers that allow for keeping passwords, passphrases, notes, and documents.  From LastPass, 1Password, Bitwarden, Dashlane, KeePass, to others. *Make sure to create backups that will be stored in a safe location.* |
| USB Stick | Placing your information on a USB stick that is stored in a secure location such as a safe.
| Physical Piece of Paper | Writing down your notes and storing in a secure location such as a safe.

## ◽ Warnings

:::danger 🚑 PLEASE DO NOT 🚒
Do **not** use the same passphrases or other sensitive values/information as shown in this example.  

These examples are public facing and may be used by a nefarious actor as a first attempt to access your Node in a penetration attack.

> The example values in these notes are **ficitious**, please replace usernames, passwords, passphrases, etc. with your own.
:::

## ◽ Notes for Macintosh

```
Constellation Validator Node Notes:

To access our Node:
    open a terminal and enter:
    ssh -i /home/myuser/.ssh/myprivatekey nodeadmin@113.113.113.113
    
    This command will attempt to SSH into our VPS/Node 
    We will be challenged for access to supply the passphrase.
    passphrase: efg6abc13efg6

    If the command hangs or an error message stating 
    "refused" check to make sure that our firewall 
    on the VPS is properly setup to use the local 
    IP address of our system. During installation, 
    we restricted this down to a specific IP of our 
    local system, that may have changed.   
    www.whatismyip.com

To issue commands using nodectl we use sudo
   We need to use our nodeadmin password here:
   passphrase: efg6abc13efg6

If we need to access our p12 file (hot wallet)
   passphrase: abc13efg6abc13

Reminders:
----------
ssh private key: myprivatekey
ssh public key: mypublickey.pub
ssh passphrase: efg6abc13efg6
location of keys:
   - on this USB stick
   - local mac directory: /home/myuser/.ssh/

p12 keystore name (hot wallet): myp12name.p12
p12 keystore passphrase: abc13efg6abc13

VPS IP: 113.113.113.113
VPS SSH port: 22
VPS username: mynodeadmin
VPS sudo password: 

* After typing in: sudo nodectl
  you can double-tap the tab key for a list
  of commands.
  
Key Commands
------------
sudo nodectl status
sudo nodectl restart -p all
sudo nodectl upgrade
sudo nodectl check_versions
sudo nodectl check_consensus
sudo nodectl dag -p dag-l0
```

## ◽ Notes for Windows
:::caution Just in Case
If you are using a Command Prompt verses PuTTy, you may want to copy the Macintosh notes 👆and replace `Terminal` with `Command Prompt` as necessary.
:::
```
Constellation Validator Node Notes:

To access our Node:
    open PuTTy
    select our saved session from the 
    PuTTy main menu, load, and then open
    (or double click)
    
    This command will attempt to SSH into our VPS/Node 
    We will be challenged for access to supply the passphrase.
    passphrase: efg6abc13efg6

    If the command hangs or an error message stating 
    "refused" check to make sure that our firewall 
    on the VPS is properly setup to use the local 
    IP address of our system. During installation, 
    we restricted this down to a specific IP of our 
    local system, that may have changed.   
    www.whatismyip.com

To issue commands using nodectl we use sudo
   We need to use our nodeadmin password here:
   passphrase: hij678hij678&*()

If we need to access our p12 file (hot wallet)
   passphrase: abc123abc123!@#

Reminders:
----------
ssh private key: myprivatekey.pem
ssh public key: mypublickey
ssh passphrase: efg345efg$%%^
location of keys:
   - on this USB stick
   - <enter saved location here>

p12 keystore name (hot wallet): myConstellationP12File.p12
p12 keystore passphrase: abc123abc123!@#

VPS IP: 113.113.113.113
VPS SSH port: 22
VPS username: nodeadmin
VPS sudo password: hij678hij678&*()

* After typing in: sudo nodectl
  you can double-tap the tab key for a list
  of commands.

Key Commands
------------
sudo nodectl status
sudo nodectl restart -p all
sudo nodectl upgrade
sudo nodectl check_versions
sudo nodectl check_consensus
sudo nodectl dag -p dag-l0
```