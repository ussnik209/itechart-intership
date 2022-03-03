import { connect } from 'react-redux'

import OrderButton from '../components/TitledButton.jsx'
import { makeOrder } from '../actions/orderActions'


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
    dispatch(makeOrder())    
  }
})

const AddToOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default AddToOrder