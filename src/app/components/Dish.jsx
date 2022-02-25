import React from 'react'

const Dish = ({name, price}) => 
  <>
  <h2>{name}</h2>
  <span>{price/10}$</span>
  </>

  export default Dish