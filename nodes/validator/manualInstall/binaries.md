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

We are now ready to install **Tessellation** on our VPS instance which will turn it into a **Constellation Tessellation** **` Validator NODE`**!

The below 👇 definitions table shows the assumptions that are made in order to follow along with the `step-by-step` documentation in this repository.  If you had decided to **change** anything during the course of your build, you will need to substitute those changes as necessary. 

| Variable |	Value |
| -------- | ------ |
| Cloud instance hostname |	**constellation-network**. Your instance will **not** have the same hostname. Substitute `constellation-network` with whatever your instance has been called during setup |
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

We are ready to download the **Tessellation** binaries (packages) that will be executed on your VPS to turn it into a **Node**.

:::danger VERY IMPORTANT
When downloading **Tessellation**...

MAKE SURE YOU USE THE **CORRECT** VERSION!  
Installing an older or incorrect version could lead to unexpected results.
:::

:::info INFORMATION 
As you might expect, this documentation may get outdated quickly; however, we will do our best to keep our documentation up with the releases.
:::

We can now pull down the latest release `v0.10.0` from Constellation Network's repository.

:::note
The `sudo` verb in front of the command will force the OS to ask for a `password` on the first attempt.
:::

#### DOWNLOAD AND SET PERMISSIONS

Download the **cl-keytool.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-keytool.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-keytool.jar
```
Download the **cl-node.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-node.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-node.jar
```
Download the **cl-dag-l1.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-dag-l1.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-dag-l1.jar
```
Download the **cl-wallet.jar** JAR file.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-wallet.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-wallet.jar
```
Download the **seed list file** that contains the Node IDs with permissions to JOIN the network.
```
sudo wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/testnet-seedlisting -O /var/tessellation/seed-list -o /dev/null
```

Let's verify that our files are in place. Depending on your terminal application, the files should appear in GREEN. Make sure they are executable:  `-rwxr-xr-x`

:::info 
The 2 `l` are the letter L not the number #1 (ls -l)
:::

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