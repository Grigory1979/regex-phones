import Validator from '../validator';

test('Converting a phone number to a template', () => {
  expect(Validator.phoneTransform('8 (927) 000-00-00')).toBe('+79270000000');
  expect(Validator.phoneTransform('+7 960 000 00 00')).toBe('+79600000000');
  expect(Validator.phoneTransform('+86 000 000 0000')).toBe('+860000000000');
});