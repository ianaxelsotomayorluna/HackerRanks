/** any */
export function compareTriplets(a: number[], b: number[]): number[] {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    }
    if (a[i] < b[i]) {
      bob++;
    }
  }
  return [alice, bob];
}
