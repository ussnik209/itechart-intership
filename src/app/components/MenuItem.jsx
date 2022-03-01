import React from 'react'

import OrderDish from './OrderDish.jsx'
import Dish from './Dish.jsx'

const MenuItem = ({dish}) => (
  <div className='menu__item'>
    <Dish {...dish}/>
    <OrderDish dishId={dish.id}/> 
  </div>
)

export default MenuItem