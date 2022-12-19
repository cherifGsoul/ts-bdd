import { iso, Newtype } from 'newtype-ts';
import * as E from 'fp-ts/Either';
import { isPositiveInteger } from './predicates';

export type Distance = Newtype<{ readonly Distance: unique symbol }, number>;

export const fromNumber = E.fromPredicate(
  isPositiveInteger<Distance>,
  (val) => new Error(`${val} Invalid distance`)
);
export const isoDistance = iso<Distance>();
