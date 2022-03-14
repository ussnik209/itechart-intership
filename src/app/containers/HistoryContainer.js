import { connect } from 'react-redux'

import History from '../components/History.jsx'

import { historyTitle } from '../constants/constants'


const mapStateToProps = (

) => ({ 
  history: JSON.parse(localStorage.getItem(historyTitle))
})

const mapDispatchToProps = (

) => ({
  
})

const DisplayingHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default DisplayingHistory