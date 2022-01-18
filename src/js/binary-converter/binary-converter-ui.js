import binaryConverter from './Binary-converter'
import { isNumber16Dig, isBaseFits } from '../utils/utils'

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

  if (!isNumber16Dig(convertationInput.value)) {
    convertationOutput.textContent = 'Your input should be number or letters A-F!'
    convertationInput.focus()
    return
  }

  const numArr = convertationInput.value
    .split('')
    .reverse('')
  const oldBase = +oldBaseInput.value
  const newBase = +newBaseInput.value

  if (oldBase < 2 || oldBase > 16) {
    convertationOutput.textContent = 'Old base should be number between 2 and 16 inclusive!'
    oldBaseInput.focus()
    return
  }

  if (newBase < 2 || newBase > 16) {
    convertationOutput.textContent = 'New base should be number between 2 and 16 inclusive!'
    newBaseInput.focus()
    return
  }

  if (!isBaseFits(numArr, oldBase)) {
    convertationOutput.textContent = 'Your input contains numbers more then old base value!'
    convertationInput.focus()
    return
  }

  const result = binaryConverter.convertToNewSystem(numArr, oldBase, newBase)
    .reverse()
    .join('')

  convertationOutput.textContent = result
}

convertationStart.addEventListener('click', convertation)
