import { Address } from '.';
import * as A from 'fp-ts/lib/Apply';
import * as E from 'fp-ts/Either';

export type Route = Readonly<{
  origin: Address.Address;
  destination: Address.Address;
}>;

export const between = A.sequenceS(E.Apply);
