import { createFeatureSelector } from '@ngrx/store';
import * as fromAllSasData from './all-sas-data.reducer';
import * as fromShownData from './shown-data.reducer';
export var reducers = {
    allSasData: fromAllSasData.reducer,
    shownData: fromShownData.reducer
};
export var getSasState = createFeatureSelector('sas');
//# sourceMappingURL=index.js.map