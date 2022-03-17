import { connect } from 'react-redux'

import MenuItem from '../components/MenuItem.jsx'
import { requestIngredients, postIngredients } from '../actions/menuActions.js'
import ingredients from '../../assets/JSON/ingredients.JSON'

const mapStateToProps = (
  state,
  ownProps
) => ({ 
  ingredients: state.menu.menuItems[ownProps.dish.name]?.ingredients,
  isLoading: state.menu.menuItems[ownProps.dish.name]?.isLoading
})

const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  getIngredients: () => {
    const title = ownProps.dish.name

    dispatch(requestIngredients(title))

    setTimeout(() => { 
      dispatch(postIngredients(title, ingredients[title]))
    }, 3000)    
  }
})

const MenuItemWithIngredients = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem)

export default MenuItemWithIngredients