/** any */
export function aVeryBigSum(ar: number[]): number {
  let bigSum = 0;
  for (let i = 0; i < ar.length; i++) {
    bigSum += ar[i];
  }
  return bigSum;
}
