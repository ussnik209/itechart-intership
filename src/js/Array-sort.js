let arraySort = {
  bubbleSort(arr) {
    let isSwap = false

    do {
      isSwap = false
      for (let i = 1, length = arr.length; i < length; i++) {
        if (arr[i] < arr[i - 1]) {
          // swap
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
          isSwap = true
        }

      }

    }
    while (isSwap)
    
    return arr
  },

  quickSort(arr, first = 0, last = arr.length - 1) {
    if (arr.length < 2) return arr

    
  }
}


const test1 = [-1, 2, 3, -9, 11],
  test2 = [-2, -1, 1, 2],
  test3 = [100, -9, 2, -3, 5],
  test4 = [1, 2, 3],
  test5 = [-1, -2, -3],
  test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
const res = arraySort.bubbleSort(test1)
console.log(res)