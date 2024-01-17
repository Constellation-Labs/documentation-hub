---
id: start-data-l1-instances
title: Start Data L1 Instances
---

<intro-end />

In this section, we will start each of our data L1 instances and join them to the metagraph L0 network. 

### Setup Data L1
SSH into one of your EC2 instances and move to the `data-l1` directory.

```bash
ssh -i "MyKeypair.pem" ubuntu@your_instance_ip"
cd code/data-l1
```

#### Set environment variables
Export the following environment variables, changing the values to use your p12 file's real name, alias, and password.

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

Also export the following environment variables, filling in the following:  
- `CL_GLOBAL_L0_PEER_ID`: The public ID of your Global L0 node which can be obtained from the `/node/info` endpoint of your Global L0 instance (http://your_node_id:9000/node/info). 
- `CL_L0_PEER_ID`: The public ID of the metagraph l0 node which is the same as `CL_GLOBAL_L0_PEER_ID` above if you're using the same p12 files for all layers.
- `CL_GLOBAL_L0_PEER_HTTP_HOST`: The public IP of this node (points to global-l0 layer). 
- `CL_L0_PEER_HTTP_HOST`: The public IP of this node (points to metagraph-l0 layer).
- `CL_L0_TOKEN_IDENTIFIER`: The metagraph ID in your address.genesis file.


```bash
export CL_PUBLIC_HTTP_PORT=9300
export CL_P2P_HTTP_PORT=9301
export CL_CLI_HTTP_PORT=9302
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=9100
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

#### Start your data L1 node (initial)
:::note
Run this command only on the first of your instances. When you repeat these steps for the 2nd and 3rd instance, use the `run-validator` joining process below instead.
:::

Run the following command, filling in the public ip address of your instance. 
```bash
nohup java -jar data-l1.jar run-initial-validator --ip :instance_ip > metagprah-l1-logs.log 2>&1 &
```

Check if your data L1 node successfully started:
http://:your_ip:9300/cluster/info

#### Start your data L1 node (validator)
The 2nd and 3rd nodes should be started in validator mode and joined to the first node that was run in initial-validator mode. All other steps are the same. 

```bash
nohup java -jar data-l1.jar run-validator --ip :ip > data-l1-logs.log 2>&1 &
```

Run the following command to join, filling in the `id` and `ip` of your first data L1 node. 
```bash
curl -v -X POST http://localhost:9302/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_data_l1_1", "ip": ":ip_from_data_l1", "p2pPort": 9301 }'
```

### Repeat
Repeat the above steps for each of your 3 data L1 nodes before moving on to start your data L1 layer. Note that the startup commands differ between the three nodes. The first node should be started in initial-validator mode. The second and third nodes should be started in validator mode and joined to the first node. 

## Verify
If you followed all steps, your metagraph is now fully deployed. 

You can check the status of each of the node layers using their IP address and layer port number. 

#### Ports 
- Global L0: 9000
- Metagraph L0: 9100
- Currency L1: 9200
- Data L1: 9300

#### Endpoints
- `/cluster/info`: View nodes joined to the current layer's cluster
- `/node/info`: View info about a specific node and its status
