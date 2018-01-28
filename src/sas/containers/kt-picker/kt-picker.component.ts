import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Config } from '../../models/config.model';
import { Sas } from '../../models/sas.model';

import * as fromStore from '../../store';

@Component({
	selector: 'kt-picker',
	styleUrls: ['kt-picker.component.scss'],
	templateUrl: 'kt-picker.component.html'
})
export class KtPickerComponent {
	ktList$: Observable<Sas[]>;
	choosenKt$: Observable<Sas>;
	config$: Observable<Config>;
	constructor(
		private store: Store<fromStore.SasState>
	){}
	ngOnInit(){
		this.config$ = this.store.select(fromStore.getConfig);
		this.ktList$ = this.store.select(fromStore.getShownKtList);
		this.choosenKt$ = this.store.select(fromStore.getChoosenKt);
	}

	onSelect(id: number){
		this.config$
			.pipe(
				map((config: Config) => {
					this.store.dispatch(new fromStore.KtChosen(config.kt_list[id]));
				})
			).subscribe();
	}

}

