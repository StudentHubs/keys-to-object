"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function keysToObject(keys, valueMap, keyMap, initial) {
    if (initial === void 0) { initial = {}; }
    var valueFunc = typeof valueMap === 'function';
    return keys.reduce(function (res, key, i) {
        var _a;
        var newValue = valueFunc
            ? valueMap(key, i)
            : valueMap;
        var newKey = keyMap
            ? keyMap(key, i)
            : Array.isArray(key)
                ? key.map(function (k) { return "" + k; })
                : "" + key;
        if (typeof newKey === 'string')
            return __assign({}, res, (_a = {}, _a[newKey] = newValue, _a));
        newKey.reduce(function (r, k, i) {
            if (i === newKey.length - 1)
                r[k] = newValue;
            else
                r[k] = r[k] || {};
            return r[k];
        }, res);
        return res;
    }, initial);
}
exports.default = keysToObject;
