import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlBase = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class AcessService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http
    .get(`${urlBase}/acessos`)
    .toPromise();
  }

  create(acess: any) {
    return this.http
    .post(`${urlBase}/acessos`, acess)
    .toPromise();
  }

  
}
