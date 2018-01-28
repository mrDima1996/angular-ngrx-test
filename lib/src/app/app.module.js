import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
// this would be done dynamically with webpack for builds
var environment = {
    development: true,
    production: false,
};
export var metaReducers = !environment.production
    ? [storeFreeze]
    : [];
// bootstrap
import { AppComponent } from './containers/app/app.component';
export var ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sasview'
    },
    {
        path: 'sasview',
        loadChildren: '../sas/sas.module#SasModule'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                RouterModule.forRoot(ROUTES),
                StoreModule.forRoot({}, { metaReducers: metaReducers }),
                EffectsModule.forRoot([]),
                environment.development ? StoreDevtoolsModule.instrument() : [],
            ],
            providers: [],
            declarations: [AppComponent],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map