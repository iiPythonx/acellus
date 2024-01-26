# Copyright (c) 2024 iiPython

# Initialization
with open("patched.js", "r") as fh:
    data = fh.read().replace("http://localhost:8080/pub/", "https://cdn.jsdelivr.net/gh/iiPythonx/acellus/")

with open("patched_public.js", "w+") as fh:
    fh.write(data)
