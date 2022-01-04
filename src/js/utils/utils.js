function isMathExpression(str) {
  return str.match(/[0-9\(\)\+\-\*\/]+/)
}

function isNumber(numStr) {
  return numStr.match(/[0-9]+/)
}

function runWithKeyEnter(e, fun) {
  if (e.keyCode != 13) return

  e.preventDefault()
  fun()
}

function getSelected(options) {
  for (let option of options) {
    if (option.selected) {
      return option
    }
  }

  return null
}

function removeWhitespace(str) {
  return str.replace(/ /g, '')
}

module.exports = {
  isMathExpression,
  isNumber,
  getSelected,
  runWithKeyEnter,
  removeWhitespace,
}