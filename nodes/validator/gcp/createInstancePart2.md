---
title: Create Instance Part 2
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>GCP Create Instance Part 2</title>
  <meta
    name="description"
    content="Create an instance on Google Cloud Platform (GCP). 2 of 2"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Google Cloud Platform (GCP) 
### Create Instance Part 2 of 2


We still have some configuration to do to instantiate our VM, let's keep going.

---

##### NETWORKING 

Scroll Down to **`Networking`** and expand the panel so we can add some customization.

![](/img/validator_nodes/node-gcp-instance9.png)

###### IP Forwarding 
It is important that we enable `IP forwarding` to allow traffic to flow ingress/egress.

![](/img/validator_nodes/node-gcp-instance10.png)

Find the `Network interfaces` and expand out the `default`.

![](/img/validator_nodes/node-gcp-instance11.png)

Expand the **`Primary internal IP`** and click on the **`RESERVE STATIC INTERNAL IP ADDRESS`**

![](/img/validator_nodes/node-gcp-instance12.png)

- Select **Assign Automatically**.
- Give a **Name** to your **`IP`**
- Optional **Description**.

![](/img/validator_nodes/node-gcp-instance13.png)

Scroll down a little inside the Network Interfaces to **`External IP`**

![](/img/validator_nodes/node-gcp-instance14.png)

Select **`CREATE IP ADDRESS`**

![](/img/validator_nodes/node-gcp-instance15.png)


- Give a **Name** to your **`IP`**
- Optional **Description**.
- Click **`RESERVE`**

![](/img/validator_nodes/node-gcp-instance16.png)

Return to the VM instance creation main panel.

##### READY TO LAUNCH 

Click on **`DONE`**

![](/img/validator_nodes/node-gcp-instance17.png)

Nothing more to do (for now)... let's launch it!

Click on **`CREATE`**

![](/img/validator_nodes/node-gcp-instance18.png)

After a few moments, our **VM** will complete the spin up process and be ready for us to access.

##### VERIFY
You should see your VM spin up.

![](/img/validator_nodes/node-gcp-instance19.png)