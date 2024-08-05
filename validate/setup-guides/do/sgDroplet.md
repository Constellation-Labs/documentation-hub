---
title: Create Firewall
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Firewall Setup</title>
  <meta
    name="description"
    content="Secure our ingress and egress rules for our droplet"
  />
</head>

## Setup Digital Ocean Firewall Rules

If you launched your Droplet, and it is already deployed, we can begin implementing some necessary access rules; as well as, security measures, by adding Firewall Rules. This will reduce access inbound to our Node from the Internet. Reducing your Node's exposure to nefarious actors.

This will restrict all access except what our Node needs to operate on the Hypergraph.

Now, let's access the GUI dashboard of our Node via the Digital Ocean Web Console. 

### Obtain IP address for records

Go ahead and mark down your external IP Address.  The IP address will be pivotal information necessary to help us connect into our Node later in the process.

![](/img/validator_nodes/do-sg1.png)

### Access firewall section

Click on the **Node**.

![](/img/validator_nodes/do-sg2.png)

Choose **Networking** from the LEFT side menu.

![](/img/validator_nodes/do-sg3.png)

Choose the **Edit** button. This will take us to a screen where we can enter in our firewall rules.

![](/img/validator_nodes/do-sg4.png)

Click on **Create Firewall**. If you already have a firewall created, you will find your firewall profile in a provided list of your current firewalls. 

There should be an option to create a new firewall rule-set.

![](/img/validator_nodes/do-sg5.png)

### Create rule set

Give our Firewall Rule set a name.

![](/img/validator_nodes/do-sg6.png)

Now comes a little harder section. But, we can get through it!

In the previous step, we took note of your Droplet's external IP address.  

### IP address access

We need to now obtain our local IP address.  

This is the address of the computer you are working on right now to access Digital Ocean's web console.  We will assume that this location, computer or system (IP address) is where you will be accessing your Droplet most of the time.  In a majority of cases, your Internet access will share a single public IP address with the rest of your Office, Home Office or Home network.  In the case your work environment uses multiple public IP addresses (NAT pool), you may want to contact your site's Network Administrator to obtain the network CIDR (IP range) for your Office.

### CIDR: Classless Inter-Domain Routing

Click [here](https://www.whatismyip.com) to get redirected to a website ([whatismyip.com](https://www.whatismyip.com)) that will identify your `local IP` address for you. Please mark this IP address down, as it will be important to remember in the future.

You will use this IP address as your Source for `TCP port 22` (ssh).

:::note FOR YOUR INFORMATION
This is going to restrict access to your Node from this location only (your `local` location with the computer you are working on at this very moment). If you want access into your node from other locations (like roaming on your mobile device), you will need to create a more complex rule here (out of scope of this document).
:::
:::danger
The less restrictive your access, the more vulnerable your Node becomes.
:::

### Add Secure Shell rules

Let's walk through the two Inbound Rules.

We will leave SSH as our Type, and then highlight (select the individual item) and click the `X` to remove both the `All IPv4` and `All IPv6` items.

![](/img/validator_nodes/do-sg7.png)


Add to that box in its place (replacing the (now removed) `All IPv4` and `All IPv6`) the IP address we retrieved from [here](https://www.whatismyip.com). One small modification: we want to add `/32` to the end. 

Example) If `113.113.113.113` was our IP address then we would add in `113.113.113.113/32`

:::note
If you want to access your Node from other locations, you will have to add the IP addresses from those locations in `one-by-one`. If you are more advanced, you can add `subnets` by updating the `CIDR` block (subnet mask). 
:::

:::info
If you plan to be very mobile, you can open the SSH ports to `All IPv4` and `All IPv6`, but this is a security risk, and we do not recommend this type of open access.

Centralized Corporations (and businesses) generally never open SSH access to the external Internet.  However, in a decentralized singleton environment; unless you are an advanced user, this is a harder problem to solve.  Instead, we restrict our access as much as possible via `access-lists` and `security lock down` to `singleton` known IP addresses only.
:::

![](/img/validator_nodes/do-sg8.png)


### Add Constellation Network rules 

Now we will add a custom rule necessary for our future `Node` to operate properly.

Click the dropdown box and choose **custom**

![](/img/validator_nodes/do-sg9.png)

In the Ports column, we will add in the Start port, then the End port, with a `dash` between the port numbers. **`9000-9001`**.

![](/img/validator_nodes/do-sg10.png)

We will **leave** the `All IPv4` and `All IPv6` items.

## MainNet, IntegrationNet or TestNet Launch Requirement 
It is highly recommended that you use `nodectl` to install and control/admin your Node.

Please add to your firewall configuration ports `9010-9011` to allow access to your MainNet, IntegrationNet or TestNet Validator Node's `Layer1` connection.  To accomplish this, repeat the exact same steps you used to open up ports `9000-9001`.  

:::note
You do not need to use ports `9000-9001` or `9010-9011`, you can use whatever ports best fit your scenario.  If you are not an advanced user, these ports will work well.  Advanced users, please make sure that whatever ports you decide to use are not in conflict with other services or protocols on your VPS, and it is highly recommended to stay within the range of `1024-65536`.
:::

---

### Final Firewall Table 

| Type	| Protocol	| Port Range	| Sources |
| ----  | -----| ----- | ---- |
| Inbound	| TCP	| 22	| your local ip address /32 |
| Inbound	| TCP	| 9000-9001	| All IPv4 IPv6
| Inbound	| TCP	| 9010-9011	| All IPv4 IPv6

| Type	| Protocol	| Port Range	| Sources |
| ----  | -----| ----- | ---- |
| Outbound	| ICMP	| All Ports	| All IPv4 IPv6 |
| Outbound	| All TCP	| All Ports |	All IPv4 IPv6 |
| Outbound	| All UDP	| All Ports	| All IPv4 IPv6 |


Match the rest of the rules, following the same pattern. 

In the Apply to Droplet section, start typing the name of your Node, and it should auto-populate. 

Lastly, click on the **Create Firewall**.

### Create and Apply to Our Node

![](/img/validator_nodes/do-sg13.png)

The creation of your Digital Ocean Droplet is complete!

Our Droplet is now ready to be turning into a Constellation Node running Tessellation!