import { getAverage } from 'src/app'

test('The arithmetic mean of 1 and 2 to equal 1.5', () => {
  expect(getAverage(1, 2)).toBe(1.5)
})
