import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';
import * as fromStore from '../index';

import { Sas } from '../../models/sas.model';
import { Config } from '../../models/config.model';

import * as fromServices from '../../services';
import * as allSasDataActions from '../actions/all-sas-data.actions';
import * as shownDataActions from '../actions/shown-data.actions';

@Injectable()
export class AllSasDataEffect {
	constructor(
		private store$: Store<fromStore.SasState>,
		private actions$: Actions,
		private backendService: fromServices.BackendConnector
	){}

	@Effect()
	loadConfig$ = this.actions$.ofType(allSasDataActions.LOAD_CONFIG)
	.pipe(
		switchMap(() => {
			return this.backendService.getConfig()
				.pipe(
					map((config: Config)  => new allSasDataActions.LoadConfigSuccess(config)),
					catchError((error) => of(new allSasDataActions.LoadConfigFail(error)))

				)
				
		})
	)

	@Effect()
	loadConfigSuccess$ = this.actions$.ofType(allSasDataActions.LOAD_CONFIG_SUCCESS)
	.pipe(
		map((action: allSasDataActions.LoadConfigSuccess) => {
			var newSasList = Object.keys(action.payload.sas_list).map(id => action.payload.sas_list[parseInt(id, 10)]); 	
			return new shownDataActions.SasListImported(newSasList);
		})

	)

}

