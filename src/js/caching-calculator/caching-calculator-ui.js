import { isMathExpression, runWithKeyEnter } from '../utils/utils'
import cachingCalculator from './Caching-calculator'

const cachingCalculatorBlock = document.querySelector('.caching-calculator')
const cachingCalcInput = cachingCalculatorBlock.querySelector('#caching-calc-input')
const cachingCalcOutput = cachingCalculatorBlock.querySelector('#caching-calc-output')
const cachingFunctionsOutput = cachingCalculatorBlock.querySelector('#caching-functions')

function calculateWithCache() {
  if (cachingCalcInput.value === '') {
    cachingCalcOutput.textContent = 'Your input is empty!'
    cachingCalcInput.focus()
    return
  }

  const expr = cachingCalcInput.value

  if (!isMathExpression(expr)) {
    cachingCalcOutput.textContent = 'Your input isn\'t mathematic expression'
    cachingCalcInput.focus()
    return
  }

  try {
    let { result, cache } = cachingCalculator.calculate(expr)
    let cacheOutput = ''


    for (let expr in cache) {
      cacheOutput += `${expr.split(' ').join('')}=${cache[expr]}\n`
    }

    cachingFunctionsOutput.textContent = cacheOutput
    if (isNaN(result)) {
      cachingCalcOutput.textContent = 'The entered expression is incorrect!'
      cachingCalcInput.focus()

    } else {
      cachingCalcOutput.textContent = result

    }

  } catch (error) {
    cachingCalcOutput.textContent = error.message

  }
}

cachingCalcInput.addEventListener('change', calculateWithCache)
cachingCalcInput.addEventListener('keydown', runWithKeyEnter.bind(this, calculateWithCache))
