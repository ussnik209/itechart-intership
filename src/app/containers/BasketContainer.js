import { connect } from 'react-redux'

import Basket from '../components/Basket.jsx'

const mapStateToProps = (
  state
) => ({
    order: state.order.orderList,
    total: (state.order.sum / 10).toFixed(1),
    points: state.points.amount,
    totalWithDiscount: ((state.order.sum / 10) - state.points.amount).toFixed(1)
})

const mapDispatchToProps = (

) => ({

})

const OrderBasket = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)

export default OrderBasket