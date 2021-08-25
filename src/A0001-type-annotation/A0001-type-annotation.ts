/* eslint-disable */
// type annotations - tipos básicos

let nome: string = 'Leonardo';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b'];
let stringArray2: string[] = ['a', 'b'];

// Objetos - ? - opcional
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Robs',
  idade: 15,
};

function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
