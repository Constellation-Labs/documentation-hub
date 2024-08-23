---
title: Deploy EC2 (part 1)
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Amazon Web Services (AWS)</title>
  <meta
    name="description"
    content="Begin the process of building an EC2 instance to turn into a Constellation Node."
  />
</head>

A virtual machine inside AWS's cloud service is called an EC2 instance. 
*Elastic Compute Cloud*.

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::
<br/>

**SSH Key Generation Series** - Video 4b by NetMet

<iframe width="75%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to Constellation Network, in the future.

---

## EC2 CREATION

### Wizards
The video utilized the classic EC2 wizard setup process.  The step-by-step in the below documentation will show both the classic wizard and the new setup wizard.  Please use the right side navigation links to skip to the desired guide.

This is a longer process, but we can make it through it. Let's begin creating our instance!

### Open Compute EC2 Console 
Click on the **Services** button to start our process.

![](/img/validator_nodes/node-aws-ec2-services1.png)

From the new drop down box, choose the option **Compute**.

![](/img/validator_nodes/node-aws-ec2-services2.png)

Choose the option **EC2** from the Compute section.

![](/img/validator_nodes/node-aws-ec2-services3.png)

### Region

We need to pick a Region to host our EC2 instance.

![](/img/validator_nodes/node-aws-ec2-3.png)

## Begin building EC2

:::info IMPORTANT INFORMATION
We will need an `t2.2xlarge`. This instance type is not available in all regions.  You can move between regions to find which regions offer with instance types.
:::

If we don't see our Instances dashboard. Choose the `Instances` from the left side menu.

### Launch Creation Wizard

Choose **Launch instances** from the middle dashboard. This will tell AWS to guide us through the launch of an instance via their Launch Wizard.

![](/img/validator_nodes/node-aws-ec2-4a.png)

### Name your instance

Giving your new instance a name (tag) will be useful in identifying your instance's purpose later on during normal business operations.

![](/img/validator_nodes/node-aws-ec2-name-tag.png)

### Pick EC2 Image 

:::note
You can use any Debian distribution you would like, it does not need to be Ubuntu. We will be using Ubuntu throughout our tutorial(s), so if you choose a different distribution, you may need to change some commands to match your chosen distribution.
:::

![](/img/validator_nodes/node-aws-ec2-distro.png)

We choose:
  - Ubuntu
  - 64-bit (x86)
  - 22.04 LTS

You may choose whatever distribution (distro) and version of your chosen distro that you are most comfortable with. However, you must use a Debian Linux distro to participate in Constellation Network's MainNet, IntegrationNet or TestNet.

Most recommended are:
  - Debian  
  - Ubuntu

### Instance Type

- Click on the **t1.micro** Free tier eligible box to expose the search bar.
- Type in **t2.2xlarge**.
- Select **t2.2xlarge**.

![](/img/validator_nodes/node-aws-ec2-instance-a.png)

### Continuing
:::important
We now know the REGION that our Instance type is available and will stop here!  

We will need to return to this section and repeat the above steps again...

Before we do this, we must upload our SSH keys to this AWS Region.  

In the next section, we continue by preparing our SSH keys, and then return to continue building your EC2 instance (and future Constellation Network Node).
:::