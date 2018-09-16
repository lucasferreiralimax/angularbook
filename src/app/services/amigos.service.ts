import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor() { }

  amigos = [
    {
      "name": "Chewbacca",
      "status": true,
      "photo": "assets/chewbacca.jpg",
      "quotes": "RWGWGWARAHHHHWWRGGWRWRW"
    },
    {
      "name": "Yoda",
      "status": true,
      "photo": "assets/yoda.jpg",
      "quotes": "Que a Força esteja com você."
    },
    {
      "name": "Luke",
      "status": false,
      "photo": "assets/luke.jpg"
    },
    {
      "name": "Massassi",
      "status": false,
      "photo": "assets/massassi.png"
    },
    {
      "name": "HanSolo",
      "status": true,
      "photo": "assets/hansolo.jpg",
      "quotes": "Eu vou ser piloto. O melhor da galáxia."
    }
  ]

  getAmigos() {
    return of(this.amigos)
  }
}
