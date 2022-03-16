import React from "react"
import { Grid, Badge } from '@mui/material'
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem.jsx'
import RemoveButton from '../containers/RemoveButtonContainer'
import MakeOrderButton from '../containers/MakeOrderButtonContainer'
import AlertMessage from "./common/AlertMessage.jsx"
import ConfirmingSnackbar from "../containers/ConfirmingSnackbarContainer"

const Basket = ({order}) => (
  <>
  <Grid container spacing={2} sx={{
    mt: 2
  }}>
    {!order.length ? 
      <Grid item xs={12}>
        <AlertMessage title='Empty'>
          Your basket is still — <strong>empty!</strong><br/>
          Add goods from <Link to='/menu'>menu</Link>
        </AlertMessage>
      </Grid>
      : order.map((dish) => (
        <Grid item xs={6} key={dish.id}>
          <Badge sx={{
              width: 1
          }}
            color='secondary'
            badgeContent={dish.number}>
            <MenuItem
              dish={dish}
              Button={RemoveButton} 
            />
          </Badge>
        </Grid>
      ))
    }
    {
      order.length ? <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <MakeOrderButton />
      </Grid> : <></>
    }
  </Grid>
  <ConfirmingSnackbar />
  </>
)

export default Basket