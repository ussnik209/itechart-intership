const textFormatter = {
  format(inputStr, { inputMaxStrLength, inputMaxStrAmount, inputCarryover }) {
    let str = inputStr
    const maxStrLength = inputMaxStrLength
    const maxStrAmount = inputMaxStrAmount
    const carryover = inputCarryover

    if (maxStrLength <= 0 || maxStrAmount <= 0) {
      return ''
    }

    if (maxStrLength) {
      str = this.getSplittedByLength(str, maxStrLength)
        .join('\n')
    }

    if (carryover) {
      const reg = new RegExp(carryover, 'g')
      str = str.replace(reg, `${carryover}\n`)
    }

    if (maxStrAmount) {
      str = str.split('\n')
        .slice(0, maxStrAmount)
        .join('\n')
    }

    return str
  },

  getSplittedByLength(inputStr, maxStrLength) {
    const splittedStr = []

    for (let i = 0; i < inputStr.length; i += maxStrLength) {
      splittedStr.push(inputStr.slice(i, i + maxStrLength))
    }

    return splittedStr
  },
}

module.exports = textFormatter
