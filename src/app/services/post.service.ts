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
      "date": "15 de Setembro às 15:33",
      "content": "I am your father.",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "date": "15 de Setembro às 15:33",
      "content": "Faça ou não faça. A tentativa não existe.",
    },
    {
      "name": "Luke",
      "photo": "assets/luke.jpg",
      "date": "15 de Setembro às 15:33",
      "content": "Eu nunca treinarei outra geração de Jedi.",
    },
    {
      "name": "HanSolo",
      "photo": "assets/hansolo.jpg",
      "date": "15 de Setembro às 15:33",
      "content": "Nessas ruas perigosas, um jovem luta pela sobrevivência, mas anseia por voar entre as estrelas.",
    },
    {
      "name": "Chewbacca",
      "photo": "assets/chewbacca.jpg",
      "date": "15 de Setembro às 15:33",
      "content": "RWGWGWARAHHHHWWRGGWRWRW.",
    }
  ]

  addFeed(text: string) {
    this.feed.unshift({
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "date": "15 de Setembro às 15:33",
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
