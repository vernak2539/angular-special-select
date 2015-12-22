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
        var element = $compile(sampleTemplate)(scope);

        scope.$digest();

        expect(element.hasClass('special-select')).toBe(true);
    });

    it('should add "show" class on mouseover event', function() {
        var element = $compile(sampleTemplate)(scope);

        scope.$digest();
        element.triggerHandler('mouseover');

        expect(element.hasClass('show')).toBe(true);
    });

    it('should remove "show" class on mouseleave event', function() {
        var element = $compile(sampleTemplate)(scope);
        scope.$digest();

        element.triggerHandler('mouseover');
        element.triggerHandler('mouseleave');
        expect(element.hasClass('show')).toBe(false);
    });

    describe('data initialization', function() {
        it('should have selected item on scope', function() {
            var item = 'myTestItem';
            var template = '<special-select data-selected-item="'+ item +'"></special-select>'

            $compile(template)(scope);
            scope.$digest();

            expect(scope.selectedItem).toBe(item);
        });
    });
});
