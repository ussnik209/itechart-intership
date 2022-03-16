import React from 'react'

import { 
  Card, 
  CardActions, 
  Accordion, 
  AccordionDetails, 
  AccordionSummary 
} from '@mui/material'

import Dish from './Dish.jsx'


const MenuItem = ({dish, Button}) => (
  <Card sx={{
    width: 1
  }}>
    <Accordion>
      <AccordionSummary>
        <Dish {...dish}/>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eaque impedit odio possimus eveniet sit adipisci cumque recusandae dolore unde laborum libero esse explicabo sunt molestias, eligendi blanditiis! Eum, odit!
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