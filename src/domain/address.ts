import { ServedCity } from './served-city';
import { Street } from './street';
import * as A from "fp-ts/lib/Apply";
import * as E from 'fp-ts/Either';

export type Address = Readonly<
  {
    street: Street;
    city: ServedCity;
  }
>;

export const parse = A.sequenceS(E.Apply);
