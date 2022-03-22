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

const openConfirming = () => {
  return {
    type: 'OPEN_CONFIRMING'
  }
}

const closeConfirming = () => {
  return {
    type: 'CLOSE_CONFIRMING'
  }  
}

const toggleUsingDiscount = () => {
  return {
    type: 'TOGGLE_USING_DISCOUNT'
  }  
}

export { 
  addToOrder,
  removeFromOrder, 
  makeOrder, 
  confirmOrder,
  openConfirming,
  closeConfirming,
  toggleUsingDiscount
}