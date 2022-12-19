import * as E from 'fp-ts/lib/Either';
import { Newtype } from 'newtype-ts';
// import * as NES from 'newtype-ts/lib/NonEmptyString';
import { isNonEmptyString } from './predicates';

export type ServedCity = Newtype<
  { readonly ServedCity: unique symbol },
  string
>;
export const fromString = E.fromPredicate(
  isNonEmptyString<ServedCity>,
  (val) => new Error(`${val} Invalid city`)
);
