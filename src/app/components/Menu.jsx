import { Grid } from '@mui/material'
import React from 'react'

import MenuItem from './MenuItem.jsx'
import OrderButtonContainer from '../containers/OrderButtonContainer'

import { menuPath as menuApi } from '../constants/constants'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.updateMenu(menuApi)
    
  }
  
  componentWillUnmount() {

  }

  render() {
    return (
      <>
      <h1>This is menu.</h1>
      <Grid container spacing={2} sx={{
        mt: 2
      }}>
        { !this.props.isLoaded ? 'Loading...'
        : this.props.menu
          .filter(dish => dish.category === 'Pizza')
          .map((dish) => {
            return <Grid item xs={6} key={dish.id}>
              <MenuItem 
                dish={dish} 
                Button={OrderButtonContainer}
              />
            </Grid>
          }
        )}
      </Grid>
      </>
    )
  }
}

export default Menu