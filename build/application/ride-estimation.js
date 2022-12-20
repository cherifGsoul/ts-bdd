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
var __classPrivateFieldSet =
  (this && this.__classPrivateFieldSet) ||
  function (receiver, state, value, kind, f) {
    if (kind === 'm') throw new TypeError('Private method is not writable');
    if (kind === 'a' && !f)
      throw new TypeError('Private accessor was defined without a setter');
    if (
      typeof state === 'function'
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        'Cannot write private member to an object whose class did not declare it'
      );
    return (
      kind === 'a'
        ? f.call(receiver, value)
        : f
        ? (f.value = value)
        : state.set(receiver, value),
      value
    );
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
var _RideEstimationCommandHandler_servedCities,
  _RideEstimationCommandHandler_itineraries,
  _RideEstimationCommandHandler_estimations;
Object.defineProperty(exports, '__esModule', { value: true });
exports.RideEstimationCommandHandler = void 0;
const domain_1 = require('../domain');
class RideEstimationCommandHandler {
  constructor(servedCities, itineraries, estimations) {
    _RideEstimationCommandHandler_servedCities.set(this, void 0);
    _RideEstimationCommandHandler_itineraries.set(this, void 0);
    _RideEstimationCommandHandler_estimations.set(this, void 0);
    __classPrivateFieldSet(
      this,
      _RideEstimationCommandHandler_servedCities,
      servedCities,
      'f'
    );
    __classPrivateFieldSet(
      this,
      _RideEstimationCommandHandler_itineraries,
      itineraries,
      'f'
    );
    __classPrivateFieldSet(
      this,
      _RideEstimationCommandHandler_estimations,
      estimations,
      'f'
    );
  }
  handle(command) {
    return __awaiter(this, void 0, void 0, function* () {
      const route = {
        origin: {
          street: domain_1.Street.fromString(command.origin.street),
          city: domain_1.ServedCity.fromString(command.origin.city),
        },
        destination: {
          street: domain_1.Street.fromString(command.origin.street),
          city: domain_1.ServedCity.fromString(command.destination.city),
        },
      };
      const itinerary = yield __classPrivateFieldGet(
        this,
        _RideEstimationCommandHandler_itineraries,
        'f'
      ).getForRoute(route);
      const fare = (0, domain_1.estimateForItinerary)(itinerary);
      const estimation = {
        id: __classPrivateFieldGet(
          this,
          _RideEstimationCommandHandler_estimations,
          'f'
        ).nextIdentity(),
        itinerary,
        fare,
      };
      yield __classPrivateFieldGet(
        this,
        _RideEstimationCommandHandler_estimations,
        'f'
      ).save(estimation);
      return estimation.id.toString();
    });
  }
}
exports.RideEstimationCommandHandler = RideEstimationCommandHandler;
(_RideEstimationCommandHandler_servedCities = new WeakMap()),
  (_RideEstimationCommandHandler_itineraries = new WeakMap()),
  (_RideEstimationCommandHandler_estimations = new WeakMap());
