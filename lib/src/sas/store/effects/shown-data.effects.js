import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as shownDataActions from '../actions/shown-data.actions';
var ShownDataEffect = /** @class */ (function () {
    function ShownDataEffect(actions$) {
        this.actions$ = actions$;
        this.loadConfigSuccess$ = this.actions$.ofType(shownDataActions.SAS_LIST_IMPORTED)
            .pipe(map(function (action) { return action.payload; }), map(function (payload) {
            var chosenSas;
            if (payload.length > 0) {
                chosenSas = payload[0];
            }
            else {
                chosenSas = {};
            }
            return new shownDataActions.SasChosen(chosenSas);
        }));
    }
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], ShownDataEffect.prototype, "loadConfigSuccess$", void 0);
    ShownDataEffect = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions])
    ], ShownDataEffect);
    return ShownDataEffect;
}());
export { ShownDataEffect };
//# sourceMappingURL=shown-data.effects.js.map