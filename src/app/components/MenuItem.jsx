import React from 'react'

import { 
  Card, 
  CardActions, 
  Accordion, 
  AccordionDetails, 
  AccordionSummary 
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
        {
          ingredients?.join(', ')
        }
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