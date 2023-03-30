---
title: Add SSH Key
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Apply SSH Keys</title>
  <meta
    name="description"
    content="Uploading our Public key to Digital Ocean Droplet"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Digital Ocean - Creation Continued

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

We need a way to access our **Droplet** (VPS). 

:::danger CAUTION
Popular opinion (`and Constellation Network`) **strongly** suggests that it is a **bad** idea to use the `password authentication` method. 

We will setup access to our Droplet, via an **SSH Key pair**, created here [mac](../sshkeys/creationMac) or here [windows](../sshkeys/creationWin).
:::

Continuing where we left off from the [Create a Droplet](createDroplet.md) section:

  1. Choose **SSH Keys**
  2. Choose **New SSH Key**

![](/img/validator_nodes/node-do-sshkey1.png)

  1. Paste the public **SSH Key** contents saved in previous steps into this box
  2. Provide a **name** for your public key on Digital Ocean.  This will be a name that Digital Ocean will recognize to offer you access to your key in the future. (`tag`)
  3. Click the **Add SSH Key** button

![](/img/validator_nodes/node-do-sshkey2.png)

#### Next steps

Staying on the Digital Ocean web console page, inside the Create Droplet process, continue to the final steps to launch your Droplet in the Digital Ocean cloud.