import { combineReducers } from 'redux'

import menu from './menuReducer'
import order from './orderReducer'
import appBar from './appBarReducer'
import history from './historyReducer'

const pizzaAppReducer = combineReducers({
  menu,
  order,
  appBar,
  history
})

export default pizzaAppReducer