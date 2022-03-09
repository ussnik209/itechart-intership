const openNavMenu = (target) => ({
  type: 'OPEN_NAV_MENU',
  target
})

const closeNavMenu = () => ({
  type: 'CLOSE_NAV_MENU'
})

export { openNavMenu, closeNavMenu}