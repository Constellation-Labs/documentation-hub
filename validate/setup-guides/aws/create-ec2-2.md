---
title: Deploy EC2 (part 2)
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

## EC2 CREATION (Part 2)

:::note
If you came from the previous section [Deploy EC2 (Part 1)](/validate/setup-guides/aws/createEC2) you should already be in the Compute section in the correct Region as your future Instance type.  Skip to [Continue building EC2](#continue-building-ec2)
:::

### Open Compute EC2 Console 

Click on the `Services` button to start our process.

![](/img/validator_nodes/node-aws-ec2-services1.png)

From the new drop down box, choose the option `Compute`.

![](/img/validator_nodes/node-aws-ec2-services2.png)

Choose the option `EC2` from the Compute section.

![](/img/validator_nodes/node-aws-ec2-services3.png)

### Region

We need to pick a Region to host our EC2 instance.

![](/img/validator_nodes/node-aws-ec2-3.png)

## Continue building EC2

:::info IMPORTANT INFORMATION
We will need an `t2.2xlarge`. You can move between regions to find which regions offer with instance types.

We will use the `t2.2xlarge` for our tutorial.  
:::

If we don't see our Instances dashboard. Choose the `Instances` from the left side menu.

:::note
The term *new* is used simply because (at the time of this documentation creation) this was a new and improved version of the dashboard that AWS recently released. We have the New EC2 Experience selected.
:::

![](/img/validator_nodes/node-aws-ec2-4aa.png)

### Launch Creation Wizard

Choose `Launch instances` from the top right of the dashboard. This will tell AWS to guide us through the launch of an instance via their Launch Wizard.

![](/img/validator_nodes/node-aws-ec2-4a.png)

### Name your instance

It is highly recommended (but not required) to use a Debian distribution.

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

Click on the `t1.micro` Free tier eligible box to expose the search bar.

- Type in `t2.2xlarge`.

- Select `t2.2xlarge`.

![](/img/validator_nodes/node-aws-ec2-instance-a.png)

### SSH Keys

Click on the drop down box under the `Key pair (login)` section and choose the key pair we created and uploaded in the previous sections regarding SSH keys.  If you do not have an SSH key uploaded, return to the [previous](/validate/setup-guides/aws/apply-ssh-ec2) section before continuing.


#### Network Settings

In this section, you will need to make sure that the network and network security settings are properly setup.  We will modifying this more in later sections of this tutorial.

For now, you can leave everything as default.  If you would like to take an extra step to update your SSH access, AWS has identified your local system public IP address for you.  You can select it as the only IP address allowed to access this EC2 instance (VPS, future Node).  Again, we will return to this subject later, so this is optional.

![](/img/validator_nodes/node-aws-network.png)

### Storage

We will need at least `160 GiB` and up to `320 Gib` (Gigabytes) of storage for our Node to function properly.  This storage will be used to handle Global snapshots.

We can leave the root volume as `gp3` and we do not need to alter any other elements of the storage section.

![](/img/validator_nodes/node-aws-ec2-storage-a.png)


### Summary and Launch

On the right side of the launch wizard we can see a summary of our setup.

- Keep the Number of instances to `1`.

- Click on `Launch instance`.

![](/img/validator_nodes/node-aws-ec2-launch.png)

A progress bar will commence and result in...

![](/img/validator_nodes/node-aws-ec2-launch2.png)

:::note
The instance id will not match the one in the examples.  This is a unique identifier for each EC2 instance launched.
:::

### Verify our EC2 instance

We should now see a new EC2 instance in our main Instance panel.

![](/img/validator_nodes/node-aws-ec2-launch3.png)

Click on the `instance-id` to zoom in on the details of our EC2 instance.
We can see our Public IP Address that is needed to access this EC2 instance and log into our Ubuntu system.

![](/img/validator_nodes/node-aws-ec2-public-ip.png)

We can see the Key Pair assigned and if it is correct. Located in the bottom Details section, middle row, middle of the column.

Along with all the other necessary details for this EC2 instance.  You can click around and see all the details as you see fit.

![](/img/validator_nodes/node-aws-ec2-keypair-assigned.png)

---

In the next section we will assign an EIP address to our future Constellation Network Validator Node!