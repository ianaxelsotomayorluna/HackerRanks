/** any */
export function plusMinus(array: number[]): void {
  const longitud: number = array.length;
  let numerosPositivos: number = 0;
  let numerosNegativos: number = 0;
  let numeroCeros: number = 0;
  for (let i = 0; i < longitud; i++) {
    if (array[i] > 0) {
      numerosPositivos++;
    }
    if (array[i] < 0) {
      numerosNegativos++;
    }
    if (array[i] === 0) {
      numeroCeros++;
    }
  }
  const divisionPositivos = numerosPositivos / longitud;
  const divisionNegativos = numerosNegativos / longitud;
  const divisionCeros = numeroCeros / longitud;
  console.log(divisionPositivos.toFixed(6));
  console.log(divisionNegativos.toFixed(6));
  console.log(divisionCeros.toFixed(6));
}
