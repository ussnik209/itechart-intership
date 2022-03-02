import React from 'react'

import {
  CardActions,
  Button
} from '@mui/material'

const OrderButton = ({children, dishId, menu, addToOrder}) => (
  <CardActions>
    <Button size="small" color="primary" onClick={() => addToOrder(menu, dishId)}>
      {children}
    </Button>
  </CardActions>
)

export default OrderButton