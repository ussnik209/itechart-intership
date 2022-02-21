import React, { useEffect } from 'react'

const menuApi = 'https://private-anon-52b8161a2d-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza'

const Menu = () => {

  useEffect(() => {
     fetch(menuApi)
      .then(response => response.json())
      .then(menu => console.log(menu))
  }, [])

  return (
    <>
    </>
  )
}

export default Menu