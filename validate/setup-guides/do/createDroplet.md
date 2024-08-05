---
title: Create Droplet
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Create Droplet</title>
  <meta
    name="description"
    content="Setting up a Digital Ocean VPS called a Droplet"
  />
</head>

## Digital Ocean - Droplet

A [virtual private machine (VPS)](/validate/validator/vps) inside Digital Ocean's cloud service is called a **droplet**.

You may access our YouTube video titled **Create Digital Ocean Droplet**, for a detailed visual learning experience.

You may also follow *step by step* instructions using the tutorial below for Apple/Linux or Windows. 

:::info Video Recommendations
It is important to understand that as Digital Ocean updates their website continuously to improve their customer experience, the video details may become out dated; however, *besides some minor differences of what to click on* you should have no issues following the series.  **It is also highly recommended to follow the step-by-step below while watching the video(s)**.

**IMPORTANT**

In the video NetMet creates a Droplet for **$40/USD** per month.  At the time of the video series creation, this was the recommended Droplet size intended to run your Node on a *single* Hypergraph cluster.  This has been updated to a **$96/USD** droplet, that meets the necessary specifications for running the required Hypergraph and metagraph on your new Node.  Please take note of this while watching the YouTube series.

If you choose the watch the YouTube Series, it is highly recommended to watch the entire series from the beginning.
:::

## SSH Key Generation Series - **Video 4a** by NetMet.

Video 4a describes building a VPS on Digital Ocean.  You should have your [SSH keys created](/validate/validator/ssh-keys) prior to initialing the creation and deployment of your Constellation Network Validator Node on Digital Ocean.

Please **like** and **subscribe** to support NetMet's work, and be alerted to new content specifically applied to Constellation Network in the future.

<iframe width="70%" height="380" src="https://www.youtube.com/embed/Vs_g-e99qTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Build Droplet
Now that we are all [signed up on Digital Ocean](/validate/setup-guides/do/account), we can begin creating our Droplet to run our Node. After successfully logging in to Digital Ocean, you should find yourself on their main Web console page.

The `Create` dropdown list selector is located in the top right corner of the page.

![](/img/validator_nodes/node-do-create1.png)

From the dropdown selector, choose the `Droplets` option.

This will load our `Create Droplets` building wizard screen and allow us to configure our virtual cloud droplet details.

:::note
Yes, you may be eligible for a promotional credit. 😀  However, this is not related to Constellation Network.
:::

### Start Droplet Build Wizard

![](/img/validator_nodes/node-do-create2.png)

Selecting this option will start the Droplet Build Wizard.

### Select Region 

We now need to pick a region (location) where our Node will live (or be creating within). 

Generally, you will want the location of your Node to be closest to your customer. This isn't really known, so we can choose criteria that best fits *you*:

  - Closest to you.
  - Most reliable up time
  - Fastest transmission rate

:::info
Location of your future Node (VPS) is part of the whole concept of *decentralization*.
:::

![](/img/validator_nodes/node-do-region.png)


### Choose Operating System Image

![](/img/validator_nodes/node-do-os.png)

:::info Information
Throughout the Validator Node documentation, we will be referring to the Ubuntu Distribution.  This is a Debian based operating system.  We chose this distribution because it comes standard with many features that make running a linux VPS more simple.

We are going to use a `shared tenancy` plan, which simply means we will enter into a *trustless* environment utilizing a system that other people, companies (company), or organizations may also be using.
::::

### Choose a plan

We will use the Basic plan, as this will work for us.

:::note Plan Costs
You can increase the plan to your liking, if you deem it necessary.  The more feature rich plan you decide to invest in, the better your Node may be able to perform on the Hypergraph and metagraph.
:::

![](/img/validator_nodes/node-do-sizing1.png)

Our instance is going to need some upgraded resources to properly run well. 

Our goal is to allow our system enough fire power to build a nice PRO score that will allow us to earn more passive income, and it will allow us to increase our TPS as well. 

### Choose instance resources

As stated in the [Hardware Requirements](/validate/validator/specs)

![](/img/validator_nodes/node-do-sizing2.png)

### Storage

We do not need additional storage.  We will **skip** this section.

![](/img/validator_nodes/node-do-storage.png)


## Next Steps

Next, we will work on uploading our SSH Key Pair which was created [here](/validate/validator/ssh-keys).