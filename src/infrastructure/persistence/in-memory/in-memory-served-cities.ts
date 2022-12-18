import { ServedCities, ServedCity } from "../../../domain";

export class InMemoryServedCities implements ServedCities {
    cities: Map<string, ServedCity.ServedCity> = new Map()

    public async isCityServed(city: string): Promise<boolean> {
        return this.cities.has(city)
    }

    public async serve(city: ServedCity.ServedCity): Promise<void> {
        this.cities.set(city.toString(), city)
	}
}