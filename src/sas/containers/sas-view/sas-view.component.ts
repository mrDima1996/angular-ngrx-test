import {Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromStore from '../../store';

import { Config } from '../../models/config.model';
import { BackendConnector } from '../../services/backend-connector.service';


@Component({
	selector: 'sas-view',
	styleUrls: ['sas-view.component.scss'],
	templateUrl: 'sas-view.component.html'
})
export class SasViewComponent implements OnInit {

	constructor(
		private backendConnector: BackendConnector,
		private store: Store<fromStore.SasState>
	) {}
	ngOnInit(){
		this.store.dispatch(new fromStore.LoadConfig());
	}
}
