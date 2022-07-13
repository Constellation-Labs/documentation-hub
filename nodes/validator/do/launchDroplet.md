---
title: Launch Droplet
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

We only need one droplet for this process, so we can leave this at 1 droplet.


You may want to change the hostname of your node to something that makes a little more sense to you. However, if you want to keep some anonymity to the purpose of your Node, that is up to you.

:::note
This should be behind the scenes and only you will have access to this information, so a more familiar name, may be in order?
:::

![](/img/validator_nodes/node-do-launch1.png)


You can add TAGs to you Node, it helps in situations where you have many other resources that you might be using in conjunction with your Node, for your business needs.

:::info
Bottom Line: You **do not** need TAGs for our objectives, but if you find that you may want to includes TAGs for some purpose in the future, you can add them later. Go ahead and enter any TAGs here, or you can leave this blank.
:::

![](/img/validator_nodes/node-do-launch2.png)

Adding **backups**, this will cost you a little extra money. 

Digital Ocean can make snapshots of your instance in the event of a failure, etc. If technical difficulties or corruption occurs, you will be able to get back up and running quickly.

This is **not** a necessary action because Constellation doesn't hold anything important on your Node. If you are required to rebuild your Node, you can have it back up and running on a new instance pretty quickly. 

:::danger
Your private key file (p12), this is not something that should be backed up in a snapshot, you should backup and protect your private key file externally outside of Digital Ocean. So again, this is an optional element.
:::

The **ONE** important piece of information that should be backed up on your Node is your **P12** file.  This is discussed later on in the documentation, and is not important at this moment.  However to backup this file, you will simply download it and store it off line in cold storage for use if a backup/restore is needed.

![](/img/validator_nodes/node-do-launch2.png)

##### LAUNCH

You are READY! On the Digital Ocean Site, click the `CREATE DROPLET` button to launch your Droplet in the cloud!

![](/img/validator_nodes/node-do-launch3.png)

Wait for your Droplet to complete its creation. Upon completion, we will be ready to add our security to lock down our Node properly and allow Constellation the proper access to our Node, allowing your Node to join the TestNet network and begin work.