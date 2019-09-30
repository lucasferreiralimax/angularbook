import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;
  private guard;

  validationSet(log) {
    this.guard = log;
  }

  logout() {
    localStorage.removeItem("usuario")
    this.guard = !this.guard;
  }

  validation() {
    return this.guard;
  }

  loginUser(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(`${this.apiURL}/login`, obj, httpOptions)
  }

  registerUser(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(`${this.apiURL}/cadastro`, obj, httpOptions)
  }
}
