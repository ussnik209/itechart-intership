import { connect } from 'react-redux'

import Basket from '../components/Basket.jsx'
import { toggleUsingDiscount } from '../actions/orderActions.js'

const mapStateToProps = (
  state
) => ({
    order: state.order.orderList,
    total: (state.order.sum / 10).toFixed(1),
    points: state.points.amount,
    totalWithDiscount: ((state.order.sum / 10) - state.points.amount).toFixed(1),
    isUsingDiscount: state.order.isUsingDiscount
})

const mapDispatchToProps = (
  dispatch
) => ({
  toggleUsingDiscount: () => {
    dispatch(toggleUsingDiscount())
  }
})

const OrderBasket = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)

export default OrderBasket