(function(angular) {
    'use strict';

    angular
        .module('special-inputs', [])
        .directive('specialSelect', [
            function() {
                return {
                    restrict: 'A',
                    replace: true,
                    transclude: true,
                    template: '<div class="container" ng-transclude></div>',
                    scope: {
                        selectedItem: '=',
                        items: '=?',
                        // changeSelectedItem: '&?'
                    },
                    // link: function(scope, element) {
                    //     if(!angular.isArray(scope.items)) {
                    //         scope.items = [];
                    //     }
                    //
                    //     element.addClass('special-select');
                    //
                    //     element.on('mouseover', function() {
                    //         element.addClass('show');
                    //     });
                    //
                    //     element.on('mouseleave', function() {
                    //         element.removeClass('show');
                    //     });
                    // }
                    controller: ['$scope', function ($scope) {
                        this.selected = $scope.selectedItem;
                    }],
                    // compile: function() {
                    //     return {
                    //         // pre: function(scope) {
                    //         //     console.log('child compile pre - ', scope.selectedItem);
                    //         // },
                    //         post: function(scope) {
                    //             console.log('child compile post - ', scope.selectedItem);
                    //         }
                    //     }
                    // }
                }
            }
        ])
        .directive('specialSelectSelectedItem', [
            function() {
                return {
                    restrict: 'A',
                    replace: true,
                    transclude: true,
                    template: '<div class="selected" ng-transclude></div>',
                    require: '^specialSelect',
                    link: function (scope, element, attrs, mainCtrl) {

                        scope.item = mainCtrl.selected;
                    },
                    // compile: function() {
                    //     return {
                    //         pre: function(scope) {
                    //             console.log('child compile pre - ', scope.selectedItem);
                    //         },
                    //         post: function(scope) {
                    //             console.log('child compile post - ', scope.selectedItem);
                    //         }
                    //     }
                    // }
                    // controller: [
                    //     '$scope',
                    //     function($scope) {
                    //         console.log($scope.selectedItem);
                    //     }
                    // ]
                }
            }
        ])
        // .directive('special-select-item', [
        //     function() {
        //         return {
        //             restrict: 'E',
        //             replace: true,
        //             transclude: true,
        //             require: '^specialSelect',
        //             template: '<ul class="rest">' +
        //                 '<li ng-repeat="item in items" ng-click="selectItem(item)" ng-class="{ \'selected-item\': item.id === selectedItem.id }">' +
        //                     '<div ng-transclude></div>' +
        //                 '</li>' +
        //             '</ul>'
        //         }
        //     }
        // ])

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
