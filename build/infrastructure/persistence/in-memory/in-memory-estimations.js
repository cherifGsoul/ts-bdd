'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, state, kind, f) {
    if (kind === 'a' && !f)
      throw new TypeError('Private accessor was defined without a getter');
    if (
      typeof state === 'function'
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        'Cannot read private member from an object whose class did not declare it'
      );
    return kind === 'm'
      ? f
      : kind === 'a'
      ? f.call(receiver)
      : f
      ? f.value
      : state.get(receiver);
  };
var _InMemoryEstimations_estimations;
Object.defineProperty(exports, '__esModule', { value: true });
exports.InMemoryEstimations = void 0;
const domain_1 = require('../../../domain');
const uuid_1 = require('uuid');
class InMemoryEstimations {
  constructor() {
    _InMemoryEstimations_estimations.set(this, new Map());
  }
  getForId(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const estimation = __classPrivateFieldGet(
        this,
        _InMemoryEstimations_estimations,
        'f'
      ).get(id.toString());
      if (!estimation) throw new Error('estimation can not be found');
      return estimation;
    });
  }
  nextIdentity() {
    return domain_1.EstimationId.fromString((0, uuid_1.v4)());
  }
  save(estimation) {
    return __awaiter(this, void 0, void 0, function* () {
      __classPrivateFieldGet(this, _InMemoryEstimations_estimations, 'f').set(
        estimation.id.toString(),
        estimation
      );
    });
  }
}
exports.InMemoryEstimations = InMemoryEstimations;
_InMemoryEstimations_estimations = new WeakMap();
