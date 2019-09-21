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
      smallThumb: {
        type: 'string'
      },
      mediumThumb: {
        type: 'string'
      },
      originalSizeThumb: {
        type: 'string'
      },
      smallSizeThumb: {
        type: 'string'
      },
      mediumSizeThumb: {
        type: 'string'
      }
    },
    edit: function edit(props) {
      var className = props.className,
          _props$attributes = props.attributes,
          mediaID = _props$attributes.mediaID,
          mediaURL = _props$attributes.mediaURL,
          mediaJPG = _props$attributes.mediaJPG,
          alignment = _props$attributes.alignment,
          mediaAlt = _props$attributes.mediaAlt,
          toggleField = _props$attributes.toggleField,
          mediaSource = _props$attributes.mediaSource,
          sizes = _props$attributes.sizes,
          smallThumb = _props$attributes.smallThumb,
          mediumThumb = _props$attributes.mediumThumb,
          originalSizeThumb = _props$attributes.originalSizeThumb,
          smallSizeThumb = _props$attributes.smallSizeThumb,
          mediumSizeThumb = _props$attributes.mediumSizeThumb,
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
  
      var onChangeToggleField = function onChangeToggleField(newValue) {
        setAttributes({
          toggleField: newValue
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
  
      var onChangeRemoveJpg = function onChangeRemoveJpg() {
        setAttributes({
          mediaJPG: undefined,
          mediaAlt: undefined
        });
      }; // Set the initial state of the Component
  
  
      var _useState = useState(sizes),
          _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
          size = _useState2[0],
          setSizes = _useState2[1]; // Update the Component after new state is set
      // Equivalent to componentDidMount in Classes
  
  
      useEffect(function () {
        if (toggleField === true) {
          setAttributes({
            sizes: size
          });
        } // The Cleaning function is inside the hook
        // Equivalent to componentWillUnmount in Classes
  
  
        return function () {
          if (toggleField === false) {
            setAttributes({
              smallSizeThumb: undefined,
              mediumSizeThumb: undefined,
              originalSizeThumb: undefined,
              smallThumb: undefined,
              mediumThumb: undefined,
              sizes: undefined,
              mediaSource: undefined
            });
          } // Starts after each new render. Here the variables determines when the function is called
  
        };
      }, [size, toggleField]);
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
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-jpg-image"
      }, !mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        className: "block-library-image__dimensions__row",
        style: {
          fontWeight: 700,
          marginTop: 20
        }
      }, __('Note: Enter one JPG callback image for crossbrowser support')), !mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
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
          }, !mediaJPG && __('Upload JPG callback image', 'gutenberg-examples'));
        }
      })), mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-picture__dimensions__row",
        style: {
          marginBottom: 20,
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        style: {
          fontWeight: 700,
          textAlign: 'center'
        }
      }, __('JPG Callback')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __('Server Scale'),
        help: __('You need to upload 3 images'),
        checked: toggleField,
        onChange: onChangeToggleField
      }), toggleField && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Thumbnails'),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-small-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectSmallThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref4) {
          var open = _ref4.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: smallThumb ? 'image-button' : 'button button-large',
            onClick: open
          }, !smallThumb ? __('Upload Small WebP', 'gutenberg-examples') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            style: {
              fontWeight: 700
            }
          }, __('Small WebP')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, smallThumb)));
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "media-medium-image",
        style: {
          marginTop: 10
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: onSelectMediumThumb,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref5) {
          var open = _ref5.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: mediumThumb ? 'image-button' : 'button button-large',
            onClick: open
          }, !mediumThumb ? __('Upload Medium WebP', 'gutenberg-examples') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "block-library-image__dimensions__row"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
            style: {
              fontWeight: 700
            }
          }, __('Medium WebP')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("u", null, mediumThumb)));
        }
      })))), toggleField && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
        title: __('Source Settings'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Media Atribute'),
        help: __('Enter the min-width in pixels'),
        value: mediaSource,
        onChange: onChangeMedia
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        label: __('Original image size'),
        help: __('e.g., 1200w'),
        value: originalSizeThumb,
        onChange: onChangeSizeOriginalThumb
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        className: "block-library-image__dimensions__row"
      }, __('Webp Thumbnails Scale')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        className: "block-library-image__dimensions__width",
        label: __('Small'),
        help: __('e.g., 300w'),
        value: smallSizeThumb,
        onChange: onChangeSizeSmallThumb
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
        className: "block-library-image__dimensions__height",
        label: __('Medium'),
        help: __('e.g., 768w'),
        value: mediumSizeThumb,
        onChange: onChangeSizeMediumThumb
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "block-library-image__dimensions__row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        className: "block-library-image__dimensions__row"
      }, __('Sizes attribute')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
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
      }))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
          textAlign: alignment,
          margin: 0
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: mediaURL,
        alt: mediaAlt,
        sizes: sizes
      }))));
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes2 = props.attributes,
          mediaID = _props$attributes2.mediaID,
          mediaURL = _props$attributes2.mediaURL,
          mediaJPG = _props$attributes2.mediaJPG,
          mediaSource = _props$attributes2.mediaSource,
          mediaAlt = _props$attributes2.mediaAlt,
          sizes = _props$attributes2.sizes,
          toggleField = _props$attributes2.toggleField,
          smallThumb = _props$attributes2.smallThumb,
          mediumThumb = _props$attributes2.mediumThumb,
          originalSizeThumb = _props$attributes2.originalSizeThumb,
          smallSizeThumb = _props$attributes2.smallSizeThumb,
          mediumSizeThumb = _props$attributes2.mediumSizeThumb;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("picture", {
        className: className
      }, !toggleField && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
        type: "image/webp",
        srcset: mediaURL
      }), toggleField && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: "source",
        media: "(min-width:".concat(mediaSource, ")"),
        type: "image/webp",
        srcset: mediaURL + " ".concat(originalSizeThumb, ", ") + smallThumb + " ".concat(smallSizeThumb, ", ") + mediumThumb + " ".concat(mediumSizeThumb),
        sizes: sizes
      }), mediaJPG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: mediaID ? "wp-image-".concat(mediaID) : null,
        src: mediaJPG,
        alt: mediaAlt
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