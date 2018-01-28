import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Config } from '../../models/config.model';
import { Group } from '../../models/group.model';

import * as fromStore from '../../store';

@Component({
	selector: 'device-picker',
	styleUrls: ['device-picker.component.scss'],
	templateUrl: 'device-picker.component.html'
})
export class DevicePickerComponent {
	deviceList$: Observable<Group[]>;
	choosenDevice$: Observable<Group>;
	config$: Observable<Config>;

	constructor(
		private store: Store<fromStore.SasState>
	){}
	ngOnInit(){
		this.config$ = this.store.select(fromStore.getConfig);
		this.deviceList$ = this.store.select(fromStore.getShownDeviceList);
		this.choosenDevice$ = this.store.select(fromStore.getChoosenDevice);
	}

	onSelect(id: number){
		this.config$
			.pipe(
				map((config: Config) => {
					this.store.dispatch(new fromStore.DeviceChosen(config.device_list[id]));
				})
			).subscribe();
	}

}
