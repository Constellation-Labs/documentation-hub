---
title: What are SSH Keys
hide_table_of_contents: false
---

<head>
  <title>SSH Key Explained</title>
  <meta
    name="description"
    content="An understanding on how to create SSH Keys for your VPS"
  />
</head>

### What are SSH Keys?

SSH stands for `secure shell`.  

#### High Level

It is a way for us to **remotely** connect to our VPS (Virtual Private Server) in the cloud (or wherever you have it hosted in your environment) in an encrypted secure fashion. 

In order to create an **SSH** connection, we need to create secure **keys** that will allow us to connect between our VPS and our local computer system that we are using to attempt to access our VPS.

#### Low Level

SSH is a layer 7 application layer protocol that uses TCP transport layer 4 to create a secure encrypted end-to-end transport between a local system and remote system.   SSH is a secure alternative (replacement) to Telnet.