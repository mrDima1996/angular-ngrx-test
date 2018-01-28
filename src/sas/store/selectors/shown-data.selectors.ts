import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromShownDataReducer from '../reducers/shown-data.reducer';

import { Portion } from '../../models/portion.model';
import { Device } from '../../models/device.model';

export const getShownDataState = createSelector(
 	fromFeature.getSasState,
 	(state: fromFeature.SasState) => {
 		return state.shownData
 	}
 )

 export const getChoosenSas = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getChoosenSas
 )

  export const getChoosenGroup = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getChoosenGroup
 )


 export const getChoosenKt = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getChoosenKt
 )


export const getChoosenDevice = createSelector(
	getShownDataState,
	fromShownDataReducer.getChoosenDevice
)

export const getChoosenPortion = createSelector(
	getShownDataState,
	fromShownDataReducer.getChoosenPortion
)

export const getShownPortionData = createSelector(
	getChoosenPortion,
	getChoosenDevice,
	(choosenPortion: any , choosenDevice: any) => {
		if (!choosenPortion.data || !choosenDevice.id) return {};
		if (!!choosenPortion.data[choosenDevice.id]) {
			return choosenPortion.data[choosenDevice.id];
		} else {
			return {};
		}
	}
)




 export const getShownSasList = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getShownSasList
 )

   export const getShownGroupList = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getShownGroupList
 )
    export const getShownKtList = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getShownKtList
 )
     export const getShownDeviceList = createSelector(
 	getShownDataState,
 	fromShownDataReducer.getShownDeviceList
 )
