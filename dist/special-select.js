/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _controller = __webpack_require__(2);\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nvar _specialSelect = __webpack_require__(1);\n\nvar _specialSelect2 = _interopRequireDefault(_specialSelect);\n\nvar _selectedItem = __webpack_require__(5);\n\nvar _selectedItem2 = _interopRequireDefault(_selectedItem);\n\nvar _dropdownItems = __webpack_require__(3);\n\nvar _dropdownItems2 = _interopRequireDefault(_dropdownItems);\n\nvar _injectScopeHelper = __webpack_require__(4);\n\nvar _injectScopeHelper2 = _interopRequireDefault(_injectScopeHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MODULE_NAME = 'special-select';\n\nangular.module(MODULE_NAME, []).controller(_controller2.default.name, _controller2.default.main).directive(_injectScopeHelper2.default.name, _injectScopeHelper2.default.main).directive(_specialSelect2.default.name, _specialSelect2.default.main).directive(_selectedItem2.default.name, _selectedItem2.default.main).directive(_dropdownItems2.default.name, _dropdownItems2.default.main);\n\nmodule.exports = MODULE_NAME;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/_module.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/_module.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _controller = __webpack_require__(2);\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SPECIAL_SELECT_TOP_DIRECTIVE_NAME = 'specialSelect';\n\nvar SpecialSelectDirective = function SpecialSelectDirective() {\n    return {\n        restrict: 'E',\n        replace: true,\n        transclude: true,\n        template: '<div class=\"special-select-container\" ng-transclude></div>',\n        controller: _controller2.default.name,\n        scope: {\n            selectedItem: '=',\n            items: '=?',\n            onSelectedChange: '&?'\n        },\n        link: function link(scope, element) {\n            element.addClass('special-select');\n\n            element.on('mouseover', function () {\n                element.addClass('show');\n            });\n\n            element.on('mouseleave', function () {\n                element.removeClass('show');\n            });\n\n            scope.$watch('selectedItem', function () {\n                return element.removeClass('show');\n            });\n        }\n    };\n};\n\nexports.default = {\n    name: SPECIAL_SELECT_TOP_DIRECTIVE_NAME,\n    main: SpecialSelectDirective\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/special-select.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/special-select.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SPECIAL_SELECT_CTRL_NAME = 'specialSelectCtrl';\n\nvar SpecialSelectController = function () {\n    function SpecialSelectController($scope) {\n        _classCallCheck(this, SpecialSelectController);\n\n        this._$scope = $scope;\n        this.items = angular.isArray(this._$scope.items) ? this._$scope.items : [];\n\n        if (this._$scope.selectedItem) {\n            this.selectMe(this._$scope.selectedItem);\n        }\n    }\n\n    _createClass(SpecialSelectController, [{\n        key: 'selectMe',\n        value: function selectMe(newItem) {\n            var notInitialization = !!this._internalSelected;\n\n            this._$scope.selectedItem = newItem;\n            this._internalSelected = { item: newItem };\n\n            if (notInitialization) {\n                this._$scope.$eval(this._$scope.onSelectedChange);\n            }\n        }\n    }]);\n\n    return SpecialSelectController;\n}();\n\nexports.default = {\n    name: SPECIAL_SELECT_CTRL_NAME,\n    main: ['$scope', SpecialSelectController]\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/controller.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/controller.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _specialSelect = __webpack_require__(1);\n\nvar _specialSelect2 = _interopRequireDefault(_specialSelect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DROPDOWN_ITEMS_DIRECTIVE_NAME = 'specialSelectItem';\n\nvar SpecialSelectDropdownItems = function SpecialSelectDropdownItems() {\n    return {\n        restrict: 'E',\n        replace: true,\n        transclude: true,\n        require: '^' + _specialSelect2.default.name,\n        scope: {},\n        template: function template() {\n            return '<ul class=\"selected-item-list\">' + '<li ng-repeat=\"item in items\" ng-click=\"selectItem(item)\" ng-class=\"{ \\'selected-item-in-dropdown\\': item.id === selectedItem.id }\">' + '<div ng-transclude></div>' + '</li>' + '</ul>';\n        },\n        link: function link(scope, element, attrs, mainCtrl) {\n            scope.items = mainCtrl.items;\n\n            scope.selectItem = function (item) {\n                mainCtrl.selectMe(item);\n            };\n        }\n    };\n};\n\nexports.default = {\n    name: DROPDOWN_ITEMS_DIRECTIVE_NAME,\n    main: SpecialSelectDropdownItems\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/dropdown-items.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/dropdown-items.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar INJECT_TRANSCLUDE_SCOPE_HELPER_NAME = 'inject-scope-transclude';\n\nvar InjectScopeTranscludeDirective = function InjectScopeTranscludeDirective() {\n    return {\n        link: function link($scope, $element, $attrs, controller, $transclude) {\n            if (!$transclude) {\n                throw minErr('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag($element));\n            }\n            var innerScope = $scope.$new();\n            $transclude(innerScope, function (clone) {\n                $element.empty();\n                $element.append(clone);\n                $element.on('$destroy', function () {\n                    innerScope.$destroy();\n                });\n            });\n        }\n    };\n};\n\nexports.default = {\n    name: INJECT_TRANSCLUDE_SCOPE_HELPER_NAME,\n    main: InjectScopeTranscludeDirective\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/inject-scope-helper.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/inject-scope-helper.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _specialSelect = __webpack_require__(1);\n\nvar _specialSelect2 = _interopRequireDefault(_specialSelect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SELECTED_ITEM_DIRECTIVE_NAME = 'specialSelectSelectedItem';\n\nvar SelectedItemDirective = function SelectedItemDirective() {\n    return {\n        restrict: 'E',\n        replace: true,\n        transclude: true,\n        template: '<div class=\"selected-item\" ng-transclude></div>',\n        scope: {},\n        require: '^' + _specialSelect2.default.name,\n        link: function link(scope, element, attrs, mainCtrl, transclude) {\n            transclude(scope, function (clone, scope) {\n                var toWatch = function toWatch() {\n                    return mainCtrl._internalSelected;\n                };\n                var onChange = function onChange(newItem) {\n                    if (!newItem) {\n                        return;\n                    }\n                    scope.item = newItem.item;\n                };\n\n                element.empty();\n                element.append(clone);\n\n                scope.$watch(toWatch, onChange);\n            });\n        }\n    };\n};\n\nexports.default = {\n    name: SELECTED_ITEM_DIRECTIVE_NAME,\n    main: SelectedItemDirective\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/selected-item.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/selected-item.js?");

/***/ }
/******/ ]);