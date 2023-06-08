---
title: Create Instance Part 2
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>GCP Create Instance Part 2</title>
  <meta
    name="description"
    content="Create an instance on Google Cloud Platform (GCP). 2 of 2"
  />
</head>

## Google Cloud Platform (GCP) 
### Create Instance Part 2 of 2


We still have some configuration to do to instantiate our VM, so let's keep going.


#### NETWORKING 

- Scroll down to Networking and expand the panel so we can add some customization.

![](/img/validator_nodes/node-gcp-instance9.png)

##### IP Forwarding 
It is important that we enable `IP forwarding` to allow traffic to flow ingress/egress.

![](/img/validator_nodes/node-gcp-instance10.png)

- Find the Network interfaces and expand out `default`.

![](/img/validator_nodes/node-gcp-instance11.png)

- Expand Primary internal IP and click on `RESERVE STATIC INTERNAL IP ADDRESS`.

![](/img/validator_nodes/node-gcp-instance12.png)

- Select Assign Automatically
- Give a name to your IP
- Add a Description (Optional)

![](/img/validator_nodes/node-gcp-instance13.png)

- Scroll down a little inside the Network Interfaces to External IP

![](/img/validator_nodes/node-gcp-instance14.png)

- Select `CREATE IP ADDRESS`

![](/img/validator_nodes/node-gcp-instance15.png)


- Give a name to your IP
- Add a Description (Optional)
- Click `RESERVE`

![](/img/validator_nodes/node-gcp-instance16.png)

- Return to the VM instance creation main panel.

#### READY TO LAUNCH 

- Click on `DONE`

![](/img/validator_nodes/node-gcp-instance17.png)

Nothing more to do (for now)... let's launch it!

- Click on `CREATE`

![](/img/validator_nodes/node-gcp-instance18.png)

After a few moments, our VM will complete the spin up process and be ready for us to access.

#### VERIFY
You should see your VM spin up.

![](/img/validator_nodes/node-gcp-instance19.png)