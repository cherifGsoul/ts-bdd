import { Given, Then, When } from '@cucumber/cucumber';
import { pipe } from 'fp-ts/function';
import * as Domain from '../../src/domain';
import * as E from 'fp-ts/Either';

Given('{string} is a served city', function (city) {
  this.servedCity = Domain.ServedCity.fromString(city);
});

Given(
  'a route between {string} and {string} in this city',
  function (origin, destination) {
    this.route = pipe(
      Domain.Route.between({
        origin: Domain.Address.parse({
          street: Domain.Street.fromString(origin),
          city: this.servedCity
        }),
        destination: Domain.Address.parse({
          street: Domain.Street.fromString(destination),
          city: this.servedCity
        })
      }),
      E.map(console.log)
    );
    console.log(this.route)
  }
);

Given(
  'the itinerary distance for this route is {int} KM',
  function (distance: number) {
    this.itinerary = pipe(
      Domain.Itinerary.parse({
        route: this.route,
        distance: Domain.Distance.fromNumber(distance)
      }),
      E.map(itinerary => itinerary)
    )
    console.log(this.itinerary)
  }
);

// When('I request an estimation for a ride for this route', function () {
//   this.estimation = Domain.estimateForItinerary(this.itinerary);
// });

// Then('the estimated price should be ${int}', function (estimatedFare) {
//   expect(this.estimation).to.equal(estimatedFare);
// });
