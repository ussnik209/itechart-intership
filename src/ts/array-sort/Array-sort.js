const arraySort = {
  bubbleSort(array) {
    let isSwap = false
    const arr = [...array]

    do {
      isSwap = false
      for (let i = 1, { length } = arr; i < length; i += 1) {
        if (arr[i] < arr[i - 1]) {
          this.swap(arr, i, i - 1)
          isSwap = true
        }
      }
    } while (isSwap)

    return arr
  },

  quickSort(array, first = 0, last = array.length - 1) {
    if (last === first) return array

    const arr = [...array]

    const supIndex = this.partition(arr, first, last)

    this.quickSort(arr, first, supIndex - 1)
    this.quickSort(arr, supIndex, last)

    return arr
  },

  partition(arr, first, last) {
    const sup = arr[Math.floor((first + last) / 2)]
    let left = first
    let right = last

    while (left < right) {
      while (arr[left] < sup) {
        left += 1
      }

      while (arr[right] > sup) {
        right -= 1
      }

      if (left <= right) {
        this.swap(arr, left, right)
        left += 1
        right -= 1
      }
    }

    return left
  },

  swap(array, first, second) {
    const arr = array;
    [arr[first], arr[second]] = [arr[second], arr[first]]
  },

  choiceSort(array) {
    const arr = [...array]

    for (let i = 0, { length } = arr; i < length - 1; i += 1) {
      const minEl = Math.min(...arr.slice(i))
      const minIndex = arr.slice(i).indexOf(minEl) + i

      this.swap(arr, i, minIndex)
    }

    return arr
  },

  shakerSort(array) {
    if (array.length < 2) return array

    const arr = [...array]
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      for (let i = left; i < right; i += 1) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1)
        }
      }
      right -= 1

      for (let i = right; i > left; i -= 1) {
        if (arr[i] < arr[i - 1]) {
          this.swap(arr, i, i - 1)
        }
      }
      left += 1
    }

    return arr
  },
}

module.exports = arraySort