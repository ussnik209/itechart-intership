import React from "react"
import { Stack, Alert, AlertTitle } from '@mui/material'
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem.jsx'

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
        return <MenuItem key={dish.id} dish={dish}/>
      }
    )
    }
  </Stack>
  </>
)

export default Basket