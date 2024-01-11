---
id: launching-instances-from-ami
title: Launching instances from AMI
---

These steps should be performed for each instance you wish to create.

- Visit the AMI page and select the appropriate image.
- Press the **`Launch instance from AMI`** button.
- Name your instance, select the **`Instance Type`** as **`t2.large`**, choose your **`Key pair`**, and select the appropriate **`Security Groups`**.
- Then press `Launch Instance`
- To connect to the instance, use **`ssh`** or another AWS-provided option. If the instance user differs from **`ubuntu`**, switch to **`ubuntu`** before proceeding.
- Upon connecting, navigate to the `code` folder using