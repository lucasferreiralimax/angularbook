import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  feed = [
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "Luke",
      "photo": "assets/luke.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "HanSolo",
      "photo": "assets/hansolo.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "Chewbacca",
      "photo": "assets/chewbacca.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
