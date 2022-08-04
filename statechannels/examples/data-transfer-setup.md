---
title: Data Transfer Demo Setup
hide_table_of_contents: false
---
<intro-end />

This document will guide you through the process of compiling the demo code for the [Data Transfer Demo](/statechannels/examples/data-transfer).

## Prerequisites
- Tessellation code compiled following the steps described in [Compile Tessellation](/statechannels/examples/compile-tessellation).
- The Tessellation project must be published as described in step 4 in the link above.

## Steps

**1.** Checkout the [demo code](https://github.com/Alkimi-Exchange/state-channel-demo) from Github.
```bash
git clone https://github.com/Alkimi-Exchange/state-channel-demo.git
```

**2.** The version of the Tessellation project must be mentioned in the `build.sbt` file.

**3.** Set the `GITHUB_TOKEN` environment variable to your personal access token generated from Github. See [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)for detailed instructions.

```bash
export GITHUB_TOKEN=<personal_access_token>
```

**4.** Run the following command to create the executable.
```bash
sbt assembly
```

**5.** Find the .jar files created with the command
```bash
find . -name *.jar
```

**6.** Copy the following file to a new location to run the executables
```bash
tessellation-demo-assembly-<version>.jar
```