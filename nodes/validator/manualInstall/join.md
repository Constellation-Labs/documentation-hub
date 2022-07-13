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