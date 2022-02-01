import { dateDisplayFormatter } from './Date-Display-Formatter'
import { getSelected, isNumber } from '../utils/utils'

const dateInput = document.querySelector<HTMLInputElement>('.date-formatter .input__text')
const inputFormats = document.querySelectorAll<HTMLOptionElement>('#date-input-format option')
const outputFormats = document.querySelectorAll<HTMLOptionElement>('#date-output-format option')
const formatButton = document.querySelector('.date-formatter .form__start button')
const textChecking = document.querySelector<HTMLInputElement>('#is-text-month')
const dateOutput = document.querySelector('.date-formatter .output__text')

function formateDate() {
  if (!dateInput || !inputFormats || !outputFormats || !formatButton || !textChecking || !dateOutput) {
    throw Error('One of the date display formatter fields are note exist!')
  }

  if (dateInput.value === '') {
    dateOutput.textContent = 'Your input is empty!'
    dateInput.focus()
    return
  }

  const date = dateInput.value

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

  const inputFormatElement = getSelected(inputFormats)
  const outputFormatElement = getSelected(outputFormats)
  const inputFormat = inputFormatElement?.value
  const outputFormat = outputFormatElement?.value
  const isText = textChecking.checked

  let formattedDate = null
  try {
    if (outputFormat === 'from-now') {
      if (inputFormat)  dateOutput.textContent = dateDisplayFormatter.fromNow(date, inputFormat)
      return
    }

    formattedDate = dateDisplayFormatter.format(date, {
      inputExpr: inputFormat,
      outputExpr: outputFormat,
      isText,
    })
  } catch (error: any) {
    alert(error.message)
  }

  dateOutput.textContent = formattedDate
}

formatButton && formatButton.addEventListener('click', formateDate)