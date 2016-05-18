(function() {
    'use strict';

    describe('module registration', function() {
        it('should register correctly', function() {
            var error = null;

            try {
                angular.module('special-select');
            } catch(err) {
                error = err;
            }

            expect(error).toBeNull();
        });
    });
})();
