'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fromModel = void 0;
const fromModel = (estimation) => {
  return {
    itinerary: {
      route: {
        origin: {
          street: estimation.itinerary.route.origin.street.toString(),
          city: estimation.itinerary.route.origin.city.toString(),
        },
        destination: {
          street: estimation.itinerary.route.origin.street.toString(),
          city: estimation.itinerary.route.origin.city.toString(),
        },
      },
      distance: parseFloat(estimation.itinerary.distance.toString()),
    },
    fare: parseFloat(estimation.fare.toString()),
  };
};
exports.fromModel = fromModel;
