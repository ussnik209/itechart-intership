import { connect } from 'react-redux'

import OrderButton from '../components/common/TitledLoadingButton.jsx'
import { makeOrder, confirmOrder, openConfirming } from '../actions/orderActions'
import { addPoints } from '../actions/pointsActions'



const mapStateToProps = (
  state,
  ownProps
) => ({ 
  title: 'Make order',
  isLoading: state.order.isLoading,
  order: state.order.orderList,
  ...ownProps
})

const mapDispatchToProps = (
  dispatch
) => ({
  onClick: (order) => {
    dispatch(confirmOrder(true))

    setTimeout(() => {
      const sum =  order.reduce((sum, dish) => {
        return sum + (dish.price / 10) * dish.number
      }, 0)

      const points = Math.trunc( sum / 10)
      
      dispatch(addPoints(points))
      
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