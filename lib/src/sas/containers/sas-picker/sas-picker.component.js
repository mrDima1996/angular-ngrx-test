import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
var SasPickerComponent = /** @class */ (function () {
    function SasPickerComponent(store) {
        this.store = store;
    }
    SasPickerComponent.prototype.ngOnInit = function () {
        this.sasList$ = this.store.select(fromStore.getShownSasList);
        this.choosenSas$ = this.store.select(fromStore.getChoosenSas);
    };
    SasPickerComponent.prototype.onSelect = function (id) {
        console.log(id);
    };
    SasPickerComponent = tslib_1.__decorate([
        Component({
            selector: 'sas-picker',
            styleUrls: ['sas-picker.component.scss'],
            templateUrl: 'sas-picker.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], SasPickerComponent);
    return SasPickerComponent;
}());
export { SasPickerComponent };
//# sourceMappingURL=sas-picker.component.js.map