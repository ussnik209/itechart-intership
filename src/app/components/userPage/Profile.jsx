import React from 'react'

import { Grid } from '@mui/material'

import SectionHeader from '../common/SectionHeader.jsx'
import UserNameCard from './UserNameCard.jsx'

const Profile = () => (
  <Grid container>
    <Grid item xs={12}>
      <SectionHeader>My profile</SectionHeader>
    </Grid>
    <Grid item xs={6}>
      <UserNameCard></UserNameCard>
    </Grid>
    <Grid item xs={6}>
      
    </Grid>
  </Grid>
)

export default Profile