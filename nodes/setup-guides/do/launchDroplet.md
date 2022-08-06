---
title: Deploy Droplet
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean</title>
  <meta
    name="description"
    content="Final Steps towards launching a Digital Ocean Droplet in the Digital Ocean cloud."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

##### INSTANCES

We only need only **one** droplet for this process, so we can leave this set to `1 Droplet`.


You may want to change the hostname of your node to something that makes a little more sense to you. However, if you want to keep some anonymity as to the purpose of your Node, that is up to you.

:::note
This should be behind the scenes and only you will have access to this information, so a more familiar name, may be in order?
:::

![](/img/validator_nodes/node-do-launch1.png)


You can add **tags** to you Node, it helps in situations where you have many other resources that you might be using in conjunction with your Node, for your business needs.

:::info
Bottom Line: You **do not** need `tags` for our objectives, but if you find that you may want to includes `tags` for some purpose in the future, you can add them later. Go ahead and enter any `tags` here, or you can leave this blank.
:::

![](/img/validator_nodes/node-do-launch2.png)

Adding **backups**, this will cost you a little extra money. 

Digital Ocean can make snapshots of your instance in the event of a failure, etc. If technical difficulties or corruption occurs, you will be able to get back up and running quickly.

This is **not** a necessary action because Constellation doesn't hold anything important on your Node. If you are required to rebuild your Node, you can have it back up and running on a new instance pretty quickly, as well.  Also, backups may hold **sensitive** information. 

:::danger HIGHLY IMPORTANT
**ONE** important piece of information is your **`private key file (p12)`**, this is **not** something that should be backed up in a snapshot, you should backup and protect your private key file externally outside of Digital Ocean, in cold storage. So again, this is an optional element up to your discretion.
:::

![](/img/validator_nodes/node-do-launch4.png)

##### LAUNCH

You are **READY**! On the Digital Ocean Site, click the `CREATE DROPLET` button to launch your **Droplet** in the cloud!

![](/img/validator_nodes/node-do-launch3.png)

Wait for your Droplet to complete its creation. Upon completion, we will be ready to add our security to lock down our Node properly and allow Constellation the proper access to our Node, allowing your Node to join the HyperGraph network and begin work.