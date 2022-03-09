const storageTitle = 'orderHistory'

const order = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TO_ORDER': {
      const matchedDish = state.find(dish => dish.id === action.dish.id)
      
      return matchedDish ? [
        ...state.filter(dish => dish !== matchedDish),
        { ...matchedDish, number: matchedDish.number + 1}
      ]
      : [
        ...state,
        { ...action.dish, number: 1}
      ]
    }
    case 'REMOVE_FROM_ORDER':{
      const matchedDish = state.find(dish => dish.id === action.dish.id)

      return matchedDish.number > 1 ? [
        ...state.filter(dish => dish !== action.dish),
        { ...matchedDish, number: matchedDish.number - 1 }
        
      ].sort((dishA, dishB) => dishA.id - dishB.id) 
      : [
        ...state.filter(dish => dish !== action.dish)
      ]
    }
    case 'MAKE_ORDER':
      localStorage.getItem(storageTitle)
        ? localStorage.setItem(storageTitle, [
          state.map(obj => JSON.stringify(obj)),
          orderHistory
        ])
        : localStorage.setItem(storageTitle, [
          state.map(obj => JSON.stringify(obj))
        ])      

        return []
    default:
      return state
  }
}

export default order