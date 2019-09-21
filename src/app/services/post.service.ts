import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  feed;
  // [
  //   {
  //     "name": "Lucas",
  //     "photo": "assets/skywalker.jpg",
  //     "date": "15 de Setembro às 15:33",
  //     "content": "I am your father.",
  //   },
  //   {
  //     "name": "Yoda",
  //     "photo": "assets/yoda.jpg",
  //     "date": "15 de Setembro às 15:33",
  //     "content": "Faça ou não faça. A tentativa não existe.",
  //   },
  //   {
  //     "name": "Luke",
  //     "photo": "assets/luke.jpg",
  //     "date": "15 de Setembro às 15:33",
  //     "content": `Eu nunca treinarei outra geração de Jedi
  //     <br>
  //     Então se prepara gurizada que a força esteja com você.
  //     <br>
  //     <br>
  //     Abraços Fé
  //     `,
  //   },
  //   {
  //     "name": "HanSolo",
  //     "photo": "assets/hansolo.jpg",
  //     "date": "15 de Setembro às 15:33",
  //     "content": "Nessas ruas perigosas, um jovem luta pela sobrevivência, mas anseia por voar entre as estrelas.",
  //   },
  //   {
  //     "name": "Chewbacca",
  //     "photo": "assets/chewbacca.jpg",
  //     "date": "15 de Setembro às 15:33",
  //     "content": "RWGWGWARAHHHHWWRGGWRWRW.",
  //   }
  // ]

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

  getListagem() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://localhost:3000/api/list/users/posts", httpOptions)
  }

  setPost(obj) {

    console.log(obj);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://localhost:3000/api/insert/user/post", obj, httpOptions)
      // .subscribe(
      //   res => {
      //     console.log(res);
      //   },
      //   err => {
      //     console.log("Error occured");
      //   }
      // );
  }
}
