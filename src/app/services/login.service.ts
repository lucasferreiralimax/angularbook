import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private api = "https://angularbookapi.herokuapp.com"
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
    return this.http.post(`${this.api}/login`, obj, httpOptions)
  }

  registerUser(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(`${this.api}/cadastro`, obj, httpOptions)
  }
}
