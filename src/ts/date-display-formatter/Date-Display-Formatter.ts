interface formatterConf {
  inputExpr: string | undefined,
  outputExpr: string | undefined,
  isText: boolean | undefined,
}

export const dateDisplayFormatter = {
  months: ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ],

  format(dateStr: string, { inputExpr, outputExpr, isText }: formatterConf) {
    const input = inputExpr || 'DDMMYYYY'
    const output = outputExpr || 'DD-MM-YYYY'
    const isTextCheck = isText || false
    let date = dateStr
    if (typeof dateStr !== 'string') {
      date = String(date)
    }
    const { day, month, year } = this.getParsedDate(date, input)

    this.isValidDate(+day, +month, +year)

    let formattedDate = this.getFormattedDate(output, day, month, year)

    if (isTextCheck) {
      formattedDate = this.toText(formattedDate, output)
    }

    return formattedDate
  },

  getParsedDate(dateStr: string, exprStr: string) {
    const expr = exprStr.split('')
    const date = dateStr
    let year = ''
    let month = ''
    let day = ''

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
        default:
          throw Error('Incorrect value of input format!')
      }
    })

    return {
      day,
      month,
      year,
    }
  },

  getFormattedDate(exprStr: string, dayInputStr: string, monthInputStr: string, yearInputStr: string) {
    const expr = exprStr.split('')
    expr.reverse()
    const day = dayInputStr.split('')
    const month = monthInputStr.split('')
    const year = yearInputStr.split('')

    const exprParsed = expr.map((el) => {
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

    return exprParsed.reverse().join('')
  },

  toText(dateStr: string, exprStr: string) {
    const date = dateStr.split('-')
    const expr = exprStr.split('-')

    expr.forEach((el, i) => {
      const monthIndex = +date[i] - 1
      if (el[0] === 'M') date[i] = this.monthToText(monthIndex)
    })

    return date.join(' ')
  },

  monthToText(month: number) {
    return this.months[month]
  },

  fromNow(dateStr: string, inputExpr: string) {
    const date = String(dateStr)
    const expr = inputExpr
    const { day, month, year } = this.getParsedDate(date, expr)

    this.isValidDate(+day, +month, +year)

    const matchingDate = new Date(`${year}-${month}-${day}`)

    const now = new Date()
    const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const timeDif = Number(nowWithoutTime) - Number(matchingDate)

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
      return (`${dateDif} ago`).trim()
    }
    return (`after${dateDif}`).trim()
  },

  isValidDate(day: number, month: number, year: number) {
    if (year < 1970) throw new Error('Year should be after 1970!')
    if (month < 1 || month > 12) throw new Error('Month should be between 1 and 12 inclusive!')
    const testDate = new Date(year, month - 1, day)
    if (testDate.getDate() !== day) throw new Error('You enter incorrect day!')
  },
}

// module.exports = dateDisplayFormatter