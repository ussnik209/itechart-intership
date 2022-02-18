import { stringCalculator } from './String-calculator'
import { runWithKeyEnter, isMathExpression, removeWhitespace } from '../utils/utils'

const stringCalculatorBlock = document.querySelector('.string-calculator')
const exprInput = stringCalculatorBlock && stringCalculatorBlock.querySelector<HTMLInputElement>('#calc-expr-input')
const exprOutput = stringCalculatorBlock && stringCalculatorBlock.querySelector('#calc-expr-output')

function calculateExpr() {
  if (!exprInput || !exprOutput) {
    throw Error('One of the string calculator fields are note exist!')
  }

  if (exprInput.value === '') {
    exprOutput.textContent = 'Your input is empty!'
    exprInput.focus()
    return
  }

  const expr = exprInput.value

  if (!isMathExpression(expr)) {
    exprOutput.textContent = 'Your input isn\'t mathematic expression'
    exprInput.focus()
    return
  }

  try {
    const res = stringCalculator.calculateExpression(removeWhitespace(expr))

    if (Number.isNaN(res)) {
      exprOutput.textContent = 'The entered expression is incorrect!'
      exprInput.focus()
    } else {
      exprOutput.textContent = res
    }
  } catch (error: any) {
    exprOutput.textContent = error.message
  }
}

exprInput && exprInput.addEventListener('change', calculateExpr)
exprInput && exprInput.addEventListener('keydown', (e) => {
  runWithKeyEnter.bind(this, e, calculateExpr)
})