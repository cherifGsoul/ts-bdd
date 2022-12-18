import { ServedCity } from "./served-city"
import { Brand } from "./brand"
import { Street } from "./street"


export type Address = Brand<{
	street: Street,
	city: ServedCity
}, 'Address'>