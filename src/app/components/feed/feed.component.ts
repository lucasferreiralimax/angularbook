import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    console.log(event);
  }

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

  constructor() { }

  ngOnInit() {
    console.log(document.querySelector('.feed'))
    let test = () => console.log("teste",)
    window.addEventListener("resize", test);
  }

}
