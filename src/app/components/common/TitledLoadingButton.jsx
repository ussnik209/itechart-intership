import React from 'react'

import { LoadingButton } from '@mui/lab'

const TitledLoadingButton = ({title, onClick, isLoading, order}) => (
  <LoadingButton loading={isLoading}  size="large" color="primary" onClick={() => onClick(order)}>
    {title}
  </LoadingButton>
)

export default TitledLoadingButton