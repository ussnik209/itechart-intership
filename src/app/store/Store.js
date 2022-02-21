import { createStore } from 'redux'

import pizzaAppReducer from '../reducers/pizzaAppReducer'

const store = createStore(pizzaAppReducer)

export default store