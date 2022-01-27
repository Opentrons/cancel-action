/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const https = __nccwpck_require__(687);
const options = {
  hostname: 'api.github.com',
  path: `/repos/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}/cancel`,
  headers: {
    'Authorization': `token ${process.env.INPUT_TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'actions/cancel-action'
  },
  method: 'POST'
}

const req = https.request(options, (res) => {
  res.on('data', (data) => {
    if (res.statusCode != 202) {
      let parsed = JSON.parse(data)
      console.log(`Error: ${parsed.message}`)
      process.exit(1)
    } else {
      console.log('Cancelled successfully.')
      process.exit(0)
    }
  })
})

req.on('error', (error) => {
  console.log(`HTTP Error: ${error}`)
  process.exit(1)
})

const outputMessage = () => {
  const message = core.getInput("message");
  console.log(message);
  core.setOutput("message", message);
};

outputMessage();
req.end();

})();

module.exports = __webpack_exports__;
/******/ })()
;