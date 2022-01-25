import { arraySort } from './Array-sort'
import { getSelected, runWithKeyEnter } from '../utils/utils'

const arraySorting = document.querySelector<HTMLElement>('.array-sort')
const sortInput = arraySorting.querySelector<HTMLInputElement>('#array-sort-input')
const sortSelect = arraySorting.querySelector<HTMLSelectElement>('#sort-selection')
const sortOutput = arraySorting.querySelector<HTMLOutputElement>('#array-sort-output')
const sortDirectionSelect = arraySorting.querySelector<HTMLSelectElement>('.sort-direction')
const sortTypes = sortSelect.querySelectorAll('option')
const sortDirections = sortDirectionSelect.querySelectorAll('option')

function sortArray() {
  if (sortInput.value === '') {
    sortOutput.textContent = 'Your input is empty!'
    sortInput.focus()
    return
  }

  const arr = sortInput.value.split(',').map((el) => +el)

  let sortType = getSelected(sortTypes)
  if (sortType === null) {
    sortOutput.textContent = 'You should choose a sort type!'
    sortSelect.focus()
    return
  }

  let sortDir = getSelected(sortDirections)
  if (sortDir === null) {
    sortOutput.textContent = 'You should choose a sort direction!'
    sortDirectionSelect.focus()
    return
  }

  const sortTypeName = sortType.value
  const sortDirName = sortDir.value
  let sortedArr = []

  switch (sortTypeName) {
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
    if (sortDirName === 'desc') {
      sortedArr.reverse()
    }
    sortOutput.textContent = String(sortedArr)
  }
}

sortInput.addEventListener('change', sortArray)
sortSelect.addEventListener('change', sortArray)
sortDirectionSelect.addEventListener('change', sortArray)
sortInput.addEventListener('keydown', runWithKeyEnter.bind(this, sortArray))