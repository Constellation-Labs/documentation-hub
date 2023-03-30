---
title: Compile Tessellation
hide_table_of_contents: false
---
<intro-end />

This guide will walk you through how to compile the Tessellation project from source which is a prerequisite to use of the libraries and further metagraph development.

## Prerequisites
- A linux system with Ubuntu 20.04
- Java version 11 
```bash
sudo apt-get install openjdk-11-jdk
java –version
```
- sbt version 1.6.2

Install sbt with the following command
```bash
echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | sudo tee /etc/apt/sources.list.d/sbt.list
echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee /etc/apt/sources.list.d/sbt_old.list
curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add
sudo apt-get update
sudo apt-get install sbt
```

## Steps
**1.** Clone the project from the [Tessellation Github repo](https://github.com/Constellation-Labs/tessellation).
```bash
git clone https://github.com/Constellation-Labs/tessellation.git
```

**2.** Set the `GITHUB_TOKEN` environment variable to your personal access token generated from Github. See [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)for detailed instructions.

**3.** Run the following command to create the executables
```bash
sbt assembly
```
**4.** Use the following command to publish the project. This step is required to compile the demo code used in later examples.
```bash
sbt "shared/publishM2;kernel/publishM2;sdk/publishM2;keytool/publishM2;dagShared/publishM2"
```
**5.** Find the .jar files created with the command
```bash
find . -name *.jar
```
**6.** Copy the following files to a new location to use later
```bash
tessellation-keytool-assembly-<version>.jar
tessellation-wallet-assembly-<version>.jar
tessellation-core-assembly-<version>.jar
```
