import React from 'react'

import { Grid } from '@mui/material'

import AddingComponentsList from './AddingComponentsList.jsx'

const Customizer = () => (
  <>
  <Grid container spacing={2}>
    <Grid item xs={8}></Grid>
    <Grid item xs={4}>
      <AddingComponentsList />
    </Grid>
  </Grid>
  </>
)

export default Customizer