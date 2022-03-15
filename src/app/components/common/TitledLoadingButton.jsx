import React from 'react'

import { LoadingButton } from '@mui/lab'

const TitledLoadingButton = ({title, onClick, isLoading}) => (
  <LoadingButton loading={isLoading}  size="large" color="primary" onClick={onClick}>
    {title}
  </LoadingButton>
)

export default TitledLoadingButton