import { combineReducers } from 'redux'

import menu from './menuReducer'
import order from './orderReducer'
import appBar from './appBarReducer'

const pizzaAppReducer = combineReducers({
  menu,
  order,
  appBar
})

export default pizzaAppReducer