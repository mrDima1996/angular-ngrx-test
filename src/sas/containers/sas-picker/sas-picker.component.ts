import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Config } from '../../models/config.model';
import { Sas } from '../../models/sas.model';

import * as fromStore from '../../store';

@Component({
	selector: 'sas-picker',
	styleUrls: ['sas-picker.component.scss'],
	templateUrl: 'sas-picker.component.html'
})
export class SasPickerComponent {
	sasList$: Observable<Sas[]>;
	choosenSas$: Observable<Sas>;
	config$: Observable<Config>;
	constructor(
		private store: Store<fromStore.SasState>
	){}
	ngOnInit(){
		this.config$ = this.store.select(fromStore.getConfig);
		this.sasList$ = this.store.select(fromStore.getShownSasList);
		this.choosenSas$ = this.store.select(fromStore.getChoosenSas);
	}

	onSelect(id: number){
		this.config$
			.pipe(
				map((config: Config) => {
					this.store.dispatch(new fromStore.SasChosen(config.sas_list[id]));
				})
			).subscribe();
	}

}

