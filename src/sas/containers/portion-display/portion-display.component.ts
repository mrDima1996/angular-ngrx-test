import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Portion } from '../../models/portion.model';

import { BackendConnector } from '../../services/backend-connector.service';

import * as fromStore from '../../store';

@Component({
	selector: 'portion-display',
	styleUrls: ['portion-display.component.scss'],
	templateUrl: 'portion-display.component.html'
})
export class PortionDisplayComponent {
	choosenPortions$: Observable<Portion>;
	deviceData$: Observable<object>;
	constructor(
		private store: Store<fromStore.SasState>,
	){}
	ngOnInit(){
		this.choosenPortions$ = this.store.select(fromStore.getChoosenPortion);
		this.deviceData$ = this.store.select(fromStore.getShownPortionData); 
	}
}
