export function isMathExpression(str: string) {
  return str.match(/[0-9()+\-*/]+/)
}

export function isNumber(numStr: string) {
  return numStr.match(/[0-9]+/)
}

export function isNumber16Dig(numStr: string) {
  return numStr.match(/[0-9A-Fa-f]/)
}

export function runWithKeyEnter(e: KeyboardEvent, fun: Function) {
  if (Number(e.keyCode) !== 13) return

  e.preventDefault()
  fun()
}

export function getSelected(options: NodeListOf<HTMLOptionElement>) {
  const optArr = Array.from(options)
  const option = optArr.find((opt) => opt.selected)

  return option
}

export function removeWhitespace(str: string) {
  return str.replace(/ /g, '')
}

export function isBaseFits(numArr: string[] | number[], base: number) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  let fitCheck = true

  numArr.forEach((dig) => {
    if (typeof dig !== 'number') {
      if ((letters.indexOf(dig.toUpperCase()) + 10) >= base) {
        fitCheck = false
      }
    } else if (dig >= base) {
      fitCheck = false
    }
  })

  return fitCheck
}
