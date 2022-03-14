import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { 
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Menu
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import ModalHistoryContainer from '../containers/ModalHistoryContainer.js'
import DisplayingHistory from '../containers/HistoryContainer'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.pages = [
      'menu',
      'basket'
    ]
  }

  handleOpenNavMenu = (event) => {
    this.props.handleOpenNavMenu(event.currentTarget);
  }

  handleCloseNavMenu = () => {
    this.props.handleCloseNavMenu(null);
  }


  render() {
    return (
      <>
      <header>
        <AppBar position='static'>
          <Container maxWidth='md'>
            <Toolbar disableGutters>
              <NavLink to='/'>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' },
                  textTransform: 'uppercase' }}
                >
                  Pizza pizza
                </Typography>
              </NavLink>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.props.target}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(this.props.target)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {this.pages.map((page) => (
                    <MenuItem key={page}>
                      <NavLink to={`/${page}`}>
                        <Typography textAlign="center">{page}</Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <NavLink to='/'>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },
                  textTransform: 'uppercase' }}
                >
                  Pizza pizza
                </Typography>
              </NavLink>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {this.pages.map((page) => (
                  <MenuItem key={page}>
                    <NavLink to={`/${page}`}>
                      <Typography textAlign="center">{page}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Box>
              <ModalHistoryContainer title='History'>
                <DisplayingHistory />
              </ModalHistoryContainer>
            </Toolbar>
          </Container>
        </AppBar>
      </header>

      <Container maxWidth="md">
        <Outlet />
      </Container>     
      </>
  )
} 
}

export default Layout