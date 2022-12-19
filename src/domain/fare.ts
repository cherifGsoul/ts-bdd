import { Brand } from './brand';
import { isPositiveNumber } from './predicates';

export type Fare = Brand<number, 'Fare'>;

export const fromNumber = (s: number): Fare => {
  if (!isPositiveNumber(s)) {
    throw new Error('Fare must be a valid positive number');
  }
  return s as Fare;
};
