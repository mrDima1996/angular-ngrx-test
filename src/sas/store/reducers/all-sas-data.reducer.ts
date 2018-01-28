import * as fromConfigAction from '../actions/all-sas-data.actions';
import { Config } from '../../models/config.model';
import { Sas } from '../../models/sas.model';

import * as PartState  from '../../../app/models/part-state.model';


export interface AllSasDataState {
	config: Config,
	state: PartState.PartStateType
}

export const initialState: AllSasDataState = {
	config: {
		sas_list: {},
		group_list: {},

		
		kt_list: {},
		device_list: {},
		hierarchy: [{}]
	},
	state: new PartState.Loading()
}

export function reducer(
	state = initialState,
	action: fromConfigAction.ConfigActions
): AllSasDataState {
	switch(action.type) {
		case fromConfigAction.LOAD_CONFIG: {
			return {
				...state,
				state: new PartState.Loading()
			}
		}
		case fromConfigAction.LOAD_CONFIG_SUCCESS: {
			// const sas_count =  Object.keys(action.payload.sas_list).length;
			// let newChoosenSas = {};
			// if (sas_count > 0) {
			// 	if (!!action.payload.sas_list[Object.keys(action.payload.sas_list)[0]]) {
			// 		newChoosenSas = action.payload.sas_list[Object.keys(action.payload.sas_list)[0]];
			// 	} 
			// }


				
			return {
				...state,
				config: action.payload,
				state: new PartState.Loaded()
			}
		}

		case fromConfigAction.LOAD_CONFIG_FAIL: {
			return {
				...state,
				config: {},
				state: new PartState.Error()
			}
		}
	}

	return state;
}

export const getSasConfig = (state: AllSasDataState) => state.config;
export const getSasState = (state: AllSasDataState) => state.state;