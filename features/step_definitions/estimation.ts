import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from 'chai'
import * as Domain from "../../src/domain"

Given('{string} is a served city', function (city) {
	this.servedCity = Domain.ServedCity.fromString(city)
});

Given('a route between {string} and {string} in this city', function (
	origin,
	destination
	) {
	this.route = {
		origin: Domain.Address.fromString(origin),
		destination: Domain.Address.fromString(destination),
	}
});

Given('the itinerary distance for this route is {int} KM', function (distance: number) {
	this.itinerary = {
		route: this.route,
		distance: Domain.Distance.fromNumber(distance)
	}
});

When('I request an estimation for a ride for this route', function () {
	this.estimation = Domain.estimateForItinerary(this.itinerary)
});

Then('the estimated price should be ${int}', function (estimatedFare) {
	expect(this.estimation.fare).to.equal(estimatedFare)
});