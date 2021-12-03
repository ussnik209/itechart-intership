/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"./assets/favicon.ico\" type=\"image/x-icon\">\r\n  <title>Jesus page</title>\r\n</head>\r\n\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"header__container container\">\r\n      <div class=\"header__site-name\">\r\n        <span>Sitename</span>\r\n      </div>\r\n      <nav>\r\n        <ul class=\"navigator\">\r\n          <li class=\"navigator__item\"><a href=\"#\">Home</a></li>\r\n          <li class=\"navigator__item\"><a href=\"#\">About</a></li>\r\n          <li class=\"navigator__item\"><a href=\"#\">Services</a></li>\r\n          <li class=\"navigator__item\"><a href=\"#\">Work</a></li>\r\n          <li class=\"navigator__item\"><a href=\"#\">Contact</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <main>\r\n    <section class=\"section_dark\">\r\n      <div class=\"container welcome\">   \r\n          <h1 class=\"welcome__title\">I am the way, the truth, and the life.</h1>\r\n          <p class=\"welcome__text\">No one comes to the Father except through me.</p>\r\n      </div>\r\n      <div class=\"image\">\r\n        <div class=\"image__container\">\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"\">\r\n      <div class=\"container\">\r\n        <ul class=\"row\">\r\n          <li class=\"row__column\">\r\n            <div class=\"quote\">\r\n              <div class=\"quote__icon\"></div>\r\n              <h2 class=\"quote__title\"></h2>\r\n              <p class=\"quote__text\"></p>\r\n            </div>\r\n          </li>\r\n          <li class=\"row__column\">\r\n            <div class=\"quote\">\r\n              <div class=\"quote__icon\"></div>\r\n              <h2 class=\"quote__title\"></h2>\r\n              <p class=\"quote__text\"></p>\r\n            </div>\r\n          </li>\r\n          <li class=\"row__column\">\r\n            <div class=\"quote\">\r\n              <div class=\"quote__icon\"></div>\r\n              <h2 class=\"quote__title\"></h2>\r\n              <p class=\"quote__text\"></p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <section>\r\n      <div class=\"container\"></div>\r\n    </section>\r\n    <section>\r\n      <div class=\"container\"></div>\r\n    </section>\r\n    <section>\r\n      <div class=\"container\"></div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./index.html");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map