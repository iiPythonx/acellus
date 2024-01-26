# Copyright (c) 2024 iiPython

# Modules
import json
import shutil
import requests
import subprocess
from bs4 import BeautifulSoup

# Initialization
target_uri = "https://signin.acellus.com/sign-in/student/"
with requests.get(target_uri) as acellus_html:
    tree = BeautifulSoup(acellus_html.text, "html.parser")

bundle_url = None
for script in tree.find_all("script"):
    script_src = script.get("src", "")
    if script_src.startswith("/static/"):
        bundle_url = script_src

if bundle_url is None:
    exit("Guess what? That's right. I couldn't find any webpack JS inside their login page. Lmao.")

# Save bundle
with open("raw.js", "w+") as fh:
    fh.write(requests.get("https://signin.acellus.com" + bundle_url).text)

# Handle deobfuscation
subprocess.run(["webcrack", "raw.js", "-o", "webcrack"])
shutil.move("webcrack/deobfuscated.js", "deobfuscated.js")
shutil.rmtree("webcrack")

# Handle chunks
print("Please fetch the chunk table from raw.js and paste it in here:")
chunk_table = json.loads(input("> ").replace(",", ",\"").replace(":", "\":").replace("{", "{\""))  # Convert the integer: string format into string: string
for k, v in chunk_table.items():
    filename = f"{k}.{v}.chunk.js"
    with open(f"chunk/{filename}", "wb") as fh:
        fh.write(requests.get(target_uri.split("sign-in/")[0] + "static/js/" + filename).content)
