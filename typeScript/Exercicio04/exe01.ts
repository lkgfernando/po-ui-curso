class pessoa {
  public nome = "Fernando";
  public sobrenome = "Rodrigues";
  private nomeCompleto = `${this.nome} ${this.sobrenome}`;

  public constructor() {}

  public retNomeCompleto() {
    return this.nomeCompleto;
  }
}

const joao = new pessoa();

joao.retNomeCompleto();
