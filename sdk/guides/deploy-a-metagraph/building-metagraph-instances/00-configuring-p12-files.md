---
id: configuring-p12-files
title: Configuring P12 Files
---

## P12 Files
P12 files contain the public/private keypair for your node to connect to the network which is protected by an alias and a password. These files are necessary for all layers to communicate with each other and validate identity of other nodes. In this step, we will move p12 files to each of the 3 nodes so that they are available when starting each layer of the network. 

This guide will use just 3 p12 files in total (1 for each server instance) which is the minimal configuration. For production deployments, it is recommended that each layer and instance has its own p12 file rather than sharing between the layers. 

#### Transfer p12 files
Run the following command to transfer a p12 file to each layer's directory for a single EC2 instance. 

Replace `:p12_file.p12` and `your_instance_ip` with your actual p12 file and node IP.  
```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance_ip:code/global-l0
scp -i "MyKeypair.pem" :p12_file.p12 your_instance_ip:code/metagraph-l0
scp -i "MyKeypair.pem" :p12_file.p12 your_instance_ip:code/currency-l1
scp -i "MyKeypair.pem" :p12_file.p12 your_instance_ip:code/data-l1
```

#### Repeat this process for each of your 3 instances. 
Make sure to use a different P12 for instance when repeating the above steps. 

Your P12 files will now be available on your nodes and you can move on the starting up each layer. 
