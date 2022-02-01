export const stringCalculator = {
  calculateOperation(leftOperand: string | number, rightOperand: string | number, operation: string) {
    const bDigits = String(rightOperand).length
    const a = Number(leftOperand)
    const b = Number(rightOperand)
    let res = 0
    switch (operation) {
      case '.':
        {
          const fraction = a >= 0 ? b / (10 ** bDigits) : -(b / (10 ** bDigits))
          res = a + fraction
          break
        }
      case '+':
        res = a + b
        break
      case '-':
        res = a - b
        break
      case '*':
        res = a * b
        break
      case '/':
        if (b === 0) throw new Error('Division by zero.')

        res = a / b
        break
      default:
        throw Error('Unknown operation used!')
    }

    return res
  },

  calculateExpression(expr: string) {
    const operations = ['.', '*', '/', '+', '-']

    const exprArr = expr.replace(/[0-9]+/g, '$& ')
      .replace(/[.+\-*/()]{1}/g, '$& ')
      .split(' ')
      .slice(0, -1)

    let exprWithNeg = this.processNegative(exprArr)

    const openedBrackets: number[] = []
    const closedBrackets: number[] = []
    for (let i = 0, len = exprWithNeg.length; i < len; i += 1) {
      const el = exprWithNeg[i]
      if (el === '(') {
        openedBrackets.push(i)
      } else if (el === ')') {
        closedBrackets.push(i)
      }
    }

    if (openedBrackets.length !== closedBrackets.length) {
      throw new Error('Brackets must be paired')
    }

    while (openedBrackets.length > 0) {
      const opened = openedBrackets.pop()
      const closed = exprWithNeg.findIndex(
        (el, i) => el === ')' && opened && i > opened
      )

      let innerBrackets = exprWithNeg.slice(opened && opened + 1, closed)

      innerBrackets = this.calculate(innerBrackets, operations[0])
      innerBrackets = this.calculate(innerBrackets, operations.slice(1, 3))
      innerBrackets = this.calculate(innerBrackets, operations.slice(3))
      exprWithNeg.splice(Number(opened), closed - Number(opened) + 1, innerBrackets[0])
    }

    exprWithNeg = this.calculate(exprWithNeg, operations[0])
    exprWithNeg = this.calculate(exprWithNeg, operations.slice(1, 3))
    exprWithNeg = this.calculate(exprWithNeg, operations.slice(3))

    return exprArr[0]
  },

  calculate(inputArr: Array<string | number>, operations: string[] | string) {
    let arr = [...inputArr]
    let i = 0
    let res = 0
    while (i < arr.length) {
      const curEl = arr[i]

      if (curEl === operations[0] || curEl === operations[1]) {
        res = this.calculateOperation(arr[i - 1], arr[i + 1], curEl)

        if (i + 1 < arr.length - 1) {
          arr = arr.slice(0, i - 1).concat(res)
            .concat(
              arr.slice(i + 2),
            )
        } else {
          arr = arr.slice(0, i - 1).concat(res)
          return arr
        }
        i -= 1
      }
      i += 1
    }
    return arr
  },

  processNegative(exprInput: string[] | number[]) {
    const exprArray = [...exprInput]

    for (let i = 0, { length } = exprArray; i < length; i += 1) {
      if (exprArray[i] === '-' && (i === 0 || Number.isNaN(+exprArray[i - 1]))) {
        exprArray.splice(i, 2, -exprArray[i + 1])
      }
    }

    return exprArray
  },
}

// module.exports = stringCalculator