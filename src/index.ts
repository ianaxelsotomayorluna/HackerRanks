import { compareTriplets } from './HR/compareTriplets';
import { simpleArraySum } from './HR/simpleArraySum';

/**
  FUNCION MAIN DONDE MANDAREMOS A LLAMAR TODAS NUETRAS FUNCIONES PARA PROBAR LOS CODIGOS 
 */
function main() {
  console.log('---------- Respuesta al axelo----------\n');
  console.log(simpleArraySum([1, 2, 3]));
  console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
}
main();
