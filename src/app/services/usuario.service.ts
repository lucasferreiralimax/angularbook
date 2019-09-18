import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  user = {
    "id_user": "lucas",
    "name": "Lucas Ferreira Lima",
    "photo": "assets/skywalker.jpg",
    "background": "assets/cover.jpg",
    "bio": "Fé",
    "location": "Pombal, Paraíba, Brasil",
    "relationship": "Solteiro",
    "since": "Maio de 2012",
    "site": "curriculo-gratis.web.app"
  }

  getUserBasic() {
    let basic = {
      id_user: this.user.id_user,
      name: this.user.name,
      photo: this.user.photo,
      location: this.user.location
    }
    return basic
  }
  getUser() {
    return this.user
  }
}
