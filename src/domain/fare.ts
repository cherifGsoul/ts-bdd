import { isPositiveInteger } from './predicates';
import * as E from 'fp-ts/Either';
import { Newtype } from 'newtype-ts';

export type Fare = Newtype<{ readonly Fare: unique symbol }, number>;

export const fromNumber = E.fromPredicate(
  isPositiveInteger<Fare>,
  (val) => new Error(`${val} Invalid fare`)
);
