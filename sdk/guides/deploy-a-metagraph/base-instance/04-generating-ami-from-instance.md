---
id: generating-AMI-from-instance
title: Generating AMI (Image) from Base Instance
---

Now that our base instance is configured, we can generate an AMI (Amazon Machine Image) from the instance. The AMI will allow us to create our other two EC2 instances as exact copies of the one we've already configured. 

#### Create the image
To generate the AMI, select your instance and then actions → Image and templates → Create Image
![Generating AMI](/img/sdk/generating-AMI-from-instance-01.png)

We can repeat the same name when configuring the image:
![Generating AMI](/img/sdk/generating-AMI-from-instance-02.png)

#### Press Create image
This step will take some time but you can follow progress on the AMIs page. 
![Generating AMI](/img/sdk/generating-AMI-from-instance-03.png)
    

#### Wait until the image is in available status
![Generating AMI](/img/sdk/generating-AMI-from-instance-04.png)

#### Delete base instance
Once the image is ready we can delete the instance used to generate the image. To do this, go back to the instances page, select the instance, and then press `Terminate instance`.