---
title: EC2 Security Groups
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Amazon Web Services (AWS)</title>
  <meta
    name="description"
    content="Apply our Security Group(s) to our EC2 Instance"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

### Securing our EC2 Instance

We need to restrict the access to our EC2 Instance down to just the essentials necessary for our future **Node** to operate properly. We do not want our EC2 instance wide open and vulnerable to malicious actors out on the Internet.

Your instances Firewall rules are called `SGs` for `security groups`.  This is similar to software firewall rule sets.

Let's get right to it...

If you are a visual learner, you can access and view a YouTube series dedicated to this process.  SSH Key Generation Series - **Video 4b** by NetMet.

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network** and **Node Garage**, in the future.

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::

<iframe width="100%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



##### EC2 DASHBOARD

From the new drop down box, choose the option EC2 from the compute service section.

![](/img/validator_nodes/node-aws-sg1.png)

Amazon Web Services select **`EC2`**

![](/img/validator_nodes/node-aws-sg2.png)

From the instance dashboard, click the link corresponding to your **`instance id`**.

![](/img/validator_nodes/node-aws-sg3.png)

This will show all the details of our instance.

  - Select the **`Security tab`**.
  - Select the link corresponding to the **`security group`** that should have between automatically assigned to your **`instance`**.

![](/img/validator_nodes/node-aws-sg4.png)

This will take us to our security group.

##### Amazon Web Services OUTBOUND requests

We are going to allow our instance to access all outbound requests. This set up will allow connections that initiate from your EC2 instance outbound. We will not change them. If you are a more advanced user, you can alter these rules to your liking.

##### Amazon Web Services INBOUND requests

We want to lock down our incoming access. We will only allow the core **Constellation Network** rules inbound.

- Click on the **`Inbound Rules`** tab.
- Click the **`Edit Inbound Rules`*** button.

![](/img/validator_nodes/node-aws-sg5.png)

##### INBOUND RULES
We want to add inbound rules.

The next section can get a little complicated. But, we can get through it! What you want to do is first, click on [this](https://www.whatismyip.com) and write down your `My Public IPv4 IP address`.

You will use this IP address as your Source for the both port **`22`**.

:::note
This is going to restrict access to your Node to your local location only.  If you want access into your node from other locations (like roaming on your mobile device), you will need to create a more complex rule here (out of scope of this document). The less restrictive your access, the more vulnerable your Node becomes.
:::

Let's add `2` Inbound Rules.

We will leave the **`SSH`** as our `Type`, and then begin to enter in our **`IP address`** (obtained from the whatismyip step above).

As you fill it in, the search box should populate and add the `/32` for us. Select (click) the option so it populates just below the search box.

![](/img/validator_nodes/node-aws-sg6.png)

We want to add our second `inbound` rule.

![](/img/validator_nodes/node-aws-sg7.png)

For this rule, we will add a port range with a `-` (dash) in-between the numbers to get **`9000-9001`**.

We will allow Everything to hit this port: **`0.0.0.0/0`**

![](/img/validator_nodes/node-aws-sg8.png)

Our **inbound rules** will look something like this 👇

![](/img/validator_nodes/node-aws-sg9.png)

Click on **`Save rules`**.

### WAY TO GO! You are done.
We can now move on to access our Node!