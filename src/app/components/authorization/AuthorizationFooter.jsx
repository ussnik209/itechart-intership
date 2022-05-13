import React from 'react'
import { NavLink } from 'react-router-dom'

import { Typography, Divider, Box } from '@mui/material'

const AuthorizationFooter = ({children, linkContent, linkTo}) => (
  <Box>
    <Typography variant='body2' gutterBottom>
      {children}
      <NavLink to={linkTo}>{linkContent}</NavLink>
    </Typography>
    <Divider />
  </Box>
)

export default AuthorizationFooter