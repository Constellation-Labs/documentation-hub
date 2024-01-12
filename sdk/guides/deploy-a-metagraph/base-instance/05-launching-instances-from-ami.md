---
id: launching-instances-from-ami
title: Launching instances from AMI
---

The AMI created in the previous step can now be used to generate each of our 3 EC2 instances for our metagraph. 

#### Visit the AMI page
Select the AMI we created previously and press the **`Launch instance from AMI`** button.

#### Configure Instance
Name your instance, select the **`Instance Type`** as **`t2.xlarge`**, choose your **`Key pair`**, and select the appropriate **`Security Groups`**.

#### Launch Instance
Press the `Launch Instance` button.

#### Repeat
Perform the above steps 3 times to create 3 EC2 instances from the AMI. 

#### Connect to Instances
Find the ip address of each instance in the EC2 dashboard and connect using your previously generated SSH key. You should be able to access all 3 instances and confirm they are properly configured. 

```bash
ssh -i "MyKeypair.pem" ubuntu@ip.of.your.instance
```

