import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store'

import * as fromComponents from './components';
import * as fromContainers from './containers'
import * as fromServices from './services';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromContainers.SasViewComponent
	}
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		StoreModule.forFeature('sas', reducers),
		EffectsModule.forFeature(effects),
		HttpClientModule
	],
	providers: [...fromServices.services],
	declarations: [...fromContainers.containers, ...fromComponents.components],
	exports: [...fromContainers.containers, ...fromComponents.components]
})

export class SasModule{}