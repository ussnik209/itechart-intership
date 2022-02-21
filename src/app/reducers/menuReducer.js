const menuReducer = (action, state = []) => {
  switch (action.type) {
    case 'UPDATE_MENU':
      return action.menu
    default:
      return state
  }
}

export default menuReducer