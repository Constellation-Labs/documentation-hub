---
title: Create Instance Part 1
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>GCP Create Instance Part 1</title>
  <meta
    name="description"
    content="Create an instance on Google Cloud Platform (GCP)."
  />
</head>

## Google Cloud Platform (GCP) 
### Create Instance Part 1 of 2

- From the LEFT panel, choose `VM instances`

![](/img/validator_nodes/node-gcp-instance1.png)

:::info
If necessary click on the 三 to open the main panel
:::

- Click on the `Create Instance` link to start the process of building our virtual machine instance.

![](/img/validator_nodes/node-gcp-instance2.png)

- Choose a Name to identify your VM. This is internal to us only, and is not public.

![](/img/validator_nodes/node-gcp-instance3.png)

- Choose a Region to bring your VM up within. 

:::info SIDE NOTE
Since we are working with decentralization, it does not matter where your VM is located.
:::

However, when you are administering the VM, you may want it as close to your physical location as possible. This may improve your access times and performance during manual maintenance, etc.

#### CHOOSE A MACHINE

![](/img/validator_nodes/node-gcp-instance4.png)

We can use the `GENERAL-PURPOSE` machine family.

We want to choose an `N1` VM.

#### UPDATE RESOURCES 

![](/img/validator_nodes/node-gcp-instance5.png)

- Change our Machine Type to `Custom`
- Modify our vCPU to `8`
- Modify our Memory to `16Gb`

![](/img/validator_nodes/node-gcp-instance6.png)

#### UPDATE DISTRIBUTION

Click on the `CHANGE` button. We need to modify our boot disk.

![](/img/validator_nodes/node-gcp-instance7.png)

:::info
Constellation Network recommends our virtual machine be a Debian distro.
:::

#### OS AND DISK 

Change our Operating System to `Ubuntu`.

:::note
You can use any (Debian) distribution that makes you comfortable. The instructions/tutorial here will assume Ubuntu, so you may need to modify your commands to match your distribution.
:::

Modify our Ubuntu Version to `22.4`. 

:::info
Again, you are free to use whatever (Debian) distribution you are comfortable with.
:::

- Modify our Boot Disk Type to `Standard persistent disk`.
- Modify our Size of your boot disk to `160Gb`.

![](/img/validator_nodes/node-gcp-instance8.png)


As this process is long, let's take a break here and then continue to Part 2 of our setup on the next page...