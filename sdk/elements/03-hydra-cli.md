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

## Install Project
Run the install command which accomplishes two things: 
- Creates templated currency starter projects for L0 and L1 Currency apps in the `source/` directory. 
- Removes the project's git configuration so that you're free to check your changes into your own repo. Further infrastructure upgrades can be handled through Hydra. 

```
scripts/hydra install
```

## Configure
Create a Github personal access token. This token is necessary for building Tessellation from source.

See [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for details on how to create your token. The token only needs the `read:packages` permission. 

Edit the `euclid.json` file with your token. You can leave the other variables as default for now. 
```
github_token="<your-token>"
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

To include the DAG L1 network, use the `--include_dag_l1` option. This option is disabled by default because it is not strictly necessary for metagraph development and requires 3 docker containers with their corresponding resource requirements. 

```bash
scripts/hydra build --include_dag_l1
```

You can also build clusters individually with the `--only` option

```bash
scripts/hydra build --only global-l0
```

### Destroying

Built containers can be destroyed with the `destroy` command

```bash
scripts/hydra destroy
```

### Starting

Run your built clusters with the `start` command. This command also has `--include_dag_l1` and `--only` options.

```bash
scripts/hydra start
```

### Stopping

Stop running containers with the `stop` command. This command also has a `--only` option.

```bash
scripts/hydra stop
```

### Check Status
Check the status of all running containers. 

```bash
scripts/hydra status
```