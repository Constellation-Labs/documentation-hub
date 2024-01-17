---
id: security-groups
title: Security groups
---
<intro-end />

Security groups act as virtual firewalls that control inbound and outbound traffic to your instances. Our 3 nodes will need to open up connection ports for SSH access, and for each of the 4 network layers to communicate over. 

### Create a Security Group
First, navigate to the **`Security Groups`** section in the Amazon [EC2 console](https://us-west-2.console.aws.amazon.com/ec2/home).
   
![Menu ec2](/img/sdk/security-group-1.png)
    
#### Click on **`Create Security Group`**
Create a new security group and provide a name, for example `MetagraphSecurityGroup`. 

#### Add Inbound Rules
Inbound rules define which ports accept inbound connections on your node. We will need to open up ports for SSH access and for each of the metagraph layers. 

Click **`Add Rule`** under the **`Inbound Rules`** section and add the following rules: 

| Type  | Protocol  | Port Range  | Source  | Purpose |
|---|---|---|---|---|
| SSH         | TCP  | 22         | 0.0.0.0/0 | SSH access |
| Custom TCP  | TCP  | 9000-9002  | 0.0.0.0/0 | gL0 layer |
| Custom TCP  | TCP  | 9100-9102  | 0.0.0.0/0 | mL0 layer |
| Custom TCP  | TCP  | 9200-9202  | 0.0.0.0/0 | cL1 layer |
| Custom TCP  | TCP  | 9300-9302  | 0.0.0.0/0 | dL1 layer |






