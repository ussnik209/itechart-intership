const menuReducer = (state = {
  isLoaded: false
}, action) => {
  switch (action.type) {
    case 'REQUEST_MENU':
      return { 
        isLoaded: action.isLoaded
       }
    case 'POST_MENU':
      return { 
        isLoaded: action.isLoaded,
        menu: action.menu 
      }
    default:
      return state
  }
}

export default menuReducer