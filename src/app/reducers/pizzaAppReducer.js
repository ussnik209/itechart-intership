import { combineReducers } from 'redux'

import menuReducer from './menuReducer'

const pizzaAppReducer = combineReducers({
  menuReducer
})

export default pizzaAppReducer