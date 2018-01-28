import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var BoxItemComponent = /** @class */ (function () {
    function BoxItemComponent() {
        this.selected = new EventEmitter();
    }
    BoxItemComponent.prototype.Select = function () {
        this.selected.emit(this.id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BoxItemComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], BoxItemComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BoxItemComponent.prototype, "isChecked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BoxItemComponent.prototype, "selected", void 0);
    BoxItemComponent = tslib_1.__decorate([
        Component({
            selector: 'box-item',
            styleUrls: ['box-item.component.scss'],
            templateUrl: 'box-item.component.html'
        })
    ], BoxItemComponent);
    return BoxItemComponent;
}());
export { BoxItemComponent };
//# sourceMappingURL=box-item.component.js.map