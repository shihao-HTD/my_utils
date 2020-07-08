(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n* 合并concat()\n  语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]])\n  功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变\n* */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (array, ...args) {\n  const arr = [...array]\n  args.forEach((arg) => {\n    if (Array.isArray(arg)) {\n      arr.push(...arg)\n    } else {\n      arr.push(arg)\n    }\n  })\n  return arr\n});\n\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declare.js":
/*!******************************!*\
  !*** ./src/array/declare.js ***!
  \******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n/*\n   自定义实现一组数组声明式方法\n     1). map()\n     2). reduce()\n     3). filter()\n     4). find()\n     5). findIndex()\n     6). every()\n     7). some()\n*/\n\nfunction map(array, callback) {\n  const arr = []\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    const result = callback(element, index)\n    arr.push(result)\n  }\n  return arr\n}\nfunction reduce(array, callback, preValue) {\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    preValue = callback(preValue, element, index)\n  }\n  return preValue\n}\nfunction filter(array, callback) {\n  const arr = []\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    const result = callback(element, index)\n    if (result) {\n      arr.push(element)\n    }\n  }\n  return arr\n}\n\nfunction find(array, callback) {\n  let result\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    const isFind = callback(element, index)\n    if (isFind) {\n      result = element\n      break\n    }\n  }\n  return result\n}\n\nfunction findIndex(array, callback) {\n  let result\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    const isFind = callback(element, index)\n    if (isFind) {\n      result = index\n      break\n    }\n  }\n  return result >= 0 ? result : -1\n}\n\nfunction every(array, callback) {\n  let result\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    result = callback(element, index)\n    if (!result) {\n      return false\n    }\n  }\n  return true\n}\n\nfunction some(array, callback) {\n  let result\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    result = callback(element, index)\n    if (result) {\n      return true\n    }\n  }\n  return false\n}\n\n\n\n//# sourceURL=webpack://aUtils/./src/array/declare.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/*\n  切片slice()\n  语法: var new_array = slice(array, [begin[, end]])\n  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\n*/\n\nfunction slice(array, begin, end) {\n  const arr = []\n  // 如果是空数组 直接返回\n  if (array.length === 0) {\n    return arr\n  }\n  // 对begin和end进行界限判定\n  begin = begin || 0\n  end = end || array.length\n\n  if (begin < 0) {\n    begin = 0\n  }\n  if (end > array.length) {\n    end = array.length\n  }\n\n  for (let i = begin; i < end; i++) {\n    const element = array[i]\n    arr.push(element)\n  }\n  return arr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n/*数组去重*/\n/*\n方法1: 利用forEach()和indexOf()\n说明: 本质是双重遍历, 效率差些\n*/\nfunction unique1(array) {\n  const arr = []\n  array.forEach((item) => {\n    if (arr.indexOf(item) === -1) {\n      arr.push(item)\n    }\n  })\n  return arr\n}\n\n/*方法2: 利用forEach() + 对象容器\n说明: 只需一重遍历, 效率高些*/\nfunction unique2(array) {\n  const arr = []\n  const objArr = {}\n  array.forEach((item) => {\n    if (!objArr[item]) {\n      arr.push(item)\n      objArr[item] = true\n    }\n  })\n  return arr\n}\n/*方法3: 利用ES6语法: from + Set 或者 ... + Set\n说明: 编码简洁*/\nfunction unique3(array) {\n  const set = new Set(array)\n  return [...set]\n  //return Array.from(set)\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n/*自定义apply方法*/\n\nfunction apply(fn, obj, args) {\n  return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(fn, obj, ...args)\n}\n\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n/*自定义bind方法*/\n\nfunction bind(fn, obj, ...args1) {\n  return (...args2) => {\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(fn, obj, ...args1, ...args2)\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\n/*自定义call方法*/\nfunction call(fn, obj, ...args) {\n  if (obj === null || obj === undefined) {\n    obj = window\n  }\n  obj.myCall = fn\n  const result = obj.myCall(...args)\n  delete obj.myCall\n  return result\n}\n\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*自定义函数防抖方法*/\nfunction debounce(callback, delay) {\n  let timeoutId = 0\n  return function (event) {\n    // 表面执行的事件回调函数\n    // 如果上一次的定时器任务还没执行 就清除定时器\n    clearTimeout(timeoutId)\n    timeoutId = setTimeout(() => {\n      // 实际执行的回调函数 并改变this和传入event\n      callback.call(this, event)\n    }, delay)\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (debounce);\n\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* 自定义函数节流方法 */\nfunction throttle(callback, delay) {\n  let oldTime = 0\n  return function (event) {\n    // 表面执行的事件回调函数\n    const currentTime = Date.now()\n    if (currentTime - oldTime > delay) {\n      /* 实际执行的事件回调函数\n       将callback的this改变为绑定事件的元素\n       参数为事件对象event */\n      callback.call(this, event)\n      // 将当前时间保存为oldTime\n      oldTime = currentTime\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (throttle);\n\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: call, apply, bind, debounce, throttle, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ })

/******/ });
});