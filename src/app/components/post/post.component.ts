import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  value = ''
  erroSize = false
  btnSubmit = false

  update(value: string) {
    this.value = value
    if(value.length <= 700 && value.length > 0) {
      this.erroSize = false
      this.btnSubmit = true
    } else if(value.length > 700) {
      this.erroSize = true
      this.btnSubmit = false
    } else {
      this.erroSize = false
      this.btnSubmit = false
    }
  }

  newPost(value) {
    console.log(value)
    this.postService.addFeed(value)
  }

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

}
