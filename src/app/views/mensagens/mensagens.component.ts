import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.sass']
})
export class MensagensComponent implements OnInit {

  chats = [
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
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    },
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  ]

  value = ''
  erroSize = false
  btnSubmit = false

  update(value: string) {
    this.value = value
    if(value.length <= 300 && value.length > 0) {
      this.erroSize = false
      this.btnSubmit = true
    } else if(value.length > 300) {
      this.erroSize = true
      this.btnSubmit = false
    } else {
      this.erroSize = false
      this.btnSubmit = false
    }
  }

  pushMensagem(value: string) {
    if(value) {
      this.chats.push({
        "name": "Yoda",
        "photo": "assets/yoda.jpg",
        "content": value,
      })      
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
