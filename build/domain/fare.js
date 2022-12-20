'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fromNumber = void 0;
const predicates_1 = require('./predicates');
const fromNumber = (s) => {
  if (!(0, predicates_1.isPositiveNumber)(s)) {
    throw new Error('Fare must be a valid positive number');
  }
  return s;
};
exports.fromNumber = fromNumber;
