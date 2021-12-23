import stringCalculator from "./String-calculator"

let cachingCalculator = {
  cache: [],

  calculate(expr) {
    let cacheValue = cache[expr]
    if (cacheValue) return cacheValue

    let result = stringCalculator.calculateExpression(expr)
    this.cache[expr] = result

    return result
  },
}