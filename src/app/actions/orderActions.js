const addToOrder = (dish) => {
  return {
    type: 'ADD_TO_ORDER',
    dish
  }
}

const removeFromOrder = (dish) => {
  return {
    type: 'REMOVE_FROM_ORDER',
    dish
  }
}

export { addToOrder, removeFromOrder }