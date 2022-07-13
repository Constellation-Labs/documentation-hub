import re
import os.path

DEFAULT_PREFIX = """
---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="::desc::"
  />
</head>

<intro-end />
"""


def collect(file_path, folder_path):
    content = ""
    with open(file_path, "rt") as file:
        content = file.read()

    content_parts = content.split("\n### ")

    print(":::" + file_path + ":::")

    collected = {}

    pattern = r"^\s*`([\w]+)`\s*(\w([\w\- .(),]+))\n"

    for index, part in enumerate(content_parts):

        match = re.search(pattern, part)
        if match is None:
            print("NF::" + re.sub(r"\n", "", part[0:40]))
            continue

        method = match.group(1)
        desc = match.group(2)

        content = re.sub(pattern, "", part).strip()
        print("::" + str(index) + "::" + method + "::")

        collected[method] = (
            DEFAULT_PREFIX.replace("::desc::", desc.strip())
            + "\n\n"
            + desc
            + "\n\n"
            + content
        ).strip()

        if desc.strip() == "":
            print("No Desc :: " + part)

    for key, content in collected.items():
        with open(os.path.join(folder_path, key + ".md"), "wt") as out_file:
            out_file.write(content)


collect("ethereumRPCAPI.md.bak", "ethereumRPCAPI")
collect("constellationRPCAPI.md.bak", "constellationRPCAPI")
