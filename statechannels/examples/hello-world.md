---
title: Hello World State Channel
hide_table_of_contents: false
---

Every state channel wants to persist some data in the Global L0. To achieve
that, the state channel needs to submit that data in a binary format called a "State Channel Snapshot" which will be processed by the Global L0. This document will guide you through creating the most minimal state channel possible and submitting an example snapshot. 

This example uses the Scala language which is used by the Core Protocol and native SDK. State channels can technically be created in any language able to serialize and sign a transaction but using the Tessellation SDK is highly recommended in order to make the best use of existing APIs and abstraction layers. 

## Prerequisites
- [Getting started - follow tutorial for Scala2](https://docs.scala-lang.org/getting-started/index.html)
- [Java 11](https://docs.scala-lang.org/overviews/jdk-compatibility/overview.html)
- [sbt](https://www.scala-sbt.org/download.html)

All the snippets presented below you can find in [this GitHub repository](https://github.com/Constellation-Labs/state-channel-examples/).

### Scaffolding

To create an empty scala project, one needs to configure `build.sbt`
with organization name and dependencies. An example configuration of an empty
project is provided within [this commit](https://github.com/Constellation-Labs/state-channel-examples/commit/5d848feaf72ff84895ffb7a662fc59467e7fe31f).

### Versioning

From the very beginning, it would be wise to introduce versioning of the
codebase. We recommend using [semantic versioning](https://semver.org). The version
of the codebase is placed in `version.sbt` file, with the initial version
`v0.1.0-SNAPSHOT`.

### Style guide

To keep the code clean, we recommend using [scalafmt](https://scalameta.org/scalafmt/) and
[scalafix](https://scalacenter.github.io/scalafix/) formatters.
The configuration has been provided in the initial scaffolding.

## Adding a dependency to Tessellation SDK

All dependencies are kept in the `project/Dependencies.scala` file.

Tessellation SDK will be published via GitHub Packages, but before that, it can
be referenced directly from the released jar file, as follows:

```scala
  def tessellation(artifact: String) =
    ("org.constellation" %% s"tessellation-${artifact}" % V.tessellation).from(
      s"https://github.com/Constellation-Labs/tessellation/releases/download/v${V.tessellation}/cl-node.jar"
    )

  val tessellationSdk = tessellation("sdk")
  val tessellationCore = tessellation("core")
```

## Libraries used in the example

- [cats](https://typelevel.org/cats/) - category theory
- [cats effect](https://typelevel.org/cats-effect/) - purely functional runtime
    system
- [circe](https://circe.github.io/circe/) - json codecs
- [http4s](https://http4s.org) - HTTP client

## Keypair of the State Channel

One of the requirements for every state channel is to sign data before sending them to the Global L0 network. The signing algorithm must be aligned with the one used in the Core Protocol to produce consistent hashes. Messages are signed using secp256k1 which generates a ECDSA signature. 

### Keypair creation using Tessellation `cl-keytool.jar`

To create a keypair, fetch and execute `cl-keytool.jar` from the latest
Tessellation [release](https://github.com/Constellation-Labs/tessellation/releases).

`cl-keytool.jar` requires three env variables to be available:
- `CL_KEYSTORE` - path for the p12 file to be created
- `CL_KEYALIAS` - alias under which the key will be stored
- `CL_PASSWORD` - password for the private key stored under provided alias

```bash
> export CL_KEYSTORE=./sc-key.p12
> export CL_KEYALIAS=alias
> export CL_PASSWORD=password
> java -jar cl-keytool.jar generate

10:00:00.000 [io-compute-0] INFO org.tesselation.keytool.Main - KeyPair has been created at: ./sc-key.p12
```

The P12 file should be created under the given path. Let's use it now in the code.

### Loading Keypair in Scala

For being able to load a keypair, a security provider must be available within the
scope. To initialize it, one can use the following code:

```scala
SecurityProvider.forAsync[IO].use { implicit securityProvider =>
  // security provider implicitly available here
}
```

The above example creates `Resource[IO, SecurityProvider[IO]]`. The [Resource](https://typelevel.org/cats-effect/docs/std/resource) is a pattern allowing safe acquisition of some resource (the keypair file in this case),
performance of an action, and then release the resource.

Assuming the same path and passwords, loading the keypair can look like this:

```scala
def readKeypair: IO[KeyPair] =
  KeyStoreUtils.readKeyPairFromStore[IO](
    "./sc-key.p12",
    "alias",
    "password".toCharArray(),
    "password".toCharArray()
  )
```

## State Channel Snapshot data

State Channel Snapshot data is required to be binary encoded. Let's make a
simple example using `String -> Array[Byte]` conversion, like the following: `"hello world".getBytes`.

```scala
val stateChannelData = "hello world"
val stateChannelDataBinary = stateChannelData.getBytes
val stateChannelSnapshot = StateChannelSnapshotBinary(lastSnapshotHash = Hash.empty, content = stateChannelDataBinary)
```

Then, the State Channel Snapshot should be signed using a previously created keypair:
```scala
val signedStateChannelSnapshot: IO[Signed[StateChannelSnapshotBinary]] =
  Signed.forAsyncKryo[IO, StateChannelSnapshotBinary](stateChannelSnapshot, keypair)
```

### State Channel Snapshot reference

State Channel snapshots must form a linear chain starting with an empty Hash.
`Hash.empty` is equivalent to 64 zeros.
```
Hash.empty =
  0000000000000000000000000000000000000000000000000000000000000000
```

The hash of the State Channel is the hash of `StateChannelSnapshotBinary` class,
before signing (see: [transaction malleability attack](https://en.bitcoin.it/wiki/Transaction_malleability)).

A second Snapshot would have to reference the first one:

```scala
for {
  hashedStateChannelSnapshot <- signedStateChannelSnapshot.toHashed[IO]

  secondStateChannelSnapshot = StateChannelSnapshotBinary(
    lastSnapshotHash = hashedStateChannelSnapshot.hash,
    content = ...
  )
} yield ...
```

## L0 State Channel endpoint

The global L0 network expects State Channel Snapshots on the following endpoint.
```
POST /state-channels/{address}/snapshot
```

The address parameter is the $DAG address derived from the public key (the one
derived from the private key used to sign the snapshot).

### Code example

Interaction with RESTful API can be managed in many ways. This example uses
[http4s](https://http4s.org) library with `ember-client` implementation.

```scala
val request = Request[IO](
  method = POST,
  uri = Uri.unsafeFromString(s"http://${NETWORK_API}/state-channels/${address}/snapshot")
).withEntity(signedStateChannelSnapshot)

val result: IO[Unit] = httpClient.successful(request)
```

## Run the example

```bash
> sbt stateChannel/run

[info] Address: DAG3RvBgMzzxshKzn9orreVwEfZHNJ3p9dPretPj
[info] State channel data: hello world
[info] State channel snapshot: StateChannelSnapshotBinary(0000000000000000000000000000000000000000000000000000000000000000,[B@64d39168)
[info] Signature: SignatureProof(5c16debd3b712df8c75fb4691e1892354086ee72528c292feefe78f9eaac54298df7812620dcce48cdee8df6dd543ca69b6ec72b85ace7daf09160ccbe44fada,3045022003cc22cb31d65b705e5610a957e3dc6f2e073021368088e069a854801ef50863022100a651420f35b134164f3cb55731a9269e578ab41856caf518f866701b96236f81)
[info] State Channel Snapshot sent successfully
```
