import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Layout from './components/Layout.jsx'
import UpdatingMenu from './containers/menuContainer'
import Homepage from './components/Homepage.jsx'
import Basket from './components/Basket.jsx'
import store from './store/Store'

class PizzaApp extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
 
  render() {
    return (
    <Provider store={store}>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path="menu" element={<UpdatingMenu />}/>
          <Route path="basket" element={<Basket />}/>
        </Route>
      </Routes>
    </Provider>
    )
  }
}

export default PizzaApp