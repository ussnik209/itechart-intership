import './scss/style.scss'
import './index.html'
import './js/Array-sort'
import arrayProcessingTool from './js/Array-processing-tool'
import dateDisplayFormatter from './js/Date-Display-Formatter'

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

function processArrayWithEnterKey(e) {
  if (e.keyCode != 13) return

  e.preventDefault()
  processArray()
}

arrayProcessingInput.addEventListener('change', processArray)
arrayProcessingInput.addEventListener('keydown', processArrayWithEnterKey)
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
