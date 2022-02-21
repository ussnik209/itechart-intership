import React from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout.jsx"
import Menu from "./components/Menu.jsx"

const PizzaApp = () => (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />}/>
        {/* <Route path="basket" element={}/> */}
      </Route>
    </Routes>
  )

export default PizzaApp