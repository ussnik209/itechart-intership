import './scss/style.scss'
import './index.html'
import './js/Array-processing-tool'
import './js/Array-sort'


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


  console.log(getSelected(arrayProcessingOptions));
  arrayProcessingOutput.textContent = arr
}

function processArrayWithEnterKey(e) {
  if (e.keyCode != 13) return

  e.preventDefault()
  processArray()
}

arrayProcessingInput.addEventListener('change', processArray)
arrayProcessingInput.addEventListener('keydown', processArrayWithEnterKey)
arrayProcessingSelect.addEventListener('change', processArray)