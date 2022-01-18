const binaryConverter = {
  letters: ['A', 'B', 'C', 'D', 'E', 'F'],

  convertToNewSystem(numArr, base, newBase) {
    let decNum = this.getDecNum(numArr, base)
    const newNum = []

    if (decNum === 0) return [0]

    do {
      const dig = decNum % newBase
      newNum.push(
        dig < 10 ? dig : this.letters[dig - 10],
      )
      decNum = Math.trunc(decNum / newBase)
    } while (decNum > 0)

    return newNum
  },

  getDecNum(numArr, base) {
    return numArr.reduce((num, dig, i) => {
      if (Number.isNaN(dig)) {
        return num + (this.letters.indexOf(dig.toUpperCase()) + 10) * base ** i
      }
      return num + (+dig) * base ** i
    }, 0)
  },
}

module.exports = binaryConverter
