---
title: "Programmability"
hide_table_of_contents: true
---

<head>
  <title>Programmability</title>
  <meta
    name="description"
    content=""
  />
</head>

<intro-end />

A smart contract enables application logic to be processed by a decentralized network of untrusted computers in a verifiable way.
It is the code that underpins decentralized applications, referred to as "Dapps". A smart contract's level of programmability is limited
to very simple "if this, then that" binary logic due to their dependencies on underlying the blockchain network
that they are deployed on. This results in an inability to cope with user defined complex data types, which
is a result of monolithic architecture choices and dynamically typed programming languages used in their design. This
forces the blockchain protocol to constrain the execution environment to a limited set of pre-defined data types in order
to verify its state. These limitations are further reinforced by the implementation of a single-tiered network of consensus
facilitator nodes that require a shared execution context to carry out computational tasks. This leads to the development of blockchain
specific programming languages that are not aligned with the broader computer science industry. 