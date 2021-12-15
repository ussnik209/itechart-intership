let textFormatter = {
  format(inputStr, { maxStrLength, maxStrAmount, carryover }) {
    let str = inputStr

    if (maxStrLength !== undefined) {
      str = this.getSplittedByLength(str, maxStrLength)
        .join('\n')
    }

    if(carryover !== undefined) {
      const reg = new RegExp(carryover, 'g')
      str = str.replace(reg, `${carryover}\n`)
    }

    if (maxStrAmount !== undefined) {
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

// let res = textFormatter.format('hi1hi1hi1hi1hi1hi1hi1hi1hi1hi1', {
//   maxStrLength: 2,
//   maxStrAmount: 4,
//   carryover: '1'
// })

// console.log(res)