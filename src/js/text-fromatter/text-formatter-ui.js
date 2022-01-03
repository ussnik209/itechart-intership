import textFormatter from './Text-Formatter'

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
