import { Distance, Itineraries, Itinerary, Route } from "../../domain";

export class FakeItineraries implements Itineraries {
    constructor(public distance: number = 0) {}

	public withDistance(distance: number) {
        this.distance = distance
	}

    public async getForRoute(route: Route): Promise<Itinerary> {
        return {
            route,
            distance: Distance.fromNumber(this.distance)
        } as Itinerary
    }
}