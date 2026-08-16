# ss14AdminRegex.user.js
RegEx filtering for SS14.Admin log search results.

## Installation
1. [Install the userscript manager Violentmonkey](https://violentmonkey.github.io/get-it/)
2. [Click here to install the user script](https://raw.githubusercontent.com/DisposableCrewmember42/ss14AdminRegex.user.js/refs/heads/main/ss14AdminRegex.user.js)
3. If you are not a Delta-V admin or want to use the script on another server's instance as well, you will need to add a new `@match` value to the metadata block.
   1. Find `// @match https://centcom.deltav.gay/Logs*` in the script
   2. Add a new line below it for each other instance of SS14.Admin. If your instance was available under `admin.other-server.gay`, you'd add a line like this:
      `// @match https://admin.other-server.gay/Logs*`
