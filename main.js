/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Array-processing-tool.js":
/*!*************************************!*\
  !*** ./js/Array-processing-tool.js ***!
  \*************************************/
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

/***/ "./js/Array-sort.js":
/*!**************************!*\
  !*** ./js/Array-sort.js ***!
  \**************************/
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
    var arr = array;

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
    var arr = array;
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
    var arr = array;

    for (var i = 0, length = arr.length; i < length - 1; i++) {
      var minEl = Math.min.apply(Math, _toConsumableArray(arr.slice(i)));
      var minIndex = arr.slice(i).indexOf(minEl) + i;
      this.swap(arr, i, minIndex);
    }

    return arr;
  },
  shakerSort: function shakerSort(array) {
    if (array.length < 2) return array;
    var arr = array;
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

/***/ "./js/Binary-converter.js":
/*!********************************!*\
  !*** ./js/Binary-converter.js ***!
  \********************************/
/***/ ((module) => {

var binaryConverter = {
  convertToNewSystem: function convertToNewSystem(numArr, base, newBase) {
    var num = this.getDecNum(numArr, base);
    var decNum = [];
    if (num === 0) return [0];

    do {
      decNum.push(num % newBase);
      num = Math.trunc(num / newBase);
    } while (num > 0);

    return decNum;
  },
  getDecNum: function getDecNum(numArr, base) {
    return numArr.reduce(function (num, dig, i) {
      return num + dig * Math.pow(base, i);
    }, 0);
  }
};
module.exports = binaryConverter;

/***/ }),

/***/ "./js/Caching-calculator.js":
/*!**********************************!*\
  !*** ./js/Caching-calculator.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var stringCalculator = __webpack_require__(/*! ./String-calculator */ "./js/String-calculator.js");

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

/***/ "./js/Date-Display-Formatter.js":
/*!**************************************!*\
  !*** ./js/Date-Display-Formatter.js ***!
  \**************************************/
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
    console.log(timeDif);

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
  }
};
module.exports = dateDisplayFormatter; // let res = DateDisplayFormatter.format('31102011', { isText: true, outputExpr: 'DD MM YYYY' })
// let res = dateDisplayFormatter.fromNow('17122021', 'DDMMYYYY')
// console.log(res)

/***/ }),

/***/ "./js/String-calculator.js":
/*!*********************************!*\
  !*** ./js/String-calculator.js ***!
  \*********************************/
/***/ ((module) => {

var stringCalculator = {
  calculateOperation: function calculateOperation(a, b, operation) {
    a = Number(a);
    b = Number(b);
    var res = 0;

    switch (operation) {
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

    var operations = ['*', '/', '+', '-'];
    expr = expr.replace(/ /g, '');
    exprArr = expr.replace(/[0-9]+/g, '$& ').replace(/[\+\-\*\/\(\)]{1}/g, '$& ').split(' ').slice(0, -1);
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
      innerBrackets = _this.calculate(innerBrackets, operations.slice(0, 2));
      innerBrackets = _this.calculate(innerBrackets, operations.slice(2));
      exprArr.splice(opened, closed - opened + 1, innerBrackets[0]);
    };

    while (openedBrackets.length > 0) {
      _loop();
    }

    exprArr = this.calculate(exprArr, operations.slice(0, 2));
    exprArr = this.calculate(exprArr, operations.slice(2));
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
  }
};
module.exports = stringCalculator;

/***/ }),

/***/ "./js/Text-Formatter.js":
/*!******************************!*\
  !*** ./js/Text-Formatter.js ***!
  \******************************/
/***/ ((module) => {

var textFormatter = {
  format: function format(inputStr, _ref) {
    var inputMaxStrLength = _ref.inputMaxStrLength,
        inputMaxStrAmount = _ref.inputMaxStrAmount,
        inputCarryover = _ref.inputCarryover;
    var str = inputStr,
        maxStrLength = inputMaxStrLength || undefined,
        maxStrAmount = inputMaxStrAmount || undefined,
        carryover = inputCarryover;

    if (maxStrLength === 0) {
      return '';
    }

    if (maxStrLength !== undefined) {
      str = this.getSplittedByLength(str, maxStrLength).join('\n');
    }

    if (carryover !== undefined) {
      var reg = new RegExp(carryover, 'g');
      str = str.replace(reg, "".concat(carryover, "\n"));
    }

    if (maxStrAmount !== undefined) {
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
module.exports = textFormatter; // let res = textFormatter.format('hi1hi1hi1hi1hi1hi1hi1hi1hi1hi1', {
//   maxStrLength: 2,
//   maxStrAmount: 4,
//   carryover: '1'
// })
// console.log(res)

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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Js Tasks</title>\r\n</head>\r\n\r\n<body>\r\n  <header></header>\r\n  <main class=\"container\">\r\n    <section class=\"array-processing section\">\r\n      <div class=\"array-processing__form form\" action=\"\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-processing-input\" class=\"input__title\">Array processing tool</label>\r\n          <input id=\"array-processing-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"processing-type\" id=\"processing-selection\">\r\n            <option value=\"\">Choose one of the options</option>\r\n            <option value=\"MaxSubLong\">Maximum subarray's summary O(n<sup>2</sup>)</option>\r\n            <option value=\"MaxSubShort\">Maximum subarray's summary O(n)</option>\r\n            <option value=\"Min\">Minimum value</option>\r\n            <option value=\"Max\">Maximum value</option>\r\n            <option value=\"Med\">Median value</option>\r\n            <option value=\"AscSec\">Ascending sequence of maximum length</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-processing-output\" class=\"output__title\">Result of chosen operation:</label>\r\n          <output id=\"array-processing-output\" for=\"sub-sum-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"date-formatter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"date-input\" class=\"input__title\">Date display formatter</label>\r\n          <input id=\"date-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter your date\">\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-input-format\">Chose input format of date:</label>\r\n          <select name=\"input-format\" id=\"date-input-format\">\r\n            <option value=\"DDMMYYYY\">DDMMYYYY</option>\r\n            <option value=\"YYYYMMDD\">YYYYMMDD</option>\r\n            <option value=\"MMDDYYYY\">MMDDYYYY</option>\r\n            <option value=\"DDMMYY\">DDMMYY</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-output-format\">Chose output format of date:</label>\r\n          <select name=\"output-format\" id=\"date-output-format\">\r\n            <option value=\"DD-MM-YYYY\">DD-MM-YYYY</option>\r\n            <option value=\"YYYY-MM-DD\">YYYY-MM-DD</option>\r\n            <option value=\"MM-DD-YYYY\">MM-DD-YYYY</option>\r\n            <option value=\"DD-MM-YY\">DD-MM-YY</option>\r\n            <option value=\"from-now\">From now</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__checkbox checkbox\">\r\n          <label for=\"is-text-month\" class=\"checkbox__title\">Put a checkbox if you want text format:</label>\r\n          <input type=\"checkbox\" name=\"is-text\" id=\"is-text-month\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"date-output\" class=\"output__title\">Result of formatting date:</label>\r\n          <output id=\"date-output\" for=\"date-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"text-formatting section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"string-input\" class=\"input__title\">Text formatter</label>\r\n          <input id=\"string-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter string to format\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"max-length\" class=\"input__title\">Maximum string length:</label>\r\n          <input id=\"max-length\" class=\"input__text\" type=\"number\" min=\"1\">\r\n        </div>\r\n        <div>\r\n          <label for=\"max-strings\" class=\"input__title\">Maximum string number:</label>\r\n          <input id=\"max-strings\" class=\"input__text\" type=\"number\" min=\"0\">\r\n        </div>\r\n        <div class=\"form__input input\">\r\n          <label for=\"carryover-input\" class=\"input__title\">Carryover</label>\r\n          <input id=\"carryover-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter character, word or sentence\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"string-output\" class=\"output__title\">Result of formatting string:</label>\r\n          <pre id=\"string-output\" for=\"string-input\" class=\"output__text\"></з>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"string-calculator section\">\r\n    <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"calc-expr-input\" class=\"input__title\">String calculator</label>\r\n          <input id=\"calc-expr-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"calc-expr-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"calc-expr-output\" for=\"date-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <section class=\"array-sort section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-sort-input\" class=\"input__title\">Array sort</label>\r\n          <input id=\"array-sort-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"sort-type\" id=\"sort-selection\">\r\n            <option value=\"bubble\">Bubble sort</option>\r\n            <option value=\"quick\">Quick sort</option>\r\n            <option value=\"choice\">Choice sort</option>\r\n            <option value=\"shaker\">Shaker sort</option>\r\n           </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-sort-output\" class=\"output__title\">Result of sorting:</label>\r\n          <output id=\"array-sort-output\" for=\"array-sort-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"binary-converter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"convertation-input\" class=\"input__title\">Binary converter</label>\r\n          <input id=\"convertation-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter the number to convertation\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"old-base\" class=\"input__title\">Old base:</label>\r\n          <input id=\"old-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"10\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"new-base\" class=\"input__title\">New base:</label>\r\n          <input id=\"new-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"10\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Convert</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"convertation-output\" class=\"output__title\">Result of convertation:</label>\r\n          <output id=\"convertation-output\" for=\"convertation-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"caching-calculator section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"caching-calc-input\" class=\"input__title\">Caching calculator</label>\r\n          <input id=\"caching-calc-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-functions\" class=\"output__title\">Caching functions:</label>\r\n          <pre id=\"caching-functions\" class=\"output__text\" ></pre>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-calc-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"caching-calc-output\" for=\"caching-calc-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n</html>";
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
/* harmony import */ var _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Array-processing-tool */ "./js/Array-processing-tool.js");
/* harmony import */ var _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Date-Display-Formatter */ "./js/Date-Display-Formatter.js");
/* harmony import */ var _js_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_Text_Formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Text-Formatter */ "./js/Text-Formatter.js");
/* harmony import */ var _js_Text_Formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_Text_Formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_String_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/String-calculator */ "./js/String-calculator.js");
/* harmony import */ var _js_String_calculator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_String_calculator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_Array_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Array-sort */ "./js/Array-sort.js");
/* harmony import */ var _js_Array_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_Array_sort__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_Binary_converter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Binary-converter */ "./js/Binary-converter.js");
/* harmony import */ var _js_Binary_converter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_Binary_converter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_Caching_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/Caching-calculator */ "./js/Caching-calculator.js");
/* harmony import */ var _js_Caching_calculator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_Caching_calculator__WEBPACK_IMPORTED_MODULE_8__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









 // Array processing tool

var arrayProcessingInput = document.querySelector('#array-processing-input');
var arrayProcessingOutput = document.querySelector('#array-processing-output');
var arrayProcessingSelect = document.querySelector('.array-processing .select');
var arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option');

function processArray(e) {
  var arr = arrayProcessingInput.value.split(',');
  var res = null;
  var selected = getSelected(arrayProcessingOptions);

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
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().getMaxSubSumLong(arr);
      isIncorrect = isNaN(res);
      break;

    case 'MaxSubShort':
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().getMaxSubSum(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Min':
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().min(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Max':
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().max(arr);
      isIncorrect = isNaN(res);
      break;

    case 'Med':
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().med(arr);
      isIncorrect = isNaN(res);
      break;

    case 'AscSec':
      res = _js_Array_processing_tool__WEBPACK_IMPORTED_MODULE_2___default().selectIncreasing(arr);
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
arrayProcessingInput.addEventListener('keydown', runWithKeyEnter.bind(undefined, processArray));
arrayProcessingSelect.addEventListener('change', processArray); //Date display formatter

var dateInput = document.querySelector('.date-formatter .input__text');
var inputFormats = document.querySelectorAll('#date-input-format option');
var outputFormats = document.querySelectorAll('#date-output-format option');
var formatButton = document.querySelector('.date-formatter .form__start button');
var textChecking = document.querySelector('#is-text-month');
var dateOutput = document.querySelector('.date-formatter .output__text');

function formateDate() {
  var date = dateInput.value;

  if (date === undefined || !(date.length === 6 || date.length === 8)) {
    dateOutput.textContent = 'Date input is incorrect!';
    dateInput.focus();
    return;
  }

  var inputFormat = getSelected(inputFormats).value;
  var outputFormat = getSelected(outputFormats).value;
  var isText = textChecking.checked;

  if (outputFormat === 'from-now') {
    dateOutput.textContent = _js_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_3___default().fromNow(date, inputFormat);
    return;
  }

  var formattedDate = _js_Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_3___default().format(date, {
    inputExpr: inputFormat,
    outputExpr: outputFormat,
    isText: isText
  });
  dateOutput.textContent = formattedDate;
}

function preventDefaultEnter(e) {
  if (e.keyCode != 13) return;
  e.preventDefault();
}

formatButton.addEventListener('click', formateDate);
dateInput.addEventListener('keydown', preventDefaultEnter); // Text formatter

var textFormattingBlock = document.querySelector('.text-formatting');
var textFormattingButton = textFormattingBlock.querySelector('.form__start button');
var inputStr = textFormattingBlock.querySelector('#string-input');
var inputMaxLength = textFormattingBlock.querySelector('#max-length');
var inputMaxStr = textFormattingBlock.querySelector('#max-strings');
var inputCarryover = textFormattingBlock.querySelector('#carryover-input');
var outputFormattingText = textFormattingBlock.querySelector('#string-output');

function formatText() {
  var str = inputStr.value;
  var maxLength = +inputMaxLength.value || undefined;
  var maxStrings = +inputMaxStr.value || undefined;
  var carryover = inputCarryover.value || undefined;
  outputFormattingText.textContent = _js_Text_Formatter__WEBPACK_IMPORTED_MODULE_4___default().format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  });
  console.log(_js_Text_Formatter__WEBPACK_IMPORTED_MODULE_4___default().format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  }));
}

textFormattingButton.addEventListener('click', formatText); // String calculator 

var stringCalculatorBlock = document.querySelector('.string-calculator');
var exprInput = stringCalculatorBlock.querySelector('#calc-expr-input');
var exprOutput = stringCalculatorBlock.querySelector('#calc-expr-output');

function calculateExpr() {
  var expr = exprInput.value;

  try {
    var res = _js_String_calculator__WEBPACK_IMPORTED_MODULE_5___default().calculateExpression(expr);

    if (isNaN(res)) {
      exprOutput.textContent = 'The entered expression is incorrect!';
    } else {
      exprOutput.textContent = res;
    }
  } catch (error) {
    exprOutput.textContent = error.message;
  }
}

exprInput.addEventListener('change', calculateExpr);
exprInput.addEventListener('keydown', runWithKeyEnter.bind(undefined, calculateExpr)); // Array sort

var arraySorting = document.querySelector('.array-sort');
var sortInput = arraySorting.querySelector('#array-sort-input');
var sortSelecting = arraySorting.querySelector('#sort-selection');
var sortOutput = arraySorting.querySelector('#array-sort-output');

function sortArray() {
  var arr = sortInput.value.split(',').map(function (el) {
    return +el;
  });
  var sortType = getSelected(sortSelecting.children);

  if (sortType === null) {
    return;
  }

  sortType = sortType.value;
  var sortedArr = [];

  switch (sortType) {
    case 'bubble':
      sortedArr = _js_Array_sort__WEBPACK_IMPORTED_MODULE_6___default().bubbleSort(arr);
      break;

    case 'quick':
      sortedArr = _js_Array_sort__WEBPACK_IMPORTED_MODULE_6___default().quickSort(arr);
      break;

    case 'choice':
      sortedArr = _js_Array_sort__WEBPACK_IMPORTED_MODULE_6___default().choiceSort(arr);
      break;

    case 'shaker':
      sortedArr = _js_Array_sort__WEBPACK_IMPORTED_MODULE_6___default().shakerSort(arr);
      break;
  }

  if (sortedArr.some(function (el) {
    return isNaN(el);
  })) {
    sortOutput.textContent = 'Your input is incorrect!';
    sortInput.focus();
  } else {
    sortOutput.textContent = sortedArr;
  }
}

sortInput.addEventListener('change', sortArray);
sortInput.addEventListener('keydown', runWithKeyEnter.bind(undefined, sortArray)); // binary convertation

var convertationBlock = document.querySelector('.binary-converter');
var convertationInput = convertationBlock.querySelector('#convertation-input');
var oldBaseInput = convertationBlock.querySelector('#old-base');
var newBaseInput = convertationBlock.querySelector('#new-base');
var convertationOutput = convertationBlock.querySelector('#convertation-output');
var convertationStart = convertationBlock.querySelector('.form__start');

function convertation() {
  if (isNaN(convertationInput.value)) {
    convertationOutput.textContent = 'Your input should be number!';
    convertationInput.focus();
    return;
  }

  var numArr = convertationInput.value.split('').map(function (el) {
    return +el;
  }).reverse('');
  var oldBase = +oldBaseInput.value;
  var newBase = +newBaseInput.value;
  var result = _js_Binary_converter__WEBPACK_IMPORTED_MODULE_7___default().convertToNewSystem(numArr, oldBase, newBase).reverse().join('');
  convertationOutput.textContent = result;
}

convertationStart.addEventListener('click', convertation); // caching caclculator 

var cachingCalculatorBlock = document.querySelector('.caching-calculator');
var cachingCalcInput = cachingCalculatorBlock.querySelector('#caching-calc-input');
var cachingCalcOutput = cachingCalculatorBlock.querySelector('#caching-calc-output');
var cachingFunctionsOutput = cachingCalculatorBlock.querySelector('#caching-functions');

function calculateWithCache() {
  var expr = cachingCalcInput.value;

  try {
    var _cachingCalculator$ca = _js_Caching_calculator__WEBPACK_IMPORTED_MODULE_8___default().calculate(expr),
        result = _cachingCalculator$ca.result,
        cache = _cachingCalculator$ca.cache;

    var cacheOutput = '';

    for (var _expr in cache) {
      cacheOutput += "".concat(_expr.split(' ').join(''), "=").concat(cache[_expr], "\n");
    }

    cachingFunctionsOutput.textContent = cacheOutput;

    if (isNaN(result)) {
      cachingCalcOutput.textContent = 'The entered expression is incorrect!';
    } else {
      cachingCalcOutput.textContent = result;
    }
  } catch (error) {
    cachingCalcOutput.textContent = error.message;
  }
}

cachingCalcInput.addEventListener('change', calculateWithCache);
cachingCalcInput.addEventListener('keydown', runWithKeyEnter.bind(undefined, calculateWithCache)); // common functions

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
})();

/******/ })()
;
//# sourceMappingURL=main.js.map