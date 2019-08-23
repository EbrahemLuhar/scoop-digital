/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Glider.js":
/*!**************************!*\
  !*** ./src/js/Glider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Glider =\n/*#__PURE__*/\nfunction () {\n  function Glider() {\n    _classCallCheck(this, Glider);\n\n    this.initialiseGlider();\n  }\n\n  _createClass(Glider, [{\n    key: \"initialiseGlider\",\n    value: function initialiseGlider() {\n      var elem = document.querySelector('.carousel');\n      var flkty = new Flickity(elem, {\n        freeScroll: true,\n        wrapAround: true,\n        setGallerySize: false,\n        autoPlay: true\n      });\n      flkty();\n    }\n  }]);\n\n  return Glider;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Glider);\n\n//# sourceURL=webpack:///./src/js/Glider.js?");

/***/ }),

/***/ "./src/js/Navbar.js":
/*!**************************!*\
  !*** ./src/js/Navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Navbar =\n/*#__PURE__*/\nfunction () {\n  function Navbar() {\n    _classCallCheck(this, Navbar);\n\n    this.HamburgerAnimation();\n    this.MobileDropDown();\n    this.MakeLinkBlue();\n  }\n\n  _createClass(Navbar, [{\n    key: \"HamburgerAnimation\",\n    value: function HamburgerAnimation() {\n      var mobileIcon = document.querySelector('#nav-icon1');\n      var mobileNav = document.querySelector('#mobile-menu');\n      mobileIcon.addEventListener('click', function () {\n        mobileIcon.classList.toggle('open');\n        mobileNav.classList.toggle('nav-visible');\n      });\n    }\n  }, {\n    key: \"CloseDropDowns\",\n    value: function CloseDropDowns(arg) {\n      for (var i = 0; i < arg.length; i++) {\n        arg[i].childNodes[3].style.display = \"none\";\n      }\n    }\n  }, {\n    key: \"MobileDropDown\",\n    value: function MobileDropDown() {\n      var mobileDropDownParent = document.querySelectorAll('.mobile-drop-down');\n\n      var _loop = function _loop(i) {\n        mobileDropDownParent[i].addEventListener('click', function () {\n          var dropDownStatus = mobileDropDownParent[i].childNodes[3].style.display;\n\n          if (dropDownStatus === \"flex\") {\n            mobileDropDownParent[i].childNodes[3].style.display = \"none\";\n          } else {\n            mobileDropDownParent[i].childNodes[3].style.display = \"flex\";\n          }\n        });\n      };\n\n      for (var i = 0; i < mobileDropDownParent.length; i++) {\n        _loop(i);\n      }\n    }\n  }, {\n    key: \"MakeLinkBlue\",\n    value: function MakeLinkBlue() {\n      var aboutSubLink = document.querySelector('.submenu__about');\n      var aboutNavLink = document.querySelector('.drop-down__about a');\n      var serviceSubLink = document.querySelector('.submenu__service');\n      var serviceNavLink = document.querySelector('.drop-down__service a');\n      aboutSubLink.addEventListener('mouseenter', function () {\n        aboutNavLink.classList.add('nav-hover-blue');\n      });\n      aboutSubLink.addEventListener('mouseleave', function () {\n        aboutNavLink.classList.remove('nav-hover-blue');\n      });\n      serviceSubLink.addEventListener('mouseenter', function () {\n        serviceNavLink.classList.add('nav-hover-blue');\n      });\n      serviceSubLink.addEventListener('mouseleave', function () {\n        serviceNavLink.classList.remove('nav-hover-blue');\n      });\n    }\n  }]);\n\n  return Navbar;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/js/Navbar.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Glider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Glider */ \"./src/js/Glider.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./src/js/Navbar.js\");\n// ScrollOut({\n//     threshold: 0.5\n// });\n// var rellax = new Rellax('.rellax');\n\n\nvar glider = new _Glider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar navbar = new _Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });