---
title: Create DO VPS
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Create Droplet</title>
  <meta
    name="description"
    content="Setting up a Digital Ocean VPS called a Droplet"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Digital Ocean - Droplet

A virtual private machine (VPS) inside Digital Ocean's cloud service is called a **droplet**.

You may access our YouTube video titled **Create Digital Ocean Droplet**, for a detailed visual learning experience. 

You may also follow *step by step* instructions using the tutorial below for Apple/Linux or Windows. 

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::
SSH Key Generation Series - **Video 4a** by NetMet.

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network**, in the future.

<iframe width="70%" height="380" src="https://www.youtube.com/embed/Vs_g-e99qTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Now that we are all signed up on **Digital Ocean**, and ready to start building our Node, we will get down to business. 

When you are successfully logged into Digital Ocean, you should find yourself on their main Web console page.

On the **TOP RIGHT** is your `Create` drop down list button!

![](/img/validator_nodes/node-do-create1.png)

From the **drop down box**, choose the `first` option **`Droplets`**.

This will load our **Create Droplets** building wizard screen and allow us to configure our virtual cloud droplet details.

:::note
Yes, you may be eligible for a promotional credit. 😀
:::

##### CHOOSE DROPLETS!

![](/img/validator_nodes/node-do-create2.png)

We are ready to choose an **image** that will be our base operating system. This is called our distribution.

**Ubuntu 20.04** is a currently supported version that should work well for us.

:::tip
You can run any distribution you would like; however, it is **highly** recommended to use a `Debian` distribution.
:::

##### CHOOSE OUR OS!

![](/img/validator_nodes/node-do-create3.png)

We are going to use a `shared tenancy` plan, which simply means we will enter into a **trustless** environment utilizing a system that other people, companies (company), or organizations may also be using.

We will use the Basic plan, as this will work for us.

:::note
You can increase the plan to your liking, if you deem it necessary.
:::

##### CHOOSE OUR PLAN!

![](/img/validator_nodes/node-do-create4.png)

Our instance is going to need some upgraded resources to properly run well. 

Our goal is to allow our system enough fire power to build a nice **PRO score** that will allow us to earn more passive income, and it will allow us to increase our **TPS** as well. 

##### CHOOSE OUR INSTANCES RESOURCES!

![](/img/validator_nodes/node-do-create5.png)

We **do not** need block storage.

![](/img/validator_nodes/node-do-create6.png)

##### NODE LOCATION 

We now need to pick a **location** where our Node should be built. 

Generally, you want the location of your Node to be closest to **your customer**. This isn't really known, so we can choose criteria that best fits *you*.:

  - Closest to you.
  - Most reliable up time
  - Fastest transmission rate

:::info
Location of your future Node (VPS) is part of the whole concept of **decentralization**
:::

![](/img/validator_nodes/node-do-create7.png)


When working with multiple instances in a corporate (or other) situation when/where you have a full infrastructure in place, we would need to structure our infrastructure into VPCs.

We do not need to modify our **default VPC** (Virtual Private Cloud). You can skip this step.

We don't need to set this up. Leave as default.

![](/img/validator_nodes/node-do-create8.png)


##### MONITORING

We want to turn on the option that will offer you a nice **visual dashboard** to help monitor your Node’s performance.
Check the Monitoring option.

![](/img/validator_nodes/node-do-create9.png)

##### Next Steps

Next, we will work on uploading our **SSH Key Pair** which was created [here](../sshkeys/explain.md).  Please review if necessary and then continue to the next section for your Digital Ocean setup steps.  You will remain on the `create Droplet` section of the Digital Ocean console web portal.