import { Address } from "./address"
import { Distance } from "./distance"
import { Fare } from "./fare"

export type Route = {
	origin: Address,
	destination: Address
}

export type Itinerary = {
	route: Route,
	distance: Distance
}

export type Estimation = {
	itinerary: Itinerary,
	fare: Fare
}

const baseFare = 5
const farePerKm = 1

export const estimateForItinerary = (itinerary: Itinerary): Estimation => {
	const fare = itinerary.distance * farePerKm + baseFare
	return {
		itinerary,
		fare: fare as Fare
	}
}

export * as ServedCity from './served-city'
export * as Address from './address'
export * as Fare from './fare'
export * as Distance from './distance'