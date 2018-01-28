import * as tslib_1 from "tslib";
import * as fromShownDataActions from '../actions/shown-data.actions';
export var initialState = {
    shownSas: {},
    choosenSas: {},
    shownKt: {},
    choosenKt: {},
    shownDevices: {},
    chosenDevice: {}
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromShownDataActions.SAS_LIST_IMPORTED: {
            return tslib_1.__assign({}, state, { shownSas: action.payload });
        }
        case fromShownDataActions.SAS_CHOSEN: {
            return tslib_1.__assign({}, state, { choosenSas: action.payload });
        }
    }
    return state;
}
export var getShownSas = function (state) { return Object.keys(state.shownSas).map(function (id) { return state.shownSas[parseInt(id, 10)]; }); };
export var getChoosenSas = function (state) { return state.choosenSas; };
export var getShownKt = function (state) { return state.shownKt; };
export var getChoosenKt = function (state) { return state.choosenKt; };
export var getShownDevices = function (state) { return state.shownDevices; };
export var getChosenDevice = function (state) { return state.chosenDevice; };
//# sourceMappingURL=shown-data.reducer.js.map