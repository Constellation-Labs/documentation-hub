---
title: Big Data Use Cases: An Example
hide_table_of_contents: false
---

<head>
    <title> Big Data Use Cases: An Example
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

<intro-end />

Let's say your company wanted to develop a decentralized application that can solve the systemic problem of online video game cheating.
If the developers decided to build this capability with existing blockchains or DLTs, what they would have to do is figure out a way to
accomplish this while conforming to the data structure token standards which have been decided for them by the network. 
This would prevent them from validating and notarizing the actual data structures that are being generated from the video game itself,
which could potentially be composed of multiple different complex data types which are updated concurrently. Instead, the developers 
would be forced to notarize simple messages that describe the game's state as a form of "validation". Most decentralized protocol have 
to limit the types of data that can be processed by the network due to scalability, interoperability, and composability limitations
inherent to their architectures.

Let us examine this in the context of a First Person Shooter (FPS) video game;

FPS games are subject to various types of hacks, with most infamous being the "AimBot" hack. When a user is 
cheating using this type of hack, he will be able to track where his enemies are in the game and automatically be able to shoot them 
with 100% accuracy, everytime. This obviously degrades the user experience of the video game and undermines the fair competition that
people seek as gamers. What this hack is doing on the backend is hi-jacking the local video game application and abusing the
inputs and outputs that it receives from the video game's web servers to inform where to aim the player's weapon. In order to prove that
a player was cheating in this way, the developers would need the flexibility to encode the inner state of the video game into a complex 
data structure, notarize it onto the blockchain, and then introduce some validation logic that can detect the anomalous behavior. 
For this to be truly effective, you would need this entire consensus process to occur in near real-time so that the cheater is
automatically identified and kicked from the game as to not disrupt the experience of other players.

![Aimbot Flow](/img/coreconcepts/aimbotexample.png)

This means not only do you need your decentralized protocol to be flexible enough to model unique data generated out of the
video game, but you also want to customize the validation logic and consensus process of the decentralized protocol to enable 
the data to be processed in a specific way for effective analysis as part of your detection system. Finally, the protocol needs
to be able to react to this data in a matter of seconds to deliver some sort of meaningful recourse, while also notarizing the
response itself. This is what constitutes a Big Data use case, as it requires a decentralized protocol with a capacity for processing 
asynchronous data streams at very high rates. Constellation Network State Channels enable these types of use cases to be realized as
opposed to existing DLTs and Blockchains which would only be able to address very basic cheating attempts, such as checking whether 
someone hacked the video game's leader board to validate if scores were manipulated at the end of a match, a simple binary check that
does not provide high fidelity insights into the video game's inner state.

![End to End Validation](/img/coreconcepts/pipeline.jpeg)

