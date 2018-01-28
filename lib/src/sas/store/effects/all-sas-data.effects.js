import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as fromServices from '../../services';
import * as allSasDataActions from '../actions/all-sas-data.actions';
import * as shownDataActions from '../actions/shown-data.actions';
var AllSasDataEffect = /** @class */ (function () {
    function AllSasDataEffect(actions$, backendService) {
        var _this = this;
        this.actions$ = actions$;
        this.backendService = backendService;
        this.loadConfig$ = this.actions$.ofType(allSasDataActions.LOAD_CONFIG)
            .pipe(switchMap(function () {
            return _this.backendService.getConfig()
                .pipe(map(function (config) { return new allSasDataActions.LoadConfigSuccess(config); }), catchError(function (error) { return of(new allSasDataActions.LoadConfigFail(error)); }));
        }));
        this.loadConfigSuccess$ = this.actions$.ofType(allSasDataActions.LOAD_CONFIG_SUCCESS)
            .pipe(map(function (action) { return action.payload; }), map(function (payload) { return new shownDataActions.SasListImported(payload.sas_list); }));
    }
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AllSasDataEffect.prototype, "loadConfig$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AllSasDataEffect.prototype, "loadConfigSuccess$", void 0);
    AllSasDataEffect = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions, fromServices.BackendConnector])
    ], AllSasDataEffect);
    return AllSasDataEffect;
}());
export { AllSasDataEffect };
//# sourceMappingURL=all-sas-data.effects.js.map