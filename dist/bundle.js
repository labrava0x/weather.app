/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --concrete-dark: #131417;\n  --concrete-slab: #1c1e23;\n  --concrete-light: #e2e4e8;\n  --concrete-muted: #989fa9;\n  --line: #343840;\n  --blast-orange: #ff4d00;\n  --blast-bright: #ff7b1c;\n  --nitro-amber: #ffb703;\n  --danger: #ff2a3c;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  border-radius: 0;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  background-color: var(--concrete-dark);\n  background-image:\n    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),\n    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);\n  background-size: 32px 32px;\n  color: var(--concrete-light);\n  font-family: ui-monospace, \"Cascadia Code\", \"Fira Code\", Menlo, Consolas, monospace;\n  font-variant-numeric: tabular-nums;\n  padding: 2rem 1rem;\n  display: grid;\n  place-items: center;\n}\n\n#app {\n  width: 100%;\n  max-width: 760px;\n  background: var(--concrete-slab);\n  border: 2px solid var(--concrete-light);\n  box-shadow: 8px 8px 0 var(--blast-orange);\n  padding: 1.5rem;\n}\n\n#location-form {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0.75rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid var(--line);\n}\n\n#location-form label {\n  grid-column: 1 / -1;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--nitro-amber);\n}\n\n#location-input {\n  min-width: 0;\n  padding: 0.75rem 0.9rem;\n  background: var(--concrete-dark);\n  border: 2px solid var(--line);\n  color: var(--concrete-light);\n  font-family: inherit;\n  font-size: 0.95rem;\n  outline: none;\n}\n\n#location-input:focus {\n  border-color: var(--blast-bright);\n  box-shadow: inset 3px 0 0 var(--blast-orange);\n}\n\nbutton {\n  font-family: inherit;\n  font-size: 0.8rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  padding: 0.75rem 1.15rem;\n  border: 2px solid var(--concrete-light);\n  cursor: pointer;\n  transition: transform 60ms steps(2), background-color 60ms steps(2), color 60ms steps(2);\n}\n\n#location-form button[type=\"submit\"] {\n  background: var(--blast-orange);\n  color: var(--concrete-dark);\n  border-color: var(--blast-orange);\n}\n\n#location-form button[type=\"submit\"]:hover {\n  background: var(--blast-bright);\n  border-color: var(--blast-bright);\n}\n\n#location-form button[type=\"submit\"]:active {\n  transform: translate(2px, 2px);\n}\n\n#unit-toggle {\n  margin-top: 1rem;\n  background: var(--concrete-dark);\n  color: var(--concrete-light);\n  border-color: var(--line);\n}\n\n#unit-toggle:hover,\n#unit-toggle[aria-pressed=\"true\"] {\n  border-color: var(--nitro-amber);\n  color: var(--nitro-amber);\n}\n\n#loading-panel {\n  margin-top: 1rem;\n  padding: 0.85rem 1rem;\n  background: var(--concrete-dark);\n  border: 2px solid var(--blast-orange);\n}\n\n.loading-bar {\n  display: block;\n  height: 8px;\n  margin-bottom: 0.6rem;\n  background: repeating-linear-gradient(\n    -45deg,\n    var(--blast-orange),\n    var(--blast-orange) 10px,\n    var(--concrete-slab) 10px,\n    var(--concrete-slab) 20px\n  );\n  background-size: 28px 28px;\n  animation: hazard-shift 0.6s linear infinite;\n}\n\n@keyframes hazard-shift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 28px 0;\n  }\n}\n\n#loading-text {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--nitro-amber);\n}\n\n#status-message {\n  min-height: 1.5rem;\n  margin: 0.9rem 0 0;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--concrete-muted);\n}\n\n.observer-trigger-wrap {\n  margin-top: 0.9rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.6rem;\n}\n\n.observer-detonate {\n  padding: 0.4rem 0.6rem;\n  background: var(--concrete-dark);\n  border: 2px solid var(--line);\n  color: var(--concrete-light);\n  font-size: 0.95rem;\n  line-height: 1;\n  opacity: 0.7;\n  transition: transform 60ms steps(2), border-color 60ms steps(2), opacity 120ms ease;\n}\n\n.observer-detonate:hover,\n.observer-detonate:focus-visible,\n.observer-detonate[aria-expanded=\"true\"] {\n  opacity: 1;\n  border-color: var(--blast-orange);\n}\n\n.observer-detonate:active {\n  transform: translate(2px, 2px);\n}\n\n.observer-whisper {\n  margin: 0;\n  padding: 0.6rem 0.75rem;\n  width: 100%;\n  background: var(--concrete-dark);\n  border-left: 3px solid var(--nitro-amber);\n  color: var(--concrete-light);\n  font-size: 0.82rem;\n  line-height: 1.55;\n}\n\n#weather-display {\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 2px solid var(--concrete-light);\n}\n\n#weather-location {\n  margin: 0 0 0.75rem;\n  font-size: clamp(1.4rem, 3.5vw, 2.1rem);\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  line-height: 1.1;\n  border-left: 6px solid var(--blast-orange);\n  padding-left: 0.75rem;\n}\n\n#weather-icon {\n  width: 68px;\n  height: 68px;\n  padding: 0.4rem;\n  background: var(--concrete-dark);\n  border: 2px solid var(--line);\n  margin: 0.5rem 0 1rem;\n  display: block;\n}\n\n#weather-display > p {\n  margin: 0.4rem 0;\n  padding: 0.45rem 0.65rem;\n  background: var(--concrete-dark);\n  border-left: 2px solid var(--line);\n  font-size: 0.9rem;\n}\n\n#weather-temp {\n  font-size: 1.1rem !important;\n  font-weight: 800;\n  color: var(--nitro-amber);\n  border-left-color: var(--blast-orange) !important;\n}\n\n#forecast-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 2px;\n  margin-top: 1.25rem;\n  background: var(--line);\n  border: 2px solid var(--line);\n}\n\n.forecast-day {\n  background: var(--concrete-slab);\n  padding: 0.85rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.4rem;\n}\n\n.forecast-day:hover {\n  background: #23262e;\n  box-shadow: inset 0 3px 0 var(--blast-orange);\n}\n\n.forecast-day p {\n  margin: 0;\n  font-size: 0.8rem;\n}\n\n.forecast-day p:first-child {\n  font-weight: 700;\n  color: var(--nitro-amber);\n  letter-spacing: 0.04em;\n}\n\n.forecast-day h3 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--nitro-amber);\n  letter-spacing: 0.04em;\n}\n\n.forecast-icon {\n  width: 38px;\n  height: 38px;\n  margin: 0.25rem 0;\n  display: block;\n}\n\n@media (max-width: 520px) {\n  #location-form {\n    grid-template-columns: 1fr;\n  }\n\n  #app {\n    box-shadow: 5px 5px 0 var(--blast-orange);\n    padding: 1.15rem;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/icons/icons.js"
/*!****************************!*\
  !*** ./src/icons/icons.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherIconUrl: () => (/* binding */ getWeatherIconUrl)\n/* harmony export */ });\nconst ICONS = {\n  sun: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#ffb703\" stroke-width=\"4\"><circle cx=\"32\" cy=\"32\" r=\"12\"/><path d=\"M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M50.4 13.6l-5.7 5.7M19.3 44.7l-5.7 5.7\"/></svg>`,\n  moon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M44 40A18 18 0 0 1 24 20c0-3.5 1-6.8 2.8-9.5A20 20 0 1 0 53.5 37.2 17.9 17.9 0 0 1 44 40Z\"/></svg>`,\n  cloud: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M18 46h28a10 10 0 0 0 1-19.9A14 14 0 0 0 20 22a11 11 0 0 0-2 24Z\"/></svg>`,\n  partlyCloudy: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><circle cx=\"24\" cy=\"24\" r=\"9\" stroke=\"#ffb703\"/><path d=\"M24 8v4M8 24h4M12.7 12.7l2.8 2.8\" stroke=\"#ffb700\"/><path d=\"M22 48h26a9 9 0 0 0 .8-17.9A12 12 0 0 0 25 27a10 10 0 0 0-3 21Z\"/></svg>`,\n  rain: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M18 38h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 17a10 10 0 0 0-3 21Z\"/><path d=\"M22 46l-4 10M34 46l-4 10M46 46l-4 10\" stroke=\"#ff4d00\"/></svg>`,\n  snow: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M18 38h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 17a10 10 0 0 0-3 21Z\"/><path d=\"M24 46v10M19 51h10M40 46v10M35 51h10\" stroke=\"#ffb703\"/></svg>`,\n  thunder: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M18 36h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 15a10 10 0 0 0-3 21Z\"/><path d=\"M34 38l-8 12h10l-4 10\" stroke=\"#ff4d00\"/></svg>`,\n  wind: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M10 24h32a6 6 0 1 0-6-6M10 34h40a6 6 0 1 1-6 6M10 44h22\" stroke=\"#ff4d00\"/></svg>`,\n  fog: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#e2e4e8\" stroke-width=\"4\"><path d=\"M12 22h40M16 32h32M10 42h44M18 52h28\"/></svg>`,\n};\n\nfunction getWeatherIconUrl(iconName = \"\") {\n  if (!iconName || typeof iconName !== \"string\") return null;\n  const key = iconName.toLowerCase();\n\n  let svg = ICONS.sun;\n  if (key.includes(\"thunder\")) svg = ICONS.thunder;\n  else if (key.includes(\"snow\") || key.includes(\"sleet\") || key.includes(\"hail\")) svg = ICONS.snow;\n  else if (key.includes(\"rain\") || key.includes(\"showers\")) svg = ICONS.rain;\n  else if (key.includes(\"partly-cloudy\")) svg = ICONS.partlyCloudy;\n  else if (key.includes(\"cloudy\") || key.includes(\"overcast\")) svg = ICONS.cloud;\n  else if (key.includes(\"wind\")) svg = ICONS.wind;\n  else if (key.includes(\"fog\")) svg = ICONS.fog;\n  else if (key.includes(\"night\")) svg = ICONS.moon;\n\n  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;\n}\n\n//# sourceURL=webpack://weather-app/./src/icons/icons.js?\n}");

/***/ },

/***/ "./src/js/display.js"
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWeather: () => (/* binding */ renderWeather)\n/* harmony export */ });\n/* harmony import */ var _icons_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/icons.js */ \"./src/icons/icons.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n\n\n\nconst unitToggleBtn = document.getElementById(\"unit-toggle\");\nconst displaySection = document.getElementById(\"weather-display\");\nconst statusEl = document.getElementById(\"status-message\");\n\nconst locationEl = document.getElementById(\"weather-location\");\nconst iconEl = document.getElementById(\"weather-icon\");\nconst conditionEl = document.getElementById(\"weather-condition\");\nconst tempEl = document.getElementById(\"weather-temp\");\nconst feelsLikeEl = document.getElementById(\"weather-feels-like\");\nconst humidityEl = document.getElementById(\"weather-humidity\");\nconst windEl = document.getElementById(\"weather-wind\");\nconst highLowEl = document.getElementById(\"weather-high-low\");\nconst forecastContainer = document.getElementById(\"forecast-container\");\n\nlet currentWeather = null;\nlet useFahrenheit = false;\nlet renderSequence = 0;\n\nfunction renderForecast(forecastDays = []) {\n  if (!forecastContainer) return;\n  forecastContainer.replaceChildren();\n\n  if (!Array.isArray(forecastDays)) return;\n\n  forecastDays.forEach((day) => {\n    const card = document.createElement(\"article\");\n    card.className = \"forecast-day\";\n\n    const dateHeading = document.createElement(\"h3\");\n    dateHeading.textContent = day?.date || \"--\";\n\n    const dayIconUrl = (0,_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherIconUrl)(day?.icon);\n    const dayIcon = document.createElement(\"img\");\n    dayIcon.className = \"forecast-icon\";\n    dayIcon.width = 36;\n    dayIcon.height = 36;\n    if (dayIconUrl) {\n      dayIcon.src = dayIconUrl;\n      dayIcon.alt = day?.conditions || day?.icon || \"Forecast icon\";\n    }\n\n    const condText = document.createElement(\"p\");\n    condText.textContent = day?.conditions || \"\";\n\n    const rangeText = document.createElement(\"p\");\n    rangeText.textContent = `HI ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(day?.tempMax, useFahrenheit)} / LO ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(day?.tempMin, useFahrenheit)}`;\n\n    if (dayIconUrl) {\n      card.append(dateHeading, dayIcon, condText, rangeText);\n    } else {\n      card.append(dateHeading, condText, rangeText);\n    }\n    forecastContainer.appendChild(card);\n  });\n}\n\nfunction paintWeather(weather) {\n  if (!weather) return;\n\n  if (locationEl) locationEl.textContent = weather.location || \"UNKNOWN SECTOR\";\n  if (conditionEl) conditionEl.textContent = weather.condition || \"--\";\n  if (tempEl) tempEl.textContent = (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(weather.temp, useFahrenheit);\n  if (feelsLikeEl) {\n    feelsLikeEl.textContent = `FEELS LIKE: ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(weather.feelsLike, useFahrenheit)}`;\n  }\n  if (humidityEl) {\n    humidityEl.textContent = (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatHumidity)(weather.humidity);\n  }\n  if (windEl) {\n    windEl.textContent = `WIND: ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatWind)(weather.windSpeed, useFahrenheit)}`;\n  }\n  if (highLowEl) {\n    highLowEl.textContent = `MAX ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(weather.high, useFahrenheit)} // MIN ${(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatTemp)(weather.low, useFahrenheit)}`;\n  }\n\n  renderForecast(weather.forecast);\n  if (displaySection) displaySection.hidden = false;\n  if (statusEl) statusEl.textContent = \"\";\n}\n\nasync function renderWeather(weather) {\n  const currentRender = ++renderSequence;\n  currentWeather = weather;\n\n  paintWeather(weather);\n\n  if (!iconEl) return;\n\n  const iconUrl = (0,_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherIconUrl)(weather?.icon);\n  if (currentRender !== renderSequence) return;\n\n  if (iconUrl) {\n    iconEl.src = iconUrl;\n    iconEl.alt = weather.condition || weather.icon || \"Weather icon\";\n    iconEl.width = 56;\n    iconEl.height = 56;\n    iconEl.hidden = false;\n  } else {\n    iconEl.removeAttribute(\"src\");\n    iconEl.alt = \"\";\n    iconEl.hidden = true;\n  }\n}\n\nif (unitToggleBtn) {\n  unitToggleBtn.addEventListener(\"click\", async () => {\n    useFahrenheit = !useFahrenheit;\n    unitToggleBtn.setAttribute(\"aria-pressed\", String(useFahrenheit));\n    unitToggleBtn.textContent = useFahrenheit ? \"Switch to °C\" : \"Switch to °F\";\n\n    if (currentWeather) {\n      await renderWeather(currentWeather);\n    }\n  });\n}\n\n//# sourceURL=webpack://weather-app/./src/js/display.js?\n}");

/***/ },

/***/ "./src/js/form.js"
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.data.js */ \"./src/js/weather.data.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\n\n\nconst locationForm = document.getElementById(\"location-form\");\nconst locationInput = document.getElementById(\"location-input\");\n\nlet searchSequence = 0;\n\nif (locationForm && locationInput) {\n  locationForm.addEventListener(\"submit\", async (event) => {\n    event.preventDefault();\n\n    const location = locationInput.value.trim();\n    if (!location) return;\n\n    const currentSearch = ++searchSequence;\n    const loadingPanel = document.getElementById(\"loading-panel\");\n    const loadingText = document.getElementById(\"loading-text\");\n    const statusEl = document.getElementById(\"status-message\");\n    const displayEl = document.getElementById(\"weather-display\");\n\n    if (statusEl) statusEl.textContent = \"\";\n    if (displayEl) displayEl.hidden = true;\n\n    if (loadingText) {\n      loadingText.textContent = `DETONATING REQUEST // ${location.toUpperCase()}...`;\n    }\n    if (loadingPanel) loadingPanel.hidden = false;\n\n    try {\n      const weather = await (0,_weather_data_js__WEBPACK_IMPORTED_MODULE_0__.getFormattedWeather)(location, \"metric\");\n      if (currentSearch !== searchSequence) return;\n\n      await (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.renderWeather)(weather);\n    } catch (error) {\n      if (currentSearch !== searchSequence) return;\n\n      console.error(\"Failed to fetch weather:\", error);\n      if (displayEl) displayEl.hidden = true;\n      if (statusEl) {\n        statusEl.textContent =\n          \"Could not load weather for that location. Try again.\";\n      }\n    } finally {\n      if (currentSearch === searchSequence && loadingPanel) {\n        loadingPanel.hidden = true;\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://weather-app/./src/js/form.js?\n}");

/***/ },

/***/ "./src/js/index.js"
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/js/form.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/js/index.js?\n}");

/***/ },

/***/ "./src/js/script.js"
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatHumidity: () => (/* binding */ formatHumidity),\n/* harmony export */   formatTemp: () => (/* binding */ formatTemp),\n/* harmony export */   formatWind: () => (/* binding */ formatWind),\n/* harmony export */   renderWeather: () => (/* reexport safe */ _display_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/js/form.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\n\n\n\n\nfunction formatTemp(tempC, useFahrenheit = false) {\n  if (typeof tempC !== \"number\" || Number.isNaN(tempC)) return \"--\";\n  const value = useFahrenheit ? (tempC * 9) / 5 + 32 : tempC;\n  const unit = useFahrenheit ? \"°F\" : \"°C\";\n  return `${Math.round(value * 10) / 10}${unit}`;\n}\n\nfunction formatWind(windKph, useFahrenheit = false) {\n  if (typeof windKph !== \"number\" || Number.isNaN(windKph)) return \"--\";\n  if (useFahrenheit) {\n    const mph = Math.round(windKph * 0.621371 * 10) / 10;\n    return `${mph} mph`;\n  }\n  return `${Math.round(windKph * 10) / 10} km/h`;\n}\n\nfunction formatHumidity(humidity) {\n  if (typeof humidity !== \"number\" || Number.isNaN(humidity)) return \"HUMIDITY: --\";\n  return `HUMIDITY: ${Math.round(humidity)}%`;\n}\n\nwindow.addEventListener(\"unhandledrejection\", (event) => {\n  console.error(\"Unhandled async error:\", event.reason);\n});\n\nconst OBSERVER_LINES = [\n  \"If you ever find your heart to be weathering, look for the storm that is always raging on. That is the first step to clear the skies\",\n  \"The rain whispers after the mist... what do you see?\",\n  \"Thunder I felt, but shelter I did not find, blizzard, or hurricane to always detonate\"\n];\n\nfunction initObserverDetonator() {\n  const detonateBtn = document.getElementById(\"observer-detonate-btn\");\n  const whisperEl = document.getElementById(\"observer-whisper\");\n\n  if (!detonateBtn || !whisperEl) return;\n\n  let index = 0;\n\n  detonateBtn.addEventListener(\"click\", () => {\n    if (index < OBSERVER_LINES.length) {\n      whisperEl.textContent = OBSERVER_LINES[index];\n      whisperEl.hidden = false;\n      detonateBtn.setAttribute(\"aria-expanded\", \"true\");\n      index += 1;\n    } else {\n      whisperEl.hidden = true;\n      whisperEl.textContent = \"\";\n      detonateBtn.setAttribute(\"aria-expanded\", \"false\");\n      index = 0;\n    }\n  });\n}\n\nif (document.readyState === \"loading\") {\n  document.addEventListener(\"DOMContentLoaded\", initObserverDetonator);\n} else {\n  initObserverDetonator();\n}\n\n//# sourceURL=webpack://weather-app/./src/js/script.js?\n}");

/***/ },

/***/ "./src/js/weather.data.js"
/*!********************************!*\
  !*** ./src/js/weather.data.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormattedWeather: () => (/* binding */ getFormattedWeather),\n/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)\n/* harmony export */ });\nconst PROXY_URL = \"https://muddy-pine-d3f1.la-brava-codes.workers.dev\";\n\nasync function getWeatherData(location, unitGroup = \"metric\") {\n  const query = encodeURIComponent(location.trim());\n  const url = `${PROXY_URL}?location=${query}&unitGroup=${encodeURIComponent(unitGroup)}`;\n\n  const response = await fetch(url);\n\n  if (!response.ok) {\n    if (response.status === 400 || response.status === 404) {\n      throw new Error(`Location not found: \"${location}\"`);\n    }\n    throw new Error(`Weather API request failed (${response.status})`);\n  }\n\n  const data = await response.json();\n\n  if (!data || (!data.currentConditions && (!Array.isArray(data.days) || data.days.length === 0))) {\n    throw new Error(`Incomplete telemetry returned for \"${location}\"`);\n  }\n\n  return data;\n}\n\nfunction processWeatherData(rawData) {\n  const current = rawData.currentConditions ?? rawData.days?.[0] ?? {};\n  const today = rawData.days?.[0] ?? {};\n\n  return {\n    location: rawData.resolvedAddress ?? \"\",\n    condition: current.conditions ?? today.conditions ?? \"\",\n    icon: current.icon ?? today.icon ?? \"\",\n    temp: current.temp ?? today.temp ?? null,\n    feelsLike: current.feelslike ?? today.feelslike ?? null,\n    humidity: current.humidity ?? today.humidity ?? null,\n    windSpeed: current.windspeed ?? today.windspeed ?? null,\n    high: today.tempmax ?? null,\n    low: today.tempmin ?? null,\n    forecast: (rawData.days ?? []).slice(0, 5).map((day) => ({\n      date: day.datetime,\n      tempMax: day.tempmax,\n      tempMin: day.tempmin,\n      conditions: day.conditions,\n      icon: day.icon,\n    })),\n  };\n}\n\nasync function getFormattedWeather(location, unitGroup = \"metric\") {\n  const rawData = await getWeatherData(location, unitGroup);\n  const formattedData = processWeatherData(rawData);\n  console.log(\"Processed weather object:\", formattedData);\n  return formattedData;\n}\n\n//# sourceURL=webpack://weather-app/./src/js/weather.data.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperties(exports, { [Symbol.toStringTag]: { value: 'Module' }, __esModule: { value: true } });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;