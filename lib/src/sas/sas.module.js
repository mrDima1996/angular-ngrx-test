import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
export var ROUTES = [
    {
        path: '',
        component: fromContainers.SasViewComponent
    }
];
var SasModule = /** @class */ (function () {
    function SasModule() {
    }
    SasModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(ROUTES),
                StoreModule.forFeature('sas', reducers),
                EffectsModule.forFeature(effects),
                HttpClientModule
            ],
            providers: fromServices.services.slice(),
            declarations: fromContainers.containers.concat(fromComponents.components),
            exports: fromContainers.containers.concat(fromComponents.components)
        })
    ], SasModule);
    return SasModule;
}());
export { SasModule };
//# sourceMappingURL=sas.module.js.map