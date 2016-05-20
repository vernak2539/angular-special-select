'use strict';

import SpecialSelectTopDirective from './special-select';

const SELECTED_ITEM_DIRECTIVE_NAME = 'specialSelectSelectedItem';

const SelectedItemDirective = () => ({
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="selected-item" ng-transclude></div>',
    scope: {},
    require: '^' + SpecialSelectTopDirective.name,
    link(scope, element, attrs, mainCtrl, transclude) {
        transclude(scope, (clone, scope) => {
            var toWatch = function() {
                return mainCtrl._internalSelected;
            };
            var onChange = function(newItem) {
                if(!newItem) {
                    return;
                }
                scope.item = newItem.item;
            };

            element.empty();
            element.append(clone);

            scope.$watch(toWatch, onChange);
        });
    }
});

export default {
    name: SELECTED_ITEM_DIRECTIVE_NAME,
    main: SelectedItemDirective
};
