import { Stack } from '@mui/material'
import React from 'react'

import MenuItem from './MenuItem.jsx'

const menuApi = 'https://private-anon-52b8161a2d-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza'

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
      <Stack spacing={2}>
        { !this.props.isLoaded ? 'Loading...'
        : this.props.menu
          .filter(dish => dish.category === 'Pizza')
          .map((dish) => {
            return <MenuItem key={dish.id} dish={dish}/>
          }
        )}
      </Stack>
      </>
    )
  }
}

export default Menu