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
    let { day, month, year } = this.getParsedDate(dateStr, inputExpr)
    
    this.isValidDate(+day, +month, +year)

    let formattedDate = this.getFormattedDate(outputExpr, day, month, year)


    if (isText) {
      formattedDate = this.toText(formattedDate, outputExpr)
    }

    return formattedDate
  },

  getParsedDate(dateStr, exprStr) {
    let expr = exprStr.split(''),
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

  getFormattedDate(exprStr, dayInputStr, monthInputStr, yearInputStr) {
    let expr = exprStr.split('')
    expr.reverse()
    let day = dayInputStr.split(''),
      month = monthInputStr.split(''),
      year = yearInputStr.split('')

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

  toText(dateStr, exprStr) {
    let date = dateStr.split('-'),
      expr = exprStr.split('-')

    expr.forEach((el, i) => {
      if (el[0] === 'M') date[i] = this.monthToText(+date[i] - 1)
    })

    return date.join(' ')
  },

  monthToText(month) {
    return this.months[month]
  },

  fromNow(dateStr, inputExpr) {
    let date = String(dateStr),
      expr = inputExpr
    let { day, month, year } = this.getParsedDate(date, expr)

    let matchingDate = new Date(`${year}-${month}-${day}`)

    const now = new Date()
    const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let timeDif = nowWithoutTime - matchingDate

    if (timeDif === 0) {
      return 'Today'
    }

    const yearDif = Math.abs(nowWithoutTime.getFullYear() - matchingDate.getFullYear())
    const monthDif = Math.abs(nowWithoutTime.getMonth() - matchingDate.getMonth())
    const dayDif = Math.abs(nowWithoutTime.getDate() - matchingDate.getDate())
    let dateDif = ''

    if (yearDif) {
      dateDif += ` ${yearDif} year`
      if (yearDif > 1) dateDif += 's'
    }

    if (monthDif) {
      dateDif += ` ${monthDif} month`
      if (monthDif > 1) dateDif += 's'
    }

    if (dayDif) {
      dateDif += ` ${dayDif} day`
      if (dayDif > 1) dateDif += 's'
    }

    if (timeDif > 0) {
      return (dateDif + ' ago').trim()
    } else {
      return ('after' + dateDif).trim()
    }
  },

  isValidDate(day, month, year) {
    if (year < 1970) throw new Error("Year should be before 1970!")
    if (month < 1 || month > 12) throw new Error("Month should be between 1 and 12 inclusive!")
    let testDate = new Date(year, month - 1, day)
    if (testDate.getDate() != day) throw new Error("You enter incorrect day!")
  }
}

module.exports = dateDisplayFormatter