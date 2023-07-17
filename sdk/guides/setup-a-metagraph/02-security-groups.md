---
id: security-groups
title: Security groups
---

Security groups act as virtual firewalls that control your instances' inbound and outbound traffic. To set up the Metagraph, we need to create a specific security group. Here's how you can do it:

- First, navigate to the **`Security Groups`** section in the Amazon EC2 console.

    
    ![Menu ec2](/img/sdk/security-group-1.png)
    
- Click on **`Create Security Group`**.
    [Link to Security Groups](https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-2#SecurityGroups)

:::note
You should switch from us-west-2 to the region you’re using.
:::

- Provide a name for your security group in the given field, we can use `MetagraphSecurityGroup`.
- Now, we need to add an inbound rule. This rule will open certain ports to allow external access to the container. Click on **`Add Rule`** under the **`Inbound rules`** section.
- You will need to provide the following information for the inbound rules:

    ![Menu ec2](/img/sdk/security-group-2.png)

- Finalize the security group setup.

:::caution
Remember, the security group settings can greatly influence the accessibility and security of your instances!
:::
