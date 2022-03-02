import { Card } from '@mui/material'
import React from 'react'

import OrderButtonContainer from '../containers/OrderButtonContainer'
import Dish from './Dish.jsx'

const MenuItem = ({dish}) => (
  <Card sx={{
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center' 
  }}>
    <Dish {...dish}/>
    <OrderButtonContainer dishId={dish.id}>Order</OrderButtonContainer>
  </Card>
)

export default MenuItem