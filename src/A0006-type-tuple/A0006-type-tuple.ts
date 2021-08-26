const dadosCliente: [number, string] = [1, 'Luiz'];
const dadosCliente1: readonly [number, string, string?] = [1, 'Leonardo'];
const dadosCliente2: [number, string, ...string[]] = [1, 'a', 'b', 'c', 'd'];

dadosCliente[1] = 'Leo';
// dadosCliente1.pop();

console.log(dadosCliente);
