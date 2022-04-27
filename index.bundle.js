/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dOMcontroller.js":
/*!**************************************!*\
  !*** ./src/modules/dOMcontroller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeather": () => (/* binding */ currentWeather),
/* harmony export */   "dailyForecast": () => (/* binding */ dailyForecast),
/* harmony export */   "unitSelector": () => (/* binding */ unitSelector),
/* harmony export */   "weatherDetails": () => (/* binding */ weatherDetails)
/* harmony export */ });
/* harmony import */ var _elementBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementBuilder */ "./src/modules/elementBuilder.js");


function unitSelector() {
  const selectionContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'unitSelectionContainer',
  });
  return selectionContainer;
}

function currentWeather() {
  const currentWeatherContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherContainer',
    text: 'Success',
  });

  const currentWeatherIconContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherIconContainer',
  });

  const currentWeatherIcon = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'img',
    elementID: 'currentWeatherIcon',
    // src and alt
  });

  const currentWeatherDescription = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherDescription',
  });

  const currentWeatherTemp = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherTemp',
  });

  const currentWeatherHiContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherHiContainer',
  });

  const currentWeatherHi = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherHi',
  });

  const currentWeatherLowContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherLowContainer',
  });

  const currentWeatherLow = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'currentWeatherLow',
  });

  currentWeatherContainer.appendChild(currentWeatherIconContainer);
  currentWeatherIconContainer.appendChild(currentWeatherIcon);
  currentWeatherContainer.appendChild(currentWeatherDescription);
  currentWeatherContainer.appendChild(currentWeatherTemp);
  currentWeatherContainer.appendChild(currentWeatherHiContainer);
  currentWeatherHiContainer.appendChild(currentWeatherHi);
  currentWeatherContainer.appendChild(currentWeatherLowContainer);
  currentWeatherLowContainer.appendChild(currentWeatherLow);

  return currentWeatherContainer;
}

function dailyForecast() {
  const dailyForecastContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'dailyForecastContainer',
  });

  for (let i = 0; i < 7; i += 1) {
    const dayContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}Container`,
      className: 'dailyForecastContainer',
    });

    const dayIconContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}IconContainer`,
      className: 'iconContainer',
    });

    const dayIcon = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'img',
      elementID: `day${i}Icon`,
      className: 'forecastIcon',
      // src and alt
    });

    const dayHiContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}HiContainer`,
      className: 'forecastHiContainer',
    });

    const dayHi = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}Hi`,
      className: 'forecastHi',
    });

    const dayLowContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}LowContainer`,
      className: 'forecastLowContainer',
    });

    const dayLow = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
      element: 'div',
      elementID: `day${i}Low`,
      className: 'forecastLow',
    });

    dailyForecastContainer.appendChild(dayContainer);
    dayContainer.appendChild(dayIconContainer);
    dayIconContainer.appendChild(dayIcon);
    dayContainer.appendChild(dayHiContainer);
    dayHiContainer.appendChild(dayHi);
    dayContainer.appendChild(dayLowContainer);
    dayLowContainer.appendChild(dayLow);
  }

  return dailyForecastContainer;
}

function weatherDetails() {
  const weatherDetailsContainer = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'weatherDetailsContainer',
  });

  const title = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'h4',
    elementID: 'title',
    text: 'Weather Details',
  });

  const detailTemps = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailTemps',
    className: 'details',
    text: 'Temperature: ',
  });
  const detailFeelsLike = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailFeelsLike',
    className: 'details',
    text: 'Feels Like: ',
  });
  const detailHumidity = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailHumidity',
    className: 'details',
    text: 'Humidity: ',
  });
  const detailDewPoint = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailDewPoint',
    className: 'details',
    text: 'Dew Point: ',
  });
  const detailPressure = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailPressure',
    className: 'details',
    text: 'Pressure: ',
  });
  const detailUVIndex = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailUVIndex',
    className: 'details',
    text: 'UV Index: ',
  });
  const detailWindSpeed = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailWindSpeed',
    className: 'details',
    text: 'Wind Speed: ',
  });
  const detailWindDirection = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailWindDirection',
    className: 'details',
    text: 'Wind Direction: ',
  });
  const detailSunrise = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailSunrise',
    className: 'details',
    text: 'Sunrise: ',
  });
  const detailSunset = _elementBuilder__WEBPACK_IMPORTED_MODULE_0__.newElement({
    element: 'div',
    elementID: 'detailSunset',
    className: 'details',
    text: 'Sunset: ',
  });

  weatherDetailsContainer.appendChild(title);
  weatherDetailsContainer.appendChild(detailTemps);
  weatherDetailsContainer.appendChild(detailFeelsLike);
  weatherDetailsContainer.appendChild(detailHumidity);
  weatherDetailsContainer.appendChild(detailDewPoint);
  weatherDetailsContainer.appendChild(detailPressure);
  weatherDetailsContainer.appendChild(detailUVIndex);
  weatherDetailsContainer.appendChild(detailWindSpeed);
  weatherDetailsContainer.appendChild(detailWindSpeed);
  weatherDetailsContainer.appendChild(detailWindDirection);
  weatherDetailsContainer.appendChild(detailSunrise);
  weatherDetailsContainer.appendChild(detailSunset);

  return weatherDetailsContainer;
}



/***/ }),

/***/ "./src/modules/elementBuilder.js":
/*!***************************************!*\
  !*** ./src/modules/elementBuilder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeWindow": () => (/* binding */ closeWindow),
/* harmony export */   "moduleRender": () => (/* binding */ moduleRender),
/* harmony export */   "newElement": () => (/* binding */ newElement),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "sendToBody": () => (/* binding */ sendToBody)
/* harmony export */ });
function newElement({ element = '', className = '', elementID = '', text = '', href = '' }) {
  const DOMelement = document.createElement(element);
  if (className) DOMelement.classList = className;
  if (elementID) DOMelement.id = elementID;
  if (text) DOMelement.textContent = text;
  if (element === 'a' && href) DOMelement.href = href;

  return DOMelement;
}

function sendToBody(HTML) {
  return document.body.appendChild(HTML);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function moduleRender(obj, parentNode) {
  removeAllChildNodes(parentNode);
  Object.keys(obj).forEach((x) => parentNode.appendChild(obj[x]));
}

const closeWindow = (element) => {
  document.body.removeChild(element);
};




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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elementBuilder */ "./src/modules/elementBuilder.js");
/* harmony import */ var _modules_dOMcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dOMcontroller */ "./src/modules/dOMcontroller.js");



/* You should be able to:
  1: search for a specific location.
    Use HERE Geocoder Autocomplete API for predicting location query.
  2: toggle displaying the data in Fahrenheit or Celsius.
  3: change the look of the page based on the data
      maybe by changing the color of the background or
      by adding images that describe the weather.
      (You could even use the Giphy API to find appropriate
      weather-related gifs and display them).
  4: add a ‘loading’ component that displays from the time the
     form is submitted until the information comes back from the API. */

const main = _modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__.newElement({
  element: 'div',
  elementID: 'container',
});

const unitSelectorObj = (0,_modules_dOMcontroller__WEBPACK_IMPORTED_MODULE_2__.unitSelector)();
const currentWeatherObj = (0,_modules_dOMcontroller__WEBPACK_IMPORTED_MODULE_2__.currentWeather)();
const dailyForecastObj = (0,_modules_dOMcontroller__WEBPACK_IMPORTED_MODULE_2__.dailyForecast)();
const weatherDetailsObj = (0,_modules_dOMcontroller__WEBPACK_IMPORTED_MODULE_2__.weatherDetails)();

const model = { unitSelectorObj, currentWeatherObj, dailyForecastObj, weatherDetailsObj };
// main.appendChild(test);

_modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__.moduleRender(model, main);
_modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__.sendToBody(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0VBQWtFO0FBQ25IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtRDs7QUFFbkQ7QUFDQSw2QkFBNkIsdURBQXlCO0FBQ3REO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx1REFBeUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxzQ0FBc0MsdURBQXlCO0FBQy9EO0FBQ0E7QUFDQSxHQUFHOztBQUVILDZCQUE2Qix1REFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxvQ0FBb0MsdURBQXlCO0FBQzdEO0FBQ0E7QUFDQSxHQUFHOztBQUVILDZCQUE2Qix1REFBeUI7QUFDdEQ7QUFDQTtBQUNBLEdBQUc7O0FBRUgsb0NBQW9DLHVEQUF5QjtBQUM3RDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCwyQkFBMkIsdURBQXlCO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHOztBQUVILHFDQUFxQyx1REFBeUI7QUFDOUQ7QUFDQTtBQUNBLEdBQUc7O0FBRUgsNEJBQTRCLHVEQUF5QjtBQUNyRDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsdURBQXlCO0FBQzFEO0FBQ0E7QUFDQSxHQUFHOztBQUVILGtCQUFrQixPQUFPO0FBQ3pCLHlCQUF5Qix1REFBeUI7QUFDbEQ7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QjtBQUNBLEtBQUs7O0FBRUwsNkJBQTZCLHVEQUF5QjtBQUN0RDtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0EsS0FBSzs7QUFFTCxvQkFBb0IsdURBQXlCO0FBQzdDO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCLHVEQUF5QjtBQUNwRDtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0EsS0FBSzs7QUFFTCxrQkFBa0IsdURBQXlCO0FBQzNDO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQSxLQUFLOztBQUVMLDRCQUE0Qix1REFBeUI7QUFDckQ7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QjtBQUNBLEtBQUs7O0FBRUwsbUJBQW1CLHVEQUF5QjtBQUM1QztBQUNBLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsdURBQXlCO0FBQzNEO0FBQ0E7QUFDQSxHQUFHOztBQUVILGdCQUFnQix1REFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxzQkFBc0IsdURBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQix1REFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLHVEQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsdURBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5Qix1REFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLHVEQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsdURBQXlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhCQUE4Qix1REFBeUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLHVEQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsdURBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUN1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVOdkUsc0JBQXNCLG9FQUFvRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVrRjs7Ozs7OztVQzdCbEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ3VDO0FBTTFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwrREFBeUI7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQsd0JBQXdCLG9FQUFZO0FBQ3BDLDBCQUEwQixzRUFBYztBQUN4Qyx5QkFBeUIscUVBQWE7QUFDdEMsMEJBQTBCLHNFQUFjOztBQUV4QyxnQkFBZ0I7QUFDaEI7O0FBRUEsaUVBQTJCO0FBQzNCLCtEQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RPTWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9lbGVtZW50QnVpbGRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICogYXMgZWxlbWVudEJ1aWxkZXIgZnJvbSAnLi9lbGVtZW50QnVpbGRlcic7XG5cbmZ1bmN0aW9uIHVuaXRTZWxlY3RvcigpIHtcbiAgY29uc3Qgc2VsZWN0aW9uQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAndW5pdFNlbGVjdGlvbkNvbnRhaW5lcicsXG4gIH0pO1xuICByZXR1cm4gc2VsZWN0aW9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50V2VhdGhlcigpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJDb250YWluZXIgPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnZGl2JyxcbiAgICBlbGVtZW50SUQ6ICdjdXJyZW50V2VhdGhlckNvbnRhaW5lcicsXG4gICAgdGV4dDogJ1N1Y2Nlc3MnLFxuICB9KTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckljb25Db250YWluZXIgPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnZGl2JyxcbiAgICBlbGVtZW50SUQ6ICdjdXJyZW50V2VhdGhlckljb25Db250YWluZXInLFxuICB9KTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnaW1nJyxcbiAgICBlbGVtZW50SUQ6ICdjdXJyZW50V2VhdGhlckljb24nLFxuICAgIC8vIHNyYyBhbmQgYWx0XG4gIH0pO1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb24gPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnZGl2JyxcbiAgICBlbGVtZW50SUQ6ICdjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uJyxcbiAgfSk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJUZW1wID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnY3VycmVudFdlYXRoZXJUZW1wJyxcbiAgfSk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJIaUNvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2N1cnJlbnRXZWF0aGVySGlDb250YWluZXInLFxuICB9KTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckhpID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnY3VycmVudFdlYXRoZXJIaScsXG4gIH0pO1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyTG93Q29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnY3VycmVudFdlYXRoZXJMb3dDb250YWluZXInLFxuICB9KTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckxvdyA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2N1cnJlbnRXZWF0aGVyTG93JyxcbiAgfSk7XG5cbiAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJY29uQ29udGFpbmVyKTtcbiAgY3VycmVudFdlYXRoZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySWNvbik7XG4gIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb24pO1xuICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlclRlbXApO1xuICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckhpQ29udGFpbmVyKTtcbiAgY3VycmVudFdlYXRoZXJIaUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckhpKTtcbiAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJMb3dDb250YWluZXIpO1xuICBjdXJyZW50V2VhdGhlckxvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckxvdyk7XG5cbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkYWlseUZvcmVjYXN0KCkge1xuICBjb25zdCBkYWlseUZvcmVjYXN0Q29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnZGFpbHlGb3JlY2FzdENvbnRhaW5lcicsXG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgY29uc3QgZGF5Q29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgIGVsZW1lbnRJRDogYGRheSR7aX1Db250YWluZXJgLFxuICAgICAgY2xhc3NOYW1lOiAnZGFpbHlGb3JlY2FzdENvbnRhaW5lcicsXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXlJY29uQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgIGVsZW1lbnRJRDogYGRheSR7aX1JY29uQ29udGFpbmVyYCxcbiAgICAgIGNsYXNzTmFtZTogJ2ljb25Db250YWluZXInLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF5SWNvbiA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgICAgZWxlbWVudDogJ2ltZycsXG4gICAgICBlbGVtZW50SUQ6IGBkYXkke2l9SWNvbmAsXG4gICAgICBjbGFzc05hbWU6ICdmb3JlY2FzdEljb24nLFxuICAgICAgLy8gc3JjIGFuZCBhbHRcbiAgICB9KTtcblxuICAgIGNvbnN0IGRheUhpQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgIGVsZW1lbnRJRDogYGRheSR7aX1IaUNvbnRhaW5lcmAsXG4gICAgICBjbGFzc05hbWU6ICdmb3JlY2FzdEhpQ29udGFpbmVyJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRheUhpID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgIGVsZW1lbnRJRDogYGRheSR7aX1IaWAsXG4gICAgICBjbGFzc05hbWU6ICdmb3JlY2FzdEhpJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRheUxvd0NvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICBlbGVtZW50SUQ6IGBkYXkke2l9TG93Q29udGFpbmVyYCxcbiAgICAgIGNsYXNzTmFtZTogJ2ZvcmVjYXN0TG93Q29udGFpbmVyJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRheUxvdyA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICBlbGVtZW50SUQ6IGBkYXkke2l9TG93YCxcbiAgICAgIGNsYXNzTmFtZTogJ2ZvcmVjYXN0TG93JyxcbiAgICB9KTtcblxuICAgIGRhaWx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5SWNvbkNvbnRhaW5lcik7XG4gICAgZGF5SWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlJY29uKTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5SGlDb250YWluZXIpO1xuICAgIGRheUhpQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheUhpKTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TG93Q29udGFpbmVyKTtcbiAgICBkYXlMb3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TG93KTtcbiAgfVxuXG4gIHJldHVybiBkYWlseUZvcmVjYXN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyRGV0YWlscygpIHtcbiAgY29uc3Qgd2VhdGhlckRldGFpbHNDb250YWluZXIgPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnZGl2JyxcbiAgICBlbGVtZW50SUQ6ICd3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lcicsXG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2g0JyxcbiAgICBlbGVtZW50SUQ6ICd0aXRsZScsXG4gICAgdGV4dDogJ1dlYXRoZXIgRGV0YWlscycsXG4gIH0pO1xuXG4gIGNvbnN0IGRldGFpbFRlbXBzID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnZGV0YWlsVGVtcHMnLFxuICAgIGNsYXNzTmFtZTogJ2RldGFpbHMnLFxuICAgIHRleHQ6ICdUZW1wZXJhdHVyZTogJyxcbiAgfSk7XG4gIGNvbnN0IGRldGFpbEZlZWxzTGlrZSA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbEZlZWxzTGlrZScsXG4gICAgY2xhc3NOYW1lOiAnZGV0YWlscycsXG4gICAgdGV4dDogJ0ZlZWxzIExpa2U6ICcsXG4gIH0pO1xuICBjb25zdCBkZXRhaWxIdW1pZGl0eSA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbEh1bWlkaXR5JyxcbiAgICBjbGFzc05hbWU6ICdkZXRhaWxzJyxcbiAgICB0ZXh0OiAnSHVtaWRpdHk6ICcsXG4gIH0pO1xuICBjb25zdCBkZXRhaWxEZXdQb2ludCA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbERld1BvaW50JyxcbiAgICBjbGFzc05hbWU6ICdkZXRhaWxzJyxcbiAgICB0ZXh0OiAnRGV3IFBvaW50OiAnLFxuICB9KTtcbiAgY29uc3QgZGV0YWlsUHJlc3N1cmUgPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgICBlbGVtZW50OiAnZGl2JyxcbiAgICBlbGVtZW50SUQ6ICdkZXRhaWxQcmVzc3VyZScsXG4gICAgY2xhc3NOYW1lOiAnZGV0YWlscycsXG4gICAgdGV4dDogJ1ByZXNzdXJlOiAnLFxuICB9KTtcbiAgY29uc3QgZGV0YWlsVVZJbmRleCA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbFVWSW5kZXgnLFxuICAgIGNsYXNzTmFtZTogJ2RldGFpbHMnLFxuICAgIHRleHQ6ICdVViBJbmRleDogJyxcbiAgfSk7XG4gIGNvbnN0IGRldGFpbFdpbmRTcGVlZCA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbFdpbmRTcGVlZCcsXG4gICAgY2xhc3NOYW1lOiAnZGV0YWlscycsXG4gICAgdGV4dDogJ1dpbmQgU3BlZWQ6ICcsXG4gIH0pO1xuICBjb25zdCBkZXRhaWxXaW5kRGlyZWN0aW9uID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnZGV0YWlsV2luZERpcmVjdGlvbicsXG4gICAgY2xhc3NOYW1lOiAnZGV0YWlscycsXG4gICAgdGV4dDogJ1dpbmQgRGlyZWN0aW9uOiAnLFxuICB9KTtcbiAgY29uc3QgZGV0YWlsU3VucmlzZSA9IGVsZW1lbnRCdWlsZGVyLm5ld0VsZW1lbnQoe1xuICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgIGVsZW1lbnRJRDogJ2RldGFpbFN1bnJpc2UnLFxuICAgIGNsYXNzTmFtZTogJ2RldGFpbHMnLFxuICAgIHRleHQ6ICdTdW5yaXNlOiAnLFxuICB9KTtcbiAgY29uc3QgZGV0YWlsU3Vuc2V0ID0gZWxlbWVudEJ1aWxkZXIubmV3RWxlbWVudCh7XG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgZWxlbWVudElEOiAnZGV0YWlsU3Vuc2V0JyxcbiAgICBjbGFzc05hbWU6ICdkZXRhaWxzJyxcbiAgICB0ZXh0OiAnU3Vuc2V0OiAnLFxuICB9KTtcblxuICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFRlbXBzKTtcbiAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsRmVlbHNMaWtlKTtcbiAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsSHVtaWRpdHkpO1xuICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxEZXdQb2ludCk7XG4gIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFByZXNzdXJlKTtcbiAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVVZJbmRleCk7XG4gIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFdpbmRTcGVlZCk7XG4gIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFdpbmRTcGVlZCk7XG4gIHdlYXRoZXJEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFdpbmREaXJlY3Rpb24pO1xuICB3ZWF0aGVyRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxTdW5yaXNlKTtcbiAgd2VhdGhlckRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsU3Vuc2V0KTtcblxuICByZXR1cm4gd2VhdGhlckRldGFpbHNDb250YWluZXI7XG59XG5leHBvcnQgeyB1bml0U2VsZWN0b3IsIGN1cnJlbnRXZWF0aGVyLCBkYWlseUZvcmVjYXN0LCB3ZWF0aGVyRGV0YWlscyB9O1xuIiwiZnVuY3Rpb24gbmV3RWxlbWVudCh7IGVsZW1lbnQgPSAnJywgY2xhc3NOYW1lID0gJycsIGVsZW1lbnRJRCA9ICcnLCB0ZXh0ID0gJycsIGhyZWYgPSAnJyB9KSB7XG4gIGNvbnN0IERPTWVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoY2xhc3NOYW1lKSBET01lbGVtZW50LmNsYXNzTGlzdCA9IGNsYXNzTmFtZTtcbiAgaWYgKGVsZW1lbnRJRCkgRE9NZWxlbWVudC5pZCA9IGVsZW1lbnRJRDtcbiAgaWYgKHRleHQpIERPTWVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBpZiAoZWxlbWVudCA9PT0gJ2EnICYmIGhyZWYpIERPTWVsZW1lbnQuaHJlZiA9IGhyZWY7XG5cbiAgcmV0dXJuIERPTWVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb0JvZHkoSFRNTCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIVE1MKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb2R1bGVSZW5kZXIob2JqLCBwYXJlbnROb2RlKSB7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoeCkgPT4gcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChvYmpbeF0pKTtcbn1cblxuY29uc3QgY2xvc2VXaW5kb3cgPSAoZWxlbWVudCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbW9kdWxlUmVuZGVyLCBjbG9zZVdpbmRvdyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgKiBhcyBlbGVtZW50QnVpbGRlciBmcm9tICcuL21vZHVsZXMvZWxlbWVudEJ1aWxkZXInO1xuaW1wb3J0IHtcbiAgdW5pdFNlbGVjdG9yLFxuICBjdXJyZW50V2VhdGhlcixcbiAgZGFpbHlGb3JlY2FzdCxcbiAgd2VhdGhlckRldGFpbHMsXG59IGZyb20gJy4vbW9kdWxlcy9kT01jb250cm9sbGVyJztcbi8qIFlvdSBzaG91bGQgYmUgYWJsZSB0bzpcbiAgMTogc2VhcmNoIGZvciBhIHNwZWNpZmljIGxvY2F0aW9uLlxuICAgIFVzZSBIRVJFIEdlb2NvZGVyIEF1dG9jb21wbGV0ZSBBUEkgZm9yIHByZWRpY3RpbmcgbG9jYXRpb24gcXVlcnkuXG4gIDI6IHRvZ2dsZSBkaXNwbGF5aW5nIHRoZSBkYXRhIGluIEZhaHJlbmhlaXQgb3IgQ2Vsc2l1cy5cbiAgMzogY2hhbmdlIHRoZSBsb29rIG9mIHRoZSBwYWdlIGJhc2VkIG9uIHRoZSBkYXRhXG4gICAgICBtYXliZSBieSBjaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgb3JcbiAgICAgIGJ5IGFkZGluZyBpbWFnZXMgdGhhdCBkZXNjcmliZSB0aGUgd2VhdGhlci5cbiAgICAgIChZb3UgY291bGQgZXZlbiB1c2UgdGhlIEdpcGh5IEFQSSB0byBmaW5kIGFwcHJvcHJpYXRlXG4gICAgICB3ZWF0aGVyLXJlbGF0ZWQgZ2lmcyBhbmQgZGlzcGxheSB0aGVtKS5cbiAgNDogYWRkIGEg4oCYbG9hZGluZ+KAmSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBmcm9tIHRoZSB0aW1lIHRoZVxuICAgICBmb3JtIGlzIHN1Ym1pdHRlZCB1bnRpbCB0aGUgaW5mb3JtYXRpb24gY29tZXMgYmFjayBmcm9tIHRoZSBBUEkuICovXG5cbmNvbnN0IG1haW4gPSBlbGVtZW50QnVpbGRlci5uZXdFbGVtZW50KHtcbiAgZWxlbWVudDogJ2RpdicsXG4gIGVsZW1lbnRJRDogJ2NvbnRhaW5lcicsXG59KTtcblxuY29uc3QgdW5pdFNlbGVjdG9yT2JqID0gdW5pdFNlbGVjdG9yKCk7XG5jb25zdCBjdXJyZW50V2VhdGhlck9iaiA9IGN1cnJlbnRXZWF0aGVyKCk7XG5jb25zdCBkYWlseUZvcmVjYXN0T2JqID0gZGFpbHlGb3JlY2FzdCgpO1xuY29uc3Qgd2VhdGhlckRldGFpbHNPYmogPSB3ZWF0aGVyRGV0YWlscygpO1xuXG5jb25zdCBtb2RlbCA9IHsgdW5pdFNlbGVjdG9yT2JqLCBjdXJyZW50V2VhdGhlck9iaiwgZGFpbHlGb3JlY2FzdE9iaiwgd2VhdGhlckRldGFpbHNPYmogfTtcbi8vIG1haW4uYXBwZW5kQ2hpbGQodGVzdCk7XG5cbmVsZW1lbnRCdWlsZGVyLm1vZHVsZVJlbmRlcihtb2RlbCwgbWFpbik7XG5lbGVtZW50QnVpbGRlci5zZW5kVG9Cb2R5KG1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9