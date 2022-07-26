---
title: DAG Layer 1
hide_table_of_contents: false
---

<head>
  <title>DAG Layer 1</title>
  <meta
    name="description"
    content="Lorem ipsum"
  />
</head>

DAG Layer 1 forms a network itself, similar to Global L0. However, the main
process of the DAG Layer 1 is a consensus mechanism that ends up with a Block.

## State Channel implementation

DAG Layer 1 is created in the same way as other state channels, but the one
difference. State Channel should produce State Channel snapshots while DAG Layer
1 produces Blocks.

The main logic is placed in [`BlockConsensusCell.scala`](https://github.com/Constellation-Labs/tessellation/blob/master/modules/dag-l1/src/main/scala/org/tessellation/dag/l1/domain/consensus/block/BlockConsensusCell.scala).

### BlockConsensusCell

`BlockConsensusCell` extends the `Cell` definition.
`Cell` basically is a function `A -> B`, which is an output of hylomorphism on
the provided recursive structure. In fact, the Cell type is `A -> M[B]` when `M`
is a monad to allow effectful operations in (un)folding steps.

```scala
class BlockConsensusCell[F[_]: Async: SecurityProvider: KryoSerializer: Random: Logger](
  data: BlockConsensusInput,
  ctx: BlockConsensusContext[F]
// highlight-next-line
) extends Cell[F, StackF, BlockConsensusInput, Either[CellError, Ω], CoalgebraCommand](
```

The recursive structure mentioned above is `StackF`. It consists of two
operations: `Done(result)` and `More(operation)` that can be stacked, like:
```
More(More(More(More(Done(...)))))
```

### Input

`BlockConsensusCell` input is defined as `BlockConsensusInput` which is the
following disjoint union:
- `OwnerBlockConsensusInput`
  - `OwnRoundTrigger`
  - `InspectionTrigger`
- `PeerBlockConsensusInput`
  - `Proposal`
  - `BlockSignatureProposal`
  - `CancelledBlockCreationRound`

### Output

The output of the `BlockConsensusCell` is either `FinalBlock` or no consensus
(`CleanedConsensuses` command).

## Consensus round

### Preconditions

- The node must be connected to the network with at least two other peers that can
    be selected as facilitators
- The node must fetch the global snapshot from Global Layer 0, to get to know about
    Blocks that can be parents (tips) for new Blocks.
- The node has enough valid transactions (empty Block is not valid).

### Stages

1. Create a round and inform facilitators
2. Pull valid transactions forming the correct, consecutive chain
3. Send transactions to facilitators as a Proposal
4. Gather all proposals, validate them and fold them into a Block
5. Broadcast Block signature to facilitators
6. Fold all Block signatures into the final Block and finish the consensus round

In case of any failure, cancel the existing round and try to inform facilitators
about cancellation.
