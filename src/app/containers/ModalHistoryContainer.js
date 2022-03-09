import { connect } from 'react-redux'

import Modal from '../components/common/Modal.jsx'
import { 
  openHistoryModal as openModal,
  closeHistoryModal as closeModal  
} from '../actions/historyActions'

const mapStateToProps = (
  state,
  ownProps
) => ({ 
  isOpen: state.history.isOpen
})

const mapDispatchToProps = (
  dispatch
) => ({
  handleOpen: () => dispatch(openModal()),
  handleClose: () => dispatch(closeModal())
})

const ModalHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalHistory