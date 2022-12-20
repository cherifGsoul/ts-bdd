'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isPositiveNumber = exports.isNonEmptyString = void 0;
const isNonEmptyString = (s) => typeof s === 'string' && s.length > 0;
exports.isNonEmptyString = isNonEmptyString;
const isPositiveNumber = (n) => typeof n === 'number' && n > 0;
exports.isPositiveNumber = isPositiveNumber;
