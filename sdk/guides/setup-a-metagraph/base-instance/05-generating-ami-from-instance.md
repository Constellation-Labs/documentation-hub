---
id: generating-AMI-from-instance
title: Generating AMI (Image) from instance
---

After the Image is ready, you can use it to create more instances that are identical to your original base instance. This is particularly useful if you need to run multiple nodes or if you want to ensure that all your nodes are running the same version of the software.

- To generate the AMI, select your instance and then actions → Image and templates → Create Image

![Generating AMI](/img/sdk/generating-AMI-from-instance-01.png)

- We can repeat the same name when configuring the image:

![Generating AMI](/img/sdk/generating-AMI-from-instance-02.png)

- And then press Create image
- It should take some time, but you can follow the progress on page AMI’s page
    
![Generating AMI](/img/sdk/generating-AMI-from-instance-03.png)
    
- The image should be in the Available status

![Generating AMI](/img/sdk/generating-AMI-from-instance-04.png)

- Once the image is ready we can delete the instance used to generate the image
- To do this, go back to the instances page, select the instance, and then press `Terminate instance`