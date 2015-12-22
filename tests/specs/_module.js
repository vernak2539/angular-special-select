(function() {
    'use strict';

    describe('Module registration', function() {
        it('should register correctly', function() {
            var error = null;

            try {
                angular.module('special-inputs');
            } catch(err) {
                error = err;
            }

            expect(error).toBeNull();
        });
    });
})();
