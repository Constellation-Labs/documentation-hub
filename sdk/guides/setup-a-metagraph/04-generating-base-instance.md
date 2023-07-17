---
id: generating-base-instance
title: Generating base instance
---

The base instance will serve as a template for all other instances in your Metagraph. It will make it easier and faster to spin up new instances. Follow these steps to create a base instance:

- Navigate to the **`Instances`** section on the Amazon EC2 console.
    [Link to Instances](https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-2#Instances)

:::note
You should switch from us-west-2 to the region you’re using.
:::

![base instance 01](/img/sdk/base-intance-01.png)

- Click on **`Launch Instances`**.
- Assign a name to your instance. For this guide, let's call it **`Metagraph base image`**.
- In the **`Choose an Amazon Machine Image (AMI)`** section, select `Ubuntu` and then `Ubuntu server 20.04`. You should keep `64-bit (x86)`.

    ![base instance 02](/img/sdk/base-intance-02.png)

- For the instance type, choose a model with **`2 vCPUs`** and **`8 GiB memory`**. In this case, we'll use the **`t2.large`** instance type.

    ![base instance 03](/img/sdk/base-intance-03.png)

- In the **`Configure Instance Details`** step, select the key pair you created earlier in the **`Key pair name`** field.

    ![base instance 04](/img/sdk/base-intance-04.png)

- On `Network settings` section, you select the security group you created earlier.

    ![base instance 05](/img/sdk/base-intance-05.png)

- On `Configure storage` section, you specify the amount of storage for the instance. For this tutorial, we'll set it to **`160 GiB`**.

    ![base instance 06](/img/sdk/base-intance-06.png)

- Finally, press `Launch instance`
- Your base instance should now be running. You can check the status of your instance in the **`Instances`** section of the Amazon EC2 console.

    ![base instance 07](/img/sdk/base-intance-07.png)
