---
title: Recommend Options
hide_table_of_contents: false
---

<head>
  <title>Digital Ocean Node Options</title>
  <meta
    name="description"
    content="Digital Ocean Droplet Creation options recommendations."
  />
</head>

## Digital Ocean Recommendations

![](/img/validator_nodes/node-do-options.png)

This is a free option and can come in handy as your Node continues to run on the Hypergraph and metagraph.

A Constellation Network Validator Node is mostly an ephemeral device.

If the following scenarios arise:

   - Node stops functioning properly
   - Node is considered compromised in any way
   - New OS upgrade is required*

Simply creating a new Node is a better option than recovering from a backup.

* *In order to make sure your Linux Distribution is optimal, it is recommended to build a new VPS from a Cloud Provider approved image; instead of, attempting to do a distribution upgrade via the operating system's package manager.*

:::danger IMPORTANT
If you choose to enable backups, your `private key file (p12)` should not be backed up in a Digital Ocean snapshot. You should backup and protect your private key file outside of Digital Ocean, in cold storage. So again, this is an optional element up to your discretion.
:::