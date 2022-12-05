import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient,) { }

  getAll()
  {
    return this.http
    .get(`${urlBase}/estacoes`)
    .toPromise();
  }

  create(station: any) {
    return this.http
    .post(`${urlBase}/estacoes`, station)
    .toPromise();
  }
}
