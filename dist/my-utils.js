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

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/*\nchunk(array, size): 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\n*/\nfunction chunk(array, size) {\n  const bigArr = []\n  let smallArr = []\n\n  // 对size进行界限判定\n  size = size || 1\n  if (size < 0) {\n    size = 1\n  }\n\n  array.forEach((item) => {\n    if (smallArr.length === 0) {\n      bigArr.push(smallArr)\n    }\n    smallArr.push(item)\n\n    if (smallArr.length === size) {\n      smallArr = []\n    }\n  })\n\n  return bigArr\n}\n\n\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/*compact(array): 返回数组中所有真值元素组成的新数组*/\nfunction compact(array) {\n  return array.filter((item) => {\n    return item\n  })\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

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

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/*\n  difference(arr1, arr2)\n  得到当前数组中所有不在arr2中的元素组成的数组(不改变原数组)\n  如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]\n*/\n\nfunction difference(arr1, arr2) {\n  const arr = []\n  // 处理边界情况\n  if (arr1.length === 0) {\n    return arr1\n  }\n  if (arr2.length === 0) {\n    return [...arr1]\n  }\n\n  arr1.forEach((item) => {\n    if (arr2.indexOf(item) === -1) {\n      arr.push(item)\n    }\n  })\n  return arr\n}\n\nfunction differences(arr1, ...args) {\n  const arr = []\n\n  // 处理边界情况\n  if (arr1.length === 0) {\n    return arr1\n  }\n  if (args.length === 0) {\n    return [...arr1]\n  }\n\n  arr1.forEach((item) => {\n    let isUnique = true\n    args.forEach((arg) => {\n      if (arg.indexOf(item) !== -1) {\n        isUnique = false\n      }\n    })\n    if (isUnique) {\n      arr.push(item)\n    }\n  })\n  return arr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/*\n  得到数组的部分元素\n  1. drop(array, count):\n  得到当前数组过滤掉左边count个后剩余元素组成的数组\n  说明: 不改变当前数组, count默认是1\n  如: drop([1,3,5,7], 2) ===> [5, 7]\n  2. dropRight(array, count):\n  得到当前数组过滤掉右边count个后剩余元素组成的数组\n  说明: 不改变当前数组, count默认是1\n  如: dropRight([1,3,5,7], 2) ===> [1, 3]\n*/\n\nfunction drop(array, count = 1) {\n  const arr = []\n  // 对count进行界限判定\n  if (count > array.length) {\n    count = array.length\n  }\n  for (let i = count; i < array.length; i++) {\n    arr.push(array[i])\n  }\n\n  return arr\n}\n\nfunction dropRight(array, count = 1) {\n  const arr = []\n  // 对count进行界限判定\n  if (count > array.length) {\n    count = array.length\n  }\n  for (let i = 0; i < array.length - count; i++) {\n    arr.push(array[i])\n  }\n\n  return arr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2, flatten3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return flatten3; });\n/*\n数组扁平化(flatten)\n1. 理解:\n  取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\n如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\n2. 实现:\n  方法一: 递归 + reduce() + concat()\n  方法二: ... + some() + concat()\n*/\n\nfunction flatten1(array) {\n  return array.reduce((pre, item) => {\n    return pre.concat(Array.isArray(item) ? flatten1(item) : item)\n  }, [])\n}\nfunction flatten2(array) {\n  const arr = []\n  array.forEach((item) => {\n    if (Array.isArray(item)) {\n      arr.push(...flatten2(item))\n    } else {\n      arr.push(item)\n    }\n  })\n  return arr\n}\n\nfunction flatten3(array) {\n  let arr = [].concat(...array)\n  while (arr.some((item) => Array.isArray(item))) {\n    arr = [].concat(...arr)\n  }\n  return arr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\n/*\nmergeArray(arr1, arr2):\n将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\n如: mergeArray([1,3,5,7,5], [5, 8]) ==> [1, 3, 5, 7, 5, 8]\n*/\nfunction mergeArray(arr1, ...args) {\n  const arr = [...arr1]\n  args.forEach((arg) => {\n    arg.forEach((item) => {\n      if (arr.indexOf(item) === -1) {\n        arr.push(item)\n      }\n    })\n  })\n\n  return arr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/*\n  删除数组中部分元素\n  1. pull(array, ...values):\n      删除原数组中与value相同的元素, 返回所有删除元素的数组\n      说明: 原数组发生了改变\n      如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]\n  2. pullAll(array, values):\n      功能与pull一致, 只是参数变为数组\n      如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]\n* */\n\nfunction pull(array, ...values) {\n  const deleteArr = []\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    if (values.indexOf(element) !== -1) {\n      // 数组中有与values中相同的元素 需要删除 并放入新数组中\n      deleteArr.push(element)\n      array.splice(index, 1)\n      index--\n    }\n  }\n  return deleteArr\n}\n\nfunction pullAll(array, values) {\n  const deleteArr = []\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index]\n    if (values.indexOf(element) !== -1) {\n      // 数组中有与values中相同的元素 需要删除 并放入新数组中\n      deleteArr.push(element)\n      array.splice(index, 1)\n      index--\n    }\n  }\n  return deleteArr\n}\n\n\n//# sourceURL=webpack://aUtils/./src/array/pull.js?");

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
/*! exports provided: call, apply, bind, debounce, throttle, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice, flatten1, flatten2, flatten3, compact, chunk, difference, differences, mergeArray, pull, pullAll, drop, dropRight, newInstance, myInstanceOf, mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten3\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/*\n  语法: object mergeObject(...objs)\n  功能: 合并多个对象, 返回一个合并后对象(不改变原对象)\n*/\nfunction mergeObject(...objs) {\n  const mergeObj = {}\n\n  objs.forEach((obj) => {\n    for (const key in obj) {\n      if (!mergeObj.hasOwnProperty(key)) {\n        mergeObj[key] = obj[key]\n      } else {\n        // 如果 mergeObj已经存在key对应的value 则将其合并为一个数组\n        mergeObj[key] = [].concat(mergeObj[key], obj[key])\n      }\n    }\n  })\n\n  return mergeObj\n}\n\n\n//# sourceURL=webpack://aUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\n/*\n自定义instanceof工具函数\n语法: myInstanceOf(obj, Type)\n功能: 判断obj是否是Type类型的实例\n实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回true, 否则返回false\n*/\n\nfunction myInstanceOf(obj, Type) {\n  let isInstance = false\n  let proto = obj.__proto__\n  while (proto) {\n    if (proto === Type.prototype) {\n      isInstance = true\n      break\n    }\n    proto = proto.__proto__\n  }\n\n  return isInstance\n}\n\n\n//# sourceURL=webpack://aUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/*\n自定义new工具函数\n语法: newInstance(Fn, ...args)\n功能: 创建Fn构造函数的实例对象\n实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\n*/\nfunction newInstance(Fn, ...args) {\n  const obj = {}\n  const result = Fn.call(obj, ...args)\n\n  /*如果result返回的类型是引用数据类型 则返回调用Fn函数后的返回值*/\n  if (\n    result !== null &&\n    (typeof result === \"object\" || typeof result === \"function\")\n  ) {\n    return result\n  }\n  // result是基本数据类型 则返回new 构造函数内部创建的对象\n  // 并且将实例对象的隐式原型指向构造函数的显示原型\n  obj.__proto__ = Fn.prototype\n\n  return obj\n}\n\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ })

/******/ });
});