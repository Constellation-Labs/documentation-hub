---
title: Send a Transaction
slug: /guides/send-transaction
sidebar_label: Send a Transaction
hide_table_of_contents: false
---

<intro-end />

In this guide, we will explore two of the tools that work together with the Euclid Developer Environment, then use them to send and track our first metagraph token transaction. 

We will install the [Developer Dashboard](/sdk/elements/developer-dashboard), send a transaction using an included script, and monitor our clusters using the [Telemetry Dashboard](/sdk/elements/telemetry-dashboard).

## Before You Start
This guide assumes that you have configured your local environment based on the [Quick Start Guide](/sdk/guides/quick-start) and have at least your `global-l0`, `currency-l0`, `currency-l1`, and `monitoring` clusters running. 

## Install the SDK Developer Dashboard
The Developer Dashboard is a frontend dashboard built with NextJS and Tailwind CSS. It comes with default configuration to work with the Development Environment on install. 

#### Clone the repository
```
git clone https://github.com/Constellation-Labs/sdk-developer-dashboard.git
cd sdk-developer-dashboard
```

#### Install dependencies
*Node 16 recommended
```yarn
yarn install
```
```npm
npm install
```

#### Start the app
```
yarn dev
(or npm run dev)
```

## View the Developer Dashboard
Open a brower window to `http://localhost:8080`.

Here, you can see both your currency and global clusters at work. You should see the snapshot ordinals for the Global L0 and the Currency L0 increment on your dashboard. Also notice that you can inspect each snapshot to see its contents. Any transactions sent on the network will appear in the tables below - there are separate tables for DAG and Metagraph Token transactions. 

The dashboard is designed to work with the Euclid Development Environment default settings out-of-the-box but if you need to change network settings, they can be found in the `.env` file at the root of the project. 

## Send a Transaction
The Developer Dashboard comes pre-installed with scripts to send transactions to your running metagraph. The scripts use [dag4.js](https://github.com/StardustCollective/dag4.js) to interact with the network based on the settings in your `.env` file. 

#### Single Transaction
Single transactions can be sent on the command line for easy testing. The transaction below should succeed with the default configuration. 
```
yarn metagraph-transaction:send --seed="drift doll absurd cost upon magic plate often actor decade obscure smooth" --transaction='{"destination": "DAG4o41NzhfX6DyYBTTXu6sJa6awm36abJpv89jB","amount":99, "fee":0}'
```

#### Bulk Transactions
You can send bulk transactions to the network by calling `send-bulk` and providing a path to a json file with transaction configuration. A sample JSON file is provided for you which will work with the default configuration. 
```
yarn metagraph-transaction:send-bulk --config="./scripts/send_transactions/batch_transactions.example.json"
```

#### View Transactions
Return to the dashboard and look in the Currency Transactions table. You should see the transactions you just sent. You can also view the contents of the snapshot that the transaction's block was included in.

## Monitoring
Now that you have sent a transaction or two we can check on the stability of the network with the [Telemetry Dashboard](/sdk/elements/telemetry-dashboard). The Telemetry Dashboard is composed of two containers included as part of the Development Environment: a Prometheus instance and a Grafana instance. 

The dashboard is hosted on the Grafana instance which can be accessed at `http://localhost:3000/`. 

The initial login and password are:
```
username: admin
password: admin
```

The Grafana instance includes two dashboards which can be found in the menu on the left. One dashboard monitors the Global L0 and DAG L1 (if you have it running). The other monitors the Currency L0 and Currency L1. More information can be found in the [Telemetry Dashboard](/sdk/elements/telemetry-dashboard) section. 
