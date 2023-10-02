export const createRangeArray = (start: number, end: number): number[] => {
  const array: number[] = []

  for (let i = start; i <= end; i++) {
    array.push(i)
  }

  return array
}
