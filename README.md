# WHATS IT DO?

- Prevents video from pausing when you switch tabs
- Allows opening inspect element without being booted lmao
- Allows pasting into writing tutor (gdocs/etc)
- Removes console spam to free up some CPU
- Should be 100% hidden from Acellus
    - Edited version of the public code, so nothing can *really* be detected
    - Everything that's been removed has been swapped with null or something similar
    - (or acellus can just stop banning people from improving their platform)

\* **Used to allow 2x video speed, however now Acellus uses a server-side timing mechanism.**


## HOW TO USE

### Step 1: Install Resource Override
[https://github.com/kylepaulsen/ResourceOverride](https://github.com/kylepaulsen/ResourceOverride)

Setup an override with the following settings:
```
- Tab URL: *
- From: https://*.acellus.com/static/js/main*
- To: https://google.com
```
You can replace `https://google.com` with any other site.  
Why? Because this will stop the unpatched script from loading thanks to Acellus' retarded CSP policy.


### Step 2: Install Code-Injector

[https://github.com/Lor-Saba/Code-Injector](https://github.com/Lor-Saba/Code-Injector)

Setup an injection with the following settings:
```
URL Match: (admin19.+|signin)\.acellus\.com
Files: http://localhost:8080/pub/patched.js
```
    
**DON'T HAVE A WEBSERVER?**
1. Install [Python](https://python.org)
2. Clone the repository using git (or [download the zip](https://github.com/iiPythonx/acellus/archive/refs/heads/main.zip))
3. Install and setup [pyhttpfs](https://github.com/iiPythonx/pyhttpfs):
```sh
pip install pyhttpfs
cd acellus
pyhttpfs -l ./ -p 8080
```
4. Set the Code Injector URL to http://localhost:8080/pub/patched.js
5. Done

#### Step 3: Force reload the page
#### Step 4: Profit
