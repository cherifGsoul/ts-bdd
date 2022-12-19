import { Address } from '.';
import { Brand } from './brand';

export type Route = Brand<
  {
    origin: Address.Address;
    destination: Address.Address;
  },
  'Route'
>;

export const between = (
  origin: Address.Address,
  destination: Address.Address
): Route => {
  return { origin, destination } as Route;
};
