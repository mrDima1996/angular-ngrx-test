import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Portion } from '../../models/portion.model';

import { BackendConnector } from '../../services/backend-connector.service';

import * as fromStore from '../../store';

@Component({
	selector: 'portion-picker',
	styleUrls: ['portion-picker.component.scss'],
	templateUrl: 'portion-picker.component.html'
})
export class PortionPickerComponent {
	choosenPortions$: Observable<Portion>;
	portionList: Portion[];
	constructor(
		private store: Store<fromStore.SasState>,
		private backendConnector: BackendConnector
	){}
	ngOnInit(){
		this.choosenPortions$ = this.store.select(fromStore.getChoosenPortion);
		this.portionList = this.backendConnector.getLatest();
	}

	onSelect(portion: Portion){
		console.log(portion);
		this.store.dispatch(new fromStore.PortionChosen(portion))
	}

}
