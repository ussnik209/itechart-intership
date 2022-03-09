import { connect } from 'react-redux'

import Layout from '../components/Layout.jsx'
import { openNavMenu, closeNavMenu } from '../actions/appBarActions.js'

const mapStateToProps = (
  state
) => ({ 
  target: state.appBar.target
})

const mapDispatchToProps = (
  dispatch
) => ({
  handleOpenNavMenu: (target) => {

    dispatch(openNavMenu(target))
  },

  handleCloseNavMenu: () => {
    dispatch(closeNavMenu(null));
  }
})

const AppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default AppBar