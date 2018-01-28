import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


import { Store } from '@ngrx/store';
import * as fromStore from '../index';

import { Group } from '../../models/group.model';
import { Kt } from '../../models/kt.model';
import { Device } from '../../models/device.model';





import * as fromServices from '../../services';
import * as shownDataActions from '../actions/shown-data.actions';
import * as allSasDataActions from '../actions/all-sas-data.actions';

@Injectable()
export class ShownDataEffect {
	constructor(
		private store$: Store<fromStore.SasState>,
		private actions$: Actions
	){}

	@Effect()
	sasListImported$ = this.actions$.ofType(shownDataActions.SAS_LIST_IMPORTED)
	.pipe(
		map((action: shownDataActions.SasListImported) => {
			let newSas = {};
			if (!!action.payload[0]) {
				newSas = action.payload[0];
			}
			return new shownDataActions.SasChosen(newSas);
		})
	)

	@Effect()
	sasChosen$ = this.actions$.ofType(shownDataActions.SAS_CHOSEN)
	.pipe(
		switchMap((action: shownDataActions.SasChosen) => {
			return this.store$.select(fromStore.getNewShownGroupList)
				.pipe(
					take(1),
					map((groupList: Group[]) => {

						let newGroup = {};
						if (!!groupList[0]) {
							newGroup = groupList[0];
						}
						return new shownDataActions.GroupListImported(groupList);
					})
				)
		})
	)

	@Effect()
	groupListImported$ = this.actions$.ofType(shownDataActions.GROUP_LIST_IMPORTED)
	.pipe(
		map((action: shownDataActions.GroupListImported) => {
			let newGroup = {};
			if (!!action.payload[0]) {
				newGroup = action.payload[0];
			}
			return new shownDataActions.GroupChosen(newGroup);
		})
	)

	

	@Effect()
	groupChosen$ = this.actions$.ofType(shownDataActions.GROUP_CHOSEN)
	.pipe(
		switchMap((action: shownDataActions.GroupChosen) => {
			return this.store$.select(fromStore.getNewShownKtList)
				.pipe(
					take(1),
					map((ktList: Kt[]) => {
						return new shownDataActions.KtListImported(ktList);
					})
				)
		})
	)

	@Effect()
	ktListImported$ = this.actions$.ofType(shownDataActions.KT_LIST_IMPORTED)
	.pipe(
		map((action: shownDataActions.KtListImported) => {
			let newkt = {};
			if (!!action.payload[0]) {
				newkt = action.payload[0];
			}
			return new shownDataActions.KtChosen(newkt);
		})
	)

	@Effect()
	ktChosen$ = this.actions$.ofType(shownDataActions.KT_CHOSEN)
	.pipe(
		switchMap((action: shownDataActions.KtChosen) => {
			return this.store$.select(fromStore.getNewShownDeviceList)
				.pipe(
					take(1),
					map((deviceList: Device[]) => {
						return new shownDataActions.DeviceListImported(deviceList);	
					})
				)
		})
	)

	@Effect()
	deviceListImported$ = this.actions$.ofType(shownDataActions.DEVICE_LIST_IMPORTED)
	.pipe(
		map((action: shownDataActions.DeviceListImported) => {
			let newDevice = {};
			if (!!action.payload[0]) {
				newDevice = action.payload[0];
			}
			return new shownDataActions.DeviceChosen(newDevice);
		})
	)

}