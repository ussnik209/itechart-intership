import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '80%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll'
};

export default function TransitionsModal({
  title, isOpen, handleClose, handleOpen, children
}) {
  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>{title}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={true}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
