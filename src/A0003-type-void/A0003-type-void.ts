function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Antunes',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Leonardo', 'Antunes');
pessoa.exibirNome();
