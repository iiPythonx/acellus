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
        (in my case I have it set to "http://localhost:8080/pub/patched.js", as I'm running pyhttpfs)

Step 3: Force reload page
Step 4: Profit
