/** any */
export function staircase(n: number): void {
  // Write your code here
  let stair: string = '';
  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      stair += ' ';
    }
    for (let h = 0; h < i; h++) {
      stair += '#';
    }
    stair += '\n';
  }
  console.log(stair);
}
