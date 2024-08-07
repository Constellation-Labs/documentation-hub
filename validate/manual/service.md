---
title: Create Node Service(s)
hide_table_of_contents: false
---

<head>
  <title>Setup Node Service(s)</title>
  <meta
    name="description"
    content="This document will help to setup our Node's service file."
  />
</head>

### Create or Debian service file

We are now ready to create our Tessellation service!

## Instructions

### Log into your node

From your **local system**, log into your **cloud instance's** terminal as **nodeadmin** using your Apple terminal, Window's PuTTY, or your terminal application of choice.

:::note
You can remind yourself how to access your VPS here for [Macintosh](/validate/resources/accessMac) or [Windows](/validate/resources/accessWin).
:::

### Update node

Bring our Node up to date

```
sudo apt -y update && sudo apt -y upgrade
```

You will be prompted for your nodeadmin password.
:::warning
Your screen will not react and your password will not show as you type.  
**Reminder**: `[...]` in the output command examples means that there is a bunch of output that has been redacted to eliminate confusion. 
:::
```
[sudo] password for nodeadmin:
[...]
```

### Create new bash script(s)

We are going to create our **`cn-nodel0` or `cn-nodel1`** Bash scripts first. 

Once again we will using **Nano** editor.

:::info NANO INSTRUCTIONS
How to use the `nano` text editor is out of scope of this document; however, you can read up on how to create, edit and save a document at this link:  [How to Use Nano, the Linux Command Line Text Editor](https://linuxize.com/post/how-to-use-nano-text-editor/)
:::
You can use whatever editor you want.

:::note Nano Quick Notes
 - `sudo nano cn-cnodel0` will start the editor
 - use your keyboard arrows to navigate (not your mouse)
 - <kbd>ctrl</kbd>-<kbd>o</kbd> or <kbd>command</kbd>-<kbd>o</kbd> (letter o) will save the contents of the file
 - give the file a name (`cn-nodel0`)
 - <kbd>ctrl</kbd>-<kbd>x</kbd> or <kbd>command</kbd>-<kbd>x</kbd> to exit the editor
:::

```
sudo nano /usr/local/bin/cn-nodel0
```

Add the commands to read your `cn-node` file and start the layer0 or layer1 service

```
#!/bin/bash
. /usr/local/bin/cn-node
/usr/bin/java -jar '-Xms1024M' '-Xmx7G' '-Xss256K' /var/tessellation/cl-node.jar run-validator --seedlist /var/tessellation/seed-list & 
```
```
sudo nano /usr/local/bin/cn-nodel1
```

Add the commands to read your `cn-node` file and start the layer0 or layer1 service

```
#!/bin/bash
. /usr/local/bin/cn-node
/usr/bin/java -jar '-Xms1024M' '-Xmx3G' '-Xss256K' /var/tessellation/cl-dag-l1.jar run-validator --public-port 9010 --p2p-port 9011 --cli-port 9012 & 
```

##### The above commands will:
- Add our environment variables
- Execute the command to startup our Constellation process on the Node.
- Run in the background

:::note OPTIONAL
The documentation creates `environment` variables to export for the tessellation process to read during the initialization process.  This can be helpful in different
circumstances.  You may also apply these variables directly at the command line during execution.

```
--public-port
--p2p-port
--cli-port
```
:::

### Create service file(s)

Using our **Nano** editor.
(You can use whatever editor you want.)

```
sudo nano /etc/systemd/system/node_l0.service
```

You will be adding the following lines into our new **service file**.

```
[Unit]
Description=Constellation Node service Layer0
StartLimitBurst=50
StartLimitIntervalSec=0
[Service]
Type=forking
WorkingDirectory=/var/tessellation
ExecStart=/usr/local/bin/cn-nodel0
[Install]
WantedBy=multi-user.target
```

```
sudo nano /etc/systemd/system/node_l1.service
```

You will be adding the following lines into our new **service file**.

```
[Unit]
Description=Constellation Node service Layer1
StartLimitBurst=50
StartLimitIntervalSec=0
[Service]
Type=forking
WorkingDirectory=/var/tessellation
ExecStart=/usr/local/bin/cn-nodel1
[Install]
WantedBy=multi-user.target
```

Our service files are created, and we can exit Nano. (see quick ref above 👆)

:::tip QUICK UNDERSTANDING
Normally, we would want to `enable` the `node_l0.service` and `node_l1.service` to start automatically on boot.  This would be done with the following command:
```
sudo systemctl enable node_l0
suod systemctl enable node_l1
```
**HOWEVER** this introduces a security vulnerability concerning our `Validator Node`.

In order to start the `service` properly, you will need to supply your `p12` passphrase.  Unless you have an automated process in place to fetch the passphrase securely via security focused external tool sets (out of scope of this document), your other alternative is to supply the `passphrase` in clear text.  This is **HIGHLY** undesirable method.  Your `p12` passphrase is a gateway into our Crypto wallets, finances, your `PRO Score`, etc.

As an **alternative** we will **not** automatically start the service on system boot.  We will add to our list of `to-dos` to manually start the process and supply the `passphrase` on each restart.

Constellation Network [nodectl](/validate/automated/nodectl) `command line utility` will ease this process as a **better** solution.
:::


We will create a *temporary* environment variable prior to joining the network.  The export we do below will only survive the current working session, and it will be lost after we log out.  

```
export CL_PASSWORD="place_your_passphrase_here"
```
We can now **`start`** our **Node** service.
```
sudo systemctl start node_l0
sudo systemctl start node_l1
```

**Verification** step: Let's see if our service **started**.

```
sudo systemctl is-active node_l0
sudo systemctl is-active node_l1
```

**VERIFY** that the output of the command  above, is simply `active`.
```
active
```

## Our Node should be started.

#### Our node should be ready to join the Hypergraph!

:::success MULTIPLE METAGRAPHS
In the event that you would like to participate in **multiple** metagraphs, you can start a new java process separately for each metagraph process you have running on the Node.

You can also update the `service` file to include multiple commands to run on service start.
:::

:::danger MULTIPLE METAGRAPHS
Make sure you VPS (or bare metal server) is properly sized to handle multiple metagraphs
:::

#### SIZING
The `vCPU`, `Memory`, and `HDD storage allocation` is **dependent** on each specific metagraph.  Consult with the metagraph operators/administrators for the specifications that 
meet the requirements for their individual metagraph.

This also pertains to the `TCP` ports each individual metagraph utilize.  Obtaining the proper `p2p-port` can be dynamically acquired via a `public-port` API call.
