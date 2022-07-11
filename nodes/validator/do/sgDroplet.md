---
title: Digital Ocean Firewall
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Digital Ocean Firewall Setup</title>
  <meta
    name="description"
    content="Secure our ingress and egress rules for our droplet"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

### SETUP DIGITAL OCEAN FIREWALL RULES

If you launched your Droplet, or it is already deployed, we can begin implementing some security measures, by adding Firewall Rules. This will reduce access inbound to our Node from the Internet. This therefor reduces your Node's exposure to nefarious actors.

This will restrict all access except what our Node needs to operate on the HyperGraph.

Let's access the GUI dashboard of our Node. Go ahead and mark down your **external IP Address** for use later on, when we want to connect to our Node.

This is how we will access the Node later.

![](/img/validator_nodes/do-sg1.png)

Click on the Node.

![](/img/validator_nodes/do-sg2.png)

Choose Networking from the LEFT side menu.

![](/img/validator_nodes/do-sg3.png)

Choose the Edit button. This will take us to a screen where we can enter in our firewall rules.

![](/img/validator_nodes/do-sg4.png)

Click on `Create Firewall`. If you already have a firewall created, this will be a list of your current firewalls. There should be an option to create a new firewall rule-set.

![](/img/validator_nodes/do-sg5.png)

Give our Firewall Rule set a name.

![](/img/validator_nodes/do-sg6.png)

Now comes a little harder section. **But, we can get through it!** 

In the previous step, we took note of your Droplet's external IP address.  We need to now obtain our local IP address.  This is the address of the computer you are working on right now to access Digital Ocean's web console.  We will assume that this IP address is where you will be accessing your Droplet from a majority of the time.

Click [here](https://www.whatismyip.com) to get redirected to a website that will identify your local IP address for you.  Mark this IP address down.  It is an important IP to remember.

You will use this IP address as your Source for `TCP port 22`.

:::note
This is going to restrict access to your Node from this location only. If you want access into your node from other locations (like roaming on your mobile device), you will need to create a more complex rule here (out of scope of this document).
The **less restrictive** your access, the more **vulnerable** your Node becomes.
:::

Let's walk through the two Inbound Rules.

We will leave **SSH** as our Type, and then highlight and click the `X` to remove both the `All IPv4` and `All IPv6` items.

![](/img/validator_nodes/do-sg7.png)


Add to that box in its place (replacing the `All IPv4` and `All IPv6`) the IP address we retrieved from [here](https://www.whatismyip.com). One small modification: we want to add `/32` to the end. 

if `111.111.111.111` was our IP address then we would add in `111.111.111.111/32`

:::note
If you want to access your Node from other locations, you will have to add the IP addresses from those locations in one-by-one. If you are more advanced, you can add subnets (out of scope of this tutorial). 
:::

:::danger
If you plan to be very mobile, you can open the SSH to All IPv4 and All IPv6, but this is a security risk, and we do not recommend this type of open access.
:::

![](/img/validator_nodes/do-sg8.png)


Now we will add a custom rule necessary for our future `Node` to operate properly.

Click the dropdown box and choose **`custom`**

![](/img/validator_nodes/do-sg9.png)

In the ports column, we will add in the start port then the end port, with a dash between the port numbers. **`9000-9001`**.

![](/img/validator_nodes/do-sg10.png)

We will leave the `All IPv4` and `All IPv6` items.

---

#### Final Firewall Table 

| Type	| Protocol	| Port Range	| Sources |
| ----  | -----| ----- | ---- |
| Inbound	| TCP	| 22	| your local ip address /32 |
| Inbound	| TCP	| 9000-9001	| All IPv4 IPv6

| Type	| Protocol	| Port Range	| Sources |
| ----  | -----| ----- | ---- |
| Outbound	| ICMP	| All Ports	| All IPv4 IPv6 |
| Outbound	| All TCP	| All Ports |	All IPv4 IPv6 |
| Outbound	| All UDP	| All Ports	| All IPv4 IPv6 |


Match the rest of the rules, following the same pattern. 

In the Apply to Droplet section, start typing the name of your Node, and it should auto-populate. 

Click on the Create Firewall.

Create and Apply to Our Node

![](/img/validator_nodes/do-sg13.png)

The creation of your Digital Ocean Droplet is **complete!**

Our **Droplet** is now ready to be turning into a **Constellation Node** running **Tessellation**!