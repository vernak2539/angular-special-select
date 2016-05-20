'use strict';

import SpecialSelectTopDirective from './special-select';

const DROPDOWN_ITEMS_DIRECTIVE_NAME = 'specialSelectItem';

const SpecialSelectDropdownItems = () => ({
    restrict: 'E',
    replace: true,
    transclude: true,
    require: '^' + SpecialSelectTopDirective.name,
    scope: {},
    template() {
        return (
            '<ul class="selected-item-list">' +
                '<li ng-repeat="item in items" ng-click="selectItem(item)" ng-class="{ \'selected-item-in-dropdown\': item.id === selectedItem.id }">' +
                    '<div ng-transclude></div>' +
                '</li>' +
            '</ul>'
        );
    },
    link(scope, element, attrs, mainCtrl) {
        scope.items = mainCtrl.items;

        scope.selectItem = (item) => {
          mainCtrl.selectMe(item);
        };
    }
});

export default {
    name: DROPDOWN_ITEMS_DIRECTIVE_NAME,
    main: SpecialSelectDropdownItems
};
