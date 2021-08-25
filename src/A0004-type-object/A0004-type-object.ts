const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// ObjetoA.chaveA = 'Outro valor';
ObjetoA.chaveC = 'Nova chave';
ObjetoA.chaveD = 'Nova chave';

console.log(ObjetoA);
