import React from 'react'

import { Alert as MuiAlert, Snackbar } from '@mui/material/';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

const SuccessSnackbar = ({message, isOpen, handleClose, success}) => (
  <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
    <Alert 
      onClose={handleClose} 
      severity={success ? 'success' : 'error'} 
      sx={{ width: '100%' }}
    >
      {message}
    </Alert>
  </Snackbar>
)

export default SuccessSnackbar