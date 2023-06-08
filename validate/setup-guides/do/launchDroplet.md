---
title: Deploy Droplet
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean</title>
  <meta
    name="description"
    content="Final Steps towards launching a Digital Ocean Droplet in the Digital Ocean cloud."
  />
</head>

## Finalize Details

### Instances
We only need only **one** droplet for this process, so we can leave this set to `1 Droplet`.


You may want to change the hostname of your node to something that makes a little more sense to you. However, if you want to keep some anonymity as to the purpose of your Node, that is up to you.

:::note
If you choose to install your Node using `nodectl`, your hostname will be changed for you.  If you are manually building your Node, this hostname will be behind the scenes and only you will have access to this information, so a more familiar name, may be in order?
:::

![](/img/validator_nodes/node-do-launch1.png)

You can add **tags** to your Node, which helps in situations where you have other resources that you might be using in conjunction with your Node, for your business needs.

:::info
Bottom Line: You **do not** need `tags` for our objectives, but if you find that you may want to includes `tags` for some purpose in the future, you can add them later. Go ahead and enter any `tags` here, or you can leave this blank.
:::

![](/img/validator_nodes/node-do-launch2.png)

### Project

If you created a Project name for your Node(s), you can select it here; otherwise, you can keep the default project name.

![](/img/validator_nodes/node-do-project.png)


### Create Droplet

On the Digital Ocean Site, click the `Create Droplet` button to launch your Droplet in the cloud!

![](/img/validator_nodes/node-do-launch3.png)

Wait for your Droplet to complete its creation. Upon completion, we will be ready to add our security to lock down our Node properly and allow Constellation the proper access to our Node, allowing your Node to join the Hypergraph network and begin work.