import { textFormatter } from './Text-Formatter'

const textFormattingBlock = document.querySelector('.text-formatting')
const textFormattingButton = textFormattingBlock && textFormattingBlock.querySelector('.form__start button')
const inputStr = textFormattingBlock && textFormattingBlock.querySelector<HTMLInputElement>('#string-input')
const inputMaxLength = textFormattingBlock && textFormattingBlock.querySelector<HTMLInputElement>('#max-length')
const inputMaxStr = textFormattingBlock && textFormattingBlock.querySelector<HTMLInputElement>('#max-strings')
const inputCarryover = textFormattingBlock && textFormattingBlock.querySelector<HTMLInputElement>('#carryover-input')
const outputFormattingText = textFormattingBlock && textFormattingBlock.querySelector('#string-output')

function formatText() {
  if (!textFormattingButton || !inputStr || !inputMaxLength || !inputMaxStr || !inputCarryover || !outputFormattingText) {
      throw Error('One of the text formatter fields are note exist!')
  }
  if (inputStr.value === '') {
    outputFormattingText.textContent = 'Your input is empty!'
    inputStr.focus()
    return
  }

  const str = inputStr.value

  const maxLength = Number.isNaN(+inputMaxLength.value) ? null : +inputMaxLength.value
  const maxStrings = Number.isNaN(+inputMaxStr.value) ? null : +inputMaxStr.value
  const carryover = inputCarryover.value ? inputCarryover.value : null

  outputFormattingText.textContent = textFormatter.format(str, {
    inputMaxStrLength: maxLength,
    inputMaxStrAmount: maxStrings,
    inputCarryover: carryover,
  })
}

textFormattingButton && textFormattingButton.addEventListener('click', formatText)