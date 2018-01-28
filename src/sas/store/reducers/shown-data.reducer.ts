import * as fromShownDataActions from '../actions/shown-data.actions';





import { Sas } from '../../models/sas.model';
import { Group } from '../../models/group.model';
import { Kt } from '../../models/kt.model';
import { Device } from '../../models/device.model';
import { Portion } from '../../models/portion.model';


export interface ShownDataState {
	choosenSas: Sas,
	choosenGroup: Group,
	choosenKt: Kt,
	choosenDevice: Device,
	choosenPortion: Portion, 

	shownSasList: Sas[],
	shownGroupList: Group[],
	shownKtList: Kt[],
	shownDeviceList: Device[]




}

export const initialState: ShownDataState = {
	choosenSas: {},
	choosenGroup: {},
	choosenKt: {},
	choosenDevice: {},
	choosenPortion: {},

	shownSasList: [],
	shownGroupList: [],
	shownKtList: [],
	shownDeviceList: []
} 

export function reducer(
	state = initialState,
	action: fromShownDataActions.PickerActions
): ShownDataState {
	switch(action.type) {
		case fromShownDataActions.SAS_LIST_IMPORTED: {
			return {
				...state,
				shownSasList: action.payload
			}
		}

		case fromShownDataActions.SAS_CHOSEN: {
			return {
				...state,
				choosenSas: action.payload
			}
		}

		case fromShownDataActions.GROUP_LIST_IMPORTED: {
			return {
				...state,
				shownGroupList: action.payload
			}
		}

		case fromShownDataActions.GROUP_CHOSEN: {
			return {
				...state,
				choosenGroup: action.payload
			}
		}

		case fromShownDataActions.KT_LIST_IMPORTED: {
			return {
				...state,
				shownKtList: action.payload
			}
		}

		case fromShownDataActions.KT_CHOSEN: {
			return {
				...state,
				choosenKt: action.payload
			}
		}

		case fromShownDataActions.DEVICE_LIST_IMPORTED: {
			return {
				...state,
				shownDeviceList: action.payload
			}
		}

		case fromShownDataActions.DEVICE_CHOSEN: {
			return {
				...state,
				choosenDevice: action.payload
			}
		}

		case fromShownDataActions.PORTION_CHOSEN: {
			return {
				...state,
				choosenPortion: action.payload
			}
		}
	}
	return state;
}


export const getChoosenSas = (state: ShownDataState) => state.choosenSas;
export const getChoosenGroup = (state: ShownDataState) => state.choosenGroup;
export const getChoosenKt = (state: ShownDataState) => state.choosenKt;
export const getChoosenDevice = (state: ShownDataState) => state.choosenDevice;
export const getChoosenPortion = (state: ShownDataState) => state.choosenPortion;

export const getShownSasList = (state: ShownDataState) => state.shownSasList;
export const getShownGroupList = (state: ShownDataState) => state.shownGroupList;
export const getShownKtList = (state: ShownDataState) => state.shownKtList;
export const getShownDeviceList = (state: ShownDataState) => state.shownDeviceList;