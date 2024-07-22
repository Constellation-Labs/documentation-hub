---
title: Quick Start Guide
slug: /guides/quick-start
sidebar_label: Quick Start
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

This guide will walk you through the process of setting up a minimal development environment using the Euclid Development Environment project, installing the Metagraph Framework, and launching clusters. The process should take less than an hour, including installing dependencies. 

:::info Windows Support
Primary development focus for this SDK is based on UNIX-based operating systems like macOS or Linux. With that being said, Windows support is available using the Windows Subsystem for Linux (WSL) to emulate a UNIX environment. The following guide has been tested in that environment and works wells. 

See [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) for more detail in setting up WSL on your Windows machine. 
:::

## Install Dependencies

#### Install Basic Dependencies
Many developers can skip this step because these dependencies are already installed.

- [Node JS](https://nodejs.org/en)
- [Docker](https://docs.docker.com/get-docker/)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- [Scala 2.13](https://www.scala-lang.org/download/)
- [Jq](https://jqlang.github.io/jq/download/)
- [Yq](https://github.com/mikefarah/yq)



#### Install argc
```bash
cargo install argc
```

#### Install Giter
```bash
cs install giter8
```

#### Configure Docker
The Euclid Development Environment starts up to 10 individual docker containers to create a minimal development environment which takes some significant system resources. Configure docker to make at least 8GB of RAM available. If you are using Docker Desktop, this setting can be found under Preferences -> Resources. 

#### Create a Github Access Token
See instructions for how to create an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). The token only needs `read:packages` scope. Save this token for later, it will be added as an environment variable.


## Install

#### Clone
Clone the Euclid Development Environment project to your local machine.
```
git clone https://github.com/Constellation-Labs/euclid-development-environment
cd euclid-development-environment
```

See the [Development Environment](/sdk/elements/dev-environment#project-directory-structure) section for an overview of the directory structure of the project. 

#### Configure
Edit the `github_token` variable within the `euclid.json` file with your Github Access Token generated previously. Update the `project_name` field to the name of your project. 


#### Hydra
Familiarize yourself with the `hydra` CLI. We can use the `hydra` CLI tool to build the necessary docker containers and manage our network clusters. 

```
scripts/hydra -h

USAGE: hydra <COMMAND>

COMMANDS:
  install                           Installs a local framework and detaches project
  install-template                  Installs a project from templates
  build                             Build containers
  start-genesis                     Start containers from the genesis snapshot (erasing history) [aliases: start_genesis]
  start-rollback                    Start containers from the last snapshot (maintaining history) [aliases: start_rollback]
  stop                              Stop containers
  destroy                           Destroy containers
  purge                             Destroy containers and images
  status                            Check the status of the containers
  remote-deploy                     Remotely deploy to cloud instances using Ansible [aliases: remote_deploy]
  remote-start                      Remotely start the metagraph on cloud instances using Ansible [aliases: remote_start]
  remote-status                     Check the status of the remote nodes
  update                            Update Euclid
  logs                              Get the logs from containers
  install-monitoring-service        Download the metagraph-monitoring-service (https://github.com/Constellation-Labs/metagraph-monitoring-service) [aliases: install_monitoring_service]
  remote-deploy-monitoring-service  Deploy the metagraph-monitoring-service to remote host [aliases: remote_deploy_monitoring_service]
  remote-start-monitoring-service   Start the metagraph-monitoring-service on remote host [aliases: remote_start_monitoring_service]
```

#### Install Project
Running the `install` command will do two things:
- Creates currency-l0 and currency-l1 projects from a g8 template and moves them to the `source/project` directory. 
- Detach your project from the source repo. 

Detaching your project from the source repo removes its remote git configuration and prepares your project to be included in your own version control. Once detached, your project can be updated with `hydra`. 

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

## Build
Build your network clusters with hydra. By default, this builds `metagraph-ubuntu`, `metagraph-base-image`, and `prometheus` + `grafana` monitoring containers. These images will allow deploy the containers with metagraph layers: `global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`. The `dag-l1` layer is not built by default since it isn't strictly necessary for metagraph development. You can include it on the `euclid.json` file. 

Start the build process. This can take a significant amount of time... be patient. 
```
scripts/hydra build
```

## Run
After your containers are built, go ahead and start them with the `start-genesis` command. This starts all network components from a fresh genesis snapshot. 
```
scripts/hydra start-genesis
```

Once the process is complete you should see output like this: 
```
################################################################
######################### METAGRAPH INFO #########################

Metagraph ID: :your_id


Container metagraph-node-1 URLs
Global L0: http://localhost:9000/node/info
Metagraph L0: http://localhost:9200/node/info
Currency L1: http://localhost:9300/node/info
Data L1: http://localhost:9400/node/info


Container metagraph-node-2 URLs
Metagraph L0: http://localhost:9210/node/info
Currency L1: http://localhost:9310/node/info
Data L1: http://localhost:9410/node/info


Container metagraph-node-3 URLs
Metagraph L0: http://localhost:9220/node/info
Currency L1: http://localhost:9320/node/info
Data L1: http://localhost:9420/node/info


Clusters URLs
Global L0: http://localhost:9000/cluster/info
Metagraph L0: http://localhost:9200/cluster/info
Currency L1: http://localhost:9300/cluster/info
Data L1: http://localhost:9400/cluster/info

####################################################################
```

You can also check the status of your containers with the `status` command. 
```
scripts/hydra status
```

## Next Steps
You now have a minimal development environment installed and running 🎉

<DocsCards>
  <DocsCard header="Send your first transaction" href="/sdk/guides/send-transaction" icon="/icons/icon-placeholder.png">
    <p>Set up the FE Developer Dashboard and send your hello world metagraph transaction.</p>
  </DocsCard>
  <DocsCard header="Manual Setup" href="/sdk/guides/manual-setup" icon="/icons/icon-placeholder.png">
    <p>Prefer to configure your environment by hand? Explore manual setup.</p>
  </DocsCard>
</DocsCards>

