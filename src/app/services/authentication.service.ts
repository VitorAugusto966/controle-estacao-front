import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string = 'http://localhost:3000';
  private token: string = null;

  constructor(private http: HttpClient) {}

  async login(usuario): Promise<boolean> {
    if (usuario) {
      return this.http
        .post<boolean>(`${this.baseUrl}/login`, usuario)
        .toPromise()
        .then((resultado: any) => {
          this.token = resultado.token;
          return true;
        })
        .catch((err) => {
          this.token = null;
          return false;
        });
    }
    return false;
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isLogado(): boolean {
    return this.token ? true : false;
  }

   getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return httpOptions;
  }

}