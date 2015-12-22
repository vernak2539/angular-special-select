(function() {
    'use strict';

    describe('Top level directive (specialSelect)', function() {
        var $compile;
        var scope;
        var sampleTemplate;

        beforeEach(module('special-inputs'));

        beforeEach(inject(function($injector) {
            $compile = $injector.get('$compile');
            scope    = $injector.get('$rootScope');
            sampleTemplate = '<special-select></special-select>';
        }));

        it('should add the class "special-select" to itself', function() {
            // Arrange
            var element = $compile(sampleTemplate)(scope);

            // Act
            scope.$digest();

            // Assert
            expect(element.hasClass('special-select')).toBe(true);
        });

        it('should add "show" class on mouseover event', function() {
            var element = $compile(sampleTemplate)(scope);

            // Act
            scope.$digest();
            element.triggerHandler('mouseover');

            // Assert
            expect(element.hasClass('show')).toBe(true);
        });

        it('should remove "show" class on mouseleave event', function() {
            // Arrange
            var element = $compile(sampleTemplate)(scope);

            // Act
            scope.$digest();
            element.triggerHandler('mouseover');
            element.triggerHandler('mouseleave');

            // Assert
            expect(element.hasClass('show')).toBe(false);
        });

        describe('data initialization', function() {
            it('should have selected item on scope', function() {
                // Arrange
                var item     = 'myTestItem';
                var template = '<special-select data-selected-item="selectedItem"></special-select>'
                scope.selectedItem = item;
                var element = $compile(template)(scope);

                // Act
                scope.$digest();

                // Assert
                expect(element.isolateScope().selectedItem).toBe(item);
            });

            it('should allow for an array of items on scope', function() {
                // Arrange
                var items     = ['item1', 'item2'];
                var template = '<special-select data-items="items"></special-select>'
                scope.items = items;
                var element = $compile(template)(scope);

                // Act
                scope.$digest();

                // Assert
                expect(element.isolateScope().items).toBe(items);
            });

            it('should set empty array of items if variable is invalid', function() {
                // Arrange
                var template = '<special-select data-items="items"></special-select>'
                scope.items = null;
                var element = $compile(template)(scope);

                // Act
                scope.$digest();

                // Assert
                expect(angular.isArray(element.isolateScope().items)).toBe(true);
            });

            it('should allow for function to be passed for change events', function() {
                // Arrange
                var element;
                var returnVal = 'test';
                var template = '<special-select data-change-selected-item="fn()"></special-select>'
                scope.fn = function() { return returnVal; };
                element = $compile(template)(scope);

                // Act
                scope.$digest();

                // Assert
                expect(element.isolateScope().changeSelectedItem()).toBe(returnVal);
            });
        });
    });
})();
