import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  feed = [
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "I am your father.",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Faça ou não faça. A tentativa não existe.",
    },
    {
      "name": "Luke",
      "photo": "assets/luke.jpg",
      "content": "Eu nunca treinarei outra geração de Jedi.",
    },
    {
      "name": "HanSolo",
      "photo": "assets/hansolo.jpg",
      "content": "Nessas ruas perigosas, um jovem luta pela sobrevivência, mas anseia por voar entre as estrelas.",
    },
    {
      "name": "Chewbacca",
      "photo": "assets/chewbacca.jpg",
      "content": "RWGWGWARAHHHHWWRGGWRWRW.",
    }
  ]

  addFeed(text: string) {
    this.feed.unshift({
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": text
    })
    this.setFeed()
  }

  setFeed() {
    localStorage.setItem('feed', JSON.stringify(this.feed))
  }

  getFeed() {
    return of(this.feed)
  }
}
