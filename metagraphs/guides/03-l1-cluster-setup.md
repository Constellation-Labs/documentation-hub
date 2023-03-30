---
title: Setup a Private L1 Cluster
---
<intro-end />

This guide will walk you through how to set up a private testnet of L1 nodes. The L1 network requires an L0 network to interact with. Complete [L0 Cluster Setup](/statechannels/examples/l0-cluster-setup) before beginning this process.

## Prerequisites
- 3 Linux cloud instances with ports 9000 and 9001 opened. See [validator node setup instructions](/nodes/validator/providers) for more detail on how to configure your instances.
- Java version 11
```bash
sudo apt-get install openjdk-11-jdk
java -version
```
- A configured [L0 network](/statechannels/examples/l0-cluster-setup)

## Steps

**1.** Download the executables that will run on each node. The latest executables can be found assets distributed with each [Tessellation Release](https://github.com/Constellation-Labs/tessellation/releases). You will need the following executable on each of the 3 nodes. 
```bash
cl-dag-l1.jar
```

**2.** Build Tessellation from source - see [Compile Tessellation](/statechannels/examples/compile-tessellation).

**3.** Create a wallet to associate to each node using the cl-keytool. One wallet will be needed for each node. Create a `*.p12` file using the following steps on each of the 3 nodes.
   1. `export CL_KEYSTORE=./<private-key-filename>.p12`
   2. `export CL_PASSWORD=<private-key-password>`
   3. `export CL_KEYALIAS=<private-key-alias>`
   4. Run the following command to generate the p12 file. The file will be created using the name exported as `CL_KEYSTORE`.
   ```bash
    java -jar cl-keytool.jar generate
   ```

**4.** Export the following variables based on your L0 network configuration
```bash
export CL_L0_PEER_HTTP_HOST=<L0-genesis-node-ip>
export CL_L0_PEER_ID=<L0-genesis-node-id>
```

**5.** Choose one of your 3 cloud instances as the genesis node. Run the following command on the genesis node to start Tessellation in genesis mode. 
```bash
java "-Xms1024M" "-Xmx3G" "-Xss256K" -cp cl-dag-l1.jar org.tessellation.dag.l1.Main run-initial-validator --ip <l1-genesis-node-ip> --public-port 9000 --p2p-port 9001 --cli-port 9002 --collateral 0 -e testnet
```

**6.** Get the node ID of the L1 genesis node using the command below. You can either run this while connected to a node or locally. 
```bash
curl -v http://<L1-genesis-node-ip>:9000/cluster/info
```

The response will include a JSON object similar to the one below.  
```json
[{"id":"746f872e629455fd5b92ebd32af334cd2ec493f4d1b8679f405191405aea6083e8b63b740874962dcb71ce9bdaf6f1ea1a94ae6428a271c102265f80d5187a2d","ip":"13.40.100.125","publicPort":9000,"p2pPort":9001,"session":" db886897-b3b1-484e-b645-ba3659587099","state":"Ready"}]
```

Alternatively, you could use the `cl-wallet.jar` file to get the node ID while connected to your cloud instance.
```bash
java -jar cl-wallet.jar show-id
```

**7.** Run the following command on each of the cloud instances selected to be validator nodes. This will start Tessellation in validator mode. 

```bash
java "-Xms1024M" "-Xmx3G" "-Xss256K" -cp cl-dag-l1.jar org.tessellation.dag.l1.Main run-validator --ip <l1-validator-node-ip> --public-port 9000 --p2p-port 9001 --cli-port 9002 --collateral 0 -e testnet
```

**8.** Run the following command on each validator node to connect them to the genesis node. 
```bash
curl -v -X POST http://localhost:9002/cluster/join -H "Content-type: application/json" -d '{ "id":"<L1-genesis-node-id>", "ip": "<L1-genesis-node-ip>", "p2pPort": <L1-genesis-node-p2p-port> }'
```

**9.** Check that all of the nodes have been added to the cluster with the cluster info endpoint again. This is the same endpoint we used to find the node ID in step 6.

```bash
curl -v http://<l1-genesis-node-ip>:9000/cluster/info
```

You should get a response with an array of 3 objects showing detail for each of the 3 nodes in the network. 

```json
[{"id":"7cca619f65e8c352e8fd725b48245b3017f7dbb5e3b2f66c13a2ae843082441ffb433ac34212d232285fb90a3dd681a32ea0431e78854692bce6f0e1450163c8","ip" : "18.168.100.187","publicPort": 9000, "p2pPort": 9001,"session": "2fd78ed0-c5b3-48ae-800a-1c176987af99","state":"Ready"}, {"id":"548dd53d4fcd175ef5f0a5ed37c2f3c85438f745cd5a82b41b0daa54db37878eb959ea4475bbdc8db284d708759fcd3435db0d8c85fb28cc854dddd97d923a09","ip":"13.40.100.154","publicPort": 9000,"p2pPort": 9001,"session": "55876c28-bd25-4875-98e3-4e102b8458d9", "state":"Ready"},{"id":"746f872e629455fd5b92ebd32af334cd2ec493f4d1b8679f405191405aea6083e8b63b740874962dcb71ce9bdaf6f1ea1a94ae6428a271c102265f80d5187a2d","ip":"13.40.100.125","publicPort":9000,"p2pPort":9001,"session":" db886897-b3b1-484e-b645-ba3659587099", "state": "Ready"}]
```