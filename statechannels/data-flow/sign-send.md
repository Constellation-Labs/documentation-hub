---
title: Sign and Send
slug: sign-send
hide_table_of_contents: false
---

![Define](/img/statechannels/dataflow.png)

The state channel snapshots are posted to the Global L0 network according to the frequency in which you have defined and will only accept data that has been signed by the state channel. This is a simple POST request API with the following syntax: 

```scala
POST /state-channel/{address}/snapshot
```

The full Swagger UI API documentation