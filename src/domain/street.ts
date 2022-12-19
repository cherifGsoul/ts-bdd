import { Brand } from './brand';
import { isNonEmptyString } from './predicates';

export type Street = Brand<string, 'Street'>;

export const fromString = (s: string): Street => {
  if (!isNonEmptyString(s)) {
    throw new Error('Address must be a valid non-empty string');
  }
  return s as Street;
};
