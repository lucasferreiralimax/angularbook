import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUser() { return JSON.parse(localStorage.getItem("user")) }

  getUserMockado() {
    return {
      "id_user": "lucas",
      "name": "Lucas Ferreira Lima",
      "photo": "assets/skywalker.jpg",
      "background": "assets/cover.jpg",
      "bio": "Fé",
      "location": "Pombal, Paraíba, Brasil",
      "relationship": "Solteiro",
      "since": "Maio de 2012",
      "site": "criar-curriculo.web.app"
    }
  }

}
