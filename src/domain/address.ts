import { Brand } from "./brand"
import { isNonEmptyString } from "./predicates"

export type Address = Brand<string, 'Address'>

export const fromString = (s: string): Address => {
	if (!isNonEmptyString(s)) {
		throw new Error('Address must be a valid non-empty string')
	}
	return s as Address
}