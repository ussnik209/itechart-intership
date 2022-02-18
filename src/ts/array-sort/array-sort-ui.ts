import { arraySort } from './Array-sort'
import { getSelected, runWithKeyEnter } from '../utils/utils'

const arraySorting = document.querySelector<HTMLElement>('.array-sort')
const sortInput = arraySorting && arraySorting.querySelector<HTMLInputElement>('#array-sort-input')
const sortSelect = arraySorting && arraySorting.querySelector<HTMLSelectElement>('#sort-selection')
const sortOutput = arraySorting && arraySorting.querySelector<HTMLOutputElement>('#array-sort-output')
const sortDirectionSelect = arraySorting && arraySorting.querySelector<HTMLSelectElement>('.sort-direction')
const sortTypes = sortSelect && sortSelect.querySelectorAll('option')
const sortDirections = sortDirectionSelect && sortDirectionSelect.querySelectorAll('option')

function sortArray() {
  if (sortInput && sortInput.value === '') {
    if (sortOutput) sortOutput.textContent = 'Your input is empty!'
    sortInput.focus()
    return
  }

  const arr = sortInput && sortInput.value.split(',').map((el) => +el)

  let sortType = sortTypes && getSelected(sortTypes)
  if (sortType === null) {
    if (sortOutput) sortOutput.textContent = 'You should choose a sort type!'
    sortSelect && sortSelect.focus()
    return
  }

  let sortDir = sortDirections && getSelected(sortDirections)
  if (sortDir === null) {
    if (sortOutput) sortOutput.textContent = 'You should choose a sort direction!'
    sortDirectionSelect && sortDirectionSelect.focus()
    return
  }

  const sortTypeName = sortType && sortType.value
  const sortDirName = sortDir && sortDir.value
  let sortedArr: null | number[] = []

  switch (sortTypeName) {
    case 'bubble':
      sortedArr = arr && arraySort.bubbleSort(arr)
      break
    case 'quick':
      sortedArr = arr && arraySort.quickSort(arr)
      break
    case 'choice':
      sortedArr = arr && arraySort.choiceSort(arr)
      break
    case 'shaker':
      sortedArr = arr && arraySort.shakerSort(arr)
      break
    default:
      throw Error('Incorrect type of sorting!')
  }

  if (sortedArr && sortedArr.some((el) => Number.isNaN(el))) {
    if (sortOutput) sortOutput.textContent = 'Your input is incorrect!'
    sortInput && sortInput.focus()
  } else {
    if (sortDirName === 'desc') {
      sortedArr && sortedArr.reverse()
    }
    if (sortOutput) sortOutput.textContent = String(sortedArr)
  }
}

sortInput && sortInput.addEventListener('change', sortArray)
sortSelect && sortSelect.addEventListener('change', sortArray)
sortDirectionSelect && sortDirectionSelect.addEventListener('change', sortArray)
sortInput && sortInput.addEventListener('keydown', (e) => {
  runWithKeyEnter.bind(this, e, sortArray)
})