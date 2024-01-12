---
id: generating-base-instance
title: Generating base instance
---

In this section, we will create a single EC2 instance that we will use as a template for the other two EC2 instances. This allows us to perform these tasks once and then have the output replicated to all the instances.

### Create a Base Instance
Navigate to the **`Instances`** section on the Amazon EC2 console.

![base instance 01](/img/sdk/base-intance-01.png)

#### Click on **`Launch Instances`**.
Assign a name to your instance. For this guide, we will call it **`Metagraph base image`**.

#### Choose an AMI
In the **`Choose an Amazon Machine Image (AMI)`** section, select `Ubuntu` and then `Ubuntu server 20.04`. You should keep `64-bit (x86)`.
![base instance 02](/img/sdk/base-intance-02.png)

For the instance type, choose a model with **`4 vCPUs`** and **`16 GiB memory`**. In this case, we'll use the **`t2.xlarge`** instance type.

#### Select a Key Pair
In the **`Configure Instance Details`** step, select the key pair you created earlier in the **`Key pair name`** field.
![base instance 04](/img/sdk/base-intance-04.png)

#### Select Security Group
In the `Network settings` section, you select the security group you created earlier.
![base instance 05](/img/sdk/base-intance-05.png)

#### Configure Storage
In the `Configure storage` section, you specify the amount of storage for the instance. For this tutorial, we'll set it to **`160 GiB`**.
![base instance 06](/img/sdk/base-intance-06.png)

#### Launch Instance
Finally, press `Launch instance`. Your base instance should now be running. 

You can check the status of your instance in the **`Instances`** section of the Amazon EC2 console.
![base instance 07](/img/sdk/base-intance-07.png)
