let DateDisplayFormatter = {
  format(dateStr, inputExpr = 'DDMMYYYY', outputExpr = 'DD-MM-YYYY') {
    if (typeof dateStr !== 'string') dateStr = String(dateStr)

    let { day, month, year } = this.getParsedDate(dateStr, inputExpr.split(''))
    let formattedDate = this.getFormattedDate(outputExpr.split(''),
      day.split(''),
      month.split(''),
      year.split(''))


  },

  getParsedDate(date, expr) {
    let year = '',
      month = '',
      day = ''

    expr.forEach((el, i) => {
      switch (el) {
        case 'D':
          day += date[i]
          break
        case 'M':
          month += date[i]
          break
        case 'Y':
          year += date[i]
          break
      }
    })

    return {
      day,
      month,
      year
    }
  },

  getFormattedDate(expr, dayInput, monthInput, yearInput) {
    let day = dayInput,
      month = monthInput,
      year = yearInput
    expr.reverse()
    
    expr = expr.map(el => {
      switch (el) {
        case 'D':
          return day.pop()
        case 'M':
          return month.pop()
        case 'Y': 
          return year.pop()
        default:
          return el
      }
    })

    return expr.reverse()
  }
}

// let res = DateDisplayFormatter.format('31102011')