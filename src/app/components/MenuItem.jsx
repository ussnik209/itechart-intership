import { Card, CardActions } from '@mui/material'
import React from 'react'

import Dish from './Dish.jsx'

const MenuItem = ({dish, Button}) => (
  <Card sx={{
    width: 1
  }}>
    <Dish {...dish}/>
    <CardActions>
      <Button dish={dish} />
    </CardActions>
  </Card>
)

export default MenuItem