---
title: Custom Data Validation
slug: /guides/custom-data
sidebar_label: Custom Data
hide_table_of_contents: false
---

<intro-end />

In this guide, we will walk through the Data API and a simple example implementation of an IoT use case. Complete code for this guide can be found in the [metagraph examples repo](https://github.com/Constellation-Labs/metagraph-examples) on Github. See the [Data API - Water and Energy Use](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples/DataApi-Water-And-Energy-Usage) example. 

:::info Want more detail? 
Looking for additional detail on the Data API and Data Application development? More information is available in [Data API](/sdk/frameworks/currency/data-api).
:::


## Before You Start
In order to get started, install dependencies as described in the [Quick Start Guide](/sdk/guides/quick-start). You will need at least the `global-l0`, `metagraph-l0`, and `metagraph-l1-data` containers enabled in your `euclid.json` file for this guide. 

__Example euclid.json values__
```json
  "github_token": "<your token>",
  "framework": {
    "name": "currency",
    "modules": [
      "data"
    ]
  },
  "docker": {
    "default_containers": [
      "global-l0",
      "metagraph-l0",
      "metagraph-l1-data"
    ]
  }
```

__Run hydra install__
```bash
  ./scripts hydra install
```

Within your Euclid modules directory (source/project/custom-project/modules) you will see three module directories: l0 (metagraph l0), l1 (currency l1), and data_l1 (data l1). Each module has a Main.scala file that defines the application that will run at each corresponding layer. 

```
- source
  - project
    - custom-project (your-project-name)
      - modules
        - l0
        - l1
        - data_1
        - shared_data
      - project
```

### Copy Example Files
To get started with this guide, copy everything under the example [template/modules directory](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples/DataApi-Water-And-Energy-Usage/template) in the example into your project (custom-project) modules directory. 

You'll also need to copy the `scripts` directory to a local directory and run `npm install` to install the necessary dependencies. 

## Send Data
Edit the `send_data_transaction.js` script and fill in the `globalL0Url`, `metagraphL1DataUrl`, and `walletPrivateKey` variables. The private key can be generated with the `dag4.keystore.generatePrivateKey()` method if you don't already have one. 

Once the variables are updated, save the file. You can now run `node send_data_transaction.js` to send data to the `/data` endpoint. 

### Check State Updates
Using the custom endpoint created in the data_l1 Main.scala `routes` method, we can check the metagraph state as updates are sent. 

Using your browser, navigate to `<your L1 base url>/data-application/addresses` to see the complete state including all devices that have sent data. You can also check the state of an individual device using the `<your L1 base url>/data-application/addresses/:address` endpoint. 

You should see a response like this:
```json
{
    "DAG4bQGdnDJ5okVdsdtvJzBwQoPGjLNzN7HC1CBV": {
        "energy": {
            "usage": 7,
            "timestamp": 1689441998946
        },
        "water": {
            "usage": 7,
            "timestamp": 1689441998946
        }
    }
}
```

## Next Steps
This brief guide demonstrates the ability to update and view on-chain state based on the Currency Framework's Data API. Detailed information about the framework methods used can be found in the [example README file](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/DataApi-Water-And-Energy-Usage/README.md) and in comments throughout the code. Also see additional break downs of the application lifecycle methods in the [Data API](/sdk/frameworks/currency/data-api) section. 


