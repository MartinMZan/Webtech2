import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TermekResponse } from './termek.model';
import { CreateTermekDTO as CreateTermekDTO, TermekDTO as TermekDTO, } from './termek';

@Injectable()
export abstract class TermekController {
    public abstract getTermeks(): Observable<TermekDTO[]>;
    public abstract createTermek(request: CreateTermekDTO): Observable<TermekResponse>;
    public abstract editTermek(request: TermekDTO): Observable<TermekDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deleteTermek(_id: string);
}
