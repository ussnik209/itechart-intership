import React from 'react'

import { Alert, AlertTitle } from '@mui/material'

const AlertMessage = ({title, children}) => (
  <Alert severity='warning' variant='outlined'>
      <AlertTitle>{title}</AlertTitle>
      {children}
  </Alert>
)

export default AlertMessage