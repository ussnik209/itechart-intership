interface textFormatterConf {
  inputMaxStrLength: number | null,
  inputMaxStrAmount: number | null,
  inputCarryover: string | null,
 }

export const textFormatter = {
  format(inputStr: string, { inputMaxStrLength, inputMaxStrAmount, inputCarryover }: textFormatterConf) {
    let str = inputStr
    const maxStrLength = inputMaxStrLength
    const maxStrAmount = inputMaxStrAmount
    const carryover = inputCarryover

    if (maxStrLength) {
      if (maxStrLength <= 0) {
        return ''
      }

      str = this.getSplittedByLength(str, maxStrLength)
        .join('\n')
    }

    if (carryover) {
      const reg = new RegExp(carryover, 'g')
      str = str.replace(reg, `${carryover}\n`)
    }

    if (maxStrAmount) {
      if (maxStrAmount <= 0) {
        return ''
      }

      str = str.split('\n')
        .slice(0, maxStrAmount)
        .join('\n')
    }

    return str
  },

  getSplittedByLength(inputStr: string, maxStrLength: number) {
    const splittedStr = []

    for (let i = 0; i < inputStr.length; i += maxStrLength) {
      splittedStr.push(inputStr.slice(i, i + maxStrLength))
    }

    return splittedStr
  },
}

// module.exports = textFormatter