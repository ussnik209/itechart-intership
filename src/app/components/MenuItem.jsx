import { Card } from '@mui/material'
import React from 'react'

import CardButton from './CardButton.jsx'
import Dish from './Dish.jsx'

const MenuItem = ({dish}) => (
  <Card sx={{
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center' 
  }}>
    <Dish {...dish}/>
    <CardButton>Order</CardButton>
  </Card>
)

// (
//   <div className='menu__item'>
//     <Dish {...dish}/>
//     <OrderDish dishId={dish.id}/> 
//   </div>
// )

export default MenuItem