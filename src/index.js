import './scss/style.scss'
import './index.html'
import './js/Array-processing-tool'
import './js/Array-sort'
import ArrayProcessingTool from './js/Array-processing-tool'


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
      res = ArrayProcessingTool.getMaxSubSumLong(arr)
      break
    case 'MaxSubShort':
      res = ArrayProcessingTool.getMaxSubSum(arr)
      break
    case 'Min':
      res = ArrayProcessingTool.min(arr)
      break
    case 'Max':
      res = ArrayProcessingTool.max(arr)
      break
    case 'Med':
      res = ArrayProcessingTool.med(arr)
      break
    case 'AscSec':
      res = ArrayProcessingTool.selectIncreasing(arr)
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