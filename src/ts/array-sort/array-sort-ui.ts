import { arraySort } from './Array-sort'
import { getSelected, runWithKeyEnter } from '../utils/utils'

const arraySorting = document.querySelector<HTMLElement>('.array-sort')
const sortInput = arraySorting.querySelector<HTMLInputElement>('#array-sort-input')
const sortSelecting = arraySorting.querySelector<HTMLSelectElement>('#sort-selection')
const sortOutput = arraySorting.querySelector<HTMLOutputElement>('#array-sort-output')
const sortDirection = arraySorting.querySelector<HTMLSelectElement>('.sort-direction')

function sortArray() {
  if (sortInput.value === '') {
    sortOutput.textContent = 'Your input is empty!'
    sortInput.focus()
    return
  }

  const arr = sortInput.value.split(',').map((el) => +el)

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
    default:
      throw Error('Incorrect type of sorting!')
  }

  if (sortedArr.some((el) => Number.isNaN(el))) {
    sortOutput.textContent = 'Your input is incorrect!'
    sortInput.focus()
  } else {
    if (sortDir === 'desc') {
      sortedArr.reverse()
    }
    sortOutput.textContent = String(sortedArr)
  }
}

sortInput.addEventListener('change', sortArray)
sortSelecting.addEventListener('change', sortArray)
sortDirection.addEventListener('change', sortArray)
sortInput.addEventListener('keydown', runWithKeyEnter.bind(this, sortArray))