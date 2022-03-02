import { connect } from 'react-redux'

import CardButton from '../components/TitledButton.jsx'
import { removeFromOrder } from '../actions/orderActions'


const mapStateToProps = (
  state,
  ownProps
) => ({ 
  title: 'Remove from basket',
  ...ownProps
})

const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  onClick: () => {
    dispatch(removeFromOrder(ownProps.dish))    
  }
})

const RemoveOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardButton)

export default RemoveOrder