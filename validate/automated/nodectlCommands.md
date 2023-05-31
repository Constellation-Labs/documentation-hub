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





# nodectl

## Introduction

This document compliments the **nodectl** [help command](#help) reference offered through execution of a Node running the **nodectl** utility. 





### What is a switch and parameter?

A command-line **switch** is a modifier that is added to the end of a command being executed by **nodectl**.

It follows the `sudo nodectl <command>`.  

When the command is requested and the `switch` added, it may be followed by specific items or "instructions" that are called **parameters**.

#### Examples

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

The most common method of accessing your Node is through a [remote shell](../validator/sshkeyExplained.md).  When we issue a command within our remote shell, the output of a command may extend past the height of the terminal window.  In this case, **nodectl** will "page" the output by pausing when the output printed to the screen reaches the height of the window, before needing to scroll.

It will offer you the option to quit or continue.

Commands that create the need for pagination will generally offer a `-np` (*no pagination*) [switch](#what-is-a-switch-and-parameter) to disable pagination.

<MacWindow>
  Press any key or `q` to quit
</MacWindow>




## Command References
---




### help
---
The **`help`** command will offer help for most commands available by the **nodectl** utility.

Node Operators can issue the `help` command by itself to see a basic rundown of all **switches** and **parameter** requirements.

```
sudo nodectl help
```
<MacWindow>
  NODECTL INSTALLED: [v2.7.1]<br />
  TESSELLATION INSTALLED: [v2.0.0-alpha.6]<br />
  @netmet72<br />
  ----------------------<br />
</MacWindow>

Issuing the `help` command with the actual command you are seeking help from, will show a more detailed explanation of that command.  *Similar to this document, except from the command line itself.*
```
sudo nodectl status help
```




## Service Change Commands




### start
---
The **`start`** command takes a single [switch](#what-is-a-switch-and-parameter).

**Start** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
|  -p | `<profile_name>` | starts the service related to the profile name supplied. | **required** |

> #### Examples
- Help screen
```
sudo nodectl start -p dag-l0 help  
```
- Start profile named `dag-l0`
```  
sudo nodectl start -p dag-l0
```




### stop
---
The **`stop`** command takes a single [parameter](#what-is-a-switch-and-parameter).

**Stop** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | stops the service related to the profile name supplied. | **required** |

> #### Examples
- Help screen
```
sudo nodectl stop -p dag-l0 help  
```
- Stop profile named `dag-l0`
```  
sudo nodectl stop -p dag-l0
```





### restart
---
The **`restart`** command takes a single [parameter](#what-is-a-switch-and-parameter).

**Restart** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied or special **parameter** `all`.
  
This command will take the following actions (**in order**) on the profile it was connected on:
 - Leave the cluster 
 - Stop the service
 - Start the service 
 - Re-join the cluster.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` \| `all` | restarts the service related to the profile name in question. | **required** |

> #### Examples
- Help screen
```
sudo nodectl restart -p dag-l0 help  
```
- Restart **all** the profiles configured on the Node, in proper order of operations.
```  
sudo nodectl restart -p all
```
- Start profile named `dag-l0`
```  
sudo nodectl restart -p dag-l0
```




### slow_restart 
---

The **`slow_restart`** command is [almost] exactly the same as the [restart](#restart) command; however, if you issue a **slow restart** the process will take **10 minutes** to complete. (*600 seconds*)

The purpose of the `slow_restart` command is to assist a Node that may be **stuck** in an undesirable state or **stuck** in an activity causing it to be unresponsive on the cluster.  The `slow_restart` can also assist in a myriad of other unexpected or undesirable conditions.  

The `slow_restart` will allow enough time for a Node to be off the network and reset any issues.

| Command | Shortcut |
| :----: | :---: |
| slow_restart  |  -sr   |

### restart_only 
---

The `restart_only` command is exactly the same as the [restart](#restart) command; however, if you issue a **restart_only**, the process will exclude the `join` action to rejoin the cluster.

After a `restart_only` is executed, the profile should end in an `ReadyToJoin` state.




## Cluster Change Commands




### leave 
---
The **`leave`** command takes a single [parameter](#what-is-a-switch-and-parameter).

**Leave** the **hypergraph** or **metagraphs** related to a configured profile name.  This command will not work without the `<profile_name>` [parameter](#what-is-a-switch-and-parameter) supplied.

Issuing a `leave` against your Node will allow your Node to complete any processes on the **Hypergraph** or **Metagraph** that it may be involved in **before** your Node exits the cluster.

It is appropriate and will improve your Node's **PRO** score to `leave` the cluster before you issue a `stop` command.
  
| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | leaves the cluster related to the profile [parameter](#what-is-a-switch-and-parameter) supplied. | **required** |

> #### Examples 
- Help screen
```
sudo nodectl leave -p dag-l0 help  
```
- Leave profile named `dag-l0`
```  
sudo nodectl leave -p dag-l0
```




### join 
---

The **`join`** command takes a single [parameter](#what-is-a-switch-and-parameter).

**Join** the **hypergraphs** or **metagraphs** related to a configured profile name.  This command will not work without the `<profile_name>` [parameter](#what-is-a-switch-and-parameter) supplied.

You will need to make sure that the profile related to the cluster your are attempting to join is started; as well as, the status of your Node is in `ReadyToJoin` [status](#status) on the cluster.
  
| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | join the cluster related to the profile name [parameter](#what-is-a-switch-and-parameter) supplied. | **required** |

> #### Examples
- Help screen
```
sudo nodectl join -p dag-l0 help  
```
- Join profile named `dag-l0`
```  
sudo nodectl join -p dag-l0
```




## Node Operations




### status 
---

The **`status`** command takes a single **optional** [parameter](#what-is-a-switch-and-parameter).

**Status** will review the current status of your Node.

If the `-p` switch is used with the `<profile_name>`, only that profile's status will appear.  If the `status` command is called without the `-p` [switch](#what-is-a-switch-and-parameter), all profiles will be shown.
  
| Command | Shortcut |
| :---: | :---: | 
| status  |  -s      |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | supply profile name [parameter](#what-is-a-switch-and-parameter) to show status. | **optional** |

> #### Examples
- Help screen
```
sudo nodectl status help  
```
- Show all profiles
```
sudo nodectl status
```
- Show status of profile named `dag-l0`
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




### list
---

The **`list`** command does not take any [parameters](#what-is-a-switch-and-parameter) and displays the details of the profiles found in the [**`cn-config.yaml`**](./nodectlConfig.md) file.  You can update the **`cn-config.yaml`** file with the [configure command](#configure).

| Title | Description | 
| ---: | :--- |
| Profile Name | Name of the profile on display as defined by the **`cn-config.yaml`**. |
| Profile Description | Node operator defined description of the profile. |
| Public API TCP | The TCP port configured that is open to the public for API calls. |
| P2P API TCP | The TCP port configured that is used for gossip peer to peer API communications. |
| CLI API TCP | The TCP port configured that is used for internal API calls only. |  
  
> #### Examples
- Help screen
```
sudo nodectl list help
```  
- Execute the list command
```
sudo nodectl list
```




### peers
---

The **`peers`** command will attempt to list all the peers found on the cluster; as well as, list their IP addresses for review.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | review the cluster that relates to the requested profile. | **required** |
| -t | `<target_node>` | Node on the cluster (ip or hostname) that you would like to use as your target (The Node to use as reference.) for finding peers. | **optional** |
| -c | None | count the peers on the network. | **optional** |
| -np | None | no [pagination](#what-is-pagination). | **optional** |
| --csv | None | create csv (comma separated values) output file instead of print out to the screen. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
| --basic | None | show only the ip address and public port. | **optional** |
| --extended | None | show full nodeid and dag address. | **optional** |
  
Normal output from the peers command will show all the peers seen on a given **Metagraph** or the **HyperGraph** (profile dependent) this will include:
- node ip with public port 
  - `10.10.10.10:1000` = `10.10.10.10` with public TCP port of `1000`
- nodeid (shortened to first 8 hex values, `....`, last 8 hex values)
   - `abcd1234....efgh4567`
- DAG wallet (shortened)
   - `DAG12345...78910111`
   
You can utilize the **`--basic`** [switch](#what-is-a-switch-and-parameter) to force **nodectl** to only show the `PEER IP:TCP PORT` column.
    
You can utilize the **`--extended`** [switch](#what-is-a-switch-and-parameter) to force **nodectl** to only show all fields in long format.

If you do not use the `--basic` or `--extended` [switches](#what-is-a-switch-and-parameter), the output will be in shorten form for all elements (ip:port, dag address, nodeid).

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

> #### Examples
- Help screen
```
sudo nodectl peers help
```
- Show nodes on cluster from random peer on the cluster from a specific profile
```
sudo nodectl peers -p <profile_name>
```
- Show YOUR Nodes's peers
```
sudo nodectl peers -p <profile_name> -t self
```
- Show peers on the cluster utilizing a specific target ip address.
```
sudo nodectl peers -p <profile_name> -t <ip_address or hostname>
```
- Show count of peers your node is able to see. (synonymous with [`find`](#find) command) show peers on the cluster utilizing a specific.
```
sudo nodectl peers -p <profile_name> -c
```
- Source target ip address to count against.
```
sudo nodectl peers -p <profile_name> -t <ip_address or hostname> -c
```
  
#### Other examples
Example usage for a profile called dag-l0
```
sudo nodectl peers -p dag-l0
```

Example usage for --basic
```
sudo nodectl peers -p dag-l0 --basic
```

Example usage for --extended
```
sudo nodectl peers -p dag-l0 --extended
```
  
Create a csv file 
```
sudo nodectl peers -p <profile_name> --csv
```
Create a csv file named test.csv
```
sudo nodectl peers -p <profile_name> --csv --output test.csv
```




### find
---

The **`find`** command takes several parameters.
  
This command will attempt to find the requested peer on the current connected **hypergraph** or **metagraph**.

The find command offers insight into the 
- number of nodes on the cluster
- number of nodes in **`Ready`** state
- number of nodes in **`Observing`** state
- number of nodes in **`WaitingForReady`** state
    
It will show you the profile searched (required) and offer you confirmation that your Node is seen on the cluster.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -s | `<source_node>` | Node on the cluster you want to use to lookup other nodes. | **optional** |
| -t | `<target_node>` | Node on the cluster (ip address, hostname, or nodeid) you want to look up on the cluster. | **optional** |

You may specify a **`source`** node that will be used as the reference point to lookup the **`target`** node (either your Node *default* or a specified target) on the cluster and return a `True` or `False` depending on whether or not it is found.
  
You may use the **`self`** keyword for either the `source` ( `-s` ) or `target` ( `-t` ) [parameters](#what-is-a-switch-and-parameter).

:::danger Note
Choosing a **source node** that is **NOT** on the network may result in an error or false negative.
:::

> #### Examples
- Help screen
```
sudo nodectl find help
```
- Check if your Node is listed/seen on the cluster using a random source Node that is already found on the cluster.
```
sudo nodectl find -p <profile_name>
```
- Check if your Node is listed/seen on the cluster using a specific source Node.
```
sudo nodectl find -p <profile_name> -s <source_ip_host>
```
- Check if your Node is listed/seen on the cluster using a specific source Node and a specific target Node (other then your own.
```
sudo nodectl find -p <profile_name> -s <source_ip_host> -t <target_ip_host>
```

#### other `find` examples

If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by another random Node on the cluster we are connected to identified by the profile `dag-l0`.
```
sudo nodectl find -p dag-l0 
```
or
```
sudo nodectl find -p dag-l0 -t 10.1.1.1
```
look for a node by `nodeid`
```
sudo nodectl find -p dag-l0 -t <nodeid>
```
If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by a Node identified by the `-s` option (`10.2.2.2`) on the cluster we are connected to.
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
In this example we are asking `10.2.2.2` (our source) if it is able to identify the target `10.1.1.2` on the network cluster.
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t 10.1.1.2
```




### check_connection
---

The **`check_connection`** command will execute a search on the currently connected **Hypergraph** or **Metagraph** cluster. 

| Command | Shortcut |
| :---: | :---: | 
| check_connection  | -cc |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the profile name in question do we want to review. | **required** |
| -s | `<ip_address or hostname>` | identify a **source** Node to use specifically by the `check_connection` command, to test against the **edge** Node. | **optional** |
| -e | `<ip_address or hostname>` | identify a **edge** Node to compare against the **source** Node. | **optional** | 

If the `-s` [switch](#what-is-a-switch-and-parameter) is not specified, **nodectl** will pick a random Node on the cluster specified by the `-p` profile required parameter.
  
It will search against the Node the `check_connection` command was executed upon unless an **`edge device`** to check against the `source` is specified by an optional `-e` [switch](#what-is-a-switch-and-parameter).
  
The command will compare the Nodes found on the source against the Nodes found on the edge.  If the Nodes connected to each do not match, the command will display those Nodes that are missing between the two.

##### Dictionary
| symbol | description |
| :--: | :-- |
|  *   | Indicates the ip searched against was either the edge and source ip
|  i   | Initial State
|  rj  | ReadyToJoin State
|  ss  | StartingSession State
|  s   | SessionStarted State
|  rd  | ReadyToDownload State
|  wd  | WaitingForDownload State
|  wr  | WaitingForReady State
|  dp  | DownloadInProgress State
|  ob  | Observing State
|      | Ready
|  l   | Leaving State
|  o   | Offline State
|  a   | ApiNotReady State (nodectl only)

#### If Node shows `False`
There may be circumstances where your Node is showing a False positive.  The network may still be converging or another Node may be causing your Node to show False.
  
In some cases you may need to wait a little longer and then check again if:
- Your Node is showing `False`.
- If you are seeing many Nodes "missing". 
  
The Node may be off the network and a restart is required.  You can use the [restart command](#restart) to attempt to restart and join the network. 

#### Troubleshooting
- You may review your [log files](#logs) to see if you can find an issue
- You can contact a System Administrator to review log files which may help to figure out if your issue is correctable. They may request you [send_logs](#send_logs) feature.

---

> #### Examples
- Scenario for help 
  - `<profile_name>` will be **dag-l0**
  - Node you joined to originally (source) : **`10.1.1.1`**
  - The IP of your Node (edge) : **`10.2.2.2`**
  - The IP of another Node (other) : **`10.3.3.3`**
  - The IP of another Node (other) : **`10.4.4.4`**
- Help menu
```
sudo nodectl check-connection help 
```
- Check random "source" against the local "edge" Node
```
sudo nodectl check-connection -p dag-l0
```
- Check random "source" Node against "other" Node
```
sudo nodectl check-connection -p dag-l0 -e 10.3.3.3
```
- Check "any other Node" against "any other Node"
```
sudo nodectl check-connection -p dag-l0 -s 10.3.3.3 -s 10.4.4.4
```            




### check_source_connection
---

The **`check_source_connection`** command takes a profile [parameter](#what-is-a-switch-and-parameter).

| Command | Shortcut |
| :---: | :---: | 
| check_source_connection  | -csc  |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the profile name in question do we want to review. | **required** |
    
When executed the `check_source_connection` command will attempt to find a random Node on the current known **Hypergraph** or **Metagraph** cluster.
  
:::warning 
The random Node **needs** to be joined into the **consensus of the cluster**, and **must** be on the cluster and in **`Ready`** state.

**nodectl** should take care of this for us.
:::

example output
```
States: Initial, ReadyToJoin, StartingSession, SessionStarted,                                         
        ReadyToDownload, WaitingForDownload, DownloadInProgress, Observing, 
        WaitingForReady, WaitingForObserving, Ready, Leaving, 
        Offline, ApiNotReady, SessionIgnored, SessionNotFound, 
          
Source: Server this Node is joined to
        Edge: This Node

Note: If the SOURCE is on a different network it will show ApiNotReady

FULL CONNECTION              PROFILE                                                                   
True                         dag-l0                     
SOURCE -> STATE              EDGE -> STATE              
True | Ready                 True | Ready               
  
Node restart service does not need to be restarted because pid
[4157840] was found already. 
```  

| Title | Description | 
| ---: | :--- |
| Full Connection | Both the source Node picked by nodectl and the local **edge** Node that executed the `check_source_connection` command can see each other **`True`** or cannot **`False`**. |
| Profile | The profile that this command was run against. |
| Source -> State | Can the **SOURCE** Node see the edge Node **`True `** or **`False`**. The source Node's state is in **`Ready`** state. |
| Edge -> State | Can the **EDGE** Node see the edge Node **`True`** or **`False`**. The edge Node's state is in **`Ready`** state. |  

> #### Examples
- Help screen
```
sudo nodectl check_source_connection help
```  
- Execute the check_source_connection command
```
sudo nodectl check_source_connection
```




### health
---

The **`health`** command does not take any [parameters](#what-is-a-switch-and-parameter).

It displays the basic health elements of your Node.

| OUTPUT | Description |
| :---: | :------- |
| ok | Falls within normal operating parameters |
| low | Falls outside of normal operating parameters - minimum |
| warn  | Falls outside of normal operating parameters - upper threshold | 

| Title | Description | 
| ---: | :--- |
| 15M CPU | Average usage of CPU over 15 minute intervals. |
| Disk Usage | How much hard drive (DISK) space is in use. |
| Uptime Days | How long the operating system has been running since the last boot/reboot. |
| Memory | RAM usage. | 
| Swap | SWAP space HD usage. |

> #### Examples
- Help screen
```
sudo nodectl health help
```  
- Execute the health command
```
sudo nodectl health
```




### sec
---

The **`sec`** command does not take any [parameters](#what-is-a-switch-and-parameter).

sec = security 

It displays the basic security elements of your Node.  It displays parsed elements from the `auth.log` file on your Debian operating system.
  
Following the table formatted output, **nodectl** will display a list of `date` -> `ip address` of external access requests against your Node.

:::note 
The results will be based off the current and last "rolled" auth.log file.

This **nodectl** feature is currently not related to the **Tessellation** processes on a Node.  It is reviewing distribution level `auth` files.
:::

example output
```
  LOG ERRORS          ACCESS ACCEPTED     ACCESS DENIED       MAX EXCEEDED        PORT RANGE
  10                  31                  41                  39                  1024-4000
```

| Title | Description | 
| ---: | :--- |
| Log Errors | How many ERROR statements were found. |
| Access Accepted | Count of how many logins were requested and accepted. |
| Access Denied | Count of how many Invalid logins were found. |
| Max Exceeded | Count of how many Invalid logins were blocked due to excessive attempts. | 
| Port Range | What the minium and maximum port range for the denied attempts were identified. |
| Since | The creation date of the last auth.log that was reviewed. |

> #### Examples
- Help screen
```
ssudo nodectl sec help
```  
- Execute the sec command
```
sudo nodectl sec
```




### price
---

| Command | Alias |
| :---: | :---: | 
| price  | prices |

The **`price`** command does not take any [parameters](#what-is-a-switch-and-parameter). 

This command performs a quick lookup for crypto prices via **CoinGecko's** public API.  

:::warning
This command is for recreation purposes **only**.  

**Constellation Network** is not a financial advisor. Information obtained from CoinGecko and does not represent any opinions or financial advise of or from Constellation Network.
:::

| Title | Description | 
| ---: | :--- |
| $DAG | Constellation Network |
| $LTX | Lattice Exchange |
| $BTC | Bitcoin |
| $ETH | Ethereum | 
| $QNT | Quant Network |

> #### Examples
- Help screen
```
ssudo nodectl price help
```  
- Execute the price command
```
sudo nodectl price
```




### market
---

| Command | Alias |
| :---: | :---: | 
| market | markets |

The **`market`** command does not take any [parameters](#what-is-a-switch-and-parameter). 

Performs a quick lookup for crypto markets via CoinGecko's public API.
  
The command will list the Top 10 Crypto markets at the current moment in time. In the event that **Constellation Network** is not in the top ten, it will list it's current position in relation to the rest of the known markets.
  
:::warning
This command is for recreation purposes **only**.  

**Constellation Network** is not a financial advisor. Information obtained from CoinGecko and does not represent any opinions or financial advise of or from Constellation Network.
:::

| Title | Description | 
| ---: | :--- |
| Rank | Ranking 1 Best, > x+1 Worst |
| Name | Token name |
| Symbol | Token symbol |
| Price| Current price at time of execution. | 
| Market Cap | Market Capitalization |
| Total Supply | Total supply of tokens |
| ATH | **A**8ll **T**ime **H**igh price of the token |

> #### Examples
- Help screen
```
sudo nodectl market help
```  
- Execute the market command
```
sudo nodectl market
```




### refresh_binaries 
---

The **`refresh_binaries`** command does not take any [parameters](#what-is-a-switch-and-parameter).
  
| Command | Shortcut |
| :---: | :---: | 
| check_source_connection  | -rtb  |

This command will download and overwrite the existing **Tessellation** binaries files that are required to run your Node.  The result of this command will be to download the binaries from the latest release and is independent of a system upgrade.
  
This command can be used to refresh your binaries in the event that you have a corrupted system.
  
This command should be accompanied by the restart command in order to allow your Node to utilize the new binary files.
  
This includes a refresh of the latest local `seed-list` access list file.
  
> #### Examples
- Help screen
```
sudo nodectl refresh_binaries help
```  
- Execute the refresh_binaries command
```
sudo nodectl refresh_binaries
```




### check_seedlist
---

The **`check_seedlist`** command takes one [parameter](#what-is-a-switch-and-parameter).

| Command | Shortcut |
| :---: | :---: | 
| check_seedlist  | -csl |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | related to the profile to verify access permissions. | **required** |

**`check_seedlist`** will pull your `nodeid` out of your p12 file and compare it to the seedlist downloaded from **Constellation Network's** authorized list.
  
:::note
This command is specific to current restrictions placed on the **Hypergraph** for controlled access prior to the **PRO Score** [proof of reputable observation] release.
:::

| Title | Description |
| -- | :-- |
| ip address | The `ip address` of the Node in question |
| p12 filename | The name of the `p12` file on the local Node |
| p12 location | The location of the `p12` file on the local Node |
| node id | The `p12` public key ( *nodeid* ). |
| node id found on seed list | This will be a `True` or `False`.  In the event of a `False` please contact an administrator on the **Constellation Network** official Discord server. |
 
> #### Examples
- Help screen
```
sudo nodectl check_seedlist help
```  
- Execute the check_seedlist command
```
sudo nodectl check_seedlist
```




### update_seedlist 
---

The **`update_seedlist`** command does not take any [parameters](#what-is-a-switch-and-parameter).
  
| Command | Shortcut |
| :---: | :---: | 
| update_seedlist  | -usl |

`update_seedlist` will pull down the latest seedlist from the Constellation Network repositories. This command can be used in the event your Node is unable to authenticate (and therefor will not connect) to the network.  
  
Using the [`check_seedlist`](#check_seedlist) command, a Node Operator  can confirm if the Node is seen on the access lists; if not, issue the `update_seedlist` command to attempt to correct the issue.
  
:::note 
If you update the seedlist and still receive a `False`, you may need to contact a **Constellation Network** support Administrator for further help. This can be done by accessing the **Constellation Network** official Discord server.
:::    

*This command is specific to current restrictions placed on the Hypergraph for controlled access prior to the PRO Score [proof of reputable observation] release.*
        
> #### Examples
- Help screen
```
sudo nodectl update_seedlist help
```  
- Execute the update_seedlist command
```
sudo nodectl update_seedlist
```




### show_seedlist_participation 
---

The **`check_seedlist_participation`** command does not take any [parameters](#what-is-a-switch-and-parameter).

| Command | Shortcut |
| :---: | :---: | 
| show_seedlist_participation | -cslp  |

This command is a temporary feature of nodectl designed for pre-PRO analysis and setup only.  It will be deprecated as soon as no longer necessary.
  
This command can be used to review seed list access-list participation for any/all given profile(s) in the configuration that has a seed-list setup.
       
> #### Examples
- Help screen
```
sudo nodectl check_seedlist_participation help
```  
- Execute the check_seedlist_participation command
```
sudo nodectl check_seedlist_participation
```  




### show_node_states 
---

The **`show_node_states`** command does not take any [parameters](#what-is-a-switch-and-parameter).

This command displays the list of the known Node States that you may find on the Cluster or that **nodectl** defines when not on the cluster.

| Command | Shortcut |
| :----: | :---: |
| show_node_states  |  -sns  |

##### nodectl only states

| State | Description |
| -- | :-- |
| ApiNotReady | shown if nodectl can not reach the Node's internal API server. |
| SessionNotFound | shown if nodectl can not read the Node's session via the internal API server. | 
| SessionIgnored | shown if nodectl is not online and there is not a session to display. | 
  
> #### Examples
- Help screen
```
sudo nodectl show_node_states help
```
- Execute the show_node_states command
```
sudo nodectl show_node_states
```  
- Execute using shortcut [switch](#what-is-a-switch-and-parameter) command
```
sudo nodectl -sns
```




### show_current_rewards
---

The **`show_current_rewards`** command takes several parameters.
  
Search the Constellation Backend explorer and pull the last 50 global snapshots.
  
The command will output a [paginated](#what-is-pagination) list of DAG addresses and the amount of DAG accumulated per DAG address over the course of the time between the START SNAPSHOT timestamp listed and the END SNAPSHOT timestamp listed.
  
:::note 
This only pertains to global **MainNet** rewards.

This does not apply to TestNet rewards.
:::

| Command | Shortcut |
| :----: | :---: |
| show_current_rewards  |  -scr  |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | review the cluster related to the profile name in question. | **required** |
| -w | `<dag_wallet_address>` | DAG wallet on the cluster.  Use this switch if you are interested in an alterative Node that is not the local Node. | **optional** |
| -s | `<snapshot_history_size>` | **default**: 50, The amount of snapshots to review. | **optional** |
| -np | None | no [pagination](#what-is-pagination). | **optional** |
| --csv | None | create csv (comma separated values) output file instead of printing output to the screen. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
  
The `--output` [switch](#what-is-a-switch-and-parameter) can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#configure) command. 

[`sudo nodectl configure`](#configure)
                                              
If a wallet address is not specified the first known wallet address obtained from the configuration will be used.  If a **-p** `<profile>` is specified, the defined profile wallet address will be used for the lookup against the profile specified.
  
If a **-s** `<snapshot_history_size>` is specified:
- The history size entered will be used.  
- Must be between `10` and `375` snapshots. 
- The default value is `50`.
  
:::note 
Currently this command only searches on the **MainNet Layer0 Global Hypergraph** network.
::: 

If the **-w** `<dag_wallet_address>` is used, the **-p** `<profile_name>` will be ignored unless the profile fails to be present on the Node (exist in the configuration).
        
> #### Examples
- Help screen
```
sudo nodectl show_current_rewards help
sudo nodectl -scr help
```
- If the **-p** `<profile>` if not specified, nodectl will use the first known profile. 
```
sudo nodectl show_current_rewards
sudo nodectl show_current_rewards -p <profile_name>
```
- If the **-w** `<dag_address>` is specified, nodectl will the requested DAG address against the MainNet explorer.
```
sudo nodectl show_current_rewards -w <dag_address>
```
- If the **-np** is not specified nodectl will attempt to paginate the output to the current known screen height.
create a csv file 
```
sudo nodectl show_current_rewards --csv
```
- Create a csv file and put in the designated `uploads` directory with specified name.
```
sudo nodectl show_current_rewards --csv --output test.csv
```




### clean_snapshots
---

:::danger 
This command should be used sparingly, only as absolutely necessary.
:::

The **`clean_snapshots`** command will offers the Node Operator the ability to clear **snapshots**.  

:::warning 
With the evaluation of the **Tessellation** protocol, the introduction of **incremental snapshots** may cause this command be deprecated in future releases.
:::

Once the command is executed the Node Operator will be offered a CLI menu of **snapshot** removal options to choose.
  
The option will be carried out and the Node Operator will be offered a visual confirmation of the **snapshots** to be removed, number of snapshots, and size to be freed by their removal.

| Command | Shortcut |
| :----: | :---: |
| clean_snapshots  |  -cs  |

> #### Examples
- Help screen
```
sudo nodectl clean_snapshots help
```
- Execute `clean_snapshots` command
```
sudo nodectl clean_snapshots
```
or
```
sudo nodectl -cs
```




### clean_files
---

The **`clean_files`** command will offers the Node Operator the ability to clear specified logs or special stored files that may not be needed anymore.

Once the command is executed the Node Operator will be offered a CLI menu of removal options to choose.
  
The option will be carried out and the Node Operator will be offered a visual confirmation of the files:
- To be removed
- number of files
- Size to be freed by their removal.

| Command | Shortcut |
| :----: | :---: |
| clean_files  |  -cf  |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -t | `<log_type` | enter the log type that is desired. | **required** |

| Type of Logs | Description |
| :---: | :--- |
| logs | clear logs located in the default or specified log directories. Logs command handles `json_logs` and `archived` logs. |
| uploads | clear uploads located in the default or specified log directories. |
| backups | clear backups located in the default or specified log directories. |

> #### Examples
- Help file
```
sudo nodectl clear_files help
```
- Clean logs of type logs
```
sudo nodectl clear_logs -t logs
```   
- or
```
sudo nodectl -cf -t logs
```




### auto_restart 
---

The **`auto_restart`** command takes several [parameters](#what-is-a-switch-and-parameter).

This feature is **disabled**, by default. 

**`auto_restart`** is a special feature of **nodectl** that will continuously monitor your Node to make sure the various profiles are *on the cluster* (**hypergraph** or **metagraphs**).

| Monitor to keep |
| :--- |
| Each profile's state on the cluster is in `Ready` state. |
| The Node's `session` is concurrent with the cluster's `session`. |
  
:::success IMPORTANT
The Node Operator/Administrator should use **nodectl**'s configuration profile to enable/disable this feature. Although you can enable **`auto_restart`** (also with the **`auto_upgrade`** feature) from the command line, you should use the [configure command](#configure) to enable the feature.  

This will allow you to keep `auto_restart` working properly throughout the use of **nodectl**.
:::

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :----: | :----: | :---- | :----: |
| None | enable | enable the `auto_restart` feature. | **optional** |
| None | disable | disable the `auto_restart` feature. | **optional** |
| None | restart | disable and then enable the `auto_restart` feature | **optional** |
| None | status | display the `auto_restart` and `auto_upgrade` feature status | **optional** |
| None | check_pid | display the `process id` of the process that is currently running the `auto_restart` feature. | **optional** |
| --auto_upgrade | None | enable the `auto_upgrade` feature with the `auto_restart` service. | **optional** |

:::danger IMPORTANT WARNING  
Do **not** rely on `auto_restart` feature completely. `auto_restart` is **not perfect** and should be used as a tool to help keep your Node up in a consistent fashion; however, it may **not be fool proof**, and you should still monitor your Node manually to make sure it stays online with the proper known cluster session.
:::  

**nodectl** will processing each profile in its own thread (`i/o`).  

**nodectl** will wait a randomly set time (per thread) and check the Node's condition after each successive random sleep timer expires.

| activate `auto_restart` identifiers |
| :--- |
| Its service in an inactive state |
| Node's cluster state is not `Ready` |
| The Node's known cluster session does **not** match the cluster's known session. |
  
If the **session** of the cluster does **not** match the Node **session** that was established at the cluster's genesis (at the beginning of the cluster's latest initialization), an `auto_restart` will be triggered. 

The session will change if:
- cluster is at genesis
- a cluster restart is executed
- a roll-back is identified. 
   
If your Node is currently joined to an older session it will no longer be participating on the proper cluster (what can be considered a "*floating island*"), `auto_restart` will attempt to correct the situation.
  
:::warning IMPORTANT
An auto_restart may take up to ~18 minutes to complete.  
:::

These long executions are because the Node will detect one or both profiles down and restart the Global **hypergraph** first. **nodectl** will then attempt to bring up any **metagraphs**.  To avoid timing conflicts with other Node's that may also have `auto_restart` enabled, `auto_restart` has random timers put in place throughout a restart process.  

**nodectl** will need to properly link your **metagraph** to the Global **hypergraph**. 

It is important to understand this is a background and unattended process, the delay is created on **purpose**.
  
It is recommended by the developers to link a **metagraph** (*that requires this type of setup*) through your Node's own Global **hypergraph** connection.
  
:::warning PATIENCE
If you are using `auto_restart` **please remember** if you are physically monitoring your Node while it is enabled, you need to exercise **patience** to allow it to figure out how to get back online by itself as necessary.  
:::

Forcing a manual restart (or any service affecting command) will **disable** `auto_restart`.  If enabled in the configuration, nodectl will attempt to re-enable `auto_restart` after any command that requires it to be temporarily disabled.  If the Node Operator does not have `auto_restart` enabled in the configuration, it will not re-enable after-the-fact.
  
In order to avoid duplicate or unwanted behavior such as your Node restarting when you do not want it started, the auto_restart feature will automatically disable if you attempt to issue any command that manipulates the services.
- leave
- stop
- start
- join
- restart
- upgrade

#### AUTO UPGRADE

You can enable this feature by issuing: `sudo nodectl configure -e` (find details of the [configure command here](#configure)). 
  
**`auto_upgrade`** can only be enabled with the `auto_restart` feature enabled.
  
Optionally if you are not using the configuration, you can enable auto_upgrade by issuing the optional `--auto_upgrade` [switch](#what-is-a-switch-and-parameter) when enabling `auto_restart` from the command line.
  
During a Tessellation upgrade, the session will change.  This will trigger an auto restart.  During the restart, nodectl will identify the version of **Tessellation** on the Node verses what is running on the cluster. If it does not match, nodectl will attempt to upgrade the **Tessellation** binaries before  continuing.
  
:::danger IMPORTANT
**nodectl** will not `auto_upgrade` itself.  

Newer versions of nodectl may require a upgrade be executed in order to update any system services or files that may have changed [for any of many reasons].
:::

#### auto_restart/auto_upgrade passphrase requirement  
:::warning Hidden passphrase
**nodectl** will not work unless the `p12 passphrase` is present in the configuration file.  In order to join the network unattended, nodectl will need to know how to authenticate against the Hypergraph.
:::

Persist auto_restart in configuration and auto_upgrade *choose Edit --> Auto Restart Section*.

[```sudo nodectl configure```](#configure)

> #### Examples
- Help screen
```
sudo nodectl auto_restart help
sudo nodectl auto_upgrade help
```
- Manual enable auto_restart services
```
sudo nodectl auto_restart enable
```  
- Manual enable auto_restart services with auto_upgrade
```
sudo nodectl auto_restart enable --auto_upgrade
```
- Manual disable auto_restart services
```
sudo nodectl auto_restart disable
```
- Manual restart auto_restart services
```
sudo nodectl auto_restart restart
```
- Check if auto_restart is running by searching for the process id (pid) of the auto_restart service. The command will also show status of auto features set in the configuration.
```
sudo nodectl auto_restart check_pid
sudo nodectl auto_restart status
```




## Distribution Operations




### whoami
---

The **`whoami`** command displays the external ip address of your Node. 

Optionally, you can use the optional `-id` switch to map a `nodeid` to an `ip address` on a cluster.
  
The `external IP` of your Node is the address that allows your Node to communicate with the rest of the systems on the Internet.  

This is the address that your Node will use to communicate with the rest of the decentralized Nodes that make up the **Hypergraph** and/or **Metagraphs**.  Your Node will attempt to communications with via other Nodes via p2p and public API requests.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | In order to use the **`-id`** option, **nodectl** will need to know which profile to review the `nodeid` from. | **optional** |
| -id | `<full_node_id>` | p12 public key `nodeid` to lookup. | **optional** |

:::warning 
The -id [switch](#what-is-a-switch-and-parameter) followed by the full nodeid requested, will lookup the node id and return its IP address.  This command will require the `-p` with the profile name of the network you are searching.
:::

> #### Examples
- Help file
```
sudo nodectl whoami help
```
- Show external ip
```
sudo nodectl whoami
```
- Show ip address of a Node by `nodeid` from a cluster via a profile this Node is connected to
```
sudo nodectl whoami -p <profile> -id <node_id>
```




### reboot
---

The **`reboot`** command does not take any [parameters](#what-is-a-switch-and-parameter) and offers the Node Operator the ability to reboot their physical or VPS (Virtual Private Server in the cloud) via a warm boot.
  
:::success Recommended
For Node Operation this command is **preferred/recommended** over normal operating system reboot command. 
:::

When issued, the **nodectl** `reboot` command will gracefully leave the profiles defined in the nodectl configuration file before rebooting the Node.
  
#### dictionary
| term | definition |
| --- | :--- |
| warm boot | restart your entire system via software |
| cold boot | physical start and stop of your Server or VPS |
   
> #### Examples
- Help screen
```
sudo nodectl reboot help
```  
- Execute the reboot command
```
sudo nodectl reboot
```




### disable_root_ssh 
---

The **`disable_root_ssh`** command is a *special* command that works on the Debian distribution level.  It will disable the ability for access to the **root** user, via remote access.

:::success SECURITY
It is **recommended** to have the **root** user's remote access (inbound/ingress) **disabled**.  The only way the root user should be accessed is through the **nodeadmin** user account.
:::

This is done by issuing a `sudo` in front of the **`nodectl`** command.

:::note
If the Node Operator used the recommended settings during installation, this process should have already been completed, and no Node Operator intervention should be needed.
:::

> #### Example
```
sudo nodectl disable_root_ssh
```


### enable_root_ssh 
---

The **`enable_root_ssh`** command is a *special* command that works on the Debian distribution level.  It will enable the ability for access to the **root** user, via remote access.

:::success SECURITY
It is **recommended** to have the **root** user's remote access (inbound/ingress) **disabled**.  The only way the root user should be accessed is through the **nodeadmin** user account.
:::

This command can be used to reverse this security setting configured via **nodectl**'s installation process.

> #### Example
```
sudo nodectl enable_root_ssh
```


### change_ssh_port
---

The **`change_ssh_port`** command is a *special* command that works on the Debian distribution level. For added security, it is **recommended** that your run your **SSH** remote access through a non-commonly known port number.  In the case of the **ssh** protocol, a port that is different from port `22`.

You should use an unused port between `1024` and `65535`.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<port number>` | Which port number would you like to change your SSH port for use? | **required** |

> #### Examples
- Help file
```
sudo nodectl change_ssh_port help
```
- Change SSH TCP port to port `4242`
```
sudo nodectl change_ssh_port -p 4242
```




## p12 Operations




### nodeid 
---

The **`nodeid`** command will retrieve your Node's public key (nodeid) for either your local Node or another Node by supplying the `-t` (target) [switch](#what-is-a-switch-and-parameter) followed by the `ip_address` of the node on the cluster that is targeted.

| Command | Alias |
| :----: | :---: |
| nodeid  |  id  |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -p | `<profile_name>` | which profile are you seeking the nodeid from. | **required** |
| -t | `<ip_address` | retrieve remote by target IP address. | **optional** |

> #### Examples
- Help Screen
```
sudo nodectl nodeid help  
```
- Retrieve local nodeid
```  
sudo nodectl nodeid
```
- Retrieve nodeid of a Node on the cluster with the IP address of `111.111.111.111`.
```  
sudo nodectl nodeid -t 111.111.111.111
```




### id 
---

The **`id`** command is an alias to the [nodeid](#nodeid) command.

| Command | Alias |
| :----: | :---: |
| id |  nodeid  |



### dag 
---

The **`dag`** command will retrieve your Node's wallet information for your local Node.

You can specify another Node by supplying the `-w` (wallet) switch followed by the `dag_wallet` of the Node on the cluster that is targeted.

Following general output details about your wallet, **nodectl** will query the DAG explorer API and retrieve details of the last 350 snapshot entries.  This level of detail can be excluded by using the `-b` switch.  

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which profile are you seeking the wallet information from. | **required** |
| -w | `<dag_wallet>` | retrieve remote by target wallet address. | **optional** |
| -b | None | if the `brief` [switch](#what-is-a-switch-and-parameter) is included a detailed view of the wallet transactions will be excluded from the command's output. | **optional** |
| -np | None | By default, the `dag` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |
| --csv | None | Export the file to default dated file name to the default uploads (see [configuration file](#configure)) or based on the `--output` [switch](#what-is-a-switch-and-parameter) (below). | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
  
The `--output` [switch](#what-is-a-switch-and-parameter) can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#configure) command. 

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
| Ordinals | The ordinal of the snapshot |
| Rewards | $DAG reward found for this wallet in the snapshot data |
| Total Rewards | Accumulation of the rewards found during this period of time |

> #### Examples
- Help Screen
```
sudo nodectl dag -p dag-l0 help  
```
- Retrieve local dag wallet details.
```  
sudo nodectl dag -p dag-l0
```
- Retrieve dag wallet information of a Node on the cluster with the DAG wallet address of `DAG0911111111111111111111111111111111111` 
- (*fake address for demonstration purposes only*).
```  
sudo nodectl dag -w DAG0911111111111111111111111111111111111 -p dag-l0
```
- Retrieve dag wallet information of a Node on the cluster without snapshot details.
```  
sudo nodectl dag -p dag-l0 -b
```
- Retrieve the Node's dag wallet without [pagination](#what-is-pagination).
```  
sudo nodectl dag -p dag-l0 -np   
```




### nodeid2dag
---

The **`nodeid2dag`** command will take in a required public node id or public key ( `128 byte` hexadecimal string ) and converts it into its associated **Constellation Network** DAG wallet address.
  
| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| None | `<node_id>` | 128 byte node id (public key) to derive DAG wallet from. | **required** |

:::warning
The `<node_id>` is required and does not have a related [switch](#what-is-a-switch-and-parameter).
:::

> #### Examples
- Help file
```
sudo nodectl nodeid2dag help
```
- Convert nodeid to dag wallet
```
sudo nodectl nodeid2dag <node_id>
```

:::note
Due to the cryptographic nature of a DAG wallet, you can only 1-way hash a nodeid to the DAG wallet, and not visa-versa.    
:::




### passwd12  
---

The **`passwd12`** command does not take any [parameters](#what-is-a-switch-and-parameter).

This command offers the Node Operator the ability to change their p12 keystore file's passphrase through an interactive experience.
  
:::warning
**`passwd12`** will not update the [cn-config.yaml](./nodectlConfig.md) file.

Please run the [`sudo nodectl configure`](#configure) command to update your passphrase (if necessary) after completing the passphrase update utility command.
:::

:::danger IMPORTANT
**BACKUP** your **p12** prior to using the **passwd12** command
:::

> #### Examples
- Help File
```
sudo nodectl passwd12 help
```
- Go through the p12 passphrase change process
```
sudo nodectl passwd12
```




### export_private_key
---

The **`export_private_key`** command does not take any [parameters](#what-is-a-switch-and-parameter).
  
`export_private_key` will pull your private out of your p12 file and print it to the screen.
  
:::danger
Do not share this private key with anyone that you do not completely trust with your financial assets.
:::

**nodectl** is designed to work with `p12` private key files that support Constellation Network `v2` keys.   If you are running an older node, please refer to the [v1 to v2 migration](../resources/p12v1v2-migrate.md) document.

Import the private key produced by this command into your **StarGazer wallet** (or other) in order to control your Node's wallet.
        
> #### Examples
- Help screen
```
sudo nodectl export_private_key help
```  
- Expose your private key
```
sudo nodectl export_private_key
```




## Configuration




### configure
---

The **`configure`** command will attempt to guide the Node Operator through the **creating** or **editing** the [**`cn-config.yaml`**](./nodectlConfig.md) file.
  
The [`cn-config.yaml`](./nodectlConfig.md) file is an extremely important file that **nodectl** uses to determine how it should control and configure your **Constellation Network** Validator Node.

The `configure` command will offer a relatively detailed explanation of all configuration options, unless the `-a` (*advanced*) switch is used.  

*nodectl will confirm if you want to enter advanced mode if not specified.*

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -a | None | enable advanced mode. | **optional** |
| -e | None | enter directly into **edit** configuration mode for existing configurations. | **optional** |
| -n | None | enter directly into **new** configuration mode. | **optional** |
  
In new configuration mode, **nodectl** will offer you two (2) options

1. Predefined Profile settings
2. Manual Configuration
    
In edit configuration mode, **nodectl** will offer you several options
1. Edit Profiles
2. Edit Global Settings
    
See the [configuration guide document](./nodectlConfig) for more details on this command.

> #### Examples
- Help screen
```
sudo nodectl configure help 
```
- Enter default configuration
```
sudo nodectl configure  
```
- Enter configurator directly to new config options
```
sudo nodectl configure -n  
```
- Enter configurator directly to edit config options
```
sudo nodectl configure -e  
```
- Enter configurator directly to edit config options in advanced mode
```
sudo nodectl configure -a -e  
```  




### view_config
---

The **`view_config`** command will show a [paginated](#what-is-pagination) view of the current [`cn-config.yaml`](./nodectlConfig.md) file.  

| Command | Shortcut |
| :---: | :---: | 
| view_config  |  -vc    |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -np | None | By default, the `view_config` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |




### validate_config
---

The **`validate_config`** command will attempt to review your [`cn-config.yaml`](./nodectlConfig.md) file for errors that may cause **unexpected** results when attempting to run your Node.

| Command | Shortcut |
| :---: | :---: | 
| validate_config  |  -val  |

In the event that **nodectl** finds discrepancies or errors in the **cn-config.yaml**, a table of errors and possible resolutions will be displayed as output.


### upgrade_path
---

The **`upgrade_path`** command does not take any [parameters](#what-is-a-switch-and-parameter) and offers the Node Operator the ability to check their Node's current nodectl version for upgrade path requirements.
  
If the Node is not at the most current version of nodectl, this command will produce a warning. The warning will let the Node Administrator know what the next necessary upgrade version should be, and will show you upgrade path requirements.
   
See the [upgrade path](./nodectlUpgradePath.md) document for more details.

| Command | Shortcut |
| :---: | :---: | 
| upgrade_path  |  -up  |
  
> ##### Example Usage
- Help screen
```
sudo nodectl upgrade_path help
```  
- Execute the upgrade_path command
```
sudo nodectl upgrade_path
```




### upgrade  
---

The **`upgrade`** command is used to upgrade both **Tessellation** and **nodectl** backend files.

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -w | None | **watch** mode.  This creates an upgrade that is less verbose, and saves time by not forcing the Node Operator to wait for all peer to peer connections to be established, instead once the Node reaches a `state` where it is able to participate on the network, **nodectl** will skip watching for the remaining peers to connect and simply and safely continue the upgrade process, therefore saving time. | **optional** |
| --pass | `<passphrase>` | If the Node Operator chose to `hide` their passphrase by excluding it from the [`configuration file`](./nodectlConfig), you will need to supply it at the command line using this switch. | **optional** |
| -ni | None | Non-Interactive &rarr If you want to use the `upgrade` command with all the defaults chosen, nodectl will not ask any interactive questions. | **optional** |

:::note Just in Case
In the event of the `-ni` is used, if **nodectl** identifies anything unusual, it still may disengage non-interactive mode and ask any necessary questions, in an attempt to avoid unexpected errors.
:::

Please see the [upgrade nodectl](nodectlUpgrade.md) documentation for a detailed explanation of the command.




### upgrade_nodectl  
---

The **`upgrade_nodectl`** command is a dedicated command used to upgrade the **nodectl** binary file.

Please see the [upgrade_nodectl](nodectlUpgrade.md) documentation for a detailed explanation of the command.

> #### Examples
- Help file
```
sudo nodectl upgrade_nodectl help
```
- Upgrade nodectl
```
sudo nodectl upgrade_nodectl
```




## Troubleshooting




### logs 
---

The **`logs`** command will print out the contents of the logs that have been requested.

| Command | Alias |
| :---: | :---: | 
| logs  |  log |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | The name of the profile. This is important because (for example) the app.log shares the same log name for each profile.  The Node Operator will need to specify which profile to review. | **required** |
| -l| `<log_name>` | Name of the log that you would like to review.  see [log types](#log-types) | **required** |
| -g | `<word>` | filter out (*grep*) the word `<word>`. This is case insensitive. | **optional** |
| -f | None | `follow` the log line by line.  As a new line is added to the log during execution of user or program initiated elements that might print to the log file being monitored. To cancel out of the "-f" command you will simultaneously press and hold the control `ctrl key` on your keyboard and press the `c` key. | **optional** |

##### Syntax:
```
sudo nodectl logs -p <profile_name> <log_name> [-g <grep_value>] [-f]
```

##### Log Types
| Log Name |
| :--: |
| app |
| http |
| nodectl |

> #### Example
- Request to follow the log app.log from the dag-l0 profile filtering out the word "error" from each line.
```
sudo nodectl logs -p dag-l0 -l app -g error -f
```




### send_logs 
---

The **`send_logs`** command is a *debug* command used to help accumulate log files to send to Developers or System Engineering to dissect; to better the code base.
  
During the execution you will be offered a menu to upload:
- current logs  
- backup logs  
- specific date logs  
- date range logs  
- archived logs  
    
Once you follow the prompts a tarball gzip file will appear in the uploads directory and the system will offer you the ability to upload the results to the transfer.sh service.

| Command | Shortcut |
| :---: | :---: | 
| send_logs  |  -sl |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which profile are you attempting to glean logs from. | **required** |
  
> #### Examples
- Help screen
```
sudo nodectl send_logs help
```
```
sudo nodectl -sl help
```  
- Execute a log preparation for upload
```
sudo nodectl send_logs -p <profile_name>  
```
```
sudo nodectl -sl -p <profile_name>  
```




### check_versions 
---

With the **`check_versions`** command, **nodectl** will go out and review the latest versions of both **Constellation Network Tessellation** and **nodectl**. 

**nodectl** will review the current github repo and compare it to the versions running on the Node. 

It will report back `True` or `False` based on whether the versions match.

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

> #### Examples
- Help menu
```
sudo nodectl check_version help
```
- Execute the check_version command
```
sudo nodectl check_version
```