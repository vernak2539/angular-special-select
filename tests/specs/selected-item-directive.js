(function() {
    'use strict';

    describe('Selected item directive', function() {
        var $compile;
        var scope;
        var sampleTemplate;

        beforeEach(module('special-inputs'));

        beforeEach(inject(function($injector) {
            $compile = $injector.get('$compile');
            scope    = $injector.get('$rootScope');
        }));

        it('should get the selected item from the parent', function() {
            var template = '<special-select-selected-item></special-select-selected-item>';
            var testValue = 'test';
            scope.selectedItem = testValue;

            var element = $compile(template)(scope);
            expect(element.scope().item).toBe(testValue);
        });
    });
})();
