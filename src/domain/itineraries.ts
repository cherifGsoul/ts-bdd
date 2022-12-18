import { Itinerary, Route } from ".";

export interface Itineraries  {
    getForRoute(route: Route): Promise<Itinerary>;

}