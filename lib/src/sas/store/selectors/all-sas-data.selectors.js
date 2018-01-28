import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromAllSasDataReducer from '../reducers/all-sas-data.reducer';
export var getSasModuleState = createSelector(fromFeature.getSasState, function (state) {
    return state.allSasData;
});
export var getConfig = createSelector(getSasModuleState, fromAllSasDataReducer.getSasConfig);
//# sourceMappingURL=all-sas-data.selectors.js.map