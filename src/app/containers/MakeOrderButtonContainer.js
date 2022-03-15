import { connect } from 'react-redux'

import OrderButton from '../components/TitledButton.jsx'
import { makeOrder } from '../actions/orderActions'
import { confirmOrder } from '../actions/orderActions'



const mapStateToProps = (
  state,
  ownProps
) => ({ 
  title: 'Make order',
  ...ownProps
})

const mapDispatchToProps = (
  dispatch
) => ({
  onClick: () => {
    dispatch(confirmOrder(true))

    setTimeout(() => dispatch(makeOrder()), 3000)
  }
})

const AddToOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default AddToOrder