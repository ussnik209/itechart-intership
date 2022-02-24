import React from 'react'

import Dish from './Dish.jsx'

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
      {console.log(this.props.isLoaded)}
      <ul id="menu">{ !this.props.isLoaded ? 'Loading...'
        : this.props.menu.map((dish) => {
          console.log(dish);
          return <Dish key={dish.id} {...dish}/>
        }
        )}
      </ul>

      </>
    )
  }
}

export default Menu