import { connect } from 'react-redux'

import OrderButton from '../components/TitledButton.jsx'
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

const MakingOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton)

export default MakingOrder