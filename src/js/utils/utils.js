function isMathExpression(str) {
  return str.match(/[0-9()+\-*/]+/)
}

function isNumber(numStr) {
  return numStr.match(/[0-9]+/)
}

function isNumber16Dig(numStr) {
  return numStr.match(/[0-9A-Fa-f]/)
}

function runWithKeyEnter(e, fun) {
  if (e.keyCode !== 13) return

  e.preventDefault()
  fun()
}

function getSelected(options) {
  const option = options.find((opt) => opt.selected)

  return option
}

function removeWhitespace(str) {
  return str.replace(/ /g, '')
}

function isBaseFits(numArr, base) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  let fitCheck = true

  numArr.forEach((dig) => {
    if (Number.isNaN(dig)) {
      if ((letters.indexOf(dig.toUpperCase()) + 10) >= base) {
        fitCheck = false
      }
    } else if (dig >= base) {
      fitCheck = false
    }
  })

  return fitCheck
}

module.exports = {
  isMathExpression,
  isNumber,
  getSelected,
  runWithKeyEnter,
  removeWhitespace,
  isNumber16Dig,
  isBaseFits,
}