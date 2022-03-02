import { connect } from 'react-redux'

import Basket from '../components/Basket.jsx'

const mapStateToProps = (
  state
) => ({ 
  order: state.order
})

const mapDispatchToProps = (

) => ({
  
})

const OrderBasket = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)

export default OrderBasket