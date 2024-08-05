---
title: Join Network
hide_table_of_contents: false
---

<head>
  <title>Join the Hypergraph or metagraph</title>
  <meta
    name="description"
    content="This document will help to join an existing Hypergraph Network or metagraph."
  />
</head>

We are now ready to join our metagraph and/or Hypergraph network.

:::info NOTE
Our example will join the **testnet** network.
:::

## Instructions

### Log into your node

From your **local system**, log into your **cloud instance's** terminal as **nodeadmin** using your Apple terminal, Window's PuTTY, or your terminal application of choice.

:::note NOTE
You can remind yourself how to access your VPS here for [Macintosh](/validate/resources/accessMac) or [Windows](/validate/resources/accessWin).
:::

### Update your node
Bring our Node up to date

```
sudo apt -y update && sudo apt -y upgrade
```

You will be prompted for your **`nodeadmin`** password.

:::warning WARNING
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
The current example will help us to join the **Constellation Network Tessellation TestNet** if you are going to join a different metagraphs or Hypergraph network, you will need to obtain the proper **node id** and **ip** address, and substitute them into the commands below
:::

### Supply your P12 passphrase

:::danger IMPORTANT
We do **not** want to have our p12 **passphrase** added to a static plain text file.  Our **p12** file is our private key file that stores valuable information.  If the passphrase is exposed, you can have access to the MainNet, metagraph, TestNet, etc. compromised, including access to wallets.  This is a **bad** idea.
:::

:::note NOTE
In previous steps, we started our **node service**.  This service will **not** properly start without your **p12 passphrase**.  The command below may **not** be necessary; however, we will enter it again to be thorough 
:::

Instead, we will create a *temporary* environment variable prior to joining the network.  The export we do below will only survive the current working session, and it will be lost after we log out.  

```
export CL_PASSWORD="place_your_passphrase_here"
```

### Join the network

:::note NOTE
We are using 9000,9001, and 9002 for layer0 in this example; as well as, 9010,9011, and 9012. 
:::

:::danger IMPORTANT
The IP ADDRESS and NODE ID used below are examples only.  You will need to use an actual Node IP and NodeId alive and in `Ready` state on the network.
 Next our command to **join** is:

Layer0
```
curl -X POST http://127.0.0.1:9002/cluster/join -H 'Content-type: application/json' -d '{ "id": "abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123ab", "ip": "113.113.113.113", "p2pPort": 9001 }'
```
Layer1
```
curl -X POST http://127.0.0.1:9012/cluster/join -H 'Content-type: application/json' -d '{ "id": "abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123ab", "ip": "113.113.113.113", "p2pPort": 9011 }'
```

We should now be joined to the network. Lets check to see if we are connected by Checking our Peers.

Open your browser on your local computer.

```
http://<ip_address_of_your_instance>:9000/cluster/info
```
:::

:::tip MAKE SURE
We need to replace `<ip_address_of_your_instance>` with your Cluster's **Load Balancer**, **Edge Gateway** or **Existing Node** on the network.  *This may result in using port `80` or `443` as well.*
:::

Layer0
```
http://113.113.113.113:9000/cluster/info
```
Layer1
```
http://113.113.113.113:9010/cluster/info
```

You will see a list of lines with **`id`**, **`ip`**, **`publicPort`**, **`p2pPort`**, **`session`**, **`state`**.

The content is not important, what is important is that you see at least 1 entry display in your local browser window.

:::note
The **`"id"`** fields in this example are randomly made up improperly formatted id fields used for the purpose of `example` only.
:::

```
[{"id":"11111111111111111aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffff","ip":"113.113.113.113","publicPort":9000,"p2pPort":9001,"session":"aaaaaaaa-bbbb-cccc-dddd-ffffffffffff","state":"Ready"},
{"id":"ggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkklllllllllllllllllmmmmmmmmm","ip":"122.222.222.222","publicPort":9000,"p2pPort":9001,"session":"gggggggg-hhhh-iiii-jjjj-kkkkkkkkkkkk","state":"Ready"},
{"id":"nnnnnnnnnnnnoooooooooooooooopppppppppppppppppppqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssstttttttttttttttt","ip":"133.333.333.333","publicPort":9000,"p2pPort":9001,"session":"llllllll-mmmm-nnnn-oooo-pppppppppppp","state":"Ready"}
[...]
```

### Optional: review your logs

```
cat /var/tessellation/logs/app.log
```

You should see somewhere towards the end of the log file a line which contains:
```
Received state=Ready{ }
```

:::success MULTIPLE STATE CHANNELS
In the event that you would like to participate in **multiple** metagraphs, you can issue the join separately for each metagraph process you have running on the Node.
:::