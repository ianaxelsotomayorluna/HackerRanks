import { aVeryBigSum } from './HR/aVeryBigSum';
import { compareTriplets } from './HR/compareTriplets';
import { diagonalDifference } from './HR/diagonalDifference';
import { simpleArraySum } from './HR/simpleArraySum';
import { plusMinus } from './HR/plusMinus';
import { miniMaxSum } from './HR/miniMaxSum';
import { staircase } from './HR/staircase';
import { birthdayCakeCandles } from './HR/birthdayCakeCandles';
import { timeConversion } from './HR/timeConversion';
/**
  FUNCION MAIN DONDE MANDAREMOS A LLAMAR TODAS NUETRAS FUNCIONES PARA PROBAR LOS CODIGOS 
 */
function main() {
  console.log('---------- Respuesta al axelo----------\n');
  console.log(simpleArraySum([1, 2, 3]));
  console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
  console.log(aVeryBigSum([10000001, 10000002, 10000003, 10000004]));
  console.log(
    diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ])
  );
  console.log(plusMinus([4, -200, 0]));
  console.log(miniMaxSum([1, 3, 5, 7, 9]));
  console.log(staircase(5));
  console.log(birthdayCakeCandles([4, 4, 1, 3]));
  const test = '07:05:45PM';
  const result = timeConversion(test);
  console.log('Result: ', result);
}
main();
