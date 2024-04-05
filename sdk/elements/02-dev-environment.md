---
title: Development Environment
slug: /elements/dev-environment
sidebar_label: Development Environment
hide_table_of_contents: false
---
<intro-end />

The Euclid Development Environment is an upgradeable project framework to simplify the process of configuring a local development environment for metagraph developers on the Constellation Network. 

Getting started with metagraph development can be challenging due to the infrastructure requirements for a minimal development environment. This is a significantly bigger challenge for Constellation Network developers compared to developers on blockchain-based networks due to the inherent complexity of Constellation's microservice-based architecture. The Euclid Development Environment was created to simplify that process as much as possible for metagraph developers, so that developers can focus on building their applications and business logic rather than deploying infrastructure. It includes open source tools that can be used as a starting point for developing more customized tooling specific to your project team’s needs. 

## Minimal Development Environment
A minimal development environment for the Constellation Network consists of the following components:

- 1 Global L0 node
- 3 Metagraph L0 node
- 3 Metagraph L1 - Currency nodes
- 3 DAG L1 nodes (optional)
- 3 Metagraph L1 - Data nodes (optional)

Note that a cluster of at least three L1 nodes is necessary for the L1 layer to reach consensus (Metagraph L1 - Currency + DAG L1 + Metagraph L1 - Data). 

See [Network Architecture](/metagraphs/concepts/architecture) for an overview of the role each cluster plays in the Hypergraph. 

## System Requirements

For local development, it is sufficient to run each necessary node in a Docker container on a single developer machine. The minimal setup requires at least 5 docker containers which can be taxing on system resources. For that reason, we recommend your development machine have a minimum of **16 GB of RAM** with at least **8GB of that RAM allocated to Docker**. We recommend allocating 10GB RAM or more for a smoother development experience if your development machine can support it.

The system requirements for running a Euclid Development Environment project are:

- Linux or macOS operating system
- 16 GB RAM or more
- Docker installed with 8GB RAM allocated to it

## Included Tools
The Euclid Development Environment includes the following components:
- The [Hydra CLI](/sdk/elements/hydra-cli) tool for building and managing clusters of docker containers for each of the network configurations
- Docker files for building and connecting each of the required local clusters
- A [Telemetry Dashboard](/sdk/elements/telemetry-dashboard) consisting of two additional docker containers running Prometheus and Grafana.
- Optionally, run the [Developer Dashboard](/sdk/elements/developer-dashboard), a NextJS frontend javascript app for use during development.

## Install

Clone the repo from Github
```
git clone https://github.com/Constellation-Labs/euclid-development-environment.git
cd euclid-development-environment
```

See [Hydra CLI](/sdk/elements/hydra-cli) for additional installation and configuration instructions.

## Project Directory Structure

The project has the following structure:
```
- infra
- scripts
- source
- euclid.json
```

### Infra
This directory contains infrastructure related to the running of Euclid. 
- Docker: This directory contains docker configuration, including Dockerfiles, and port, IP, and name configurations for running Euclid locally. 
- Ansible: This directory contains Ansible configurations to start your nodes locally and remotely
  - **local**: Used for start and stop the nodes locally.
  - **remote**: Used for configuring and deploying to remote hosts

### Scripts
Thats the "home" of hydra script, here you'll find the `hydra` and `hydra-update (deprecated)` scripts.

### euclid.json
Here is the hydra configuration file, there you can set the `p12` file names and your GITHUB_TOKEN. It's required to fill the GitHub token here to run the `hydra` script

### Source
This directory contains your local source code for each project under the `project` directory. These directories will be empty by default, until the project is installed using `hydra install` or `hydra install-template` which will generate these project directories from a template. The files in these directories are automatically included in the metagraph-l0, data-l1, and currency-l1 docker containers when you run `hydra build`. 

In this directory inside the `global-l0` subdirectory, you will find the genesis file for your Global L0 network. Updating this file will allow you to attribute DAG token amounts to addresses at the genesis of your network. The source for the Global L0 network is stored in a jar file under `source/docker` since this codebase is not meant to be modified. 

Similarly, within the `metagraph-l0` subdirectory, you will find the genesis file for your Currency L0 network. Updating this file will allow you to attribute __metagraph token__ amounts to addresses at the genesis of your network. 

In the `p12-files` directory, you will find p12 files used in the default node configuration. You may update these files to use your own keys for your nodes. Environment variables in the `euclid.json` file should be updated with the new file aliases and passwords if you do choose to update them. 
