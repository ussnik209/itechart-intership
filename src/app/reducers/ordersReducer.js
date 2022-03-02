const orders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return [
        ...state,
        action.dish
      ]
    case 'REMOVE_FROM_ORDER':
      return [
        ...state.filter(dish => dish.id != action.id)
      ]
    default:
      return state
  }
}

export default orders