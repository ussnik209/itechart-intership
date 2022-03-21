import { historyTitle } from '../constants/constants'

const order = (state = {
  orderList: [],
  isConfirmed: false,
  isConfirmingOpen: false,
  isLoading: false,
}, action) => {

  switch (action.type) {
    case 'ADD_TO_ORDER':
      {
        const matchedDish = state.orderList.find(dish => dish.id === action.dish.id)

        return {
          ...state,
          orderList: matchedDish ? [
            ...state.orderList.filter(dish => dish !== matchedDish),
            {...matchedDish, number: matchedDish.number + 1 }
          ] : [
            ...state.orderList,
            {...action.dish, number: 1 }
          ]
        }
      }
    case 'REMOVE_FROM_ORDER':
      {
        const matchedDish = state.orderList.find(dish => dish.id === action.dish.id)

        return {
          ...state,
          orderList: matchedDish.number > 1 ? [
            ...state.orderList.filter(dish => dish !== action.dish),
            {...matchedDish, number: matchedDish.number - 1 }

          ].sort((dishA, dishB) => dishA.id - dishB.id) : [
            ...state.orderList.filter(dish => dish !== action.dish)
          ]
        }
      }
    case 'MAKE_ORDER':
      if (state.isConfirmed) {
        localStorage.getItem(historyTitle) ?
          localStorage.setItem(historyTitle, JSON.stringify([
            state.orderList,
            ...JSON.parse(localStorage.getItem(historyTitle))
          ])) :
          localStorage.setItem(historyTitle, JSON.stringify([
            state.orderList
          ]))

        return {
          ...state,
          orderList: [],
          isLoading: false,
        }
      }

      return state
    case 'GET_ORDER_CONFIRMATION':
      return {
        ...state,
        isConfirmed: action.isConfirmed,
        isLoading: true
      }
    case 'OPEN_CONFIRMING':
      return {
        ...state,
        isConfirmingOpen: true
      }
    case 'CLOSE_CONFIRMING':
      return {
        ...state,
        isConfirmingOpen: false
      }
    default:
      return state
  }
}

export default order