import './scss/style.scss'
import './index.html'
import arrayProcessingTool from './js/Array-processing-tool'
import dateDisplayFormatter from './js/Date-Display-Formatter'
import textFormatter from './js/Text-Formatter'
import stringCalculator from './js/String-calculator'
import arraySort from './js/Array-sort'
import binaryConverter from './js/Binary-converter'
import cachingCalculator from './js/Caching-calculator'

// Array processing tool
const arrayProcessingInput = document.querySelector('#array-processing-input')
const arrayProcessingOutput = document.querySelector('#array-processing-output')
const arrayProcessingSelect = document.querySelector('.array-processing .select')
const arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option')

function processArray(e) {
  if (arrayProcessingInput.value == '') {
    arrayProcessingOutput.textContent = 'Your input is empty!'
    return
  }

  let arr = arrayProcessingInput.value.split(',')
  let res = null
  const selected = getSelected(arrayProcessingOptions)

  if (selected === null) {
    arrayProcessingOutput.textContent = 'Select one of the processing options!'
    return
  }

  arr = arr.map(el => +el)
  let isIncorrect = false

  switch (selected.value) {
    case 'MaxSubLong':
      res = arrayProcessingTool.getMaxSubSumLong(arr)
      isIncorrect = isNaN(res)
      break
    case 'MaxSubShort':
      res = arrayProcessingTool.getMaxSubSum(arr)
      isIncorrect = isNaN(res)
      break
    case 'Min':
      res = arrayProcessingTool.min(arr)
      isIncorrect = isNaN(res)
      break
    case 'Max':
      res = arrayProcessingTool.max(arr)
      isIncorrect = isNaN(res)
      break
    case 'Med':
      res = arrayProcessingTool.med(arr)
      isIncorrect = isNaN(res)
      break
    case 'AscSec':
      res = arrayProcessingTool.selectIncreasing(arr)
      break
    default:
      arrayProcessingOutput.textContent = 'Select one of the processing options!'
      return
  }

  if (isIncorrect) {
    arrayProcessingOutput.textContent = 'Your input is incorrect!'
    arrayProcessingInput.focus()

  } else {
    arrayProcessingOutput.textContent = res

  }
}

arrayProcessingInput.addEventListener('change', processArray)
arrayProcessingInput.addEventListener('keydown', runWithKeyEnter.bind(this, processArray))
arrayProcessingSelect.addEventListener('change', processArray)

//Date display formatter
const dateInput = document.querySelector('.date-formatter .input__text')
const inputFormats = document.querySelectorAll('#date-input-format option')
const outputFormats = document.querySelectorAll('#date-output-format option')
const formatButton = document.querySelector('.date-formatter .form__start button')
const textChecking = document.querySelector('#is-text-month')
const dateOutput = document.querySelector('.date-formatter .output__text')


function formateDate() {
  if (dateInput.value === '') {
    dateOutput.textContent = 'Your input is empty!'
    dateInput.focus()
    return
  }

  let date = dateInput.value

  if (!isNumber(date)) {
    dateOutput.textContent = 'Your input should only contain numbers!'
    dateInput.focus()
    return
  }

  if (!(date.length === 6 || date.length === 8)) {
    dateOutput.textContent = 'Date input should be 6 or 8 numbers!'
    dateInput.focus()
    return
  }

  let inputFormat = getSelected(inputFormats).value
  let outputFormat = getSelected(outputFormats).value
  let isText = textChecking.checked

  if (outputFormat === 'from-now') {
    dateOutput.textContent = dateDisplayFormatter.fromNow(date, inputFormat)
    return
  }

  let formattedDate = dateDisplayFormatter.format(date, {
    inputExpr: inputFormat,
    outputExpr: outputFormat,
    isText
  })

  dateOutput.textContent = formattedDate
}

function preventDefaultEnter(e) {
  if (e.keyCode != 13) return

  e.preventDefault()
}

formatButton.addEventListener('click', formateDate)
dateInput.addEventListener('keydown', preventDefaultEnter)


// Text formatter
const textFormattingBlock = document.querySelector('.text-formatting')
const textFormattingButton = textFormattingBlock.querySelector('.form__start button')
const inputStr = textFormattingBlock.querySelector('#string-input')
const inputMaxLength = textFormattingBlock.querySelector('#max-length')
const inputMaxStr = textFormattingBlock.querySelector('#max-strings')
const inputCarryover = textFormattingBlock.querySelector('#carryover-input')
const outputFormattingText = textFormattingBlock.querySelector('#string-output')

function formatText() {
  if (inputStr.value === '') {
    outputFormattingText.textContent = 'Your input is empty!'
    inputStr.focus()
    return
  }

  const str = inputStr.value

  const maxLength = +inputMaxLength.value || undefined
  const maxStrings = +inputMaxStr.value || undefined
  const carryover = inputCarryover.value || undefined

  outputFormattingText.textContent = textFormatter.format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  })

  console.log(textFormatter.format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  }))


}

textFormattingButton.addEventListener('click', formatText)

// String calculator 
const stringCalculatorBlock = document.querySelector('.string-calculator')
const exprInput = stringCalculatorBlock.querySelector('#calc-expr-input')
const exprOutput = stringCalculatorBlock.querySelector('#calc-expr-output')

function calculateExpr() {
  if (exprInput.value === '') {
    exprOutput.textContent = 'Your input is empty!'
    exprInput.focus()
    return
  }

  const expr = exprInput.value

  if (!isMathExpression(expr)) {
    exprOutput.textContent = 'Your input isn\'t mathematic expression'
    exprInput.focus()
    return
  }

  try {
    const res = stringCalculator.calculateExpression(expr)

    if (isNaN(res)) {
      exprOutput.textContent = 'The entered expression is incorrect!'
      exprInput.focus()

    } else {
      exprOutput.textContent = res

    }
  } catch (error) {
    exprOutput.textContent = error.message

  }
}

exprInput.addEventListener('change', calculateExpr)
exprInput.addEventListener('keydown', runWithKeyEnter.bind(this, calculateExpr))

// Array sort
const arraySorting = document.querySelector('.array-sort')
const sortInput = arraySorting.querySelector('#array-sort-input')
const sortSelecting = arraySorting.querySelector('#sort-selection')
const sortOutput = arraySorting.querySelector('#array-sort-output')

function sortArray() {
  if (sortInput.value === '') {
    sortOutput.textContent = 'Your input is empty!'
    sortInput.focus()
    return
  }

  const arr = sortInput.value.split(',').map(el => +el)
  let sortType = getSelected(sortSelecting.children)

  if (sortType === null) {
    sortOutput.textContent = 'You should choose a sort type!'
    sortInput.focus()
    return
  }

  sortType = sortType.value
  let sortedArr = []

  switch (sortType) {
    case 'bubble':
      sortedArr = arraySort.bubbleSort(arr)
      break
    case 'quick':
      sortedArr = arraySort.quickSort(arr)
      break
    case 'choice':
      sortedArr = arraySort.choiceSort(arr)
      break
    case 'shaker':
      sortedArr = arraySort.shakerSort(arr)
      break
  }

  if (sortedArr.some(el => isNaN(el))) {
    sortOutput.textContent = 'Your input is incorrect!'
    sortInput.focus()

  } else {
    sortOutput.textContent = sortedArr

  }
}

sortInput.addEventListener('change', sortArray)
sortInput.addEventListener('keydown', runWithKeyEnter.bind(this, sortArray))

// binary convertation
const convertationBlock = document.querySelector('.binary-converter')
const convertationInput = convertationBlock.querySelector('#convertation-input')
const oldBaseInput = convertationBlock.querySelector('#old-base')
const newBaseInput = convertationBlock.querySelector('#new-base')
const convertationOutput = convertationBlock.querySelector('#convertation-output')
const convertationStart = convertationBlock.querySelector('.form__start')

function convertation() {
  if (convertationInput.value === '') {
    convertationOutput.textContent = 'Your input is empty!'
    convertationInput.focus()
    return
  }

  if (!isNumber(convertationInput.value)) {
    convertationOutput.textContent = 'Your input should be number!'
    convertationInput.focus()
    return
  }

  const numArr = convertationInput.value
    .split('')
    .map(el => +el)
    .reverse('')
  const oldBase = +oldBaseInput.value
  const newBase = +newBaseInput.value

  if (oldBase < 2 || oldBase > 10) {
    convertationOutput.textContent = 'Old base should be number between 2 and 10 inclusive!'
    oldBaseInput.focus()
    return
  }
  
  if (newBase < 2 || newBase > 10) {
    convertationOutput.textContent = 'New base should be number between 2 and 10 inclusive!'
    newBaseInput.focus()
    return
  }

  if (numArr.some(num => num >= oldBase)) {
    convertationOutput.textContent = 'Your input contains numbers more then old base value!'
    convertationInput.focus()
    return
  }

  let result = binaryConverter.convertToNewSystem(numArr, oldBase, newBase)
    .reverse()
    .join('')

  convertationOutput.textContent = result
}

convertationStart.addEventListener('click', convertation)

// caching caclculator 

const cachingCalculatorBlock = document.querySelector('.caching-calculator')
const cachingCalcInput = cachingCalculatorBlock.querySelector('#caching-calc-input')
const cachingCalcOutput = cachingCalculatorBlock.querySelector('#caching-calc-output')
const cachingFunctionsOutput = cachingCalculatorBlock.querySelector('#caching-functions')

function calculateWithCache() {
  if (cachingCalcInput.value === '') {
    cachingCalcOutput.textContent = 'Your input is empty!'
    cachingCalcInput.focus()
    return
  }

  const expr = cachingCalcInput.value
  
  if (!isMathExpression(expr)) {
    cachingCalcOutput.textContent = 'Your input isn\'t mathematic expression'
    cachingCalcInput.focus()
    return
  }

  try {
    let { result, cache } = cachingCalculator.calculate(expr)
    let cacheOutput = ''


    for (let expr in cache) {
      cacheOutput += `${expr.split(' ').join('')}=${cache[expr]}\n`
    }

    cachingFunctionsOutput.textContent = cacheOutput
    if (isNaN(result)) {
      cachingCalcOutput.textContent = 'The entered expression is incorrect!'
      cachingCalcInput.focus()

    } else {
      cachingCalcOutput.textContent = result

    }

  } catch (error) {
    cachingCalcOutput.textContent = error.message

  }
}

cachingCalcInput.addEventListener('change', calculateWithCache)
cachingCalcInput.addEventListener('keydown', runWithKeyEnter.bind(this, calculateWithCache))

// common functions
function runWithKeyEnter(e, fun) {
  if (e.keyCode != 13) return

  e.preventDefault()
  fun()
}


function getSelected(options) {
  for (let option of options) {
    if (option.selected) {
      return option
    }
  }

  return null
}

function isMathExpression(str) {
  return str.match(/[0-9\(\)\+\-\*\/]+/)
}

function isNumber(numStr) {
  return numStr.match(/[0-9]+/)
}