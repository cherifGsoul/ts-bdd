import {
  Address,
  estimateForItinerary,
  Estimation,
  Estimations,
  Itineraries,
  Itinerary,
  Route,
  ServedCities,
  ServedCity,
  Street,
} from '../domain';

export type RideEstimationCommand = {
  origin: {
    street: string;
    city: string;
  };
  destination: {
    street: string;
    city: string;
  };
};

export class RideEstimationCommandHandler {
  #servedCities: ServedCities;
  #itineraries: Itineraries;
  #estimations: Estimations;

  constructor(
    servedCities: ServedCities,
    itineraries: Itineraries,
    estimations: Estimations
  ) {
    this.#servedCities = servedCities;
    this.#itineraries = itineraries;
    this.#estimations = estimations;
  }

  public async handle(command: RideEstimationCommand): Promise<string> {
    // instantiate the route
    const route: Route.Route = Route.between(
      {
        street: Street.fromString(command.origin.street),
        city: ServedCity.fromString(command.origin.city),
      } as Address.Address,
      {
        street: Street.fromString(command.origin.street),
        city: ServedCity.fromString(command.destination.city),
      } as Address.Address
    );

    // get an itinerary for the route
    const itinerary: Itinerary = await this.#itineraries.getForRoute(route);

    // estimate the itinerary distance fare
    const fare = estimateForItinerary(itinerary);

    // instantiate the estimation with the fare
    const estimation: Estimation = {
      id: this.#estimations.nextIdentity(),
      itinerary,
      fare,
    } as Estimation;

    // persist the estimation
    await this.#estimations.save(estimation);
    return estimation.id.toString();
  }
}
