import { combineReducers } from 'redux'

import menu from './menuReducer'
import orders from './ordersReducer'

const pizzaAppReducer = combineReducers({
  menu,
  orders
})

export default pizzaAppReducer