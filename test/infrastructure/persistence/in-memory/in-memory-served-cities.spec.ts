import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { ServedCity } from '../../../../src/domain';
import {
  isServedCity,
  serveCity,
} from '../../../../src/infrastructure/persistence/in-memory/in-memory-served-cities';

describe('in memory served cities', () => {
  it('should return served city', async () => {
    const servedCity = ServedCity.fromString('mtl');
    pipe(servedCity, E.match(TE.left, serveCity));
    const served = await pipe(servedCity, E.match(TE.left, isServedCity))();
    expect(served).toMatchObject(E.right(true));
  });
});
