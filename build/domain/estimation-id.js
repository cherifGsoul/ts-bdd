'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fromString = void 0;
const uuid_1 = require('uuid');
const fromString = (s) => {
  if (!(0, uuid_1.validate)(s)) {
    throw new Error('estimation id must be a valid uuid');
  }
  return s;
};
exports.fromString = fromString;
