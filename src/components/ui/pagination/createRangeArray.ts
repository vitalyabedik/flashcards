/**

 Helper function that creates an array of integers in a given range.
 @param {number} start - The start of the range.
 @param {number} end - The end of the range.
 @returns {Array} An array of integers within the specified range.
 */

export const createRangeArray = (start: number, end: number): number[] => {
  const array: number[] = []

  for (let i = start; i <= end; i++) {
    array.push(i)
  }

  return array
}
