import { createSelector } from '@ngrx/store';

import { Config } from '../../models/config.model';

import * as fromFeature from '../reducers';
import * as fromAllSasDataReducer from '../reducers/all-sas-data.reducer';

 export const getSasModuleState = createSelector(
 	fromFeature.getSasState,
 	(state: fromFeature.SasState) => {
 		return state.allSasData
 	}
 )

 export const getConfig = createSelector(
 	getSasModuleState,
 	fromAllSasDataReducer.getSasConfig
 )
