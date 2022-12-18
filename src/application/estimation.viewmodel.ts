import { Estimation } from "../domain"

export type AddressViewModel = {
    street: string,
    city: string
}

export type RouteViewModel = {
    origin: AddressViewModel,
    destination: AddressViewModel
}

export type ItineraryViewModel = {
    route: RouteViewModel,
    distance: number
}
export type EstimationViewModel = {
    itinerary: ItineraryViewModel,
    fare: number
}

export const fromModel = (estimation: Estimation): EstimationViewModel => {
    return {
        itinerary: {
            route: {
                origin: {
                    street: estimation.itinerary.route.origin.street.toString(),
                    city: estimation.itinerary.route.origin.city.toString()
                },
                 destination: {
                    street: estimation.itinerary.route.origin.street.toString(),
                    city: estimation.itinerary.route.origin.city.toString()
                 }
            },
            distance: parseFloat(estimation.itinerary.distance.toString())
        },
        fare: parseFloat(estimation.fare.toString())
    }
}