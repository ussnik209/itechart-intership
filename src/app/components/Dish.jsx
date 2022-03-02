import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import React from 'react'

const Dish = ({name, price}) => (
  <CardActionArea sx={{
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center' 
  }}>
    <CardMedia sx={{
      border: '1px solid black',
    }}
      component="img"
      image=""
      alt="pizza"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: {price/10}$
      </Typography>
    </CardContent>
  </CardActionArea>
)

  export default Dish