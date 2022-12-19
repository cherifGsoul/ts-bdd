import { Brand } from './brand';
import { isNonEmptyString } from './predicates';

export type ServedCity = Brand<string, 'ServedCity'>;

export const fromString = (s: string): ServedCity => {
  if (!isNonEmptyString(s)) {
    throw new Error('Served city must be a valid non-empty string');
  }
  return s as ServedCity;
};
