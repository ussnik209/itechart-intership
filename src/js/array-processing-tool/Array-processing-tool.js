const arrayProcessingTool = {
  getMaxSubSumLong(arr) {
    let maxSum = 0

    for (let i = 0, { length } = arr; i < length; i += 1) {
      let curSum = arr[i]
      maxSum = curSum > maxSum ? curSum : maxSum

      for (let j = i + 1; j < length; j += 1) {
        curSum += arr[j]
        maxSum = curSum > maxSum ? curSum : maxSum
      }
    }

    return maxSum
  },

  getMaxSubSum(arr) {
    let maxSum = 0
    let curSum = 0
    arr.forEach((el) => {
      curSum = curSum + el < 0 ? 0 : curSum + el
      maxSum = curSum > maxSum ? curSum : maxSum
    })
    return maxSum
  },

  sort(arr) {
    return arr.sort((a, b) => a - b)
  },

  min(arr) {
    return this.sort(arr)[0]
  },

  max(arr) {
    return this.sort(arr)[arr.length - 1]
  },

  med(arr) {
    return this.sort(arr)[Math.floor(arr.length / 2)]
  },

  selectIncreasing(arr) {
    if (arr.length < 2) return arr.length

    const cur = {
      length: 1,
      first: 0,
    }
    let max = {...cur }

    arr.reduce((preEl, el, i) => {
      if (el > preEl) {
        cur.length += 1
      } else {
        cur.length = 1
        cur.first = i
      }

      if (cur.length > max.length) {
        max = {...cur }
      }

      return el
    })

    // change to slice
    return arr.splice(max.first, max.length)
  },
}

module.exports = arrayProcessingTool

// const test1 = [-1, 2, 3, -9, 11],
//   test2 = [-2, -1, 1, 2],
//   test3 = [100, -9, 2, -3, 5],
//   test4 = [1, 2, 3],
//   test5 = [-1, -2, -3]
// test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
// const res = arrayProcessingTool.selectIncreasing(test6)
// console.log(res)