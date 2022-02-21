import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => (
  <>
  <header>
    <div className="container">
      <nav>
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/basket">Basket</NavLink>
      </nav>
    </div>
  </header>

  <main className="container">
    <Outlet />
  </main>
  </>
)

export default Layout