const requestMenu = () => {
  return {
    type: 'REQUEST_MENU',
    isLoaded: false,
  }
}

const postMenu = (menu) => {
  return {
    type: 'POST_MENU',
    isLoaded: true,
    menu,
  }
}

const requestIngredients = (title) => {
  return {
    type: 'REQUEST_INGREDIENTS',
    isLoading: true,
    title
  }
}

const postIngredients = (title, ingredients) => {
  return {
    type: 'POST_INGREDIENTS',
    isLoading: false,
    title,
    ingredients
  }
}

export {
  requestMenu,
  postMenu,
  requestIngredients,
  postIngredients
}