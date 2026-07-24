//Interfaces

interface IPessoa {
  nome: string;
  idade: number;
  nascimento: Date;

  getNome(): string;
  getIdade(): number;
}

export class pessoa implements IPessoa {
  public nome: string;
  public nascimento: Date;
  public idade: number;

  constructor(nome: string, nascimento: Date, idade: number) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.idade = idade;
  }

  public getNome(): string {
    return "";
  }

  public getIdade(): number {
    return 0;
  }
}
