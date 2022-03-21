import { combineReducers } from 'redux'

import menu from './menuReducer'
import order from './orderReducer'
import appBar from './appBarReducer'
import history from './historyReducer'
import points from './pointsReducer'

const pizzaAppReducer = combineReducers({
  menu,
  order,
  appBar,
  history,
  points
})

export default pizzaAppReducer