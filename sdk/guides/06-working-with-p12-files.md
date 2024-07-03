---
title: Working with p12 files
sidebar_label: Working with p12 files 
slug: /guides/working-with-p12-files
hide_table_of_contents: false
---

## Generating p12 files

This guide will walk you through the process of creating your own custom p12 files. We will generate three files to match the original Euclid Development Environment project's configuration.

:::caution
If using a Euclid Development Environment project, you must update your configuration to use your own custom p12 files. Projects submitted with the default p12 files that come with the project will be rejected. 
:::

### Step 1: Download `cl-keytool.jar` Executable
Download the `cl-keytool.jar` executable. This is included as an asset with each release of Tessellation.

### Step 2: Set Up Your Environment Variables
Modify the following variables with your custom details and export them to your environment:

```bash
export CL_KEYSTORE=":your_custom_file_name.p12"
export CL_KEYALIAS=":your_custom_file_alias"
export CL_PASSWORD=":your_custom_file_password"
```

Replace `:your_custom_file_name.p12`, `:your_custom_file_alias`, and `:your_custom_file_password` with your specific file name, alias, and password, respectively.

### Step 3: Generate Your Custom .p12 File
Execute the following command to generate your custom .p12 file:

```bash
java -jar cl-keytool.jar generate
```

This will create a .p12 file in the directory from which the command was executed.

### Step 4: Repeat the Process
Repeat steps 2 and 3 two more times to create a total of three custom p12 files. Remember to change the file name each time to avoid overwriting any existing files.

## Finding Your Node IDs
Your node ID is the public key of your wallet which will be stored as a p12 file. 

:::caution
If using a Euclid Development Environment project, you must update your configuration to use your own custom p12 files. Projects submitted with the default p12 files that come with the project will be rejected. 

**[How to generate p12 files](/sdk/guides/generating-with-p12-files)**
:::

Download the `cl-wallet.jar` executable. This is distributed as an asset with each [release of Tessellation](https://github.com/Constellation-Labs/tessellation/releases).

Editing the details of the following variables and export to your environment. 
```bash
export CL_KEYSTORE=":your_file_name.p12"
export CL_KEYALIAS=":your_file_alias"
export CL_PASSWORD=":your_file_password"
```

Then you can run the following to get your node ID:
```
java -jar cl-wallet.jar show-id
```