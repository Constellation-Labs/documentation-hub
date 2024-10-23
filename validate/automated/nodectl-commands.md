---
title: Command Reference Guide
hide_table_of_contents: false
---
<intro-end />

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
</head>





# nodectl

## ◽ Introduction

This document complements the nodectl [help command](#help) command reference available when running the nodectl utility on your node.

### What is an option and parameter?

A command-line **option** is a modifier that is added to the end of a command being executed by nodectl.

It follows the `sudo nodectl <command>`.  

When the command is requested and the `option` added, it may be followed by specific items or "instructions" that are called **parameters**. 

#### Examples

`sudo nodectl <command> <option> <parameter>`

`sudo nodectl <command> <option> <parameter> <option> <parameter>`

`sudo nodectl <command> <option> <parameter> <option> <option>`

:::important Option without parameters
Some **options** do not require a **parameter** be supplied afterwards. The option may need to be supplied alone.
:::

| As a simple example, the command
```
sudo nodectl status -p dag-l0
```

- The `status` is the **command**

- The `-p` is a **option**

- The `dag-l0` is a **parameter**.

:::note
This reference guide will explore the [status command](#status) in further detail; however, in the above example, the option `-p` stands for what [profile](/validate/quick-start/prerequisites#-profile-table) would you like to explore the status of?" and the parameter `dag-l0` is the profile in question we would like to review.
:::

:::note Final Note
If an `option` requires a `parameter`, it must be entered directly after the `option` is supplied on the command line.  However, the order of the `options` that do not require parameters does **not** matter.

option1 requires parameter1, option2 does not require a parameter.
```
sudo nodectl -option1 parameter1 -option2
```
is the same as
```
sudo nodectl -option2 -option1 parameter1
```
:::






### What is pagination?

The most common method of accessing your node is through a [remote shell](/validate/validator/ssh-keys).  When we issue a command within our remote shell, the output of a command may extend past the height of the terminal window.  In this case, nodectl will "page" the output by pausing when the output printed to the screen reaches the height of the window, before needing to scroll.

It will offer you the option to quit or continue.

Commands that create the need for pagination will generally offer a `-np` (*no pagination*) [option](#what-is-an-option-and-parameter) to disable pagination.

<MacWindow>
  Press any key or `q` to quit
</MacWindow>




## ◽ Command References
---



### getting_started
---
The **`getting_started`** command will display a simple readme file with the most used commands found within the nodectl utility.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| getting_started  | None  | >v2.14.0 |

> #### Examples
- Show getting started readme.
```
sudo nodectl getting-started  
```




### help
---
The **`help`** command will offer help for most commands available by the nodectl utility.

Node Operators can issue the `help` command by itself to see a basic rundown of all **options** and **parameter** requirements.

```
sudo nodectl help
```
<MacWindow>
  NODECTL INSTALLED: [v2.7.1]<br />
  TESSELLATION INSTALLED: [v2.8.0]<br />
   Code Name: Princess Warrior<br />
  ----------------------<br />
</MacWindow>

Issuing the `help` command with the actual command you are seeking help from, will show a more detailed explanation of that command.  *Similar to this document, except from the command line itself.*
```
sudo nodectl status help
```




## ◽ Service Change Commands

### start
---
The **`start`** command takes a single [option](#what-is-an-option-and-parameter).

**Start** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
|  -p | `<profile_name>` | starts the service related to the [profile](/validate/quick-start/prerequisites#-profile-table) name supplied. | **required** |

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
The **`stop`** command takes a single [parameter](#what-is-an-option-and-parameter).

**Stop** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied.
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | stops the service related to the [profile](/validate/quick-start/prerequisites#-profile-table) name supplied. | **required** |
| --leave \| -l  | none | You may use `-l` or the long option `--leave` to force a [leave](#leave) against a cluster (recommended) in the event that the [profile's](/validate/quick-start/prerequisites#-profile-table) cluster is in a state where it is recommended to `leave` the cluster first. | **optional** |

> #### Examples
- Show the help screen.
```
sudo nodectl stop help 
```
- Stop profile named `dag-l0`.
```  
sudo nodectl stop -p dag-l0
```
- Stop profile named `dag-l0` and force a `leave`.
```  
sudo nodectl stop -p dag-l0 --leave
```




### restart
---
The **`restart`** command takes a single [parameter](#what-is-an-option-and-parameter).

**Restart** the service related to a configured profile name.  This command will not work without the `<profile_name>` supplied or special **parameter** `all`.
  
This command will take the following actions (**in order**) on the profile it was connected on:
 - Leave the cluster 
 - Stop the service
 - Start the service 
 - Re-join the cluster.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` \| `all` | restarts the service related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question. | **required** |

> #### Examples
- Help screen
```
sudo nodectl restart -p dag-l0 help  
```
- Restart **all** the profiles configured on the node, in proper order of operations.
```  
sudo nodectl restart -p all
```
- Restart profile named `dag-l0`
```  
sudo nodectl restart -p dag-l0
```




### slow_restart 
---

The **`slow_restart`** command is [almost] exactly the same as the [restart](#restart) command; however, if you issue a **slow restart** the process will take **10 minutes** to complete. (*600 seconds*)

The purpose of the `slow_restart` command is to assist a node that may be **stuck** in an undesirable state or **stuck** in an activity causing it to be unresponsive on the cluster.  The `slow_restart` can also assist in a myriad of other unexpected or undesirable conditions.  

The `slow_restart` will allow enough time for a node to be off the network and reset any issues.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| slow_restart  |  -sr   | >v1.x.x |

### restart_only 
---

The `restart_only` command is exactly the same as the [restart](#restart) command; however, if you issue a **restart_only**, the process will exclude the `join` action to rejoin the cluster.

After a `restart_only` is executed, the profile should end in an `ReadyToJoin` state.




## ◽ Cluster Change Commands




### leave 
---
The **`leave`** command takes a single [parameter](#what-is-an-option-and-parameter).

**Leave** the Hypergraph or metagraphs related to a configured profile name.  This command will not work without the `<profile_name>` [parameter](#what-is-an-option-and-parameter) supplied.

Issuing a `leave` against your node will allow your node to complete any processes on the Hypergraph or metagraph that it may be involved in **before** your node exits the cluster.

It is appropriate and will improve your node's **PRO** score to `leave` the cluster before you issue a `stop` command.
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | leaves the cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) [parameter](#what-is-an-option-and-parameter) supplied. | **required** |

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

The **`join`** command takes a single [parameter](#what-is-an-option-and-parameter).

**Join** the Hypergraphs or metagraphs related to a configured profile name.  This command will not work without the `<profile_name>` [parameter](#what-is-an-option-and-parameter) supplied.

You will need to make sure that the profile related to the cluster your are attempting to join is started; as well as, the status of your node is in `ReadyToJoin` [status](#status) on the cluster.
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | join the cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name [parameter](#what-is-an-option-and-parameter) supplied. | **required** |

> #### Examples
- Help screen
```
sudo nodectl join -p dag-l0 help  
```
- Join profile named `dag-l0`
```  
sudo nodectl join -p dag-l0
```




## ◽ Node Operations



### auto_restart 
---

The **`auto_restart`** command takes several [parameters](#what-is-an-option-and-parameter).

This feature is **disabled**, by default. You can enable this feature by issuing: 
```
sudo nodectl configure -e
```
Option <kbd>r</kbd>

- Find details of the configure command [here](#configure). 

**`auto_restart`** is a special feature of nodectl that will continuously monitor your node to make sure the various profiles are *on the cluster* (Hypergraph or metagraphs).

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :----: | :----: | :---- | :----: |
| None | enable | enable the `auto_restart` feature. | **optional** |
| None | disable | disable the `auto_restart` feature. | **optional** |
| None | restart | disable and then enable the `auto_restart` feature | **optional** |
| None | status | display the `auto_restart` and `auto_upgrade` feature status | **optional** |
| None | check_pid | display the `process id` of the process that is currently running the `auto_restart` feature. | **optional** |
| --auto_upgrade | None | enable the `auto_upgrade` feature with the `auto_restart` service. *Must be accompanied by the `enable` option.* | **optional** |

- [list of monitoring ](/validate/automated/nodectl-autorestart#-what-does-nodectl-monitor)
- [timing](/validate/automated/nodectl-autorestart#-what-does-nodectl-monitor)
- [Manual interoperability](/validate/automated/nodectl-autorestart#-interoperability)
- [auto_upgrade](/validate/automated/nodectl-autorestart#-what-is-auto-upgrade)
- [passphrase requirement](/validate/automated/nodectl-autorestart#-passphrase-requirement)

:::danger **RELIANCE**
Do not rely entirely on the `auto_restart` feature. While auto_restart is a useful tool for keeping your node consistently up, it is not foolproof. You should still manually monitor your node to ensure it stays online and connected to the correct cluster session.
:::  
  

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




### clean_files
---

The **`clean_files`** command will offers the Node Operator the ability to clear specified logs or special stored files that may not be needed anymore.

Once the command is executed the Node Operator will be offered a CLI menu of removal options to choose.
  
The option will be carried out and the Node Operator will be offered a visual confirmation of the files:
- To be removed
- number of files
- Size to be freed by their removal.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| clean_files  |  -cf  | >v2.7.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
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
sudo nodectl clean_files help
```
- Clean logs of type logs
```
sudo nodectl clean_files -t logs
```   
- or
```
sudo nodectl -cf -t logs
```




### check_minority_fork
---

The **`check_minority_fork`** command will execute a check against your node's status on the cluster in an attempt to determine if the node is in a minority fork.

What is [minority fork](/validate/validator/forks-explained#-what-is-a-minority-fork)?

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_minority_fork  | -cmf | >v2.12.0 |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question do we want to review. | **required** |

#### If node shows MINORITY FORK `True`
You should restart your node in order to return of the majority fork.  [auto_restart](#auto_restart) has the ability to automatically detect a minority fork and restart your node for you.
  
---

> #### Examples
- Help menu
```
sudo nodectl check_minority_fork help 
sudo nodectl -cmf help 
```
- Check the Hypergraph profile `dag-l0` for a minority fork
```
sudo nodectl check_minority_fork -p dag-l0
```





### check_connection
---

The **`check_connection`** command will execute a search on the currently connected Hypergraph or metagraph cluster. 

The command will compare the nodes found on a source peer against the nodes found on an edge peer.  

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_connection  | -cc | >v1.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question do we want to review. | **required** |
| -s | `<ip_address or hostname>` | identify a **source** node to use specifically by the `check_connection` command, to test against the **edge** node. | **optional** |
| -e | `<ip_address or hostname>` | identify an **edge** node to compare against the **source** node. | **optional** | 

- The **`-s`** [option](#what-is-an-option-and-parameter) may be supplied to request a lookup on a specific peer.  If not specified, nodectl will pick a random peer on the cluster; specified by the `-p` profile (required) parameter.

- The **`-e`** [option](#what-is-an-option-and-parameter) may be supplied to request a lookup on a specific peer edge device that is not the local node.  If not specified, nodectl will pick a random peer on the cluster; specified by the `-p` profile (required) parameter.
  
If the nodes connected to each do not match, the command will display those nodes that are missing between the two.

##### Dictionary
| symbol | description |
| :--: | :-- |
|  *   | Indicates the ip searched against was either the edge and source ip
|  i   | Initial State
|  rtj | ReadyToJoin State
|  ss  | StartingSession State
|  s   | SessionStarted State
|  rtd | ReadyToDownload State
|  wfd | WaitingForDownload State
|  wfr | WaitingForReady State
|  dip | DownloadInProgress State
|  ob  | Observing State
|      | Ready
|  l   | Leaving State
|  o   | Offline State
|  ar  | ApiNotReady State (nodectl only)
| anr  | ApiNotResponding State (nodectl only)

#### If node shows `False`
There may be circumstances where your node is showing a False positive.  The network may still be converging or another node may be causing your node to show False.
  
In some cases you may need to wait a little longer and then check again if:
- Your node is showing `False`.
- If you are seeing many nodes "missing". 
  
The node may be off the network and a restart is required.  You can use the [restart command](#restart) to attempt to restart and join the network. 

#### Troubleshooting
- You may review your [log files](#logs) to see if you can find an issue
- You can contact a System Administrator to review log files which may help to figure out if your issue is correctable. They may request you [send_logs](#send_logs) feature.

---

> #### Examples
- Scenario for help 
  - `<profile_name>` will be **dag-l0**
  - Node you joined to originally (source) : **`10.1.1.1`**
  - The IP of your node (edge) : **`10.2.2.2`**
  - The IP of another node (other) : **`10.3.3.3`**
  - The IP of another node (other) : **`10.4.4.4`**
- Help menu
```
sudo nodectl check_connection help 
```
- Check random "source" against the local "edge" node
```
sudo nodectl check_connection -p dag-l0
```
- Check random "source" node against "other" node
```
sudo nodectl check_connection -p dag-l0 -e 10.3.3.3
```
- Check "any other node" against "any other node"
```
sudo nodectl check_connection -p dag-l0 -s 10.3.3.3 -s 10.4.4.4
```            


### check_consensus
---

The **`check_consensus`** command will execute a check against your node's status on the cluster in an attempt to determine if the node participating in consensus rounds.


| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_consensus | -con | >v2.12.0 |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question do we want to review. | **optional** |
| -s | `<ip_address>` | nodectl will check the ip address supplied instead of the localhost. | **optional** |
| -w | `<seconds>` | watch mode: nodectl will continuously check if the node is in consensus every X seconds, until the <kbd>q</kbd> if hit to exit watch mode. | **optional** |
| --id | `<node_id>` | nodectl will check the node id supplied instead of the localhost. | **optional** |
| --brief |  | Offer output in a more simplified form. | **optional** |
| --file | `<path_to_csv_file>` | option is requested the consensus will be checked against the file that contains at least one nodeid public key or multiple nodeids formatted in one line per nodeid public key.  **The `--file` command cannot coincide with the -w option.** | **optional** |

If the `-p` parameter is not supplied, nodectl will offer you a menu of known profiles to choose from.

The `--file` command expects a csv (comma separated values) file that is populated with nodeids.  Each nodeid must be on its own line.

#### If node shows IN CONSENSUS `False`
You should restart your node in order to return of the majority fork.  [auto_restart](#auto_restart) has the ability to automatically detect a node that is out of consensus and restart your node for you.
  
---

> #### Examples
- Help menu
```
sudo nodectl check_consensus help 
```
```
sudo nodectl -con help 
```
- Check if the Hypergraph profile `dag-l0` is in consensus
```
sudo nodectl check_consensus -p dag-l0
```
Execute consensus check against node with profile name `dag-l0` and IP address `10.10.10.10`.
```
sudo nodectl check_consensus -p dag-l0 -s 10.10.10.10  
``` 
Execute consensus check against list of node ids with profile name `dag-l0` and file containing the nodeid list called `test.csv` located in the the '/tmp/' directory on the node.
```
sudo nodectl check_consensus -p dag-l0 --file /tmp/test.csv  
``` 
Execute consensus in brief format.
```
sudo nodectl check_consensus -p dag-l0 --brief  
```    
Execute consensus in brief format refreshing and checking again every `120` seconds.
```
sudo nodectl check_consensus -p dag-l0 --brief -w 120  
```      




### check_source_connection
---

The **`check_source_connection`** command takes a profile [parameter](#what-is-an-option-and-parameter).

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_source_connection  | -csc  | >v1.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question do we want to review. | **required** |
    
When executed the `check_source_connection` command will attempt to find a random node on the current known Hypergraph or metagraph cluster.
  
:::warning 
The random node **needs** to be joined into the **consensus of the cluster**, and **must** be on the cluster and in **`Ready`** state.

nodectl should take care of this for us.
:::

example output
```
States: Initial, ReadyToJoin, StartingSession, SessionStarted,                                         
        ReadyToDownload, WaitingForDownload, DownloadInProgress, Observing, 
        WaitingForReady, WaitingForObserving, Ready, Leaving, 
        Offline, ApiNotReady, SessionIgnored, SessionNotFound, 
          
Source: Server this node is joined to
        Edge: This node

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
| Full Connection | Both the source node picked by nodectl and the local **edge** node that executed the `check_source_connection` command can see each other **`True`** or cannot **`False`**. |
| Profile | The profile that this command was run against. |
| Source -> State | Can the **SOURCE** node see the edge node **`True `** or **`False`**. The source node's state is in **`Ready`** state. |
| Edge -> State | Can the **EDGE** node see itself **`True`** or **`False`**. The edge node's state is in **`Ready`** state. |  

> #### Examples
- Help screen
```
sudo nodectl check_source_connection help
```  
- Execute the check_source_connection command
```
sudo nodectl check_source_connection
```





### check_seedlist
---

The **`check_seedlist`** command takes one [parameter](#what-is-an-option-and-parameter).

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_seedlist  | -csl | >v2.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | related to the [profile](/validate/quick-start/prerequisites#-profile-table) to verify access permissions. | **required** |
| -id | `<node_id>` | nodeid of the node you would like to verify seed list participation (if not local to the node) | **optional** <br/> *version >`2.9.x`* | 

**`check_seedlist`** will pull your `nodeid` out of your p12 file and compare it to the seedlist downloaded from **Constellation Network's** authorized list.
  
:::note
This command is specific to current restrictions placed on the Hypergraph for controlled access prior to the **PRO Score** [proof of reputable observation] release.
:::

| Title | Description |
| -- | :-- |
| ip address | The `ip address` of the node in question |
| p12 filename | The name of the `p12` file on the local node |
| p12 location | The location of the `p12` file on the local node |
| node id | The `p12` public key ( *nodeid* ). |
| node id found on seed list | This will be a `True` or `False`.  In the event of a `False` please contact an administrator on the Constellation Network official Discord server. |
 
> #### Examples
- Help screen
```
sudo nodectl check_seedlist help
```  
- Execute the check_seedlist command
```
sudo nodectl check_seedlist
```





### check_seedlist_participation 
---

The **`check_seedlist_participation`** command does not take any [parameters](#what-is-an-option-and-parameter).

| Command | Shortcut | Version |
| :---: | :---: | :---: | >v2.7.x |
| check_seedlist_participation | -cslp  |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | related to the [profile](/validate/quick-start/prerequisites#-profile-table) to verify access permissions. | **required** | 
This command can be used to review seed list access-list participation for any/all given profile(s) in the configuration that has a seed-list setup.
       
> #### Examples
- Help screen
```
sudo nodectl check_seedlist_participation help
```  
- Execute the check_seedlist_participation command
```
sudo nodectl check_seedlist_participation -p <profile_name>
```  






### clean_snapshots
---
This command is has been removed from nodectl.





### check_tcp_ports
---

The **`check_tcp_ports`** command will execute a check on your node's external network interface card (NIC) checking for network activity from your node's API TCP ports.  

During troubleshooting this is a way to indicate if you have a possible firewall issue.

nodectl will:
- glean your public and peer-to-peer API ports off your configuration.
- sniff the NIC for a period of time and report the results.

<p style={{fontSize:'.8em'}}><b>sniff:</b> Passively watch traffic without interfering with or manipulating any UDP/TCP packets traversing the interface.</p>

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_minority_fork  | -cmf | >v2.15.1 |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -t | `<seconds>` | How long would you like to sniff each of the TCP ports found?  default **10** seconds. | **optional** |



### console
---

The **`console`** command does not take any parameters.

This is a special utility command that allows you to use a `menu driven` methodology towards issuing the most common commands on your node.  There are three (*opinionated*) menus of commands.

- **Main Menu**: Hold the most common commands.
- **General Menu**: Holds commands that are commonly useful.
- **Troubleshooting Menu**:  Holds common commands used for troubleshooting purposes.

Simply issue the `console` command, select the letter corresponding to the predefined commands, and that command will execute.  After completion, nodectl will terminate the process and return the Node Operator to the terminal prompt.  

:::note mobile
The [mobile](#mobile) command is synonymous with the `console` command; however, it will return to the main menu and allow the Node Operator to issue "the next" command, as needed, in an iterative fashion.
:::

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| console  | | >v2.15.0 |


### download_status
---

The **`download_status`** command is **experimental** and may not always be accurate.

It makes a best-effort attempt to review the node's logs in real time to estimate the progress of the DownloadInProgress state and how long it may take to complete.

When a node begins the process of joining the cluster for the configured profile(s), it undergoes a series of essential initialization tasks to ensure proper integration and functionality as a peer in the cluster.

After your node completes the initial phases of authentication and becomes a peer on the cluster, it must synchronize and gather knowledge of the existing blockchain before it can actively participate in consensus and earn rewards.

Constellation Network uses an incremental snapshot strategy to minimize the "cost" of downloading blockchain snapshots. When a new node joins the cluster, it undergoes an extended one-time process of learning the entire blockchain. For an existing node rejoining the cluster, the node calculates the differences between its previous state and the current blockchain state.

Following authentication, your node may temporarily enter the `WaitingForDownload` state, a relatively inactive phase where little to no progress occurs. Due to this, when you execute the `download_status` command, it monitors your node's status using a timer (as opposed to a progress indicator), continually checking until the node transitions to DownloadInProgress.

Once in the `DownloadInProgress` state, nodectl will actively monitor your node's activities, providing a progress indicator on the screen that estimates the completion percentage of this process.

- Part 1: 
When downloading snapshots, above the progress indicator, you'll see the snapshots being downloaded to your node, displayed by their corresponding ordinal number. This will be shown as a decreasing counter, indicating the progress of the downloads.

- Part 2: 
BlockAcceptanceManager: The progress indicator will be adjusted. You will see the "height" of the last snapshot block and the current "height" being reached. This will be displayed as an increasing counter, reflecting the ongoing progress.
  
To the right of the counters, you will see a differential counter to help ease the calculation of what is left to be processed from either part 1 or part 2.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| download_status | -ds | >v2.10.0 |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | monitor the cluster that relates to the requested [profile](/validate/quick-start/prerequisites#-profile-table). | **optional** |
| --estimate |  | This is a `develper_mode` option that will attempt to estimate how much time is left before the `DownloadInProgress` stage may complete. | **optional** |






### execute_starchiver
---

**[Starchive-Extractor](https://github.com/StardustCollective/Starchive-Extractor)** is a community created and supported tool.  

:::danger IMPORTANT
Constellation Network does not support this tool.
:::

This tool is highly useful and has been integrated into nodectl to assist with proper execution with a single command, without any extra steps. It can expedite your node’s ability to join the cluster, potentially reducing download times from days to just hours or less.

The **`execute_starchiver`** command takes several parameters.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| execute_starchiver | | >v2.13.0 |

When executed on a node via nodectl

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -d |  | Delete all snapshots before continuing. | **optional** |
| -o |  | Override any snapshots as necessary. | **optional** |
| --datetime | `<datetime_stamp>` | If you do **not** include a parameter after the `--datetime` option, Starchive-Extractor will automatically attempt to determine what date and time is best to begin the archival downloads.  **Omitting a `<datetime_stamp>` is recommended**. | **optional** |
| --restart |  | Once the Starchiver-Extractor is complete, automatically restart the node's profile. | **optional** |

> #### Examples
- Help screen
```
sudo nodectl execute_starchiver help
```
- Execute Starchiver-Extractor using the most recommended command options.
```
sudo nodectl execute_starchiver -p <profile_name> --datetime --restart
```










### execute_tests
---

The **`execute_tests`** command is designed to assist in testing the various commands available within nodectl during development. It can also be used to familiarize yourself with the different commands that nodectl offers.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| execute_tests | | >v2.14.0 |

This command will fetch the current user tests executable from the nodectl repository and begin the tests.

> #### Examples
- Execute the user test script.
```
sudo nodectl execute_tests
```





### find
---

The **`find`** command takes several parameters.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| find | | >v1.x.x |

This command will attempt to find the requested peer on the current connected Hypergraph or metagraph.

The find command offers insight into the 
- number of nodes on the cluster
- number of nodes in **`Observing`** state
- number of nodes in **`WaitingForObserving`** state
- number of nodes in **`DownloadInProgress`** state
- number of nodes in **`WaitingForReady`** state
- number of nodes in **`Ready`** state

It will show you the profile searched (required) and offer you confirmation that your node is seen on the cluster.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -s | `<source_node>` | Node on the cluster you want to use to lookup other nodes. | **optional** |
| -t | `<target_node>` | Node on the cluster (ip address, hostname, or nodeid) you want to look up on the cluster. | **optional** |

You may specify a **`source`** node that will be used as the reference point to lookup the **`target`** node (either your node *default* or a specified target) on the cluster and return a `True` or `False` depending on whether or not it is found.
  
You may use the **`self`** keyword for either the `source` ( `-s` ) or `target` ( `-t` ) [parameters](#what-is-an-option-and-parameter).

:::danger Note
Choosing a **source node** that is **NOT** on the network may result in an error or false negative.
:::

> #### Examples
- Help screen
```
sudo nodectl find help
```
- Check if your node is listed/seen on the cluster using a random source node that is already found on the cluster.
```
sudo nodectl find -p <profile_name>
```
- Check if your node is listed/seen on the cluster using a specific source node.
```
sudo nodectl find -p <profile_name> -s <source_ip_host>
```
- Check if your node is listed/seen on the cluster using a specific source node and a specific target node (other then your own.
```
sudo nodectl find -p <profile_name> -s <source_ip_host> -t <target_ip_host>
```

#### other `find` examples

If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by another random node on the cluster we are connected to identified by the profile `dag-l0`.
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
If our node is `10.1.1.1` check if `10.1.1.1` is listed/seen by a node identified by the `-s` option (`10.2.2.2`) on the cluster we are connected to.
```
sudo nodectl find -p dag-l0 -s 10.2.2.2
```
or
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t 10.1.1.1
```
  
#### Examples using `self` keyword
```
sudo nodectl find -p dag-l0 -s self -t 10.2.2.2
```
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t self
```
In this example we are asking `10.2.2.2` (our source) if it is able to identify the target `10.1.1.2` on the network cluster.
```
sudo nodectl find -p dag-l0 -s 10.2.2.2 -t 10.1.1.2
```





### health
---

The **`health`** command does not take any [parameters](#what-is-an-option-and-parameter).

It displays the basic health elements of your node.

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




### list
---

The **`list`** command does not take any [parameters](#what-is-an-option-and-parameter) and displays the details of the profiles found in the [**`cn-config.yaml`**](/validate/automated/nodectl-config) file.  You can update the **`cn-config.yaml`** file with the [configure command](#configure).

| Title | Description | 
| ---: | :--- |
| Profile Name | Name of the profile on display as defined by the **`cn-config.yaml`**. |
| Profile Description | Node Operator defined description of the profile. |
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



### market
---

| Command | Alias |
| :---: | :---: | 
| market | markets |

The **`market`** command does not take any [parameters](#what-is-an-option-and-parameter). 

Performs a quick lookup for crypto markets via CoinGecko's public API.
  
The command will list the Top 10 Crypto markets at the current moment in time. In the event that Constellation Network is not in the top ten, it will list it's current position in relation to the rest of the known markets.
  
:::warning
This command is for recreation purposes **only**.  

Constellation Network is not a financial advisor. Information is sourced from CoinGecko and does not represent the opinions or financial advice of Constellation Network.
:::

| Title | Description | 
| ---: | :--- |
| Rank | Ranking 1 Best, > x+1 Worst |
| Name | Token name |
| Symbol | Token symbol |
| Price| Current price at time of execution. | 
| Market Cap | Market Capitalization |
| Total Supply | Total supply of tokens |
| ATH | **A**ll **T**ime **H**igh price of the token |

> #### Examples
- Help screen
```
sudo nodectl market help
```  
- Execute the market command
```
sudo nodectl market
```


### mobile
---

The **`mobile`** command does not take any parameters.

This is a special utility command that allows you to use `menu driven` methodology towards issuing the most common commands on your node.  There are three (*opinionated*) menus of commands.

- **Main Menu**: Most common commands.
- **General Menu**: Commands that are commonly useful.
- **Troubleshooting Menu**:  Common commands used for troubleshooting purposes.

Simply issue the `mobile` command, select the letter corresponding to the predefined commands, and that command will execute.  After completion, nodectl will return the Node Operator to the main menu.  

:::note console
The [console](#console) command is synonymous with the `mobile` command; however, the `console` command will terminate nodectl upon completion and return the Node Operator to the terminal prompt.
:::

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| mobile | | >v2.15.0 |




### node_last_snapshot
---
The **`node_last_snapshot`** command takes a single [option](#what-is-an-option-and-parameter).

This command reviews the Tessellation `app.log` to find the last instance of a downloaded snapshot for the specified `<profile_name>`.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
|  -p | `<profile_name>` | The [profile](/validate/quick-start/prerequisites#-profile-table) name to review in order to locate the latest downloaded snapshot.| **required** |

> #### Examples
- Help screen
```
sudo nodectl node_last_snapshot -p dag-l0 help  
```
- Review snapshots for profile named `dag-l0`
```  
sudo nodectl node_last_snapshot -p dag-l0
```






### peers
---

The **`peers`** command will attempt to list all the peers found on the cluster; as well as, list their IP addresses for review.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | review the cluster that relates to the requested [profile](/validate/quick-start/prerequisites#-profile-table). | **required** |
| -t | `<target_node>` | Node on the cluster (ip or hostname) that you would like to use as your target (The node to use as reference.) for finding peers. | **optional** |
| --state | `<dip, ob, wfd, wfr, wfo, wfd>` | filter the peers output to only nodes that are in the requested cluster state: `dip`: DownloadInProgress, `ob`: Observing, `wfr`: WaitingForReady, `wfo`: WaitingForObserving, `wfd`: WaitingForDownload | **optional** |
| -c | None | count the peers on the network. | **optional** |
| -np | None | no [pagination](#what-is-pagination). | **optional** |
| --csv | None | create csv (comma separated values) output file instead of print out to the screen. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
| --basic | None | show only the ip address and public port. | **optional** |
| --extended | None | show full nodeid and dag address. | **optional** |
  
Normal output from the peers command will show all the peers seen on a given metagraph or the Hypergraph (profile dependent) this will include:
- node ip with public port 
  - `10.10.10.10:1000` = `10.10.10.10` with public TCP port of `1000`
- nodeid (shortened to first 8 hex values, `....`, last 8 hex values)
   - `abcd1234....efgh4567`
- DAG wallet (shortened)
   - `DAG12345...78910111`
   
You can utilize the **`--basic`** [option](#what-is-an-option-and-parameter) to force nodectl to only show the `PEER IP:TCP PORT` column.
    
You can utilize the **`--extended`** [option](#what-is-an-option-and-parameter) to force nodectl to only show all fields in long format.

If you do not use the `--basic` or `--extended` [options](#what-is-an-option-and-parameter), the output will be in shorten form for all elements (ip:port, dag address, nodeid).

#### Dictionary
| abbrv | Description |
| :--:  | :-- |
| *  | Indicates the ip found was either the `edge` and `source` ip as indicated by the `-t` option or the node that was randomly selected when the command was executed. |
| i  | Initial State |
| rtj | ReadyToJoin State |
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
- Show YOUR nodes's peers
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



### price
---

| Command | Alias |
| :---: | :---: | 
| price  | prices |

The **`price`** command does not take any [parameters](#what-is-an-option-and-parameter). 

This command performs a quick lookup for crypto prices via **CoinGecko's** public API.  

:::warning
This command is for recreation purposes **only**.  

Constellation Network is not a financial advisor. Information is sourced from CoinGecko and does not represent the opinions or financial advice of Constellation Network.
:::

| Title | Description | Title | Description | 
| ---: | :--- |  ---: | :--- |
| $DAG | Constellation Network | $LTX | Lattice Exchange |
| $DOR | Dor Technologies | $BTC | Bitcoin |
| $ETH | Ethereum | $QNT | Quant Network | 


> #### Examples
- Help screen
```
sudo nodectl price help
```  
- Execute the price command
```
sudo nodectl price
```




### refresh_binaries 
---

The **`refresh_binaries`** command does not take any [parameters](#what-is-an-option-and-parameter).
  
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_source_connection  | -rtb  | >v1.x.x

This command will download and overwrite the existing Tessellation binaries files that are required to run your node.  The result of this command will be to download the binaries from the latest release and is independent of a system upgrade.
  
This command can be used to refresh your binaries in the event that you have a corrupted or missing binary files.
  
This command should be accompanied by the restart command in order to allow your node to utilize the new binary files.
  
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



### quick_status
---

The **`quick_status`** command takes a single **optional** [parameter](#what-is-an-option-and-parameter).

**quick_status** will review the current status of your node and offer a single output of the found **state** of your node's known clusters, as quickly as possible.

If the `-p` option is used with the `<profile_name>`, only that profile's status will appear.  If the `quick_status` command is called without the `-p` [option](#what-is-an-option-and-parameter), all profiles will be shown.

The difference between `quick_status` and [status](#status) are two-fold:
1. `quick_status` will only show the state of the node's known active profile(s)
2. `quick_status` will review the state of your node's known active profile(s) via the local API on the node.  This should be understood and used with caution, as if your node is in `Ready` state but not on the proper cluster, you may receive a false positive.  The [status](#status) command; although more time costly (*expensive*), will offer a better outlook on your node by providing metics such as `sessions`. 
  
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| quick_status  |  -qs  | >2.9.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | supply [profile](/validate/quick-start/prerequisites#-profile-table) name [parameter](#what-is-an-option-and-parameter) to show quick_status. | **optional** |
| -w | `<seconds>` | watch command. will continuously check the status of your node until <kbd>q</kbd> is pressed.  *Note*: You should **not** use the <kbd>ctrl</kbd>-<kbd>c</kbd> to exit as it may cause your keyboard to stop echoing output to your terminal.  If this does happen, you can simply exit the terminal session and log back in to correct the display issues. | **optional** |

> #### Examples
- Help screen
```
sudo nodectl quick_status help  
```
- Show all profiles
```
sudo nodectl quick_status
```
- Show status of profile named `dag-l0`
```  
sudo nodectl quick_status -p dag-l0
```



### sec
---

The **`sec`** command does not take any [parameters](#what-is-an-option-and-parameter).

sec = security 

It displays the basic security elements of your node.  It displays parsed elements from the `auth.log` file on your Debian operating system.
  
Following the table formatted output, nodectl will display a list of `date` -> `ip address` of external access requests against your node.

:::note 
The results will be based off the current and last "rolled" auth.log file.

This nodectl feature is currently not related to the Tessellation processes on a node.  It is reviewing distribution level `auth` files.
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
sudo nodectl sec help
```  
- Execute the sec command
```
sudo nodectl sec
```

### show_cpu_memory
---

The **`show_cpu_memory`** command does not take any parameters.
  
nodectl will assess the CPU and memory to determine the percentage of usage detected.

To provide more reliable results, nodectl will perform 10 iterations of checking CPU and memory usage before averaging the results and displaying them.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_cpu_memory  |  -scm  | >v2.13.x |

| Output Header |  Description | 
| :---: | :--- |
| CURRENT CPU | The averaged results of all iterations. |
| CURRENT MEMORY | The averaged results of all iterations. |
| CPU | Is there a `PROBLEM` with the CPU utilization or is the utilization `OK` |
| MEMORY | Is there a `PROBLEM` with the memory utilization or is the utilization `OK` |
| THRESHOLD | The current percentage that may be utilized on the system before changing the value of the `CPU` or `MEMORY` header from `OK` to `PROBLEM`. |
| Individual Iterations Results | Static values found before averaging the results |
        
> #### Examples
- Help screen
```
sudo nodectl show_cpu_memory help
sudo nodectl -scm help
```
- Execute the `show_cpu_memory` command.
```
sudo nodectl show_cpu_memory
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

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_current_rewards  |  -scr  | >v2.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | review the cluster related to the [profile](/validate/quick-start/prerequisites#-profile-table) name in question. | **required** |
| -w | `<dag_wallet_address>` | DAG wallet on the cluster.  Use this option if you are interested in an alternative node that is not the local node. | **optional** |
| -s | `<snapshot_history_size>` | **default**: 50, The amount of snapshots to review. | **optional** |
| -np | None | no [pagination](#what-is-pagination). | **optional** |
| --csv | None | create csv (comma separated values) output file instead of printing output to the screen. | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
  
The `--output` [option](#what-is-an-option-and-parameter) can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#configure) command. 

[`sudo nodectl configure`](#configure)
                                              
If a wallet address is not specified the first known wallet address obtained from the configuration will be used.  If a **-p** `<profile>` is specified, the defined profile wallet address will be used for the lookup against the profile specified.
  
If a **-s** `<snapshot_history_size>` is specified:
- The history size entered will be used.  
- Must be between `10` and `375` snapshots. 
- The default value is `50`.
  
:::note 
Currently this command only searches on the **MainNet Layer0 global Hypergraph** network.
::: 

If the **-w** `<dag_wallet_address>` is used, the **-p** `<profile_name>` will be ignored unless the profile fails to be present on the node (exist in the configuration).
        
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


### show_node_proofs 
---

The `show_node_proofs` command will display the current known snapshot proofs that this node is working on.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_node_proofs  |  -snp | >v2.10.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you attempting to display the current node proofs from. | **required** |
| -ni | none | By default, the `dag` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** | 
| --ni | none | By default, the `dag` command will [paginate](#what-is-pagination) the output, the `--np` flag will force `no pagination` during command output printing. | **optional** | 

The command will display the `SnapShot Transaction ID` and `SnapShot Transaction Signature` for all proofs in the current consensus round that the node is participating in.

> #### Examples
- Help screen
```
sudo nodectl show_node_proofs help
sudo nodectl -snp help
```  
- Execute `show_node_proofs`.
```
sudo nodectl show_node_proofs -p <profile_name>  
sudo nodectl -snp -p <profile_name>  
```
- Execute `show_node_proofs` without pagination.
```
sudo nodectl show_node_proofs -p <profile_name> --ni 
sudo nodectl -snp -p <profile_name> --ni 
```





### show_node_states 
---

The **`show_node_states`** command does not take any [parameters](#what-is-an-option-and-parameter).

This command displays the list of the known node States that you may find on the Cluster or that nodectl defines when not on the cluster.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_node_states  |  -sns  | >2.x.x |

##### nodectl only states

| State | Abv | Description |
| -- | :--: | :-- |
| ApiNotReady | ar | shown if nodectl can not reach the node's internal API server. |
| ApiNotResponding | anr | show if the node running Tessellation is unable to send or receive API requests. |
| SessionNotFound | snf | shown if nodectl can not read the node's session via the internal API server. | 
| SessionIgnored | si | shown if nodectl is not online and there is not a session to display. | 
  
> #### Examples
- Help screen
```
sudo nodectl show_node_states help
```
- Execute the show_node_states command
```
sudo nodectl show_node_states
```  
- Execute using shortcut [option](#what-is-an-option-and-parameter) command
```
sudo nodectl -sns
```







### status 
---

The **`status`** command takes a single **optional** [parameter](#what-is-an-option-and-parameter).

**Status** will review the current status of your node.

If the `-p` option is used with the `<profile_name>`, only that profile's status will appear.  If the `status` command is called without the `-p` [option](#what-is-an-option-and-parameter), all profiles will be shown.
  
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| status  |  -s  | >1.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | supply [profile](/validate/quick-start/prerequisites#-profile-table) name [parameter](#what-is-an-option-and-parameter) to show status. | **optional** |
| -w | `<seconds>` | watch command. will continuously check the status of your node until <kbd>q</kbd> is pressed.  *Note*: You should **not** use the <kbd>ctrl</kbd>-<kbd>c</kbd> to exit as it may cause your keyboard to stop echoing output to your terminal.  If this does happen, you can simply exit the terminal session and log back in to correct the display issues. Available in version >v2.9.0 | **optional** |

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
| Join State | The state that the node is seen by the cluster when online. |
| Profile | Which profile is being reported on. |
| Public API TCP | The TCP port configured that is open to the public for API calls. |
| P2P API TCP | The TCP port configured that is used for gossip peer to peer API communications. |
| CLI API TCP | The TCP port configured that is used for internal API calls only. |
| Current Session | What is the **session** number being reported on the cluster. |
| Found Session | What is the **session** number seen by the node.  If it does not match the Current Session, the node is not properly connected to the actual cluster. |
| On Network | Shows `True` or `False` if the node is found on the cluster.







### sync_node_time 
---

The **`sync_node_time`** command will update the Node's underlining Linux Debian distribution's datetime clock.  It will use the NTP service installed during nodectl installation to force an update of the Node's clock.

This command displays the list of the known node States that you may find on the Cluster or that nodectl defines when not on the cluster.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| sync_node_time  |  | >2.14.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -v | none | Sync the node's time in verbose mode. | **optional** |

  
> #### Examples
- Help screen
```
sudo nodectl sync_node_time help
```
- Execute the sync_node_time command
```
sudo nodectl sync_node_time
```  
- Execute using verbose mode
```
sudo nodectl sync_node_time -v
```










### update_seedlist 
---

The **`update_seedlist`** command does not take any [parameters](#what-is-an-option-and-parameter).
  
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| update_seedlist  | -usl | v2.x.x |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the update seed list. | **required** |


The **`update_seedlist`** command retrieves the latest seed list from the Constellation Network repositories. This command can be used if your node is unable to authenticate and, therefore, cannot connect to the network.

Using the [`check_seedlist`](#check_seedlist) command, a node Operator can confirm if the node is seen on the access lists; if not, issue the `update_seedlist` command to attempt to correct the issue.
  
:::caution 
If you update the seed list and still receive a `False`, you may need to contact a Constellation Network support Administrator for further help. This can be done by accessing the Constellation Network official Discord server.
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










### update_version_object 
---
Due to long execution times and the importance of the node recognizing the versions of Tessellation and nodectl, the node maintains a version object file in the background, running as a service and updating every 2 minutes.
 
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| update_version_object  |  | v2.x.x |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -v |  |   This option can be used to verify that the contents of the versioning object is valid and contains the proper key pair values.. | **optional** |
| --force |  | The version object will not be updated if it has already been updated within the last 2 minutes from when the command was issued.  If the `--force` option is utilized, the version object file will be forced to update regardless of timing. | **optional** |
| --print |  | This option will print the contents of the version object to the console. | **optional** |

The **`update_seedlist`** command retrieves the latest seed list from the Constellation Network repositories. This command can be used if your node is unable to authenticate and, therefore, cannot connect to the network.

Using the [`check_seedlist`](#check_seedlist) command, a node Operator can confirm if the node is seen on the access lists; if not, issue the `update_seedlist` command to attempt to correct the issue.
  
:::caution 
If you update the seed list and still receive a `False`, you may need to contact a Constellation Network support Administrator for further help. This can be done by accessing the Constellation Network official Discord server.
:::    

*This command is specific to current restrictions placed on the Hypergraph for controlled access prior to the PRO Score [proof of reputable observation] release.*
        
> #### Examples
- Help screen
```
sudo nodectl update_version_oject help
```  
- Force an update to the versioning object.
```
sudo nodectl update_version_object --force  
```  
- Verify the versioning object.
```
sudo nodectl update_version_object -v  
```
- Print the versioning object.
```
sudo nodectl update_version_object --print
```



### verify_nodectl
---

The **`verify_nodectl`** command is a *special* command that attempts to authenticate the nodectl binary with a signature file located on the official GitHub repository of nodectl.

This command will fetch the public key, digital signature file, and digital signature hash from the official Github repository.  It will then use those files to hash the `nodectl` binary and produce a `binary hash` file to compare with that found on the Github respository.

If the hashes match, we are rest assured our nodectl is authentic.

:::caution
A man-in-the-middle (MITM) attack occurs when a hacker secretly intercepts communication between two parties or systems. The hacker, acting as a "middleman," can intercept the information and potentially impersonate files from nodectl's GitHub repository.

To avoid a MITM attack, it is crucial to manually access the GitHub repository and review the public key and digital signature files for verification.
:::

| HEADERS | Description |
| :---: | :----- |
| PULBIC KEY | The publicly available key used to decrypt the signature file that was created by a `private key`.  The private key is owned by Constellation Network and not available or accessible. |
| BINARY HASH | The hash created by using the public key to hash the `nodectl` binary. |
| DIGITAL SIGNATURE | A copy of the hash value that should be identical to the BINARY HASH if the nodectl binary is valid. |
| VERIFICATION RESULT | This will either be a `green` success or `red` failure. |

> #### Examples
- Verify the nodectl binary
```
sudo nodectl verify_nodectl
```






## ◽ Distribution Operations




### change_ssh_port
---

The **`change_ssh_port`** command is a *special* command that works on the Debian distribution level. For added security, it is **recommended** that your run your **SSH** remote access through a non-commonly known port number.  In the case of the **ssh** protocol, a port that is different from port `22`.

You should use an unused port between `1024` and `65535`.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| --port | `<port number>` | Which port number would you like to change your SSH port for use? | **required** |

> #### Examples
- Help file
```
sudo nodectl change_ssh_port help
```
- Change SSH TCP port to port `4242`
```
sudo nodectl change_ssh_port --port 4242
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
It is **recommended** to have the **root** user's remote access (inbound/ingress) **disabled**.  The only way the root user should be accessed is through the **Node Administrator's** user account.
:::

This command can be used to reverse this security setting configured via nodectl's installation process.

> #### Example
```
sudo nodectl enable_root_ssh
```



### reboot
---

The **`reboot`** command does not take any [parameters](#what-is-an-option-and-parameter) and offers the Node Operator the ability to reboot their physical or VPS (Virtual Private Server in the cloud) via a warm boot.
  
:::success Recommended
For node Operation this command is **preferred/recommended** over normal operating system reboot command. 
:::

When issued, the nodectl `reboot` command will gracefully leave the profiles defined in the nodectl configuration file before rebooting the node.
  
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






### upgrade_vps
---

The `upgrade_vps` command provides a more user-friendly, non-technical way to ensure your VPS (or bare metal server) is up-to-date with the latest packages, utilities, security patches, and core distribution elements (such as kernels, services, etc.).

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| upgrade_vps  |  | v2.14.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| --ni |  | Issue an upgrade in non-interactive mode. nodectl will not ask any questions and will automatically select the default recommended options. *This does not apply to options marked in purple boxes*. | **optional** |
| --reboot|  | Force nodectl to reboot the node (if required) without interaction from the Node Operator. | **optional** |

The feature will offer you instructions on how to handle any interactive requirements, including handling `purple boxes`.

:::caution
During an upgrade, the Debian distribution may require the Node Operator to handle certain service configurations interactively.

If this occurs, a purple box will appear with options and default settings already selected for you. Since we do not modify any default Debian distribution settings to run our node, you can accept the defaults. To do this, use the <kbd>Tab</kbd> key to navigate to the `OK` or `Confirm` boxes and then press <kbd>Enter</kbd> to accept.
:::

This feature updates the package lists to ensure the VPS's Linux distribution is aware of the latest available packages, followed by upgrading and installing any necessary elements.

The `apt update` and `apt upgrade` commands will be executed through nodectl, eliminating the need for the user to run them directly from the Linux distribution.
   
> #### Examples
- Help screen
```
sudo nodectl upgrade_vps help
```  
- Execute an update and upgrade.
```
sudo nodectl upgrade_vps
```
- Execute an update and upgrade in non-interactive mode.
```
sudo nodectl upgrade_vps --ni
```
- Execute an update and upgrade with a reboot.
```
sudo nodectl upgrade_vps --reboot
```





### uptime
---

The `uptime` command provides the amount of time the cluster, the Node itself, and the system supporting the node has been up and running.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| uptime  |  | v2.14.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | The [profile](/validate/quick-start/prerequisites#-profile-table) to review the `uptime` parameters from. | **optional** |

| HEADERS | Description |
| :---: | :----- |
| Cluster | How long the cluster the profile(s) are connected to has been up. |
| Node | How long has the node been on the cluster for the given profile(s). |
| System | How long has the VPS been up and running. |
   
> #### Examples
- Help screen
```
sudo nodectl uptime help
```  
- Execute an uptime request
```
sudo nodectl uptime
```
- Execute an uptime request against the profile named `dag-l0`.
```
sudo nodectl uptime -p dag-l0
```



### whoami
---

The **`whoami`** command displays the external ip address of your node. 

Optionally, you can use the optional `-id` option to map a `nodeid` to an `ip address` on a cluster.
  
The `external IP` of your node is the address that allows your node to communicate with the rest of the systems on the Internet.  

This is the address your node will use to communicate with the other decentralized nodes that make up the Hypergraph and/or metagraphs. Your node will attempt to establish communications with other nodes through peer-to-peer (p2p) connections and public API requests.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | In order to use the **`-id`** option, nodectl will need to know which [profile](/validate/quick-start/prerequisites#-profile-table) to review the `nodeid` from. | **optional** |
| -id | `<full_node_id>` | p12 public key `nodeid` to lookup. | **optional** |

:::warning 
The -id [option](#what-is-an-option-and-parameter) followed by the full nodeid requested, will lookup the node id and return its IP address.  This command will require the `-p` with the profile name of the network you are searching.
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
- Show ip address of a node by `nodeid` from a cluster via a profile this node is connected to
```
sudo nodectl whoami -p <profile> -id <node_id>
```





## ◽ p12 Operations

### create_p12
---

The **`create_p12`**  command will create a p12 file and place it on the system in a location of the Operator's choosing.
  
If a location is not supplied, the global p12 configured location will be used by default.
  
If a username is not supplied, the global p12 username will be used by default.
  
| Command | Shortcut | Version |
| :---: | :---: | :---: |
| create_p12  |  | >v2.12.0 |

| [switch](#what-is-a-switch-and-parameter) | parameters | Description | Is [Switch](#what-is-a-switch-and-parameter) Required or Optional |
| :------------: | :---: | :--- | :----: |
| --file | `<string>` | What would you like to call the new p12 keystore file? | **optional** |
| --location | `<file_path>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the update seed list. | **optional** |

> #### Examples
show  help screen
```
sudo nodectl create_p12 help
```
Build a new p12 file using the global configured Node Administrator username:
```
sudo nodectl create_p12  
```
Build a new p12 file using a keystore named `test.p12` and the file location `/tmp/my_new_p12_files`.
```
sudo nodectl create_p12 --file test.p12 --location /tmp/my_new_p12_files/  
```






### dag 
---

The **`dag`** command will retrieve your node's wallet information for your local node.

You can specify another node by supplying the `-w` (wallet) option followed by the `dag_wallet` of the node on the cluster that is targeted.

Following general output details about your wallet, nodectl will query the DAG explorer API and retrieve details of the last 350 snapshot entries.  This level of detail can be excluded by using the `-b` option.  

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the wallet information from. | **required** |
| -w | `<dag_wallet>` | retrieve remote by target wallet address. | **optional** |
| --balance | None | show balance of DAG wallet only | **optional** |
| -b | None | if the `brief` [option](#what-is-an-option-and-parameter) is included a detailed view of the wallet transactions will be excluded from the command's output. | **optional** |
| -np | None | By default, the `dag` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |
| --csv | None | Export the file to default dated file name to the default uploads (see [configuration file](#configure)) or based on the `--output` [option](#what-is-an-option-and-parameter) (below). | **optional** |
| --output | `<file_name>` | **requires** `--csv` --> this can only be a filename. If you would like to have your output saved to an alternate location, you can update the configuration file's `upload` location, via the [configure command](#configure). | **optional** |
  
The `--output` [option](#what-is-an-option-and-parameter) can only be a filename.  If you would like to have your output saved to an alternate location, you can update the configuration file via the [configure](#configure) command. 

| Output Header | Description |
| ---: | :------ |
| IP ADDRESS    | External IP address of the node |
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
- Retrieve dag wallet information of a node on the cluster with the DAG wallet address of `DAG0911111111111111111111111111111111111` 
- (*fake address for demonstration purposes only*).
```  
sudo nodectl dag -w DAG0911111111111111111111111111111111111 -p dag-l0
```
- Retrieve dag wallet information of a node on the cluster without snapshot details.
```  
sudo nodectl dag -p dag-l0 -b
```
- Retrieve the node's dag wallet without [pagination](#what-is-pagination).
```  
sudo nodectl dag -p dag-l0 -np   
```



### export_private_key
---

The **`export_private_key`** command does not take any [parameters](#what-is-an-option-and-parameter).
  
`export_private_key` will expose your private key from your p12 file and print it to the screen.
  
:::danger
Do not share this private key with anyone that you do not completely trust with your financial assets.
:::

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the private key from. | **required** |


nodectl is designed to work with `p12` private key files that support Constellation Network `v2` keys.   If you are running an older node, please refer to the [v1 to v2 migration](/validate/resources/p12-v1-to-v2-migrate) document.

Import the private key produced by this command into your **StarGazer wallet** (or other) in order to control your node's wallet.
        
> #### Examples
- Help screen
```
sudo nodectl export_private_key help
```  
- Expose your private key
```
sudo nodectl export_private_key -p <profile_name>
```





### id 
---

The **`id`** command is an alias to the [nodeid](#nodeid) command.

| Command | Alias |
| :----: | :---: |
| id |  nodeid  |





### nodeid 
---

The **`nodeid`** command will retrieve your node's public key (nodeid) for either your local node or another node by supplying the `-t` (target) [option](#what-is-an-option-and-parameter) followed by the `ip_address` of the node on the cluster that is targeted.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| nodeid  |  id  | >v2.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the nodeid from. | **required** |
| -t | `<ip_address` | retrieve remote by target IP address. | **optional** |
| -l |  | Display the nodeid in long format. | **optional** |
> #### Examples
- Help Screen
```
sudo nodectl nodeid help  
```
- Retrieve local nodeid
```  
sudo nodectl nodeid
```
- Retrieve nodeid of a node on the cluster with the IP address of `113.113.113.113`.
```  
sudo nodectl nodeid -t 113.113.113.113
```







### nodeid2dag
---

The **`nodeid2dag`** command will take in a required public node id or public key ( `128 byte` hexadecimal string ) and converts it into its associated Constellation Network DAG wallet address.
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| None | `<node_id>` | 128 byte node id (public key) to derive DAG wallet from. | **required** |

:::warning
The `<node_id>` is required and does not have a related [option](#what-is-an-option-and-parameter).
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

The **`passwd12`** command does not take any [parameters](#what-is-an-option-and-parameter).

This command offers the Node Operator the ability to change their p12 keystore file's passphrase through an interactive experience.
  
:::warning
**`passwd12`** will not update the [cn-config.yaml](/validate/automated/nodectl-config) file.

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




### show_p12_details  
---

The **`show_p12_details`** command will show the nodes p12 keystore details.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_p12_details  |  -spd  | >v2.12.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you seeking the private keystore details from. | **required** |
  
:::caution NOTE
This command will not show the [private key](#export_private_key) of our p12's primary Constellation Network wallet.
:::

> #### Examples
- Help File
```
sudo nodectl show_p12_details help
```
- View p12 details for the profile `dag-l0`.
```
sudo nodectl show_p12_details -p dag-l0
sudo nodectl -spd -p dag-l0
```



## ◽ Configuration




### configure
---

The **`configure`** command will attempt to guide the Node Operator through the **creating** or **editing** the [**`cn-config.yaml`**](/validate/automated/nodectl-config) file.
  
The [`cn-config.yaml`](/validate/automated/nodectl-config) file is an extremely important file that nodectl uses to determine how it should control and configure your Constellation Network Validator Node.

The `configure` command will offer a relatively detailed explanation of all configuration options, unless the `-a` (*advanced*) option is used.  

*nodectl will confirm if you want to enter advanced mode if not specified.*

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -a | None | enable advanced mode. | **optional** |
| -e | None | enter directly into **edit** configuration mode for existing configurations. | **optional** |
| -ep | None | enter directly into **edit profile** configuration mode for existing configurations. >v2.9.0 | **optional** |
| -cb | None | automatically c)onfirm that we understand the location of the b)ackup and that it was backed up. *nodectl wants to make sure you know that there is a copy of your configuration on the node for security purposes.* | **optional** |
| -n | None | enter directly into **new** configuration mode. | **optional** |
  
In new configuration mode, nodectl will offer you two (2) options

1. Predefined Profile settings
2. Manual Configuration
    
In edit configuration mode, nodectl will offer you several options
1. Edit Profiles
2. Edit Global Settings
    
See the [configuration guide document](/validate/automated/nodectl-config) for more details on this command.

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
- Enter configurator directly to edit config options in detailed mode while confirming the backup location at the same time.
```
sudo nodectl configure -a -e -cb
```  

### install
---

The **`install`** command will build a new node for you from a blank fresh new [VPS](/validate/setup-guides/).
  
| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :--------------------------------------: | :--: | :--- | :----: |
| --normal | None | If this option is supplied, during the interactive installation process, nodectl will skip the request to utilize the `--quick-install` option and confirm a normal installation only. | **optional** |
| --quick-install | None | If this option is supplied, during the interactive installation process, nodectl will skip the request to utilize the `--normal` option and confirm a quick-install installation only.  | **optional** |
| --cluster-config | `mainnet`, `integrationnet`, `testnet`, `dor-metagraph-mainnet` | Setup your new node to connect with one of the several pre-defined configurations. | **optional** |
| --confirm | None | Auto confirm default options. | **optional** |
| --override | None | Install nodectl over itself, do not remove existing files prior to installation. | **optional** |
| --username | string | Setup your new node with the supplied username verses the default username of `nodeadmin`. | **optional** |
| --user-password | string | Setup your new node with the following VPS username password. You will not be prompted for it during the installation. | **optional** |
| --p12-name | string | Setup your new node with the following p12 keystore name, verses the default p12 name of `nodeadmin.p12`. | **optional** |
| --p12-passphrase | string | Setup your new node with the following p12 keystore passphrase. You will not be prompted for it during the installation. | **optional** |
| --p12-alias | string | Setup your new node with the following p12 keystore alias, verses the default alias of `nodeadmin-alias`. | **optional** |
| --p12-destination-path | path-to-directory | Setup your new node to place the newly created p12 keystore in the fully qualified path location provided, verses the default location equal to `/home/<username>/tessellation/`.| **optional** |
| --p12-migration-path | path-to-directory-and-file | Setup your installation to **migrate** in an existing p12 keystore file. This should include the full path to the file and the file name | **optional** |

See the [installation guide document(s)](http://localhost:3000/validate/automated/install/nodectlInstallIntro) for more details on this command.

> #### Examples
- Default installation
```
sudo nodectl install  
```
- Default normal installation
```
sudo nodectl install --normal  
```
- Default quick installation
```
sudo nodectl install --quick-install
```
- Default installation supplying the user password and p12 passphrase on the command line.
```
sudo nodectl install --user bob --password mypassword
```  
- Default quick install installation supplying the user password and p12 passphrase on the command line.
```
sudo nodectl install --quick-install --user bob --password mypassword
``` 
- Default quick install installation supplying the user, user password, p12 name, p12 alias, and p12 passphrase on the command line.
```
sudo nodectl install --quick-install --user bob --password mypassword --p12-name myp12name.p12 --p12-passphrase myp12passphrase --p12-alias myp12aliasname
``` 
- Default quick install installation supplying the user, user password, **existing p12 for migration**, and p12 passphrase on the command line.
```
sudo nodectl install --quick-install --user bob --password mypassword  --p12-passphrase myp12passphrase --p12-alias myp12aliasname --p12-migration-path /home/ubuntu/myp12migrationfile.p12
```




### ipv6
---
The **`ipv6`** command handles enablement, disablement, and the ability to review the status of the IPv6 network configuration stack on the VPS that your node is running on.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| ipv6 |   | >v2.15.x |

There are three optional parameters; however, one of the three options is required.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :----: | :---: | :--- | :----: |
| status | none | Show the status of the IPv6 network stack on the VPS. | **required** |
| enable | none | Enable IPv6 on the VPS. | **required** |
| disable | none | Disable IPv6 on the VPS. | **required** |
| --ni | none | When used in conjunction with a required option, this will force the feature into `non-interactive` mode by-passing any questions and instead using the default options/answers | **optional** |

When the `enable` or `disable` options are used, the `GRUB` and `sysctl` IPv6 configuration files will be altered.

:::danger DANGER
This command will manipulate non-Tessellation Constellation Network files on your VPS.
:::

If the VPS was built without IPv6 during instantiation, this command will have no effect.

> #### Examples
- Help screen
```
sudo nodectl ipv6 help  
```
- View the status of the IPv6 stack on the VPS. 
```  
sudo nodectl ipv6 status
```
- Enable IPv6.
```  
sudo nodectl ipv6 enable
```
- Disable IPv6.
```  
sudo nodectl ipv6 disable
```



### restore_config
---
The **`restore_config`** command does not accept any options or parameters.

When executed, `restore_config` provides a list of previously backed-up configuration files, allowing you to select and restore the desired configuration.


:::caution
Please be diligent and exercise caution when restoring a configuration, as an invalid or incompatible configuration could corrupt your node or cause issues with nodectl's functionality.
:::

nodectl will display the contents of your backup directory, identify any configuration files, and provide a list of available configurations for you to choose from.

> #### Examples
- Help screen
```
sudo nodectl restore_config help  
```
- Stop profile named `dag-l0`
```  
sudo nodectl restore_config
```




### uninstall
---
The **`uninstall`** command does not accept any options or parameters.

When executed, `uninstall` will remove all elements required to make your VPS into a Constellation Network node.

You will be provided the option to retain your `p12` keystore file.  If this option is taken, the p12 keystore file(s) will be moved to a temporary directory for the Node Operator to use or backup as necessary, after the uninstallation is completed.

:::caution
This command will not remove non-Tessellation dependencies as they may be utilized by other programs or features on the VPS.  

If you would like to remove these dependencies they will have to be removed manually.
:::


> #### Examples
- Help screen
```
sudo nodectl uninstall help  
```
- uninstall the node.
```  
sudo nodectl uninstall
```



### upgrade  
---

The **`upgrade`** command is used to upgrade both Tessellation and nodectl backend files.

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -w | None | **watch** mode.  This creates an upgrade that is less verbose, and saves time by not forcing the Node Operator to wait for all peer to peer connections to be established, instead once the node reaches a `state` where it is able to participate on the network, nodectl will skip watching for the remaining peers to connect and simply and safely continue the upgrade process, therefore saving time. | **optional** |
| --pass | `<passphrase>` | If the Node Operator chose to `hide` their passphrase by excluding it from the [`configuration file`](/validate/automated/nodectl-config), you will need to supply it at the command line using this option. | **optional** |
| -ni | None | Non-Interactive. If you want to use the `upgrade` command with all the defaults chosen, nodectl will not ask any interactive questions. | **optional** |

:::note Just in Case
In the event of the `-ni` is used, if nodectl identifies anything unusual, it still may disengage non-interactive mode and ask any necessary questions, in an attempt to avoid unexpected errors.
:::

Please see the [upgrade nodectl](/validate/automated/nodectl-upgrade) documentation for a detailed explanation of the command.




### upgrade_nodectl  
---

The **`upgrade_nodectl`** command is a dedicated command used to upgrade the nodectl binary file.

Please see the [upgrade_nodectl](/validate/automated/nodectl-upgrade) documentation for a detailed explanation of the command.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| upgrade_nodectl  |  N/A  | >v2.7.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -v | &lt;version&gt; | statically set the version you would like to **upgrade** or **downgrade** to. | **optional** |

*If you attempt to downgrade nodectl to a version that is not backwards compatible, you may risk unexpected results.  Please see [upgrade_path](#upgrade_path) for more details on how to determine if a version is not backward compatible.*

> #### Examples
- Help file
```
sudo nodectl upgrade_nodectl help
```
- Upgrade nodectl
```
sudo nodectl upgrade_nodectl
```
- Upgrade nodectl to version `v2.15.2`
```
sudo nodectl upgrade_nodectl -v v2.15.2
```

### upgrade_path
---

The **`upgrade_path`** command does not take any [parameters](#what-is-an-option-and-parameter) and offers the Node Operator the ability to check their node's current nodectl version for upgrade path requirements.
  
If the node is not at the most current version of nodectl, this command will produce a warning. The warning will let the Node Administrator know what the next necessary upgrade version should be, and will show you upgrade path requirements.
   
See the [upgrade path](/validate/automated/nodectl-upgrade-path) document for more details.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| upgrade_path  |  -up  | >v2.7.x
  
> ##### Example Usage
- Help screen
```
sudo nodectl upgrade_path help
```  
- Execute the upgrade_path command
```
sudo nodectl upgrade_path
```




### validate_config
---

The **`validate_config`** command will attempt to review your [`cn-config.yaml`](/validate/automated/nodectl-config) file for errors that may cause **unexpected** results when attempting to run your node.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| validate_config  |  -val  | >v2.7.x |

In the event that nodectl finds discrepancies or errors in the **cn-config.yaml**, a table of errors and possible resolutions will be displayed as output.


### view_config
---

The **`view_config`** command will show a [paginated](#what-is-pagination) view of the current [`cn-config.yaml`](/validate/automated/nodectl-config) file.  

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| view_config  |  -vc    | >v2.7.x

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -np | None | By default, the `view_config` command will [paginate](#what-is-pagination) the output, the `-np` flag will force `no pagination` during command output printing. | **optional** |










## ◽ Troubleshooting



### check_versions 
---

With the **`check_versions`** command, nodectl will go out and review the latest versions of both Constellation Network Tessellation and nodectl. 

nodectl will review the current GitHub repo and compare it to the versions running on the node. 

It will report back `True` or `False` based on whether the versions match.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| check_versions  |  -cv   | >v2.x.x |

| Output Header | Description |
| ---: | :------ |
| Tess installed | What version of Tessellation was found on the node. |
| Tess latest | What version of Tessellation was found in the current repository. |
| Tess version match | Does the node match up to the repository? |
| nodectl installed  | What version of nodectl was found on the node. |
| nodectl latest | What version of nodectl was found in the current repository. |
| nodectl version match | Does the node match up to the repository? |

> #### Examples
- Help menu
```
sudo nodectl check_versions help
```
- Execute the check_versions command
```
sudo nodectl check_versions
```


### display_snapshot_chain
---

The **`display_snapshot_chain`** command is an advanced command that will review your node's snapshots and verify that every snapshot hash has an accompanying hard link to the ordinal that it is associated with.  If you have an invalid snapshot chain, your node will not function properly.  

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| display_snapshot_chain  |  | >v2.14.0

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | Identify the appropriate layer0 [profile](/validate/quick-start/prerequisites#-profile-table) to check against.  nodectl will offer a list of known profiles if not supplied. | **optional** |
| -y | | automatically confirm the request to check the snapshot chain | **optional** |



### logs 
---

The **`logs`** command will print out the contents of the logs that have been requested.

| Command | Alias |
| :---: | :---: | 
| logs  |  log |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | The name of the [profile](/validate/quick-start/prerequisites#-profile-table). This is important because (for example) the app.log shares the same log name for each profile.  The Node Operator will need to specify which profile to review. | **required** |
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
- Request to view the nodectl logs 
  - *The nodectl log is a command request that carries an exception.  This request to view the logs does not take the `-p <profile>` option.*

```
sudo nodectl logs -l nodectl
```




### prepare_file_download
---

This command instructs nodectl to prepare your p12 keystore or another file of your choosing to be downloaded directly by the Node Administrator’s non-root account. This is a useful command for backup procedures.

Your p12 file(s) or the specified file will be located, copied to the root (beginning) of the Node Administrator’s user directory, and have its permissions changed to allow retrieval directly from the Node Administrator’s account.

Nodes built with recommended security practices cannot retrieve a p12 file or other files created by nodectl using the non-root user. This command provides a solution to this restriction.

| Command |  Version |
| :---: |  :---: |
| prepare_file_download | >v2.14.x |

|  [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :------: | :------: | :------ | :------: |
| --type | p12  | This option will locate all `p12` files associated with your node.  If the optional `-p` parameter is included with the command, **only** the p12 associated with the profile requested will be moved and setup for access.  | **required** |
|   | file `<path/tofile>` | This option will locate the file on our node identified by the succeeding path, move the file, and setup access. | **required** |
| -p | `<profile_name>` | Used in conjunction with the `--type p12` option, this will allow you to retrieve the `p12` file associated specifically with the [profile](/validate/quick-start/prerequisites#-profile-table) requested.  | **optional** |
| --cleanup | file `<path/tofile>` | The option is recommended to be used after the file has been properly downloaded and can now be removed from the local system administrators account. If used with the `--type p12` this command does not need the `<path_to_file>` and will remove all `p12` files located in the root of the Node Administrator's home directory. | **optional** |

:::caution Recommended
**`--cleanup`**

It is highly recommended to use the `--cleanup <path_to_file>` command once you have completed downloading the requested file.

This is especially important when handling p12 keystore files, as they should be kept secure.

When `--cleanup` is used with `--type p12`, you do not need to specify the p12 file names; nodectl will automatically remove all p12 files from the local Administrator’s root directory.​
:::

> #### Examples
- Show the help screen
```
sudo nodectl prepare_file_download help
```
- Move all known p12 files to the root of the Node Administrator's user and update permissions for access.
```
sudo nodectl prepare_file_download --type p12
```
- Move only p12 files associated with the profile `dag-l0` to the root of the Node Administrator's user and update permissions for access.
```
sudo nodectl prepare_file_download --type p12 -p dag-l0
```
- Migrate a file called `mylogs.tar.gz` that is located in the `/var/tessellation/uploads` for download from the root of the Node Administrator's user directory.
```
sudo nodectl prepare_file_download --type file /var/tessellation/uploads/mylogs.tar.gz
```
- Remove the p12 files associated with all profiles including global.
```
sudo nodectl prepare_file_download --type p12 --cleanup
```
- Remove the file named `mylogs.tar.gz` that is located in the Node Administrator's home username's directory.
```
sudo nodectl prepare_file_download --type file mylogs.tar.gz --cleanup
```



### send_logs 
---

The **`send_logs`** command is a tool to allow uploading of logs to help *debugging* analysis.  It may be used to help accumulate log files to send to Administrators, Developers or System Engineering to dissect; to improve the code base.

The command will upload to a file share service with an expiry date for download.
  
During the execution you will be offered a menu to upload:
- current logs  
  - singular - will offer a choice of `nodectl` or `app` log.
  - all - will offer ability to accumulate and upload all logs including rolling and archived logs.
- backup logs  
- specific date logs  
- date range logs  
- archived logs  
    
Once you follow the prompts a tarball gzip file will appear in the uploads directory and the system will offer you the ability to upload the results to the a public (non Constellation Network supported) file transfer service.

You may find a usage guide [here](/validate/resources/send-logs).

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| send_logs  |  -sl | >v2.x.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you attempting to glean logs from. | **optional** |
  
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


### show_dip_error 
---

The `show_dip_error` command is designed to help identify the root cause error that was logged prior to the node being placed in a state where it is stuck in `WaitingForDownload`.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_dip_error  |  -sde | >v2.10.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | which [profile](/validate/quick-start/prerequisites#-profile-table) are you attempting to glean logs from. | **required** |
  
> #### Examples
- Help screen
```
sudo nodectl show_dip_error help
sudo nodectl -sde help
```  
- Execute `show_dip_error`.
```
sudo nodectl show_dip_error -p <profile_name>  
sudo nodectl -sde -p <profile_name>  
```







### show_profile_issues 
---

The `show_profile_issues` command is designed to help identify possible causes for connection errors.  It will review the node's log file and attempt to categorize the resulting errors in the order of importance. 

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_profile_issues  | None | >v2.14.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | Which [profile](/validate/quick-start/prerequisites#-profile-table) are you attempting review for issues. | **required** |

##### Result Header Descriptions
| Result Header | Description |
| :---: | :--- |
| Profile | [profile](/validate/quick-start/prerequisites#-profile-table) used to lookup error(s). |
| Error | What error was found? |
| Possible Cause | What is the most common or likely reason for this error? |
| Result | Possible result of this error message. |
| Time | Timestamp of the error in question. |

> #### Examples
- Help screen
```
sudo nodectl show_profile_issues help
```  
- Execute `show_profile_issues`.
```
sudo nodectl show_profile_issues -p <profile_name>  
```







### show_service_log
---

The `show_service_log` command is designed to help identify possible causes for service errors.  It will review the node's service file log file of a given profile. 

This command will search the Debian distribution based journal specifically for the service logs associated with the requested profile which launches to allow the profile to connect to its configured cluster.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_service_log  | None | >v2.14.x |

| [option](#what-is-an-option-and-parameter) | parameters | Description | Is [Option](#what-is-an-option-and-parameter) Required or Optional |
| :---: | :---: | :--- | :----: |
| -p | `<profile_name>` | Which [profile](/validate/quick-start/prerequisites#-profile-table) are you attempting review service issues. | **required** |

> #### Examples
- Help screen
```
sudo nodectl show_service_log help
```  
- Execute `show_service_log` of a profile by the name of `dag-l0`.
```
sudo nodectl show_service_log -p dag-l0
```




### show_service_status 
---

The `show_service_status` command will review the processes running on the node, and display their current known state.

| Command | Shortcut | Version |
| :---: | :---: | :---: |
| show_profile_status  | None | >v2.14.x |

This command does not accept any options.

##### Result Header Descriptions
| Result Header | Description |
| :---: | :--- |
| Owner | What profile on the Node owns the process being displayed. |
| PID | Process ID of the service as assigned by the Debian systemd system manager, used to handle the logging and various utilities for the assigned process. |
| Status Code | The code returned by the systemd manager. These codes can be standard codes or custom codes for a particular process in use. |
| Status | Human friendly translation of the status code. |

##### Status Code Descriptions
| Result Header | Description |
| :---: | :--- |
| 0 | What profile on the Node owns the process being displayed. |
| 256 | Process exited with error. |
| 768 | Process not running. |

##### Status Descriptions
| Result Header | Description |
| :---: | :--- |
| active | running. |
| inactive | not running (`dead`). |

> #### Examples
- Help screen
```
sudo nodectl show_service_status help
```  
- Execute `show_service_status`.
```
sudo nodectl show_service_status
```