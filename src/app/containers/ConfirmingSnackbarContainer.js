import { connect } from 'react-redux'

import SuccessSnackbar from '../components/common/SuccessSnackbar.jsx'
import {closeConfirming as close} from '../actions/orderActions'

const mapStateToProps = (
  state
) => ({ 
  success: state.order.isConfirmed,
  isOpen: state.order.isConfirmingOpen,
  message: state.order.isConfirmed 
    ? 'Your order is successfully confirmed!'
    : 'Sorry, your order is unconfirmed!'
})

const mapDispatchToProps = (
  dispatch
) => ({
  handleClose: (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(close())
  }
})

const ConfirmingSnackbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuccessSnackbar)

export default ConfirmingSnackbar