---
title: Hydra CLI
sidebar_label: Hydra CLI
hide_table_of_contents: false
---
<intro-end />

Hydra CLI is a powerful command line utility designed to manage local development Docker clusters in the Euclid Development Environment. With Hydra CLI, developers can easily create, configure, and manage Constellation Network development clusters for metagraph development.

Hydra CLI is a free and open-source tool that can be easily installed on any operating system that supports bash. Hydra is currently distributed as a part of the [Euclid Development Environment project](/sdk/dev-environment) and can be found in the `scripts` directory. 

## Install Dependencies
**Argc**
```bash
cargo install argc
```

Or you can install the [argc binaries](https://github.com/sigoden/argc/releases) directly.

**Docker**

- [macOS](https://docs.docker.com/desktop/install/mac-install/)
- [linux](https://docs.docker.com/desktop/install/linux-install/)

## Ansible
* Ansible is a configuration tool for configuring and deploying to remote hosts
* [Here](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) you can check how to install Ansible

## JQ
* jq is a lightweight and flexible command-line JSON processor. It allows you to manipulate JSON data easily, making it ideal for tasks like querying, filtering, and transforming JSON documents.
* [Here](https://jqlang.github.io/jq/download/) you can check how to install jq

## YQ
* yq is a powerful command-line YAML processor and parser, similar to jq but for YAML data. It allows you to query, filter, and manipulate YAML documents easily from the command line, making it a handy tool for tasks such as extracting specific data, updating YAML files, and formatting output.
* [Here](https://github.com/mikefarah/yq) you can check how to install yq
 
## Install Project
Run the `install` command which accomplishes two things: 
- Creates templated currency starter projects for L0 and L1 Currency apps in the `source/` directory. 
- Removes the project's git configuration so that you're free to check your changes into your own repo. Further infrastructure upgrades can be handled through Hydra. 

```
scripts/hydra install
```

You can import a metagraph template from custom examples by using the following command:

```
scripts/hydra install-template
```

By default, we use the [Metagraph Examples](https://github.com/Constellation-Labs/metagraph-examples) repository. You should provide the template name when running this command. 
To list the templates available to install, type:

```
scripts/hydra install-template --list
```

## Configure
Create a Github personal access token. This token is necessary for building Tessellation from source.

See [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for details on how to create your token. The token only needs the `read:packages` permission. 

Edit the `euclid.json` file with your token. You can leave the other variables as default for now. 
```
{
  "github_token": "<your-token>",
  ...
}
```

## Build
Build using the Hydra CLI. This will build a minimal development environment for your project using Docker.

```
scripts/hydra build
```

## Usage

The primary purpose of Hydra is to manage local deployment and configuration of development clusters for developing metagraph projects. Running all the necessary network clusters for development can be quite complex to do from scratch, so Hydra aims to simplify that process. 

See [Network Architecture](/metagraphs/concepts/architecture) for an overview of the role each cluster plays in the Hypergraph. 

Hydra uses Docker to launch minimal development clusters for the following supported networks:
- Global L0
- Currency L0
- Currency L1
- DAG L1

It also includes a pair of monitoring containers supporting:

- Prometheus
- Grafana

### Building

Build the default clusters (Global L0, Currency L0, Currency L1, Monitoring)

```bash
scripts/hydra build
```

To include the DAG L1 network, you can add `dag-l1` to the `layers` field on `euclid.json`. This option is disabled by default because it is not strictly necessary for metagraph development.


### Destroying

Built containers can be destroyed with the `destroy` command

```bash
scripts/hydra destroy
```

### Starting

Run your built clusters with the `start-genesis` and `start-rollback` commands.

```bash
scripts/hydra start-genesis
```

```bash
scripts/hydra start-rollback
```

### Stopping

Stop running containers with the `stop` command.

```bash
scripts/hydra stop
```

### Check Status
Check the status of all running containers. 

```bash
scripts/hydra status
```

## Deployment

Configuring, deploying, and starting remote node instances is supported through Ansible playbooks. The default settings deploy to three node instances via SSH which host all layers of your metagraph project (gL0, mL0, cL1, dL1). Two hydra methods are available to help with the deployment process: `hydra remote-deploy` and `hydra remote-start`.
Prior to running these methods, remote host information must be configured in  `infra/ansible/remote/hosts.ansible.yml`.

By default, we use the default directory for the SSH file, which is `~/.ssh/id_rsa`. However, you can change it to your preferred SSH file directory. You can find instructions on how to generate your SSH file [here](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key).

Ansible functions more effectively with `.pem` key files. If you possess a `.ppk` key file, you can utilize [these instructions](https://tecadmin.net/convert-ppk-to-pem-using-command/) to convert it to `.pem`.

If your file contains a password, you will be prompted to enter it to proceed with remote operations.
### Host Configuration

To run your metagraph remotely, you'll need remote server instances - 3 instances for the default configuration. These hosts should be running either `ubuntu-20.04` or `ubuntu-22.04`. It's recommended that each host meets the following minimum requirements:

-   16GB of RAM
-   8vCPU
-   160GB of storage

You can choose your preferred platform for hosting your instances, such as AWS or DigitalOcean. After creating your hosts, you'll need to provide the following information in the `hosts.ansible.yml` file:

-   Host IP
-   Host user
-   Host SSH key (optional if your default SSH token already has access to the remote host)

### P12 Files

P12 files contain the public/private key pair identifying each node (peerID) and should be located in the `source/p12-files` directory by default. The `file-name`, `key-alias`, and `password` should be specified in the `euclid.json` file under the `p12_files` section. By default, Euclid comes with three example files: `token-key.p12`, `token-key-1.p12`, and `token-key-2.p12`. **NOTE:** Before deploying, be sure to replace these example files with your own, as these files are public and their credentials are shared.

**NOTE:** If deploying to MainNet, ensure that your peerIDs are registered and present on the metagraph seedlist. Otherwise, the metagraph startup will fail because the network will reject the snapshots.


### Network Selection

Currently, there are two networks available for running your metagraph: `IntegrationNet`, and `MainNet`. You need to specify the network on which your metagraph will run in the `euclid.json` file under `deploy -> network -> name`.

### GL0 Node Configuration

The deploy script does not deploy the `gl0` node. It's recommended to use `nodectl` to build your `gl0` node. Information on installing `nodectl` can be found [here](https://docs.constellationnetwork.io/validate/automated/nodectl). `Nodectl` helps manage `gl0` nodes by providing tools such as `auto-upgrade` and `auto-restart` which keep the node online in the case of a disconnection or network upgrade. Using these features is highly recommended for the stability of your metagraph. 

**NOTE:** Your GL0 node must be up and running before deploying your metagraph. You can use the same host to run all four layers: `gl0`, `ml0`, `cl1`, and `dl1`.

### `hydra remote-deploy`
This method configures remote instances with all the necessary dependencies to run a metagraph, including Java, Scala, and required build tools. The Ansible playbook used for this process can be found and edited in `infra/ansible/playbooks/deploy.ansible.yml`. It also creates all required directories on the remote hosts, and creates or updates metagraph files to match your local Euclid environment. Specifically, it creates the following directories:

-   `code/global-l0`
-   `code/metagraph-l0`
-   `code/currency-l1`
-   `code/data-l1`

Each directory will be created with `cl-keytool.jar`, `cl-wallet.jar`, and a P12 file for the instance. Additionally, they contain the following:

**In `code/metagraph-l0`:**
-   metagraph-l0.jar     // The executable for the mL0 layer
-   genesis.csv              // The initial token balance allocations
-   genesis.snapshot    // The genesis snapshot created locally
-   genesis.address      // The metagraph address created in the genesis snapshot
   
**In `code/currency-l1`:**
-   currency-l1.jar     // The executable for the cL1 layer
   
**In `code/data-l1`:**
-   data-l1.jar     // The executable for the dL1 layer


### `hydra remote-start`

This method initiates the remote startup of your metagraph in one of the available networks: integrationnet or mainnet. The network should be set in `euclid.json` under `deploy` -> `network`

To begin the remote startup of the metagraph, we utilize the parameters configured in euclid.json (`network`, `gl0_node -> ip`, `gl0_node -> id`, `gl0_node -> public_port`, `ansible -> hosts`, and `ansible -> playbooks -> start`). The startup process unfolds as follows:

1.  Termination of any processes currently running on the metagraph ports, which by default are 7000 for ml0, 8000 for cl1, and 9000 for dl1 (you can change on `hosts.ansible.yml`).
2.  Relocation of any existing logs to a folder named `archived-logs`, residing within each layer directory: `metagraph-l0`, `currency-l1`, and `data-l1`.
3.  Initiation of the `metagraph-l0` layer, with `node-1` designated as the genesis node.
4.  Initial startup as `genesis`, transitioning to `rollback` for subsequent executions. To force a genesis startup, utilize the `--force_genesis` flag with the `hydra remote-start` command.  This will move the current `data` directory to a folder named `archived-data` and restart the metagraph from the first snapshot.
5.  Detection of missing files required for layer execution, such as `:your_file.p12` and `metagraph-l0.jar`, triggering an error and halting execution.
6.  Following the initiation of `metagraph-l0`, the l1 layers, namely `currency-l1` and `data-l1`, are started. These layers only started if present in your project. 

After the script completes execution, you can verify if your metagraph is generating snapshots by checking the block explorer of the selected network:

-   Integrationnet: [https://be-integrationnet.constellationnetwork.io/currency/:your_metagraph_id/snapshots/latest](https://be-integrationnet.constellationnetwork.io/currency/:your_metagraph_id/snapshots/latest)
-   Mainnet: [https://be-mainnet.constellationnetwork.io/currency/:your_metagraph_id/snapshots/latest](https://be-mainnet.constellationnetwork.io/currency/:your_metagraph_id/snapshots/latest)


You can verify if the cluster was successfully built by accessing the following URL:

`http://{your_host_ip}:{your_layer_port}/cluster/info` 

Replace:

-   `{your_host_ip}`: Provide your host's IP address.
-   `{your_layer_port}`: Enter the public port you assigned to each layer.

Each layer directory on every node contains a folder named `logs`. You can monitor and track your metagraph logs by running:

`tail -f logs/app.log`

**NOTE:** Don't forget to add your hosts' information, such as host, user, and SSH key file, to your `infra/ansible/remote/hosts.ansible.yml` file.

### `hydra remote-status`
This method will return the status of your remote hosts. You should see the following:
```
################################## Node 1 ##################################
Metagraph L0
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Currency L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Data L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId


################################## Node 2 ##################################
Metagraph L0
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Currency L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Data L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId


################################## Node 3 ##################################
Metagraph L0
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Currency L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId

Data L1
URL: http://:your_node_ip:your_port/node/info
State: :state
Host: :host
Public port: :your_port
P2P port: :your_port
Peer id: :peerId
```
## Remote Monitoring

We have introduced a tool in version `v0.10.0` that can monitor your metagraph and restart it if necessary.

### Introduction
This service monitors your metagraph and performs restarts as necessary. It is deployed using Ansible on a remote Ubuntu host. Commands such as `install-monitoring-service`, `remote-deploy-monitoring-service`, and `remote-start-monitoring-service` will be further explained in subsequent sections.

The service is developed using `NodeJS`, and all necessary dependencies are installed on your remote instance during deployment.

Running in the background with PM2, the service initiates checks at intervals specified in the configuration under the field: `check_healthy_interval_in_minutes`. It evaluates the health of the metagraph based on predefined and customizable `restart-conditions`, detailed in the [metagraph-monitoring-service](https://github.com/Constellation-Labs/metagraph-monitoring-service) repository. For example, if an unhealthy node is detected, the service triggers a restart.

To restart a node or layer, the service first attempts to stop any running processes (referring to the layer). This operation requires sudo privileges without a password requirement (refer [to this](https://gcore.com/learning/how-to-disable-password-for-sudo-command/) document for instructions on setting up password-less sudo). In addition to terminating processes, log files from the node are moved to the `code/restart_logs` directory, which may also require sudo privileges.

After these steps, the service restarts the node or layer and reintegrates it into the cluster.

### Installation
This tool it's not default to Euclid, so you need to install this service. To do this you need to run the following:

`hydra install-monitoring-service`

this command to creates a monitoring project in your source directory, which will be named `metagraph-monitoring-service`

To use this feature, we need to know the informations about the remote host that will be used as monitoring.
So, you need to populate the file `infra/ansible/remote/hosts.ansible.yml` under the monitoring section.
You should provide a user that has sudo privileges without requiring a password. Refer to [this document](https://gcore.com/learning/how-to-disable-password-for-sudo-command/) to learn how to enable password-less sudo for a user.


### Monitoring Configuration

Before deploying to remote instances, you need to configure your monitoring by editing the file `config/config.json`. When you run the install command, some fields will be auto-populated based on the `euclid.json` file, which includes:

-   `metagraph.id`: The unique identifier for your metagraph.
-   `metagraph.name`: The name of your metagraph.
-   `metagraph.version`: The version of your metagraph.
-   `metagraph.default_restart_conditions`: Specifies conditions under which your metagraph should restart. These conditions are located in `src/jobs/restart/conditions`, including:
  -   `SnapshotStopped`: Triggers if your metagraph stops producing snapshots.
  -   `UnhealthyNodes`: Triggers if your metagraph nodes become unhealthy.
-   `metagraph.layers`:
  -   `ignore_layer`: Set to `true` to disable a specific layer.
  -   `ports`: Specifies public, P2P, and CLI ports.
  -   `additional_env_variables`: Lists additional environment variables needed upon restart, formatted as `["TEST=MY_VARIABLE, TEST_2=MY_VARIABLE_2"]`.
  -   `seedlist`: Provides information about the layer seedlist, e.g., `{ base_url: ":your_url", file_name: ":your_file_name"}`.
-   `metagraph.nodes`:
  -   `ip`: IP address of the node.
  -   `username`: Username for SSH access.
  -   `privateKeyPath`: Path to the private SSH key, relative to the service's root directory. Example: `config/your_key_file.pem`.
  -   `key_file`: Details of the `.p12` key file used for node startup, including `name`, `alias`, and `password`.
-   `network.name`: The network your metagraph is part of, such as `integrationnet` or `mainnet`.
-   `network.nodes`: Information about the GL0s nodes.
-   `check_healthy_interval_in_minutes`: The interval, in minutes, for running the health check.

NOTE: You must provide your SSH key file that has access to each node. It is recommended to place this under the `config` directory. Ensure that this file has access to the node and that the user you've provided also has sudo privileges without a password.

### Customize Monitoring

Learn how to customize your monitoring by checking the repositories:

-   [metagraph-monitoring-service-package](https://github.com/Constellation-Labs/metagraph-monitoring-service-package)
-   [metagraph-monitoring-service](https://github.com/Constellation-Labs/metagraph-monitoring-service-package)

### Deploying Monitoring

Once you've configured your metagraph monitoring, deploy it to the remote host with:

`hydra remote-deploy-monitoring-service`

This command sends your current monitoring service from euclid to your remote instance and downloads all necessary dependencies.

### Starting Monitoring

After deployment, start your monitoring with:

`hydra remote-start-monitoring-service`

To force a complete restart of your metagraph, use:

`hydra remote-start-monitoring-service --force-restart`