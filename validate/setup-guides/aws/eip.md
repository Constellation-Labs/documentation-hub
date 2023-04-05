---
title: Allocate EIP to EC2
hide_table_of_contents: false
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

## EIP Control Panel

The EC2 Instance (future Constellation Network Node) will need to be `stopped` and `started`.  With the current configuration, **AWS** will `disassociate` or `external IP` automatically, and assign us a new one, on every restart.  We do **not** want our IP Address to change. 

Since our local computer accessing this EC2 instance will be configured with a `static` configuration, it is more efficient to assign an EIP to our EC2 instance. 

To accomplish this, we will setup an `Elastic IP address` (EIP) to **persist** our Internet presence.

:::note
The Constellation Network Hypergraph and subsequent Metagraphs to **NOT** need persistent IP addresses.  This step is to elminate extra unnecessary steps to administer your Node each time it is restarted.

EIP addresses on AWS to not incur cost unless not in use.
:::

### Open up the eIP control panel.

![](/img/validator_nodes/node-ec2-eip1.png)

Select the **`Allocate EIP Address`** button.

![](/img/validator_nodes/node-ec2-eip2.png)


Make sure we have selected the `same region` as our instance was created in. Click on **`Allocate Elastic IP address`**.

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

---

We are ready to setup our security groups (firewall settings).