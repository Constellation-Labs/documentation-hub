---
title: Generating p12 files
sidebar_label: Generating p12 files 
slug: /guides/generating-p12-files
hide_table_of_contents: false
---

If using the Euclid Development Environment project, by default, we already have 3 default p12 files. These files are generic and only used for a quick start of the environment. To be more secure, you must update your configuration to use your own custom p12 files. Projects submitted with the default p12 files that come with the project will be rejected. 

To generate your custom p12 files (you gonna need 3 files), you should do the following:

1 - Download the `cl-keytool.jar` executable. This is distributed as an asset with each [release of Tessellation](https://github.com/Constellation-Labs/tessellation/releases). 

2 - Editing the details of the following variables and export to your environment. 
```bash
export CL_KEYSTORE=":your_1_file_name.p12"
export CL_KEYALIAS=":your_1_file_alias"
export CL_PASSWORD=":your_1_file_password"
```

3 - Run the following instruction to generate your `.p12` file:
```bash
java -jar cl-keytool.jar generate
```

4 - Your generated `.p12` file should be generated and created in the same directory that you're currently in.

You can repeat the steps above 2 more times to generate new other 2 files, totalizing 3 files at the end. Be sure to update the file name to not overwrite the current file.