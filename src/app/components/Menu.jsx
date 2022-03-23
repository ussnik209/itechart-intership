import { Grid, CircularProgress } from '@mui/material'
import React from 'react'

import MenuItemWithIngredients from '../containers/MenuItemContainer'
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
        { 
          !this.props.isLoaded ? <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CircularProgress size={100}/>
          </Grid>
          : this.props.menu
            .filter(dish => dish.category === 'Pizza')
            .map((dish) => {
              return <Grid item xs={6} key={dish.id}>
                <MenuItemWithIngredients 
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