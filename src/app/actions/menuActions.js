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

export {
  requestMenu,
  postMenu
}