---
title: Overview
slug: overview
hide_table_of_contents: false
---

A state channel is free to design its network in any manner that supports desired goals. Ultimately, a state channel's business requirements will determine its technological requirements and implementation strategy. This will vary by industry and likely evolve over time. Here’s one example scenario:

## Scenario: Validating IoT Sensor Data[](https://documents-hub.netlify.app/statechannels/scdesign#scenario-validating-iot-sensor-data)

In this scenario, a business manufactures and sells temperature sensors which monitor changes in environmental conditions within shipping containers. These containers are responsible for transporting food that requires refrigeration. Fluctuations in the temperature of the shipping container can spoil food, with each type of food product possessing its own particular tolerance for the duration and degree of temperature fluctuations. Meats, for example, can tolerate a 7°F increase in temperature for a maximum of 30 minutes while Milk can only tolerate 5°F increase for 15 minutes. Currently, the temperatures are checked at the shipping origin and destination and only provide an indication of the highest temperature, the lowest temperature, and average temperature of the container during its journey. This could lead to an incorrect conclusion that the meat and milk are safe to consume because of the low fidelity of the data which doesn't include duration of time for each degree in temperature change.

The business wants to be able to know if, when, and for how long the temperatures in the container exceeded the tolerance ranges for each product type. The business decides to create a state channel which will granularly track temperature during shipment by notarizing this sensor data onto Constellation Network's Hypergraph to create a history of temperature checks that can be queried. The implementation can proceed in a couple of different ways depending on the technical requirements and hardware involved:

### Approach #1: Configure each IoT device as a State Channel

Although theoretically possible, the IoT hardware in this particular scenario would not be an ideal candidate for deploying a state channel. Typically, industrial IoT sensors are designed with very lean hardware specifications that do not have the CPU, memory, or battery to support computationally intensive tasks. This configuration could be possible in other use cases involving a single endpoint that has more hardware resources, such as a laptop or desktop computer, where the objective is simply to sign and submit data directly to the Global L0 for notarization without decentralized consensus being conducted by a network of state channel validator nodes.

### Approach #2: Configure a State Channel Network

If the objective is to validate and notarize data from a fleet of IoT devices, as is the case in this scenario, a state channel network would be capable of fulfilling the complex validation logic and scalability requirements that the use case calls for. In this implementation, the IoT sensors would send data to a State Channel network that is composed of one or more validator node clusters (3 nodes) which would process the data according to the logic defined within it. For example, the state channel can organize the incoming sensor data according to the specific data structure being received. These transactional events can then be bundled into blocks at particular intervals and/or bundled into state channel snapshots according to the logic defined. The snapshots are then submitted into the Global L0 Hypergraph for global validation at the size and interval needed to fulfill the desired business logic requirements.