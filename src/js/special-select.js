(function(angular) {
    'use strict';

    angular
        .module('special-inputs', [])
        .directive('specialSelect', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        items: '=',
                        selectedItem: '=',
                        changeSelectedItem: '&'
                    },
                    transclude: {
                        'selected-item': 'speicalSelectSelectedItem',
                        'list-item': 'specialSelectListItem'
                    },
                    templateUrl: function(element, attrs) {
                        return attrs.templateUrl || './src/templates/special-select.tpl.html';
                    },
                    link: function(scope, element, attrs) {
                        attrs.$observe('item', function(item) {
                            scope.item = item;
                        });

                        attrs.$observe('selectedItem', function(item) {
                            scope.selectedItem = item;
                        });

                        element.addClass('special-select');

                        element.on('mouseover', function() {
                            element.addClass('show');
                        });

                        element.on('mouseleave', function() {
                            element.removeClass('show');
                        });
                    }
                }
            }
        ])
        .directive('speicalSelectSelectedItem', [
            function() {
                return {
                    restrict: 'E',
                    require: '^specialSelect',
                    transclude: true,
                    scope: true
                }
            }
        ])
        .directive('specialSelectListItem', [
            function() {
                return {
                    restrict: 'E',
                    require: '^specialSelect',
                    transclude: true,
                    scope: true
                }
            }
        ])
})(angular);
