---
title: Setup Node Service
hide_table_of_contents: false
---

<head>
  <title>Setup Node Service</title>
  <meta
    name="description"
    content="This document will help to setup our Node's service file."
  />
</head>

### Create or Transfer a P12 private key file

##### We are now ready to create our Tessellation service!

These are assumptions made during the step-by-step below, you will need to change these to match your configuration, if you decide to **change** anything we that suggested in this documentation.

| Variable |	Value |
| -------- | ------ |
| Cloud instance hostname |	**node-garage**. Your instance will **not** have the same hostname. Substitute `node-garage` with whatever your instance has been called during setup |
| User we will work with or add |	**nodeadmin** |
| [...] | When you see this in our examples, it will mean that there may be extra output from a command issued. The output is not important for our purposes, so it is redacted. The symbol will be shown above the code that is important or below the code that is important. |

#### INSTRUCTIONS

From your **local system**, log into your **cloud instance's** terminal as **nodeadmin** using your Apple terminal, Window's PuTTY, or your terminal application of choice.

:::note
You can remind yourself how to access your VPS here for [Macintosh](../accessMac) or [Windows](../accessWin).
:::

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

We are going to modify our **`cn-node`** Bash script file first. 

Once again we will using **Nano** editor.

:::info NANO INSTRUCTIONS
How to use the `nano` text editor is out of scope of this document; however, you can read up on how to create, edit and save a document at this link:  [How to Use Nano, the Linux Command Line Text Editor](https://linuxize.com/post/how-to-use-nano-text-editor/)
:::
You can use whatever editor you want.

:::note Nano Quick Notes
 - `sudo nano cn-cnode` will start the program
 - use your keyboard arrows to navigate (not your mouse)
 - ctrl-o command-o (letter o) will save the contents of the file
 - give the file a name (`cn-node`)
 - ctrl-x command-x to exit the editor
:::

```
sudo nano /usr/local/bin/cn-node
```

You will be adding the following line to the **end** of the script. Make sure to either copy-n-paste or **very carefully** type in the command, you need it **exactly** as shown to work.

```
/usr/bin/java -jar '-Xms1024M' '-Xmx7G' '-Xss256K' /var/tessellation/cl-node.jar run-validator --collateral 0 & 
```

##### The above commands will:
- Add our environment variables
- Execute the command to startup our Constellation process on the Node.
- Run in the background

#### We are ready to create our service!

Using our **Nano** editor.
(You can use whatever editor you want.)

```
sudo nano /etc/systemd/system/node.service
```

You will be adding the following lines into our new **service file**.

```
[Unit]
Description=Constellation Node service
StartLimitBurst=50
StartLimitIntervalSec=0
[Service]
Type=forking
WorkingDirectory=/var/tessellation
ExecStart=/usr/local/bin/cn-node
[Install]
WantedBy=multi-user.target
```

Our service file is created, and we can exit Nano. (see quick ref above 👆)

We want to **`enable`** our service.

```
sudo systemctl enable node
```

We want to **`start`** our service.
```
sudo systemctl start node
```

**Verification** step: Let's see if our service **started**.

```
sudo systemctl is-active node
```

**VERIFY** that the output of the command  above, is simply `active`.
```
active
```

### Our Node should be started.

#### Our node should be ready to join the HyperGraph!
