---
title: Limitations and Fees
hide_table_of_contents: false
---
<intro-end />

In order to leverage the global L0 network for validation and consensus, metagraph networks must pay fees and adhere to size limits. These fees bolster the tokenomics of the network and enhance security by making various forms of network attacks economically infeasible.

## Limitations

The global L0 network enforces a snapshot size limit of 500kb of incremental data per snapshot. This constraint has been implemented to guarantee efficient processing and storage of snapshots on the network. Any snapshot exceeding this size limit will be rejected by the network. Developers are encouraged to optimize their data structures and ensure that their snapshots adhere to this size limitation.

## Fees

Metagraphs can submit one snapshot per global snapshot without paying a fee. Subsequent snapshots submitted to the global L0 network will be held in the mempool until the next global snapshot is triggered, effectively rate-limiting snapshots submitted without a fee.

Metagraph snapshots submitted without a fee or with an insufficient fee will not be validated by the network, but the metagraph snapshot hash will still be included in the global snapshot.

:::info

During the current era, metagraph snapshots have zero fees associated with them and are processed on demand. Priority fee requirements will be introduced during the Gemini era.

:::

The fee paid to validate each snapshot is made up of the following components: 
- **Work Amount:** The work amount is calculated based on the amount of work that a given snapshot will require the network to perform. This calculation takes into account the byteSize of data contained in the snapshot and the estimated computational cost of the validation functions to be executed.
- **Multiplier:** The fee multiplier is the relative amount that each metagraph must pay for the same amount of work done by the network. State channels receive reduced fees for their contributions to the network, namely amount of DAG staked and their PRO score.
- **Base Fee:** The base fee of the network is a constant value that sets the overall cost of fees on the network
- **Tip:** An optional additional fee that can be included to increase the priority of snapshot processing in a congested network.

**To determine the Fee Amount for a snapshot, we use the following formula:**

```tsx
workAmount = byteSize * computationalCost
```

**To determine the Fee Multiplier for each metagraph, we use the following formula:**

```tsx
multiplier = 1/((stakedDAG * stakingWeight) + (averageProScore * proWeight))
```

**To determine the complete Fee required for processing a snapshot, we use the following formula:**

```tsx
fee = (baseFee * workAmount * multiplier) + optionalTip
```