---
title: Add SSH Key
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Apply SSH Keys</title>
  <meta
    name="description"
    content="Uploading our Public key to Digital Ocean Droplet"
  />
</head>

## Digital Ocean - Creation Continued

### Creating SSH Keys

If you prefer a visual accompaniment to help you to configure your Droplet to accept your SSH Keys, or you have not created your SSH keys; you may access our YouTube video titled **Create Digital Ocean Droplet**, for a detailed visual learning experience.  This video also shows you have to upload your SSH keys 

You may also follow *step by step* instructions using the tutorial below for Apple/Linux or Windows. 

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning and follow along with the step-by-step below.
:::
**SSH Key Generation Series** - Video 4a by NetMet.

Please like and subscribe to support NetMet's work, to be alerted to new content specifically applied to Constellation Network in the future.

<iframe width="70%" height="380" src="https://www.youtube.com/embed/Vs_g-e99qTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Upload SSH Keys to our Droplet

### Authentication Method

We need a way to access our Droplet (VPS). 

We will setup access to our Droplet, via an SSH Key pair, created here [mac](/validate/validator/creation-mac) or here [windows](/validate/validator/creation-win). (Also visualized in the YouTube Series above.)

  1. Choose SSH Keys
  2. Choose New SSH Key

![](/img/validator_nodes/node-do-sshkey1.png)
![](/img/validator_nodes/node-do-sshkey2.png)

  1. Paste the public SSH Key contents saved in previous steps into this box
  2. Provide a name for your public key on Digital Ocean.  This will be a name that Digital Ocean will recognize to offer you access to your key in the future. (`tag`)
  3. Click the Add SSH Key button

![](/img/validator_nodes/node-do-sshkey3.png)

## Next steps

Staying on the Digital Ocean web console page, inside the Create Droplet process, continue to the next steps.