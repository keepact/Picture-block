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
      AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
      InspectorControls = _wp$blockEditor.InspectorControls;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl,
      SelectControl = _wp$components.SelectControl,
      PanelBody = _wp$components.PanelBody,
      TextareaControl = _wp$components.TextareaControl,
      ExternalLink = _wp$components.ExternalLink,
      ButtonGroup = _wp$components.ButtonGroup,
      Toolbar = _wp$components.Toolbar,
      IconButton = _wp$components.IconButton;
  registerBlockType('gutenberg-examples/example-01-picture-card-esnext', {
    title: __('Picture: Webp Block test', 'gutenberg-examples'),
    icon: 'index-card',
    category: 'layout',
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
      mediaSource: {
        type: 'string'
      },
      alignment: {
        type: 'string',
        default: 'none'
      },
      toggleField: {
        type: 'boolean'
      },
      selectSize: {
        type: 'string'
      },
      newAlt: {
        type: 'string'
      },
      sizes: {
        type: 'string'
      }
    },
    edit: function edit(props) {
      var className = props.className,
          _props$attributes = props.attributes,
          mediaID = _props$attributes.mediaID,
          mediaURL = _props$attributes.mediaURL,
          alignment = _props$attributes.alignment,
          mediaAlt = _props$attributes.mediaAlt,
          toggleField = _props$attributes.toggleField,
          selectSize = _props$attributes.selectSize,
          mediaSource = _props$attributes.mediaSource,
          newAlt = _props$attributes.newAlt,
          sizes = _props$attributes.sizes,
          setAttributes = props.setAttributes;
  
      var onSelectImage = function onSelectImage(media) {
        setAttributes({
          mediaURL: media.url,
          mediaID: media.id,
          mediaAlt: media.alt
        });
      };
  
      var onChangeAlignment = function onChangeAlignment(newAlignment) {
        props.setAttributes({
          alignment: newAlignment === undefined ? 'none' : newAlignment
        });
      };
  
      var onChangeMedia = function onChangeMedia(newValue) {
        setAttributes({
          mediaSource: newValue
        });
      };
  
      var onChangeToggleField = function onChangeToggleField(newValue) {
        setAttributes({
          toggleField: newValue
        });
      };
  
      var onChangeSize = function onChangeSize(newValue) {
        setAttributes({
          selectSize: newValue
        });
      };
  
      var onChangenewAlt = function onChangenewAlt(newValue) {
        setAttributes({
          newAlt: newValue
        });
      };
  
      var _useState = useState(sizes),
          _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
          toggled = _useState2[0],
          setToggled = _useState2[1];
  
      useEffect(function () {
        // Update the Atribute after new state using hooks instead of classes
        setAttributes({
          sizes: toggled
        });
      }, [toggled]);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
        value: alignment,
        onChange: onChangeAlignment
      }), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
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
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
        label: __('Alt Text (Alternative Text)'),
        value: newAlt,
        onChange: onChangenewAlt,
        help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ExternalLink, {
          href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
        }, __('Describe the purpose of the image')), __('Leave empty if the image is purely decorative.'))
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: "Server Scale",
        help: "You need to upload 3 images",
        checked: toggleField,
        onChange: onChangeToggleField
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Source Settings'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: "Media Atribute",
        help: "Enter the min-width em pixels.",
        value: mediaSource,
        onChange: onChangeMedia
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: "Predefined Size",
        value: selectSize,
        options: [{
          value: '100vw',
          label: '100vw'
        }, {
          value: '80vw',
          label: '80vw'
        }, {
          value: '50vw',
          label: '50vw'
        }, {
          value: '25vw',
          label: '25vw'
        }],
        onChange: onChangeSize
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
        "aria-label": __('Image Size')
      }, ['25vw', '50vw', '75vw', '100vw'].map(function (scale) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          key: scale,
          isSmall: true,
          isPrimary: toggled === scale,
          "aria-pressed": toggled === scale,
          onClick: function onClick() {
            return setToggled(toggled === scale ? null : scale);
          }
        }, scale);
      }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "picture-image"
      }, !mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaPlaceholder, {
        labels: __('Image'),
        className: className,
        onSelect: onSelectImage,
        allowedTypes: "image",
        value: mediaID
      }), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
        className: className,
        style: {
          textAlign: alignment,
          margin: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: mediaURL,
        alt: mediaAlt,
        sizes: sizes
      })))));
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes2 = props.attributes,
          mediaID = _props$attributes2.mediaID,
          mediaURL = _props$attributes2.mediaURL,
          mediaSource = _props$attributes2.mediaSource,
          newAlt = _props$attributes2.newAlt,
          sizes = _props$attributes2.sizes;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("picture", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "source",
        media: "(min-width:".concat(mediaSource, ")"),
        type: "image/webp",
        srcset: mediaURL + ".webp",
        sizes: sizes
      }), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: mediaID ? "wp-image-".concat(mediaID, "-align-").concat(props.attributes.alignment) : null,
        src: mediaURL,
        alt: newAlt
      }));
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
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=index.js.map