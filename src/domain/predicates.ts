import * as NES from 'newtype-ts/lib/NonEmptyString';
import * as PI from 'newtype-ts/lib/PositiveInteger';

export const isNonEmptyString = <T>(s: unknown): s is T =>
  typeof s === 'string' && NES.isNonEmptyString(s);
export const isPositiveInteger = <T>(n: unknown): n is T =>
  typeof n === 'number' && PI.isPositiveInteger(n);
