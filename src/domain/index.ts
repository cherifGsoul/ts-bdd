import { Address } from "./address"
import { Brand } from "./brand"
import { Distance } from "./distance"
import { EstimationId } from "./estimation-id"
import * as Fare from "./fare"

export type Route = {
	origin: Address,
	destination: Address
}

export type Itinerary = Brand<{
	route: Route,
	distance: Distance
}, 'Itinerary'>

export type Estimation = Brand<{
	id: EstimationId,
	itinerary: Itinerary,
	fare: Fare.Fare
}, 'Estimation'>


const baseFare = 5
const farePerKm = 1

export const estimateForItinerary = (itinerary: Itinerary): Fare.Fare => {
	const fare = itinerary.distance * farePerKm + baseFare
	return Fare.fromNumber(fare)
}

export * as ServedCity from './served-city'
export * as Address from './address'
export * as Fare from './fare'
export * as Distance from './distance'
export * as NonEmptyString from './non-empty-string'
export * as Street from './street'
export {ServedCities} from './served-cities'
export {Estimations} from './estimations'
export * as EstimationId from './estimation-id'
export {Itineraries} from './itineraries'