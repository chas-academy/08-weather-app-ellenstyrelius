import { getFahrenheitTemp } from './Weather';

// happy path :)
test('Celsius converts to Fahrenheit', () => {
  const result = getFahrenheitTemp(10);
  expect(result).toBe(50);
});

test('Celsius converts to Fahrenheit', () => {
  const result = getFahrenheitTemp(-10);
  expect(result).toBe(14);
});
