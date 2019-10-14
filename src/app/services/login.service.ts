import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CookiesService } from '@services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookieService: CookiesService) { }

  private apiURL = environment.apiURL;

  validationSet(value) {
    if(value) {
      localStorage.setItem("user", JSON.stringify(value.user))
      localStorage.setItem("c", value.c)
      this.cookieService.setCookie("c", value.c, 3600 * 1000)
    } else {
      localStorage.removeItem("user")
      localStorage.removeItem("c")
      this.cookieService.deleteCookie("c")
    }
  }

  logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("c")
    this.cookieService.deleteCookie("c")
  }

  validation() { return this.cookieService.checkCookie("c") }
  currentToken() { return localStorage.getItem("c") || this.cookieService.getCookie("c"); }

  loginUser(obj) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(`${this.apiURL}/login`, obj, httpOptions)
  }

  registerUser(obj) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(`${this.apiURL}/cadastro`, obj, httpOptions)
  }
}
