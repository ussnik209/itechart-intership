const stringCalculator = require('./String-calculator')

let cachingCalculator = {
  cache: [],

  calculate(expr) {
    let start = Date.now()
    const cacheValue = this.cache[expr]
    if (cacheValue) {
      console.log(`Caching time: ${Date.now() - start}ms`)

      return cacheValue
    }

    start = Date.now()
    let result = stringCalculator.calculateExpression(expr)
    this.cache[expr] = result

    console.log(`Calculating time: ${Date.now() - start}ms`)

    return result
  },
}

module.exports = cachingCalculator