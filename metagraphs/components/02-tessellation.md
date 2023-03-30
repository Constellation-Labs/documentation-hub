---
title: Tessellation
slug: tessellation
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

The Tessellation project repo serves as the principal codebase for building on the Constellation Network. This codebase encompasses the essential code for working with the Hypergraph and facilitating metagraph development, positioning Tessellation as the foundation for developers and businesses to create scalable and secure solutions on the Constellation Network.

Moreover, the Tessellation repo functions as the lower-level library upon which the Euclid SDK is built. By providing the necessary groundwork, Tessellation ensures that the Euclid SDK can offer developers a seamless experience when creating and deploying applications on the Constellation Network. The Tessellation project repo is instrumental in empowering developers to harness the full potential of the Constellation Network and its unique capabilities.

## Resources
The [Tessellation repo](https://github.com/Constellation-Labs/tessellation) includes the following resources:

- **Consensus Logic:** Handles Proposals, Voting, and Validation
- **Health Check Logic:** Ensures nodes are operating as expected
- **Communication protocol:** P2P connection handling and Gossiping
- **Security Provider:** Digital Signature System using SHA512/ECDSA
- **Logging Configurator:** A generic façade for integrating logging frameworks
- **Serialization Framework:** Orchestrates binary serialization to create streams
