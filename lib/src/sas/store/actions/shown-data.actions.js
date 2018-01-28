export var SAS_LIST_IMPORTED = '[Sas View] Sas list has been imported';
export var SAS_CHOSEN = '[Sas View] Sas has been Chosen';
export var KT_CHOSEN = '[Sas View] Kt has been Chosen';
export var DEVICE_CHOSEN = '[Sas View] Device has been Chosen';
var SasListImported = /** @class */ (function () {
    function SasListImported(payload) {
        this.payload = payload;
        this.type = SAS_LIST_IMPORTED;
    }
    return SasListImported;
}());
export { SasListImported };
var SasChosen = /** @class */ (function () {
    function SasChosen(payload) {
        this.payload = payload;
        this.type = SAS_CHOSEN;
    }
    return SasChosen;
}());
export { SasChosen };
var KtChosen = /** @class */ (function () {
    function KtChosen(payload) {
        this.payload = payload;
        this.type = KT_CHOSEN;
    }
    return KtChosen;
}());
export { KtChosen };
var DeviceChosen = /** @class */ (function () {
    function DeviceChosen(payload) {
        this.payload = payload;
        this.type = DEVICE_CHOSEN;
    }
    return DeviceChosen;
}());
export { DeviceChosen };
//# sourceMappingURL=shown-data.actions.js.map