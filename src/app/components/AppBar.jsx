import React from 'react'

import { Outlet } from 'react-router-dom'

const AppBar = () => (
  <>
  <div>This is App Bar</div>
  <Outlet />
  </>
)

export default AppBar