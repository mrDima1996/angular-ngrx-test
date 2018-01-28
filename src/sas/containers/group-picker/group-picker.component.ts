import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Config } from '../../models/config.model';
import { Group } from '../../models/group.model';

import * as fromStore from '../../store';

@Component({
	selector: 'group-picker',
	styleUrls: ['group-picker.component.scss'],
	templateUrl: 'group-picker.component.html'
})
export class GroupPickerComponent {
	groupList$: Observable<Group[]>;
	choosenGroup$: Observable<Group>;
	config$: Observable<Config>;

	constructor(
		private store: Store<fromStore.SasState>
	){}
	ngOnInit(){
		this.config$ = this.store.select(fromStore.getConfig);
		this.groupList$ = this.store.select(fromStore.getShownGroupList);
		this.choosenGroup$ = this.store.select(fromStore.getChoosenGroup);
	}

	onSelect(id: number){
		this.config$
			.pipe(
				map((config: Config) => {
					this.store.dispatch(new fromStore.GroupChosen(config.group_list[id]));
				})
			).subscribe();
	}

}
