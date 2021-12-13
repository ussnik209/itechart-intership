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
    if (last == first) return

    const supIndex = this.partition(arr, first, last)
    console.log('sup index:' + supIndex)
    this.quickSort(arr, first, supIndex - 1)
    this.quickSort(arr, supIndex, last)

    return arr
  },

  partition(arr, first, last) {
    const sup = arr[Math.floor((first + last) / 2)]
    let left = first,
      right = last

    while (left < right) {
      while (arr[left] < sup) {
        left++
      }

      while (arr[right] > sup) {
        right--
      }

      if (left <= right) {
        this.swap(arr, left, right)
        left++
        right--
      }
    }

    return left
  },

  swap(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]]
  }
}


const test1 = [-1, 2, 3, -9, 11],
  test2 = [-2, -1, 1, 2],
  test3 = [100, -9, 2, -3, 5],
  test4 = [1, 2, 3],
  test5 = [-1, -2, -3],
  test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
const res = arraySort.quickSort(test1)
console.log(res)