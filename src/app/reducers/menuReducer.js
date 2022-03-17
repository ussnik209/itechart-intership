import menuItem from "./menuItemReducer"

const menu = (state = {
  isLoaded: false,
  ingredients: {},
  menu: [],
  menuItems: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_MENU':
      return { 
        ...state,
        isLoaded: action.isLoaded
       }
    case 'POST_MENU':
      return { 
        ...state,
        isLoaded: action.isLoaded,
        menu: action.menu 
      }
    case 'REQUEST_INGREDIENTS':
      return { 
        ...state,
        menuItems: {
          ...state.menuItems,
          ...menuItem(
            state.menuItems[action.title] | {},
            action
          )
        }
      }
    case 'POST_INGREDIENTS':
      return { 
        ...state,
        menuItems: {
          ...state.menuItems,
          ...menuItem(
            state.menuItems[action.title] | {},
            action
          )
        }
      }
    default:
      return state
  }
}

export default menu