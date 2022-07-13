---
title: Launch EC2 Instance
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Amazon Web Services (AWS)</title>
  <meta
    name="description"
    content="Begin the process of building an EC2 instance to turn into a Constellation Node."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

A virtual machine inside AWS's cloud service is called a **`EC2 instance`**. *Elastic Compute Cloud*.

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::
SSH Key Generation Series - **Video 4b** by NetMet.

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network** and **Node Garage**, in the future.

<iframe width="100%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

This is a longer drawn out process, but we can make it through it. Let's begin creating our instance!

##### SERVICES 
Go ahead and click on the Services button to start our process.

![](/img/validator_nodes/node-aws-ec2-1.png)

From the new drop down box, choose the option `EC2` from the **compute service** section.

![](/img/validator_nodes/node-aws-ec2-2.png)


We need to pick a region to host our EC2 instance.

![](/img/validator_nodes/node-aws-ec2-3.png)

:::note
We will need an **`a1.xlarge`** (or better) as our instance type. This instance type is not available in all regions.
( US-West-2 Oregon has this instance type available. )
:::

If we don't see our Instances dashboard. Choose the Instances from the left side menu.

:::note
The term *new* is used simply because (at the time of this documentation creation) this was a new and improved version of the dashboard that AWS recently released. We have the New EC2 Experience selected.
:::

![](/img/validator_nodes/node-aws-ec2-4.png)

##### LAUNCH INSTANCE CREATION WIZARD

Let's go ahead and Launch instances from the top right of the dashboard. This will tell AWS to guide us through the launch of an instance.

![](/img/validator_nodes/node-aws-ec2-5.png)

    - We will choose `Ubuntu 20.04 LTS` from the list.
    - We will choose `ARM` from the 64-bit option type.
    - We will click `Select`.

:::note
You can use any Debian distribution you would like, it does not need to be Ubuntu. We will be using Ubuntu throughout our tutorial(s), so if you choose a different distribution, you may need to change some commands to match your chosen distribution.
:::

![](/img/validator_nodes/node-aws-ec2-6.png)

##### INSTANCE TYPE

Click on **All instance families** to drop down the list

![](/img/validator_nodes/node-aws-ec2-7.png)

We will choose `a1`. Constellation Network wants us to use `a1.xlarge`

Click on **`a1.xlarge`**.

![](/img/validator_nodes/node-aws-ec2-8.png)

Click on Next: Configure instance Details.


![](/img/validator_nodes/node-aws-ec2-9.png)

##### EC2 Details

Need to supply AWS some details

Switch our Auto-assign Public IP to Disabled. We are going to create an EIP later in this process.

![](/img/validator_nodes/node-aws-ec2-10.png)

##### STORAGE

Click on Next: Add Storage.

![](/img/validator_nodes/node-aws-ec2-11.png)

Change the storage size to 160.

![](/img/validator_nodes/node-aws-ec2-12.png)


The next 2 steps are **Add Tags** and **Configure Security Groups**; however, *we will skip these for now*, and come back to configure them later on in our tutorial steps.

Let's get our instance up and running. Select **Review and Launch**!

![](/img/validator_nodes/node-aws-ec2-13.png)

We will continue configuration while it is launching

##### Possible Warning

We may see these warnings, that our Node is vulnerable. We can safely ignore these because our Node will not have an IP address and can not access the Internet, with its current configuration.

We will only be able to work with this EC2 instance from our dashboard only. Do not worry though, when we are done, our communications will be fixed; as well as, our security setup.

![](/img/validator_nodes/node-aws-ec2-14.png)

This is OK, we will fix later! You can **launch**!

![](/img/validator_nodes/node-aws-ec2-15.png)

Once we hit the Launch we will be prompted to add our SSH Key Pair. You should have created one from the last section. You will choose those keys on the next screen.

##### ASSIGN KEY PAIR

If you did not create an SSH key in the last section, you will have the option to create a new key here. This is NOT recommended.
Select Choose an existing key pair

    - Select the key we created in the last section.
    - Acknowledge your access to your private key.

![](/img/validator_nodes/node-aws-ec2-16.png)

:::danger 
If you lose your keys, you will lose access to your instance.
:::

Return to the dashboard and confirm that your node is there. It may take a moment or two for it to spin up and pass it's checks.

##### VERIFY

Is our Node up?

![](/img/validator_nodes/node-aws-ec2-17.png)