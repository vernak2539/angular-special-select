(function() {
    'use strict';

    describe('special select controller', function() {
        var $controller;
        var scope;

        beforeEach(function() {
            module('special-select');
        });

        beforeEach(inject(function($injector) {
            $controller = $injector.get('$controller');
            scope       = $injector.get('$rootScope').$new();
        }));

        function createController(additionalScope, bindings) {
            bindings = bindings || {};
            Object.assign(scope, additionalScope);

            $controller('specialSelectCtrl as ssCtrl', {
                $scope: scope
            }, bindings);
        }

        describe('intializing variables from scope', function() {
            it('should set items if they are an array', function() {
                // Arrange
                var sampleItems = [{data: true}, {maybe :false}];
                var testScope = { items: sampleItems };

                // Act
                createController(testScope);

                // Assert
                expect(scope.ssCtrl.items).toEqual(sampleItems);
            });

            it('should set empty array if no items passed', function() {
                // Arrange
                var testScope = { items: null };

                // Act
                createController(testScope);

                // Assert
                expect(scope.ssCtrl.items).toEqual([]);
            });

            it('should fire selectMe event if selected item is on scope', function() {
                // Arrange
                var selectedItem = {data: true};
                var testScope = { selectedItem: selectedItem };

                // Act
                createController(testScope);

                // Assert
                expect(scope.ssCtrl._internalSelected).toBeDefined();
            });

            it('should not fire selectMe if no selected item on scope', function() {
                // Act
                createController();

                // Assert
                expect(scope.ssCtrl._internalSelected).toBeUndefined();
            });
        });

        describe('selecting new from user interaction', function() {
            it('should set the _$scope.selectedItem (what user will key off of)', function() {
                // Arrange
                var newItem = { test: true, data: false };

                // Act
                createController();
                scope.ssCtrl.selectMe(newItem);

                // Assert
                expect(scope.ssCtrl._$scope.selectedItem).toBe(newItem);
            });

            it('should set the _internalSelected (internal watching)', function() {
                // Arrange
                var newItem = { test: true, data: false };

                // Act
                createController();
                scope.ssCtrl.selectMe(newItem);

                // Assert
                expect(scope.ssCtrl._internalSelected).toEqual({ item: newItem });
            });

            it('should fire user defined event from scope on select change', function() {
                // Arrange
                var changeFn = jasmine.createSpy('changeFnSpy');

                // Act
                createController({ onSelectedChange: changeFn });
                scope.ssCtrl._internalSelected = {test: true};
                scope.ssCtrl.selectMe();

                // Assert
                expect(changeFn.calls.count()).toBe(1);
            });

            it('should not fire user defined event from scope on select change if it is initializing', function() {
                // Arrange
                var changeFn = jasmine.createSpy('changeFnSpy');

                // Act
                createController({ onSelectedChange: changeFn });
                scope.ssCtrl.selectMe();

                // Assert
                expect(changeFn.calls.count()).toBe(0);
            });
        });
    });
})();
