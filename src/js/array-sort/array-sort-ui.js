import arraySort from './Array-sort'
import { getSelected, runWithKeyEnter } from '../utils/utils'

const arraySorting = document.querySelector('.array-sort')
const sortInput = arraySorting.querySelector('#array-sort-input')
const sortSelecting = arraySorting.querySelector('#sort-selection')
const sortOutput = arraySorting.querySelector('#array-sort-output')
const sortDirection = arraySorting.querySelector('.sort-direction')

function sortArray() {
  if (sortInput.value === '') {
    sortOutput.textContent = 'Your input is empty!'
    sortInput.focus()
    return
  }

  const arr = sortInput.value.split(',').map(el => +el)

  let sortType = getSelected(sortSelecting.children)
  if (sortType === null) {
    sortOutput.textContent = 'You should choose a sort type!'
    sortSelecting.focus()
    return
  }

  let sortDir = getSelected(sortDirection.children)
  if (sortDir === null) {
    sortOutput.textContent = 'You should choose a sort direction!'
    sortDirection.focus()
    return
  }

  sortType = sortType.value
  sortDir = sortDir.value
  let sortedArr = []

  switch (sortType) {
    case 'bubble':
      sortedArr = arraySort.bubbleSort(arr)
      break
    case 'quick':
      sortedArr = arraySort.quickSort(arr)
      break
    case 'choice':
      sortedArr = arraySort.choiceSort(arr)
      break
    case 'shaker':
      sortedArr = arraySort.shakerSort(arr)
      break
  }

  if (sortedArr.some(el => isNaN(el))) {
    sortOutput.textContent = 'Your input is incorrect!'
    sortInput.focus()

  } else {
    if (sortDir === 'desc') {
      sortedArr.reverse()
    }
    sortOutput.textContent = sortedArr

  }
}

sortInput.addEventListener('change', sortArray)
sortSelecting.addEventListener('change', sortArray)
sortDirection.addEventListener('change', sortArray)
sortInput.addEventListener('keydown', runWithKeyEnter.bind(this, sortArray))