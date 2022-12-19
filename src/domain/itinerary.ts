import { Distance, Route } from ".";
import * as A from "fp-ts/lib/Apply";
import * as E from 'fp-ts/Either';

export type Itinerary = Readonly<
  {
    route: Route.Route;
    distance: Distance.Distance;
  }
>;

export const parse = A.sequenceS(E.Apply)