import React from 'react'

const Dish = ({name, price}) => 
  <div>
  <h2>{name}</h2>
  <span>Price: {price/10}$</span>
  </div>

  export default Dish