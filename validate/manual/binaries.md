---
title: Install Tessellation Binaries
hide_table_of_contents: false
---

<head>
  <title>Install Tessellation Binaries</title>
  <meta
    name="description"
    content="This document will help to install the necessary Tessellation binaries necessary to turn a VPS into a Node."
  />
</head>

We are now ready to install `Tessellation` on our VPS instance which will turn it into a Constellation Tessellation validator node!
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

### Download packages

We are ready to download the Tessellation packages that will be executed on your VPS to turn it into a **Node**. We can now pull down the latest release from Constellation Network's repository.

:::danger VERY IMPORTANT
When downloading Tessellation...

MAKE SURE YOU USE THE **CORRECT** VERSION!  
Installing an older or incorrect version could lead to unexpected results.
:::

Download the **cl-keytool.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v1.0.1/cl-keytool.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-keytool.jar
```
Download the **cl-node.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v1.0.1/cl-node.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-node.jar
```
Download the **cl-dag-l1.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v1.0.1/cl-dag-l1.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-dag-l1.jar
```
Download the **cl-wallet.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v1.0.1/cl-wallet.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-wallet.jar
```
Download the **seed list file** that contains the Node IDs with permissions to JOIN the network.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v1.0.1/mainnet-seedlist -P /var/tessellation; sudo chmod +x /var/tessellation/cl-wallet.jar -O /var/tessellation/seed-list -o /dev/null
```

Let's verify that our files are in place. Depending on your terminal application, the files should appear in GREEN. Make sure they are executable:  `-rwxr-xr-x`

```
ls -l /var/tessellation
```

Output should look similar (*but not exactly*) to the 👇 .

```
total 140568
-rwxr-xr-x 1 root root 94321834 Jul 10 16:24 cl-dag-l1.jar
-rwxr-xr-x 1 root root 52517826 Jul 10 13:19 cl-keytool.jar
-rwxr-xr-x 1 root root 91422359 Jul 10 13:19 cl-node.jar
-rwxr-xr-x 1 root root 75646006 Jul 10 16:24 cl-wallet.jar
-rwxr-xr-x 1 root root    29928 Jul 10 16:24 seed-list
```
That is all we need.

We are ready to **create** or **transfer** our **`P12`** file.