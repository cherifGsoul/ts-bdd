import { ServedCity } from '../../../domain';
import * as TE from 'fp-ts/TaskEither';
import * as IO from 'fp-ts/lib/IO';

// Fake DB
const cities: Map<string, ServedCity.ServedCity> = new Map();

const setServedCity = (
  city: ServedCity.ServedCity
): IO.IO<ServedCity.ServedCity> => {
  cities.set(String(city), city);
  return IO.of(city);
};

export const serveCity = (
  city: ServedCity.ServedCity
): TE.TaskEither<Error, ServedCity.ServedCity> =>
  TE.fromIO(setServedCity(city));

export const isServedCity = (
  city: ServedCity.ServedCity
): TE.TaskEither<Error, boolean> => TE.right(cities.has(String(city)));
