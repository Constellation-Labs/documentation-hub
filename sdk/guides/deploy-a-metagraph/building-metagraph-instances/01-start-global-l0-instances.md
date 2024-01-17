---
id: start-global-l0-instances
title: Start Global L0 Instances
---
<intro-end />

In the following sections, we will SSH into each of our 3 servers and configure each layer and then join it to the network. Note that both IntegrationNet and MainNet have seedlists for the Global L0 layer. Make sure your node IDs have been added to the seedlist prior to joining, otherwise you will not be allowed to join. 

### Setup Global L0
SSH into one of your EC2 instances and move to the `global-l0` directory.

```bash
ssh -i "MyKeypair.pem" ubuntu@your_instance_ip"
cd code/global-l0
```

#### Set environment variables
Export the following environment variables, changing the values to use your p12 file's real name, alias, and password. 
```bash
export CL_KEYSTORE=":p12_file.p12"
export CL_KEYALIAS=":p12_file_alias"
export CL_PASSWORD=":p12_password"
```

#### Obtain public IP
Obtain the public IP of your cluster by using the following command.
```bash
curl ifconfig.me
```

#### Download the latest seedlist
Download the latest seedlist from either IntegrationNet or MainNet. 

For IntegrationNet, the seedlist is kept in an S3 bucket and can be downloaded directly. 
```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```

For MainNet, the seedlist is stored in Github as a build asset for each release. Make sure to fill in the latest version below to get the correct seedlist. 
```bash
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.2.1/mainnet-seedlist
```

#### Start your node
The following command will start your Global L0 node in validator mode. 

```bash
nohup java -jar cl-node.jar run-validator --ip :instance_public_ip --public-port 9000 --p2p-port 9001 --cli-port 9002 --collateral 0 --seedlist integrationnet-seedlist -e integrationnet  > logs.log 2>&1 &
```
#### Check logs
You should see a new directory `logs` with a `app.log` file. Check the logs for any errors. 

#### Join the network
Now that the node is running, we need to join it to a node on the network. You can find a node to connect to using the network load balancer at
```
https://l0-lb-integrationnet.constellationnetwork.io/node/info
```

Run the following command with the **`id`**, **`ip`**, and **`p2pPort`** parameters updated.
```bash
curl -v -X POST http://localhost:9002/cluster/join -H "Content-type: application/json" -d '{ "id":":integrationnet_node_id", "ip": ":integrationnet_node_ip", "p2pPort": :integrationnet_node_p2p_port }'
```

#### Check connection
Verify that your node is connected to the network with the `/node/info` endpoint on your node. It can be accessed at the following url. You should see `state: Ready` if your node has successfully connected to the network. 

```
http://your_node_id:9000/node/info
```

### Repeat
Repeat the above steps for each of your 3 nodes before moving on to start your metagraph layers. 