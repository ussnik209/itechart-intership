import React from 'react'

import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const favoriteButton = {
  position: 'absolute',
  top: '0px',
  right: '0px',
}

const FavoriteButton = () => (
  <IconButton size="large" style={favoriteButton}>
    <FavoriteIcon />
  </IconButton>
)

export default FavoriteButton