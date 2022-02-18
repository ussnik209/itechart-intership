import { binaryConverter } from './Binary-converter'
import { isNumber16Dig, isBaseFits } from '../utils/utils'

const convertationBlock = document.querySelector('.binary-converter')
const convertationInput = convertationBlock && convertationBlock.querySelector<HTMLInputElement>('#convertation-input')
const oldBaseInput = convertationBlock && convertationBlock.querySelector<HTMLInputElement>('#old-base')
const newBaseInput = convertationBlock && convertationBlock.querySelector<HTMLInputElement>('#new-base')
const convertationOutput = convertationBlock && convertationBlock.querySelector<HTMLOutputElement>('#convertation-output')
const convertationStart = convertationBlock && convertationBlock.querySelector<HTMLButtonElement>('.form__start')

function convertation() {
const convertationStart = convertationBlock && convertationBlock.querySelector<HTMLButtonElement>('.form__start')
if (!convertationInput || !convertationOutput || !oldBaseInput || !newBaseInput || !convertationStart) {
  throw Error('One of the binary converter fields are note exist!')
}

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
    .reverse()
  const oldBase = Number(oldBaseInput.value)
  const newBase = Number(newBaseInput.value)

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

convertationStart && convertationStart.addEventListener('click', convertation)