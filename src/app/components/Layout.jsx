import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <header>
        <Container maxWidth="md">
          <nav>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/basket">Basket</NavLink>
          </nav>
        </Container>
      </header>

      <Container maxWidth="md">
        <Outlet />
      </Container>     
      </>
  )
} 
}

export default Layout