const addToOrder = (dish) => {
  return {
    type: 'ADD_TO_ORDER',
    dish
  }
}

const removeFromOrder = (id) => {
  return {
    type: 'REMOVE_FROM_ORDER',
    id
  }
}

export { addToOrder, removeFromOrder }