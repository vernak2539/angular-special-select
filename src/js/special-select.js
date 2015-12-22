(function(angular) {
    'use strict';

    angular
        .module('special-inputs', [])
        .directive('specialSelect', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    template: '<div class="container" ng-transclude></div>',
                    scope: {
                        selectedItem: '=',
                        items: '=?',
                        changeSelectedItem: '&?'
                    },
                    link: function(scope, element) {
                        if(!angular.isArray(scope.items)) {
                            scope.items = [];
                        }

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
        .directive('specialSelectSelectedItem', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    template: '<div class="selected" ng-transclude></div>',
                    scope: {
                        selectedItem: '='
                    },
                    link: function() {
                        var test;
                    }
                }
            }
        ])

    // angular
    //     .module('special-inputs', [])
    //     .directive('specialSelect', [
    //         function() {
    //             return {
    //                 restrict: 'E',
    //                 replace: true,
    //                 scope: {
    //                     items: '=',
    //                     selectedItem: '=',
    //                     changeSelectedItem: '&'
    //                 },
    //                 transclude: {
    //                     'selectedItemSlot': 'speicalSelectSelectedItem',
    //                     'listItemSlot': 'specialSelectListItem'
    //                 },
    //                 templateUrl: function(element, attrs) {
    //                     return attrs.templateUrl || './src/templates/special-select.tpl.html';
    //                 },
    //                 controller: [
    //                     '$scope',
    //                     function($scope) {
    //                         var test;
    //                     }
    //                 ],
    //                 link: function(scope, element, attrs) {
    //                     element.addClass('special-select');
    //
    //                     element.on('mouseover', function() {
    //                         element.addClass('show');
    //                     });
    //
    //                     element.on('mouseleave', function() {
    //                         element.removeClass('show');
    //                     });
    //                 }
    //             }
    //         }
    //     ])
    //     .directive('speicalSelectSelectedItem', [
    //         function() {
    //             return {
    //                 restrict: 'E',
    //                 require: '^specialSelect',
    //                 replace: true,
    //                 transclude: true,
    //                 template: '<div ng-transclude></div>',
    //                 scope: true,
    //                 link: function(scope, el, attrs, ctrl, transclude) {
    //                     console.log('LINK: ', scope.selectedItem, scope.$parent.selectedItem);
    //
    //                     attrs.$observe('selectedItem', function(item) {
    //                         scope.selectedItem = item;
    //                     });
    //                 }
    //             }
    //         }
    //     ])
    //     .directive('specialSelectListItem', [
    //         function() {
    //             return {
    //                 restrict: 'E',
    //                 require: '^specialSelect',
    //                 replace: true,
    //                 transclude: true,
    //                 scope: {
    //                     items: '='
    //                 }
    //             }
    //         }
    //     ])
})(angular);
