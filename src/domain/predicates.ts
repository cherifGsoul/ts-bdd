export const isNonEmptyString = (s: unknown): s is string => typeof s === 'string' && s.length > 0

export const isPositiveNumber = (n: unknown): n is number => typeof n === 'number' && n > 0