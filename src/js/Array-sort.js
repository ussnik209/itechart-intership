let arraySort = {
  bubbleSort(array) {
    let isSwap = false
    let arr = array

    do {
      isSwap = false
      for (let i = 1, length = arr.length; i < length; i++) {
        if (arr[i] < arr[i - 1]) {
          // swap
          this.swap(arr, i, i - 1)
          isSwap = true
        }

      }

    }
    while (isSwap)

    return arr
  },

  quickSort(array, first = 0, last = arr.length - 1) {
    if (last == first) return

    let arr = array

    const supIndex = this.partition(arr, first, last)

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
  },

  choiceSort(array) {
    let arr = array

    for (let i = 0, length = arr.length; i < length - 1; i++) {
      const minEl = Math.min(arr.slice(i))
      const minIndex = arr.slice(i).indexOf(minEl)

      this.swap(array, i, minIndex)
    }

    return arr
  },

  shakerSort(array) {
    if (array.length < 2) return array

    let arr = array
    let left = 0,
      right = arr.length - 1

    while (left <= right) {
      for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1)

        }
      }
      right--

      for (let i = right; i > left; i--) {
        if (arr[i] < arr[i - 1]) {
          this.swap(arr, i, i - 1)

        }
      }
      left++

    }

    return arr
  }
}


const test1 = [-1, 2, 3, -9, 11],
  test2 = [-2, -1, 1, 2],
  test3 = [100, -9, 2, -3, 5],
  test4 = [1, 2, 3],
  test5 = [-1, -2, -3],
  test6 = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
const res = arraySort.shakerSort(test6)
console.log(res)