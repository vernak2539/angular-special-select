'use strict';

import SpecialSelectCtrl from './controller';

const SPECIAL_SELECT_TOP_DIRECTIVE_NAME = 'specialSelect';

const SpecialSelectDirective = () => ({
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="special-select-container" ng-transclude></div>',
    controller: SpecialSelectCtrl.name,
    scope: {
        selectedItem: '=',
        items: '=?',
        onSelectedChange: '&?'
    },
    link(scope, element) {
        element.addClass('special-select');

        element.on('mouseover', () => {
            element.addClass('show');
        });

        element.on('mouseleave', () => {
            element.removeClass('show');
        });

        scope.$watch('selectedItem', () => element.removeClass('show'));
    }
});

export default {
    name: SPECIAL_SELECT_TOP_DIRECTIVE_NAME,
    main: SpecialSelectDirective
};
