import { connect } from 'react-redux'

import OrderButton from '../components/OrderButton.jsx'
import { addToOrder } from '../actions/orderActions'


const mapStateToProps = (
  state,
  ownProps
) => ({ 
  menu: state.menu.menu,
  ...ownProps
})

const mapDispatchToProps = (
  dispatch
) => ({
  addToOrder: (dish) => {
    dispatch(addToOrder(dish))    
  }
})

const MakingOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default MakingOrder