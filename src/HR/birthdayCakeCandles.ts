/** any */
export function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let velaMax = 0;
  let velas = 0;
  candles.forEach((element) => {
    if (element > velaMax) {
      velaMax = element;
      velas = 1;
    } else if (element === velaMax) {
      velas++;
    }
  });
  return velas;
}
