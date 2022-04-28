import React from 'react'

import { AppBar, Toolbar, Box } from '@mui/material'

import Logo from './Logo.jsx'
import SearchBar from './SearchBar.jsx'
import UserMenu from './UserMenu.jsx'

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar sx={{ 
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Logo content='BooksMyLove' />
        <SearchBar />
        <UserMenu />
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header