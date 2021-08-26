enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

// console.log(Cores.VERMELHO);
// console.log(Cores[0]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);
