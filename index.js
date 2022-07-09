"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStore = void 0;
var Store = /** @class */ (function () {
    function Store(defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var _this = this;
        this.value = null;
        this.callbacks = [];
        this.subscribe = function (newCallback) {
            _this.callbacks.push(newCallback);
            newCallback(_this.value);
        };
        this.set = function (newValue) {
            _this.value = newValue;
            _this.callbacks.forEach(function (oneCallback) {
                oneCallback(_this.value);
            });
        };
        this.update = function (toCall) {
            _this.value = toCall(_this.value);
            _this.callbacks.forEach(function (oneCallback) {
                oneCallback(_this.value);
            });
        };
        this.value = defaultValue;
        this.callbacks = [];
    }
    return Store;
}());
var makeStore = function (value) {
    return new Store(value);
};
exports.makeStore = makeStore;
