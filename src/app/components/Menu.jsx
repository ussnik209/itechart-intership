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
      <ul id="menu">{ !this.props.isLoaded ? 'Loading...'
        : this.props.menu
          .filter(dish => dish.category === 'Pizza')
          .map((dish) => {
            return <MenuItem key={dish.id} dish={dish}/>
          }
        )}
      </ul>
      </>
    )
  }
}

export default Menu