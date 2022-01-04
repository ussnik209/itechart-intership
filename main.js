/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/array-processing-tool/Array-processing-tool.js":
/*!***********************************************************!*\
  !*** ./js/array-processing-tool/Array-processing-tool.js ***!
  \***********************************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayProcessingTool = {
  getMaxSubSumLong: function getMaxSubSumLong(arr) {
    var maxSum = 0;

    for (var i = 0, length = arr.length; i < length; i++) {
      var curSum = arr[i];
      maxSum = curSum > maxSum ? curSum : maxSum;

      for (var j = i + 1; j < length; j++) {
        curSum += arr[j];
        maxSum = curSum > maxSum ? curSum : maxSum;
      }
    }

    return maxSum;
  },
  getMaxSubSum: function getMaxSubSum(arr) {
    var maxSum = 0;
    var curSum = 0;
    arr.forEach(function (el) {
      curSum = curSum + el < 0 ? 0 : curSum + el;
      maxSum = curSum > maxSum ? curSum : maxSum;
    });
    return maxSum;
  },
  sort: function sort(arr) {
    return arr.sort(function (a, b) {
      return a - b;
    });
  },
  min: function min(arr) {
    return this.sort(arr)[0];
  },
  max: function max(arr) {
    return this.sort(arr)[arr.length - 1];
  },
  med: function med(arr) {
    return this.sort(arr)[Math.floor(arr.length / 2)];
  },
  selectIncreasing: function selectIncreasing(arr) {
    if (arr.length < 2) return arr.length;
    var cur = {
      length: 1,
      first: 0
    };

    var max = _objectSpread({}, cur);

    arr.reduce(function (preEl, el, i) {
      if (el > preEl) {
        cur.length++;
      } else {
        cur.length = 1;
        cur.first = i;
      }

      if (cur.length > max.length) {
        max = _objectSpread({}, cur);
      }

      return el;
    }); // change to slice

    return arr.splice(max.first, max.length);
  }
};
module.exports = arrayProcessingTool; // const test1 = [-1, 2, 3, -9, 11],
//   test2 = [-2, -1, 1, 2],
//   test3 = [100, -9, 2, -3, 5],
//   test4 = [1, 2, 3],
//   test5 = [-1, -2, -3]
// test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
// const res = arrayProcessingTool.selectIncreasing(test6)
// console.log(res)

/***/ }),

/***/ "./js/array-processing-tool/array-processing-tool-ui.js":
/*!**************************************************************!*\
  !*** ./js/array-processing-tool/array-processing-tool-ui.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array-processing-tool */ "./js/array-processing-tool/Array-processing-tool.js");
/* harmony import */ var _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__);


var arrayProcessingInput = document.querySelector('#array-processing-input');
var arrayProcessingOutput = document.querySelector('#array-processing-output');
var arrayProcessingSelect = document.querySelector('.array-processing .select');
var arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option');

function processArray(e) {
  if (arrayProcessingInput.value == '') {
    arrayProcessingOutput.textContent = 'Your input is empty!';
    return;
  }

  var arr = arrayProcessingInput.value.split(',');
  var res = null;
  var selected = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getSelected)(arrayProcessingOptions);

  if (selected === null) {
    arrayProcessingOutput.textContent = 'Select one of the processing options!';
    return;
  }

  arr = arr.map(function (el) {
    return +el;
  });
  var isIncorrect = false;

  switch (selected.value) {
    case 'MaxSubLong':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().getMaxSubSumLong(arr);
      isIncorrect = isNaN(res);
      break;

    case 'MaxSubShort':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().getMaxSubSum(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Min':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().min(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Max':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().max(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Med':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().med(arr);
      isIncorrect = isNaN(res);
      break;

    case 'AscSec':
      res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1___default().selectIncreasing(arr);
      break;

    default:
      arrayProcessingOutput.textContent = 'Select one of the processing options!';
      return;
  }

  if (isIncorrect) {
    arrayProcessingOutput.textContent = 'Your input is incorrect!';
    arrayProcessingInput.focus();
  } else {
    arrayProcessingOutput.textContent = res;
  }
}

arrayProcessingInput.addEventListener('change', processArray);
arrayProcessingInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_0__.runWithKeyEnter.bind(undefined, processArray));
arrayProcessingSelect.addEventListener('change', processArray);

/***/ }),

/***/ "./js/array-sort/Array-sort.js":
/*!*************************************!*\
  !*** ./js/array-sort/Array-sort.js ***!
  \*************************************/
/***/ ((module) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var arraySort = {
  bubbleSort: function bubbleSort(array) {
    var isSwap = false;

    var arr = _toConsumableArray(array);

    do {
      isSwap = false;

      for (var i = 1, length = arr.length; i < length; i++) {
        if (arr[i] < arr[i - 1]) {
          this.swap(arr, i, i - 1);
          isSwap = true;
        }
      }
    } while (isSwap);

    return arr;
  },
  quickSort: function quickSort(array) {
    var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
    if (last == first) return;

    var arr = _toConsumableArray(array);

    var supIndex = this.partition(arr, first, last);
    this.quickSort(arr, first, supIndex - 1);
    this.quickSort(arr, supIndex, last);
    return arr;
  },
  partition: function partition(arr, first, last) {
    var sup = arr[Math.floor((first + last) / 2)];
    var left = first,
        right = last;

    while (left < right) {
      while (arr[left] < sup) {
        left++;
      }

      while (arr[right] > sup) {
        right--;
      }

      if (left <= right) {
        this.swap(arr, left, right);
        left++;
        right--;
      }
    }

    return left;
  },
  swap: function swap(arr, first, second) {
    var _ref = [arr[second], arr[first]];
    arr[first] = _ref[0];
    arr[second] = _ref[1];
  },
  choiceSort: function choiceSort(array) {
    var arr = _toConsumableArray(array);

    for (var i = 0, length = arr.length; i < length - 1; i++) {
      var minEl = Math.min.apply(Math, _toConsumableArray(arr.slice(i)));
      var minIndex = arr.slice(i).indexOf(minEl) + i;
      this.swap(arr, i, minIndex);
    }

    return arr;
  },
  shakerSort: function shakerSort(array) {
    if (array.length < 2) return array;

    var arr = _toConsumableArray(array);

    var left = 0,
        right = arr.length - 1;

    while (left <= right) {
      for (var i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1);
        }
      }

      right--;

      for (var _i = right; _i > left; _i--) {
        if (arr[_i] < arr[_i - 1]) {
          this.swap(arr, _i, _i - 1);
        }
      }

      left++;
    }

    return arr;
  }
};
module.exports = arraySort;

/***/ }),

/***/ "./js/array-sort/array-sort-ui.js":
/*!****************************************!*\
  !*** ./js/array-sort/array-sort-ui.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array-sort */ "./js/array-sort/Array-sort.js");
/* harmony import */ var _Array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_1__);


var arraySorting = document.querySelector('.array-sort');
var sortInput = arraySorting.querySelector('#array-sort-input');
var sortSelecting = arraySorting.querySelector('#sort-selection');
var sortOutput = arraySorting.querySelector('#array-sort-output');
var sortDirection = arraySorting.querySelector('.sort-direction');

function sortArray() {
  if (sortInput.value === '') {
    sortOutput.textContent = 'Your input is empty!';
    sortInput.focus();
    return;
  }

  var arr = sortInput.value.split(',').map(function (el) {
    return +el;
  });
  var sortType = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(sortSelecting.children);

  if (sortType === null) {
    sortOutput.textContent = 'You should choose a sort type!';
    sortSelecting.focus();
    return;
  }

  var sortDir = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(sortDirection.children);

  if (sortDir === null) {
    sortOutput.textContent = 'You should choose a sort direction!';
    sortDirection.focus();
    return;
  }

  sortType = sortType.value;
  sortDir = sortDir.value;
  var sortedArr = [];

  switch (sortType) {
    case 'bubble':
      sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0___default().bubbleSort(arr);
      break;

    case 'quick':
      sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0___default().quickSort(arr);
      break;

    case 'choice':
      sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0___default().choiceSort(arr);
      break;

    case 'shaker':
      sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0___default().shakerSort(arr);
      break;
  }

  if (sortedArr.some(function (el) {
    return isNaN(el);
  })) {
    sortOutput.textContent = 'Your input is incorrect!';
    sortInput.focus();
  } else {
    if (sortDir === 'desc') {
      sortedArr.reverse();
    }

    sortOutput.textContent = sortedArr;
  }
}

sortInput.addEventListener('change', sortArray);
sortSelecting.addEventListener('change', sortArray);
sortDirection.addEventListener('change', sortArray);
sortInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_1__.runWithKeyEnter.bind(undefined, sortArray));

/***/ }),

/***/ "./js/binary-converter/Binary-converter.js":
/*!*************************************************!*\
  !*** ./js/binary-converter/Binary-converter.js ***!
  \*************************************************/
/***/ ((module) => {

var binaryConverter = {
  letters: ['A', 'B', 'C', 'D', 'E', 'F'],
  convertToNewSystem: function convertToNewSystem(numArr, base, newBase) {
    var decNum = this.getDecNum(numArr, base);
    var newNum = [];
    if (decNum === 0) return [0];

    do {
      var dig = decNum % newBase;
      newNum.push(dig < 10 ? dig : this.letters[dig - 10]);
      decNum = Math.trunc(decNum / newBase);
    } while (decNum > 0);

    return newNum;
  },
  getDecNum: function getDecNum(numArr, base) {
    var _this = this;

    return numArr.reduce(function (num, dig, i) {
      if (isNaN(dig)) {
        return num + (_this.letters.indexOf(dig.toUpperCase()) + 10) * Math.pow(base, i);
      } else {
        return num + +dig * Math.pow(base, i);
      }
    }, 0);
  }
};
module.exports = binaryConverter;

/***/ }),

/***/ "./js/binary-converter/binary-converter-ui.js":
/*!****************************************************!*\
  !*** ./js/binary-converter/binary-converter-ui.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Binary_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binary-converter */ "./js/binary-converter/Binary-converter.js");
/* harmony import */ var _Binary_converter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Binary_converter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_1__);


var convertationBlock = document.querySelector('.binary-converter');
var convertationInput = convertationBlock.querySelector('#convertation-input');
var oldBaseInput = convertationBlock.querySelector('#old-base');
var newBaseInput = convertationBlock.querySelector('#new-base');
var convertationOutput = convertationBlock.querySelector('#convertation-output');
var convertationStart = convertationBlock.querySelector('.form__start');

function convertation() {
  if (convertationInput.value === '') {
    convertationOutput.textContent = 'Your input is empty!';
    convertationInput.focus();
    return;
  }

  if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber16Dig)(convertationInput.value)) {
    convertationOutput.textContent = 'Your input should be number or letters A-F!';
    convertationInput.focus();
    return;
  }

  var numArr = convertationInput.value.split('').reverse('');
  var oldBase = +oldBaseInput.value;
  var newBase = +newBaseInput.value;

  if (oldBase < 2 || oldBase > 16) {
    convertationOutput.textContent = 'Old base should be number between 2 and 16 inclusive!';
    oldBaseInput.focus();
    return;
  }

  if (newBase < 2 || newBase > 16) {
    convertationOutput.textContent = 'New base should be number between 2 and 16 inclusive!';
    newBaseInput.focus();
    return;
  }

  if (!isBaseFits(numArr, oldBase)) {
    convertationOutput.textContent = 'Your input contains numbers more then old base value!';
    convertationInput.focus();
    return;
  }

  var result = _Binary_converter__WEBPACK_IMPORTED_MODULE_0___default().convertToNewSystem(numArr, oldBase, newBase).reverse().join('');
  convertationOutput.textContent = result;
}

function isBaseFits(numArr, base) {
  var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  var fitCheck = true;
  numArr.forEach(function (dig) {
    if (isNaN(dig)) {
      if (letters.indexOf(dig.toUpperCase()) + 10 >= base) {
        fitCheck = false;
      }
    } else {
      if (dig >= base) {
        fitCheck = false;
      }
    }
  });
  return fitCheck;
}

convertationStart.addEventListener('click', convertation);

/***/ }),

/***/ "./js/caching-calculator/Caching-calculator.js":
/*!*****************************************************!*\
  !*** ./js/caching-calculator/Caching-calculator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var stringCalculator = __webpack_require__(/*! ../string-calculator/String-calculator */ "./js/string-calculator/String-calculator.js");

var cachingCalculator = {
  cache: [],
  calculate: function calculate(expr) {
    var start = Date.now();
    var result = this.cache[expr];

    if (result) {
      console.log("Caching time: ".concat(Date.now() - start, "ms"));
      var _cache = this.cache;
      return {
        result: result,
        cache: _cache
      };
    }

    start = Date.now();
    result = stringCalculator.calculateExpression(expr);
    this.cache[expr] = result;
    console.log("Calculating time: ".concat(Date.now() - start, "ms"));
    var cache = this.cache;
    return {
      result: result,
      cache: cache
    };
  }
};
module.exports = cachingCalculator;

/***/ }),

/***/ "./js/caching-calculator/caching-calculator-ui.js":
/*!********************************************************!*\
  !*** ./js/caching-calculator/caching-calculator-ui.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Caching_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Caching-calculator */ "./js/caching-calculator/Caching-calculator.js");
/* harmony import */ var _Caching_calculator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Caching_calculator__WEBPACK_IMPORTED_MODULE_1__);


var cachingCalculatorBlock = document.querySelector('.caching-calculator');
var cachingCalcInput = cachingCalculatorBlock.querySelector('#caching-calc-input');
var cachingCalcOutput = cachingCalculatorBlock.querySelector('#caching-calc-output');
var cachingFunctionsOutput = cachingCalculatorBlock.querySelector('#caching-functions');

function calculateWithCache() {
  if (cachingCalcInput.value === '') {
    cachingCalcOutput.textContent = 'Your input is empty!';
    cachingCalcInput.focus();
    return;
  }

  var expr = cachingCalcInput.value;

  if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isMathExpression)(expr)) {
    cachingCalcOutput.textContent = 'Your input isn\'t mathematic expression';
    cachingCalcInput.focus();
    return;
  }

  try {
    var _cachingCalculator$ca = _Caching_calculator__WEBPACK_IMPORTED_MODULE_1___default().calculate((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.removeWhitespace)(expr)),
        result = _cachingCalculator$ca.result,
        cache = _cachingCalculator$ca.cache;

    var cacheOutput = '';

    for (var _expr in cache) {
      cacheOutput += "".concat(_expr.split(' ').join(''), "=").concat(cache[_expr], "\n");
    }

    cachingFunctionsOutput.textContent = cacheOutput;

    if (isNaN(result)) {
      cachingCalcOutput.textContent = 'The entered expression is incorrect!';
      cachingCalcInput.focus();
    } else {
      cachingCalcOutput.textContent = result;
    }
  } catch (error) {
    cachingCalcOutput.textContent = error.message;
  }
}

cachingCalcInput.addEventListener('change', calculateWithCache);
cachingCalcInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_0__.runWithKeyEnter.bind(undefined, calculateWithCache));

/***/ }),

/***/ "./js/date-display-formatter/Date-Display-Formatter.js":
/*!*************************************************************!*\
  !*** ./js/date-display-formatter/Date-Display-Formatter.js ***!
  \*************************************************************/
/***/ ((module) => {

var dateDisplayFormatter = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  format: function format(dateStr, _ref) {
    var inputExpr = _ref.inputExpr,
        outputExpr = _ref.outputExpr,
        isText = _ref.isText;
    inputExpr = inputExpr || 'DDMMYYYY';
    outputExpr = outputExpr || 'DD-MM-YYYY';
    isText = isText || false;
    if (typeof dateStr !== 'string') dateStr = String(dateStr);

    var _this$getParsedDate = this.getParsedDate(dateStr, inputExpr),
        day = _this$getParsedDate.day,
        month = _this$getParsedDate.month,
        year = _this$getParsedDate.year;

    this.isValidDate(+day, +month, +year);
    var formattedDate = this.getFormattedDate(outputExpr, day, month, year);

    if (isText) {
      formattedDate = this.toText(formattedDate, outputExpr);
    }

    return formattedDate;
  },
  getParsedDate: function getParsedDate(dateStr, exprStr) {
    var expr = exprStr.split(''),
        date = dateStr;
    var year = '',
        month = '',
        day = '';
    expr.forEach(function (el, i) {
      switch (el) {
        case 'D':
          day += date[i];
          break;

        case 'M':
          month += date[i];
          break;

        case 'Y':
          year += date[i];
          break;
      }
    });
    return {
      day: day,
      month: month,
      year: year
    };
  },
  getFormattedDate: function getFormattedDate(exprStr, dayInputStr, monthInputStr, yearInputStr) {
    var expr = exprStr.split('');
    expr.reverse();
    var day = dayInputStr.split(''),
        month = monthInputStr.split(''),
        year = yearInputStr.split('');
    expr = expr.map(function (el) {
      switch (el) {
        case 'D':
          return day.pop();

        case 'M':
          return month.pop();

        case 'Y':
          return year.pop();

        default:
          return el;
      }
    });
    return expr.reverse().join('');
  },
  toText: function toText(dateStr, exprStr) {
    var _this = this;

    var date = dateStr.split('-'),
        expr = exprStr.split('-');
    expr.forEach(function (el, i) {
      if (el[0] === 'M') date[i] = _this.monthToText(+date[i] - 1);
    });
    return date.join(' ');
  },
  monthToText: function monthToText(month) {
    return this.months[month];
  },
  fromNow: function fromNow(dateStr, inputExpr) {
    var date = String(dateStr),
        expr = inputExpr;

    var _this$getParsedDate2 = this.getParsedDate(date, expr),
        day = _this$getParsedDate2.day,
        month = _this$getParsedDate2.month,
        year = _this$getParsedDate2.year;

    var matchingDate = new Date("".concat(year, "-").concat(month, "-").concat(day));
    var now = new Date();
    var nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var timeDif = nowWithoutTime - matchingDate;

    if (timeDif === 0) {
      return 'Today';
    }

    var yearDif = Math.abs(nowWithoutTime.getFullYear() - matchingDate.getFullYear());
    var monthDif = Math.abs(nowWithoutTime.getMonth() - matchingDate.getMonth());
    var dayDif = Math.abs(nowWithoutTime.getDate() - matchingDate.getDate());
    var dateDif = '';

    if (yearDif) {
      dateDif += " ".concat(yearDif, " year");
      if (yearDif > 1) dateDif += 's';
    }

    if (monthDif) {
      dateDif += " ".concat(monthDif, " month");
      if (monthDif > 1) dateDif += 's';
    }

    if (dayDif) {
      dateDif += " ".concat(dayDif, " day");
      if (dayDif > 1) dateDif += 's';
    }

    if (timeDif > 0) {
      return (dateDif + ' ago').trim();
    } else {
      return ('after' + dateDif).trim();
    }
  },
  isValidDate: function isValidDate(day, month, year) {
    if (year < 1970) throw new Error("Year should be before 1970!");
    if (month < 1 || month > 12) throw new Error("Month should be between 1 and 12 inclusive!");
    var testDate = new Date(year, month - 1, day);
    if (testDate.getDate() != day) throw new Error("You enter incorrect day!");
  }
};
module.exports = dateDisplayFormatter;

/***/ }),

/***/ "./js/date-display-formatter/date-display-formatter-ui.js":
/*!****************************************************************!*\
  !*** ./js/date-display-formatter/date-display-formatter-ui.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date-Display-Formatter */ "./js/date-display-formatter/Date-Display-Formatter.js");
/* harmony import */ var _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_1__);


var dateInput = document.querySelector('.date-formatter .input__text');
var inputFormats = document.querySelectorAll('#date-input-format option');
var outputFormats = document.querySelectorAll('#date-output-format option');
var formatButton = document.querySelector('.date-formatter .form__start button');
var textChecking = document.querySelector('#is-text-month');
var dateOutput = document.querySelector('.date-formatter .output__text');

function formateDate() {
  if (dateInput.value === '') {
    dateOutput.textContent = 'Your input is empty!';
    dateInput.focus();
    return;
  }

  var date = dateInput.value;

  if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(date)) {
    dateOutput.textContent = 'Your input should only contain numbers!';
    dateInput.focus();
    return;
  }

  if (!(date.length === 6 || date.length === 8)) {
    dateOutput.textContent = 'Date input should be 6 or 8 numbers!';
    dateInput.focus();
    return;
  }

  var inputFormat = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(inputFormats).value;
  var outputFormat = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(outputFormats).value;
  var isText = textChecking.checked;
  var formattedDate;

  try {
    if (outputFormat === 'from-now') {
      dateOutput.textContent = _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0___default().fromNow(date, inputFormat);
      return;
    }

    formattedDate = _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0___default().format(date, {
      inputExpr: inputFormat,
      outputExpr: outputFormat,
      isText: isText
    });
  } catch (error) {
    alert(error.message);
  }

  dateOutput.textContent = formattedDate;
}

formatButton.addEventListener('click', formateDate);

/***/ }),

/***/ "./js/string-calculator/String-calculator.js":
/*!***************************************************!*\
  !*** ./js/string-calculator/String-calculator.js ***!
  \***************************************************/
/***/ ((module) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var stringCalculator = {
  calculateOperation: function calculateOperation(a, b, operation) {
    var bDigits = b.length;
    a = Number(a);
    b = Number(b);
    var res = 0;

    switch (operation) {
      case '.':
        res = a + b / (10 * bDigits);
        break;

      case '+':
        res = a + b;
        break;

      case '-':
        res = a - b;
        break;

      case '*':
        res = a * b;
        break;

      case '/':
        if (b == 0) throw new Error('Division by zero.');
        res = a / b;
        break;
    }

    return res;
  },
  calculateExpression: function calculateExpression(expr) {
    var _this = this;

    var operations = ['.', '*', '/', '+', '-'];
    exprArr = expr.replace(/[0-9]+/g, '$& ').replace(/[\.\+\-\*\/\(\)]{1}/g, '$& ').split(' ').slice(0, -1);
    exprArr = this.processNegative(exprArr);
    var openedBrackets = [];
    var closedBrackets = [];

    for (var i = 0, len = exprArr.length; i < len; i++) {
      var el = exprArr[i];

      if (el == '(') {
        openedBrackets.push(i);
      } else {
        if (el == ')') {
          closedBrackets.push(i);
        }
      }
    }

    if (openedBrackets.length != closedBrackets.length) {
      throw new Error('Brackets must be paired');
    }

    var _loop = function _loop() {
      var opened = openedBrackets.pop();
      var closed = exprArr.findIndex(function (el, i) {
        return el == ')' && i > opened;
      });
      var innerBrackets = exprArr.slice(opened + 1, closed);
      innerBrackets = _this.calculate(innerBrackets, operations[0]);
      innerBrackets = _this.calculate(innerBrackets, operations.slice(1, 3));
      innerBrackets = _this.calculate(innerBrackets, operations.slice(3));
      exprArr.splice(opened, closed - opened + 1, innerBrackets[0]);
    };

    while (openedBrackets.length > 0) {
      _loop();
    }

    exprArr = this.calculate(exprArr, operations[0]);
    exprArr = this.calculate(exprArr, operations.slice(1, 3));
    exprArr = this.calculate(exprArr, operations.slice(3));
    return exprArr[0];
  },
  calculate: function calculate(arr, operations) {
    var i = 0;
    var res = 0;

    while (i < arr.length) {
      curEl = arr[i];

      if (curEl == operations[0] || curEl == operations[1]) {
        res = this.calculateOperation(arr[i - 1], arr[i + 1], curEl);

        if (i + 1 < arr.length - 1) {
          arr = arr.slice(0, i - 1).concat(res).concat(arr.slice(i + 2));
        } else {
          arr = arr.slice(0, i - 1).concat(res);
          return arr;
        }

        i--;
      }

      i++;
    }

    return arr;
  },
  processNegative: function processNegative(exprInput) {
    var exprArray = _toConsumableArray(exprInput);

    for (var i = 0, length = exprArray.length; i < length; i++) {
      if (exprArray[i] === '-' && (i === 0 || isNaN(exprArray[i - 1]))) {
        exprArray.splice(i, 2, -exprArray[i + 1]);
      }
    }

    return exprArray;
  }
};
module.exports = stringCalculator;

/***/ }),

/***/ "./js/string-calculator/string-calculator-ui.js":
/*!******************************************************!*\
  !*** ./js/string-calculator/string-calculator-ui.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _String_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./String-calculator */ "./js/string-calculator/String-calculator.js");
/* harmony import */ var _String_calculator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_String_calculator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_1__);


var stringCalculatorBlock = document.querySelector('.string-calculator');
var exprInput = stringCalculatorBlock.querySelector('#calc-expr-input');
var exprOutput = stringCalculatorBlock.querySelector('#calc-expr-output');

function calculateExpr() {
  if (exprInput.value === '') {
    exprOutput.textContent = 'Your input is empty!';
    exprInput.focus();
    return;
  }

  var expr = exprInput.value;

  if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isMathExpression)(expr)) {
    exprOutput.textContent = 'Your input isn\'t mathematic expression';
    exprInput.focus();
    return;
  }

  try {
    var res = _String_calculator__WEBPACK_IMPORTED_MODULE_0___default().calculateExpression((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.removeWhitespace)(expr));

    if (isNaN(res)) {
      exprOutput.textContent = 'The entered expression is incorrect!';
      exprInput.focus();
    } else {
      exprOutput.textContent = res;
    }
  } catch (error) {
    exprOutput.textContent = error.message;
  }
}

exprInput.addEventListener('change', calculateExpr);
exprInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_1__.runWithKeyEnter.bind(undefined, calculateExpr));

/***/ }),

/***/ "./js/text-fromatter/Text-Formatter.js":
/*!*********************************************!*\
  !*** ./js/text-fromatter/Text-Formatter.js ***!
  \*********************************************/
/***/ ((module) => {

var textFormatter = {
  format: function format(inputStr, _ref) {
    var inputMaxStrLength = _ref.inputMaxStrLength,
        inputMaxStrAmount = _ref.inputMaxStrAmount,
        inputCarryover = _ref.inputCarryover;
    var str = inputStr,
        maxStrLength = inputMaxStrLength,
        maxStrAmount = inputMaxStrAmount,
        carryover = inputCarryover;

    if (maxStrLength === 0 || maxStrAmount === 0) {
      return '';
    }

    if (maxStrLength) {
      str = this.getSplittedByLength(str, maxStrLength).join('\n');
    }

    if (carryover) {
      var reg = new RegExp(carryover, 'g');
      str = str.replace(reg, "".concat(carryover, "\n"));
    }

    if (maxStrAmount) {
      str = str.split('\n').slice(0, maxStrAmount).join('\n');
    }

    return str;
  },
  getSplittedByLength: function getSplittedByLength(inputStr, maxStrLength) {
    var splittedStr = [];

    for (var i = 0; i < inputStr.length; i += maxStrLength) {
      splittedStr.push(inputStr.slice(i, i + maxStrLength));
    }

    return splittedStr;
  }
};
module.exports = textFormatter;

/***/ }),

/***/ "./js/text-fromatter/text-Formatter-ui.js":
/*!************************************************!*\
  !*** ./js/text-fromatter/text-Formatter-ui.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text-Formatter */ "./js/text-fromatter/Text-Formatter.js");
/* harmony import */ var _Text_Formatter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Text_Formatter__WEBPACK_IMPORTED_MODULE_0__);

var textFormattingBlock = document.querySelector('.text-formatting');
var textFormattingButton = textFormattingBlock.querySelector('.form__start button');
var inputStr = textFormattingBlock.querySelector('#string-input');
var inputMaxLength = textFormattingBlock.querySelector('#max-length');
var inputMaxStr = textFormattingBlock.querySelector('#max-strings');
var inputCarryover = textFormattingBlock.querySelector('#carryover-input');
var outputFormattingText = textFormattingBlock.querySelector('#string-output');

function formatText() {
  if (inputStr.value === '') {
    outputFormattingText.textContent = 'Your input is empty!';
    inputStr.focus();
    return;
  }

  var str = inputStr.value;
  var maxLength = isNaN(+inputMaxLength.value) ? null : +inputMaxLength.value;
  var maxStrings = isNaN(+inputMaxStr.value) ? null : +inputMaxStr.value;
  var carryover = inputCarryover.value ? null : inputCarryover.value;
  outputFormattingText.textContent = _Text_Formatter__WEBPACK_IMPORTED_MODULE_0___default().format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  });
  console.log(_Text_Formatter__WEBPACK_IMPORTED_MODULE_0___default().format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  }));
}

textFormattingButton.addEventListener('click', formatText);

/***/ }),

/***/ "./js/utils/utils.js":
/*!***************************!*\
  !*** ./js/utils/utils.js ***!
  \***************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isMathExpression(str) {
  return str.match(/[0-9\(\)\+\-\*\/]+/);
}

function isNumber(numStr) {
  return numStr.match(/[0-9]+/);
}

function isNumber16Dig(numStr) {
  return numStr.match(/[0-9A-Fa-f]/);
}

function runWithKeyEnter(e, fun) {
  if (e.keyCode != 13) return;
  e.preventDefault();
  fun();
}

function getSelected(options) {
  var _iterator = _createForOfIteratorHelper(options),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;

      if (option.selected) {
        return option;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}

function removeWhitespace(str) {
  return str.replace(/ /g, '');
}

module.exports = {
  isMathExpression: isMathExpression,
  isNumber: isNumber,
  getSelected: getSelected,
  runWithKeyEnter: runWithKeyEnter,
  removeWhitespace: removeWhitespace,
  isNumber16Dig: isNumber16Dig
};

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Js Tasks</title>\r\n</head>\r\n\r\n<body>\r\n  <header></header>\r\n  <main class=\"container\">\r\n    <section class=\"array-processing section\">\r\n      <div class=\"array-processing__form form\" action=\"\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-processing-input\" class=\"input__title\">Array processing tool</label>\r\n          <input id=\"array-processing-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"processing-type\" id=\"processing-selection\">\r\n            <option value=\"\">Choose one of the options</option>\r\n            <option value=\"MaxSubLong\">Maximum subarray's summary O(n<sup>2</sup>)</option>\r\n            <option value=\"MaxSubShort\">Maximum subarray's summary O(n)</option>\r\n            <option value=\"Min\">Minimum value</option>\r\n            <option value=\"Max\">Maximum value</option>\r\n            <option value=\"Med\">Median value</option>\r\n            <option value=\"AscSec\">Ascending sequence of maximum length</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-processing-output\" class=\"output__title\">Result of chosen operation:</label>\r\n          <output id=\"array-processing-output\" for=\"sub-sum-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"date-formatter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"date-input\" class=\"input__title\">Date display formatter</label>\r\n          <input id=\"date-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter your date with 6 or 8 numbers\">\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-input-format\">Chose input format of date:</label>\r\n          <select name=\"input-format\" id=\"date-input-format\">\r\n            <option value=\"DDMMYYYY\">DDMMYYYY</option>\r\n            <option value=\"YYYYMMDD\">YYYYMMDD</option>\r\n            <option value=\"MMDDYYYY\">MMDDYYYY</option>\r\n            <option value=\"DDMMYY\">DDMMYY</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-output-format\">Chose output format of date:</label>\r\n          <select name=\"output-format\" id=\"date-output-format\">\r\n            <option value=\"DD-MM-YYYY\">DD-MM-YYYY</option>\r\n            <option value=\"YYYY-MM-DD\">YYYY-MM-DD</option>\r\n            <option value=\"MM-DD-YYYY\">MM-DD-YYYY</option>\r\n            <option value=\"DD-MM-YY\">DD-MM-YY</option>\r\n            <option value=\"from-now\">From now</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__checkbox checkbox\">\r\n          <label for=\"is-text-month\" class=\"checkbox__title\">Put a checkbox if you want text format:</label>\r\n          <input type=\"checkbox\" name=\"is-text\" id=\"is-text-month\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"date-output\" class=\"output__title\">Result of formatting date:</label>\r\n          <output id=\"date-output\" for=\"date-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"text-formatting section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"string-input\" class=\"input__title\">Text formatter</label>\r\n          <input id=\"string-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter string to format\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"max-length\" class=\"input__title\">Maximum string length:</label>\r\n          <input id=\"max-length\" class=\"input__text\" type=\"number\" min=\"1\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"max-strings\" class=\"input__title\">Maximum string number:</label>\r\n          <input id=\"max-strings\" class=\"input__text\" type=\"number\" min=\"0\">\r\n        </div>\r\n        <div class=\"form__input input\">\r\n          <label for=\"carryover-input\" class=\"input__title\">Carryover</label>\r\n          <input id=\"carryover-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter character, word or sentence\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"string-output\" class=\"output__title\">Result of formatting string:</label>\r\n          <pre id=\"string-output\" for=\"string-input\" class=\"output__text\"></з>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"string-calculator section\">\r\n    <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"calc-expr-input\" class=\"input__title\">String calculator</label>\r\n          <input id=\"calc-expr-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"calc-expr-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"calc-expr-output\" for=\"date-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <section class=\"array-sort section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-sort-input\" class=\"input__title\">Array sort</label>\r\n          <input id=\"array-sort-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"sort-type\" id=\"sort-selection\">\r\n            <option value=\"bubble\">Bubble sort</option>\r\n            <option value=\"quick\">Quick sort</option>\r\n            <option value=\"choice\">Choice sort</option>\r\n            <option value=\"shaker\">Shaker sort</option>\r\n           </select>\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"sort-dir\" class=\"sort-direction\">\r\n            <option value=\"asc\">Ascending</option>\r\n            <option value=\"desc\">Descending</option>\r\n           </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-sort-output\" class=\"output__title\">Result of sorting:</label>\r\n          <output id=\"array-sort-output\" for=\"array-sort-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"binary-converter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"convertation-input\" class=\"input__title\">Binary converter</label>\r\n          <input id=\"convertation-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter the number to convertation\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"old-base\" class=\"input__title\">Old base:</label>\r\n          <input id=\"old-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"10\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"new-base\" class=\"input__title\">New base:</label>\r\n          <input id=\"new-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"10\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Convert</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"convertation-output\" class=\"output__title\">Result of convertation:</label>\r\n          <output id=\"convertation-output\" for=\"convertation-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"caching-calculator section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"caching-calc-input\" class=\"input__title\">Caching calculator</label>\r\n          <input id=\"caching-calc-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-functions\" class=\"output__title\">Caching functions:</label>\r\n          <pre id=\"caching-functions\" class=\"output__text\" ></pre>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-calc-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"caching-calc-output\" for=\"caching-calc-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _js_array_processing_tool_array_processing_tool_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/array-processing-tool/array-processing-tool-ui */ "./js/array-processing-tool/array-processing-tool-ui.js");
/* harmony import */ var _js_date_display_formatter_date_display_formatter_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/date-display-formatter/date-display-formatter-ui */ "./js/date-display-formatter/date-display-formatter-ui.js");
/* harmony import */ var _js_text_fromatter_text_Formatter_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/text-fromatter/text-Formatter-ui */ "./js/text-fromatter/text-Formatter-ui.js");
/* harmony import */ var _js_string_calculator_string_calculator_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/string-calculator/string-calculator-ui */ "./js/string-calculator/string-calculator-ui.js");
/* harmony import */ var _js_array_sort_array_sort_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/array-sort/array-sort-ui */ "./js/array-sort/array-sort-ui.js");
/* harmony import */ var _js_binary_converter_binary_converter_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/binary-converter/binary-converter-ui */ "./js/binary-converter/binary-converter-ui.js");
/* harmony import */ var _js_caching_calculator_caching_calculator_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/caching-calculator/caching-calculator-ui */ "./js/caching-calculator/caching-calculator-ui.js");









})();

/******/ })()
;
//# sourceMappingURL=main.js.map