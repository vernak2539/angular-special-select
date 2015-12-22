(function(angular) {
    'use strict';

    angular
        .module('special-inputs', [])
        .directive('specialSelect', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
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
                    controller: [
                        '$scope',
                        function($scope) {
                            var test;
                        }
                    ],
                    link: function(scope, element, attrs) {
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
                    replace: true,
                    transclude: true,
                    templateUrl: './src/templates/selected-item.tpl.html',
                    scope: {
                        selectedItem: '='
                    },
                    controller: [
                        '$scope',
                        function($scope) {
                            console.log('CONTROLLER: ', $scope.selectedItem, $scope.$parent.selectedItem);
                        }
                    ],
                    link: function(scope, el, attrs, ctrl, transclude) {
                        // scope.selectedItem = scope.$parent.selectedItem;
                        console.log('LINK: ',scope.selectedItem, scope.$parent.selectedItem);
                    }
                }
            }
        ])
        .directive('specialSelectListItem', [
            function() {
                return {
                    restrict: 'E',
                    require: '^specialSelect',
                    replace: true,
                    transclude: true,
                    scope: {
                        items: '='
                    }
                }
            }
        ])
})(angular);
