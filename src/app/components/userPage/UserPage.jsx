import React from 'react'

import { Grid } from '@mui/material'

import Profile from './Profile.jsx'

const UserPage = () => (
  <Grid container>
    <Grid item xs={12}>
      <Profile />
    </Grid>
    <Grid item xs={12}>

    </Grid>
  </Grid>
)

export default UserPage