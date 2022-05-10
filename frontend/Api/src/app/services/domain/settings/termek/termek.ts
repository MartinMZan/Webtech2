export interface TermekDTO {
  _id: string;
  name: string;
  description: string;
  date: Date;
  price: number;
  amount: number;
}

export interface CreateTermekDTO {
  name: string;
  description: string;
  date: Date;
  price: number;
  amount: number;
}

export interface TermekResponseDTO {
  _id: string;
}
