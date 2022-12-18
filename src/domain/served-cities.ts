export interface ServedCities {
	isCityServed(city: string): Promise<boolean>
}