import React from 'react'

import { 
  Card, 
  CardActions, 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  CircularProgress,
  Box
} from '@mui/material'

import Dish from './Dish.jsx'


const MenuItem = ({dish, Button, ingredients, isLoading, getIngredients}) => (
  <Card sx={{
    width: 1
  }}>
    <Accordion onChange={(event, isExpended) => {
      isExpended && getIngredients()
    }}>
      <AccordionSummary>
        <Dish {...dish}/>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {
            isLoading ? <CircularProgress />
            : ingredients?.join(', ')
          }
        </Box>
      </AccordionDetails>
    </Accordion>
    <CardActions>
      {
        Button 
          ? <Button dish={dish} />
          : null
      }
    </CardActions>
  </Card>
)

export default MenuItem