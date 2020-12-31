import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.sass']
})
export class MensagensComponent implements OnInit {

  @ViewChild('message', {static: true}) messageContent: ElementRef;

  chats = [
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "What is the force?",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Do. Or do not. There is no try.",
    },
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "I don't understand",
    },
    {
      "name": "Lucas",
      "photo": "assets/skywalker.jpg",
      "content": "Do you help me?",
    },
    {
      "name": "Yoda",
      "photo": "assets/yoda.jpg",
      "content": "Luminous beings are we…not this crude matter.",
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

  pushMessage(value: string) {
    if(value) {
      this.chats.push({
        "name": "Yoda",
        "photo": "assets/yoda.jpg",
        "content": value,
      })
      this.messageContent.nativeElement.value = ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
