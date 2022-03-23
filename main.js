/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/actions/appBarActions.js":
/*!**************************************!*\
  !*** ./app/actions/appBarActions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNavMenu": () => (/* binding */ openNavMenu),
/* harmony export */   "closeNavMenu": () => (/* binding */ closeNavMenu)
/* harmony export */ });
var openNavMenu = function openNavMenu(target) {
  return {
    type: 'OPEN_NAV_MENU',
    target: target
  };
};

var closeNavMenu = function closeNavMenu() {
  return {
    type: 'CLOSE_NAV_MENU'
  };
};



/***/ }),

/***/ "./app/actions/historyActions.js":
/*!***************************************!*\
  !*** ./app/actions/historyActions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openHistoryModal": () => (/* binding */ openHistoryModal),
/* harmony export */   "closeHistoryModal": () => (/* binding */ closeHistoryModal)
/* harmony export */ });
var openHistoryModal = function openHistoryModal() {
  return {
    type: 'OPEN_HISTORY_MODAL'
  };
};

var closeHistoryModal = function closeHistoryModal() {
  return {
    type: 'CLOSE_HISTORY_MODAL'
  };
};



/***/ }),

/***/ "./app/actions/menuActions.js":
/*!************************************!*\
  !*** ./app/actions/menuActions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestMenu": () => (/* binding */ requestMenu),
/* harmony export */   "postMenu": () => (/* binding */ postMenu),
/* harmony export */   "requestIngredients": () => (/* binding */ requestIngredients),
/* harmony export */   "postIngredients": () => (/* binding */ postIngredients)
/* harmony export */ });
var requestMenu = function requestMenu() {
  return {
    type: 'REQUEST_MENU',
    isLoaded: false
  };
};

var postMenu = function postMenu(menu) {
  return {
    type: 'POST_MENU',
    isLoaded: true,
    menu: menu
  };
};

var requestIngredients = function requestIngredients(title) {
  return {
    type: 'REQUEST_INGREDIENTS',
    isLoading: true,
    title: title
  };
};

var postIngredients = function postIngredients(title, ingredients) {
  return {
    type: 'POST_INGREDIENTS',
    isLoading: false,
    title: title,
    ingredients: ingredients
  };
};



/***/ }),

/***/ "./app/actions/orderActions.js":
/*!*************************************!*\
  !*** ./app/actions/orderActions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToOrder": () => (/* binding */ addToOrder),
/* harmony export */   "removeFromOrder": () => (/* binding */ removeFromOrder),
/* harmony export */   "makeOrder": () => (/* binding */ makeOrder),
/* harmony export */   "confirmOrder": () => (/* binding */ confirmOrder),
/* harmony export */   "openConfirming": () => (/* binding */ openConfirming),
/* harmony export */   "closeConfirming": () => (/* binding */ closeConfirming),
/* harmony export */   "toggleUsingDiscount": () => (/* binding */ toggleUsingDiscount)
/* harmony export */ });
var addToOrder = function addToOrder(dish) {
  return {
    type: 'ADD_TO_ORDER',
    dish: dish
  };
};

var removeFromOrder = function removeFromOrder(dish) {
  return {
    type: 'REMOVE_FROM_ORDER',
    dish: dish
  };
};

var makeOrder = function makeOrder() {
  return {
    type: 'MAKE_ORDER'
  };
};

var confirmOrder = function confirmOrder(isConfirmed) {
  return {
    type: 'GET_ORDER_CONFIRMATION',
    isConfirmed: isConfirmed
  };
};

var openConfirming = function openConfirming() {
  return {
    type: 'OPEN_CONFIRMING'
  };
};

var closeConfirming = function closeConfirming() {
  return {
    type: 'CLOSE_CONFIRMING'
  };
};

var toggleUsingDiscount = function toggleUsingDiscount() {
  return {
    type: 'TOGGLE_USING_DISCOUNT'
  };
};



/***/ }),

/***/ "./app/actions/pointsActions.js":
/*!**************************************!*\
  !*** ./app/actions/pointsActions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPoints": () => (/* binding */ addPoints),
/* harmony export */   "subPoints": () => (/* binding */ subPoints)
/* harmony export */ });
var addPoints = function addPoints(points) {
  return {
    type: 'ADD_POINTS',
    points: points
  };
};

var subPoints = function subPoints(points) {
  return {
    type: 'SUB_POINTS',
    points: points
  };
};



/***/ }),

/***/ "./app/app.jsx":
/*!*********************!*\
  !*** ./app/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_AppBarContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/AppBarContainer */ "./app/containers/AppBarContainer.js");
/* harmony import */ var _containers_MenuContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/MenuContainer */ "./app/containers/MenuContainer.js");
/* harmony import */ var _components_Homepage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Homepage.jsx */ "./app/components/Homepage.jsx");
/* harmony import */ var _containers_BasketContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/BasketContainer */ "./app/containers/BasketContainer.js");
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/Store */ "./app/store/Store.js");


 // import Layout from './components/Layout.jsx'







var PizzaApp = function PizzaApp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store_Store__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "itechart-intership",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_AppBarContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Homepage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "menu",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_MenuContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "basket",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_BasketContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PizzaApp);

/***/ }),

/***/ "./app/components/Basket.jsx":
/*!***********************************!*\
  !*** ./app/components/Basket.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var _MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.jsx */ "./app/components/MenuItem.jsx");
/* harmony import */ var _containers_RemoveButtonContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/RemoveButtonContainer */ "./app/containers/RemoveButtonContainer.js");
/* harmony import */ var _containers_MakeOrderButtonContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/MakeOrderButtonContainer */ "./app/containers/MakeOrderButtonContainer.js");
/* harmony import */ var _common_AlertMessage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/AlertMessage.jsx */ "./app/components/common/AlertMessage.jsx");
/* harmony import */ var _containers_ConfirmingSnackbarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/ConfirmingSnackbarContainer */ "./app/containers/ConfirmingSnackbarContainer.js");
/* harmony import */ var _common_Total_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/Total.jsx */ "./app/components/common/Total.jsx");










var Basket = function Basket(_ref) {
  var order = _ref.order,
      total = _ref.total,
      points = _ref.points,
      totalWithDiscount = _ref.totalWithDiscount,
      isUsingDiscount = _ref.isUsingDiscount,
      toggleUsingDiscount = _ref.toggleUsingDiscount;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mt: 2
    }
  }, !order.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_AlertMessage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Empty"
  }, "Your basket is still \u2014 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "empty!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Add goods from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/menu"
  }, "menu"))) : order.map(function (dish) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: true,
      xs: 6,
      key: dish.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        width: 1
      },
      color: "secondary",
      badgeContent: dish.number
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      dish: dish,
      Button: _containers_RemoveButtonContainer__WEBPACK_IMPORTED_MODULE_2__["default"]
    })));
  }), order.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Total_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: 'Total price',
    total: total
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Total_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: 'Points',
    total: points
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Total_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: 'Price with discount',
    total: totalWithDiscount
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), order.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sx: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: points === 0,
      checked: isUsingDiscount,
      onChange: toggleUsingDiscount
    }),
    label: "Use bonus points to get discount"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_MakeOrderButtonContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_ConfirmingSnackbarContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basket);

/***/ }),

/***/ "./app/components/Dish.jsx":
/*!*********************************!*\
  !*** ./app/components/Dish.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");



var Dish = function Dish(_ref) {
  var name = _ref.name,
      price = _ref.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      alingItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      border: '1px solid black'
    },
    component: "img",
    image: "",
    alt: "pizza"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Price: ", price / 10, "$")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dish);

/***/ }),

/***/ "./app/components/History.jsx":
/*!************************************!*\
  !*** ./app/components/History.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _common_AlertMessage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/AlertMessage.jsx */ "./app/components/common/AlertMessage.jsx");
/* harmony import */ var _TwoColDishes_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwoColDishes.jsx */ "./app/components/TwoColDishes.jsx");





var History = function History(_ref) {
  var history = _ref.history;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !history ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_AlertMessage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "History is empty!"
  }, "Your order history is still empty!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Make your order soon and it will appear here!") : history.map(function (order, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TwoColDishes_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      dishList: order
    }), id != history.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        mt: 2,
        mb: 2
      }
    }) : null);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);

/***/ }),

/***/ "./app/components/Homepage.jsx":
/*!*************************************!*\
  !*** ./app/components/Homepage.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");


var Homepage = function Homepage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    id: "homepage"
  }, "This is the Pizza app. To make order go to menu by clicking menu link from header.");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./app/components/Layout.jsx":
/*!***********************************!*\
  !*** ./app/components/Layout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Menu */ "../node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _containers_ModalHistoryContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/ModalHistoryContainer.js */ "./app/containers/ModalHistoryContainer.js");
/* harmony import */ var _containers_HistoryContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/HistoryContainer */ "./app/containers/HistoryContainer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Layout = /*#__PURE__*/function (_React$Component) {
  _inherits(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOpenNavMenu", function (event) {
      _this.props.handleOpenNavMenu(event.currentTarget);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseNavMenu", function () {
      _this.props.handleCloseNavMenu(null);
    });

    _this.pages = ['menu', 'basket'];
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "static"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        maxWidth: "md"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disableGutters: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        noWrap: true,
        component: "div",
        sx: {
          mr: 2,
          display: {
            xs: 'none',
            md: 'flex'
          },
          textTransform: 'uppercase'
        }
      }, "Pizza pizza")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: {
          flexGrow: 1,
          display: {
            xs: 'flex',
            md: 'none'
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: "large",
        "aria-label": "account of current user",
        "aria-controls": "menu-appbar",
        "aria-haspopup": "true",
        onClick: this.handleOpenNavMenu,
        color: "inherit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "menu-appbar",
        anchorEl: this.props.target,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        keepMounted: true,
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        open: Boolean(this.props.target),
        onClose: this.handleCloseNavMenu,
        sx: {
          display: {
            xs: 'block',
            md: 'none'
          }
        }
      }, this.pages.map(function (page) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: page
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
          to: "/".concat(page)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          textAlign: "center"
        }, page)));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        noWrap: true,
        component: "div",
        sx: {
          flexGrow: 1,
          display: {
            xs: 'flex',
            md: 'none'
          },
          textTransform: 'uppercase'
        }
      }, "Pizza pizza")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: {
          flexGrow: 1,
          display: {
            xs: 'none',
            md: 'flex'
          }
        }
      }, this.pages.map(function (page) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: page
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
          to: "/".concat(page)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          textAlign: "center"
        }, page)));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_ModalHistoryContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "History"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_HistoryContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        maxWidth: "md"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Outlet, null)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./app/components/Menu.jsx":
/*!*********************************!*\
  !*** ./app/components/Menu.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _containers_MenuItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/MenuItemContainer */ "./app/containers/MenuItemContainer.js");
/* harmony import */ var _containers_OrderButtonContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/OrderButtonContainer */ "./app/containers/OrderButtonContainer.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./app/constants/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _super.call(this, props);
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.updateMenu(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.menuPath);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "This is menu."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        container: true,
        spacing: 2,
        sx: {
          mt: 2
        }
      }, !this.props.isLoaded ? 'Loading...' : this.props.menu.filter(function (dish) {
        return dish.category === 'Pizza';
      }).map(function (dish) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 6,
          key: dish.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_MenuItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
          dish: dish,
          Button: _containers_OrderButtonContainer__WEBPACK_IMPORTED_MODULE_2__["default"]
        }));
      })));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./app/components/MenuItem.jsx":
/*!*************************************!*\
  !*** ./app/components/MenuItem.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _Dish_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dish.jsx */ "./app/components/Dish.jsx");




var MenuItem = function MenuItem(_ref) {
  var dish = _ref.dish,
      Button = _ref.Button,
      ingredients = _ref.ingredients,
      isLoading = _ref.isLoading,
      getIngredients = _ref.getIngredients;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      width: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: function onChange(event, isExpended) {
      isExpended && getIngredients();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dish_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], dish)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null) : ingredients === null || ingredients === void 0 ? void 0 : ingredients.join(', ')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, Button ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {
    dish: dish
  }) : null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "./app/components/TwoColDishes.jsx":
/*!*****************************************!*\
  !*** ./app/components/TwoColDishes.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.jsx */ "./app/components/MenuItem.jsx");




var TwoColDishes = function TwoColDishes(_ref) {
  var dishList = _ref.dishList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    sx: {
      p: 1
    }
  }, dishList.map(function (dish) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 6,
      key: dish.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      dish: dish
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColDishes);

/***/ }),

/***/ "./app/components/common/AlertMessage.jsx":
/*!************************************************!*\
  !*** ./app/components/common/AlertMessage.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/AlertTitle/AlertTitle.js");



var AlertMessage = function AlertMessage(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    severity: "warning",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, title), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertMessage);

/***/ }),

/***/ "./app/components/common/Modal.jsx":
/*!*****************************************!*\
  !*** ./app/components/common/Modal.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransitionsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Backdrop */ "../node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Modal */ "../node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Fade */ "../node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ "../node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "../node_modules/@mui/material/Typography/Typography.js");







var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '80%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll'
};
function TransitionsModal(_ref) {
  var title = _ref.title,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      handleOpen = _ref.handleOpen,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleOpen,
    variant: "contained"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    open: isOpen,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"],
    BackdropProps: {
      timeout: 500
    },
    disableScrollLock: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), children))));
}

/***/ }),

/***/ "./app/components/common/SuccessSnackbar.jsx":
/*!***************************************************!*\
  !*** ./app/components/common/SuccessSnackbar.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/ */ "../node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ */ "../node_modules/@mui/material/Snackbar/Snackbar.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    elevation: 6,
    ref: ref,
    variant: "filled"
  }, props));
});

var SuccessSnackbar = function SuccessSnackbar(_ref) {
  var message = _ref.message,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      success = _ref.success;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: isOpen,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Alert, {
    onClose: handleClose,
    severity: success ? 'success' : 'error',
    sx: {
      width: '100%'
    }
  }, message));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessSnackbar);

/***/ }),

/***/ "./app/components/common/TitledButton.jsx":
/*!************************************************!*\
  !*** ./app/components/common/TitledButton.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Button/Button.js");



var TitledButton = function TitledButton(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    color: "primary",
    onClick: onClick
  }, title);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitledButton);

/***/ }),

/***/ "./app/components/common/TitledLoadingButton.jsx":
/*!*******************************************************!*\
  !*** ./app/components/common/TitledLoadingButton.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/lab */ "../node_modules/@mui/lab/LoadingButton/LoadingButton.js");



var TitledLoadingButton = function TitledLoadingButton(_ref) {
  var title = _ref.title,
      _onClick = _ref.onClick,
      isLoading = _ref.isLoading,
      order = _ref.order;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: isLoading,
    size: "large",
    color: "primary",
    onClick: function onClick() {
      return _onClick(order);
    }
  }, title);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitledLoadingButton);

/***/ }),

/***/ "./app/components/common/Total.jsx":
/*!*****************************************!*\
  !*** ./app/components/common/Total.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Typography/Typography.js");



var Total = function Total(_ref) {
  var title = _ref.title,
      total = _ref.total;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, title, ": ", total);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Total);

/***/ }),

/***/ "./app/constants/constants.js":
/*!************************************!*\
  !*** ./app/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "historyTitle": () => (/* binding */ historyTitle),
/* harmony export */   "menuPath": () => (/* binding */ menuPath)
/* harmony export */ });
var historyTitle = 'orderHistory';
var menuPath = 'https://private-anon-52b8161a2d-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza';


/***/ }),

/***/ "./app/containers/AppBarContainer.js":
/*!*******************************************!*\
  !*** ./app/containers/AppBarContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.jsx */ "./app/components/Layout.jsx");
/* harmony import */ var _actions_appBarActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/appBarActions.js */ "./app/actions/appBarActions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    target: state.appBar.target
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleOpenNavMenu: function handleOpenNavMenu(target) {
      dispatch((0,_actions_appBarActions_js__WEBPACK_IMPORTED_MODULE_2__.openNavMenu)(target));
    },
    handleCloseNavMenu: function handleCloseNavMenu() {
      dispatch((0,_actions_appBarActions_js__WEBPACK_IMPORTED_MODULE_2__.closeNavMenu)(null));
    }
  };
};

var AppBar = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBar);

/***/ }),

/***/ "./app/containers/BasketContainer.js":
/*!*******************************************!*\
  !*** ./app/containers/BasketContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Basket_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Basket.jsx */ "./app/components/Basket.jsx");
/* harmony import */ var _actions_orderActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderActions.js */ "./app/actions/orderActions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    order: state.order.orderList,
    total: (state.order.sum / 10).toFixed(1),
    points: state.points.amount,
    totalWithDiscount: (state.order.sum / 10 - state.points.amount).toFixed(1),
    isUsingDiscount: state.order.isUsingDiscount
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleUsingDiscount: function toggleUsingDiscount() {
      dispatch((0,_actions_orderActions_js__WEBPACK_IMPORTED_MODULE_2__.toggleUsingDiscount)());
    }
  };
};

var OrderBasket = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Basket_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBasket);

/***/ }),

/***/ "./app/containers/ConfirmingSnackbarContainer.js":
/*!*******************************************************!*\
  !*** ./app/containers/ConfirmingSnackbarContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_SuccessSnackbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/SuccessSnackbar.jsx */ "./app/components/common/SuccessSnackbar.jsx");
/* harmony import */ var _actions_orderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderActions */ "./app/actions/orderActions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    success: state.order.isConfirmed,
    isOpen: state.order.isConfirmingOpen,
    message: state.order.isConfirmed ? 'Your order is successfully confirmed!' : 'Sorry, your order is unconfirmed!'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleClose: function handleClose(event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.closeConfirming)());
    }
  };
};

var ConfirmingSnackbar = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_common_SuccessSnackbar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmingSnackbar);

/***/ }),

/***/ "./app/containers/HistoryContainer.js":
/*!********************************************!*\
  !*** ./app/containers/HistoryContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_History_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/History.jsx */ "./app/components/History.jsx");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./app/constants/constants.js");




var mapStateToProps = function mapStateToProps() {
  return {
    history: JSON.parse(localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.historyTitle))
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

var DisplayingHistory = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_History_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayingHistory);

/***/ }),

/***/ "./app/containers/MakeOrderButtonContainer.js":
/*!****************************************************!*\
  !*** ./app/containers/MakeOrderButtonContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_TitledLoadingButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/TitledLoadingButton.jsx */ "./app/components/common/TitledLoadingButton.jsx");
/* harmony import */ var _actions_orderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderActions */ "./app/actions/orderActions.js");
/* harmony import */ var _actions_pointsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/pointsActions */ "./app/actions/pointsActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _objectSpread({
    title: 'Make order',
    isLoading: state.order.isLoading,
    order: state.order.orderList
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(order) {
      dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.confirmOrder)(true));
      setTimeout(function () {
        var sum = order.reduce(function (sum, dish) {
          return sum + dish.price / 10 * dish.number;
        }, 0);
        var points = Math.trunc(sum / 10);
        dispatch((0,_actions_pointsActions__WEBPACK_IMPORTED_MODULE_3__.addPoints)(points));
        dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.openConfirming)());
        dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.makeOrder)());
      }, 3000);
    }
  };
};

var AddToOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_common_TitledLoadingButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToOrder);

/***/ }),

/***/ "./app/containers/MenuContainer.js":
/*!*****************************************!*\
  !*** ./app/containers/MenuContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_menuActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/menuActions */ "./app/actions/menuActions.js");
/* harmony import */ var _components_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu.jsx */ "./app/components/Menu.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.menu);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateMenu: function updateMenu(path) {
      dispatch((0,_actions_menuActions__WEBPACK_IMPORTED_MODULE_1__.requestMenu)());
      fetch(path).then(function (response) {
        return response.json();
      }).then(function (menu) {
        return dispatch((0,_actions_menuActions__WEBPACK_IMPORTED_MODULE_1__.postMenu)(menu));
      });
    }
  };
};

var UpdatingMenu = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdatingMenu);

/***/ }),

/***/ "./app/containers/MenuItemContainer.js":
/*!*********************************************!*\
  !*** ./app/containers/MenuItemContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MenuItem.jsx */ "./app/components/MenuItem.jsx");
/* harmony import */ var _actions_menuActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/menuActions.js */ "./app/actions/menuActions.js");
/* harmony import */ var _assets_JSON_ingredients_JSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/JSON/ingredients.JSON */ "./assets/JSON/ingredients.JSON");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  var _state$menu$menuItems, _state$menu$menuItems2;

  return {
    ingredients: (_state$menu$menuItems = state.menu.menuItems[ownProps.dish.name]) === null || _state$menu$menuItems === void 0 ? void 0 : _state$menu$menuItems.ingredients,
    isLoading: (_state$menu$menuItems2 = state.menu.menuItems[ownProps.dish.name]) === null || _state$menu$menuItems2 === void 0 ? void 0 : _state$menu$menuItems2.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    getIngredients: function getIngredients() {
      var title = ownProps.dish.name;
      dispatch((0,_actions_menuActions_js__WEBPACK_IMPORTED_MODULE_2__.requestIngredients)(title));
      setTimeout(function () {
        dispatch((0,_actions_menuActions_js__WEBPACK_IMPORTED_MODULE_2__.postIngredients)(title, _assets_JSON_ingredients_JSON__WEBPACK_IMPORTED_MODULE_3__[title]));
      }, 3000);
    }
  };
};

var MenuItemWithIngredients = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_MenuItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItemWithIngredients);

/***/ }),

/***/ "./app/containers/ModalHistoryContainer.js":
/*!*************************************************!*\
  !*** ./app/containers/ModalHistoryContainer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_Modal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Modal.jsx */ "./app/components/common/Modal.jsx");
/* harmony import */ var _actions_historyActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/historyActions */ "./app/actions/historyActions.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    isOpen: state.history.isOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleOpen: function handleOpen() {
      return dispatch((0,_actions_historyActions__WEBPACK_IMPORTED_MODULE_2__.openHistoryModal)());
    },
    handleClose: function handleClose() {
      return dispatch((0,_actions_historyActions__WEBPACK_IMPORTED_MODULE_2__.closeHistoryModal)());
    }
  };
};

var ModalHistory = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_common_Modal_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHistory);

/***/ }),

/***/ "./app/containers/OrderButtonContainer.js":
/*!************************************************!*\
  !*** ./app/containers/OrderButtonContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_TitledButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/TitledButton.jsx */ "./app/components/common/TitledButton.jsx");
/* harmony import */ var _actions_orderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderActions */ "./app/actions/orderActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _objectSpread({
    title: 'Add to basket'
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.addToOrder)(ownProps.dish));
    }
  };
};

var AddToOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_common_TitledButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToOrder);

/***/ }),

/***/ "./app/containers/RemoveButtonContainer.js":
/*!*************************************************!*\
  !*** ./app/containers/RemoveButtonContainer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_TitledButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/TitledButton.jsx */ "./app/components/common/TitledButton.jsx");
/* harmony import */ var _actions_orderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/orderActions */ "./app/actions/orderActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _objectSpread({
    title: 'Remove from basket'
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0,_actions_orderActions__WEBPACK_IMPORTED_MODULE_2__.removeFromOrder)(ownProps.dish));
    }
  };
};

var RemoveOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_common_TitledButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveOrder);

/***/ }),

/***/ "./app/reducers/appBarReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/appBarReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var appBar = function appBar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    target: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_NAV_MENU':
      return {
        target: action.target
      };

    case 'CLOSE_NAV_MENU':
      return {
        target: null
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appBar);

/***/ }),

/***/ "./app/reducers/historyReducer.js":
/*!****************************************!*\
  !*** ./app/reducers/historyReducer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var history = function history() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isOpen: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_HISTORY_MODAL':
      return {
        isOpen: true
      };

    case 'CLOSE_HISTORY_MODAL':
      return {
        isOpen: false
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./app/reducers/menuItemReducer.js":
/*!*****************************************!*\
  !*** ./app/reducers/menuItemReducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuItem = function menuItem() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_INGREDIENTS':
      return _defineProperty({}, action.title, {
        isLoading: action.isLoading
      });

    case 'POST_INGREDIENTS':
      return _defineProperty({}, action.title, {
        isLoading: action.isLoading,
        ingredients: action.ingredients
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItem);

/***/ }),

/***/ "./app/reducers/menuReducer.js":
/*!*************************************!*\
  !*** ./app/reducers/menuReducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuItemReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItemReducer */ "./app/reducers/menuItemReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var menu = function menu() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLoaded: false,
    ingredients: {},
    menu: [],
    menuItems: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_MENU':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoaded: action.isLoaded
      });

    case 'POST_MENU':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoaded: action.isLoaded,
        menu: action.menu
      });

    case 'REQUEST_INGREDIENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        menuItems: _objectSpread(_objectSpread({}, state.menuItems), (0,_menuItemReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state.menuItems[action.title] | {}, action))
      });

    case 'POST_INGREDIENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        menuItems: _objectSpread(_objectSpread({}, state.menuItems), (0,_menuItemReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state.menuItems[action.title] | {}, action))
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./app/reducers/orderReducer.js":
/*!**************************************!*\
  !*** ./app/reducers/orderReducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./app/constants/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var order = function order() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    orderList: [],
    sum: 0,
    isConfirmed: false,
    isConfirmingOpen: false,
    isLoading: false,
    isUsingDiscount: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TO_ORDER':
      {
        var matchedDish = state.orderList.find(function (dish) {
          return dish.id === action.dish.id;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          orderList: matchedDish ? [].concat(_toConsumableArray(state.orderList.filter(function (dish) {
            return dish !== matchedDish;
          })), [_objectSpread(_objectSpread({}, matchedDish), {}, {
            number: matchedDish.number + 1
          })]) : [].concat(_toConsumableArray(state.orderList), [_objectSpread(_objectSpread({}, action.dish), {}, {
            number: 1
          })]),
          sum: state.sum + action.dish.price
        });
      }

    case 'REMOVE_FROM_ORDER':
      {
        var _matchedDish = state.orderList.find(function (dish) {
          return dish.id === action.dish.id;
        });

        return _objectSpread(_objectSpread({}, state), {}, {
          orderList: _matchedDish.number > 1 ? [].concat(_toConsumableArray(state.orderList.filter(function (dish) {
            return dish !== action.dish;
          })), [_objectSpread(_objectSpread({}, _matchedDish), {}, {
            number: _matchedDish.number - 1
          })]).sort(function (dishA, dishB) {
            return dishA.id - dishB.id;
          }) : _toConsumableArray(state.orderList.filter(function (dish) {
            return dish !== action.dish;
          })),
          sum: state.sum - action.dish.price
        });
      }

    case 'MAKE_ORDER':
      if (state.isConfirmed) {
        localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.historyTitle) ? localStorage.setItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.historyTitle, JSON.stringify([state.orderList].concat(_toConsumableArray(JSON.parse(localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.historyTitle)))))) : localStorage.setItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.historyTitle, JSON.stringify([state.orderList]));
        return _objectSpread(_objectSpread({}, state), {}, {
          orderList: [],
          sum: 0,
          isLoading: false
        });
      }

      return state;

    case 'GET_ORDER_CONFIRMATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        isConfirmed: action.isConfirmed,
        isLoading: true
      });

    case 'OPEN_CONFIRMING':
      return _objectSpread(_objectSpread({}, state), {}, {
        isConfirmingOpen: true
      });

    case 'CLOSE_CONFIRMING':
      return _objectSpread(_objectSpread({}, state), {}, {
        isConfirmingOpen: false
      });

    case 'TOGGLE_USING_DISCOUNT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isUsingDiscount: !state.isUsingDiscount
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (order);

/***/ }),

/***/ "./app/reducers/pizzaAppReducer.js":
/*!*****************************************!*\
  !*** ./app/reducers/pizzaAppReducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _menuReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuReducer */ "./app/reducers/menuReducer.js");
/* harmony import */ var _orderReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderReducer */ "./app/reducers/orderReducer.js");
/* harmony import */ var _appBarReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appBarReducer */ "./app/reducers/appBarReducer.js");
/* harmony import */ var _historyReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historyReducer */ "./app/reducers/historyReducer.js");
/* harmony import */ var _pointsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pointsReducer */ "./app/reducers/pointsReducer.js");






var pizzaAppReducer = (0,redux__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({
  menu: _menuReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  order: _orderReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  appBar: _appBarReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  history: _historyReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  points: _pointsReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pizzaAppReducer);

/***/ }),

/***/ "./app/reducers/pointsReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/pointsReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var points = function points() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    amount: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_POINTS':
      return {
        amount: state.amount + action.points
      };

    case 'SUB_POINTS':
      return {
        amount: state.amount - action.points
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (points);

/***/ }),

/***/ "./app/store/Store.js":
/*!****************************!*\
  !*** ./app/store/Store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_pizzaAppReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/pizzaAppReducer */ "./app/reducers/pizzaAppReducer.js");


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers_pizzaAppReducer__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _app_app_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.jsx */ "./app/app.jsx");





react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_app_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/JSON/ingredients.JSON":
/*!**************************************!*\
  !*** ./assets/JSON/ingredients.JSON ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Vesuvius":["mashed tomato sauce","Mozzarella","ham","pizza seasoning","garlic oil"],"Hawaii":["mashed tomato sauce","Mozzarella","ham","pineapple","pizza seasoning","garlic oil"],"Parma":["mashed tomato sauce","Mozzarella","ham","brisket","tomatoes","capers","sour cream sauce","oregano","olive oil"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_Menu_js-node_modules_mui_lab_LoadingButton_LoadingBut-9cb938"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map