let textFormatter = {
  format(inputStr, { inputMaxStrLength, inputMaxStrAmount, inputCarryover }) {
    let str = inputStr,
      maxStrLength = inputMaxStrLength,
      maxStrAmount = inputMaxStrAmount,
      carryover = inputCarryover

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
    let splittedStr = []

    for (let i = 0; i < inputStr.length; i += maxStrLength) {
      splittedStr.push(inputStr.slice(i, i + maxStrLength))
    }

    return splittedStr
  },
}

module.exports = textFormatter