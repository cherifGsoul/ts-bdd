import { Brand } from './brand';
import { isPositiveNumber } from './predicates';

export type Distance = Brand<number, 'Distance'>;

export const fromNumber = (s: number): Distance => {
  if (!isPositiveNumber(s)) {
    throw new Error('Distance must be a valid positive number');
  }
  return s as Distance;
};
