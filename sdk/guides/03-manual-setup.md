---
title: Manual Setup
slug: /guides/manual-setup
sidebar_label: Manual Setup
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';


<intro-end />

This guide walks through the detailed process of manually creating a minimal development environment using docker containers and manual configuration. Most developers will be more productive using the automatic setup and configuration of the Euclid Development Environment with the Hydra CLI. The following is provided for project teams looking to create their own custom configurations outside the default development environment. 


## Generate P12 Files
Generate your own `p12` files following the steps below: (java 11 must be installed)
1. Download the cl-keytool file [here](https://github.com/Constellation-Labs/tessellation/releases)
2. We need to generate 3 `p12` files: 1 for Genesis Nodes (Global L0, Currency L0, and Currency L1 - 1), 1 for second node on cluster (Currency L1 - 2), 1 for third node on cluster (Currency L1 - 3). 
3. Export the follow variables on your terminal with the values replaced to generate the first `p12` file.
```bash
export CL_KEYSTORE=":name-of-your-file.p12"
export CL_KEYALIAS=":name-of-your-file"
export CL_PASSWORD=":password"
```


1. Run the following instruction:
```bash
java -jar cl-keytool.jar generate
```
1. This will generate the first file for you
2. Change the variables CL_KEYSTORE, CL_KEYALIAS, and CL_PASSWORD and repeat the step 2 more times
3. At the end you should have 3 `p12` files

## Common Steps
### Create Containers

With Docker installed on your machine run:
```bash
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -it -p 9000:9000 -p 9001:9001 -p 9002:9002--name :container_name_global_l0 --entrypoint "/bin/bash" ubuntu:20.04
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -it -p 9100:9000 -p 9101:9001 -p 9102:9002--name :container_name_currency_l0 --entrypoint "/bin/bash" ubuntu:20.04
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -it -p 9200:9000 -p 9201:9001 -p 9202:9002--name :container_name_currency_l1_1 --entrypoint "/bin/bash" ubuntu:20.04
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -it -p 9300:9000 -p 9301:9001 -p 9302:9002--name :container_name_currency_l1_2 --entrypoint "/bin/bash" ubuntu:20.04
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -it -p 9400:9000 -p 9401:9001 -p 9402:9002--name :container_name_currency_l1_3 --entrypoint "/bin/bash" ubuntu:20.04
```

*Replace the `:container_name_*` with the name that you want for your container*

### Create a Docker Network

We need to create a docker custom network by running the following:

```bash
docker network create custom-network-tokens
```


### Build the Container Libs
In your container run the following instructions:

```bash
apt-get update

apt install openjdk-11-jdk -y #jdk 11 to run the jars
apt-get install curl -y #install curl
apt-get install wget -y #install wget
apt-get install gnupg -y #used to add sbt repo
apt-get install vim -y #used to edit files, you can use the editor that you want to

echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | tee /etc/apt/sources.list.d/sbt.list
echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | tee /etc/apt/sources.list.d/sbt_old.list
curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | apt-key add

apt-get update
apt-get install sbt -y #install sbt
```

The instructions above install the dependencies to run correctly the node.

### Tesselation repository
First, configure and export the `GITHUB_TOKEN` environment variable that will be required to pull some of the necessary packages. The access token needs only the `read:packages` scope. See how to create the personal access token here:

[Creating a personal access token - GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


Setup the `GITHUB_TOKEN` variable
```bash
export GITHUB_TOKEN=github_token
```

Then clone the repository:
```bash
git clone https://github.com/Constellation-Labs/tessellation.git
git checkout v2.0.0-alpha.2
```

:::warning 
Make sure you're using the latest version of Tessellation. You can find the most recent release in [**here**](https://github.com/Constellation-Labs/tessellation/releases).
:::

Move to the tesselation folder and checkout to branch/version that you want. You can skip the `git checkout :version` if you want to use the develop default branch
```bash
cd tesselation
git checkout :version
```

## Global L0
- Here is the instructions to run specifically Global L0 container.
- Move the `p12` file to container with the instruction:
```bash
docker cp :directory-of-p12-file container-name:file-name.p12
```
- Inside the docker container make sure that your p12 file exists correctly
- It should be at the root level (same level as the tessellation folder)
- Move to tessellation folder:
```bash
cd tessellation/
```
- Generate the jars
```bash
sbt core/assembly wallet/assembly
```

- Check the logs to see which version of global-l0 and wallet was published. It should be something like this:
```
/tessellation/modules/core/target/scala-2.13/tessellation-core-assembly-*.jar
```

- Move these jars to the root folder, like the example below
```bash
mv codebase/tessellation/modules/core/target/scala-2.13/tessellation-core-assembly-* global-l0.jar
mv codebase/tessellation/modules/wallet/target/scala-2.13/tessellation-wallet-assembly-* cl-wallet.jar
```

- Run the following command to get the clusterId (**store this information**):
```bash
java -jar cl-wallet.jar show-id
```

- Run the following command to get the clusterAddress (**store this information**):
```bash
java -jar cl-wallet.jar show-address
```

- Outside the container, run this following command to get your docker container IP
```bash
docker container inspect :container_name | grep -i IPAddress
```

- Outside the container, we need to join our container to the created network, you can do this with the following command (outside the container)

```bash
docker network connect custom-network-tokens :container_name  
```

- You can check now your network and see your container there:
```bash
docker network inspect custom-network
```

- Fill the environment variables necessary to run the container (from your first `p12` file):
```bash
export CL_KEYSTORE=":name-of-your-file.p12"
export CL_KEYALIAS=":name-of-your-file"
export CL_PASSWORD=":password"
export CL_APP_ENV=dev
export CL_COLLATERAL=0
export CL_ENV=dev
```

- Create one empty genesis file in root directory too (you can add wallets and amounts if you want to):
```bash
touch genesis.csv
```

- Finally, run the jar:
```bash
java -jar global-l0.jar run-genesis genesis.csv --ip :ip_of_your_container
```

- Your should see something like this:
```bash
23:26:53.013 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App environment: Dev
23:26:53.052 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App version: 2.0.0-alpha.2
[WARNING] Your CPU is probably starving. Consider increasing the granularity
of your delays or adding more cedes. This may also be a sign that you are
unintentionally running blocking I/O operations (such as File or InetAddress)
without the blocking combinator.
[WARNING] Your CPU is probably starving. Consider increasing the granularity
of your delays or adding more cedes. This may also be a sign that you are
unintentionally running blocking I/O operations (such as File or InetAddress)
without the blocking combinator.
23:27:03.051 [io-compute-5] INFO  o.t.s.a.TessellationIOApp - Self peerId: b1cf4d017eedb3e187b4d17cef9bdbcfdb2e57b26e346e9186da3a7a2b9110d73481fedbc6de23db51fb932371c54b02fff3388712dcb1e902870da7fa472f66
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.esotericsoftware.kryo.util.UnsafeUtil (file:/code/global-l0.jar) to constructor java.nio.DirectByteBuffer(long,int,java.lang.Object)
WARNING: Please consider reporting this to the maintainers of com.esotericsoftware.kryo.util.UnsafeUtil
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
23:27:04.670 [io-compute-5] INFO  o.t.s.a.TessellationIOApp - Seedlist disabled.
23:27:18.263 [io-compute-1] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9000
23:27:18.270 [io-compute-1] INFO  o.t.s.r.MkHttpServer - HTTP Server name=public started at /0.0.0.0:9000
23:27:18.315 [io-compute-2] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9001
23:27:18.316 [io-compute-2] INFO  o.t.s.r.MkHttpServer - HTTP Server name=p2p started at /0.0.0.0:9001
23:27:18.357 [io-compute-1] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 127.0.0.1:9002
23:27:18.359 [io-compute-1] INFO  o.t.s.r.MkHttpServer - HTTP Server name=cli started at /127.0.0.1:9002
23:27:20.400 [io-compute-3] INFO  o.t.s.i.c.d.N.$anon - Node state changed to=Ready{}
```

- That's all for the global-l0 container

## Currency L0
- Here is the instructions to run specifically Currency L0 container.
- Move the `p12` file to container with the instruction:
```bash
docker cp :directory-of-p12-file container-name:file-name.p12
```
- Inside the docker container make sure that your p12 file exists correctly
- It should be at the root level (same level as the tessellation folder)
- Move to tessellation folder:
```bash
cd tessellation/
```
- Generate the jars
```bash
sbt currencyL0/assembly
```

- Check the logs to see which version of currency-l0 was published. It should be something like this:
```
/tessellation/modules/currency-l0/target/scala-2.13/tessellation-currency-l0-assembly-*.jar
```

- Move this jar to the root folder, like the example below
```bash
mv codebase/tessellation/modules/core/target/scala-2.13/tessellation-currency-l0-assembly-* currency-l0.jar
```

- Outside the container, run this following command to get your docker container IP
```bash
docker container inspect :container_name | grep -i IPAddress
```

- Outside the container, we need to join our container to the created network, you can do this with the following command (outside the container)

```bash
docker network connect custom-network-tokens :container_name  
```

- You can check now your network and see your container there:
```bash
docker network inspect custom-network
```

- Fill the environment variables necessary to run the container (from your first `p12` file):
```bash
export CL_KEYSTORE=":name-of-your-file.p12"
export CL_KEYALIAS=":name-of-your-file"
export CL_PASSWORD=":password"
export CL_GLOBAL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_TOKEN_IDENTIFIER=:id_got_of_command_cl_wallet_show_address
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip-global-l0-container
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_APP_ENV=dev
export CL_COLLATERAL=0
```

- Create one genesis file in root directory too (you can add wallets and amounts if you want to):
```bash
touch genesis.csv
```

- You should edit this `genesis.csv` to add your addresses and amounts. You can use `vim` for that:
```bash
vim genesis.csv
```

- Example of genesis content:
```
DAG8pkb7EhCkT3yU87B2yPBunSCPnEdmX2Wv24sZ,1000000000000
DAG4o41NzhfX6DyYBTTXu6sJa6awm36abJpv89jB,1000000000000
DAG4Zd2W2JxL1f1gsHQCoaKrRonPSSHLgcqD7osU,1000000000000
```

- Finally, run the jar:
```bash
java -jar currency-l0.jar run-genesis genesis.csv --ip :ip_of_current_container
```

- Your should see something like this:
```bash
23:28:33.769 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App environment: Dev
23:28:33.829 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App version: 2.0.0-alpha.2
23:29:25.489 [io-compute-2] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9000
23:29:25.520 [io-compute-2] INFO  o.t.s.r.MkHttpServer - HTTP Server name=public started at /0.0.0.0:9000
23:29:25.606 [io-compute-2] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9001
23:29:25.608 [io-compute-2] INFO  o.t.s.r.MkHttpServer - HTTP Server name=p2p started at /0.0.0.0:9001
23:29:25.795 [io-compute-3] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 127.0.0.1:9002
23:29:25.796 [io-compute-3] INFO  o.t.s.r.MkHttpServer - HTTP Server name=cli started at /127.0.0.1:9002
23:29:44.671 [io-compute-3] INFO  o.t.c.l.s.s.G.$anon - Genesis binary 3c02294a7a3c7b3a8f2af8c9633a82af46430cda7ffc2de0fc0c6f19afb497e0 and 57a4f918ce8228be1282834ece3e6f69ad87d69b42857dbb227b5e6441b25025 accepted and sent to Global L0
```

- That's all for the currency-l0 container

## Currency L1 - 1
- Here is the instructions to run specifically Currency L1 - 1 container.
- Move the `p12` file to container with the instruction:
```bash
docker cp :directory-of-p12-file container-name:file-name.p12
```
- Inside the docker container make sure that your p12 file exists correctly
- It should be at the root level (same level as the tessellation folder)
- Move to tessellation folder:
```bash
cd tessellation/
```
- Generate the jars
```bash
sbt currencyL1/assembly
```

- Check the logs to see which version of currency-l1 was published. It should be something like this:
```
/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-*.jar
```

- Move this jar to the root folder, like the example below
```bash
mv codebase/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-* currency-l1.jar
```

- Outside the container, run this following command to get your docker container IP
```bash
docker container inspect :container_name | grep -i IPAddress
```

- Outside the container, we need to join our container to the created network, you can do this with the following command (outside the container)

```bash
docker network connect custom-network-tokens :container_name  
```

- You can check now your network and see your container there:
```bash
docker network inspect custom-network
```

- Fill the environment variables necessary to run the container (from your first `p12` file):
```bash
export CL_KEYSTORE=":name-of-your-file.p12"
export CL_KEYALIAS=":name-of-your-file"
export CL_PASSWORD=":password"
export CL_GLOBAL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_TOKEN_IDENTIFIER=:id_got_of_command_cl_wallet_show_address
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip-global-l0-container
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_HTTP_HOST=:ip-currency-l0-container
export CL_L0_PEER_HTTP_PORT=9000
export CL_APP_ENV=dev
export CL_COLLATERAL=0
```

- Finally, run the jar:
```bash
java -jar currency-l1.jar run-initial-validator  --ip :ip_of_current_container
```

- Your should see something like this:
```bash
23:31:34.892 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App environment: Dev
23:31:34.901 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App version: 2.0.0-alpha.2
23:31:38.257 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Self peerId: b1cf4d017eedb3e187b4d17cef9bdbcfdb2e57b26e346e9186da3a7a2b9110d73481fedbc6de23db51fb932371c54b02fff3388712dcb1e902870da7fa472f66
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.esotericsoftware.kryo.util.UnsafeUtil (file:/code/currency-l1.jar) to constructor java.nio.DirectByteBuffer(long,int,java.lang.Object)
WARNING: Please consider reporting this to the maintainers of com.esotericsoftware.kryo.util.UnsafeUtil
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
23:31:39.054 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Seedlist disabled.
23:31:49.892 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9000
23:31:49.895 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=public started at /0.0.0.0:9000
23:31:49.917 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9001
23:31:49.918 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=p2p started at /0.0.0.0:9001
23:31:49.943 [io-compute-3] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 127.0.0.1:9002
23:31:49.943 [io-compute-3] INFO  o.t.s.r.MkHttpServer - HTTP Server name=cli started at /127.0.0.1:9002
23:31:52.135 [io-compute-6] INFO  o.t.s.i.c.d.N.$anon - Node state changed to=Ready{}
23:31:57.435 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:31:57.635 [io-compute-3] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.598 [io-compute-1] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.658 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:06.858 [io-compute-0] INFO  o.t.d.l.StateChannel - Pulled following global snapshot: SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676}
23:32:06.959 [io-compute-0] INFO  o.t.d.l.StateChannel - Snapshot processing result: DownloadPerformed{reference=SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676},addedBlock=Set(),removedObsoleteBlocks=Set()}
23:32:07.172 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:07.177 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:12.178 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:12.219 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger

```

- That's all for the currency-l1-1 container

## Currency L1 - 2
- Here is the instructions to run specifically Currency L1 - 2 container.
- Move the `p12` file to container with the instruction (second `p12` file):
```bash
docker cp :directory-of-p12-file-2 container-name:file-name.p12
```
- Inside the docker container make sure that your p12 file exists correctly
- It should be at the root level (same level as the tessellation folder)
- Move to tessellation folder:
```bash
cd tessellation/
```
- Generate the jars
```bash
sbt currencyL1/assembly
```

- Check the logs to see which version of currency-l1 was published. It should be something like this:
```
/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-*.jar
```

- Move this jar to the root folder, like the example below
```bash
mv codebase/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-* currency-l1.jar
```

- Outside the container, run this following command to get your docker container IP
```bash
docker container inspect :container_name | grep -i IPAddress
```

- Outside the container, we need to join our container to the created network, you can do this with the following command (outside the container)

```bash
docker network connect custom-network-tokens :container_name  
```

- You can check now your network and see your container there:
```bash
docker network inspect custom-network
```

- Fill the environment variables necessary to run the container (from your first `p12` file):
```bash
export CL_KEYSTORE=":name-of-your-second-file.p12"
export CL_KEYALIAS=":name-of-your-second-file"
export CL_PASSWORD=":password"
export CL_GLOBAL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_TOKEN_IDENTIFIER=:id_got_of_command_cl_wallet_show_address
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip-global-l0-container
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_HTTP_HOST=:ip-currency-l0-container
export CL_L0_PEER_HTTP_PORT=9000
export CL_APP_ENV=dev
export CL_COLLATERAL=0
```

- Finally, run the jar:
```bash
java -jar currency-l1.jar run-validator  --ip :ip_of_current_container
```

- Your should see something like this:
```bash
23:31:34.892 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App environment: Dev
23:31:34.901 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App version: 2.0.0-alpha.2
23:31:38.257 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Self peerId: b1cf4d017eedb3e187b4d17cef9bdbcfdb2e57b26e346e9186da3a7a2b9110d73481fedbc6de23db51fb932371c54b02fff3388712dcb1e902870da7fa472f66
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.esotericsoftware.kryo.util.UnsafeUtil (file:/code/currency-l1.jar) to constructor java.nio.DirectByteBuffer(long,int,java.lang.Object)
WARNING: Please consider reporting this to the maintainers of com.esotericsoftware.kryo.util.UnsafeUtil
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
23:31:39.054 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Seedlist disabled.
23:31:49.892 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9000
23:31:49.895 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=public started at /0.0.0.0:9000
23:31:49.917 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9001
23:31:49.918 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=p2p started at /0.0.0.0:9001
23:31:49.943 [io-compute-3] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 127.0.0.1:9002
23:31:49.943 [io-compute-3] INFO  o.t.s.r.MkHttpServer - HTTP Server name=cli started at /127.0.0.1:9002
23:31:52.135 [io-compute-6] INFO  o.t.s.i.c.d.N.$anon - Node state changed to=Ready{}
23:31:57.435 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:31:57.635 [io-compute-3] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.598 [io-compute-1] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.658 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:06.858 [io-compute-0] INFO  o.t.d.l.StateChannel - Pulled following global snapshot: SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676}
23:32:06.959 [io-compute-0] INFO  o.t.d.l.StateChannel - Snapshot processing result: DownloadPerformed{reference=SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676},addedBlock=Set(),removedObsoleteBlocks=Set()}
23:32:07.172 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:07.177 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:12.178 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:12.219 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger

```

- That's all for the currency-l1-2 container

## Currency L1 - 3
- Here is the instructions to run specifically Currency L1 - 2 container.
- Move the `p12` file to container with the instruction (third `p12` file):
```bash
docker cp :directory-of-p12-file-3 container-name:file-name.p12
```
- Inside the docker container make sure that your p12 file exists correctly
- It should be at the root level (same level as the tessellation folder)
- Move to tessellation folder:
```bash
cd tessellation/
```
- Generate the jars
```bash
sbt currencyL1/assembly
```

- Check the logs to see which version of currency-l1 was published. It should be something like this:
```
/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-*.jar
```

- Move this jar to the root folder, like the example below
```bash
mv codebase/tessellation/modules/currency-l1/target/scala-2.13/tessellation-currency-l1-assembly-* currency-l1.jar
```

- Outside the container, run this following command to get your docker container IP
```bash
docker container inspect :container_name | grep -i IPAddress
```

- Outside the container, we need to join our container to the created network, you can do this with the following command (outside the container)

```bash
docker network connect custom-network-tokens :container_name  
```

- You can check now your network and see your container there:
```bash
docker network inspect custom-network
```

- Fill the environment variables necessary to run the container (from your first `p12` file):
```bash
export CL_KEYSTORE=":name-of-your-third-file.p12"
export CL_KEYALIAS=":name-of-your-third-file"
export CL_PASSWORD=":password"
export CL_GLOBAL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_PEER_ID=:id_got_of_command_cl_wallet_show_id
export CL_L0_TOKEN_IDENTIFIER=:id_got_of_command_cl_wallet_show_address
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip-global-l0-container
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_HTTP_HOST=:ip-currency-l0-container
export CL_L0_PEER_HTTP_PORT=9000
export CL_APP_ENV=dev
export CL_COLLATERAL=0
```

- Finally, run the jar:
```bash
java -jar currency-l1.jar run-validator  --ip :ip_of_current_container
```

- Your should see something like this:
```bash
23:31:34.892 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App environment: Dev
23:31:34.901 [io-compute-blocker-3] INFO  o.t.s.a.TessellationIOApp - App version: 2.0.0-alpha.2
23:31:38.257 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Self peerId: b1cf4d017eedb3e187b4d17cef9bdbcfdb2e57b26e346e9186da3a7a2b9110d73481fedbc6de23db51fb932371c54b02fff3388712dcb1e902870da7fa472f66
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.esotericsoftware.kryo.util.UnsafeUtil (file:/code/currency-l1.jar) to constructor java.nio.DirectByteBuffer(long,int,java.lang.Object)
WARNING: Please consider reporting this to the maintainers of com.esotericsoftware.kryo.util.UnsafeUtil
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
23:31:39.054 [io-compute-1] INFO  o.t.s.a.TessellationIOApp - Seedlist disabled.
23:31:49.892 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9000
23:31:49.895 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=public started at /0.0.0.0:9000
23:31:49.917 [io-compute-6] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 0.0.0.0:9001
23:31:49.918 [io-compute-6] INFO  o.t.s.r.MkHttpServer - HTTP Server name=p2p started at /0.0.0.0:9001
23:31:49.943 [io-compute-3] INFO  o.h.e.s.EmberServerBuilderCompanionPlatform - Ember-Server service bound to address: 127.0.0.1:9002
23:31:49.943 [io-compute-3] INFO  o.t.s.r.MkHttpServer - HTTP Server name=cli started at /127.0.0.1:9002
23:31:52.135 [io-compute-6] INFO  o.t.s.i.c.d.N.$anon - Node state changed to=Ready{}
23:31:57.435 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:31:57.635 [io-compute-3] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.598 [io-compute-1] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:02.658 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:06.858 [io-compute-0] INFO  o.t.d.l.StateChannel - Pulled following global snapshot: SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676}
23:32:06.959 [io-compute-0] INFO  o.t.d.l.StateChannel - Snapshot processing result: DownloadPerformed{reference=SnapshotReference{height=0,subHeight=11,ordinal=SnapshotOrdinal{value=11},lastSnapshotHash=93b341d24ce00f43abe054448afe29a43d6997bc0df6bd38821fe394d69a969f,hash=bc8aade10ab11efac2b180c48e78b060420dda6e72019061faf82ff8a8369fd7,proofsHash=9b869faaa608b3f3b8e2a9a4e548d371c11977ba2f5a498b9062f8d78d5e6676},addedBlock=Set(),removedObsoleteBlocks=Set()}
23:32:07.172 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:07.177 [io-compute-2] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger
23:32:12.178 [io-compute-0] DEBUG o.t.d.l.d.c.b.Validator - Cannot start own consensus: Not enough peers, Not enough tips, No transactions
23:32:12.219 [io-compute-0] DEBUG o.t.d.l.StateChannel - Received block consensus input to process: InspectionTrigger

```

- That's all for the currency-l1-3 container

## Joining Currency L1 containers to build the cluster
- We need to join the 2 and 3 currency L1 container to the first one, to build the cluster.
- For that, we need to open another terminal instance and run
```bash
docker exec -it :l1-currency-2-container-name /bin/bash
```
- Then we need to call this:

```bash
curl -v -X POST http://localhost:9002/cluster/join -H \"Content-type: application/json\" -d '{ \"id\":\":id_got_of_command_cl_wallet_show_id\", \"ip\": \":ip_of_currency_l1_1_container\", \"p2pPort\": 9001 }'
```

- Repeat the same with the third Currency L1 container

- You now should have the cluster build, if you access the url: `http://localhost:9200/cluster/info` you should see the nodes

## Next Steps
You should now have a minimal development environment installed and running 🎉

<DocsCards>
  <DocsCard header="Send your first transaction" href="/sdk/guides/send-transaction" icon="/icons/icon-placeholder.png">
    <p>Set up the FE Developer Dashboard and send your hello world metagraph transaction.</p>
  </DocsCard>
</DocsCards>