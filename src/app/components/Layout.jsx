import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../containers/HeaderContainer'

const Layout = () => (
  <>
  <Header />

  <Outlet />
  </>
)

export default Layout