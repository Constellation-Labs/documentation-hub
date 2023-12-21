---
title: Install Dependencies
hide_table_of_contents: false
---

<head>
  <title>Install Node Dependencies</title>
  <meta
    name="description"
    content="This document will help to install the necessary programs and binaries to properly run a Validator Node."
  />
</head>

You are now ready to prepare your node to run **`Tessellation`**.

## Instructions

### Log into your node
Refer to the remote access guides for [Macintosh](/validate/resources/accessMac) or [Windows](/validate/resources/accessWin).

### Update node

```
sudo apt -y update && sudo apt -y upgrade
```

You will be prompted for your nodeadmin password. As a security measure, nothing is displayed on the screen as you type.

### Install Java and Havged

We need to install **Java** and **Havged** onto our system. 

This will take a few minutes to complete.

```
sudo apt -y install haveged
```
:::danger
Tessellation requires version 11 of Java to be installed. Normally you can install haveged and default-jdk in one line.
```
sudo apt -y install default-jdk haveged
```
However, depending on the Debian distribution you are using, you may need to install Java manually via the **required** version.  Distributions such as `Ubuntu 23.04` will install a higher version of Java; preventing Tessellation from properly running on your Node.
:::

```
sudo apt -y install default-jdk
```
Output will look similar to below: 

```
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed
alsa-topology-conf alsa-ucm-conf at-spi2-core ca-certificates [...]
fontconfig-config fonts-dejavu-core fonts-dejavu-extra java-common
[...]
```

### Enter location and timezone

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
