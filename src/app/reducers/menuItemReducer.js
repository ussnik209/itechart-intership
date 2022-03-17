const menuItem = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_INGREDIENTS':
      return { 
        [action.title]: {
          isLoading: action.isLoading
        }
      }
    case 'POST_INGREDIENTS':
      return { 
        [action.title]: {
          isLoading: action.isLoading,
          ingredients: action.ingredients 
        }
      }
    default:
      return state
  }
}

export default menuItem