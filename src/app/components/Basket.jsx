import React from "react"
import { Stack, Alert, AlertTitle, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem.jsx'
import RemoveButton from '../containers/RemoveButtonContainer'

const Basket = ({order}) => (
  <>
  <Stack sx={{
    mt: 2
  }}>
    {!order.length ? 
      <Alert severity='warning' variant='outlined'>
        <AlertTitle>Empty</AlertTitle>
        Your basket is still — <strong>empty!</strong><br/>
        Add goods from <Link to='/menu'>menu</Link>
      </Alert>
      : order.map((dish) => {
        return (
        <div key={dish.id}>
        <MenuItem 
        dish={dish}
        Button={RemoveButton}/>
        <Typography>Number:{dish.number}</Typography>
        </div>
        )
      }
    )
    }
  </Stack>
  </>
)

export default Basket