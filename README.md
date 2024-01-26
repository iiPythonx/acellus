# WHATS IT DO?

- Prevents video from pausing when you switch tabs
- Allows opening inspect element without being booted
- Allows pasting into writing tutor
- Should be 100% hidden from Acellus
    - All of their JS has a pinned version in this repo, they **cannot** add some sort of detection code
    - (alternatively, acellus can just stop banning people from improving their platform)

\* **Used to allow 2x video speed, however now Acellus uses a server-side timing mechanism.**


## HOW TO USE

### Step 1: Install Resource Override
[https://github.com/kylepaulsen/ResourceOverride](https://github.com/kylepaulsen/ResourceOverride)

Setup an override with the following settings:
```
- Tab URL: *
- From: https://*.acellus.com/static/js/*
- To: https://google.com
```
You can replace `https://google.com` with any other site.  
Why? Because this will stop the unpatched script from loading due to both CSP and a mismatched content type.  

Also setup a "Change Headers" rule with the following settings:
```
- Tab URL: *
- For: https://*.acellus.com/*
- Request Headers: none
- Response Headers: Remove "Content-Security-Policy"
```


### Step 2: Install Code-Injector

[https://github.com/Lor-Saba/Code-Injector](https://github.com/Lor-Saba/Code-Injector)

Setup an injection with the following settings:
```
URL Match: (admin19.+|signin)\.acellus\.com
Files: https://cdn.jsdelivr.net/gh/iiPythonx/acellus/patched_public.js
```

#### Step 3: Force reload the page
#### Step 4: Profit
