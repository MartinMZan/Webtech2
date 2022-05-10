import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TermekController } from './termek.controller.service';
import { TermekDTO, TermekResponseDTO, CreateTermekDTO } from './termek';
import { TermekResponse } from './termek.model';

@Injectable()
export class HttpProductController implements TermekController {
    private readonly BASE_URL = `http://localhost:5000/api/termek`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createTermek(request: CreateTermekDTO): Observable<TermekResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: TermekResponse) => res)
        );
    }
    public editTermek(request: TermekDTO): Observable<TermekDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: TermekDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deleteTermek(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getTermeks(): Observable<TermekDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: TermekDTO[]) => res)
        );
    }

}
