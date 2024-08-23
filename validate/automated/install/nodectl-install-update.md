---
title: New Install - Apply Updates
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

We will apply any known updates to the **VPS** before we continue to install nodeclt and turn our VPS into a Constellation Node.

:::danger IMPORTANT
You will not be using the mouse during the rest of this documentation process, you will need to rely on the keyboard only.
:::

### Update
In a single line command that executes both the package manager update and upgrade, we complete the process of updating our VPS's regular and security packages.

1. The `update`` will download and update the list of packages that are available for upgrades.
1. The `upgrade` command will perform the upgrades using the newly updated list.
1. The `-y` adds the `yes` confirmation to both commands so we are not prompted with an extra confirmation request before the actions are executed.

```
sudo apt -y update && sudo apt -y upgrade
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo apt -y update && sudo apt -y upgrade<br />
</MacWindow>

### Purple Boxes

:::info Purple Boxes
If during these steps you encounter a PURPLE/PINK box asking you to select options and continue, or to just continue.  You can select the defaults followed by the `OK`, `Continue` or `Confirm` buttons.

For a update message that looks like 👇 this, we can just hit <kbd>enter</kbd>.

![](/img/validator_nodes/nodectl_purple.png)

or for a message that looks like 👇 this.

![](/img/validator_nodes/nodectl_purple1.png)

Hit the <kbd>tab</kbd> key until the <kbd>ok</kbd> is highlighted, then hit the <kbd>enter</kbd>.

![](/img/validator_nodes/nodectl_purple2.png)

Since we are not doing any special customization to our core services on this VPS, accepting the default recommendations it best practice.  

*Advanced users can handle this as they wish, as this does not affect how the Node will run.*.
:::

#### Quick Installer

If you reached this documentation from the quick installation guide, you can return quick install guide by clicking [here](/validate/automated/quickInstall/nodectl-qi-install-prep#preparation-assumptions)


