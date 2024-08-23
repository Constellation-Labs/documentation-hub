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

The following is a document that will provide hints for you when you are operating your Node.  

It is suggested that you use a physical piece of paper or a secure document to be placed on a USB stick to store with your other secured backups.
  - example: A physical safe in the office or house.

### Assumptions for the Note

:::danger DANGER
Do not use the same passphrases as shown in this example.  These examples are public facing and may be used by a nefarious actor as a first attempt to access your Node and penetrate...
:::

1. Our Node is created
   - ip address: `113.113.113.113`
   - SSH port opening for access: `22`
1. We have a [p12](/validate/validator/p12) file
   - p12 name: `myConstellationP12File.p12`
   - p12 passphrase: `abc123abc123!@#`
1. We have an [SSH](/validate/validator/ssh-keys) key pair created
   - private SSH key: `myprivatekey.ppk` (`myprivatekey.pem`)
   - public SSH key: `mypublickey` 
   - private SSH key passphrase: `efg345efg$%%^`
   - SSH port opening for access: `22`
   - Local Machine username: `bob`
   - Our private key is located in our `/home/bob/.ssh/` folder on our local machine (not on our VPS).
1. Our Node Administrator username on our VPS is created
   - username: `nodeadmin`
   - password: `hij678hij678&*()`

### Our Note File for Mac User

```
Constellation Validator Node Notes:

To access our Node:
    open a terminal and enter:
    ssh -i /home/bob/.ssh/myprivatekey.pem nodeadmin@113.113.113.113
    
    This command will attempt to SSH into our VPS/Node 
    We will be challenged for access to supply the passphrase.
    passphrase: efg345efg$%%^

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
   - local mac directory: /home/bob/.ssh/

p12 key store name (hot wallet): myConstellationP12File.p12
p12 key store passphrase: abc123abc123!@#

VPS IP: 113.113.113.113
VPS SSH port: 22
VPS username: nodeadmin
VPS sudo password: hij678hij678&*()
```

### Our Note File for Windows User

```
Constellation Validator Node Notes:

To access our Node:
    open PuTTy
    select our saved session from the 
    PuTTy main menu, load, and then open
    (or double click)
    
    This command will attempt to SSH into our VPS/Node 
    We will be challenged for access to supply the passphrase.
    passphrase: efg345efg$%%^

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

p12 key store name (hot wallet): myConstellationP12File.p12
p12 key store passphrase: abc123abc123!@#

VPS IP: 113.113.113.113
VPS SSH port: 22
VPS username: nodeadmin
VPS sudo password: hij678hij678&*()
```