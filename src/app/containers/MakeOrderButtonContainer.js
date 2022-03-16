import { connect } from 'react-redux'

import OrderButton from '../components/common/TitledLoadingButton.jsx'
import { makeOrder, confirmOrder, openConfirming } from '../actions/orderActions'




const mapStateToProps = (
  state,
  ownProps
) => ({ 
  title: 'Make order',
  isLoading: state.order.isLoading,
  ...ownProps
})

const mapDispatchToProps = (
  dispatch
) => ({
  onClick: () => {
    dispatch(confirmOrder(true))

    setTimeout(() => {
      dispatch(openConfirming())
      dispatch(makeOrder())
    }, 3000)
  }
})

const AddToOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default AddToOrder