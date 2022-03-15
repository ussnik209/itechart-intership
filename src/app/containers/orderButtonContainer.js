import { connect } from 'react-redux'

import OrderButton from '../components/common/TitledButton.jsx'
import { addToOrder } from '../actions/orderActions'


const mapStateToProps = (
  state,
  ownProps
) => ({ 
  title: 'Add to basket',
  ...ownProps
})

const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  onClick: () => {
    dispatch(addToOrder(ownProps.dish))    
  }
})

const AddToOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default AddToOrder