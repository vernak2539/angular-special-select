'use strict';

const MODULE_NAME = 'special-select';

import SpecialSelectCtrl from './js/controller';
import SpecialSelectTopDirective from './js/special-select';
import SpecialSelectSelectedItem from './js/selected-item';
import SpecialSelectDropdownItems from './js/dropdown-items';
import InjectScopeTranscludeDirective from './js/inject-scope-helper';

angular
    .module(MODULE_NAME, [])
    .controller(SpecialSelectCtrl.name, SpecialSelectCtrl.main)
    .directive(InjectScopeTranscludeDirective.name, InjectScopeTranscludeDirective.main)
    .directive(SpecialSelectTopDirective.name, SpecialSelectTopDirective.main)
    .directive(SpecialSelectSelectedItem.name, SpecialSelectSelectedItem.main)
    .directive(SpecialSelectDropdownItems.name, SpecialSelectDropdownItems.main);

module.exports = MODULE_NAME;
