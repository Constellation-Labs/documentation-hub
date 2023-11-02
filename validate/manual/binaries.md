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

### Log into your VPS

From your **local system**, log into your **cloud instance's** terminal as **nodeadmin** using your Apple terminal, Window's PuTTY, or your terminal application of choice.

:::note
You can remind yourself how to access your VPS here for [Macintosh](/validate/resources/accessMac) or [Windows](/validate/resources/accessWin).
:::

### Update Package Manager

Bring our VPS OS Package Manager up to date

```
sudo apt -y update && sudo apt -y upgrade
```

You will be prompted for your nodeadmin password (your screen will not react and your password will not show as you type).

```
[sudo] password for nodeadmin:
```

### Download Packages

We are ready to download the Tessellation packages that will be executed on your VPS to turn it into a **Constellation Network Node**.

Copy and execute the commands below into your terminal window (one by one, or all together):

```sh
sudo wget https://github.com/Constellation-Labs/tessellation/releases/latest/download/cl-keytool.jar -P /var/tessellation
sudo wget https://github.com/Constellation-Labs/tessellation/releases/latest/download/cl-node.jar -P /var/tessellation
sudo wget https://github.com/Constellation-Labs/tessellation/releases/latest/download/cl-dag-l1.jar -P /var/tessellation
sudo wget https://github.com/Constellation-Labs/tessellation/releases/latest/download/cl-wallet.jar -P /var/tessellation
sudo wget https://github.com/Constellation-Labs/tessellation/releases/latest/download/mainnet-seedlist -O /var/tessellation/seed-list -o /dev/null

# set executable flag
sudo chmod +x /var/tessellation/*.jar
```

Let's verify that our files are in place. Depending on your terminal application, the files should appear in GREEN. Make sure they are executable:  `-rwxr-xr-x`

```
ls -l /var/tessellation
```

Output should look similar (*but not exactly*) to this:

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
