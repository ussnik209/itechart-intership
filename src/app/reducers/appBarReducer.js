const appBar = (
  state = {
    target: null
  },
   action
) => {
  switch (action.type) {
    case 'OPEN_NAV_MENU':
      return { 
        target: action.target
       }
    case 'CLOSE_NAV_MENU':
      return { 
        target: null
      }
    default:
      return state
  }
}

export default appBar