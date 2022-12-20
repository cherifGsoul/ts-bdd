import { Given, Then, When } from '@cucumber/cucumber';
import { pipe } from 'fp-ts/function';
import * as Domain from '../../src/domain';
import * as E from 'fp-ts/Either';
import assert from 'assert';

Given('{string} is a served city', function (city) {
  this.servedCity = Domain.ServedCity.fromString(city);
});

Given(
  'a route between {string} and {string} in this city',
  function (origin, destination) {
    this.route = Domain.Route.between({
      origin: Domain.Address.parse({
        street: Domain.Street.fromString(origin),
        city: this.servedCity,
      }),
      destination: Domain.Address.parse({
        street: Domain.Street.fromString(destination),
        city: this.servedCity,
      }),
    });

    assert.ok(E.isRight(this.route));
  }
);

Given(
  'the itinerary distance for this route is {int} KM',
  function (distance: number) {
    this.itinerary = Domain.Itinerary.parse({
      route: this.route,
      distance: Domain.Distance.fromNumber(distance),
    });
    assert.ok(E.isRight(this.itinerary));
  }
);

When('I request an estimation for a ride for this route', function () {
  this.estimation = pipe(
    this.itinerary,
    E.map(Domain.estimateForItinerary),
    E.getOrElseW((e: any) => {
      throw new Error('an error occured');
    })
  );
  assert.ok(E.isRight(this.estimation));
});

Then('the estimated price should be ${int}', function (estimatedFare) {
  assert.equal(
    pipe(
      this.estimation,
      E.fold(
        (e: any) => e.message,
        (val) => val
      )
    ),
    estimatedFare
  );
});
