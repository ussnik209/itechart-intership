import { combineReducers } from 'redux'

import menu from './menuReducer'
import order from './orderReducer'

const pizzaAppReducer = combineReducers({
  menu,
  order
})

export default pizzaAppReducer