import { iso, Newtype } from 'newtype-ts';
import * as E from 'fp-ts/Either';
import { isNonEmptyString } from './predicates';

export type Street = Newtype<{ readonly Street: unique symbol }, string>;

export const fromString = E.fromPredicate(
  isNonEmptyString<Street>,
  (val) => new Error(`${val} Invalid distance`)
);
