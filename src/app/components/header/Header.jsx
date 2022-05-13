import React from 'react'
import { NavLink } from 'react-router-dom'

import { AppBar, Toolbar, Box } from '@mui/material'

import Logo from './Logo.jsx'
import SearchBar from './SearchBar.jsx'
import UserMenu from './UserMenu.jsx'

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='sticky'>
      <Toolbar sx={{ 
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <NavLink to='/'>
          <Logo content='BooksMyLove' />
        </NavLink>
        <SearchBar />
        <UserMenu />
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header