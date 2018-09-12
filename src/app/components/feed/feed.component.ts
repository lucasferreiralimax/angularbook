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
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      "name": "Luke",
      "photo": "assets/luke.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    console.log(document.querySelector('.feed'))
    let test = () => console.log("teste",)
    window.addEventListener("resize", test);
  }

}
