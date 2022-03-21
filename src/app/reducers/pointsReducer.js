const points = (state = {
  amount: 0
}, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return { 
        amount: state.amount + action.points
      }
    case 'SUB_POINTS':
      return { 
        amount: state.amount - action.points
      }
    default:
      return state
  }
}

export default points