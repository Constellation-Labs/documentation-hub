---
title: Join the HyperGraph or State Channel
hide_table_of_contents: false
---

<head>
  <title>Join the HyperGraph or State Channel</title>
  <meta
    name="description"
    content="This document will help to join an existing HyperGraph Network or State Channel."
  />
</head>

### JOIN the **HyperGraph**

##### We are now ready to join our State Channel and/or HyperGraph network.

:::info NOTE
Our example will join the **testnet 2.0** network.
:::

The below 👇 definitions table shows the assumptions that are made in order to follow along with the `step-by-step` documentation in this repository.  If you had decided to **change** anything during the course of your build, you will need to substitute those changes as necessary. made during the step-by-step below, you will need to change these to match your configuration, if you decide to **change** anything we that suggested in this documentation.

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

### Start the Join Process

:::note CURRENTLY
We have created our **VPS**, installed out **dependencies**, installed out **Tessellation binaries**, setup our **user**, created our **p12** file, and our **service** file.
:::

We will send a request to the Source node to join the cluster, through a **`curl POST`** request.

:::tip IMPORTANT
The current example will help us to join the **Constellation Network Tessellation TestNet** if you are going to join a different State Channel or HyperGraph network, you will need to obtain the proper **node id** and **ip** address, and substitute them into the commands below
:::

#### SUPPLY OUR P12 PASSPHRASE

:::danger IMPORTANT
We do **not** want to have our p12 **passphrase** added to a static plain text file.  Our **p12** file is our private key file that stores valuable information.  If the passphrase is exposed, you can have access to the MainNet, State Channel, TestNet, etc. compromised, including access to wallets.  This is a **bad** idea.
:::

Instead, we will create a *temporary* environment variable prior to joining the network.  The export we do below will only survive the current working session, and it will be lost after we log out.  

```
export CL_PASSWORD="place_your_passphrase_here"
```

Next our command to **join** is:
```
curl -X POST http://127.0.0.1:9002/cluster/join -H 'Content-type: application/json' -d '{ "id": "e2f4496e5872682d7a55aa06e507a58e96b5d48a5286bfdff7ed780fa464d9e789b2760ecd840f4cb3ee6e1c1d81b2ee844c88dbebf149b1084b7313eb680714", "ip": "13.52.246.74", "p2pPort": 9001 }'
```

We should now be joined to the network. Lets check to see if we are connected by Checking our Peers.

Open your browser on your local computer.

```
http://<ip_address_of_your_instance>:9000/cluster/info
```
:::info MAKE SURE
We need to replace `<ip_address_of_your_instance>` with your Node's ip address.
:::

```
http://111.111.111.111:9000/cluster/info
```

You will see a list of lines with **`id`**, **`ip`**, **`publicPort`**, **`p2pPort`**, **`session`**, **`state`**.

The content is not important, what is important is that you see at least 1 entry display in your local browser window.

:::note
The **`"id"`** fields in this example are randomly made up improperly formatted id fields used for the purpose of `example` only.
:::

```
[{"id":"11111111111111111aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffff","ip":"111.111.111.111","publicPort":9000,"p2pPort":9001,"session":"aaaaaaaa-bbbb-cccc-dddd-ffffffffffff","state":"Ready"},
{"id":"ggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkklllllllllllllllllmmmmmmmmm","ip":"122.222.222.222","publicPort":9000,"p2pPort":9001,"session":"gggggggg-hhhh-iiii-jjjj-kkkkkkkkkkkk","state":"Ready"},
{"id":"nnnnnnnnnnnnoooooooooooooooopppppppppppppppppppqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssstttttttttttttttt","ip":"133.333.333.333","publicPort":9000,"p2pPort":9001,"session":"llllllll-mmmm-nnnn-oooo-pppppppppppp","state":"Ready"}
[...]
```

##### OPTIONAL: Review our logs

```
cat /var/tessellation/logs/app.log
```

You should see somewhere towards the end of the log file a line which contains:
```
Received state=Ready{ }
```