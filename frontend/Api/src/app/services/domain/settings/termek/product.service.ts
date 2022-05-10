import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TermekDTO, TermekResponseDTO } from './termek';
import { TermekController } from './termek.controller.service';
import { toCreatedTermek, toTermeks } from './termek.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private controller: TermekController) { }

    getTermeks(): Observable<TermekDTO[]> {
        return this.controller.getTermeks().pipe(map((response: TermekDTO[]) => {
            return response ? toTermeks(response) : null;
        }));
    }
    /*   name: TermekDTO.name,
      description: TermekDTO.description,
      date: TermekDTO.date,
      price: TermekDTO.price,
      amount: TermekDTO.amount */
    createTermek(name: string, description: string, date: Date, price: number, amount: number) {
        return this.controller.createTermek({ name, description, date, price, amount }).pipe(map((response: TermekResponseDTO) => {
            return response ? toCreatedTermek(response) : null;
        }));
    }

    // tslint:disable-next-line: variable-name
    editTermek(_id: string, name: string, description: string, isbn: string, date: Date, price: number, amount: number) {
        return this.controller.editTermek({ _id, name, description, date, price, amount }).pipe();
    }

    // tslint:disable-next-line: variable-name
    deleteTermek(_id: string) {
        return this.controller.deleteTermek(_id).pipe();
    }

}
