// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');

const array: readonly string[] = ['Luiz', 'Otavio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otavio'];

console.log(result);
console.log(concatenacao);
