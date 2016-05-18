/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(2);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _specialSelect = __webpack_require__(1);
	
	var _specialSelect2 = _interopRequireDefault(_specialSelect);
	
	var _selectedItem = __webpack_require__(4);
	
	var _selectedItem2 = _interopRequireDefault(_selectedItem);
	
	var _dropdownItems = __webpack_require__(3);
	
	var _dropdownItems2 = _interopRequireDefault(_dropdownItems);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'special-select';
	
	angular.module(MODULE_NAME, []).controller(_controller2.default.name, _controller2.default.main).directive(_specialSelect2.default.name, _specialSelect2.default.main).directive(_selectedItem2.default.name, _selectedItem2.default.main).directive(_dropdownItems2.default.name, _dropdownItems2.default.main);
	
	module.exports = MODULE_NAME;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _controller = __webpack_require__(2);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SPECIAL_SELECT_TOP_DIRECTIVE_NAME = 'specialSelect';
	
	var SpecialSelectDirective = function SpecialSelectDirective() {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template: '<div class="special-select-container" ng-transclude></div>',
	        controller: _controller2.default.name,
	        scope: {
	            selectedItem: '=',
	            items: '=?',
	            onSelectedChange: '&?'
	        },
	        link: function link(scope, element) {
	            element.addClass('special-select');
	
	            element.on('mouseover', function () {
	                element.addClass('show');
	            });
	
	            element.on('mouseleave', function () {
	                element.removeClass('show');
	            });
	
	            scope.$watch('selectedItem', function () {
	                return element.removeClass('show');
	            });
	        }
	    };
	};
	
	exports.default = {
	    name: SPECIAL_SELECT_TOP_DIRECTIVE_NAME,
	    main: SpecialSelectDirective
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SPECIAL_SELECT_CTRL_NAME = 'specialSelectCtrl';
	
	var SpecialSelectController = function () {
	    function SpecialSelectController($scope) {
	        _classCallCheck(this, SpecialSelectController);
	
	        this._$scope = $scope;
	        this.items = angular.isArray(this._$scope.items) ? this._$scope.items : [];
	
	        if (this._$scope.selectedItem) {
	            this.selectMe(this._$scope.selectedItem);
	        }
	    }
	
	    _createClass(SpecialSelectController, [{
	        key: 'selectMe',
	        value: function selectMe(newItem) {
	            var notInitialization = !!this._internalSelected;
	
	            this._$scope.selectedItem = newItem;
	            this._internalSelected = { item: newItem };
	
	            if (notInitialization) {
	                this._$scope.$eval(this._$scope.onSelectedChange);
	            }
	        }
	    }]);
	
	    return SpecialSelectController;
	}();
	
	exports.default = {
	    name: SPECIAL_SELECT_CTRL_NAME,
	    main: ['$scope', SpecialSelectController]
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _specialSelect = __webpack_require__(1);
	
	var _specialSelect2 = _interopRequireDefault(_specialSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DROPDOWN_ITEMS_DIRECTIVE_NAME = 'specialSelectItem';
	
	var SpecialSelectDropdownItems = function SpecialSelectDropdownItems() {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        require: '^' + _specialSelect2.default.name,
	        scope: false,
	        template: function template() {
	            return '<ul class="selected-item-list">' + '<li ng-repeat="item in items" ng-click="selectItem(item)" ng-class="{ \'selected-item-in-dropdown\': item.id === selectedItem.id }">' + '<div ng-transclude></div>' + '</li>' + '</ul>';
	        },
	        link: function link(scope, element, attrs, mainCtrl) {
	            scope.items = mainCtrl.items;
	
	            scope.selectItem = function (item) {
	                mainCtrl.selectMe(item);
	            };
	        }
	    };
	};
	
	exports.default = {
	    name: DROPDOWN_ITEMS_DIRECTIVE_NAME,
	    main: SpecialSelectDropdownItems
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _specialSelect = __webpack_require__(1);
	
	var _specialSelect2 = _interopRequireDefault(_specialSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SELECTED_ITEM_DIRECTIVE_NAME = 'specialSelectSelectedItem';
	
	var SelectedItemDirective = function SelectedItemDirective() {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template: '<div class="selected-item" ng-transclude></div>',
	        scope: false,
	        require: '^' + _specialSelect2.default.name,
	        link: function link(scope, element, attrs, mainCtrl) {
	            var toWatch = function toWatch() {
	                return mainCtrl._internalSelected;
	            };
	            var onChange = function onChange(newItem) {
	                if (!newItem) {
	                    return;
	                }
	                scope.item = newItem.item;
	            };
	
	            scope.$watch(toWatch, onChange);
	        }
	    };
	};
	
	exports.default = {
	    name: SELECTED_ITEM_DIRECTIVE_NAME,
	    main: SelectedItemDirective
	};

/***/ }
/******/ ]);
//# sourceMappingURL=special-select.js.map