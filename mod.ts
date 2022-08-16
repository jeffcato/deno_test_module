export const sum = (...numbers: number[]): number =>
  numbers.reduce((x, y) => x + y, 0);

export const prod = (...numbers: number[]): number =>
  numbers.reduce((x, y) => x * y, 1);
