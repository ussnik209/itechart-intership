import React from 'react'

import Paper from '@mui/material/Paper'

const Card = ({children}) => (
  <Paper sx={{
    width: "100%",
    padding: "30px",
    borderRadius: "30px"
  }}>
    {children}
  </Paper>
)

export default Card