---
title: Metagraph Monitoring Service
slug: /elements/monitoring-service
sidebar_label: Metagraph Monitoring Service
hide_table_of_contents: false
---
<intro-end />

We have introduced a monitoring tool in version `v0.10.0` of the [Euclid Development Environment project](/sdk/dev-environment) that can assess the health of your metagraph and initiate restarts if necessary.

A healthy metagraph requires a minimum of three nodes per layer: `metagraph-l0`, `currency-l1`, and `data-l1`. The `currency-l1` and `data-l1` layers should be implemented if your metagraph requires these layers, but at least three nodes per layer are necessary for correct operation.

Sometimes, your node can be unhealthy for several reasons, as examples:
* The remote host becoming stuck in a process.
* The remote host shutting down unexpectedly.
* The node experiencing a fork.
* The metagraph sending snapshots to a node that subsequently becomes unhealthy.
 
Each of these conditions may require attention and, in some cases, intervention, such as a restart.

For example, consider a scenario where your metagraph is operating normally but sends a `MetagraphSnapshot` to a `global-l0` node that has forked on the network. If this node is not part of the main and valid fork,
your `MetagraphSnapshot` will never reach the `global-l0` layer. The monitoring service will detect this issue and automatically trigger a metagraph restart.

In another scenario, if the `currency-l1` process stops on one of your nodes, the monitoring service will detect this anomaly and initiate a restart for the affected node on that layer.

### Introduction
The service is developed using `NodeJS`, and all necessary dependencies are installed on your remote instance during deployment.

Running in the background with PM2, the service initiates checks at intervals specified in the configuration under the field: `check_healthy_interval_in_minutes`. It evaluates the health of the metagraph based on predefined and customizable `restart-conditions`, detailed in the [metagraph-monitoring-service](https://github.com/Constellation-Labs/metagraph-monitoring-service) repository. For example, if an unhealthy node is detected, the service triggers a restart.

The service runs health checks on a regular interval and evaluates the metagraph cluster on a set of predefined or developer-created health criteria (restart-conditions). Restart conditions can target the whole cluster, a specific layer, or individual nodes to ensure that the metagraph is operating properly in each case. If an issue is detected, the service uses SSH to access the impacted node(s) and restart their process and rejoin them to the network.

### Installation
This tool does not ship by default with Euclid, so it must be installed before use. To install within a Euclid project, run the following:

`hydra install-monitoring-service`

this command to creates a monitoring project in your source directory, which will be named `metagraph-monitoring-service`

To use this feature, information about the remote hosts to be monitored must be configured in the `infra/ansible/remote/hosts.ansible.yml` file under the monitoring section.
The monitoring service must have SSH access to the other nodes with a user with sudo privileges without requiring a password. Refer to [this document](https://gcore.com/learning/how-to-disable-password-for-sudo-command/) to learn how to enable password-less sudo for a user.


### Monitoring Configuration

Before deploying to remote instances, configure your monitoring by editing the `config/config.json` file located in the root of the `metagraph-monitoring-service` directory. 
After installing the service, when you run the install command, some fields will be automatically populated based on the `euclid.json` file. These fields include:

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

-   [metagraph-monitoring-service-package](https://github.com/Constellation-Labs/metagraph-monitoring-service-package): This repository houses the `npm` package that provides core restart functionalities.
-   [metagraph-monitoring-service](https://github.com/Constellation-Labs/metagraph-monitoring-service-package): This repository utilizes the aforementioned package to implement a basic restart functionality.

### Deploying Monitoring

Once you've configured your metagraph monitoring, deploy it to the remote host with:

`hydra remote-deploy-monitoring-service`

This command sends your current monitoring service from euclid to your remote instance and downloads all necessary dependencies.

### Starting Monitoring

After deployment, start your monitoring with:

`hydra remote-start-monitoring-service`

To force a complete restart of your metagraph, use:

`hydra remote-start-monitoring-service --force-restart`