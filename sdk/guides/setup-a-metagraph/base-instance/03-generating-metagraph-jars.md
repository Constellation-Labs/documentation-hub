---
id: generating-metagraph-jars
title: Generating metagraph JARs on the base instance
---

This guide will give you the step by step on how to generate the metagraph JARs directly on your Base instance.
 
## Setting up the Tessellation repository

- Clone the Tessellation repository and checkout the integrationnet node version. You can find the integrationnet node version using the **`/node/info`** endpoint in any existing node of the network.

![configuring instance 04](/img/sdk/configuring-base-image-04.png)

```bash
git clone https://github.com/Constellation-Labs/tessellation.git
cd tessellation
git checkout v2.2.0
```
:::warning 
Make sure you're using the latest version of Tessellation. You can find the most recent release in [**here**](https://github.com/Constellation-Labs/tessellation/releases).
:::

- Create a GitHub token to build and publish the JARs.
- Instructions on creating an **[access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)** can be found in the GitHub documentation. The token should only have the **`read:packages`** scope.
- Ensure you have a clean **`.m2`** directory:

```bash
rm -r ~/.m2
```

- Publish locally (on the `.m2` directory) the JARs that will be used for the Metagraph instances:

```bash
export GITHUB_TOKEN=:your_token
sbt clean
```

```scala
sbt shared/publishM2 kernel/publishM2 keytool/publishM2 sdk/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2
```

:::info
This part of the process can take some time.
:::

- Return to the root directory:

```scala
cd ..
```

## Creating the metagraph project

- Install the coursier and giter8 packages:

```bash
curl -fL https://github.com/coursier/coursier/releases/latest/download/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs set
```

```bash
source ~/.profile
./cs install giter8
```

- Now create the Metagraph project. We will use the `gitter` lib for that
- **We should provide the same version as the Tessellation checkout above**

```bash
g8 Constellation-Labs/currency --tag v2.2.0 --name="my-project" --tessellation_version="2.0.0" --include_data_l1="yes"
```

:::warning 
Make sure you're using the latest version of Tessellation. You can find the most recent release in [**here**](https://github.com/Constellation-Labs/tessellation/releases).
:::

:::info
The command above includes the data-l1 layer with `--include_data_l1="yes"`. You can omit this parameter if your implementation does not require this layer.
:::

:::important
If you want to customize the reward logic before compiling, check the **[Customize rewards guide](/sdk/guides/customize-rewards/)**
:::

- Compile the Metagraph L0 and Metagraph L1 jars:

```bash
cd my-project/
sbt clean currencyL0/assembly currencyL1/assembly dataL1/assembly
cd ..
```

- Move and rename the JARs to the metagraph directories:

```bash
cd ..
mv my-project/modules/l0/target/scala-2.13/my-project-currency-l0-assembly-0.1.0-SNAPSHOT.jar metagraph-l0/metagraph-l0.jar
mv my-project/modules/l1/target/scala-2.13/my-project-currency-l1-assembly-0.1.0-SNAPSHOT.jar currency-l1/currency-l1.jar
mv my-project/modules/data_l1/target/scala-2.13/my-project-data-l1-assembly-0.1.0-SNAPSHOT.jar data-l1/data-l1.jar
```

:::info
If you are not using the data-l1 layer, feel free to exclude `dataL1/assembly` and the subsequent `mv my-project/modules/data_l1/target/scala-2.13/my-project-data-l1-assembly-0.1.0-SNAPSHOT.jar data-l1.jar` steps.
:::