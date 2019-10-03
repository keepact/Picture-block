/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  
  module.exports = _arrayWithHoles;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
    \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return self;
  }
  
  module.exports = _assertThisInitialized;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  module.exports = _classCallCheck;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/createClass.js":
  /*!************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  
  module.exports = _createClass;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  
  module.exports = _getPrototypeOf;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/inherits.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
  
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
  
  module.exports = _inherits;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
    \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }
  
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
  
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
  
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
  
    return _arr;
  }
  
  module.exports = _iterableToArrayLimit;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  
  module.exports = _nonIterableRest;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
  
  var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
  
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
  
    return assertThisInitialized(self);
  }
  
  module.exports = _possibleConstructorReturn;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  
    return _setPrototypeOf(o, p);
  }
  
  module.exports = _setPrototypeOf;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
  
  var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
  
  var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
  
  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
  }
  
  module.exports = _slicedToArray;
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/typeof.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }
  
  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }
  
    return _typeof(obj);
  }
  
  module.exports = _typeof;
  
  /***/ }),
  
  /***/ "./src/imagelink.js":
  /*!**************************!*\
    !*** ./src/imagelink.js ***!
    \**************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
  /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
  /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
  /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
  /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
  /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
  /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
  /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
  /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
  /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
  
  
  
  
  
  
  
  
  
  /**
   * External dependencies
   */
  
  /**
   * WordPress dependencies
   */
  
  var __ = wp.i18n.__;
  var withSelect = wp.data.withSelect;
  var compose = wp.compose.compose;
  var _wp$element = wp.element,
      Component = _wp$element.Component,
      Fragment = _wp$element.Fragment,
      useCallback = _wp$element.useCallback,
      useState = _wp$element.useState,
      useRef = _wp$element.useRef;
  var _wp$keycodes = wp.keycodes,
      LEFT = _wp$keycodes.LEFT,
      RIGHT = _wp$keycodes.RIGHT,
      UP = _wp$keycodes.UP,
      DOWN = _wp$keycodes.DOWN,
      BACKSPACE = _wp$keycodes.BACKSPACE,
      ENTER = _wp$keycodes.ENTER;
  var URLPopover = wp.blockEditor.URLPopover;
  var _wp$components = wp.components,
      ToggleControl = _wp$components.ToggleControl,
      TextControl = _wp$components.TextControl,
      IconButton = _wp$components.IconButton,
      Toolbar = _wp$components.Toolbar,
      Path = _wp$components.Path,
      SVG = _wp$components.SVG,
      NavigableMenu = _wp$components.NavigableMenu,
      MenuItem = _wp$components.MenuItem,
      withSpokenMessages = _wp$components.withSpokenMessages;
  /**
   * Module constants
   */
  
  var LINK_DESTINATION_NONE = 'none';
  var LINK_DESTINATION_MEDIA = 'media';
  var LINK_DESTINATION_ATTACHMENT = 'attachment';
  var LINK_DESTINATION_CUSTOM = 'custom';
  var NEW_TAB_REL = 'noreferrer noopener';
  
  var stopPropagation = function stopPropagation(event) {
    event.stopPropagation();
  };
  
  var stopPropagationRelevantKeys = function stopPropagationRelevantKeys(event) {
    if ([LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER].indexOf(event.keyCode) > -1) {
      // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
      event.stopPropagation();
    }
  };
  
  var ImageURLInputUI = function ImageURLInputUI(_ref) {
    var advancedOptions = _ref.advancedOptions,
        linkDestination = _ref.linkDestination,
        mediaLinks = _ref.mediaLinks,
        onChangeUrl = _ref.onChangeUrl,
        url = _ref.url;
  
    var _useState = useState(false),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];
  
    var openLinkUI = useCallback(function () {
      setIsOpen(true);
    });
  
    var _useState3 = useState(false),
        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState3, 2),
        isEditingLink = _useState4[0],
        setIsEditingLink = _useState4[1];
  
    var _useState5 = useState(null),
        _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState5, 2),
        urlInput = _useState6[0],
        setUrlInput = _useState6[1];
  
    var startEditLink = useCallback(function () {
      if (linkDestination === LINK_DESTINATION_MEDIA || linkDestination === LINK_DESTINATION_ATTACHMENT) {
        setUrlInput('');
      }
  
      setIsEditingLink(true);
    });
    var stopEditLink = useCallback(function () {
      setIsEditingLink(false);
    });
    var closeLinkUI = useCallback(function () {
      setUrlInput(null);
      stopEditLink();
      setIsOpen(false);
    });
    var autocompleteRef = useRef(null);
    var onClickOutside = useCallback(function () {
      return function (event) {
        // The autocomplete suggestions list renders in a separate popover (in a portal),
        // so onClickOutside fails to detect that a click on a suggestion occurred in the
        // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
        // return to avoid the popover being closed.
        var autocompleteElement = autocompleteRef.current;
  
        if (autocompleteElement && autocompleteElement.contains(event.target)) {
          return;
        }
  
        setIsOpen(false);
        setUrlInput(null);
        stopEditLink();
      };
    });
    var onSubmitLinkChange = useCallback(function () {
      return function (event) {
        if (urlInput) {
          onChangeUrl(urlInput);
        }
  
        stopEditLink();
        setUrlInput(null);
        event.preventDefault();
      };
    });
    var onLinkRemove = useCallback(function () {
      onChangeUrl('');
    });
    var linkEditorValue = urlInput !== null ? urlInput : url;
    var urlLabel = (find(mediaLinks, ['linkDestination', linkDestination]) || {}).title;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
      icon: "admin-links",
      className: "components-toolbar__control",
      label: url ? __('Edit Media Link', 'block-options') : __('Media Link', 'block-options'),
      "aria-expanded": isOpen,
      onClick: openLinkUI
    }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover, {
      onFocusOutside: onClickOutside(),
      onClose: closeLinkUI,
      renderSettings: function renderSettings() {
        return advancedOptions;
      },
      additionalControls: !linkEditorValue && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(NavigableMenu, null, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(mediaLinks, function (link) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MenuItem, {
          key: link.linkDestination,
          icon: link.icon,
          onClick: function onClick() {
            setUrlInput(null);
            onChangeUrl(link.url);
            stopEditLink();
          }
        }, link.title);
      }))
    }, (!url || isEditingLink) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover.LinkEditor, {
      className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
      value: linkEditorValue,
      onChangeInputValue: setUrlInput,
      onKeyDown: stopPropagationRelevantKeys,
      onKeyPress: stopPropagation,
      onSubmit: onSubmitLinkChange(),
      autocompleteRef: autocompleteRef
    }), url && !isEditingLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover.LinkViewer, {
      className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
      onKeyPress: stopPropagation,
      url: url,
      onEditLinkClick: startEditLink,
      urlLabel: urlLabel
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
      icon: "no",
      label: __('Remove Link', 'block-options'),
      onClick: onLinkRemove
    }))));
  };
  /**
   * Typography Component
   */
  
  
  var ImageLink =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ImageLink, _Component);
  
    function ImageLink() {
      var _this;
  
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageLink);
  
      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ImageLink).apply(this, arguments));
      _this.onSetNewTab = _this.onSetNewTab.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
      _this.getLinkDestinations = _this.getLinkDestinations.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
      _this.onSetHref = _this.onSetHref.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
      _this.onSetLinkRel = _this.onSetLinkRel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
      _this.onSetLinkClass = _this.onSetLinkClass.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
      _this.state = {
        isVisible: false
      };
      return _this;
    }
  
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageLink, [{
      key: "onSetHref",
      value: function onSetHref(value) {
        var attributes = this.props.attributes;
        var linkDestination = attributes.linkDestination;
        var linkDestinations = this.getLinkDestinations();
        var linkDestinationInput;
  
        if (!value) {
          linkDestinationInput = LINK_DESTINATION_NONE;
        } else {
          linkDestinationInput = (find(linkDestinations, function (destination) {
            return destination.url === value;
          }) || {
            linkDestination: LINK_DESTINATION_CUSTOM
          }).linkDestination;
        }
  
        if (linkDestination !== linkDestinationInput) {
          this.props.setAttributes({
            linkDestination: linkDestinationInput,
            href: value
          });
          return;
        }
  
        this.props.setAttributes({
          href: value
        });
      }
    }, {
      key: "onSetNewTab",
      value: function onSetNewTab(value) {
        var rel = this.props.attributes.rel;
        var linkTarget = value ? '_blank' : undefined;
        var updatedRel = rel;
  
        if (linkTarget && !rel) {
          updatedRel = NEW_TAB_REL;
        } else if (!linkTarget && rel === NEW_TAB_REL) {
          updatedRel = undefined;
        }
  
        this.props.setAttributes({
          linkTarget: linkTarget,
          rel: updatedRel
        });
      }
    }, {
      key: "onSetLinkClass",
      value: function onSetLinkClass(value) {
        this.props.setAttributes({
          linkClass: value
        });
      }
    }, {
      key: "onSetLinkRel",
      value: function onSetLinkRel(value) {
        this.props.setAttributes({
          rel: value
        });
      }
    }, {
      key: "getLinkDestinations",
      value: function getLinkDestinations() {
        return [{
          linkDestination: LINK_DESTINATION_MEDIA,
          title: __('Media File'),
          url: this.props.image && this.props.image.source_url,
          icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SVG, {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
            d: "M0,0h24v24H0V0z",
            fill: "none"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
            d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
            d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
          }))
        }, {
          linkDestination: LINK_DESTINATION_ATTACHMENT,
          title: __('Attachment Page'),
          url: this.props.image && this.props.image.link,
          icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SVG, {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
            d: "M0 0h24v24H0V0z",
            fill: "none"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
          }))
        }];
      }
    }, {
      key: "render",
      value: function render() {
        var attributes = this.props.attributes;
        var href = attributes.href,
            rel = attributes.rel,
            mediaURL = attributes.mediaURL,
            linkDestination = attributes.linkDestination,
            linkTarget = attributes.linkTarget,
            linkClass = attributes.linkClass;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ImageURLInputUI, {
          url: href || '',
          onChangeUrl: this.onSetHref,
          mediaLinks: this.getLinkDestinations(),
          linkDestination: linkDestination,
          advancedOptions: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
            label: __('Open in New Tab', 'gutenberg-examples'),
            onChange: this.onSetNewTab,
            checked: linkTarget === '_blank'
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextControl, {
            label: __('Link CSS Class'),
            value: linkClass || '',
            onKeyPress: stopPropagation,
            onKeyDown: stopPropagationRelevantKeys,
            onChange: this.onSetLinkClass
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextControl, {
            label: __('Link Rel'),
            value: rel || '',
            onChange: this.onSetLinkRel,
            onKeyPress: stopPropagation,
            onKeyDown: stopPropagationRelevantKeys
          }))
        })));
      }
    }]);
  
    return ImageLink;
  }(Component);
  
  /* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, props) {
    var _select = select('core'),
        getMedia = _select.getMedia;
  
    var mediaID = props.attributes.mediaID;
    return {
      image: mediaID ? getMedia(mediaID) : null
    };
  }), withSpokenMessages)(ImageLink));
  
  /***/ }),
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
  /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _imagelink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagelink */ "./src/imagelink.js");
  
  
  
  /* global wp */
  
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;
  var _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      BlockControls = _wp$blockEditor.BlockControls,
      InspectorControls = _wp$blockEditor.InspectorControls;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl,
      PanelBody = _wp$components.PanelBody,
      TextareaControl = _wp$components.TextareaControl,
      ExternalLink = _wp$components.ExternalLink,
      ButtonGroup = _wp$components.ButtonGroup,
      Toolbar = _wp$components.Toolbar,
      IconButton = _wp$components.IconButton,
      SelectControl = _wp$components.SelectControl,
      TabPanel = _wp$components.TabPanel;
  registerBlockType('gutenberg-examples/example-01-picture-card-esnext', {
    title: __('Picture', 'gutenberg-examples'),
    description: __('A block with Picture tag functionality'),
    icon: 'format-image',
    category: 'layout',
    supports: {
      align: true
    },
    attributes: {
      mediaID: {
        type: 'number'
      },
      mediaAlt: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'alt'
      },
      mediaURL: {
        type: 'string',
        selector: 'img'
      },
      mediaJPG: {
        type: 'string',
        selector: 'img'
      },
      mediaSource: {
        type: 'string'
      },
      toggleField: {
        type: 'boolean'
      },
      sizes: {
        type: 'string'
      },
      sourceSize: {
        type: 'string'
      },
      smallThumb: {
        type: 'string'
      },
      mediumThumb: {
        type: 'string'
      },
      originalSizeThumb: {
        type: 'string',
        default: ''
      },
      smallSizeThumb: {
        type: 'string',
        default: '1x'
      },
      mediumSizeThumb: {
        type: 'string',
        default: '2x'
      },
      originalSourceThumb: {
        type: 'string',
        default: ''
      },
      smallSourceThumb: {
        type: 'string',
        default: '1x'
      },
      mediumSourceThumb: {
        type: 'string',
        default: '2x'
      },
      sourceThumb: {
        type: 'string'
      },
      sourceThumb2: {
        type: 'string'
      },
      sourceTag: {
        type: 'boolean'
      },
      sourceScale: {
        type: 'boolean'
      },
      sourceURL: {
        type: 'string'
      },
      sourceMedia: {
        type: 'string'
      },
      sourceType: {
        type: 'string'
      },
      type: {
        type: 'string',
        source: 'attribute',
        selector: 'picture > source',
        attribute: 'type'
      },
      loading: {
        type: 'string',
        default: 'auto'
      },
      href: {
        type: 'string',
        source: 'attribute',
        selector: 'div > a',
        attribute: 'href'
      },
      rel: {
        type: 'string',
        source: 'attribute',
        selector: 'div > a',
        attribute: 'rel'
      },
      linkDestination: {
        type: 'string',
        default: 'none'
      },
      linkTarget: {
        type: 'string',
        source: 'attribute',
        selector: 'div > a',
        attribute: 'target'
      },
      linkClass: {
        type: 'string',
        source: 'attribute',
        selector: 'div > a',
        attribute: 'class'
      }
    },
    edit: function edit(props) {
      var className = props.className,
          _props$attributes = props.attributes,
          mediaID = _props$attributes.mediaID,
          mediaURL = _props$attributes.mediaURL,
          mediaJPG = _props$attributes.mediaJPG,
          mediaAlt = _props$attributes.mediaAlt,
          toggleField = _props$attributes.toggleField,
          mediaSource = _props$attributes.mediaSource,
          sizes = _props$attributes.sizes,
          type = _props$attributes.type,
          loading = _props$attributes.loading,
          sourceTag = _props$attributes.sourceTag,
          sourceURL = _props$attributes.sourceURL,
          sourceType = _props$attributes.sourceType,
          sourceMedia = _props$attributes.sourceMedia,
          smallThumb = _props$attributes.smallThumb,
          mediumThumb = _props$attributes.mediumThumb,
          originalSizeThumb = _props$attributes.originalSizeThumb,
          smallSizeThumb = _props$attributes.smallSizeThumb,
          mediumSizeThumb = _props$attributes.mediumSizeThumb,
          originalSourceThumb = _props$attributes.originalSourceThumb,
          smallSourceThumb = _props$attributes.smallSourceThumb,
          mediumSourceThumb = _props$attributes.mediumSourceThumb,
          sourceThumb = _props$attributes.sourceThumb,
          sourceThumb2 = _props$attributes.sourceThumb2,
          sourceSize = _props$attributes.sourceSize,
          sourceScale = _props$attributes.sourceScale,
          setAttributes = props.setAttributes;
  
      var onSelectImage = function onSelectImage(media) {
        setAttributes({
          mediaURL: media.url,
          mediaID: media.id,
          mediaAlt: media.alt
        });
      };
  
      var onSelectJpgImage = function onSelectJpgImage(original) {
        setAttributes({
          mediaJPG: original.url,
          mediaID: original.id,
          mediaAlt: original.alt
        });
      };
  
      var onSelectSource = function onSelectSource(image) {
        setAttributes({
          sourceURL: image.url,
          mediaID: image.id
        });
      };
  
      var onSelectSourceThumb = function onSelectSourceThumb(regular) {
        setAttributes({
          sourceThumb: regular.url,
          mediaID: regular.id
        });
      };
  
      var onSelectSourceThumb2 = function onSelectSourceThumb2(large) {
        setAttributes({
          sourceThumb2: large.url,
          mediaID: large.id
        });
      };
  
      var onSelectSmallThumb = function onSelectSmallThumb(small) {
        setAttributes({
          smallThumb: small.url,
          mediaID: small.id
        });
      };
  
      var onSelectMediumThumb = function onSelectMediumThumb(medium) {
        setAttributes({
          mediumThumb: medium.url,
          mediaID: medium.id
        });
      };
  
      var onChangeMedia = function onChangeMedia(newValue) {
        setAttributes({
          mediaSource: newValue
        });
      };
  
      var onChangeSourceMedia = function onChangeSourceMedia(newValue) {
        setAttributes({
          sourceMedia: newValue
        });
      };
  
      var onChangeToggleField = function onChangeToggleField(newValue) {
        setAttributes({
          toggleField: newValue
        });
      };
  
      var onChangeToggleLazyLoad = function onChangeToggleLazyLoad(newValue) {
        var loading = newValue ? 'lazy' : 'auto';
        setAttributes({
          loading: loading
        });
      };
  
      var onChangenewAlt = function onChangenewAlt(newAlt) {
        setAttributes({
          mediaAlt: newAlt
        });
      };
  
      var onChangeSizeOriginalThumb = function onChangeSizeOriginalThumb(newValue) {
        setAttributes({
          originalSizeThumb: newValue
        });
      };
  
      var onChangeSizeSmallThumb = function onChangeSizeSmallThumb(newValue) {
        setAttributes({
          smallSizeThumb: newValue
        });
      };
  
      var onChangeSizeMediumThumb = function onChangeSizeMediumThumb(newValue) {
        setAttributes({
          mediumSizeThumb: newValue
        });
      };
  
      var onChangeSourceOriginalThumb = function onChangeSourceOriginalThumb(newValue) {
        setAttributes({
          originalSourceThumb: newValue
        });
      };
  
      var onChangeSourceSmallThumb = function onChangeSourceSmallThumb(newValue) {
        setAttributes({
          smallSourceThumb: newValue
        });
      };
  
      var onChangeSourceMediumThumb = function onChangeSourceMediumThumb(newValue) {
        setAttributes({
          mediumSourceThumb: newValue
        });
      };
  
      var onChangeSourceTag = function onChangeSourceTag(newValue) {
        setAttributes({
          sourceTag: newValue
        });
      };
  
      var onChangeSourceScale = function onChangeSourceScale(newValue) {
        setAttributes({
          sourceScale: newValue
        });
      };
  
      var onChangeRemoveJpg = function onChangeRemoveJpg() {
        setAttributes({
          mediaJPG: undefined,
          mediaAlt: undefined
        });
      };
  
      var onChangeType = function onChangeType(newValue) {
        var type = newValue ? 'image/webp' : null;
        setAttributes({
          type: type
        });
      };
  
      var onChangeSourceType = function onChangeSourceType(newValue) {
        var sourceType = newValue ? 'image/webp' : null;
        setAttributes({
          sourceType: sourceType
        });
      }; // Set the initial state of the Component
  
  
      var _useState = useState(sizes),
          _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
          size = _useState2[0],
          setSizes = _useState2[1];
  
      var _useState3 = useState(sourceSize),
          _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
          sizeSrc = _useState4[0],
          setSizeSrc = _useState4[1]; // Update the Component after new state is set
      // Equivalent to componentDidMount in Classes
  
  
      useEffect(function () {
        setAttributes({
          sizes: size
        }); // Starts after each new render. Here the variables determines when the function is called
      }, [size]);
      useEffect(function () {
        setAttributes({
          sourceSize: sizeSrc
        });
      }, [sizeSrc]);
      useEffect(function () {
        if (toggleField === false) {
          setAttributes({
            smallSizeThumb: undefined,
            mediumSizeThumb: undefined,
            originalSizeThumb: undefined,
            smallThumb: undefined,
            mediumThumb: undefined,
            smallSourceThumb: undefined,
            mediumSourceThumb: undefined,
            originalSourceThumb: undefined,
            sourceThumb: undefined,
            sourceThumb2: undefined
          });
        }
      }, [toggleField]);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectImage,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_imagelink__WEBPACK_IMPORTED_MODULE_2__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Image Callback'),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-jpg-image"
      }, !mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        className: "block-library-image__dimensions__row",
        style: {
          fontWeight: 700,
          marginTop: 20
        }
      }, __('Note: Enter one image callback for crossbrowser support')), !mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectJpgImage,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: mediaJPG ? 'image-button' : 'button button-large',
            onClick: open,
            style: {
              marginTop: 10,
              marginBottom: 20
            }
          }, !mediaJPG && __('Upload image', 'gutenberg-examples'));
        }
      })), mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row",
        style: {
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: mediaJPG,
        alt: mediaAlt
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: 0,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectJpgImage,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
        className: "components-toolbar__control",
        label: __('Remove media'),
        icon: "trash",
        onClick: onChangeRemoveJpg
      })))))), mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
        label: __('Alt Text (Alternative Text)'),
        value: mediaAlt,
        onChange: onChangenewAlt,
        help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ExternalLink, {
          href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
        }, __('Describe the purpose of the image')), __('Leave empty if the image is purely decorative.'))
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Source Settings'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __('Image type'),
        value: type,
        options: [{
          value: '',
          label: 'JPG/PNG'
        }, {
          value: 'image/webp',
          label: 'WebP'
        }],
        onChange: onChangeType
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Media attribute'),
        help: __('Enter the min-width in pixels'),
        value: mediaSource,
        onChange: onChangeMedia
      }), sourceTag && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "source-tag-2",
        style: {
          marginBottom: 20
        }
      }, !sourceURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSource,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref4) {
          var open = _ref4.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: sourceURL ? 'image-button' : 'button button-large',
            onClick: open
          }, !sourceURL && __('Upload Image', 'gutenberg-examples'));
        }
      })), sourceURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row",
        style: {
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Source 2')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, sourceURL), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: -10,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSource,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref5) {
          var open = _ref5.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      })))))))), sourceTag && sourceURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __('Image type'),
        value: sourceType,
        options: [{
          value: '',
          label: 'JPG/PNG'
        }, {
          value: 'image/webp',
          label: 'WebP'
        }],
        onChange: onChangeSourceType
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Media attribute'),
        help: __('Enter the min-width in pixels'),
        value: sourceMedia,
        onChange: onChangeSourceMedia
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __('Additional source'),
        help: __('Add one more tag'),
        checked: sourceTag,
        onChange: onChangeSourceTag
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Advanced Settings'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __('Lazy Loading'),
        help: __('Loads image only when user is close to seeing it'),
        checked: loading === 'lazy',
        onChange: onChangeToggleLazyLoad
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __('Pixel or Width descriptors'),
        help: __('You need to upload 2 images'),
        checked: toggleField,
        onChange: onChangeToggleField
      })), toggleField && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Thumbnails'),
        initialOpen: false
      }, !smallThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-small-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSmallThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref6) {
          var open = _ref6.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: smallThumb ? 'image-button' : 'button button-large',
            onClick: open
          }, !smallThumb && __('Upload Small Image', 'gutenberg-examples'));
        }
      }))), smallThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Small')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, smallThumb), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: -10,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSmallThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref7) {
          var open = _ref7.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      })))))), !mediumThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-medium-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectMediumThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref8) {
          var open = _ref8.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: mediumThumb ? 'image-button' : 'button button-large',
            onClick: open
          }, !mediumThumb && __('Upload Medium Image', 'gutenberg-examples'));
        }
      }))), mediumThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Medium')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, mediumThumb), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: -10,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectMediumThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref9) {
          var open = _ref9.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      })))))), sourceTag && sourceScale && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        style: {
          position: 'relative',
          marginTop: 20
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Source 2')), !sourceThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-small-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSourceThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref10) {
          var open = _ref10.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: sourceThumb ? 'image-button' : 'button button-large',
            onClick: open
          }, !sourceThumb && __('Upload Small Image', 'gutenberg-examples'));
        }
      }))), sourceThumb && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Small')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, sourceThumb), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: -10,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSourceThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref11) {
          var open = _ref11.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      })))))), !sourceThumb2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-small-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSourceThumb2,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref12) {
          var open = _ref12.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: sourceThumb2 ? 'image-button' : 'button button-large',
            onClick: open
          }, !sourceThumb2 && __('Upload Medium Image', 'gutenberg-examples'));
        }
      }))), sourceThumb2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          position: 'relative'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700
        }
      }, __('Medium')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, sourceThumb2), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-block-toolbar",
        style: {
          position: 'absolute',
          top: -10,
          right: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSourceThumb2,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref13) {
          var open = _ref13.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))))))), sourceTag && sourceURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "components-base-control components-toggle-control",
        style: {
          marginTop: 20
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __('Thumbnails for Additional source'),
        checked: sourceScale,
        onChange: onChangeSourceScale
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Image Settings'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
        className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
        activeClass: "active-tab",
        tabs: [{
          name: "Source",
          title: __("Source"),
          className: "picture-thumb-source"
        }, {
          name: "Source 2",
          title: __("Source 2"),
          className: "picture-thumb-source"
        }]
      }, function (tab) {
        var tabout;
  
        if ("Source" === tab.name) {
          tabout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            label: __('Original image'),
            help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ExternalLink, {
              href: "https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors"
            }, __('Combine with pixel density or width descriptors')), __('Leave blank if using pixel method.')),
            value: originalSizeThumb,
            onChange: onChangeSizeOriginalThumb
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "block-library-image__dimensions__row"
          }, __('Thumbnails Scale')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            className: "block-library-image__dimensions__width",
            label: __('Small'),
            help: __('e.g., 300w or 1x'),
            value: smallSizeThumb,
            onChange: onChangeSizeSmallThumb
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            className: "block-library-image__dimensions__height",
            label: __('Medium'),
            help: __('e.g., 768w or 2x'),
            value: mediumSizeThumb,
            onChange: onChangeSizeMediumThumb
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "block-library-image__dimensions__row"
          }, __('Sizes attribute')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "components-base-control__help"
          }, __('Leave unselected if using pixel method.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
            "aria-label": __('Image Size')
          }, ['25vw', '50vw', '75vw', '100vw'].map(function (scale) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
              key: scale,
              isSmall: true,
              isPrimary: size === scale,
              "aria-pressed": size === scale,
              onClick: function onClick() {
                return setSizes(size === scale ? null : scale);
              }
            }, scale);
          }))))));
        } else {
          tabout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            label: __('Original image'),
            help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ExternalLink, {
              href: "https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors"
            }, __('Combine with pixel density or width descriptors')), __('Leave blank if using pixel method.')),
            value: originalSourceThumb,
            onChange: onChangeSourceOriginalThumb
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "block-library-image__dimensions__row"
          }, __('Thumbnails Scale')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            className: "block-library-image__dimensions__width",
            label: __('Small'),
            help: __('e.g., 300w or 1x'),
            value: smallSourceThumb,
            onChange: onChangeSourceSmallThumb
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
            className: "block-library-image__dimensions__height",
            label: __('Medium'),
            help: __('e.g., 768w or 2x'),
            value: mediumSourceThumb,
            onChange: onChangeSourceMediumThumb
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "block-library-image__dimensions__row"
          }, __('Sizes attribute')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            className: "components-base-control__help"
          }, __('Leave unselected if using pixel method.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
            "aria-label": __('Image Size')
          }, ['25vw', '50vw', '75vw', '100vw'].map(function (scalesrc) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
              key: scalesrc,
              isSmall: true,
              isPrimary: sizeSrc === scalesrc,
              "aria-pressed": sizeSrc === scalesrc,
              onClick: function onClick() {
                return setSizeSrc(sizeSrc === scalesrc ? null : scalesrc);
              }
            }, scalesrc);
          }))))));
        }
  
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, tabout);
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-image"
      }, !mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaPlaceholder, {
        labels: __('Image'),
        className: className,
        onSelect: onSelectImage,
        allowedTypes: "image",
        value: mediaID
      }), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        className: className,
        style: {
          margin: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: mediaURL,
        alt: mediaAlt
      }))));
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          mediaID = _props$attributes2.mediaID,
          mediaURL = _props$attributes2.mediaURL,
          mediaJPG = _props$attributes2.mediaJPG,
          mediaSource = _props$attributes2.mediaSource,
          mediaAlt = _props$attributes2.mediaAlt,
          sizes = _props$attributes2.sizes,
          href = _props$attributes2.href,
          toggleField = _props$attributes2.toggleField,
          smallThumb = _props$attributes2.smallThumb,
          mediumThumb = _props$attributes2.mediumThumb,
          originalSizeThumb = _props$attributes2.originalSizeThumb,
          smallSizeThumb = _props$attributes2.smallSizeThumb,
          mediumSizeThumb = _props$attributes2.mediumSizeThumb,
          linkTarget = _props$attributes2.linkTarget,
          linkClass = _props$attributes2.linkClass,
          rel = _props$attributes2.rel,
          type = _props$attributes2.type,
          loading = _props$attributes2.loading,
          sourceTag = _props$attributes2.sourceTag,
          sourceURL = _props$attributes2.sourceURL,
          sourceMedia = _props$attributes2.sourceMedia,
          sourceType = _props$attributes2.sourceType,
          sourceSize = _props$attributes2.sourceSize,
          sourceThumb = _props$attributes2.sourceThumb,
          sourceThumb2 = _props$attributes2.sourceThumb2,
          originalSourceThumb = _props$attributes2.originalSourceThumb,
          smallSourceThumb = _props$attributes2.smallSourceThumb,
          mediumSourceThumb = _props$attributes2.mediumSourceThumb,
          sourceScale = _props$attributes2.sourceScale;
      var source = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !sourceTag && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
        media: "(min-width:".concat(mediaSource, ")"),
        type: type,
        "data-srcset": mediaURL
      }), sourceTag && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
        media: "(min-width:".concat(mediaSource, ")"),
        type: type,
        "data-srcset": mediaURL
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
        media: "(min-width:".concat(sourceMedia, ")"),
        type: sourceType,
        "data-srcset": sourceURL
      })));
      var scale = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, toggleField ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "source",
        media: "(min-width:".concat(mediaSource, ")"),
        type: type,
        "data-srcset": mediaURL + " ".concat(originalSizeThumb, ", ") + smallThumb + " ".concat(smallSizeThumb, ", ") + mediumThumb + " ".concat(mediumSizeThumb),
        "data-sizes": sizes
      }) : source, sourceTag && toggleField && !sourceScale && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
        media: "(min-width:".concat(sourceMedia, ")"),
        type: sourceType,
        "data-srcset": sourceURL
      }), sourceTag && toggleField && sourceScale && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "source",
        media: "(min-width:".concat(sourceMedia, ")"),
        type: sourceType,
        "data-srcset": sourceURL + " ".concat(originalSourceThumb, ", ") + sourceThumb + " ".concat(smallSourceThumb, ", ") + sourceThumb2 + " ".concat(mediumSourceThumb),
        "data-sizes": sourceSize
      }));
      var image = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("picture", null, scale, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        "data-src": mediaJPG,
        alt: mediaAlt,
        loading: loading,
        className: mediaID ? "wp-image-".concat(mediaID, " lazyload") : null
      }));
      var figure = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, href ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        className: linkClass,
        href: href,
        target: linkTarget,
        rel: rel
      }, image) : image);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, figure);
    }
  });
  
  /***/ }),
  
  /***/ "@wordpress/element":
  /*!******************************************!*\
    !*** external {"this":["wp","element"]} ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  (function() { module.exports = this["wp"]["element"]; }());
  
  /***/ }),
  
  /***/ "lodash":
  /*!**********************************!*\
    !*** external {"this":"lodash"} ***!
    \**********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  (function() { module.exports = this["lodash"]; }());
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=index.js.map