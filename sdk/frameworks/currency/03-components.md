---
title: Core Components
sidebar_label: Components
hide_table_of_contents: false
---

<intro-end />

## Entrypoints
The main entrypoints for a framework application consist of the [L0 Main](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/currency-l0/src/main/scala/org/tessellation/currency/l0/Main.scala) and [L1 Main](https://github.com/Constellation-Labs/tessellation/blob/develop/modules/currency-l1/src/main/scala/org/tessellation/currency/l1/Main.scala) methods. The L1 code is designed for producing graph data of a specific data type and has consensus routines associated with the scalable addition of data to the leading forefront of graph. The L1 represents and accepts new data to be processed into the network, and acts as the first point where data is ingested and validated, and includes the submit endpoints where data can be added. The L0 acts on data processed by the L1, and bundles it together into specific snapshot states, again re-validating the whole of the data against that particular state update, before submitting it to the global L0 of all applications.

Let’s take a brief walk-through of the main functionalities / concepts involved in the main functions of the L0 framework main application method.

## Serialization

The kryo schema registry is used for registering your custom schema data types for binary serialization

```scala
val kryoRegistrar: Map[Class[_], KryoRegistrationId[KryoRegistrationIdRange]] =
    currencyKryoRegistrar.union(sdkKryoRegistrar)
```

An example instantiation of the registry, which can be unioned with additional data types specific to your application. Data types intended for used within block data, including custom transaction types or other dependent types required for commitment to chain data should be included in this registry for use within application development. The kryo registry is used by an kryo class instance, which provides the dependency throughout the application for serializing and deserializing binary objects. An example usage of the serializer is seen here:

```
KryoSerializer[F]
  .serialize(transactionConverter(hashedTransaction))
  .map(Hex.fromBytes(_))
```

This syntax expects an implicit instance of serializer class instance in the scope, which can be provided either through type boundaries, or through an implicit argument.

## Peer to Peer Client

The peer to peer client encapsulates all functionality related to communication with external peers for different services as required, and can be used or customized for different purposes. The client can be accessed by alternative services and programs over the methods already provided to it, and the model for building customized requests or communication can follow the standard demonstrated by this communication layer.

The instantiation method is seen below, where this instance can be accessed by other portions of your application.

```scala
p2pClient = P2PClient.make[IO](sdkP2PClient, sdkResources.client, 
keyPair, method.identifier)
```

```
sealed abstract class P2PClient[F[_]] private (
  val globalL0Cluster: L0ClusterClient[F],
  val cluster: ClusterClient[F],
  val gossip: GossipClient[F],
  val node: NodeClient[F],
  val stateChannelSnapshotClient: StateChannelSnapshotClient[F]
)
```

The sub-clients available for usage.

An example usage of this is for getting the peer information from the L0 cluster on the L0ClusterClient, which can be seen in this method: 

```
  def getPeers: PeerResponse[F, Set[PeerInfo]] =
PeerResponse[F, Set[PeerInfo]]("cluster/info")(client)
}
```

Which is used for initial peer discovery during the bootstrapping phase. Each of these clients can be invoked and used for alternative purposes or for getting information for your individual application needs.

## Storages

Storages provide data-store functionality, primarily for shared in-memory data structures used by multiple services or programs. They are used primarily for representing and updating the internal state of the node in a safe way. Each storage upon instantiation is passed as a dependency into the services or methods requiring it’s usage, and can be accessed by any customized layer for accessing the internal node state, seen below are the main storage definitions used internally, which can be extended further.

```
new Storages[F](
  globalL0Cluster = globalL0ClusterStorage,
  cluster = sdkStorages.cluster,
  node = sdkStorages.node,
  session = sdkStorages.session,
  rumor = sdkStorages.rumor,
  snapshot = snapshotStorage,
  lastSignedBinaryHash = lastSignedBinaryHashStorage
) {}
```

## Services

Services provide internal methods on top of storages. They do not represent external API invocations but rather node internal functionalities which are modeled following a similar pattern to external communications. They should be used for accessing and modifying internal state safely. An example service for handling a getter pattern extracting data from the internal store is seen below, where the main dependency is upon the snapshot storage, and we are formatting and returning information from it

```
object AddressService {
  def make[F[_]: Functor, S <: Snapshot[_, _]](snapshotStorage: SnapshotStorage[F, S]): AddressService[F, S] = new AddressService[F, S] {
    private def getBalance(snapshot: Signed[S], address: Address): (Balance, SnapshotOrdinal) = {
      val balance = snapshot.value.info.balances.getOrElse(address, Balance.empty)
      val ordinal = snapshot.value.ordinal

      (balance, ordinal)
    }
```

## Programs

Programs are used for interacting with services, storages, and clients to implement custom internal state updates & other multi-dependency operations. They should be used for any operation which performs a complex process requiring internal state mutation and/or spanning multiple services and clients. 

An example program for peer discovery is shown below: 

```
def discover(lastFacilitators: NonEmptySet[PeerId]): F[Unit] =
  l0ClusterStorage.getPeers
    .map(_.map(_.id).intersect(lastFacilitators))
    .map(_.toList)
    .flatMap(Random[F].shuffleList)
    .map(_.head)
    .flatMap(l0ClusterStorage.getPeer)
    .map(_.map(p => P2PContext(p.ip, p.port, p.id)))
    .flatMap(_.fold(Applicative[F].unit) { p =>
      getPeersFrom(p).flatMap(l0ClusterStorage.setPeers)
    })
    .handleErrorWith { error =>
logger.warn(error)(s"An error occured during L0 peer discovery")
    }

```

Here, we are interacting with additional peers through the client, querying our currently stored set of peers, and updating it. 

## Validators

Validations encapsulate all areas of logic required for verification of chain data, and internal state. This spans the simplest operation like verifying a signature, to balance checks, to internal data consistency of chain data spanning multiple operations, to peer message inputs. All logic associated with verifying correctness of internal state should be grouped here. An example of an internal validator associated with signature verifications can be seen below: 

```
def make[F[_]: Async: KryoSerializer: SecurityProvider]: SignedValidator[F] = new SignedValidator[F] {

  def validateSignatures[A <: AnyRef](
    signed: Signed[A]
  ): F[SignedValidationErrorOr[Signed[A]]] =
    signed.validProofs.map { either =>
      either
        .leftMap(InvalidSignatures)
        .toValidatedNec
        .map(_ => signed)
    }
```

## Daemons

Daemons are internal long running operations which must poll periodically at some interval to evaluate state changes and perform updates. They are used for health checks, event propagation, node state updates, the download process, and internal models. A daemon should be used for any long-lived operation which must periodically check some internal state and perform an action depending upon it, for instance polling an external API. An example daemon for propagating a node’s internal state upon update at an interval is shown below:

```
private def spreadNodeState: F[Unit] =
  nodeStorage.nodeStates
    .filter(NodeState.toBroadcast.contains)
    .evalTap { nodeState =>
logger.info(s"Node state changed to=${nodeState.show}") >>
        gossip.spread(nodeState).handleErrorWith { error =>
logger.error(error)(s"NodeState spread error=${error.getMessage}")
        }
    }
    .compile
    .drain
```

## APIs

APIs are responsible for peer to peer communication, internal node control operations, and serving data publicly for arbitrary queries. They each construct multiple routes following the standard http4s composition pattern, and should rely on other dependencies for implementing business logic and be restricted to error handling and request response formatting. These can be overridden with customized additions for adding additional endpoints.

An example route for the public endpoint for providing snapshot related information is shown below, which relies on an internal storage dependency:

```scala
private val httpRoutes: HttpRoutes[F] = HttpRoutes.of[F] {
  caseGET->Root/"latest"/"ordinal" =>
    import org.http4s.circe.CirceEntityCodec.circeEntityEncoder

    snapshotStorage.head.map(_.map(_.ordinal)).flatMap {
      case Some(ordinal) =>Ok(("value" ->> ordinal.value.value) :: HNil)
      case None          =>NotFound()
    }

```