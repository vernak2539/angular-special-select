'use strict';

const SPECIAL_SELECT_CTRL_NAME = 'specialSelectCtrl';

class SpecialSelectController {
    constructor($scope) {
        this._$scope = $scope;
        this.items   = angular.isArray(this._$scope.items) ? this._$scope.items : [];

        if(this._$scope.selectedItem) {
            this.selectMe(this._$scope.selectedItem);
        }
    }
    selectMe(newItem) {
        let notInitialization = !!this._internalSelected;

        this._$scope.selectedItem = newItem;
        this._internalSelected    = { item: newItem };

        if(notInitialization) {
            this._$scope.$eval(this._$scope.onSelectedChange);
        }
    }
}

export default {
    name: SPECIAL_SELECT_CTRL_NAME,
    main: [
        '$scope',
        SpecialSelectController
    ]
};
