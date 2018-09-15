import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AmigosComponent implements OnInit {

  amigos = [
    {
      "name": "Chewbacca",
      "status": true,
      "photo": "assets/chewbacca.jpg"
    },
    {
      "name": "Yoda",
      "status": true,
      "photo": "assets/yoda.jpg"
    },
    {
      "name": "Luke",
      "status": false,
      "photo": "assets/luke.jpg"
    },
    {
      "name": "Massassi",
      "status": false,
      "photo": "assets/massassi.png",
    },
    {
      "name": "HanSolo",
      "status": true,
      "photo": "assets/hansolo.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
