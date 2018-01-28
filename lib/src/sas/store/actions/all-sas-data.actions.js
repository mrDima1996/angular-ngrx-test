export var LOAD_CONFIG = '[Sas View] Load config';
export var LOAD_CONFIG_SUCCESS = '[Sas View] Load config success';
export var LOAD_CONFIG_FAIL = '[Sas View] Load config fail';
var LoadConfig = /** @class */ (function () {
    function LoadConfig() {
        this.type = LOAD_CONFIG;
    }
    return LoadConfig;
}());
export { LoadConfig };
var LoadConfigFail = /** @class */ (function () {
    function LoadConfigFail(payload) {
        this.payload = payload;
        this.type = LOAD_CONFIG_FAIL;
    }
    return LoadConfigFail;
}());
export { LoadConfigFail };
var LoadConfigSuccess = /** @class */ (function () {
    function LoadConfigSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CONFIG_SUCCESS;
    }
    return LoadConfigSuccess;
}());
export { LoadConfigSuccess };
//# sourceMappingURL=all-sas-data.actions.js.map