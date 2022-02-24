import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <header>
        <div className="container">
          <nav>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/basket">Basket</NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
      </>
  )
} 
}

export default Layout