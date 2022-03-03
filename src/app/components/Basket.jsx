import React from "react"
import { Grid, Alert, AlertTitle, Typography, Badge } from '@mui/material'
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem.jsx'
import RemoveButton from '../containers/RemoveButtonContainer'

const Basket = ({order}) => (
  <>
  <Grid container spacing={2} sx={{
    mt: 2
  }}>
    {!order.length ? 
      <Grid item xs={12}>
        <Alert severity='warning' variant='outlined'>
          <AlertTitle>Empty</AlertTitle>
          Your basket is still — <strong>empty!</strong><br/>
          Add goods from <Link to='/menu'>menu</Link>
        </Alert>
      </Grid>
      : order.map((dish) => (
        <Grid item xs={6} key={dish.id}>
          <Badge sx={{
              width: 1
          }}
            color='secondary'
            badgeContent={dish.number}>
            <MenuItem
              dish={dish}
              Button={RemoveButton} 
            />
          </Badge>
        </Grid>
      ))
    }
  </Grid>
  </>
)

export default Basket