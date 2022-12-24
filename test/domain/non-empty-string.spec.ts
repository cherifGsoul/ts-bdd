import { NonEmptyString } from '../../src/domain';

describe('non empty string', () => {
  it('should not accept empty strings', () => {
    expect(() => NonEmptyString.fromString('')).toThrowError();
  });

  it('should accept valid strings', () => {
    const val: NonEmptyString.NonEmptyString = NonEmptyString.fromString('foo');
    expect(NonEmptyString.fromString('foo')).toEqual('foo');
  });
});
