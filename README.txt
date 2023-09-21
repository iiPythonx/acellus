WHATS IT DO?
-----------------------------------

- Prevents video from pausing when you switch tabs
- Allows opening inspect element without being booted lmao
- Allows pasting into writing tutor (gdocs/etc)
- Removes console spam to free up some CPU
- Should be 100% hidden from Acellus
    - Edited version of the public code, so nothing can *really* be detected
    - Everything that's been removed has been swapped with null or something similar
    - (or acellus can just stop banning people from improving their platform)

* Used to allow 2x video speed, however now Acellus uses a server-side timing mechanism.


HOW TO USE
-----------------------------------

Step 1: Install Resource Override
https://github.com/kylepaulsen/ResourceOverride

    Setup an override with the following settings:
    - Tab URL: *
    - From: https://*.acellus.com/static/js/main*
    - To: https://google.com
           ^^^^^ or any other random website

        Why? Because this will stop the unpatched script from loading
        thanks to Acellus' retarded CSP policy.

Step 2: Install Code-Injector
https://github.com/Lor-Saba/Code-Injector

    Setup an injection with the following settings:
    - URL Match: (admin19.+|signin)\.acellus\.com
    - Files: <an url to your webserver hosting patched.js>
        
        DON'T HAVE A WEBSERVER?
         1. Install Python
         2. pip install pyhttpfs
         3. Download this repository and open it in your terminal
         4. pyhttpfs -l ./ -p 8080
         5. Set the Code Injector URL to http://localhost:8080/pub/patched.js
         6. Profit

Step 3: Force reload page
Step 4: Profit
