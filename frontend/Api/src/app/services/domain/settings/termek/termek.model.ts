import { TermekDTO as TermekDTO, TermekResponseDTO as TermekResponseDTO } from './termek';

export interface Termek {
    _id: string;
    name: string;
    description: string;
    date: Date;
    price: number;
    amount: number;
}

export interface TermekResponse {
    _id: string;
}
export function toTermeks(productResponse: TermekDTO[]): Termek[] {
    return productResponse.map(dto => toTermek(dto));
}

export function toTermek(termekDTO: TermekDTO): Termek {
    return {
        _id: termekDTO._id,
        name: termekDTO.name,
        description: termekDTO.description,
        date: termekDTO.date,
        price: termekDTO.price,
        amount: termekDTO.amount
    };
}

export function toCreatedTermek(termekDTO: TermekResponseDTO): TermekResponse {
    return {
        _id: termekDTO._id,
    };
}

