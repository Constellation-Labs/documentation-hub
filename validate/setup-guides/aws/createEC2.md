---
title: Deploy EC2 (Part 1)
hide_table_of_contents: false
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

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network**, in the future.

<iframe width="75%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## EC2 CREATION

### Wizards
The video utilized the classic EC2 wizard setup process.  The `step-by-step` in the below documentation will show both the classic wizard and the new setup wizard.  Please use the right side navigation links to skip to the desired guide.

This is a longer process, but we can make it through it. Let's begin creating our instance!

### Open Compute EC2 Console 
Click on the`Services` button to start our process.

![](/img/validator_nodes/node-aws-ec2-services1.png)

From the new drop down box, choose the option **`Compute`**.

![](/img/validator_nodes/node-aws-ec2-services2.png)

Choose the option **`EC2`** from the **Compute** section.

![](/img/validator_nodes/node-aws-ec2-services3.png)

### Region

We need to pick a `region` to host our EC2 instance.

![](/img/validator_nodes/node-aws-ec2-3.png)

## Begin building EC2

:::info IMPORTANT INFORMATION
We will need an **`t2.2xlarge`** or **`a1.2xlarge`** (or better) as our `instance type`. This instance type is **not** available in all regions.  You can move between regions to find which regions offer with instance types.

The US regions may not offer `a` type instances.  **We will use the `t2.2xlarge` for our tutorial**.  This offers `32Gib` of RAM verses the required `16Gib`; however, this can only create better performance on our future Node.
:::

If we don't see our Instances dashboard. Choose the `Instances` from the left side menu.

:::note
The term *new* is used simply because (at the time of this documentation creation) this was a new and improved version of the dashboard that AWS recently released. We have the New EC2 Experience selected.
:::

![](/img/validator_nodes/node-aws-ec2-4.png)

### Launch Creation Wizard

Choose **Launch instances** from the `top right` of the dashboard. This will tell AWS to guide us through the launch of an instance via their `launch wizard`.

![](/img/validator_nodes/node-aws-ec2-5.png)

### Name your instance

![](/img/validator_nodes/node-aws-ec2-name-tag.png)
:::tip
It is **highly** recommended (but not required) to use a `Debian` distribution.
:::

### Pick EC2 Image 

:::note
You can use any Debian distribution you would like, it does not need to be Ubuntu. We will be using **`Ubuntu`** throughout our tutorial(s), so if you choose a different distribution, you may need to change some commands to match your chosen distribution.
:::

![](/img/validator_nodes/node-aws-ec2-distro.png)

We choose:
  - Ubuntu
  - 64-bit (x86)
  - 22.04 LTS

You may choose whatever distribution (distro) and version of your chosen distro that you are most comfortable with.  **HOWEVER**, you must use a **Debian** Linux distro to participate in Constellation Network's MainNet 2.0.

Most recommended are:
  - Debian  
  - Ubuntu

### Instance Type

Click on the `t1.micro` Free tier eligible box to expose the search bar.

Type in `t2.2xlarge`.

Select `t2.2xlarge`.

![](/img/validator_nodes/node-aws-ec2-instance.png)

:::important
We now know the **REGION** that our Instance type is available and will **stop** here!  We will need to return to this section and repeat the above steps again...

Before we do this, we must upload our **SSH keys** to this AWS **region**.  

In the next section, we continue by preparing our SSH keys, and then return to continue building your EC2 instance (and future Constellation Network Node).
:::