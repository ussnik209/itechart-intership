import React from 'react'

import { Button } from '@mui/material'

const TitledButton = ({title, onClick}) => (
    <Button size="small" color="primary" onClick={onClick}>
      {title}
    </Button>
)

export default TitledButton