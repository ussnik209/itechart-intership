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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Js Tasks</title>\r\n</head>\r\n\r\n<body>\r\n  <header></header>\r\n  <main class=\"container\">\r\n    <section class=\"array-processing section\">\r\n      <div class=\"array-processing__form form\" action=\"\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-processing-input\" class=\"input__title\">Array processing tool</label>\r\n          <input id=\"array-processing-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"processing-type\" id=\"processing-selection\">\r\n            <option value=\"\">Choose one of the options</option>\r\n            <option value=\"MaxSubLong\">Maximum subarray's summary O(n<sup>2</sup>)</option>\r\n            <option value=\"MaxSubShort\">Maximum subarray's summary O(n)</option>\r\n            <option value=\"Min\">Minimum value</option>\r\n            <option value=\"Max\">Maximum value</option>\r\n            <option value=\"Med\">Median value</option>\r\n            <option value=\"AscSec\">Ascending sequence of maximum length</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-processing-output\" class=\"output__title\">Result of chosen operation:</label>\r\n          <output id=\"array-processing-output\" for=\"sub-sum-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"date-formatter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"date-input\" class=\"input__title\">Date display formatter</label>\r\n          <input id=\"date-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter your date with 6 or 8 numbers\">\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-input-format\">Chose input format of date:</label>\r\n          <select name=\"input-format\" id=\"date-input-format\">\r\n            <option value=\"DDMMYYYY\">DDMMYYYY</option>\r\n            <option value=\"YYYYMMDD\">YYYYMMDD</option>\r\n            <option value=\"MMDDYYYY\">MMDDYYYY</option>\r\n            <option value=\"DDMMYY\">DDMMYY</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__select\">\r\n          <label for=\"date-output-format\">Chose output format of date:</label>\r\n          <select name=\"output-format\" id=\"date-output-format\">\r\n            <option value=\"DD-MM-YYYY\">DD-MM-YYYY</option>\r\n            <option value=\"YYYY-MM-DD\">YYYY-MM-DD</option>\r\n            <option value=\"MM-DD-YYYY\">MM-DD-YYYY</option>\r\n            <option value=\"DD-MM-YY\">DD-MM-YY</option>\r\n            <option value=\"from-now\">From now</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form__checkbox checkbox\">\r\n          <label for=\"is-text-month\" class=\"checkbox__title\">Put a checkbox if you want text format:</label>\r\n          <input type=\"checkbox\" name=\"is-text\" id=\"is-text-month\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"date-output\" class=\"output__title\">Result of formatting date:</label>\r\n          <output id=\"date-output\" for=\"date-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"text-formatting section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"string-input\" class=\"input__title\">Text formatter</label>\r\n          <input id=\"string-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter string to format\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"max-length\" class=\"input__title\">Maximum string length:</label>\r\n          <input id=\"max-length\" class=\"input__text\" type=\"number\" min=\"1\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"max-strings\" class=\"input__title\">Maximum string number:</label>\r\n          <input id=\"max-strings\" class=\"input__text\" type=\"number\" min=\"0\">\r\n        </div>\r\n        <div class=\"form__input input\">\r\n          <label for=\"carryover-input\" class=\"input__title\">Carryover</label>\r\n          <input id=\"carryover-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter character, word or sentence\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Format</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"string-output\" class=\"output__title\">Result of formatting string:</label>\r\n          <pre id=\"string-output\" for=\"string-input\" class=\"output__text\"></з>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"string-calculator section\">\r\n    <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"calc-expr-input\" class=\"input__title\">String calculator</label>\r\n          <input id=\"calc-expr-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"calc-expr-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"calc-expr-output\" for=\"date-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <section class=\"array-sort section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"array-sort-input\" class=\"input__title\">Array sort</label>\r\n          <input id=\"array-sort-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter your array with comma between numbers\">\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"sort-type\" id=\"sort-selection\">\r\n            <option value=\"bubble\">Bubble sort</option>\r\n            <option value=\"quick\">Quick sort</option>\r\n            <option value=\"choice\">Choice sort</option>\r\n            <option value=\"shaker\">Shaker sort</option>\r\n           </select>\r\n        </div>\r\n        <div class=\"form__select select\">\r\n          <select name=\"sort-dir\" class=\"sort-direction\">\r\n            <option value=\"asc\">Ascending</option>\r\n            <option value=\"desc\">Descending</option>\r\n           </select>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"array-sort-output\" class=\"output__title\">Result of sorting:</label>\r\n          <output id=\"array-sort-output\" for=\"array-sort-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"binary-converter section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"convertation-input\" class=\"input__title\">Binary converter</label>\r\n          <input id=\"convertation-input\" class=\"input__text\" type=\"text\"\r\n            placeholder=\"Enter the number to convertation\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"old-base\" class=\"input__title\">Old base:</label>\r\n          <input id=\"old-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"16\">\r\n        </div>\r\n        <div class=\"form__input\">\r\n          <label for=\"new-base\" class=\"input__title\">New base:</label>\r\n          <input id=\"new-base\" class=\"input__text\" type=\"number\" min=\"1\" max=\"16\">\r\n        </div>\r\n        <div class=\"form__start\">\r\n          <button>Convert</button>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"convertation-output\" class=\"output__title\">Result of convertation:</label>\r\n          <output id=\"convertation-output\" for=\"convertation-input\" class=\"output__text\"></output>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"caching-calculator section\">\r\n      <div class=\"form\">\r\n        <div class=\"form__input input\">\r\n          <label for=\"caching-calc-input\" class=\"input__title\">Caching calculator</label>\r\n          <input id=\"caching-calc-input\" class=\"input__text\" type=\"text\" placeholder=\"Enter mathematic expression\">\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-functions\" class=\"output__title\">Caching functions:</label>\r\n          <pre id=\"caching-functions\" class=\"output__text\" ></pre>\r\n        </div>\r\n        <div class=\"form__output output\">\r\n          <label for=\"caching-calc-output\" class=\"output__title\">Result of calculating:</label>\r\n          <output id=\"caching-calc-output\" for=\"caching-calc-input\" class=\"output__text\" ></output>\r\n        </div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n</html>";
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


/***/ }),

/***/ "./ts/array-processing-tool/Array-processing-tool.ts":
/*!***********************************************************!*\
  !*** ./ts/array-processing-tool/Array-processing-tool.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayProcessingTool": () => (/* binding */ arrayProcessingTool)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var arrayProcessingTool = {
    getMaxSubSumLong: function (arr) {
        var maxSum = 0;
        for (var i = 0, length_1 = arr.length; i < length_1; i += 1) {
            var curSum = arr[i];
            maxSum = curSum > maxSum ? curSum : maxSum;
            for (var j = i + 1; j < length_1; j += 1) {
                curSum += arr[j];
                maxSum = curSum > maxSum ? curSum : maxSum;
            }
        }
        return maxSum;
    },
    getMaxSubSum: function (arr) {
        var maxSum = 0;
        var curSum = 0;
        arr.forEach(function (el) {
            curSum = curSum + el < 0 ? 0 : curSum + el;
            maxSum = curSum > maxSum ? curSum : maxSum;
        });
        return maxSum;
    },
    sort: function (arr) {
        return arr.sort(function (a, b) { return a - b; });
    },
    min: function (arr) {
        return this.sort(arr)[0];
    },
    max: function (arr) {
        return this.sort(arr)[arr.length - 1];
    },
    med: function (arr) {
        return this.sort(arr)[Math.floor(arr.length / 2)];
    },
    selectIncreasing: function (arr) {
        if (arr.length < 2)
            return arr.length;
        var cur = {
            length: 1,
            first: 0,
        };
        var max = __assign({}, cur);
        arr.reduce(function (preEl, el, i) {
            if (el > preEl) {
                cur.length += 1;
            }
            else {
                cur.length = 1;
                cur.first = i;
            }
            if (cur.length > max.length) {
                max = __assign({}, cur);
            }
            return el;
        });
        return arr.slice(max.first, max.first + max.length);
    },
};
// module.exports = arrayProcessingTool
// const test1 = [-1, 2, 3, -9, 11],
//   test2 = [-2, -1, 1, 2],
//   test3 = [100, -9, 2, -3, 5],
//   test4 = [1, 2, 3],
//   test5 = [-1, -2, -3]
// test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
// const res = arrayProcessingTool.selectIncreasing(test6)
// console.log(res)


/***/ }),

/***/ "./ts/array-processing-tool/array-processing-tool-ui.ts":
/*!**************************************************************!*\
  !*** ./ts/array-processing-tool/array-processing-tool-ui.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");
/* harmony import */ var _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array-processing-tool */ "./ts/array-processing-tool/Array-processing-tool.ts");


var arrayProcessingInput = document.querySelector('#array-processing-input');
var arrayProcessingOutput = document.querySelector('#array-processing-output');
var arrayProcessingSelect = document.querySelector('.array-processing .select');
var arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option');
function processArray() {
    if (arrayProcessingInput.value === '') {
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
    var arrNumeric = arr.map(function (el) { return +el; });
    var isIncorrect = false;
    switch (selected.value) {
        case 'MaxSubLong':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.getMaxSubSumLong(arrNumeric);
            isIncorrect = Number.isNaN(res);
            break;
        case 'MaxSubShort':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.getMaxSubSum(arrNumeric);
            isIncorrect = Number.isNaN(res);
            break;
        case 'Min':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.min(arrNumeric);
            isIncorrect = Number.isNaN(res);
            break;
        case 'Max':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.max(arrNumeric);
            isIncorrect = Number.isNaN(res);
            break;
        case 'Med':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.med(arrNumeric);
            isIncorrect = Number.isNaN(res);
            break;
        case 'AscSec':
            res = _Array_processing_tool__WEBPACK_IMPORTED_MODULE_1__.arrayProcessingTool.selectIncreasing(arrNumeric);
            break;
        default:
            arrayProcessingOutput.textContent = 'Select one of the processing options!';
            return;
    }
    if (isIncorrect) {
        arrayProcessingOutput.textContent = 'Your input is incorrect!';
        arrayProcessingInput.focus();
    }
    else {
        arrayProcessingOutput.textContent = res;
    }
}
arrayProcessingInput.addEventListener('change', processArray);
arrayProcessingInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_0__.runWithKeyEnter.bind(undefined, processArray));
arrayProcessingSelect.addEventListener('change', processArray);


/***/ }),

/***/ "./ts/array-sort/Array-sort.ts":
/*!*************************************!*\
  !*** ./ts/array-sort/Array-sort.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arraySort": () => (/* binding */ arraySort)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arraySort = {
    bubbleSort: function (array) {
        var isSwap = false;
        var arr = __spreadArray([], array, true);
        do {
            isSwap = false;
            for (var i = 1, length_1 = arr.length; i < length_1; i += 1) {
                if (arr[i] < arr[i - 1]) {
                    this.swap(arr, i, i - 1);
                    isSwap = true;
                }
            }
        } while (isSwap);
        return arr;
    },
    quickSort: function (array, first, last) {
        if (first === void 0) { first = 0; }
        if (last === void 0) { last = array.length - 1; }
        if (last === first)
            return array;
        var arr = __spreadArray([], array, true);
        var supIndex = this.partition(arr, first, last);
        this.quickSort(arr, first, supIndex - 1);
        this.quickSort(arr, supIndex, last);
        return arr;
    },
    partition: function (arr, first, last) {
        var sup = arr[Math.floor((first + last) / 2)];
        var left = first;
        var right = last;
        while (left < right) {
            while (arr[left] < sup) {
                left += 1;
            }
            while (arr[right] > sup) {
                right -= 1;
            }
            if (left <= right) {
                this.swap(arr, left, right);
                left += 1;
                right -= 1;
            }
        }
        return left;
    },
    swap: function (array, first, second) {
        var _a;
        var arr = array;
        _a = [arr[second], arr[first]], arr[first] = _a[0], arr[second] = _a[1];
    },
    choiceSort: function (array) {
        var arr = __spreadArray([], array, true);
        for (var i = 0, length_2 = arr.length; i < length_2 - 1; i += 1) {
            var minEl = Math.min.apply(Math, arr.slice(i));
            var minIndex = arr.slice(i).indexOf(minEl) + i;
            this.swap(arr, i, minIndex);
        }
        return arr;
    },
    shakerSort: function (array) {
        if (array.length < 2)
            return array;
        var arr = __spreadArray([], array, true);
        var left = 0;
        var right = arr.length - 1;
        while (left <= right) {
            for (var i = left; i < right; i += 1) {
                if (arr[i] > arr[i + 1]) {
                    this.swap(arr, i, i + 1);
                }
            }
            right -= 1;
            for (var i = right; i > left; i -= 1) {
                if (arr[i] < arr[i - 1]) {
                    this.swap(arr, i, i - 1);
                }
            }
            left += 1;
        }
        return arr;
    },
};
// module.exports = arraySort


/***/ }),

/***/ "./ts/array-sort/array-sort-ui.ts":
/*!****************************************!*\
  !*** ./ts/array-sort/array-sort-ui.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array-sort */ "./ts/array-sort/Array-sort.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");


var arraySorting = document.querySelector('.array-sort');
var sortInput = arraySorting.querySelector('#array-sort-input');
var sortSelect = arraySorting.querySelector('#sort-selection');
var sortOutput = arraySorting.querySelector('#array-sort-output');
var sortDirectionSelect = arraySorting.querySelector('.sort-direction');
var sortTypes = sortSelect.querySelectorAll('option');
var sortDirections = sortDirectionSelect.querySelectorAll('option');
function sortArray() {
    if (sortInput.value === '') {
        sortOutput.textContent = 'Your input is empty!';
        sortInput.focus();
        return;
    }
    var arr = sortInput.value.split(',').map(function (el) { return +el; });
    var sortType = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(sortTypes);
    if (sortType === null) {
        sortOutput.textContent = 'You should choose a sort type!';
        sortSelect.focus();
        return;
    }
    var sortDir = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getSelected)(sortDirections);
    if (sortDir === null) {
        sortOutput.textContent = 'You should choose a sort direction!';
        sortDirectionSelect.focus();
        return;
    }
    var sortTypeName = sortType.value;
    var sortDirName = sortDir.value;
    var sortedArr = [];
    switch (sortTypeName) {
        case 'bubble':
            sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0__.arraySort.bubbleSort(arr);
            break;
        case 'quick':
            sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0__.arraySort.quickSort(arr);
            break;
        case 'choice':
            sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0__.arraySort.choiceSort(arr);
            break;
        case 'shaker':
            sortedArr = _Array_sort__WEBPACK_IMPORTED_MODULE_0__.arraySort.shakerSort(arr);
            break;
        default:
            throw Error('Incorrect type of sorting!');
    }
    if (sortedArr.some(function (el) { return Number.isNaN(el); })) {
        sortOutput.textContent = 'Your input is incorrect!';
        sortInput.focus();
    }
    else {
        if (sortDirName === 'desc') {
            sortedArr.reverse();
        }
        sortOutput.textContent = String(sortedArr);
    }
}
sortInput.addEventListener('change', sortArray);
sortSelect.addEventListener('change', sortArray);
sortDirectionSelect.addEventListener('change', sortArray);
sortInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_1__.runWithKeyEnter.bind(undefined, sortArray));


/***/ }),

/***/ "./ts/binary-converter/Binary-converter.ts":
/*!*************************************************!*\
  !*** ./ts/binary-converter/Binary-converter.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binaryConverter": () => (/* binding */ binaryConverter)
/* harmony export */ });
var binaryConverter = {
    letters: ['A', 'B', 'C', 'D', 'E', 'F'],
    convertToNewSystem: function (numArr, base, newBase) {
        var decNum = this.getDecNum(numArr, base);
        var newNum = [];
        if (decNum === 0)
            return [0];
        do {
            var dig = decNum % newBase;
            newNum.push(dig < 10 ? dig : this.letters[dig - 10]);
            decNum = Math.trunc(decNum / newBase);
        } while (decNum > 0);
        return newNum;
    },
    getDecNum: function (numArr, base) {
        var _this = this;
        return numArr.reduce(function (num, dig, i) {
            if (Number.isNaN(+dig)) {
                return num + (_this.letters.indexOf(dig.toUpperCase()) + 10) * Math.pow(base, i);
            }
            return num + (+dig) * Math.pow(base, i);
        }, 0);
    },
};
// module.exports = binaryConverter


/***/ }),

/***/ "./ts/binary-converter/binary-converter-ui.ts":
/*!****************************************************!*\
  !*** ./ts/binary-converter/binary-converter-ui.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Binary_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binary-converter */ "./ts/binary-converter/Binary-converter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");


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
    var numArr = convertationInput.value
        .split('')
        .reverse();
    var oldBase = Number(oldBaseInput.value);
    var newBase = Number(newBaseInput.value);
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
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isBaseFits)(numArr, oldBase)) {
        convertationOutput.textContent = 'Your input contains numbers more then old base value!';
        convertationInput.focus();
        return;
    }
    var result = _Binary_converter__WEBPACK_IMPORTED_MODULE_0__.binaryConverter.convertToNewSystem(numArr, oldBase, newBase)
        .reverse()
        .join('');
    convertationOutput.textContent = result;
}
convertationStart.addEventListener('click', convertation);


/***/ }),

/***/ "./ts/caching-calculator/Caching-calculator.ts":
/*!*****************************************************!*\
  !*** ./ts/caching-calculator/Caching-calculator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cachingCalculator": () => (/* binding */ cachingCalculator)
/* harmony export */ });
/* harmony import */ var _string_calculator_String_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string-calculator/String-calculator */ "./ts/string-calculator/String-calculator.ts");

var cachingCalculator = {
    cache: {},
    calculate: function (expr) {
        var start = Date.now();
        var result = this.cache[expr];
        if (result) {
            console.log("Caching time: ".concat(Date.now() - start, "ms"));
            var cache_1 = this.cache;
            return { result: result, cache: cache_1 };
        }
        start = Date.now();
        result = _string_calculator_String_calculator__WEBPACK_IMPORTED_MODULE_0__.stringCalculator.calculateExpression(expr);
        this.cache[expr] = result;
        console.log("Calculating time: ".concat(Date.now() - start, "ms"));
        var cache = this.cache;
        return { result: result, cache: cache };
    },
};
// module.exports = cachingCalculator


/***/ }),

/***/ "./ts/caching-calculator/caching-calculator-ui.ts":
/*!********************************************************!*\
  !*** ./ts/caching-calculator/caching-calculator-ui.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");
/* harmony import */ var _Caching_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Caching-calculator */ "./ts/caching-calculator/Caching-calculator.ts");


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
        var _a = _Caching_calculator__WEBPACK_IMPORTED_MODULE_1__.cachingCalculator.calculate((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.removeWhitespace)(expr)), result = _a.result, cache = _a.cache;
        var cacheOutput = '';
        for (var _i = 0, _b = Object.keys(cache); _i < _b.length; _i++) {
            var cacheExpr = _b[_i];
            cacheOutput += "".concat(cacheExpr.split(' ').join(''), "=").concat(cache[cacheExpr], "\n");
        }
        // cache.forEach((cacheExpr) => {
        //   cacheOutput += `${cacheExpr.split(' ').join('')}=${cache[cacheExpr]}\n`
        // })
        cachingFunctionsOutput.textContent = cacheOutput;
        if (Number.isNaN(result)) {
            cachingCalcOutput.textContent = 'The entered expression is incorrect!';
            cachingCalcInput.focus();
        }
        else {
            cachingCalcOutput.textContent = String(result);
        }
    }
    catch (error) {
        cachingCalcOutput.textContent = error.message;
    }
}
cachingCalcInput.addEventListener('change', calculateWithCache);
cachingCalcInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_0__.runWithKeyEnter.bind(undefined, calculateWithCache));


/***/ }),

/***/ "./ts/date-display-formatter/Date-Display-Formatter.ts":
/*!*************************************************************!*\
  !*** ./ts/date-display-formatter/Date-Display-Formatter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateDisplayFormatter": () => (/* binding */ dateDisplayFormatter)
/* harmony export */ });
var dateDisplayFormatter = {
    months: ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
    ],
    format: function (dateStr, _a) {
        var inputExpr = _a.inputExpr, outputExpr = _a.outputExpr, isText = _a.isText;
        var input = inputExpr || 'DDMMYYYY';
        var output = outputExpr || 'DD-MM-YYYY';
        var isTextCheck = isText || false;
        var date = dateStr;
        if (typeof dateStr !== 'string') {
            date = String(date);
        }
        var _b = this.getParsedDate(date, input), day = _b.day, month = _b.month, year = _b.year;
        this.isValidDate(+day, +month, +year);
        var formattedDate = this.getFormattedDate(output, day, month, year);
        if (isTextCheck) {
            formattedDate = this.toText(formattedDate, outputExpr);
        }
        return formattedDate;
    },
    getParsedDate: function (dateStr, exprStr) {
        var expr = exprStr.split('');
        var date = dateStr;
        var year = '';
        var month = '';
        var day = '';
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
                default:
                    throw Error('Incorrect value of input format!');
            }
        });
        return {
            day: day,
            month: month,
            year: year,
        };
    },
    getFormattedDate: function (exprStr, dayInputStr, monthInputStr, yearInputStr) {
        var expr = exprStr.split('');
        expr.reverse();
        var day = dayInputStr.split('');
        var month = monthInputStr.split('');
        var year = yearInputStr.split('');
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
    toText: function (dateStr, exprStr) {
        var _this = this;
        var date = dateStr.split('-');
        var expr = exprStr.split('-');
        expr.forEach(function (el, i) {
            if (el[0] === 'M')
                date[i] = _this.monthToText(+date[i] - 1);
        });
        return date.join(' ');
    },
    monthToText: function (month) {
        return this.months[month];
    },
    fromNow: function (dateStr, inputExpr) {
        var date = String(dateStr);
        var expr = inputExpr;
        var _a = this.getParsedDate(date, expr), day = _a.day, month = _a.month, year = _a.year;
        this.isValidDate(+day, +month, +year);
        var matchingDate = new Date("".concat(year, "-").concat(month, "-").concat(day));
        var now = new Date();
        var nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var timeDif = Number(nowWithoutTime) - Number(matchingDate);
        if (timeDif === 0) {
            return 'Today';
        }
        var yearDif = Math.abs(nowWithoutTime.getFullYear() - matchingDate.getFullYear());
        var monthDif = Math.abs(nowWithoutTime.getMonth() - matchingDate.getMonth());
        var dayDif = Math.abs(nowWithoutTime.getDate() - matchingDate.getDate());
        var dateDif = '';
        if (yearDif) {
            dateDif += " ".concat(yearDif, " year");
            if (yearDif > 1)
                dateDif += 's';
        }
        if (monthDif) {
            dateDif += " ".concat(monthDif, " month");
            if (monthDif > 1)
                dateDif += 's';
        }
        if (dayDif) {
            dateDif += " ".concat(dayDif, " day");
            if (dayDif > 1)
                dateDif += 's';
        }
        if (timeDif > 0) {
            return ("".concat(dateDif, " ago")).trim();
        }
        return ("after".concat(dateDif)).trim();
    },
    isValidDate: function (day, month, year) {
        if (year < 1970)
            throw new Error('Year should be after 1970!');
        if (month < 1 || month > 12)
            throw new Error('Month should be between 1 and 12 inclusive!');
        var testDate = new Date(year, month - 1, day);
        if (testDate.getDate() !== day)
            throw new Error('You enter incorrect day!');
    },
};
// module.exports = dateDisplayFormatter


/***/ }),

/***/ "./ts/date-display-formatter/date-display-formatter-ui.ts":
/*!****************************************************************!*\
  !*** ./ts/date-display-formatter/date-display-formatter-ui.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date-Display-Formatter */ "./ts/date-display-formatter/Date-Display-Formatter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");


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
            dateOutput.textContent = _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0__.dateDisplayFormatter.fromNow(date, inputFormat);
            return;
        }
        formattedDate = _Date_Display_Formatter__WEBPACK_IMPORTED_MODULE_0__.dateDisplayFormatter.format(date, {
            inputExpr: inputFormat,
            outputExpr: outputFormat,
            isText: isText,
        });
    }
    catch (error) {
        alert(error.message);
    }
    dateOutput.textContent = formattedDate;
}
formatButton.addEventListener('click', formateDate);


/***/ }),

/***/ "./ts/string-calculator/String-calculator.ts":
/*!***************************************************!*\
  !*** ./ts/string-calculator/String-calculator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringCalculator": () => (/* binding */ stringCalculator)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stringCalculator = {
    calculateOperation: function (leftOperand, rightOperand, operation) {
        var bDigits = String(rightOperand).length;
        var a = Number(leftOperand);
        var b = Number(rightOperand);
        var res = 0;
        switch (operation) {
            case '.':
                {
                    var fraction = a >= 0 ? b / (Math.pow(10, bDigits)) : -(b / (Math.pow(10, bDigits)));
                    res = a + fraction;
                    break;
                }
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
                if (b === 0)
                    throw new Error('Division by zero.');
                res = a / b;
                break;
            default:
                throw Error('Unknown operation used!');
        }
        return res;
    },
    calculateExpression: function (expr) {
        var operations = ['.', '*', '/', '+', '-'];
        var exprArr = expr.replace(/[0-9]+/g, '$& ')
            .replace(/[.+\-*/()]{1}/g, '$& ')
            .split(' ')
            .slice(0, -1);
        exprArr = this.processNegative(exprArr);
        var openedBrackets = [];
        var closedBrackets = [];
        for (var i = 0, len = exprArr.length; i < len; i += 1) {
            var el = exprArr[i];
            if (el === '(') {
                openedBrackets.push(i);
            }
            else if (el === ')') {
                closedBrackets.push(i);
            }
        }
        if (openedBrackets.length !== closedBrackets.length) {
            throw new Error('Brackets must be paired');
        }
        var _loop_1 = function () {
            var opened = openedBrackets.pop();
            var closed_1 = exprArr.findIndex(function (el, i) { return el === ')' && i > opened; });
            var innerBrackets = exprArr.slice(opened + 1, closed_1);
            innerBrackets = this_1.calculate(innerBrackets, operations[0]);
            innerBrackets = this_1.calculate(innerBrackets, operations.slice(1, 3));
            innerBrackets = this_1.calculate(innerBrackets, operations.slice(3));
            exprArr.splice(opened, closed_1 - opened + 1, innerBrackets[0]);
        };
        var this_1 = this;
        while (openedBrackets.length > 0) {
            _loop_1();
        }
        exprArr = this.calculate(exprArr, operations[0]);
        exprArr = this.calculate(exprArr, operations.slice(1, 3));
        exprArr = this.calculate(exprArr, operations.slice(3));
        return exprArr[0];
    },
    calculate: function (inputArr, operations) {
        var arr = __spreadArray([], inputArr, true);
        var i = 0;
        var res = 0;
        while (i < arr.length) {
            var curEl = arr[i];
            if (curEl === operations[0] || curEl === operations[1]) {
                res = this.calculateOperation(arr[i - 1], arr[i + 1], curEl);
                if (i + 1 < arr.length - 1) {
                    arr = arr.slice(0, i - 1).concat(res)
                        .concat(arr.slice(i + 2));
                }
                else {
                    arr = arr.slice(0, i - 1).concat(res);
                    return arr;
                }
                i -= 1;
            }
            i += 1;
        }
        return arr;
    },
    processNegative: function (exprInput) {
        var exprArray = __spreadArray([], exprInput, true);
        for (var i = 0, length_1 = exprArray.length; i < length_1; i += 1) {
            if (exprArray[i] === '-' && (i === 0 || Number.isNaN(+exprArray[i - 1]))) {
                exprArray.splice(i, 2, -exprArray[i + 1]);
            }
        }
        return exprArray;
    },
};
// module.exports = stringCalculator


/***/ }),

/***/ "./ts/string-calculator/string-calculator-ui.ts":
/*!******************************************************!*\
  !*** ./ts/string-calculator/string-calculator-ui.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _String_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./String-calculator */ "./ts/string-calculator/String-calculator.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./ts/utils/utils.ts");


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
        var res = _String_calculator__WEBPACK_IMPORTED_MODULE_0__.stringCalculator.calculateExpression((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.removeWhitespace)(expr));
        if (Number.isNaN(res)) {
            exprOutput.textContent = 'The entered expression is incorrect!';
            exprInput.focus();
        }
        else {
            exprOutput.textContent = res;
        }
    }
    catch (error) {
        exprOutput.textContent = error.message;
    }
}
exprInput.addEventListener('change', calculateExpr);
exprInput.addEventListener('keydown', _utils_utils__WEBPACK_IMPORTED_MODULE_1__.runWithKeyEnter.bind(undefined, calculateExpr));


/***/ }),

/***/ "./ts/text-fromatter/Text-Formatter.ts":
/*!*********************************************!*\
  !*** ./ts/text-fromatter/Text-Formatter.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textFormatter": () => (/* binding */ textFormatter)
/* harmony export */ });
var textFormatter = {
    format: function (inputStr, _a) {
        var inputMaxStrLength = _a.inputMaxStrLength, inputMaxStrAmount = _a.inputMaxStrAmount, inputCarryover = _a.inputCarryover;
        var str = inputStr;
        var maxStrLength = inputMaxStrLength;
        var maxStrAmount = inputMaxStrAmount;
        var carryover = inputCarryover;
        if (maxStrLength <= 0 || maxStrAmount <= 0) {
            return '';
        }
        if (maxStrLength) {
            str = this.getSplittedByLength(str, maxStrLength)
                .join('\n');
        }
        if (carryover) {
            var reg = new RegExp(carryover, 'g');
            str = str.replace(reg, "".concat(carryover, "\n"));
        }
        if (maxStrAmount) {
            str = str.split('\n')
                .slice(0, maxStrAmount)
                .join('\n');
        }
        return str;
    },
    getSplittedByLength: function (inputStr, maxStrLength) {
        var splittedStr = [];
        for (var i = 0; i < inputStr.length; i += maxStrLength) {
            splittedStr.push(inputStr.slice(i, i + maxStrLength));
        }
        return splittedStr;
    },
};
// module.exports = textFormatter


/***/ }),

/***/ "./ts/text-fromatter/text-formatter-ui.ts":
/*!************************************************!*\
  !*** ./ts/text-fromatter/text-formatter-ui.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text-Formatter */ "./ts/text-fromatter/Text-Formatter.ts");

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
    var maxLength = Number.isNaN(+inputMaxLength.value) ? null : +inputMaxLength.value;
    var maxStrings = Number.isNaN(+inputMaxStr.value) ? null : +inputMaxStr.value;
    var carryover = inputCarryover.value ? inputCarryover.value : null;
    outputFormattingText.textContent = _Text_Formatter__WEBPACK_IMPORTED_MODULE_0__.textFormatter.format(str, {
        inputMaxStrLength: maxLength,
        inputMaxStrAmount: maxStrings,
        inputCarryover: carryover,
    });
    // console.log(textFormatter.format(str, {
    //   inputMaxStrLength: maxLength,
    //   inputMaxStrAmount: maxStrings,
    //   inputCarryover: carryover,
    // }))
}
textFormattingButton.addEventListener('click', formatText);


/***/ }),

/***/ "./ts/utils/utils.ts":
/*!***************************!*\
  !*** ./ts/utils/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMathExpression": () => (/* binding */ isMathExpression),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumber16Dig": () => (/* binding */ isNumber16Dig),
/* harmony export */   "runWithKeyEnter": () => (/* binding */ runWithKeyEnter),
/* harmony export */   "getSelected": () => (/* binding */ getSelected),
/* harmony export */   "removeWhitespace": () => (/* binding */ removeWhitespace),
/* harmony export */   "isBaseFits": () => (/* binding */ isBaseFits)
/* harmony export */ });
function isMathExpression(str) {
    return str.match(/[0-9()+\-*/]+/);
}
function isNumber(numStr) {
    return numStr.match(/[0-9]+/);
}
function isNumber16Dig(numStr) {
    return numStr.match(/[0-9A-Fa-f]/);
}
function runWithKeyEnter(e, fun) {
    if (Number(e.keyCode) !== 13)
        return;
    e.preventDefault();
    fun();
}
function getSelected(options) {
    var optArr = Array.from(options);
    var option = optArr.find(function (opt) { return opt.selected; });
    return option;
}
function removeWhitespace(str) {
    return str.replace(/ /g, '');
}
function isBaseFits(numArr, base) {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var fitCheck = true;
    numArr.forEach(function (dig) {
        if (typeof dig !== 'number') {
            if ((letters.indexOf(dig.toUpperCase()) + 10) >= base) {
                fitCheck = false;
            }
        }
        else if (dig >= base) {
            fitCheck = false;
        }
    });
    return fitCheck;
}


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
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _ts_array_processing_tool_array_processing_tool_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/array-processing-tool/array-processing-tool-ui */ "./ts/array-processing-tool/array-processing-tool-ui.ts");
/* harmony import */ var _ts_date_display_formatter_date_display_formatter_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/date-display-formatter/date-display-formatter-ui */ "./ts/date-display-formatter/date-display-formatter-ui.ts");
/* harmony import */ var _ts_text_fromatter_text_formatter_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/text-fromatter/text-formatter-ui */ "./ts/text-fromatter/text-formatter-ui.ts");
/* harmony import */ var _ts_string_calculator_string_calculator_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/string-calculator/string-calculator-ui */ "./ts/string-calculator/string-calculator-ui.ts");
/* harmony import */ var _ts_array_sort_array_sort_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/array-sort/array-sort-ui */ "./ts/array-sort/array-sort-ui.ts");
/* harmony import */ var _ts_binary_converter_binary_converter_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ts/binary-converter/binary-converter-ui */ "./ts/binary-converter/binary-converter-ui.ts");
/* harmony import */ var _ts_caching_calculator_caching_calculator_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/caching-calculator/caching-calculator-ui */ "./ts/caching-calculator/caching-calculator-ui.ts");









console.log('This is TypeScript!');

})();

/******/ })()
;
//# sourceMappingURL=main.js.map