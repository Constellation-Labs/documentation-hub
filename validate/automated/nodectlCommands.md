---
title: command reference guide
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>nodectl command reference guide</title>
  <meta
    name="description"
    content="nodectl command reference guide"
    title="Command Reference Guide"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Introduction

This document compliments the **nodectl** [help command](#Help) reference offered through execution of a Node running the **nodectl** utility. 

### What is a switch and parameter?

A command-line **switch** is a modifier that is added to the end of a command being executed by **nodectl**.

It follows the `sudo nodectl <command>`.  

When the command is requested and the `switch` added, it may be followed by specific items or "instructions" that are called **parameters**.

`sudo nodectl <command> <switch> <parameter>`

`sudo nodectl <command> <switch> <parameter> <switch> <parameter>`

`sudo nodectl <command> <switch> <parameter> <switch> <switch>`

Some **switches** do not require a **parameter** afterwards.

| As a simple example, the command
```
sudo nodectl status -p dag-l0
```

- The `status` is the **command**

- The `-p` is a **switch**

- The `dag-l0` is a **parameter**.

:::note
This reference guide will explorer the [status command](#status) in further detail; however, in the above example, the switch `-p` stands for "what profile would you like to explorer the status of?" and the parameter `dag-l0` is the profile in question we would like to review.
:::

:::note Final Note
If a `switch` requires a `parameter`, it must be directly after the `switch` is supplied on the command line.  However, the order of the `switches` that do not require or require parameters does **not** matter.

switch1 requires a parameter1, switch2 does not require a parameter.
```
sudo nodectl -switch1 parameter1 -switch2
```
is the same as
```
sudo nodectl -switch2 -switch1 parameter1
```
:::

### What is pagination?

When the output of a command issued to **nodectl** extends past the height of the terminal window that is opened to remote into the Node for administration.  nodectl will "page" the output by adding a pause when the printed output reaches the height of the window.

It will offer you the option to quit or continue.

Commands that may create pagination will generally offer a `-np` switch to disable pagination (no pagination).

<MacWindow>
  Press any key or `q` to quit
</MacWindow>

## Command References
---

### <span style={{color:'green',fontSize:'1.3em'}}>help</span>

Issuing the `help` command at the command prompt **by itself** will offer the various commands and their options available.

```
sudo nodectl help
```
<MacWindow>
  NODECTL INSTALLED: [v2.7.1]<br />
  TESSELLATION INSTALLED: [v2.0.0-alpha.6]<br />
  @netmet72<br />
  ----------------------<br />
</MacWindow>

Offering the `help` command with the actual command you are seeking help from, will show a more detailed explanation of that command with required and optional 

```
sudo nodectl status help
```

## Service Change Commands
### <span style={{color:'green',fontSize:'1.3em'}}>start</span>

The command takes a single argument.

**Start** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
|  -p | `<profile_name>` | starts the service related to the profile name in question. | **required** |

> ##### Examples
-
Help Screen
```
sudo nodectl start -p dag-l0 help  
```
Start profile named `dag-l0`
```  
sudo nodectl start -p dag-l0
```

### <span style={{color:'green',fontSize:'1.3em'}}>stop</span>
The command takes a single argument.

**Stop** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | starts the service related to the profile name in question. | **required** |

> ##### Examples
-
Help Screen
```
sudo nodectl stop -p dag-l0 help  
```
Stop profile named `dag-l0`
```  
sudo nodectl stop -p dag-l0
```

### <span style={{color:'green',fontSize:'1.3em'}}>restart</span>
The command takes a single argument.

**Restart** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied or special **parameter** `all`.
  
This command will take the following actions on the profile it was connected on:
 - Leave the cluster 
 - Stop the service
 - Start the service 
 - Re-join the cluster.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` \| `all` | restarts the service related to the profile name in question. | **required** |

> ##### Examples
-
Help Screen
```
sudo nodectl restart -p dag-l0 help  
```
Restart all the profiles configured on the Node, in proper (recommended) order.
```  
sudo nodectl restart -p all
```
Start profile named `dag-l0`
```  
sudo nodectl restart -p dag-l0
```

### <span style={{color:'green',fontSize:'1.3em'}}>slow_restart</span> 

The `slow_restart` command is [almost] exactly the same as the [restart](#restart) command; however, if you issue a **slow restart** the process will take **10 minutes** to complete. (*600 seconds*)

The purpose of the `slow_restart` command is assist in a Node that may be **stuck** in an undesirable state or related cluster activity causing it to be unresponsive on the cluster or other.  Allowing for enough time for a Node to be off the network to reset any issues.

| Command | Shortcut |
| :----: | :---: |
| slow_restart  |  -sr   |

### <span style={{color:'green',fontSize:'1.3em'}}>restart_only</span> 

The `restart_only` command is exactly the same as the [restart](#restart) command; however, if you issue a **restart_only** the process will exclude re-joining the cluster which the profile belongs.

After a `restart_only` is executed, the profile should end in an `ReadyToJoin` state.


## Cluster Change Commands

### <span style={{color:'green',fontSize:'1.3em'}}>leave</span> 
The command takes a single argument.

**Leave** the **hypergraphs** or **metagraphs** related to a configured profile name.  This command will not work without the `<profile_name>` supplied.

It is appropriate to `leave` the cluster before you issue a `stop` command.
  
| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | leaves the cluster related to the profile name in question. | **required** |

> ##### Examples 
-
Help Screen
```
sudo nodectl leave -p dag-l0 help  
```
Leave profile named `dag-l0`
```  
sudo nodectl leave -p dag-l0
```

### <span style={{color:'green',fontSize:'1.3em'}}>join</span> 

The command takes a single argument.

**Join** the **hypergraphs** or **metagraphs** related to a configured profile name.  This command will not work without the `<profile_name>` supplied.

You will need to make sure that the profile related to the cluster your are attempting to join is started; as well as, the status of your Node is in `ReadyToJoin` [status](#status) on the cluster.
  
| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | join the cluster related to the profile name in question. | **required** |

> ##### Examples
-
Help Screen
```
sudo nodectl join -p dag-l0 help  
```
Join profile named `dag-l0`
```  
sudo nodectl join -p dag-l0
```

## Node Operations

### <span style={{color:'green',fontSize:'1.3em'}}>status</span> 

The command takes a single argument or no argument.

**Status** will review the current status of your Node.

If the `-p` switch is used with the `<profile_name>`, only that profile's status will appear.  If the `status` command is called without the `-p` switch, all profiles will be shown.
  
| Command | Shortcut |
| :---: | :---: | 
| status  |  -s      |

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | join the cluster related to the profile name in question. | **optional** |

> ##### Examples
-
Help Screen
```
sudo nodectl status help  
```
Show all profiles
```
sudo nodectl status
```
Show status of profile named `dag-l0`
```  
sudo nodectl status -p dag-l0
```

|  Title  | Description | 
| ---: | :--- |
| Service | What is the status of the service that runs this profile. |
| Join State | The cluster state that the Node is seen by the cluster. |
| Profile | Which profile is being reported on. |
| Public API TCP | The TCP port configured that is open to the public for API calls. |
| P2P API TCP | The TCP port configured that is used for gossip peer to peer API communications. |
| CLI API TCP | The TCP port configured that is used for internal API calls only. |
| Current Session | What is the **session** number being reported on the cluster. |
| Found Session | What is the **session** number seen by the Node.  If it does not match the Current Session, the Node is not properly connected to the actual cluster. |
| On Network | Shows `True` or `False` if the Node is found on the cluster.

### <span style={{color:'green',fontSize:'1.3em'}}>list</span>

The **`list`** command does not take any arguments and displays the details of the profiles found in the **`cn-config.yaml`** file.  You can update the **`cn-config.yaml`** file with the [configure command](#span-stylecolorgreenfontsize13emconfigurespan).

| Title | Description | 
| ---: | :--- |
| Profile Name | Name of the profile on display as defined by the **`cn-config.yaml`**. |
| Profile Description | Node operator defined description of the profile. |
| Public API TCP | The TCP port configured that is open to the public for API calls. |
| P2P API TCP | The TCP port configured that is used for gossip peer to peer API communications. |
| CLI API TCP | The TCP port configured that is used for internal API calls only. |  
  
> ##### Examples
-
show this help screen
```
sudo nodectl list help
```  
execute the list command
```
sudo nodectl list
```

### <span style={{color:'green',fontSize:'1.3em'}}>peers</span>

This command will attempt to list all the peers found on the cluster and list their IP addresses for review.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | join the cluster related to the profile name in question. | **required** |
| -t | `<target_node>` | Node on the cluster (ip or hostname) that you would like to use as your target for finding peers. | **optional** |
| -c | None | count the peers on the network. | **optional** |
| -np | None | no [pagination](#what-is-pagination). | **optional** |
| --csv | None | create csv output instead of print out. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure command](#span-stylecolorgreenfontsize13emconfigurespan). | **optional** |
| --basic | None | show only the ip address and public port. | **optional** |
| --extended | None | show full nodeid and dag address. | **optional** |
  
Normal output from the peers command will show all the peers seen on a given **Metagraph** or the **HyperGraph** (profile dependent) this will include:
- node ip with public port 
  - `10.10.10.10:1000` = `10.10.10.10` with public TCP port of `1000`
- nodeid (shortened)
- DAG wallet (shortened)
    
You can utilize the **`--basic`** switch to force **nodectl** to only show the `PEER IP:TCP PORT` column.
    
You can utilize the **`--extended`** switch to force **nodectl** to only show all fields in long format.

If you do not use the `--basic` or `--extended` switches, the output will be in shorten form for all elements (ip:port, dag address, nodeid).

#### Dictionary
| abbrv | Description |
| :--:  | :-- |
| *  | Indicates the ip searched against was either the `edge` and `source` ip. |
| i  | Initial State |
| rj | ReadyToJoin State |
| ss | StartingSession State |
| l  | Leaving State |
| s  | SessionStarted State |
| o  | Offline State |

> ##### Examples
-
help screen
```
sudo nodectl peers help
```
show nodes on cluster from random peer on the cluster from a specific profile
```
sudo nodectl peers -p <profile_name>
```
show YOUR Nodes's peers
```
sudo nodectl peers -p <profile_name> -t self
```
show peers on the cluster utilizing a specific target ip address.
```
sudo nodectl peers -p <profile_name> -t <ip_address or hostname>
```
show count of peers your node is able to see. (synonymous with `find` command) show peers on the cluster utilizing a specific.
```
sudo nodectl peers -p <profile_name> -c
```
source target ip address to count against.
```
sudo nodectl peers -p <profile_name> -t <ip_address or hostname> -c
```
  
#### Other examples
example usage for a profile called dag-l0
```sudo nodectl peers -p dag-l0```

example usage for --basic
```sudo nodectl peers -p dag-l0 --basic```

example usage for --extended
```sudo nodectl peers -p dag-l0 --extended```
  
create a csv file 
```sudo nodectl peers -p <profile_name> --csv```
create a csv file named test.csv
```sudo nodectl peers -p <profile_name> --csv --output test.csv```

### <span style={{color:'green',fontSize:'1.3em'}}>find</span>

The **`find`** command takes several parameters.
  
This command will attempt to find the requested peer on the current connected State Channel.

The find command offers insight into the 
- number of nodes on the cluster
- number of nodes in **`Ready`** state
- number of nodes in **`Observing`** state
- number of nodes in **`WaitingForReady`** state
    
It will show you the profile searched (required) and offer you confirmation that your Node is seen on the cluster.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -s | `<source_node>` | Node on the cluster you want to use to lookup other nodes. | **required** |
| -t | `<target_node>` | Node on the cluster (ip address of hostname) you want to look up on the cluster. | **optional** |

You may specify a **`source`** node that will be used as to lookup the **`target`** node on the cluster and return a `True` or `False` depending on whether or not it is found.
  
You may use the **`self`** keyword for either the `source` or `target` [parameters](#what-is-a-switch-and-parameter).

:::danger Note
Choosing a **source node** that is **NOT** on the network may result in an error or false negative.

You can use the keyword `self` to indicate the local (`localhost`) Node for either `-s` or `-t`.
:::

> ##### Examples
-
help screen
```
sudo nodectl find help
```
Check if your Node is listed/seen on the cluster using a random source Node that is already found on the cluster.
```
sudo nodectl find -p <profile_name>
```
Check if your Node is listed/seen on the cluster using a specific source Node.
```
sudo nodectl find -p <profile_name> -s <source_ip_host>
```
Check if your Node is listed/seen on the cluster using a specific source Node and a specific target Node (other then your own.
```
sudo nodectl find -p <profile_name> -s <source_ip_host> -t <target_ip_host>
```
Order of the values does not matter.

#### other `find` examples

If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by another random Node on the cluster we are connected to identified by the profile `dag-l0`.
```
sudo nodectl find -p dag-l0 
```
or
```
sudo nodectl find -p dag-l0 -t 10.1.1.1
```
If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by a Node identified by the `-s` option on the cluster we are connected to.
```
sudo nodectl find -p dag-l0 -s 10.2.2.2
```
or
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t 10.1.1.1
```
  
#### Examples using `self` keyword
```
sudo nodectl find -p dag-l0 -s self -t 10.1.1.1
```
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t self
```

If a different target node 10.1.1.2 identified by a -t is listed/seen by a Node identified by the -s Node option on the cluster we are connected to.
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t 10.1.1.2
```

### <span style={{color:'green',fontSize:'1.3em'}}>check_seedlist</span>
The **`check_seedlist`** command takes one argument.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | related to the profile to verify access permissions. | **required** |

**`check_seedlist`** will pull your `nodeid` out of your p12 file and compare it to the seedlist downloaded from **Constellation Network's** authorized list.
  
:::note
This command is specific to current restrictions placed on the Hypergraph for controlled access prior to the **PRO Score** [proof of reputable observation] release.
:::

| Title | Description |
| -- | :-- |
| ip address | The `ip address` of the Node in question |
| p12 filename | The name of the `p12` file on the Node |
| p12 location | The location of the `p12` file on the Node |
| node id | The `p12` public key node id. |
| node id found on seed list | This will be a `True` or `False`.  In the event of a `False` please contact an administrator on the **Constellation Network** official Discord server. |
 
> ##### Examples
help screen
```
sudo nodectl check_seedlist help
```  
execute the check_seedlist command
```
sudo nodectl check_seedlist
```

### <span style={{color:'green',fontSize:'1.3em'}}>update_seedlist</span> 

The **`update_seedlist`** command does not take any arguments.
  
`update_seedlist` will pull down the latest seedlist from the Constellation Network repositories. This command can be used in the event your Node is unable to authenticate (and therefor will not connect) to the network.  
  
Using the [`check_seedlist`](#span-stylecolorgreenfontsize13emcheckseedlistspan) command, a Node Operator  can confirm if the Node is seen on the access lists; if not, issue the `update_seedlist` command to attempt to correct the issue.
  
:::note 
If you update the seedlist and still receive a `False`, you may need to contact a **Constellation Network** support Administrator for further help. This can be done by accessing the **Constellation Network** official Discord server.
:::    

*This command is specific to current restrictions placed on the Hypergraph for controlled access prior to the PRO Score [proof of reputable observation] release.*
        
> ##### Examples
help screen
```
sudo nodectl update_seedlist help
```  
execute the update_seedlist command
```
sudo nodectl update_seedlist
```

### <span style={{color:'green',fontSize:'1.3em'}}>show_node_states</span> 

The **`show_node_states`** command does not take any arguments and displays the list of the known Node States that you may find on the Cluster or that **nodectl** defines when not on the cluster.

| Command | Shortcut |
| :----: | :---: |
| show_node_states  |  -sns  |

##### nodectl only states

| State | Description |
| -- | :-- |
| ApiNotReady | shown if nodectl can not reach the Node's internal API server. |
| SessionNotFound | shown if nodectl can not read the Node's session via the internal API server. | 
| SessionIgnored | shown if nodectl is not online and there is not a session to display. | 
  
> ##### Examples
-
help screen
```
sudo nodectl show_node_states help
```
execute the show_node_states command
```
sudo nodectl show_node_states
```  
execute using shortcut switch command
```
sudo nodectl -sns
```

### <span style={{color:'green',fontSize:'1.3em'}}>show_current_rewards</span>

The **`show_current_rewards`** command takes several parameters.
  
Search the Constellation Backend explorer and pull the last 50 global snapshots.
  
The command will output a [paginated](#what-is-pagination) list of DAG addresses and the amount of DAG accumulated per DAG address over the course of the time between the START SNAPSHOT timestamp listed and the END SNAPSHOT timestamp listed.
  
:::note 
This only pertains to global MainNet rewards* This does not apply to TestNet rewards.
:::

| Command | Shortcut |
| :----: | :---: |
| show_current_rewards  |  -scr  |

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
|-p  | `<profile_name>` | join the cluster related to the profile name in question. | **required** |
| -p | `<profile_name>` | join the cluster related to the profile name in question. | **required** |
| -w | `<dag_wallet_address>` | DAG wallet on the cluster that is not on your Node. | **optional** |
| -s | `<snapshot_history_size>` | **default**: 50, The amount of snapshots to review. | **optional** |
| -np | None | join the cluster related to the profile name in question. | **optional** |
| --csv | None | create csv output instead of print out. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure command](#span-stylecolorgreenfontsize13emconfigurespan). | **optional** |
  
The `--output` switch can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#span-stylecolorgreenfontsize13emconfigurespan) command. 

[`sudo nodectl configure`](#span-stylecolorgreenfontsize13emconfigurespan)
                                              
If a wallet address is not specified the first known wallet address obtained from the configuration will be used.  If a **-p** `<profile>` is specified the wallet address known to entered profile will be used.
  
If a **-s** `<snapshot_history_size>` is specified the history size entered will be used.  Must be between 10 and 375 snapshots. The default value is 50.
  
::note 
Currently this command only searches on the MainNet layer0 global network.
::: 

If the **-w** `<dag_wallet_address>` is used, the **-p** `<profile_name>` will be ignored unless the profile fails to be present on the Node (exist in the configuration).
        
> ##### Examples
help screen
```
sudo nodectl show_current_rewards help
sudo nodectl -scr help
```
If the **-p** `<profile>` if not specified, nodectl will use the first known profile. 
```
sudo nodectl show_current_rewards
sudo nodectl show_current_rewards -p <profile_name>
```
If the **-w** `<dag_address>` is specified, nodectl will the requested DAG address against the MainNet explorer.
```
sudo nodectl show_current_rewards -w <dag_address>
```
If the **-np** is not specified nodectl will attempt to paginate the output to the current known screen height.
create a csv file 
```
sudo nodectl show_current_rewards --csv
```
create a csv file and put in the designated `uploads` directory with specified name.
```
sudo nodectl show_current_rewards --csv --output test.csv
```
  













### <span style={{color:'green',fontSize:'1.3em'}}>clean_snapshots</span>

The `clean_snapshots` command will offers the Node Operator the ability to clear **snapshots**.  

:::warning 
With the evaluation of the **Tessellation** protocol, the **incremental snapshots** command may be deprecated in future releases.
:::

Once the command is executed the Node Operator will be offered a CLI menu of **snapshot** removal options to choose.
  
The option will be carried out and the Node Operator will be offered a visual confirmation of the **snapshots** to be removed, number of snapshots, and size to be freed by their removal.

| Command | Shortcut |
| :----: | :---: |
| clean_snapshots  |  -cs  |

> ##### Examples
```
sudo nodectl clean_snapshots
```
or
```
sudo nodectl -cs
```

### <span style={{color:'green',fontSize:'1.3em'}}>clean_files</span>

The `clean_files` command will offers the Node Operator the ability to clear specified logs or special stored files that may not be needed anymore.

Once the command is executed the Node Operator will be offered a CLI menu of removal options to choose.
  
The option will be carried out and the Node Operator will be offered a visual confirmation of the files to 
be removed, number of files, and size to be freed by their removal.

| Command | Shortcut |
| :----: | :---: |
| clean_files  |  -cf  |

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -t | `<log_type` | enter the log type that is desired. | **required** |

| Type of Logs | Description |
| :---: | :--- |
| logs | clear logs located in the default or specified log directories. Logs command handles json_logs and archived logs. |
| uploads | clear uploads located in the default or specified log directories. |
| backups | clear backups located in the default or specified log directories. |

> ##### Examples
-
help file
```
sudo nodectl clear_files help
```
clean logs of type logs
```
sudo nodectl clear_logs -t logs
```   
or
```
sudo nodectl -cf -t logs
```

## Distribution Operations

### <span style={{color:'green',fontSize:'1.3em'}}>whoami</span>

The `whoami` command displays the external ip address of your Node. Unless optional `-id` is specified.
  
The `external IP` of your Node is the address that allows your Node to communicate with the rest of the systems on the Internet.  This is the address that your Node will use to communicate with the rest of the decentralized Nodes that make up the **Hypergraph** and/or **Metagraphs** that your Node will attempt to communications with via p2p connections and APIs.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | In order to use the **`-id`** option, **nodectl** will need to know which profile to review the `nodeid` from. | **optional** |
| -id | `<full_node_id>` | enter the log type that is desired. | **optional** |

:::warning 
The -id switch followed by the full nodeid requested, will lookup the node id and return its IP address.  This command will require the `-p` with the profile name of the network you are searching.
:::

> ##### Examples
-
help file
```
sudo nodectl whoami help
```
show external ip
```
sudo nodectl whoami
```
show ip address of node_id from a cluster via a profile this Node is connected to
```
sudo nodectl whoami -id <node_id> -p <profile>
```

### <span style={{color:'green',fontSize:'1.3em'}}>reboot</span>

The **`reboot`** command does not take any arguments and offers the Node Operator the ability to reboot their physical or VPS (Virtual Private Server in the cloud) via a warm boot.
  
:::success Recommended
For Node Operation this command is **preferred/recommended** over normal operating system reboot command. 
:::

When issued the nodectl reboot command will gracefully leave the profiles defined in the nodectl configuration file before rebooting the Node.
  
#### dictionary
| term | definition |
| --- | :--- |
| warm boot | restart your entire system via software |
| cold boot | physical start and stop of your Server or VPS |
   
> ##### Examples
-
help screen
```
sudo nodectl reboot help
```  
execute the reboot command
```
sudo nodectl reboot
```

### <span style={{color:'green',fontSize:'1.3em'}}>disable_root_ssh</span> 

The `disable_root_ssh` command is a *special* command that works on the Debian distribution level.  It will disable the ability for access to the **root** user, via remote access.

It is **recommended** to have the **root** user's remote access (inbound/ingress) disabled.  The only way the root user should be accessed if through the **nodeadmin** user account.

:::note
If the Node Operator used the recommended settings during installation, this process should have already been completed, and no Node Operator intervention should be needed.
:::

### <span style={{color:'green',fontSize:'1.3em'}}>enable_root_ssh</span> 

The `enable_root_ssh` command is a *special* command that works on the Debian distribution level.  It will enable the ability for access to the **root** user, via remote access.

It is **recommended** to have the **root** user's remote access (inbound/ingress) **disabled**.  The only way the root user should be accessed if through the **nodeadmin** user account.

This command can be used to reverse this security setting via **nodectl**.

### <span style={{color:'green',fontSize:'1.3em'}}>change_ssh_port</span>

The `change_ssh_port` command is a *special* command that works on the Debian distribution level. For added security, it is **recommended** that your run your **SSH** remote access through a non-commonly known port number.  In the case of the **ssh** protocol, a port that is different from port `22`.

You should use an unused port between `1024` and `65535`.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<port number>` | Which port number would you like to change your SSH port for use? | **required** |

> ##### Examples
-
help file
```
sudo nodectl change_ssh_port help
```
Change port to port 4242
```
sudo nodectl change_ssh_port -p 4242
```

## p12 Operations

### <span style={{color:'green',fontSize:'1.3em'}}>nodeid</span> 

The `nodeid` command will retrieve your Node's public key (nodeid) for either your local Node or another Node by supplying the `-t` (target) switch followed by the `ip_address` of the node on the cluster that is targeted.

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which profile are you seeking the nodeid from. | **required** |
| -t | `<ip_address` | retrieve remote by target IP address. | **optional** |

> ##### Examples
-
Help Screen
```
sudo nodectl nodeid help  
```
Retrieve local nodeid
```  
sudo nodectl nodeid
```
Retrieve nodeid of a Node on the cluster with the IP address of `111.111.111.111`.
```  
sudo nodectl nodeid -t 111.111.111.111
```

### <span style={{color:'green',fontSize:'1.3em'}}>id</span> 

The `id` command is an alias to the [nodeid](#nodeid) command.

### <span style={{color:'green',fontSize:'1.3em'}}>dag</span> 

The `dag` command will retrieve your Node's wallet information for either your local Node or another Node by supplying the `-w` (wallet) switch followed by the `dag_wallet` of the node on the cluster that is targeted.

Following general output details about your wallet, **nodectl** will query the DAG explorer API and retrieve details of the last 350 snapshot entries.  This can be excluded by using the `-b` switch.  

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which profile are you seeking the wallet information from. | **required** |
| -w | `<dag_wallet>` | retrieve remote by target wallet address. | **optional** |
| -b | None | if the `brief` switch is included a detailed view of the wallet transactions will be excluded from the command's output. | **optional** |
| -np | None | By default, the `dag` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |
| --csv | None | Export the file to default dated file name to the default uploads (see [configuration file](#span-stylecolorgreenfontsize13emconfigurespan)) or based on the `--output` switch (below). | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure command](#span-stylecolorgreenfontsize13emconfigurespan). | **optional** |
  
The `--output` switch can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#span-stylecolorgreenfontsize13emconfigurespan) command. 

| Output Header | Description |
| ---: | :------ |
| IP ADDRESS    | External IP address of the Node |
| P12 Filename  | Name of the p12 private key file that details were extracted from |
| P12 Location  | Directory location of the p12 file that details were extracted from |
| DAG Address | DAG address extracted from the p12 file requested |
| $DAG Balance | Balance of DAG tokens found connected to this wallet |
| $USD Value | $DAG Balance converted to USD |
| $DAG Price | Current value of a $DAG token in USD |

| SNAPSHOT HEADER | Description |
| ---: | :----- |
| Timestamp | The snapshot timestamp
| Ordinals | The ordinal |
| Rewards | $DAG reward found for this wallet in the snapshot data |
| Total Rewards | Accumulation of the rewards found during this period of time |

> ##### Examples
-
Help Screen
```
sudo nodectl dag -p dag-l0 help  
```
Retrieve local dag wallet details.
```  
sudo nodectl dag -p dag-l0
```
Retrieve dag wallet information of a Node on the cluster with the DAG wallet address of `DAG0911111111111111111111111111111111111` 

 > (*fake address for demonstration purposes only*).
```  
sudo nodectl dag -w DAG0911111111111111111111111111111111111 -p dag-l0
```
Retrieve dag wallet information of a Node on the cluster without snapshot details.
```  
sudo nodectl dag -p dag-l0 -b
```
Retrieve the Node's dag wallet without [pagination](#what-is-pagination).
```  
sudo nodectl dag -p dag-l0 -np   
```

### <span style={{color:'green',fontSize:'1.3em'}}>nodeid2dag</span>

The **`nodeid2dag`** command will take in a required public node id or public key ( `128 byte` hexadecimal string ) and converts it into its associated **Constellation Network** DAG wallet address.
  
| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| None | `<node_id>` | 128 byte node id (public key) to derive DAG wallet from. | **required** |

:::warning
The `<node_id>` is required and does not have a related `switch`.
:::

> ##### Examples
help file
```
sudo nodectl nodeid2dag help
```
convert nodeid to dag wallet
```
sudo nodectl nodeid2dag <node_id>
```

:::note
Due to the cryptographic nature of a DAG wallet, you can only 1-way hash a nodeid to the DAG wallet, and not visa-versa.    
:::

### <span style={{color:'green',fontSize:'1.3em'}}>passwd12</span>  

The `passwd12` command does not take any arguments.

This command offers the Node Operator the ability to change their p12 keystore file's passphrase through an interactive experience.
  
:::warning
**`passwd12`** will not update the [cn-config.yaml](./nodectlConfig.md) file.

Please run the sudo nodectl configure command to update your passphrase (if necessary) after completing the passphrase update utility command.
:::

> ##### Examples
-
Help File
```
sudo nodectl passwd12 help
```
Go through the p12 passphrase change process
```
sudo nodectl passwd12
```

### <span style={{color:'green',fontSize:'1.3em'}}>export_private_key</span> 

The **`export_private_key`** command does not take any arguments.
  
`export_private_key` will pull your private out of your p12 file and print it to the screen.
  
:::danger
Do not share this private key with anyone that you do not completely trust with your financial assets.
:::

Import the private key produced by this command into your StarGazer wallet in order to control your Node's wallet.
        
> ##### Examples
help screen
```
sudo nodectl export_private_key help
```  
execute the export_private_key command
```
sudo nodectl export_private_key
```








## Configuration

### <span style={{color:'green',fontSize:'1.3em'}}>configure</span>
This command will attempt to guide the Node Operator through the **creating** or **editing** the **`cn-config.yaml`** file.
  
The `cn-config.yaml` file is an extremely important file that **nodectl** uses to determine how it should control and configure your Constellation Network Validator Node.

The `configure` command will offer a relatively detailed explanation of all configuration options, unless the `-a` (*advanced*) switch is used.  

*nodectl will confirm if you want to enter advanced mode if not specified.*

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -a | None | enable advanced mode. | **optional** |
| -e | None | enter directly into **edit** configuration mode for existing configuraitons. | **optional** |
| -n | None | enter directly into **new** configuration mode. | **optional** |
  
In new configuration mode, **nodectl** will offer you two (2) options

1. Predefined Profile settings
2. Manual Configuration
    
In edit configuration mode, **nodectl** will offer you several options
1. Edit Profiles
2. Edit Global Settings
    
> ##### Examples
-
help screen
```
sudo nodectl configure help 
```
enter default configuration
```
sudo nodectl configure  
```
enter configurator directly to new config options
```
sudo nodectl configure -n  
```
enter configurator directly to edit config options
```
sudo nodectl configure -e  
```
enter configurator directly to edit config options in advanced mode
```
sudo nodectl configure -a -e  
```  

### <span style={{color:'green',fontSize:'1.3em'}}>view_config</span> 

The `view_config` command will show a [paginated](#what-is-pagination) view of the current `cn-config.yaml` file.  You can disable the pagination with the `-np` switch.

| Command | Shortcut |
| :---: | :---: | 
| view_config  |  -vc    |

| switch | parameters | Description | Is Switch Required or Optional |
| :---: | :---: | :--- | :----: |
| -np | None | By default, the `view_config` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |

### <span style={{color:'green',fontSize:'1.3em'}}>validate_config</span>

The `validate_config` command will attempt to review your `cn-config.yaml` file for errors that may cause **unexpected** results when attempting to run your Node.

| Command | Shortcut |
| :---: | :---: | 
| validate_config  |  -val  |


### <span style={{color:'green',fontSize:'1.3em'}}>auto_restart</span> 



### <span style={{color:'green',fontSize:'1.3em'}}>upgrade_path</span>

### <span style={{color:'green',fontSize:'1.3em'}}>upgrade</span>  

Command to upgrade both **Tessellation** and **nodectl** backend files.

Please see the [upgrade nodectl](nodectlUpgrade.md) documentation for a detailed explanation of the command.

### <span style={{color:'green',fontSize:'1.3em'}}>upgrade_nodectl</span>  

Dedicated command to upgrade the **nodectl** binary file.
Please see the [upgrade_nodectl](nodectlUpgrade.md) documentation for a detailed explanation of the command.

> ##### Examples
-
help file
```
sudo nodectl upgrade_nodectl help
```
upgrade nodectl
```
sudo nodectl upgrade_nodectl
```

### check_versions

With the `check_versions` command, **nodectl** will go out and review the latest versions of both **Constellation Network Tessellation** and **nodectl**. 

**nodectl** will review the current github repo and compare it to the versions running on the Node. 

It will report back True or False based on whether the versions match.
  
If a profile name is not supplied, nodectl will use the first found profile configured on the Node.

| Command | Shortcut |
| :---: | :---: | 
| check_versions  |  -cv   |  

| Output Header | Description |
| ---: | :------ |
| Tess installed | What version of **Tessellation** was found on the Node. |
| Tess latest | What version of **Tessellation** was found in the current repository. |
| Tess version match | Does the Node match up to the repository? |
| nodectl installed  | What version of **nodectl** was found on the Node. |
| nodectl latest | What version of **nodectl** was found in the current repository. |
| nodectl version match | Does the Node match up to the repository? |

> ##### Examples
-
Show help
```
sudo nodectl check_version help
```
Execute the check_version command
```
sudo nodectl check_version
```