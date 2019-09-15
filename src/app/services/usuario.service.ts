import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  user = {
    "name": "Lucas",
    "photo": "assets/skywalker.jpg",
    "content": "I am your father.",
  }

  getUser() {
    return this.user
  }
}
