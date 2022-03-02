import { connect } from 'react-redux'

import { requestMenu, postMenu } from '../actions/menuActions'
import Menu from '../components/Menu.jsx'

const mapStateToProps = (
  state
) => ({ ...state.menu })

const mapDispatchToProps = (
  dispatch
) => ({
  updateMenu: (path) => {
    dispatch(requestMenu())
    
    fetch(path)
      .then(response => response.json())
      .then(menu => dispatch(postMenu(menu)))
  }
})

const UpdatingMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default UpdatingMenu