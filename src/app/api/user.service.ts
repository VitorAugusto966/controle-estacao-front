import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,) { }

  getAll()
  {
    return this.http
    .get(`${urlBase}/users`)
    .toPromise();
  }

  create(user: any) {
    return this.http
    .post(`${urlBase}/users`, user)
    .toPromise();
  }

  update(user:any)
  {
    return this.http
    .put(`${urlBase}/users/` + user.id,user)
    .toPromise();
  }
  
  delete(id:any)
  {
    return this.http.delete(`${urlBase}/users/` + id)
    .toPromise();
  }

  redefinir(object:any)
  {
    return this.http
    .post(`${urlBase}/redefinir`, object)
    .toPromise(); 
  }
}
