/** any */
export function diagonalDifference(arr: number[][]): number {
  let diff = 0;
  const length = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][i] - arr[i][length - i];
  }
  return Math.abs(diff);
}
