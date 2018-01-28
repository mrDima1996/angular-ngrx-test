import * as tslib_1 from "tslib";
import * as fromConfigAction from '../actions/all-sas-data.actions';
import * as PartState from '../../../app/models/part-state.model';
export var initialState = {
    config: {
        sas_list: {},
        group_list: {},
        kt_list: {},
        device_list: {},
        hierarchy: {}
    },
    state: new PartState.Loading()
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromConfigAction.LOAD_CONFIG: {
            return tslib_1.__assign({}, state, { state: new PartState.Loading() });
        }
        case fromConfigAction.LOAD_CONFIG_SUCCESS: {
            // const sas_count =  Object.keys(action.payload.sas_list).length;
            // let newChoosenSas = {};
            // if (sas_count > 0) {
            // 	if (!!action.payload.sas_list[Object.keys(action.payload.sas_list)[0]]) {
            // 		newChoosenSas = action.payload.sas_list[Object.keys(action.payload.sas_list)[0]];
            // 	} 
            // }
            return tslib_1.__assign({}, state, { config: action.payload, state: new PartState.Loaded() });
        }
        case fromConfigAction.LOAD_CONFIG_FAIL: {
            return tslib_1.__assign({}, state, { config: {}, state: new PartState.Error() });
        }
    }
    return state;
}
export var getSasConfig = function (state) { return state.config; };
export var getSasState = function (state) { return state.state; };
//# sourceMappingURL=all-sas-data.reducer.js.map