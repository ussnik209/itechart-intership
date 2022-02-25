import React from 'react'

const Dish = ({name, price}) => 
  <>
  <h2>{name}</h2>
  <span>Price: {price/10}$</span>
  </>

  export default Dish