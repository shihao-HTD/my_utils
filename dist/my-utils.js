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

/***/ "./src/Promise/index.js":
/*!******************************!*\
  !*** ./src/Promise/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*    定义整体结构\n  Promise构造函数的实现\n  Promise.then()/catch()的实现\n  Promise.resolve()/reject()的实现\n  Promise.all/race()的实现\n  Promise.resolveDelay()/rejectDelay()的实现*/\n\nconst PENDING = \"pending\"\nconst RESOLVED = \"resolved\"\nconst REJECTED = \"rejected\"\n\nfunction Promise(excutor) {\n  const that = this\n  // 定义状态和保存的数据 以及回调队列\n  this.status = PENDING\n  this.data = undefined\n  // {onResolved,onRejected}\n  this.callbacks = []\n  // 定义resolve函数和reject函数\n  function resolve(value) {\n    // 改变状态只执行一次\n    if (that.status !== PENDING) {\n      return\n    }\n    // 改变状态并保存数据\n    that.status = RESOLVED\n    that.data = value\n    // 如果回调队列里有onResolved函数 那么执行函数并传入data数据\n    that.callbacks.forEach((obj) => {\n      setTimeout(() => {\n        obj.onResolved(value)\n      }, 0)\n    })\n  }\n  function reject(reason) {\n    // 改变状态只执行一次\n    if (that.status !== PENDING) {\n      return\n    }\n    // 改变状态并保存数据\n    that.status = REJECTED\n    that.data = reason\n    // 如果回调队列里有onRejected函数 那么执行函数并传入data数据\n    that.callbacks.forEach((obj) => {\n      setTimeout(() => {\n        obj.onRejected(reason)\n      }, 0)\n    })\n  }\n\n  try {\n    excutor(resolve, reject)\n  } catch (error) {\n    reject(error)\n  }\n}\n/*\n  1. 返回一个新的promise\n  2. 新的promise的状态由onResolved/onRejected执行的结果决定\n  1). 返回一个非promise   ===> 成功\n  2). 抛出异常  ===> 失败\n  3). 返回一个promise  ===> 与这个promise的结果一致\n  3. 在then中要对onResolved/onRejected进行处理: 根据当前promise的状态来操作\n  1). resolved: 异步调用onResolved\n  2). rejected: 异步调用onRejected\n  3). pending: 将onResolved/onRejected保存到callbacks中\n  */\n\nPromise.prototype.then = function (onResolved, onRejected) {\n  const that = this\n  // 对onResolved和onRejected进行处理 达到穿透效果\n  onResolved = typeof onResolved === \"function\" ? onResolved : (value) => value\n  onRejected =\n    typeof onRejected === \"function\"\n      ? onRejected\n      : (reason) => {\n          throw reason\n        }\n\n  return new Promise((resolve, reject) => {\n    function handleCallback(callback) {\n      try {\n        const result = callback(that.data)\n        if (result instanceof Promise) {\n          result.then(resolve, reject)\n        } else {\n          resolve(result)\n        }\n      } catch (error) {\n        reject(error)\n      }\n    }\n\n    if (this.status === RESOLVED) {\n      setTimeout(() => {\n        handleCallback(onResolved)\n      }, 0)\n    } else if (this.status === REJECTED) {\n      setTimeout(() => {\n        handleCallback(onRejected)\n      }, 0)\n    } else {\n      this.callbacks.push({\n        onResolved: (value) => handleCallback(onResolved),\n        onRejected: (reason) => handleCallback(onRejected),\n      })\n    }\n  })\n}\nPromise.prototype.catch = function (onRejected) {\n  return this.then(undefined, onRejected)\n}\n/*\n  Promise.resolve 方法: (value) => {}\n  (1) value: 成功的数据或 Promise 对象\n  说明: 返回一个成功/失败的 Promise 对象\n  * */\nPromise.resolve = function (value) {\n  return new Promise((resolve, reject) => {\n    if (value instanceof Promise) {\n      value.then(resolve, reject)\n    } else {\n      resolve(value)\n    }\n  })\n}\n/*\n  Promise.reject 方法: (reason) => {}\n  (1) reason: 失败的原因\n  说明: 返回一个失败的 Promise 对象\n  * */\nPromise.reject = function (reason) {\n  return new Promise((resolve, reject) => {\n    reject(reason)\n  })\n}\n/*\n  Promise.race 方法: (promises) => {}\n  (1) promises: 包含 n 个 Promise 的数组\n  说明: 返回一个新的 Promise, 第一个完成的 Promise 的结果状态就是最终的结果状态\n  */\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    promises.forEach((promise) => {\n      promise.then(resolve, reject)\n    })\n  })\n}\n/*\n  Promise.all 方法: (promises) => {}\n  (1) promises: 包含 n 个 Promise 的数组\n  说明: 返回一个新的 Promise, 只有所有的 Promise 都成功才成功, 只要有一个失败了就\n  直接失败\n  */\nPromise.all = function (promises) {\n  return new Promise((resolve, reject) => {\n    let values = []\n    let count = 0\n    promises.forEach((promise, index) => {\n      promise.then(\n        (value) => {\n          values[index] = value\n          count++\n          if (count === promises.length) {\n            resolve(values)\n          }\n        },\n        (reason) => {\n          reject(reason)\n        }\n      )\n    })\n  })\n}\nPromise.resolveDelay = function (value, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (value instanceof Promise) {\n        value.then(resolve, reject)\n      } else {\n        resolve(value)\n      }\n    }, time)\n  })\n}\nPromise.rejectDelay = function (reason, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(reason)\n    }, time)\n  })\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise);\n\n\n//# sourceURL=webpack://aUtils/./src/Promise/index.js?");

/***/ }),

/***/ "./src/PubSub/index.js":
/*!*****************************!*\
  !*** ./src/PubSub/index.js ***!
  \*****************************/
/*! exports provided: PubSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return PubSub; });\n/*\nPubSub 包含n个方法的对象\n1. subscribe(msgName, callback): 订阅消息\n2. publish(msgName, data): 发布异步的消息\n3. publishSync(msgName, data):  发布同步的消息\n4. unsubscribe(flag): 取消消息订阅\n*/\nconst PubSub = {\n  subscribe(msgName, callback) {\n    const { callbacks } = this\n    if (callbacks[msgName]) {\n      callbacks[msgName][++this.token] = callback\n    } else {\n      callbacks[msgName] = {}\n      callbacks[msgName][++this.token] = callback\n    }\n    return this.token\n  },\n  publish(msgName, data) {\n    const { callbacks } = this\n    setTimeout(function () {\n      if (callbacks[msgName]) {\n        for (const token in callbacks[msgName]) {\n          if (callbacks[msgName].hasOwnProperty(token)) {\n            callbacks[msgName][token](data)\n          }\n        }\n      }\n    }, 0)\n  },\n  publishSync(msgName, data) {\n    const { callbacks } = this\n    if (callbacks[msgName]) {\n      for (const token in callbacks[msgName]) {\n        if (callbacks[msgName].hasOwnProperty(token)) {\n          callbacks[msgName][token](data)\n        }\n      }\n    }\n  },\n  unsubscribe(flag) {\n    if (flag === undefined) {\n      this.callbacks = {}\n    } else if (typeof flag === \"string\") {\n      this.callbacks[flag] = null\n    } else {\n      for (const msgName in this.callbacks) {\n        if (this.callbacks.hasOwnProperty(msgName)) {\n          const msgCallbacks = this.callbacks[msgName]\n          for (const token in msgCallbacks) {\n            if (msgCallbacks.hasOwnProperty(token)) {\n              if (+token === flag) {\n                delete msgCallbacks[token]\n                return\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  callbacks: {},\n  token: 0,\n}\n\n\n//# sourceURL=webpack://aUtils/./src/PubSub/index.js?");

/***/ }),

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

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n   1. 函数的返回值为 Promise, 成功的结果为 response, 异常的结果为 error\n   2. 能处理多种类型的请求: GET/POST/PUT/DELETE\n   3. 函数的参数为一个配置对象\n   {\n   url: '', // 请求地址\n   method: '', // 请求方式 GET/POST/PUT/DELETE\n   params: {}, // GET/DELETE 请求的 query 参数\n   data: {}, // POST 或 DELETE 请求的请求体参数\n   }\n   4. 响应 json 数据自动解析为 js\n*/\nfunction axios({ method = \"GET\", url, params, data }) {\n  method = method.toUpperCase()\n  if (params) {\n    let queryString = \"\"\n    Object.keys(params).forEach((key) => {\n      queryString += `${key}=${params[key]}$`\n    })\n    // 去掉最后一个&\n    queryString = queryString.substring(0, queryString.length - 1)\n    url += \"?\" + queryString\n  }\n  return new Promise((resolve, reject) => {\n    const request = new XMLHttpRequest()\n    request.open(method, url, true)\n    if (method === \"GET\" || method === \"DELETE\") {\n      request.send()\n    } else if (method === \"POST\" || method === \"PUT\") {\n      request.setRequestHeader(\"Content-Type\", \"application/json;charset=utf-8\")\n      request.send(JSON.stringify(data))\n    }\n    request.onreadystatechange = function () {\n      if (this.readyState !== 4) {\n        return\n      }\n      const { status, statusText, response } = this\n      if (status >= 200 && status <= 299) {\n        resolve({\n          data: JSON.parse(response),\n          status,\n          statusText,\n        })\n      } else {\n        reject(new Error(\"request error status is\" + status))\n      }\n    }\n  })\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios);\n\n\n//# sourceURL=webpack://aUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/da/priority-queue.js":
/*!**********************************!*\
  !*** ./src/da/priority-queue.js ***!
  \**********************************/
/*! exports provided: PriorityQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return PriorityQueue; });\n/*\n自定义优先级队列 Queue\n*/\nfunction PriorityQueue() {\n  let arr = []\n  this.enqueue = function (data, priority) {\n    if (priority < 0 || priority > 100) {\n      throw new Error(\"优先级必须在0-100之间\")\n    }\n    if (arr.length === 0) {\n      arr.push({ data, priority })\n    } else {\n      for (let i = 0; i < arr.length; i++) {\n        if (arr[i].priority > priority) {\n          arr.splice(i, 0, { data, priority })\n          return\n        }\n      }\n      // priority是最大的 插入到最后\n      arr.push({ data, priority })\n    }\n  }\n  this.dequeue = function () {\n    return arr.shift()\n  }\n  this.size = function () {\n    return arr.length\n  }\n  this.isEmpty = function () {\n    return arr.length === 0\n  }\n  this.front = function () {\n    return arr[0]\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/da/priority-queue.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return Queue; });\n/*\n 自定义队列 Queue\n*/\nfunction Queue() {\n  let arr = []\n  this.enqueue = function (element) {\n    arr.push(element)\n  }\n  this.dequeue = function () {\n    return arr.shift()\n  }\n  this.size = function () {\n    return arr.length\n  }\n  this.isEmpty = function () {\n    return arr.length === 0\n  }\n  this.front = function () {\n    return arr[0]\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/sort.js":
/*!************************!*\
  !*** ./src/da/sort.js ***!
  \************************/
/*! exports provided: bubbleSort, selectSort, insertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return bubbleSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return selectSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return insertSort; });\n/*三种基本排序*/\n// 冒泡排序\nfunction bubbleSort(array) {\n  for (let i = 0; i < array.length; i++) {\n    for (let j = i + 1; j < array.length; j++) {\n      if (array[i] > array[j]) {\n        /*\n        const temp = array[i]\n        array[i] = array[j]\n        array[j] = temp\n        */\n        ;[array[j], array[i]] = [array[i], array[j]]\n      }\n    }\n  }\n  return array\n}\n// 选择排序\nfunction selectSort(array) {\n  for (let i = 0; i < array.length; i++) {\n    let minIndex = i\n    for (let j = i + 1; j < array.length; j++) {\n      if (array[minIndex] > array[j]) {\n        minIndex = j\n      }\n    }\n    if (minIndex !== i) {\n      // 需要交换\n      ;[array[i], array[minIndex]] = [array[minIndex], array[i]]\n    }\n  }\n  return array\n}\n// 插入排序\nfunction insertSort(array) {}\n\n\n//# sourceURL=webpack://aUtils/./src/da/sort.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return Stack; });\n/*\n自定义栈类型 Stack\n*/\nfunction Stack() {\n  let arr = []\n  this.push = function (element) {\n    arr.push(element)\n  }\n  this.pop = function () {\n    return arr.pop()\n  }\n  this.size = function () {\n    return arr.length\n  }\n  this.isEmpty = function () {\n    return arr.length === 0\n  }\n  this.peek = function () {\n    return arr[arr.length - 1]\n  }\n  this.clear = function () {\n    arr = []\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  EventBus: 包含所有功能的全局事件总线对象\n  EventBus.on(eventName, listener): 绑定事件监听\n  EventBus.emit(eventName, data): 分发事件\n  EventBus.off(eventName): 解绑事件监听\n*/\n\nconst eventBus = {\n  on(eventName, listener) {\n    if (this.callbacks[eventName] && Array.isArray(this.callbacks[eventName])) {\n      // 如果callbacks里已经存在对应的事件队列 直接push\n      this.callbacks[eventName].push(listener)\n    } else {\n      // 如果不存在对应的事件队列 创建后添加进去\n      this.callbacks[eventName] = [listener]\n    }\n  },\n  off(eventName) {\n    if (eventName === undefined) {\n      this.callbacks = {}\n    } else {\n      this.callbacks[eventName] = null\n    }\n  },\n  emit(eventName, data) {\n    const { callbacks } = this\n    if (Array.isArray(callbacks[eventName])) {\n      callbacks[eventName].forEach((callback) => {\n        callback(data)\n      })\n    }\n  },\n  callbacks: {},\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventBus);\n\n\n//# sourceURL=webpack://aUtils/./src/event-bus/index.js?");

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
/*! exports provided: call, apply, bind, debounce, throttle, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice, flatten1, flatten2, flatten3, compact, chunk, difference, differences, mergeArray, pull, pullAll, drop, dropRight, newInstance, myInstanceOf, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, reverseString, palindrome, truncate, Stack, Queue, PriorityQueue, bubbleSort, selectSort, insertSort, eventBus, PubSub, axios, Promise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declare__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten3\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_shallowClone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/shallowClone */ \"./src/object/shallowClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_shallowClone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_shallowClone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return _da_stack__WEBPACK_IMPORTED_MODULE_22__[\"Stack\"]; });\n\n/* harmony import */ var _da_queue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./da/queue */ \"./src/da/queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return _da_queue__WEBPACK_IMPORTED_MODULE_23__[\"Queue\"]; });\n\n/* harmony import */ var _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./da/priority-queue */ \"./src/da/priority-queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__[\"PriorityQueue\"]; });\n\n/* harmony import */ var _da_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./da/sort */ \"./src/da/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"bubbleSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"selectSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"insertSort\"]; });\n\n/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event-bus */ \"./src/event-bus/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eventBus\", function() { return _event_bus__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./PubSub */ \"./src/PubSub/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return _PubSub__WEBPACK_IMPORTED_MODULE_27__[\"PubSub\"]; });\n\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./axios */ \"./src/axios/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"axios\", function() { return _axios__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Promise */ \"./src/Promise/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Promise\", function() { return _Promise__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\n/*\n实现深拷贝\n1). 大众乞丐版\n问题1: 函数属性会丢失\n问题2: 循环引用会出错\n2). 面试基础版本\n解决问题1: 函数属性还没丢失\n3). 面试加强版本\n解决问题2: 循环引用正常\n4). 面试加强版本2(优化遍历性能)\n数组: while | for | forEach() 优于 for-in | keys()&forEach()\n对象: for-in 与 keys()&forEach() 差不多\n*/\n// 方法一 存在问题 不能拷贝函数  循环引用会出错\nfunction deepClone1(target) {\n  return JSON.parse(JSON.stringify(target))\n}\n\n// 方法二  解决了函数属性丢失的问题 尚未解决循环引用的问题\nfunction deepClone2(target) {\n  if (\n    target instanceof Array ||\n    (target !== null && typeof target === \"object\")\n  ) {\n    const cloneTarget = target instanceof Array ? [] : {}\n    for (const targetKey in target) {\n      if (target.hasOwnProperty(targetKey)) {\n        // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组\n        cloneTarget[targetKey] = deepClone2(target[targetKey])\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n/*\n方法三\n解决了: 函数属性会丢失\n解决: 循环引用会出错\n解决思路:\n    目标: 同一个对旬/数组只能被克隆1次\n    创建克隆对象前:　如果克隆对象已经存在, 直接返回\n    创建克隆对象后: 保存克隆对象\n    缓存容器结构: Map  key: target, value: cloneTaget\n*/\n\nfunction deepClone3(target, map = new Map()) {\n  if (\n    target instanceof Array ||\n    (target !== null && typeof target === \"object\")\n  ) {\n    let cloneTarget = map.get(target)\n    if (!cloneTarget) {\n      // 如果克隆对象不存在 保存克隆对象\n      cloneTarget = target instanceof Array ? [] : {}\n      map.set(target, cloneTarget)\n      for (const targetKey in target) {\n        if (target.hasOwnProperty(targetKey)) {\n          // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组\n          cloneTarget[targetKey] = deepClone3(target[targetKey], map)\n        }\n      }\n    }\n\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n/*\n优化遍历性能\n数组: while | for | forEach() 优于 for-in | keys()&forEach()\n对象: for-in 与 keys()&forEach() 差不多\n* */\nfunction deepClone4(target, map = new Map()) {\n  let cloneTarget\n  if (target instanceof Array) {\n    // 如果是数组\n    cloneTarget = map.get(target)\n    if (!cloneTarget) {\n      // 如果克隆数组不存在 保存克隆数组\n      cloneTarget = []\n      map.set(target, cloneTarget)\n      for (let i = 0; i < target.length; i++) {\n        cloneTarget[i] = deepClone4(target[i], map)\n      }\n    }\n    return cloneTarget\n  } else if (target !== null && typeof target === \"object\") {\n    // 如果是对象\n    cloneTarget = map.get(target)\n    if (!cloneTarget) {\n      // 如果克隆对象不存在 保存克隆对象\n      cloneTarget = {}\n      map.set(target, cloneTarget)\n      for (const targetKey in target) {\n        if (target.hasOwnProperty(targetKey)) {\n          // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组\n          cloneTarget[targetKey] = deepClone4(target[targetKey], map)\n        }\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

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

/***/ }),

/***/ "./src/object/shallowClone.js":
/*!************************************!*\
  !*** ./src/object/shallowClone.js ***!
  \************************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n/*实现浅拷贝\n方法一: 利用ES6语法\n方法二: 利用ES5语法*/\n\nfunction clone1(target) {\n  if (target instanceof Array) {\n    return [...target]\n  } else if (target !== null && typeof target === \"object\") {\n    return { ...target }\n  } else {\n    // 如果不是对象或者数组\n    return target\n  }\n}\nfunction clone2(target) {\n  if (\n    target instanceof Array ||\n    (target !== null && typeof target === \"object\")\n  ) {\n    const cloneTarget = target instanceof Array ? [] : {}\n    for (const targetKey in target) {\n      if (target.hasOwnProperty(targetKey)) {\n        // 如果是target自身的属性 那么就赋值给克隆的对象或者数组\n        cloneTarget[targetKey] = target[targetKey]\n      }\n    }\n    return cloneTarget\n  } else {\n    // 如果不是对象或者数组\n    return target\n  }\n}\n\n\n//# sourceURL=webpack://aUtils/./src/object/shallowClone.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n/*\n字符串处理的系列方法\n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\n*/\nfunction reverseString(str) {\n  return str.split(\"\").reverse().join(\"\")\n}\nfunction palindrome(str) {\n  return str === reverseString(str)\n}\nfunction truncate(str, num) {\n  if (str.length <= num) {\n    return str\n  }\n  return str.substring(0, num) + \"...\"\n}\n\n\n//# sourceURL=webpack://aUtils/./src/string/index.js?");

/***/ })

/******/ });
});