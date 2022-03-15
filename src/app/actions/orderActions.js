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

const makeOrder = () => {
  return {
    type: 'MAKE_ORDER'
  }
}

const confirmOrder = (isConfirmed) => {
  return {
    type: 'GET_ORDER_CONFIRMATION',
    isConfirmed
  }
}

export { addToOrder, removeFromOrder, makeOrder, confirmOrder }