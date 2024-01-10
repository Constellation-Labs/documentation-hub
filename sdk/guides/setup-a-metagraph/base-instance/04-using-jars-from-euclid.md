---
id: using-jars-from-euclid
title: Using JARs generated with the Euclid SDK
---

This guide will give you the step by step on how to generate the metagraph JARs from the Euclid SDK.


## Locating JARs on Euclid Codebase
- After ensuring that your project is ready for deployment, navigate to the following directory in the Euclid codebase:
`infra -> docker -> shared -> jars`

- Within this directory, you will find the following JARs:
	- `metagraph-l0.jar`
	- `metagraph-l1-currency.jar`
	- `metagraph-l1-data.jar`

- Refer to the image below for an illustration of the mentioned directory and files:
![euclid jar directories](/img/sdk/euclid-jar-directories.png)

## Sending the Euclid JARs to the Base Instance

- Use `scp` to transfer the JARs to the base instance.

- Run the following instructions:
```
scp -i "MyKeypair.pem" your_jar_directory/metagraph-l0.jar ubuntu@ec2-your-ip.your-region.compute.amazonaws.com:code/metagraph-l0/metagraph-l0.jar
scp -i "MyKeypair.pem" your_jar_directory/metagraph-l1-currency.jar ubuntu@ec2-your-ip.your-region.compute.amazonaws.com:code/currency-l1/currency-l1.jar
scp -i "MyKeypair.pem" your_jar_directory/metagraph-l1-data.jar ubuntu@ec2-your-ip.your-region.compute.amazonaws.com:code/data-l1/data-l1.jar
```

- To check if your JARs were successfully sent to your metagraph, SSH into the instance and search in the directories: code/metagraph-l0, code/currency-l1, and code/data-l1