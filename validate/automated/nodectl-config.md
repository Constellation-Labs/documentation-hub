---
title: Configuration File
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>understanding nodectl configuration file</title>
  <meta
    name="description"
    content="an explanation of nodectl's config.yaml file."
  />
</head>

## Introduction

### Dynamic Configuration

nodectl version `2` introduces a dynamic configuration file. 

This document will explain the details of nodectl's configuration.  

With version 2, you are able to configure all the various details of each metagraph and/or Hypergraph your Node needs to connect with.

### YAML

The file is layed out in a `yaml` format.  Depending on to whom you speak to, yaml can stand for several different things.  

- **Y**et **A**nother **M**arkup **L**anguage. 
- **Y**aml **A**in't **M**arkup **L**anguage.
- Some believe it stands for neither of the above.

At the end of the day, yaml was decided upon for use with nodectl because it is an easy to read file format that converts data nicely to JSON that can be easily imported into nodectl to allow configurable freedom, left up to the Node Operator (if so desired).

## Profiles

Each Hypergraph and metagraph has independent settings used to connect to their perspective clusters.  nodectl uses the concept of profiles to hold the details for each set of definitions or parameters per metagraph and Hypergraph.

## Configurations 

### Pre-defined

nodectl holds predefined configurations that are recommended by the developers of the Constellation Network Hypergraph and metagraph (GL0 and ML1); as well as, the developers of metagraphs that participate in the ecosystem. 

For example: Constellation Network has a predefined configuration available for all three of their public clusters, MainNet, TestNet, IntegrationNet:

- Global Layer0 Hypergraph (GL0)
- Constellation Network Currency Layer1 metagraph (ML1)

As nodectl becomes more adopted by the community, other ecosystem communities, companies developing a metagraph on Constellation Networks protocol, or other entity may submit their desired configuration to this project for addition and adoption.

As new pre-configured profiles are submitted, they will be able to be appended to the Node's configuration via the [configure command](/validate/automated/nodectl-commands#configure).

## >= 2.9.0

The following documentation pertains to version 2.9.0 or greater of nodectl which supports metagraphs.  If you are running version <2.9.0, you can refer to the [version 2.8.0 or lower](#-v281) section of this document.

### Custom Configurations

You may encounter situations when the metagraph you are attempting to connect to does not have a pre-defined profile available.

You may encounter situations where you need to adjust your Node's metagraph settings to meet your requirements (advanced users).

In the event that you are attempting to connect to a metagraph that does not have a pre-defined configuration available directly from nodectl's configurator; you simply need to request a link to download the configuration via a `curl` or `wget` command, directly from the etagraph owners.

:::note
If you do not find a metagraph configuration available via nodectl, you can request your metagraph administrators submit a pull request to the [nodectl Stardust collective repository](https://github.com/StardustCollective/nodectl/pulls).
:::

Through customization, you can build your own profile or tweak your own settings via the [configure command](/validate/automated/nodectl-commands#configure).

## cn-config.yaml

We will now go through the different sections of the `cn-config.yaml` file.

The cn-config.yaml file holds all the customizable parameters of your Node from the profiles to the global settings.

:::success IMPORTANT
Unless you are an advanced Node Operator, it is strongly advised not to modify this file directly.  You should use nodectl's [configure command](/validate/automated/nodectl-commands#configure) instead.
:::

## Global Parameters

Outside of the profiles, nodectl also has other settings that will relate to all the profiles configured for use on your Node.

As nodectl matures, other features may be added that will enhance the profiles effectiveness.

Currently we can setup the following global sections:
- global [auto restart](/validate/automated/nodectl-commands#auto_restart) section
- global p12 section
- global elements

### global_auto_restart

This section [key pair values described below](#auto-restart) holds the key pair values to control the auto restart functionality of nodectl.  Auto restart is currently a global setup that entails maintaining up times for all profiles within the configuration.

### global_p12

This section [key pair values described below](#p12) holds the key pair values that will be used by default if a profile section does not include specific key pairs for that profile.

### global_elements

This section holds the key pair values that are used for non-critical but configurable elements of nodectl's functionality.

```
global_elements:
  metagraph_name: mainnet
  nodectl_yaml: v2.0.0
  log_level: INFO
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| metagraph_name | string | The name that the metagraph administrators will use to identify the metagraph.| Yes |
| nodectl_yaml | string (version) | The version of the configuration file.  This value helps nodectl understand (as well as the Node Operator(s)) if any changes may be present in the configuration file between versions.  This value should not be manipulated by the Node Operator. | Yes |
| log_level | string (level) | This value will determine what type of log messages are written to the nodectl log.  This is related to nodectl and not Tessellation. | Yes |


## top of file
```
nodectl:
  profiles:
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| nodectl | None | The title header for our yaml file.| Yes |
| profiles | None | The header that starts the profile section | Yes |

## profiles
### Name
```
nodectl:
  profiles:
    dag-l0:
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| dag-l0 | None | The name that we will identify the first profile defined in our configuration. We will be using dag-l0 mostly with our `-p` (profile) when issuing commands to manipulate our metagraph setup called `dag-l0`. | Yes |

### profile keys
```
nodectl:
  profiles:
    dag-l0:
      enable: True
      layer: 0
      edge_point:
        https: False
        host: www.my-edge-point-uri.com
        host_port: 80
      environment: mainnet
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| enable | `True` \| `False` | If set to True the profile will be loaded into nodectl when the utility it executed. | Yes |
| layer | `0` \| `1` | The blockchain layer that this profile corresponds with. | Yes |
| edge_point | None | In order for external web2 or web3 edge devices to gain access to the API (or other) within the cluster (Hypergraph or metagraph) there will generally be a special uri that may be controlled (attached or pointed to) by an custom edge device or load balancer. The edge point section holds various details necessary for to connect to this edge point successfully. | Yes |
| environment | `<string>` | What is the metagraph environment name.  This string name should be supplied by the administrators of the metagraph this profile correlates with. | Yes |

### edge point
```
      edge_point:
        https: False
        host: www.my-edge-point-uri.com
        host_port: 80
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| https | `True` \| `False` | If set to True the uri will be prefixed with https instead of appending 443 to a http uri. | Yes |
| host |  `<string>` | In order for external web2 or web3 edge devices to gain access to the API (or other) within the cluster (Hypergraph or metagraph) there will generally be a special uri that may be controlled (attached or pointed to) by an custom edge device or load balancer. | Yes |
| host_port | `<integer>` | The TCP port number that the edge point is accepting connection requests. | Yes |

### ports
```
      ports:
        public: 9000
        p2p: 9001
        cli: 9002
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| ports | None | Title section for the metagraph and Hypergraph communication access TCP ports. | Yes |
| public |  `<integer>` | Open access TCP port used for all public access to the Hypergraph or metagraph including API requests. | Yes |
| p2p | `<integer>` | The peer-to-peer port number used to communicate to the cluster via the gossip protocol. | Yes |
| cli | `<integer>` | Internal TCP port that is used to access the private internal API of our Node specifically for the metagraph and Hypergraph in question. | Yes |

### service
```
      service: node_l0
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| service | `<string>` | Behind the scenes, nodectl will create a Debian distribution compatible service that will run to control the metagraphs and Hypergraphs defined for this section of the configuration. | Yes |

### layer0 link

metagraphs will require a link be established between itself and the Hypergraph it is peered directly with.  This section creates the definitions to make this connection work properly.

Two example sections are shown. 
1. layer0_link that is disabled because there is no link to be established.
2. layer0_link for a layer1 that will link to its own layer0 profile.

```
      layer0_link: 
        enable: False
        layer0_key: None
        layer0_host: None
        layer0_port: None
        link_profile: None
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| enable | `True` \| `False` | If set to `False` this section will be ignored by nodectl and not link will be attempted. | Yes |
| layer0_key | `<string>` \| None | The public key of the host that we will be connecting with to create the link (`nodeid`). | Yes |
| layer0_host | `<string>` \| None | hostname or ip address (ip address preferred) for the host Node that will be creating the link to. | Yes |
| layer0_port | `<integer>` \| None | The public port of the host that will be creating a link with. | Yes |
| link_profile | `<string>` \| None | The profile name (if set to self) of the profile that this Node's profile will create a link with. | Yes |

:::info Informational Explanation
It is recommended practice to establish a dual layer0 and layer1 profile connection on your Node.  This is required to participate on the Constellation Network MainNet which consists of both the Hypergraph and a metagraph.

If following best practices, you will only need to enter **`self`** for the `layer0_key` (private key), `layer0_host`, and `layer0_port`.  At that point it is required to enter in the `link_profile` name.  In this case it will be `dag-l0` which is the profile name mentioned in this example.
:::

```
      layer0_link: 
        enable: True
        layer0_key: self
        layer0_host: self
        layer0_port: self
        link_profile: dag-l0
```

For the above (2nd) example, it is important to mention that this would be for the layer1 profile (not shown in this example document).  Since we entered **`self`** for all three `layer` keys, upon the first execution of a nodectl command, nodectl will identify the local Node's:
  - nodeid (private key)
  - ip address (external)
  - port number (for profile dag-l0)

nodectl will then rewrite the `cn-config.yaml` replacing the three elements for us.  Since obtaining the `nodeid` can be a time consuming process, rewriting the `cn-config.yaml` to persist the `nodeid` improves the execution time for all over commands (that may require the nodeid be known).

### dirs

Directories definitions.

```
      dirs: 
        snapshots: default
        backups: default
        uploads: default
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| dirs | None | Defines the directory location section for the specific profile. | Yes |
| snapshots | `<full_directory_path>` \| default |  The snapshots directory is where a local copy of your Node's blockchain data is held. This directory can get really large and needs to be maintained. Some administrators will want to move this directory to a network attached (or other) location. This location must be a mounted directory. For inexperienced or non-technical Node Operators, it is advised to enter in the key word 'default' here.  Also note that for some Layer 1 metagraphs (including Constellation's DAG metagraph) the snapshots directory should be set to 'disable' as it is not used. Consult with the metagraph user guides or with their administrators for proper directory locations. The snapshot directory should be set from the onset of the Node setup, it is dangerous to change its location 'after-the-fact'.  THIS DIRECTORY SHOULD BE A FULL PATH ( starting with a / and ending with a / ) eg) /var/snapshots/  Warning: If you use a remotely mounted directory, this directory MUST be accessible; otherwise, nodectl will exit with an inaccessible error. | Yes |
| backups | `<full_directory_path>` \| default | The location that you would like to store the backups for this profile.  If set to default the default location will be used. Any file that needs to be backed up (by nodectl) will be placed in this directory. | Yes |
| uploads |  `<full_directory_path>` \| default | The location that you would like to store the uploads for this profile.  If set to `default`, then the default location will be used. Export requests (csv data) or logs for upload to the metagraph administrators or developers, will be placed in this directory. | Yes |

### java

Java specific memory heap definitions.

```
      java: 
        xms: 1024M
        xmx: 7G
        xss: 256K
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| java | None | Defines the directory location section for the specific profile. | Yes |
| xms | `<int>` followed by **M, G** or **K** | Used for setting the initial and minimum heap size. The heap is an area of memory used to store objects instantiated by Node's java software running on the JVM. | Yes |
| xmx | `<int>` followed by  **M, G** or **K** | Used for setting the maximum heap size. Warning: the performance of the Node will decrease if the max heap value is set lower than the amount of live data. This can force your Node to perform garbage collections more frequently, because memory space may be needed more habitually. | Yes |
| xss | `<int>` followed by  **M, G** or **K** | Your Node will run multiple threads and these threads have their own stacks.  This parameter is used to limit how much memory a stack consumes. | Yes |

## P12 Section

The private key `p12` section has two possible settings:

1. Request the use of the [global p12](#global-p12-section) section of the `cn-config.yaml` file.  This allows us to configure our p12 details once in the configuration.

2. Configure a dedicated p12 setup for this profile **only**.

### p12

```
      p12: 
        nodeadmin: global
        key_location: global
        p12_name: global
        wallet_alias: global
        passphrase: global
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| p12 | None | Section name for all profile specific p12 parameters. | Yes |
| nodeadmin | `<username>` \| global | The name of the Debian based OS username that will be administering this Node. | Yes |
| key_location | `<full_path>` \| global | Directory path to the `p12` file that will be associated with this profile. | Yes |
| p12_name | `<string>` \| global | Name of the `p12` file that will be associated with this profile. | Yes |
| wallet_alias | `<string>` \| global | The alias supplied to the `p12` to be associated with this profile, during its creation. | Yes |
| passphrase | `<string>` \| global | The passphrase that will unlock the `p12` file that is associated with this profile. **Do not include escape sequences (double backslashs), section signs, single quotes, or double quotes in a passphrase, AND please enclose the definition passphrase within quotes in the configuration yaml.**  The warning inside this message is only for those that are manually editing the cn-config.yaml file, which is NOT recommended.  Instead use the [configure command](/validate/automated/nodectl-commands#configure) | Yes |

:::note Hiding Passphrase
You are able to hide the passphrase within the `cn-config.yaml` file.  If this is done, when the `passphrase` is not supplied at the command line, nodectl will prompt you for all passphrases prior to executing the command requested (if the passphrase is required).

You can supply `none` on the passphrase lines to hide your `p12`'s passphrase.
:::
:::warning
If the passphrase is not supplied within the `cn-config.yaml`, you will not be able to access the [auto_restart](/validate/automated/nodectl-commands#auto_restart) functionality of nodectl.
:::

## profile (continued)
### pro
:::danger
This section will change in future releases of nodectl as the PRO (Proof of Reputable Observations) functionality is implementing within Tessellation.
:::

Currently, Constellation Network requires that your Node's `p12` public key be included on a known access control list, that Constellation Network calls a `seed list`.

During the development, testing and prior to implementation of the `PRO Score`, this section will define:
 - location of the seed list 
 - name of the seed list file on our Node.

```
      pro: 
        seed_location: /var/tessellation
        seed_file: seed-list
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| pro | None | Section name for the PRO score parameters | Yes |
| seed_location | `<full_path>` \| disable | define the location for our seed list file. | Yes |
| seed_file | `<string>` \| disable | define the name of the file for our seed list. | Yes |

:::note
We will set both the seed_location and seed_file to `disable` if the seed list is not required.

Currently the Constellation Network Layer1 metagraph does not require a seed-list entry.
:::

### Node type

There are `2` main Node types we are able generate for our Node; however, only `1` Node type that we need to be concerned about.

- Validator Node
- Genesis Node

```
      node_type: validator
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| node_type | Validator \| genesis | The type of Node we are planning on running on the cluster. | Yes |

### Description

```
      description: Constellation Network Layer0 Hypergraph 
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| description | `<string>` | Simple description of the profile for local administrative purposes. | Yes |

## Global Section

The global section is for parameters that are handled "*Node-wide*".

### Auto Restart

nodectl has a *special* feature that includes:
  - auto restart
  - auto upgrade

You can enable the auto restart feature that will restart your Node if it detects that it fell off the Hypergraph or metagraph. See the [auto restart command](/validate/automated/nodectl-commands#auto_restart).

```
  auto_restart:
    enable: True
    auto_upgrade: True
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| auto_restart | None |  Section name for the `auto_restart` parameters. | Yes |
| enable | `True` \| `False` | enable or disable `auto_restart`. | Yes |
| auto_upgrade | `True` \| `False` | enable or disable `auto_upgrade`. | Yes |

### Global p12 section

Setup the `global p12` section which will be used by all profiles that are set to **global** in their parameter settings.

```
      global_p12: 
        nodeadmin: nodeadmin
        key_location: /home/nodeadmin/tessellation/
        p12_name: my-privatekey-file.p12
        wallet_alias: my-p12-alias-name
        passphrase: "abc123!@#ABC"
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| global_p12 | None | Section name for all profile specific p12 parameters. | Yes |
| nodeadmin | `<username>` | The name of the Debian based OS username that will be administering this Node. | Yes |
| key_location | `<full_path>` | Directory path to the `p12` file that will be associated with this profile. | Yes |
| p12_name | `<string>` | Name of the `p12` file that will be associated with this profile. | Yes |
| wallet_alias | `<string>` | The alias supplied to the `p12` to be associated with this profile, during its creation. | Yes |
| passphrase | `<string>` | The passphrase that will unlock the `p12` file that is associated with this profile. **Do not include escape sequences (double backslashs), section signs, single quotes, or double quotes in a passphrase, AND please enclose the definition passphrase within quotes in the configuration yaml.**  The warning inside this message is only for those that are manually editing the cn-config.yaml file, which is NOT recommended.  Instead use the [configure command](/validate/automated/nodectl-commands#configure) | Yes |

:::note Hiding Passphrase
You are able to hide the passphrase within the `cn-config.yaml` file.  If this is done, when the `passphrase` is not supplied at the command line, nodectl will prompt you for all passphrases prior to executing the command requested (if the passphrase is required).

You can supply `none` on the passphrase lines to hide your `p12`'s passphrase.
:::
:::warning
If the passphrase is not supplied within the `cn-config.yaml`, you will not be able to access the [auto_restart](/validate/automated/nodectl-commands#auto_restart) functionality of nodectl.
:::








## < v2.8.1

The following documentation pertains to version 2.8.1 or lower.  This documentation may be removed and deprecated in the future as metagraph adoption becomes fully prevalent and versions lower than 2.8.1 that do not support metagraphs, are deprecated. 

:::note
Some of the below documentation may be repetitive of the documentation pertaining to version > 2.9.0 of nodectl.
:::

### Custom Configurations

You may encounter situations when the metagraph you are attempting to connect to does not have a pre-defined profile available.

You may encounter situations where you need to adjust your Node's metagraph settings to meet your requirements (advanced users).

Through customization, you can build your own profile or tweak your own settings via the [configure command](/validate/automated/nodectl-commands#configure).   Deprecated in versions > 2.9.0

## Global Parameters

Outside of the profiles, nodectl also has other settings that will relate to all the profiles configured for use on your Node.

As nodectl matures, other features may be added that will enhance the profiles effectiveness.

Currently we can setup the following global sections:
- [auto restart](/validate/automated/nodectl-commands#auto_restart)
- global p12 section

## cn-config.yaml

We will now go through the different sections of the `cn-config.yaml` file.

The cn-config.yaml file holds all the customizable parameters of your Node from the profiles to the global settings.

:::success IMPORTANT
Unless you are an advanced Node Operator, it is strongly advised not to modify this file directly.  You should use nodectl's [configure command](/validate/automated/nodectl-commands#configure) instead.
:::

## top of file
```
nodectl:
  profiles:
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| nodectl | None | The title header for our yaml file.| Yes |
| profiles | None | The header that starts the profile section | Yes |

## profiles
### Name
```
nodectl:
  profiles:
    dag-l0:
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| dag-l0 | None | The name that we will identify the first profile defined in our configuration. We will be using dag-l0 mostly with our `-p` (profile) when issuing commands to manipulate our metagraph setup called `dag-l0`. | Yes |

### profile keys
```
nodectl:
  profiles:
    dag-l0:
      enable: True
      layer: 0
      edge_point:
        https: False
        host: www.my-edge-point-uri.com
        host_port: 80
      environment: mainnet
```
 Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| enable | `True` \| `False` | If set to True the profile will be loaded into nodectl when the utility it executed. | Yes |
| layer | `0` \| `1` | The blockchain layer that this profile corresponds with. | Yes |
| edge_point | None | In order for external web2 or web3 edge devices to gain access to the API (or other) within the cluster (Hypergraph or metagraph) there will generally be a special uri that may be controlled (attached or pointed to) by an custom edge device or load balancer. The edge point section holds various details necessary for to connect to this edge point successfully. | Yes |
| environment | `<string>` | What is the metagraph environment name.  This string name should be supplied by the administrators of the metagraph this profile correlates with. | Yes |

### edge point
```
      edge_point:
        https: False
        host: www.my-edge-point-uri.com
        host_port: 80
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| https | `True` \| `False` | If set to True the uri will be prefixed with https instead of appending 443 to a http uri. | Yes |
| host |  `<string>` | In order for external web2 or web3 edge devices to gain access to the API (or other) within the cluster (Hypergraph or metagraph) there will generally be a special uri that may be controlled (attached or pointed to) by an custom edge device or load balancer. | Yes |
| host_port | `<integer>` | The TCP port number that the edge point is accepting connection requests. | Yes |

### ports
```
      ports:
        public: 9000
        p2p: 9001
        cli: 9002
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| ports | None | Title section for the metagraph and Hypergraph communication access TCP ports. | Yes |
| public |  `<integer>` | Open access TCP port used for all public access to the Hypergraph or metagraph including API requests. | Yes |
| p2p | `<integer>` | The peer-to-peer port number used to communicate to the cluster via the gossip protocol. | Yes |
| cli | `<integer>` | Internal TCP port that is used to access the private internal API of our Node specifically for the metagraph and Hypergraph in question. | Yes |

### service
```
      service: node_l0
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| service | `<string>` | Behind the scenes, nodectl will create a Debian distribution compatible service that will run to control the metagraphs and Hypergraphs defined for this section of the configuration. | Yes |

### layer0 link

Metagraphs will require a link be established between itself and the Hypergraph it is peered directly with.  This section creates the definitions to make this connection work properly.

Two example sections are shown. 
1. layer0_link that is disabled because there is no link to be established.
2. layer0_link for a layer1 that will link to its own layer0 profile.

```
      layer0_link: 
        enable: False
        layer0_key: None
        layer0_host: None
        layer0_port: None
        link_profile: None
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| enable | `True` \| `False` | If set to `False` this section will be ignored by nodectl and not link will be attempted. | Yes |
| layer0_key | `<string>` \| None | The public key of the host that we will be connecting with to create the link (`nodeid`). | Yes |
| layer0_host | `<string>` \| None | hostname or ip address (ip address preferred) for the host Node that will be creating the link to. | Yes |
| layer0_port | `<integer>` \| None | The public port of the host that will be creating a link with. | Yes |
| link_profile | `<string>` \| None | The profile name (if set to self) of the profile that this Node's profile will create a link with. | Yes |

:::info Informational Explanation
It is recommended practice to establish a dual layer0 and layer1 profile connection on your Node.  This is required to participate on the Constellation Network MainNet which consists of both the Hypergraph and a metagraph.

If following best practices, you will only need to enter **`self`** for the `layer0_key` (private key), `layer0_host`, and `layer0_port`.  At that point it is required to enter in the `link_profile` name.  In this case it will be `dag-l0` which is the profile name mentioned in this example.
:::

```
      layer0_link: 
        enable: True
        layer0_key: self
        layer0_host: self
        layer0_port: self
        link_profile: dag-l0
```

For the above (2nd) example, it is important to mention that this would be for the layer1 profile (not shown in this example document).  Since we entered **`self`** for all three `layer` keys, upon the first execution of a nodectl command, nodectl will identify the local Node's:
  - nodeid (private key)
  - ip address (external)
  - port number (for profile dag-l0)

nodectl will then rewrite the `cn-config.yaml` replacing the three elements for us.  Since obtaining the `nodeid` can be a time consuming process, rewriting the `cn-config.yaml` to persist the `nodeid` improves the execution time for all over commands (that may require the nodeid be known).

### dirs

Directories definitions.

```
      dirs: 
        snapshots: default
        backups: default
        uploads: default
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| dirs | None | Defines the directory location section for the specific profile. | Yes |
| snapshots | `<full_directory_path>` \| default |  The snapshots directory is where a local copy of your Node's blockchain data is held. This directory can get really large and needs to be maintained. Some administrators will want to move this directory to a network attached (or other) location. This location must be a mounted directory. For inexperienced or non-technical Node Operators, it is advised to enter in the key word 'default' here.  Also note that for some Layer 1 metagraphs (including Constellation's DAG metagraph) the snapshots directory should be set to 'disable' as it is not used. Consult with the metagraph user guides or with their administrators for proper directory locations. The snapshot directory should be set from the onset of the Node setup, it is dangerous to change its location 'after-the-fact'.  THIS DIRECTORY SHOULD BE A FULL PATH ( starting with a / and ending with a / ) eg) /var/snapshots/  Warning: If you use a remotely mounted directory, this directory MUST be accessible; otherwise, nodectl will exit with an inaccessible error. | Yes |
| backups | `<full_directory_path>` \| default | The location that you would like to store the backups for this profile.  If set to default the default location will be used. Any file that needs to be backed up (by nodectl) will be placed in this directory. | Yes |
| uploads |  `<full_directory_path>` \| default | The location that you would like to store the uploads for this profile.  If set to `default`, then the default location will be used. Export requests (csv data) or logs for upload to the metagraph administrators or developers, will be placed in this directory. | Yes |

### java

Java specific memory heap definitions.

```
      java: 
        xms: 1024M
        xmx: 7G
        xss: 256K
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| java | None | Defines the directory location section for the specific profile. | Yes |
| xms | `<int>` followed by **M, G** or **K** | Used for setting the initial and minimum heap size. The heap is an area of memory used to store objects instantiated by Node's java software running on the JVM. | Yes |
| xmx | `<int>` followed by  **M, G** or **K** | Used for setting the maximum heap size. Warning: the performance of the Node will decrease if the max heap value is set lower than the amount of live data. This can force your Node to perform garbage collections more frequently, because memory space may be needed more habitually. | Yes |
| xss | `<int>` followed by  **M, G** or **K** | Your Node will run multiple threads and these threads have their own stacks.  This parameter is used to limit how much memory a stack consumes. | Yes |

## P12 Section

The private key `p12` section has two possible settings:

1. Request the use of the [global p12](#global-p12-section) section of the `cn-config.yaml` file.  This allows us to configure our p12 details once in the configuration.

2. Configure a dedicated p12 setup for this profile **only**.

### p12

```
      p12: 
        nodeadmin: global
        key_location: global
        p12_name: global
        wallet_alias: global
        passphrase: global
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| p12 | None | Section name for all profile specific p12 parameters. | Yes |
| nodeadmin | `<username>` \| global | The name of the Debian based OS username that will be administering this Node. | Yes |
| key_location | `<full_path>` \| global | Directory path to the `p12` file that will be associated with this profile. | Yes |
| p12_name | `<string>` \| global | Name of the `p12` file that will be associated with this profile. | Yes |
| wallet_alias | `<string>` \| global | The alias supplied to the `p12` to be associated with this profile, during its creation. | Yes |
| passphrase | `<string>` \| global | The passphrase that will unlock the `p12` file that is associated with this profile. **Do not include escape sequences (double backslashs), section signs, single quotes, or double quotes in a passphrase, AND please enclose the definition passphrase within quotes in the configuration yaml.**  The warning inside this message is only for those that are manually editing the cn-config.yaml file, which is NOT recommended.  Instead use the [configure command](/validate/automated/nodectl-commands#configure) | Yes |

:::note Hiding Passphrase
You are able to hide the passphrase within the `cn-config.yaml` file.  If this is done, when the `passphrase` is not supplied at the command line, nodectl will prompt you for all passphrases prior to executing the command requested (if the passphrase is required).

You can supply `none` on the passphrase lines to hide your `p12`'s passphrase.
:::
:::warning
If the passphrase is not supplied within the `cn-config.yaml`, you will not be able to access the [auto_restart](/validate/automated/nodectl-commands#auto_restart) functionality of nodectl.
:::

## profile (continued)
### pro
:::danger
This section will change in future releases of nodectl as the PRO (Proof of Reputable Observations) functionality is implementing within Tessellation.
:::

Currently, Constellation Network requires that your Node's `p12` public key be included on a known access control list, that Constellation Network calls a `seed list`.

During the development, testing and prior to implementation of the `PRO Score`, this section will define:
 - location of the seed list 
 - name of the seed list file on our Node.

```
      pro: 
        seed_location: /var/tessellation
        seed_file: seed-list
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| pro | None | Section name for the PRO score parameters | Yes |
| seed_location | `<full_path>` \| disable | define the location for our seed list file. | Yes |
| seed_file | `<string>` \| disable | define the name of the file for our seed list. | Yes |

:::note
We will set both the seed_location and seed_file to `disable` if the seed list is not required.

Currently the Constellation Network Layer1 metagraph does not require a seed-list entry.
:::

### Node type

There are `2` main Node types we are able generate for our Node; however, only `1` Node type that we need to be concerned about.

- Validator Node
- Genesis Node

```
      node_type: validator
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| node_type | Validator \| genesis | The type of Node we are planning on running on the cluster. | Yes |

### Description

```
      description: Constellation Network Layer0 Hypergraph 
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| description | `<string>` | Simple description of the profile for local administrative purposes. | Yes |

## Global Section

The global section is for parameters that are handled "*Node-wide*".

### Auto Restart

nodectl has a *special* feature that includes:
  - auto restart
  - auto upgrade

You can enable the auto restart feature that will restart your Node if it detects that it fell off the Hypergraph or metagraph. See the [auto restart command](/validate/automated/nodectl-commands#auto_restart).

```
  auto_restart:
    enable: True
    auto_upgrade: True
```
Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| auto_restart | None |  Section name for the `auto_restart` parameters. | Yes |
| enable | `True` \| `False` | enable or disable `auto_restart`. | Yes |
| auto_upgrade | `True` \| `False` | enable or disable `auto_upgrade`. | Yes |

### Global p12 section

Setup the `global p12` section which will be used by all profiles that are set to **global** in their parameter settings.

```
      global_p12: 
        nodeadmin: nodeadmin
        key_location: /home/nodeadmin/tessellation/
        p12_name: my-privatekey-file.p12
        wallet_alias: my-p12-alias-name
        passphrase: "abc123!@#ABC"
```

Key | Value | Description | Required |
| --------- | ----- |----- | -------- |
| global_p12 | None | Section name for all profile specific p12 parameters. | Yes |
| nodeadmin | `<username>` | The name of the Debian based OS username that will be administering this Node. | Yes |
| key_location | `<full_path>` | Directory path to the `p12` file that will be associated with this profile. | Yes |
| p12_name | `<string>` | Name of the `p12` file that will be associated with this profile. | Yes |
| wallet_alias | `<string>` | The alias supplied to the `p12` to be associated with this profile, during its creation. | Yes |
| passphrase | `<string>` | The passphrase that will unlock the `p12` file that is associated with this profile. **Do not include escape sequences (double backslashs), section signs, single quotes, or double quotes in a passphrase, AND please enclose the definition passphrase within quotes in the configuration yaml.**  The warning inside this message is only for those that are manually editing the cn-config.yaml file, which is NOT recommended.  Instead use the [configure command](/validate/automated/nodectl-commands#configure) | Yes |

:::note Hiding Passphrase
You are able to hide the passphrase within the `cn-config.yaml` file.  If this is done, when the `passphrase` is not supplied at the command line, nodectl will prompt you for all passphrases prior to executing the command requested (if the passphrase is required).

You can supply `none` on the passphrase lines to hide your `p12`'s passphrase.
:::
:::warning
If the passphrase is not supplied within the `cn-config.yaml`, you will not be able to access the [auto_restart](/validate/automated/nodectl-commands#auto_restart) functionality of nodectl.
:::