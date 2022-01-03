import stringCalculator from './String-calculator'
import { runWithKeyEnter, isMathExpression } from '../utils/utils'

const stringCalculatorBlock = document.querySelector('.string-calculator')
const exprInput = stringCalculatorBlock.querySelector('#calc-expr-input')
const exprOutput = stringCalculatorBlock.querySelector('#calc-expr-output')

function calculateExpr() {
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
    const res = stringCalculator.calculateExpression(expr)

    if (isNaN(res)) {
      exprOutput.textContent = 'The entered expression is incorrect!'
      exprInput.focus()

    } else {
      exprOutput.textContent = res

    }
  } catch (error) {
    exprOutput.textContent = error.message

  }
}

exprInput.addEventListener('change', calculateExpr)
exprInput.addEventListener('keydown', runWithKeyEnter.bind(this, calculateExpr))

