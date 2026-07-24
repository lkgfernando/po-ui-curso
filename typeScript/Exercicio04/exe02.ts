const exe02 = () => {
  let nome: string;

  nome = "Fernando Rodrigues";
};
const soma1 = (p1: number): number => p1++;
function sub1(p1: number): number {
  return p1--;
}
export class pessoa01 {
  public nome: string;
  public constructor(nome: string) {
    this.nome = nome;
  }
}
// Array
const soma = (p: number[]): number => {
  let res: number = 0;
  p.forEach((el) => {
    res += el;
  });
  return res;
};

// tipo any
let nome: Array<any>;
nome = ["", 0, true, "Fernando Rodrigues"];
