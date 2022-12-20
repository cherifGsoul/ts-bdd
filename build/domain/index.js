'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.EstimationId =
  exports.Street =
  exports.NonEmptyString =
  exports.Distance =
  exports.Fare =
  exports.Address =
  exports.ServedCity =
  exports.estimateForItinerary =
    void 0;
const Fare = __importStar(require('./fare'));
const baseFare = 5;
const farePerKm = 1;
const estimateForItinerary = (itinerary) => {
  const fare = itinerary.distance * farePerKm + baseFare;
  return Fare.fromNumber(fare);
};
exports.estimateForItinerary = estimateForItinerary;
exports.ServedCity = __importStar(require('./served-city'));
exports.Address = __importStar(require('./address'));
exports.Fare = __importStar(require('./fare'));
exports.Distance = __importStar(require('./distance'));
exports.NonEmptyString = __importStar(require('./non-empty-string'));
exports.Street = __importStar(require('./street'));
exports.EstimationId = __importStar(require('./estimation-id'));
