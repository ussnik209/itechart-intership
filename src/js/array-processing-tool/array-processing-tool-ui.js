import { getSelected, runWithKeyEnter } from '../utils/utils'
import arrayProcessingTool from './Array-processing-tool'

const arrayProcessingInput = document.querySelector('#array-processing-input')
const arrayProcessingOutput = document.querySelector('#array-processing-output')
const arrayProcessingSelect = document.querySelector('.array-processing .select')
const arrayProcessingOptions = arrayProcessingSelect.querySelectorAll('option')

function processArray() {
  if (arrayProcessingInput.value === '') {
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

  arr = arr.map((el) => +el)
  let isIncorrect = false

  switch (selected.value) {
    case 'MaxSubLong':
      res = arrayProcessingTool.getMaxSubSumLong(arr)
      isIncorrect = Number.isNaN(res)
      break
    case 'MaxSubShort':
      res = arrayProcessingTool.getMaxSubSum(arr)
      isIncorrect = Number.isNaN(res)
      break
    case 'Min':
      res = arrayProcessingTool.min(arr)
      isIncorrect = Number.isNaN(res)
      break
    case 'Max':
      res = arrayProcessingTool.max(arr)
      isIncorrect = Number.isNaN(res)
      break
    case 'Med':
      res = arrayProcessingTool.med(arr)
      isIncorrect = Number.isNaN(res)
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
