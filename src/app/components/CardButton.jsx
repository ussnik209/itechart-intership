import React from 'react'

import {
  CardActions,
  Button
} from '@mui/material'

const CardButton = ({children}) => (
  <CardActions>
      <Button size="small" color="primary">
        {children}
      </Button>
    </CardActions>
)

export default CardButton