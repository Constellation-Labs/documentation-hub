---
title: Off-Chain Data Validation
hide_table_of_contents: false
---

<head>
    <title> Off-Chain Data Validation
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />

![Off-chain Data Validation](/img/coreconcepts/existing-apps.jpeg)

State Channels enable developers to securely incorporate data derived from external systems into the consensus logic
of their network, functioning as an "Off-chain Data Oracle". This is made possible by the functional programming principles
incorporated into the design of HGTP, enabling formal verification of typeclasses that are defined by the State Channel.
The inner state transitions of an application or system can be defined within a statically typed data schema, allowing for complex data 
types to be validated using custom consensus logic, ensuring the validity of data as it traverses the network
from its point of origin to its final destination. Constellation Network's major innovation that unlocks native "Oraclization" 
is the encoding of state data into geometric representations, known as Cell Complexes, which allows for the generalization of
data structures into higher dimensional connective properties. This approach to modeling data structures is known in the broader
distributed computing industry as Topological Data Analysis (TDA). 

What this means for a developer is that complex state data can be considered normalized in such a way that it allows for the simple
incorporation and combination of complex data types into a consensus process, similar to interacting with a high level Application Programming Interface (API). 
This enables composability of state data which originates from concurrent execution contexts, including the ability to
validate the state of other Blockchain and DLT networks. You can think of Constellation's approach to using
type classes to organize and pre-process topological data as an evolution of the concept of smart contracts which are typically
constrained to synchronous validation of a very limited set of simple data types and plagued with performance and scalability challenges. Type
classes abstract the complexity away from combining complex data types together which belong to different concurrent processes. This same
innovation also provides a unique solution to horizontally scale the network which will be examined in the following sections.