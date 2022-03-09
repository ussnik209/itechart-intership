const history = (
  state = {
    isOpen: false
  },
   action
) => {
  switch (action.type) {
    case 'OPEN_HISTORY_MODAL':
      return { 
        isOpen: true
       }
    case 'CLOSE_HISTORY_MODAL':
      return { 
        isOpen: false
      }
    default:
      return state
  }
}

export default history