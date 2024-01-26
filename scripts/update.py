# Copyright (c) 2024 iiPython

# Modules
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
