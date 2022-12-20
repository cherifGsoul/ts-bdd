'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fromString = void 0;
const predicates_1 = require('./predicates');
const fromString = (s) => {
  if (!(0, predicates_1.isNonEmptyString)(s)) {
    throw new Error('Address must be a valid non-empty string');
  }
  return s;
};
exports.fromString = fromString;
