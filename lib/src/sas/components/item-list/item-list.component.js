import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent() {
        this.selected = new EventEmitter();
    }
    ItemListComponent.prototype.onSelect = function (id) {
        this.selected.emit(id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ItemListComponent.prototype, "objectList", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ItemListComponent.prototype, "selectedItem", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ItemListComponent.prototype, "selected", void 0);
    ItemListComponent = tslib_1.__decorate([
        Component({
            selector: 'item-list',
            styleUrls: ['item-list.component.scss'],
            templateUrl: 'item-list.component.html'
        })
    ], ItemListComponent);
    return ItemListComponent;
}());
export { ItemListComponent };
//# sourceMappingURL=item-list.component.js.map