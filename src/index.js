import './scss/style.scss'
import './index.html'
import './js/Array-sort'
import arrayProcessingTool from './js/Array-processing-tool'
import dateDisplayFormatter from './js/Date-Display-Formatter'
import textFormatter from './js/Text-Formatter'
import stringCalculator from './js/String-calculator'

// Array processing tool
const arrayProcessingInput = document.querySelector('#array-processing-input')
const arrayProcessingOutput = document.querySelector('#array-processing-output')
const arrayProcessingSelect = document.querySelector('.array-processing .select')
const arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option')

function getSelected(options) {
  for (let option of options) {
    if (option.selected) {
      return option
    }
  }

  return null
}

function processArray(e) {
  let arr = arrayProcessingInput.value.split(',')
  let res = null
  const selected = getSelected(arrayProcessingOptions)

  if (selected === null) {
    arrayProcessingOutput.textContent = 'Select one of the processing options!'
    return
  }

  arr = arr.map(el => +el)

  switch (selected.value) {
    case 'MaxSubLong':
      res = arrayProcessingTool.getMaxSubSumLong(arr)
      break
    case 'MaxSubShort':
      res = arrayProcessingTool.getMaxSubSum(arr)
      break
    case 'Min':
      res = arrayProcessingTool.min(arr)
      break
    case 'Max':
      res = arrayProcessingTool.max(arr)
      break
    case 'Med':
      res = arrayProcessingTool.med(arr)
      break
    case 'AscSec':
      res = arrayProcessingTool.selectIncreasing(arr)
      break
    default:
      arrayProcessingOutput.textContent = 'Select one of the processing options!'
      return
  }

  arrayProcessingOutput.textContent = res
}

function runWithKeyEnter(e, fun) {
  if (e.keyCode != 13) return

  e.preventDefault()
  fun()
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

  let date = dateInput.value

  if (date === undefined || date.length < 6) {
    dateInput.value = ''
    dateInput.placeholder = 'Date must be more than 6 characters!'
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

  dateInput.placeholder = 'Enter your date'
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
  const str = inputStr.value

  const maxLength = +inputMaxLength.value || undefined
  const maxStrings = +inputMaxStr.value || undefined
  const carryover = inputCarryover.value || undefined

  outputFormattingText.textContent = textFormatter.format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  })  

  console.log( textFormatter.format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover
  }) )


}

textFormattingButton.addEventListener('click', formatText)

// String calculator 
const stringCalculatorBlock = document.querySelector('.string-calculator')
const exprInput = stringCalculatorBlock.querySelector('#calc-expr-input')
const exprOutput = stringCalculatorBlock.querySelector('#calc-expr-output')

function calculateExpr() {
  const expr = exprInput.value

  try {
    exprOutput.textContent = stringCalculator.calculateExpression(expr)
    
  } catch (error) {
    exprOutput.textContent = error.message

  }
}

exprInput.addEventListener('change', calculateExpr)
exprInput.addEventListener('keydown', runWithKeyEnter.bind(this, calculateExpr))
