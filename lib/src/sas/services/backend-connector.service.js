import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
var BackendConnector = /** @class */ (function () {
    function BackendConnector(http) {
        this.http = http;
    }
    BackendConnector.prototype.getConfig = function () {
        return this.http
            .get('http://5.200.35.202:8101/sas/config')
            .pipe(map(function (res) {
            return res.data;
        }), catchError(function (error) { return Observable.throw(error.json()); }));
    };
    BackendConnector = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BackendConnector);
    return BackendConnector;
}());
export { BackendConnector };
//# sourceMappingURL=backend-connector.service.js.map