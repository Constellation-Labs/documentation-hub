---
title: Apply EIP to EC2 instance
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Amazon Web Services (AWS)</title>
  <meta
    name="description"
    content="Apply an EIP to our AWS EC2 instance"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

#### EIP Control Panel

Instance (future Node) will need to be `stopped` and `started`.  With the current configuration, **AWS** will `disassociate` or `external IP` automatically, and assign us a new one, on restart.  We do **not** want our IP Address to change. 

To fix this, we will setup an `Elastic IP address` to **persist** our Internet presence.

##### Open up the eIP control panel.

![](/img/validator_nodes/node-ec2-eip1.png)

Select the **`Allocate EIP Address`** button.

![](/img/validator_nodes/node-ec2-eip2.png)


Make sure we have selected the `same region` as our instance was created in. Click on **`allocate`**.

![](/img/validator_nodes/node-ec2-eip3.png)

AWS will now assign (allocate) an **eIP** for us to use.  Let's `verify` that our **eIP** is assigned to us.

**Select** the `eIP`.

![](/img/validator_nodes/node-ec2-eip4.png)

:::danger IMPORTANT 
You will **not** be charged for an `eIP` that is in use; **however**, you **will** be charged for an allocated eIP that is **not in use**.
:::

From the top RIGHT choose the **`Actions`** dropdown, and select **`Associate Elastic IP address`** . In the 👆 above section we selected the eIP.

![](/img/validator_nodes/node-ec2-eip5.png)

We want to associate to our instance.


 - Choose **`Instance`**
 - Select (Search for) our created **`Instance`**
 - Our **`Private IP Address`** will auto populate (no need to change anything here)
 - Finally we can click the **`associate`** button.

![](/img/validator_nodes/node-ec2-eip6.png)