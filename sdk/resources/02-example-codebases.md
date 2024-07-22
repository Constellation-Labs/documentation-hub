---
title: Example Codebases
sidebar_label: Example Codebases
hide_table_of_contents: true
---
import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

The Euclid SDK is designed to provide developers with the tools they need to build robust and scalable decentralized applications on the Constellation Network. To help you get started, we have curated a list of exemplary codebases that you can explore and learn from. These codebases are open-source projects that demonstrate various aspects of using the Euclid SDK in real-world scenarios.

## Codebases
<DocsCards>
<DocsCard header="Metagraph Examples" href="https://github.com/Constellation-Labs/metagraph-examples" img="/img/home/core-concepts.jpg">
  <p>The Metagraph Examples repository contains several minimalist metagraph codebases designed to demonstrate specific metagraph features in a simplified context. All projects in this repo can be installed with `hydra install-template`</p>
  <p className="displays"><strong>Displays:</strong> many concepts.</p>
</DocsCard>
<DocsCard header="Dor Metagraph" href="https://github.com/Constellation-Labs/dor-metagraph" img="/img/home/state-channel.jpg">
  <p>This repository is the codebase of the Dor Metagraph, the first metagraph to launch to MainNet. The Dor Metagraph ingests foot traffic data from a network of IoT sensors.</p>
  <p className="displays"><strong>Displays:</strong> strategies for processing binary data types using decoders, reward distribution, and separation of public/private data using calculated state.</p>
</DocsCard>
<DocsCard header="EL PACA Metagraph" href="https://github.com/Constellation-Labs/elpaca-metagraph" img="/img/home/stargazer.jpg">
  <p>This repository is the codebase of the EL PACA Metagraph, a social credit metagraph designed to track and reward community activity within the Constellation ecosystem. </p>
  <p className="displays"><strong>Displays:</strong> data fetching using daemons, integration with 3rd party APIs, and reward distribution</p>
</DocsCard>
</DocsCards>