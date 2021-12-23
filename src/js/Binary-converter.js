let binaryConverter = {
  convertToNewSystem(numArr, base, newBase) {
    let num = this.getDecNum(numArr, base)
    let decNum = []

    if (num === 0) return [0]

    do {
      decNum.push(num % newBase)
      num = Math.trunc(num / newBase)
    
    } while (num > 0)

    return decNum
  },

  getDecNum(numArr, base) {
    return numArr.reduce((num, dig, i) => num + dig * base ** i, 0)
  }
}

module.exports = binaryConverter