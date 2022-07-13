---
title: Install Node Dependencies
hide_table_of_contents: false
---

<head>
  <title>Install Node Dependencies</title>
  <meta
    name="description"
    content="This document will help to install the necessary programs and binaries to properly run a Validator Node."
  />
</head>

### Install Programs/Applications/Utilities 

We are now ready to prepare our **VPS** to become a **Node** running **`Tessellation`**.

These are assumptions made during the step-by-step below, you will need to change these to match your configuration, if you decide to change anything we suggest in this documentation.

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

We need to install **Java** and **Havged** onto our system. 

This will take a few minutes to complete.

```
sudo apt -y install default-jdk haveged
```

Output will look similar (*but not exactly*) to the 👇 output: 

```
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed
alsa-topology-conf alsa-ucm-conf at-spi2-core ca-certificates [...]
fontconfig-config fonts-dejavu-core fonts-dejavu-extra java-common
[...]
```

In some instances, your instances (but not always), may ask you to enter in your geographic area, enter the options that fit your current **location**.

```
Configuring tzdata
------------------
Please select the geographic area in which you live. [...]
time zones in which they are located.
```
Same for the **timezone**.
```
Please select the city or region corresponding to your time zone.
1. Adak 27. Blanc-Sablon 53. Ensenada 79. Juneau 105. New_York
```
That is all we need. If you are an advanced user, you can install any other programs or packages of your choosing.

:::tip
Your Node will perform better if it has access to more resources. It is discouraged to install other unnecessary programs that will create processes that may consume these resources. This could negatively affect the Node.
:::
