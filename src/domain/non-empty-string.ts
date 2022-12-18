import { Brand } from "./brand"
// import { isNonEmptyString } from "./predicates"

export type NonEmptyString = Brand<string, 'NonEmptyString'>

export const isNonEmptyString = (s: unknown): s is NonEmptyString => typeof s === 'string' && s.length > 0

export const fromString = (s: string): NonEmptyString => {
	if (!isNonEmptyString(s)) {
		throw new Error('Non Empty String must be a valid non-empty string')
	}
	return s as NonEmptyString
}

