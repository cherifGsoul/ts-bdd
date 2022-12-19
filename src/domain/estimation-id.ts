import { Brand } from './brand';
import { validate } from 'uuid';

export type EstimationId = Brand<string, 'EstimationId'>;

export const fromString = (s: string): EstimationId => {
  if (!validate(s)) {
    throw new Error('estimation id must be a valid uuid');
  }
  return s as EstimationId;
};
