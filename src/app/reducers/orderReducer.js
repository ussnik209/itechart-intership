import { historyTitle } from '../constants/constants'

const order = (state = {
  orderList: [],
  sum: 0,
  isConfirmed: false,
  isConfirmingOpen: false,
  isLoading: false,
  isUsingDiscount: false
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
          ],
          sum: state.sum + action.dish.price
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
          ],
          sum: state.sum - action.dish.price
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
          sum: 0,
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
    case 'TOGGLE_USING_DISCOUNT':
      return {
        ...state,
        isUsingDiscount: !state.isUsingDiscount
      }
    default:
      return state
  }
}

export default order