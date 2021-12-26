const stringCalculator = require('./String-calculator')

let cachingCalculator = {
  cache: [],

  calculate(expr) {
    let start = Date.now()
    let result = this.cache[expr]
    
    if (result) {
      console.log(`Caching time: ${Date.now() - start }ms`)
      
      const cache = this.cache
      return { result, cache }
    }
    
    start = Date.now()
    result = stringCalculator.calculateExpression(expr)
    this.cache[expr] = result

    console.log(`Calculating time: ${Date.now() - start}ms`)

    const cache = this.cache
    return { result, cache }
  },
}

module.exports = cachingCalculator