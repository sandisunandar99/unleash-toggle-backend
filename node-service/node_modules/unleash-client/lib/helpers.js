"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveContextValue = exports.createFallbackFunction = void 0;
function createFallbackFunction(name, context, fallback) {
    if (typeof fallback === 'function') {
        return function () { return fallback(name, context); };
    }
    if (typeof fallback === 'boolean') {
        return function () { return fallback; };
    }
    return function () { return false; };
}
exports.createFallbackFunction = createFallbackFunction;
function resolveContextValue(context, field) {
    if (context[field]) {
        return context[field];
    }
    if (context.properties && context.properties[field]) {
        return context.properties[field];
    }
    return undefined;
}
exports.resolveContextValue = resolveContextValue;
//# sourceMappingURL=helpers.js.map