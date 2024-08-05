---
title: Create Project
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Google Cloud Platform GCP</title>
  <meta
    name="description"
    content="Create a Project to work with on Google Cloud Platform (GCP)."
  />
</head>

## Google Cloud Platform (GCP) Project

Before we begin, we need to create a Project inside of Google Cloud Platform to hold our VM instance. We will create this now.

##### INSTRUCTIONS

- Connect to to your Google account.
- Open the `Select a project` panel.

![](/img/validator_nodes/node-gcp-project1.png)

- Select a `new` project.

![](/img/validator_nodes/node-gcp-project2.png)

We will work on our Hypergraph or metagraph Validator Node via a GCP `Project`. This will help us organize our GCP projects, whether it is multiple Constellation metagraphs in the future, or other projects unrelated.

:::info
In our examples we will use `TestNet`.
:::

##### NEW PROJECT

![](/img/validator_nodes/node-gcp-project3.png)

When the project completes its build, it should populate in the dashboard.

![](/img/validator_nodes/node-gcp-project4.png)