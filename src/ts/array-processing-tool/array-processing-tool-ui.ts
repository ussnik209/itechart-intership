import { getSelected, runWithKeyEnter } from '../utils/utils'
import { arrayProcessingTool }  from './Array-processing-tool'

const arrayProcessingInput = document.querySelector<HTMLInputElement>('#array-processing-input')
const arrayProcessingOutput = document.querySelector<HTMLOutputElement>('#array-processing-output')
const arrayProcessingSelect = document.querySelector<HTMLSelectElement>('.array-processing .select')
const arrayProcessingOptions = arrayProcessingSelect && arrayProcessingSelect.querySelectorAll('option')

function processArray() {
  if (arrayProcessingInput && arrayProcessingInput.value === '') {
    if (arrayProcessingOutput)  arrayProcessingOutput.textContent = 'Your input is empty!'
    return
  }

  let arr = arrayProcessingInput && arrayProcessingInput.value.split(',')
  let res = null
  const selected = arrayProcessingOptions && getSelected(arrayProcessingOptions)

  if (selected === null) {
    if (arrayProcessingOutput)  arrayProcessingOutput.textContent = 'Select one of the processing options!'
    return
  }

  const arrNumeric = arr && arr.map((el: string) => +el)
  let isIncorrect = false

  switch (selected && selected.value) {
    case 'MaxSubLong':
      res = arrNumeric && arrayProcessingTool.getMaxSubSumLong(arrNumeric)
      isIncorrect = Number.isNaN(res)
      break
    case 'MaxSubShort':
      res = arrNumeric && arrayProcessingTool.getMaxSubSum(arrNumeric)
      isIncorrect = Number.isNaN(res)
      break
    case 'Min':
      res = arrNumeric && arrayProcessingTool.min(arrNumeric)
      isIncorrect = Number.isNaN(res)
      break
    case 'Max':
      res = arrNumeric && arrayProcessingTool.max(arrNumeric)
      isIncorrect = Number.isNaN(res)
      break
    case 'Med':
      res = arrNumeric && arrayProcessingTool.med(arrNumeric)
      isIncorrect = Number.isNaN(res)
      break
    case 'AscSec':
      res = arrNumeric && arrayProcessingTool.selectIncreasing(arrNumeric)
      break
    default:
      if (arrayProcessingOutput) arrayProcessingOutput.textContent = 'Select one of the processing options!'
      return
  }

  if (isIncorrect) {
    if (arrayProcessingOutput)  arrayProcessingOutput.textContent = 'Your input is incorrect!'
    if (arrayProcessingInput) arrayProcessingInput.focus()
  } else {
    if (arrayProcessingOutput) arrayProcessingOutput.textContent = String(res)
  }
}

arrayProcessingInput && arrayProcessingInput.addEventListener('change', processArray)
arrayProcessingInput && arrayProcessingInput.addEventListener('keydown', (e) => {
  runWithKeyEnter.call(this, e, processArray)
})
arrayProcessingSelect && arrayProcessingSelect.addEventListener('change', processArray)