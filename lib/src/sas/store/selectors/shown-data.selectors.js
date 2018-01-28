import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromShownDataReducer from '../reducers/shown-data.reducer';
export var getShownDataState = createSelector(fromFeature.getSasState, function (state) {
    return state.shownData;
});
export var getShownSasList = createSelector(getShownDataState, fromShownDataReducer.getShownSas);
export var getChoosenSas = createSelector(getShownDataState, fromShownDataReducer.getChoosenSas);
export var getShownKtList = createSelector(getShownDataState, fromShownDataReducer.getShownKt);
export var getChoosenKt = createSelector(getShownDataState, fromShownDataReducer.getChoosenKt);
export var getShownDeviceList = createSelector(getShownDataState, fromShownDataReducer.getShownDevices);
export var getChoosenDevice = createSelector(getShownDataState, fromShownDataReducer.getChosenDevice);
//# sourceMappingURL=shown-data.selectors.js.map