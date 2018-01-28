import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAllSasData from './all-sas-data.reducer';
import * as fromShownData from './shown-data.reducer';

export interface SasState {
	allSasData: fromAllSasData.AllSasDataState,
	shownData: fromShownData.ShownDataState
}

export const reducers: ActionReducerMap<SasState> = {
	allSasData: fromAllSasData.reducer,
	shownData: fromShownData.reducer
}

export const getSasState = createFeatureSelector<SasState>(
	'sas'
);
