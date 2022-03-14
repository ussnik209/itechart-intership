import React from 'react'

import { Grid } from '@mui/material'

import MenuItem from './MenuItem.jsx'

const TwoColDishes = ({dishList}) => (
  <Grid container spacing={2} sx={{
    p: 1
  }}>
    {dishList.map((dish) => (
      <Grid item xs={6} key={dish.id}>
        <MenuItem 
          dish={dish} 
          />
      </Grid>
    ))}
  </Grid>
)

export default TwoColDishes