---
title: Sign and Send
slug: sign-send
hide_table_of_contents: false
---

![Define](/img/statechannels/dataflow.png)

<intro-end />

State channel snapshots are posted to the Global L0 network by sending a POST request to the below endpoint. Snapshot data must be signed by the private key associated with the state channel wallet address. 

```scala
POST /state-channel/{address}/snapshot
```

Additional [API documentation](/apps/network-apis)