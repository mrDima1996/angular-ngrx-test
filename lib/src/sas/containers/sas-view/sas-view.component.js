import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { BackendConnector } from '../../services/backend-connector.service';
var SasViewComponent = /** @class */ (function () {
    function SasViewComponent(backendConnector, store) {
        this.backendConnector = backendConnector;
        this.store = store;
    }
    SasViewComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new fromStore.LoadConfig());
    };
    SasViewComponent = tslib_1.__decorate([
        Component({
            selector: 'sas-view',
            styleUrls: ['sas-view.component.scss'],
            templateUrl: 'sas-view.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BackendConnector,
            Store])
    ], SasViewComponent);
    return SasViewComponent;
}());
export { SasViewComponent };
//# sourceMappingURL=sas-view.component.js.map