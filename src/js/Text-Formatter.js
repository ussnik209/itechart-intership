let textFormatter = {
  format(inputStr, { maxStrLength, maxStrAmount, carryover }) {
    let str = inputStr

    if (maxStrLength !== undefined) {
      str = this.getSplittedByLength(str, maxStrLength)
    }

    if (maxStrAmount !== undefined) {
      str = str.slice(0, maxStrAmount)
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

let res = textFormatter.format('hi1hi1hi1hi1hi1hi1hi1hi1h1ihi1', {
  maxStrLength: 2,
  maxStrAmount: 4,
  carryover: '1'
})

console.log(res)