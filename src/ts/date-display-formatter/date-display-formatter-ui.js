import dateDisplayFormatter from './Date-Display-Formatter'
import { getSelected, isNumber } from '../utils/utils'

const dateInput = document.querySelector('.date-formatter .input__text')
const inputFormats = document.querySelectorAll('#date-input-format option')
const outputFormats = document.querySelectorAll('#date-output-format option')
const formatButton = document.querySelector('.date-formatter .form__start button')
const textChecking = document.querySelector('#is-text-month')
const dateOutput = document.querySelector('.date-formatter .output__text')

function formateDate() {
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

  const inputFormat = getSelected(inputFormats).value
  const outputFormat = getSelected(outputFormats).value
  const isText = textChecking.checked

  let formattedDate
  try {
    if (outputFormat === 'from-now') {
      dateOutput.textContent = dateDisplayFormatter.fromNow(date, inputFormat)
      return
    }

    formattedDate = dateDisplayFormatter.format(date, {
      inputExpr: inputFormat,
      outputExpr: outputFormat,
      isText,
    })
  } catch (error) {
    alert(error.message)
  }

  dateOutput.textContent = formattedDate
}

formatButton.addEventListener('click', formateDate)