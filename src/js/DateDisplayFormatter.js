let dateDisplayFormatter = {
  months: ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ],

  format(dateStr, { inputExpr, outputExpr, isText }) {
    inputExpr = inputExpr || 'DDMMYYYY'
    outputExpr = outputExpr || 'DD-MM-YYYY'
    isText = isText || false

    if (typeof dateStr !== 'string') dateStr = String(dateStr)
    let { day, month, year } = this.getParsedDate(dateStr, inputExpr.split(''))
    let formattedDate = this.getFormattedDate(outputExpr.split(''),
      day.split(''),
      month.split(''),
      year.split(''))


    if (isText) {
      formattedDate = this.toText(formattedDate.split('-'), outputExpr.split('-')).join(' ')
    }
    
    return formattedDate
  },

  getParsedDate(dateStr, exprArr) {
    let expr = exprArr,
      date = dateStr
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

  getFormattedDate(exprArr, dayInputArr, monthInputArr, yearInputArr) {
    let expr = exprArr.reverse()
    let day = dayInputArr,
      month = monthInputArr,
      year = yearInputArr

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

    return expr.reverse().join('')
  },

  toText(dateArr, exprArr) {
    let date = dateArr,
      expr = exprArr

    expr.forEach((el, i) => {
      if (el[0] === 'M') date[i] = this.monthToText(+date[i] - 1)
    })

    return date
  },

  monthToText(month) {
    return this.months[month]
  }
}

module.exports = dateDisplayFormatter

// let res = DateDisplayFormatter.format('31102011', { isText: true, outputExpr: 'DD MM YYYY' })