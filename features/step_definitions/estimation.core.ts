import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import * as Domain from '../../src/domain';

Given('{string} is a served city', function (city) {
  this.servedCity = Domain.ServedCity.fromString(city);
});

Given(
  'a route between {string} and {string} in this city',
  function (origin, destination) {
    this.route = Domain.Route.between(
      {
        street: Domain.Street.fromString(origin),
        city: this.servedCity,
      } as Domain.Address.Address,
      {
        street: Domain.Street.fromString(destination),
        city: this.servedCity,
      } as Domain.Address.Address
    );
  }
);

Given(
  'the itinerary distance for this route is {int} KM',
  function (distance: number) {
    this.itinerary = {
      route: this.route,
      distance: Domain.Distance.fromNumber(distance),
    };
  }
);

When('I request an estimation for a ride for this route', function () {
  this.estimation = Domain.estimateForItinerary(this.itinerary);
});

Then('the estimated price should be ${int}', function (estimatedFare) {
  expect(this.estimation).to.equal(estimatedFare);
});
