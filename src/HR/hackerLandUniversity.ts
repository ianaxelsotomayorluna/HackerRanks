/** any */
export function gradingStudents(grades: number[]): any {
  const miltipleOf = 5;
  const numberAround = 2;
  const gradesEvalued: number[] = [];
  grades.forEach((element, i) => {
    if (element >= 38 && element % miltipleOf > numberAround) {
      if (element % miltipleOf === 4) {
        gradesEvalued[i] = element + 1;
      } else {
        gradesEvalued[i] = element + numberAround;
      }
    } else {
      gradesEvalued[i] = element;
    }
  });
  return gradesEvalued;
}
