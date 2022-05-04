import React from 'react'

import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const FavoriteButton = () => (
  <IconButton size="large" 
    className="favorite-button"
  >
    <FavoriteIcon />
  </IconButton>
)

export default FavoriteButton