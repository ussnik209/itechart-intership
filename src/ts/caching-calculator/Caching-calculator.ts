const stringCalculator = require('../string-calculator/String-calculator')

interface cache {
  [key: string]: string
}

interface cachingTool {
  cache: cache,
  calculate: (expr: string) => { result: number, cache: cache }
}

export const cachingCalculator: cachingTool = {
  cache: {},

  calculate(expr: string) {
    let start = Date.now()
    let result = this.cache[expr]

    if (result) {
      console.log(`Caching time: ${Date.now() - start}ms`)

      const { cache } = this
      return { result, cache }
    }

    start = Date.now()
    result = stringCalculator.calculateExpression(expr)
    this.cache[expr] = result

    console.log(`Calculating time: ${Date.now() - start}ms`)

    const { cache } = this
    return { result, cache }
  },
}

// module.exports = cachingCalculator