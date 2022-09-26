/** any */
export function miniMaxSum(arr: number[]): void {
  const longitud = arr.length;
  let sumaMinima = 0;
  let sumaMaxima = 0;
  const orden = arr.sort((a, b) => a - b);

  for (let i = 1; i < longitud; i++) {
    sumaMaxima += orden[i];
  }
  for (let i = 0; i < longitud - 1; i++) {
    sumaMinima += orden[i];
  }
  console.log(sumaMinima, sumaMaxima);
}
