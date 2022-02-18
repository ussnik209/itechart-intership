import { isMathExpression, runWithKeyEnter, removeWhitespace } from '../utils/utils'
import { cachingCalculator } from './Caching-calculator'

const cachingCalculatorBlock = document.querySelector('.caching-calculator')
const cachingCalcInput = cachingCalculatorBlock && cachingCalculatorBlock.querySelector<HTMLInputElement>('#caching-calc-input')
const cachingCalcOutput = cachingCalculatorBlock && cachingCalculatorBlock.querySelector<HTMLOutputElement>('#caching-calc-output')
const cachingFunctionsOutput = cachingCalculatorBlock && cachingCalculatorBlock.querySelector<HTMLOutputElement>('#caching-functions')


function calculateWithCache() {
  if (!cachingCalcInput || !cachingCalcOutput || !cachingFunctionsOutput) {
    throw Error('One of the caching calculator fields are note exist!')
  }

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
    const { result, cache } = cachingCalculator.calculate(removeWhitespace(expr))
    let cacheOutput = ''

    for (const cacheExpr of Object.keys(cache)) {
      cacheOutput += `${cacheExpr.split(' ').join('')}=${cache[cacheExpr]}\n`
    }
    // cache.forEach((cacheExpr) => {
    //   cacheOutput += `${cacheExpr.split(' ').join('')}=${cache[cacheExpr]}\n`
    // })

    cachingFunctionsOutput.textContent = cacheOutput
    if (Number.isNaN(result)) {
      cachingCalcOutput.textContent = 'The entered expression is incorrect!'
      cachingCalcInput.focus()
    } else {
      cachingCalcOutput.textContent = String(result)
    }
  } catch (error: any) {
    cachingCalcOutput.textContent = error.message
  }
}

cachingCalcInput && cachingCalcInput.addEventListener('change', calculateWithCache)
cachingCalcInput && cachingCalcInput.addEventListener('keydown', (e) => {
  runWithKeyEnter.bind(this, e, calculateWithCache)
})