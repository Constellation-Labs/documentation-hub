---
title: nodectl upgrade path
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Understanding the nodectl upgrade path"
  />
</head>

## Understanding the Upgrade Path

Utilizing the [upgrade_path](./nodectlCommands.md#upgrade_path) command, you can review what versions of **nodectl** you need upgrade to **before** reaching the final version you are attempting to reach.  

It will offer you information regarding what the `upgrade path` is to properly advance your way, through versions of **nodectl** from the current version your Node is running to the latest version.

:::danger IMPORTANT
Regardless of what version you are on.  It is **HIGHLY RECOMMENDED** and **REQUIRED** to download the next version in line with `path` shown with the [upgrade_path](./nodectlCommands.md#upgrade-path) command (available after version 2), and regardless of... to utilize the [upgrade command](./nodectlCommands.md#upgrade) after the download is completed, for each version you download.
:::

## Current Upgrade Path Table

| Previous Version | Upgrade Directly To Version |
| --------- | ----- |
| v0.1.0 | v0.14.1 |
| v0.14.1 | v1.8.1 |
| v1.8.1 | v1.11.7 |
| v1.11.7 | v1.12.0 |
| v1.12.0 | v2.7.1 |


### Example

You are on version `v0.1.5`

You will need to start by finding the closest version to your version, that is great than your version.

1. We find `v1.14.1`

2. We will now download `v1.14.1` using the `wget` command

3. We will upgrade our Node via `sudo nodectl upgrade`

4. We will now download `v1.8.1`

5. We will upgrade our Node via `sudo nodectl upgrade`

6. We will now download `v1.11.7`

7. We will upgrade our Node via `sudo nodectl upgrade`

8. We will now download `v1.12.0`

9. We will upgrade our Node via `sudo nodectl upgrade`

:::danger IMPORTANT
**Version 1.12.0** to **version 2.7.1** will require a special **migration** process.

This migration can be accomplished by following the step-by-step process via the [migration tutorial](nodectlMigrateV1.md).
:::

End of document