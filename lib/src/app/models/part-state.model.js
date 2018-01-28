export var LOADING = '[Part state] 0';
export var LOADED = '[Part state] 1';
export var ERROR = '[Part state] 2';
var Loading = /** @class */ (function () {
    function Loading() {
        this.type = LOADING;
    }
    return Loading;
}());
export { Loading };
var Loaded = /** @class */ (function () {
    function Loaded() {
        this.type = LOADED;
    }
    return Loaded;
}());
export { Loaded };
var Error = /** @class */ (function () {
    function Error() {
        this.type = ERROR;
    }
    return Error;
}());
export { Error };
//# sourceMappingURL=part-state.model.js.map