import { connect } from 'react-redux'

import OrderButton from '../components/common/TitledLoadingButton.jsx'
import { makeOrder, confirmOrder, openConfirming } from '../actions/orderActions'
import { addPoints, subPoints } from '../actions/pointsActions'



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
  dispatch,
  ownProps
) => ({
  onClick: (order) => {
    dispatch(confirmOrder(true))

    setTimeout(() => {
      let sum =  order.reduce((sum, dish) => {
        return sum + (dish.price / 10) * dish.number
      }, 0)

      if (ownProps.isDiscount) {
        const pointsAvailable = ownProps.points
        const pointsToSub = pointsAvailable <= sum ? pointsAvailable
        : pointsAvailable - ( pointsAvailable - Math.trunc(sum)) 
        
        dispatch(subPoints(pointsToSub))
        sum = sum - pointsToSub
      }
      const pointsReceived = Math.trunc( sum / 10)
      
      dispatch(addPoints(pointsReceived))
      
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