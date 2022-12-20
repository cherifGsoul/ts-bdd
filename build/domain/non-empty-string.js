'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fromString = exports.isNonEmptyString = void 0;
const isNonEmptyString = (s) => typeof s === 'string' && s.length > 0;
exports.isNonEmptyString = isNonEmptyString;
const fromString = (s) => {
  if (!(0, exports.isNonEmptyString)(s)) {
    throw new Error('Non Empty String must be a valid non-empty string');
  }
  return s;
};
exports.fromString = fromString;
