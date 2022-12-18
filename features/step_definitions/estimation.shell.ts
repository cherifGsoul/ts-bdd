import { Given, IWorldOptions, setWorldConstructor, Then, When, World } from "@cucumber/cucumber";
import assert from "assert";
import { Address, Distance, Itinerary, Route, ServedCity, Street } from "../../src/domain";
import { InMemoryServedCities } from "../../src/infrastructure/persistence/in-memory/in-memory-served-cities";
import { InMemoryEstimations } from "../../src/infrastructure/persistence/in-memory/in-memory-estimations";
import {RideEstimationCommandHandler, RideEstimationCommand, GetEstimationQueryHandler, GetEstimationQuery} from '../../src/application'
import {FakeItineraries} from '../../src/infrastructure/services/fake-itineraries'

class ShellWorld extends World {
	public servedCities = new InMemoryServedCities()
	public servedCity!: ServedCity.ServedCity
	public route!: Route
	public itinerary!: Itinerary
	public estimationId!: string
	public estimations = new InMemoryEstimations()
	public itineraries = new FakeItineraries()

	constructor(options: IWorldOptions) {
		super(options);
	}
}

setWorldConstructor(ShellWorld)

Given('{string} is a served city', async function (this: ShellWorld, city: string) {
	this.servedCity = ServedCity.fromString(city)
	let isServed = await this.servedCities.isCityServed(city)
	if (!isServed) this.servedCities.serve(this.servedCity)
	isServed = await this.servedCities.isCityServed(city)
	assert.ok(isServed)
});

Given('a route between {string} and {string} in this city', function (this: ShellWorld, origin: string, destination: string) {
	const originAddress: Address.Address = {
		street: Street.fromString(origin),
		city: this.servedCity
	} as Address.Address

	const destinationAddress: Address.Address = {
		street: Street.fromString(destination),
		city: this.servedCity
	} as Address.Address
	
	this.route = {
		origin: originAddress,
		destination: destinationAddress
	}
});

Given('the itinerary distance for this route is {int} KM', function (this: ShellWorld, distance: number) {
	this.itineraries.withDistance(distance)
	this.itinerary = {
		route: this.route,
		distance: Distance.fromNumber(distance)
	} as Itinerary
});

When('I request an estimation for a ride for this route', async function (this: ShellWorld) {
	const {route} = this
	const command: RideEstimationCommand = {
		origin: {
			street: route.origin.street.toString(),
			city: route.origin.city.toString(),
		},
		destination: {
			street: route.destination.street.toString(),
			city: route.destination.city.toString(),
		}
	}
	const commandHandler = new RideEstimationCommandHandler(this.servedCities, this.itineraries, this.estimations)
	this.estimationId = await commandHandler.handle(command)
});

Then('the estimated price should be ${int}', async function (this: ShellWorld, fare: number) {
	const query: GetEstimationQuery = {id: this.estimationId}
	const queryHandler = new GetEstimationQueryHandler(this.estimations)
	const viewModel = await queryHandler.handle(query)
	assert.equal(viewModel.fare, fare)
});