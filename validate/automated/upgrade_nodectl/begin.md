---
title: Upgrade nodectl - Begin
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="Upgrade nodectl utility"
  />
</head>

## Execute the upgrade command

From our Node that is already running **nodectl** we can enter in the special command to upgrade the utility itself.

```
sudo nodectl upgrade_nodectl
```
<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl upgrade_nodectl
</MacWindow>

:::info PRE-RELEASE OR DOWNGRADES
In the event we are attempting to downgrade to a previous version of nodectl or upgrade to a pre-release version of nodectl, we can use the `-v` option and specify the exact version we want to upgrade/downgrade to.

Important: If you attempt to downgrade to a previous version that does not support features related to the current version and had a migration path, you may break the use of nodectl, or you may get unexpected results.

```
sudo nodectl upgrade_nodectl -v <version_name>
```
:::