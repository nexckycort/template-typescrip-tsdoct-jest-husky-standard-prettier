/**
 * Returns the average of two numbers.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */
export function getAverage(x: number, y: number): number {
  return (x + y) / 2.0
}

console.log(getAverage(1, 2))
