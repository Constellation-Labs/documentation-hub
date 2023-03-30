---
title: Add SSH Key
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>AWS Apply SSH Keys</title>
  <meta
    name="description"
    content="Uploading our Public key to AWS EC2 Instance"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## AWS - Creation Continued

A virtual private machine (VPS) inside Amazon Web Service's cloud service is called an **EC2** instance.  This stands for *elastic compute cloud*.

You may access our YouTube video titled **Create AWS EC2**, for a detailed visual learning experience. 

You may also follow *step by step* instructions using the tutorial below for Apple/Linux or Windows. 

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::
SSH Key Generation Series - **Video 4b** by NetMet.

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network**, in the future.

<iframe width="80%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

We **need** a way to **access** our `EC2 Instance` (VPS). 

Please refer to the [SSH](../../validator/explain.md) section to create your SSH key pair.  

:::danger WARNING
You also have the ability to create a less secure SSH key pair directly from AWS's **EC2** creation wizard.  This is **not** recommended because it does not offer the ability to supply a **passphrase** with your SSH key.

![](/img/validator_nodes/node-aws-autosshkey.png)
:::

Once you have your **SSH Key Pair** created, you can continue to the next section to launch your future Node **EC2** instance via the AWS Web Console. 