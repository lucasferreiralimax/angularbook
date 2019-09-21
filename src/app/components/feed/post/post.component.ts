import { Component, OnInit, Input, ElementRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';

import { PostService } from '@services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() user: any;
  @Output() someEvent = new EventEmitter<string>();
  @ViewChild('postContent', {static: true}) postContent: ElementRef;

  constructor(private postService:PostService) { }

  @HostListener('click', ['$event.target']) onClick(el) {
    if(el.className == "post__photo") {
      this.postContent.nativeElement.focus()
    }
  }

  ngOnInit() {
  }

  callParent() {
    this.someEvent.next();
  }

  onSubmitPost() {
    let { email, _id, name } = JSON.parse(localStorage.getItem("usuario"))
    let postData = {
      iduser: _id,
      name: name,
      email: email,
      photo: "assets/skywalker.jpg",
      data: new Date(),
      comment: ""
    };
    if(this.postContent.nativeElement.textContent) {
      postData.comment = this.postContent.nativeElement.textContent;
      this.postContent.nativeElement.textContent = ''
    }
    // console.log(this.postContent.nativeElement.textContent)

    // console.warn('Your order has been submitted', postData);
    console.log(postData)
    this.postService.setPost(postData).subscribe(
      res => {
        console.log("testes", res);
        this.someEvent.next();
      },
      err => {
        console.log("Error occured");
      }
    )
    // this.registerForm.reset();
  }

}
