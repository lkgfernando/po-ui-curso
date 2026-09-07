type TName = {
  firstname: string;
  lastname: string;
};

type TAddress = {
  city: string;
  street: string;
  number: number;
};

export interface ICliente {
  id: number;
  name: TName;
  email: string;
  address: TAddress;
}
