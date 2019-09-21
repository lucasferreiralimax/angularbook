import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(obj) {
    console.log(obj)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://localhost:3000/api/login", obj, httpOptions)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem("usuario", JSON.stringify(res))
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
