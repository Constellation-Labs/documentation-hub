---
title: Apply Updates
hide_table_of_contents: true
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
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
In a single command that executes both the package manager update that will tell us what we need to upgrade, and then issuing the upgrade, we complete the process of updating our Node's normal and security packages.

```
sudo apt -y update && sudo apt -y upgrade
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo apt -y update && sudo apt -y upgrade<br />
</MacWindow>

:::info Purple Boxes
If during these steps you encounter a PURPLE/PINK box asking you to select options and continue, or to just continue.  You can just select the defaults followed by the `OK`, `Continue` or `Confirm` buttons.

Since we are not doing any special customization to our core services on this VPS, accepting the default recommendations it best practice.  *Advanced users can handle this as they wish, as this does not affect how the Node will run.*.

- If the `OK` (or other acceptance box) is already selected, just hit the `<enter>` key.
- If there are choice to be made, use the `<tab>` key to advanced the selection hi-liter to the `OK` (or other acceptance box) and then hit the `<enter>` key.
:::


