(function(angular) {
    'use strict';

// https://jsbin.com/qumayupomu/edit?js,output
    angular
        .module('special-inputs', [])
        .controller('special-inputs.specialSelectCtrl', [
          '$scope',
          function($scope) {
            this.selectedItem = { item: $scope.selectedItem };
            this.items = angular.isArray($scope.items) ? $scope.items : [];

            this.selectMe = function(newItem) {
              $scope.selectedItem = newItem;
              this.selectedItem = { item: newItem };
              // $scope.$eval($scope.changeSelectedItem, { item: newItem });
            }.bind(this);
          }
        ])
        .directive('specialSelect', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    template: '<div class="container" ng-transclude></div>',
                    controller: 'special-inputs.specialSelectCtrl',
                    scope: {
                        selectedItem: '=',
                        items: '=?',
                        changeSelectedItem: '&?'
                    },
                    link: function(scope, element) {
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
                    scope: false,
                    require: '^specialSelect',
                    link: function(scope, element, attrs, mainCtrl) {
                        scope.$watch(function() {
                            return mainCtrl.selectedItem;
                        }, function(newItem) {
                          scope.item = newItem.item;
                        });
                    }
                }
            }
        ])
        .directive('specialSelectItem', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    require: '^specialSelect',
                    scope: false,
                    template: function() {
                      return '<ul class="rest">' +
                          '<li ng-repeat="item in items" ng-click="selectItem(item)" ng-class="{ \'selected-item\': item.id === selectedItem.id }">' +
                              '<div ng-transclude></div>' +
                          '</li>' +
                      '</ul>'
                    },
                    link: function(scope, element, attrs, mainCtrl) {
                      scope.items = mainCtrl.items;
                      scope.selectedItem = mainCtrl.selectedItem;

                      scope.selectItem = function(item) {
                        mainCtrl.selectMe(item);
                      };
                    }
                }
            }
        ])
})(angular);
