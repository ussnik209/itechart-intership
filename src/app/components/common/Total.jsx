import React from 'react'

import { Typography } from '@mui/material'

const Total = ({ title, total }) => (
  <Typography>{title}: {total}</Typography>
)

export default Total